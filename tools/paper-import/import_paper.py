#!/usr/bin/env python3
"""Turn a past-question PDF + its answer key into a draft for review.

    python3 tools/paper-import/import_paper.py \
        --paper ~/papers/utme-2001-english.pdf \
        --key   ~/papers/answer-key-2001-2020.pdf \
        --subject english --year 2001

What it does, all on your own machine (no AI, no internet):
  1. Reads every page. Pages with real text are read directly (pdftotext);
     scanned/photographed pages are read with OCR (tesseract).
  2. Splits the text into passages, questions and options A-E.
  3. Finds the year's section in the answer key and attaches each answer.
  4. Flags anything it is unsure about (missing answer, odd option count,
     lost italics/underlining, gaps in numbering, OCR noise...).
  5. Writes imports/work/<subject>-<year>/ with draft.json, page images and
     the text it read, then opens the review page (review_server.py).

Nothing reaches the app until you approve it on the review page and run
add_to_bank.py.
"""

import argparse
import datetime
import json
import os
import re
import shutil
import subprocess
import sys
from collections import Counter

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..'))

# ── Text extraction ─────────────────────────────────────────────────────

def need(cmd):
    if not shutil.which(cmd):
        sys.exit(f"'{cmd}' is not installed. Run:  bash tools/paper-import/setup.sh")


def page_count(pdf):
    out = subprocess.run(['pdfinfo', pdf], capture_output=True, text=True, check=True).stdout
    m = re.search(r'^Pages:\s+(\d+)', out, re.M)
    return int(m.group(1)) if m else 0


def pdf_page_text(pdf, n):
    return subprocess.run(['pdftotext', '-f', str(n), '-l', str(n), pdf, '-'],
                          capture_output=True, text=True).stdout


def ocr_page(pdf, n, workdir):
    prefix = os.path.join(workdir, f'ocr-{n:03d}')
    subprocess.run(['pdftoppm', '-r', '300', '-gray', '-f', str(n), '-l', str(n), '-png', '-singlefile',
                    pdf, prefix], check=True)
    img = prefix + '.png'
    try:
        # psm 3 = automatic layout, which copes with two-column exam papers.
        return subprocess.run(['tesseract', img, '-', '--psm', '3'],
                              capture_output=True, text=True).stdout
    finally:
        os.remove(img)


def render_preview(pdf, n, pages_dir):
    prefix = os.path.join(pages_dir, f'page-{n:03d}')
    subprocess.run(['pdftoppm', '-r', '110', '-f', str(n), '-l', str(n), '-png', '-singlefile', pdf, prefix],
                   check=True)


def read_pdf(pdf, workdir, force_ocr=False, previews_dir=None):
    """Returns [(page_number, text, used_ocr)]."""
    pages = []
    for n in range(1, page_count(pdf) + 1):
        text = '' if force_ocr else pdf_page_text(pdf, n)
        used_ocr = False
        if len(re.sub(r'\s', '', text)) < 40:  # no usable text layer — it's a scan
            text, used_ocr = ocr_page(pdf, n, workdir), True
        if previews_dir:
            render_preview(pdf, n, previews_dir)
        pages.append((n, text, used_ocr))
        print(f'  page {n}: {"OCR" if used_ocr else "text"}, {len(text)} chars')
    return pages


# ── Cleaning ────────────────────────────────────────────────────────────

def clean_lines(pages):
    """[(page, line)] with page furniture (repeated headers/footers, bare page
    numbers) removed."""
    # Letters only, so OCR spacing/punctuation slips ("NOT A" vs "NOTA") still match.
    norm = lambda s: re.sub(r'[^a-z]', '', s.lower())
    counts = Counter()
    for _, text, _ in pages:
        counts.update({norm(l) for l in text.splitlines() if l.strip()})
    repeated = {k for k, c in counts.items() if c >= 3 and len(pages) >= 3 and 8 <= len(k) < 80}
    out = []
    for n, text, _ in pages:
        for line in text.replace('\f', '\n').splitlines():
            s = line.rstrip()
            t = s.strip()
            if not t:
                out.append((n, ''))
                continue
            if re.fullmatch(r'(page\s*)?[-–]?\s*\d{1,3}\s*[-–]?', t, re.I):
                continue
            if norm(t) in repeated:
                continue
            out.append((n, t))
    return out


def join_split_ranges(lines):
    """'...answer questions' + '1 to 5.' -> one line, so the range is seen."""
    out = []
    for page, line in lines:
        if out and line and out[-1][1] and re.search(r'questions?(\s+\d{1,3}\s*(?:-|–|—|to|and)?)?\s*$', out[-1][1], re.I) \
                and re.match(r'\d{1,3}\b|(?:-|–|—|to|and)\s*\d', line):
            out[-1] = (out[-1][0], out[-1][1] + ' ' + line)
        else:
            out.append((page, line))
    return out


# ── Parsing ─────────────────────────────────────────────────────────────

RE_PASSAGE = re.compile(r'^(?:COMPREHENSION\s+)?PASSAGE\s*([IVXLC]+|\d+)?\b\.?\s*(.*)$', re.I)
RE_RANGE = re.compile(r'questions?\s+(\d{1,3})\s*(?:-|–|—|to|and)\s*(\d{1,3})', re.I)
RE_Q = re.compile(r'^(\d{1,3})\s*(?:[.)]\s*|,\s+)(.*)$')   # OCR often reads '4.' as '4,'
RE_OPT = re.compile(r'^\(?([A-Ea-e])\s*[.),]\s+(.*)$')
RE_INLINE_OPT = re.compile(r'(?:^|\s)\(?([A-E])[.),]\s+')
EMPHASIS = re.compile(r'italic|underlin|bold|capital|stress|highlight|emphas', re.I)


def split_inline_options(text):
    """'A. go B. went C. gone D. going' -> [('A','go'),('B','went'),...] or None."""
    marks = list(RE_INLINE_OPT.finditer(text))
    letters = [m.group(1) for m in marks]
    if len(marks) < 2 or letters != [chr(65 + i) for i in range(len(letters))]:
        return None
    return [(m.group(1), text[m.end():marks[i + 1].start() if i + 1 < len(marks) else len(text)].strip())
            for i, m in enumerate(marks)]


def parse(lines):
    blocks = []            # passage blocks and standalone questions, in paper order
    passage = None         # passage block currently collecting text
    passage_range = None   # (start, end) question numbers belonging to it
    instr = None           # {'text','start','end'} group instruction for standalone questions
    pending_range = None   # range from an instruction line seen just before a PASSAGE heading
    pending_text = None
    q = None               # question being built
    last_num = 0
    open_instr = None      # (dict, field) of the instruction the last line added to — wrapped lines continue it

    def finish_q():
        nonlocal q
        if q:
            q['stem'] = ' '.join(q['stem']).strip()
            q['options'] = [o.strip() for o in q['options']]
            q = None

    def attach(question):
        n = question['number']
        if passage and (passage_range is None or passage_range[0] <= n <= passage_range[1]):
            passage['questions'].append(question)
        else:
            if instr and instr['start'] <= n <= instr['end']:
                question['instruction'] = instr['text']
            blocks.append({'type': 'standalone', 'question': question})

    for page, line in lines:
        if not line:
            if passage is not None and not passage['questions'] and q is None:
                passage['paras'].append('')
            continue

        m = RE_PASSAGE.match(line)
        if m and len(line) < 120:
            finish_q()
            passage = {'type': 'passage', 'title': f"Passage {m.group(1) or ''}".strip(),
                       'instruction': pending_text or '', 'paras': [], 'questions': [], 'pages': [page], 'flags': []}
            passage_range = pending_range
            pending_range = pending_text = None
            rest = m.group(2).strip()
            if rest:
                r = RE_RANGE.search(rest)
                if r:
                    passage['instruction'], passage_range = rest, (int(r.group(1)), int(r.group(2)))
                else:
                    passage['paras'].append(rest)
            open_instr = (passage, 'instruction') if passage['instruction'] else None
            blocks.append(passage)
            continue

        r = RE_RANGE.search(line)
        if r and not RE_Q.match(line) and not RE_OPT.match(line):
            finish_q()
            rng = (int(r.group(1)), int(r.group(2)))
            is_passage_instr = re.search(r'passage|read the', line, re.I)
            if is_passage_instr and passage is not None and not passage['questions'] and not passage['instruction']:
                passage['instruction'], passage_range = line, rng
                open_instr = (passage, 'instruction')
            elif is_passage_instr:
                pending_range, pending_text = rng, line   # heading follows
                passage = None
                open_instr = None
            else:
                passage = None
                instr = {'text': line, 'start': rng[0], 'end': rng[1]}
                open_instr = (instr, 'text')
            continue

        # A wrapped instruction continues until its sentence ends.
        if open_instr and q is None and not RE_Q.match(line):
            target, field = open_instr
            if not re.search(r'[.:]$', target[field].strip()):
                target[field] = target[field].rstrip() + ' ' + line
                continue
        open_instr = None

        mq = RE_Q.match(line)
        if mq and 0 < int(mq.group(1)) <= 200 and (q is None or q['options'] or int(mq.group(1)) == last_num + 1):
            finish_q()
            n = int(mq.group(1))
            if passage and passage_range and n > passage_range[1]:
                passage = None
            q = {'number': n, 'stem': [], 'options': [], 'pages': [page], 'flags': []}
            if n != last_num + 1 and last_num:
                q['flags'].append(f'numbering jumps from {last_num} to {n} — check for a missed question')
            last_num = n
            rest = mq.group(2)
            inline = split_inline_options(rest)
            if inline and rest.lstrip().startswith(('A', '(A')):
                q['options'] = [t for _, t in inline]
            else:
                if inline:
                    first = RE_INLINE_OPT.search(rest)
                    q['stem'].append(rest[:first.start()])
                    q['options'] = [t for _, t in inline]
                else:
                    q['stem'].append(rest)
            attach(q)
            continue

        if q is not None:
            if page not in q['pages']:
                q['pages'].append(page)
            inline = split_inline_options(line)
            mo = RE_OPT.match(line)
            if inline and line.lstrip().startswith(('A', '(A', 'a')) or (inline and q['options']):
                q['options'].extend(t for _, t in inline)
            elif mo and ord(mo.group(1).upper()) - 65 == len(q['options']):
                q['options'].append(mo.group(2))
            elif q['options']:
                q['options'][-1] += ' ' + line        # option wraps onto next line
            else:
                q['stem'].append(line)
            continue

        if passage is not None:
            if page not in passage['pages']:
                passage['pages'].append(page)
            passage['paras'].append(line)
            continue
        # Anything else (cover-page text, general instructions) is ignored.

    finish_q()
    return blocks


def finalize(blocks):
    """Join passage paragraphs, add review flags."""
    for b in blocks:
        qs = b['questions'] if b['type'] == 'passage' else [b['question']]
        if b['type'] == 'passage':
            paras, cur = [], []
            for p in b.pop('paras'):
                if p == '':
                    if cur:
                        paras.append(' '.join(cur)); cur = []
                else:
                    cur.append(p)
            if cur:
                paras.append(' '.join(cur))
            b['text'] = '\n\n'.join(paras)
            if len(b['text']) < 200:
                b['flags'].append('passage text looks short — check nothing was cut off')
            if not qs:
                b['flags'].append('no questions were found for this passage')
            if re.search(r'_{2,}|\(\s*\d{1,3}\s*\)|\.{4,}', b['text']):
                b['cloze'] = True
        for q in qs:
            if not q['stem']:
                if b['type'] == 'passage' and b.get('cloze'):
                    q['stem'] = f"Choose the option that best fills gap {q['number']} in the passage."
                    q['flags'].append('gap-fill: question wording was added by the tool — check it reads well')
                else:
                    q['flags'].append('question text is empty')
            n = len(q['options'])
            if n < 2:
                q['flags'].append(f'only {n} option(s) found')
            elif n not in (4, 5):
                q['flags'].append(f'{n} options found (JAMB usually has 4)')
            full = (q.get('instruction', '') + ' ' + b.get('instruction', '') + ' ' + q['stem'])
            if EMPHASIS.search(full) and not re.search(r'\b[A-Z]{3,}\b', q['stem']):
                q['flags'].append('instruction refers to italics/underlining/stress that OCR cannot see — '
                                  'type the marked word in CAPITALS')
            junk = sum(1 for c in q['stem'] + ''.join(q['options']) if not (c.isalnum() or c.isspace() or c in ".,;:'\"?!()-–—/%&’‘“”"))
            if junk > 6:
                q['flags'].append('unusual characters — possible OCR errors')
    return blocks


# ── Answer key ──────────────────────────────────────────────────────────

def parse_key(text, year, subject):
    """Find the section of the key for `year` (and subject, if the key covers
    several) and return {question_number: 'A'..'E'} plus notes."""
    lines = text.splitlines()
    year_line = re.compile(rf'\b{year}\b')
    other_year = re.compile(r'\b(19[789]\d|20[0-4]\d)\b')
    starts = [i for i, l in enumerate(lines) if year_line.search(l)]
    notes = []
    if not starts:
        return {}, [f'year {year} not found in the answer key']
    # Prefer a heading that also names the subject.
    subj = re.compile(re.escape(subject.replace('_', ' ')), re.I)
    starts.sort(key=lambda i: 0 if any(subj.search(l) for l in lines[max(0, i - 2):i + 3]) else 1)
    best = {}
    for start in starts:
        end = len(lines)
        for j in range(start + 1, len(lines)):
            y = other_year.search(lines[j])
            if y and y.group(1) != str(year):
                end = j
                break
        section = '\n'.join(lines[start:end])
        section = year_line.sub(' ', section)
        found = {}
        conflicts = set()
        for num, letter in re.findall(r'(?<![\d])(\d{1,3})\s*[.):\-–]?\s*([A-Ea-e])\b', section):
            n, L = int(num), letter.upper()
            if n in found and found[n] != L:
                conflicts.add(n)
            found.setdefault(n, L)
        if len(found) > len(best):
            best, best_conflicts = found, conflicts
    if best:
        for n in sorted(best_conflicts):
            notes.append(f'question {n} appears twice in the key with different letters')
    return best, notes


def apply_key(blocks, key):
    for b in blocks:
        for q in (b['questions'] if b['type'] == 'passage' else [b['question']]):
            L = key.get(q['number'])
            q['keyLetter'] = L
            if not L:
                q['answer'] = None
                q['flags'].append('no answer found in the key for this number')
            elif ord(L) - 65 >= len(q['options']):
                q['answer'] = None
                q['flags'].append(f'key says {L}, but only {len(q["options"])} options were read')
            else:
                q['answer'] = ord(L) - 65


# ── Main ────────────────────────────────────────────────────────────────

def main():
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument('--paper', required=True, help='question paper PDF')
    ap.add_argument('--key', required=True, help='answer key PDF (or .txt)')
    ap.add_argument('--subject', required=True, help='bank subject key, e.g. english')
    ap.add_argument('--year', required=True, type=int)
    ap.add_argument('--force-ocr', action='store_true', help='OCR every page even if it has a text layer')
    ap.add_argument('--no-review', action='store_true', help="don't start the review page")
    a = ap.parse_args()

    for cmd in ('pdfinfo', 'pdftotext', 'pdftoppm', 'tesseract'):
        need(cmd)

    name = f'{a.subject}-{a.year}'
    work = os.path.join(REPO, 'imports', 'work', name)
    pages_dir = os.path.join(work, 'pages')
    os.makedirs(pages_dir, exist_ok=True)

    print(f'Reading paper: {a.paper}')
    pages = read_pdf(a.paper, work, a.force_ocr, pages_dir)
    with open(os.path.join(work, 'paper-text.txt'), 'w') as f:
        for n, t, o in pages:
            f.write(f'\n===== PAGE {n} ({"OCR" if o else "text"}) =====\n{t}')

    print(f'Reading answer key: {a.key}')
    if a.key.lower().endswith('.txt'):
        key_text = open(a.key).read()
    else:
        key_pages = read_pdf(a.key, work, a.force_ocr)
        key_text = '\n'.join(t for _, t, _ in key_pages)
    with open(os.path.join(work, 'key-text.txt'), 'w') as f:
        f.write(key_text)

    blocks = finalize(parse(join_split_ranges(clean_lines(pages))))
    key, key_notes = parse_key(key_text, a.year, a.subject)
    apply_key(blocks, key)

    qs = [q for b in blocks for q in (b['questions'] if b['type'] == 'passage' else [b['question']])]
    draft = {
        'subject': a.subject, 'year': a.year,
        'source': {'paper': os.path.basename(a.paper), 'key': os.path.basename(a.key)},
        'created': datetime.datetime.now().isoformat(timespec='seconds'),
        'keyNotes': key_notes,
        'pageCount': len(pages),
        'blocks': blocks,
    }
    with open(os.path.join(work, 'draft.json'), 'w') as f:
        json.dump(draft, f, indent=1, ensure_ascii=False)

    flagged = sum(1 for q in qs if q['flags'])
    passages = sum(1 for b in blocks if b['type'] == 'passage')
    print(f'\nFound {len(qs)} questions ({passages} passages). Answers matched: '
          f'{sum(1 for q in qs if q["answer"] is not None)}/{len(qs)}. Flagged for checking: {flagged}.')
    for n in key_notes:
        print('  key: ' + n)
    print(f'Draft saved to imports/work/{name}/draft.json')

    if not a.no_review:
        os.execvp(sys.executable, [sys.executable, os.path.join(HERE, 'review_server.py'), name])


if __name__ == '__main__':
    main()
