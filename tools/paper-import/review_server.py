#!/usr/bin/env python3
"""Serves the review page for one imported paper.

    python3 tools/paper-import/review_server.py english-2001

Then open the link it prints (in Codespaces, the forwarded-port pop-up).
"Save progress" keeps your edits in imports/work/<name>/draft.json.
"Approve" checks every question and writes imports/approved/<name>.json —
the only thing add_to_bank.py ever reads.
"""

import http.server
import json
import os
import re
import sys
import datetime

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..'))
PORT = int(os.environ.get('PORT', '8765'))


def compose(instruction, stem):
    """Standalone questions carry their group instruction in the question text,
    like the rest of the bank ("Choose the option nearest in meaning…: …")."""
    instruction, stem = (instruction or '').strip(), stem.strip()
    if not instruction:
        return stem
    instruction = re.sub(r'^In each of (the )?questions?\s+\d+\s*(?:-|–|—|to|and)\s*\d+,?\s*', '', instruction, flags=re.I)
    instruction = instruction[:1].upper() + instruction[1:]
    return f"{instruction.rstrip(' .:')}: {stem}"


def validate_and_build(draft):
    errors, blocks = [], []

    def check_q(q, where):
        if q.get('removed'):
            return None
        label = f"{where}question {q.get('number')}"
        stem = (q.get('stem') or '').strip()
        opts = [o.strip() for o in q.get('options') or []]
        if not stem:
            errors.append(f'{label}: question text is empty')
        if len(opts) < 2 or any(not o for o in opts):
            errors.append(f'{label}: needs at least 2 options and no blank options')
        a = q.get('answer')
        if not isinstance(a, int) or not 0 <= a < len(opts):
            errors.append(f'{label}: no correct answer selected')
        if q.get('flags') and not q.get('checked'):
            errors.append(f'{label}: flagged — fix it and tick "Checked", or remove it')
        return {'number': q.get('number'), 'question': stem, 'options': opts, 'answer': a}

    for b in draft.get('blocks', []):
        if b.get('removed'):
            continue
        if b['type'] == 'passage':
            where = f"{b.get('title') or 'Passage'}, "
            if not (b.get('text') or '').strip():
                errors.append(f'{where}passage text is empty')
            if b.get('flags') and not b.get('checked'):
                errors.append(f'{where}passage is flagged — fix it and tick "Checked", or remove it')
            qs = [x for x in (check_q(q, where) for q in b.get('questions', [])) if x]
            if not qs:
                errors.append(f'{where}has no questions left')
            blocks.append({'type': 'passage', 'title': (b.get('title') or 'Passage').strip(),
                           'instruction': (b.get('instruction') or '').strip(),
                           'text': b.get('text', '').strip(), 'questions': qs})
        else:
            q = b['question']
            built = check_q(q, '')
            if built:
                built['question'] = compose(q.get('instruction'), built['question'])
                blocks.append({'type': 'standalone', 'question': built})
    return errors, blocks


class Handler(http.server.BaseHTTPRequestHandler):
    name = None

    def work(self, *p):
        return os.path.join(REPO, 'imports', 'work', self.name, *p)

    def send(self, code, body, ctype='application/json'):
        data = body if isinstance(body, bytes) else (json.dumps(body) if ctype == 'application/json' else body).encode()
        self.send_response(code)
        self.send_header('Content-Type', ctype)
        self.send_header('Content-Length', str(len(data)))
        self.send_header('Cache-Control', 'no-store')
        self.end_headers()
        self.wfile.write(data)

    def do_GET(self):
        if self.path in ('/', '/index.html'):
            with open(os.path.join(HERE, 'review.html'), 'rb') as f:
                return self.send(200, f.read(), 'text/html; charset=utf-8')
        if self.path == '/draft':
            with open(self.work('draft.json'), 'rb') as f:
                return self.send(200, f.read())
        m = re.fullmatch(r'/pages/(page-\d{3}\.png)', self.path)
        if m and os.path.exists(self.work('pages', m.group(1))):
            with open(self.work('pages', m.group(1)), 'rb') as f:
                return self.send(200, f.read(), 'image/png')
        self.send(404, {'error': 'not found'})

    def do_POST(self):
        body = json.loads(self.rfile.read(int(self.headers.get('Content-Length', 0))) or b'{}')
        if self.path == '/save':
            with open(self.work('draft.json'), 'w') as f:
                json.dump(body, f, indent=1, ensure_ascii=False)
            return self.send(200, {'ok': True})
        if self.path == '/approve':
            with open(self.work('draft.json'), 'w') as f:
                json.dump(body, f, indent=1, ensure_ascii=False)
            errors, blocks = validate_and_build(body)
            if errors:
                return self.send(400, {'errors': errors})
            out_dir = os.path.join(REPO, 'imports', 'approved')
            os.makedirs(out_dir, exist_ok=True)
            approved = {'subject': body['subject'], 'year': body['year'], 'source': body.get('source'),
                        'approved': datetime.datetime.now().isoformat(timespec='seconds'), 'blocks': blocks}
            with open(os.path.join(out_dir, f'{self.name}.json'), 'w') as f:
                json.dump(approved, f, indent=1, ensure_ascii=False)
            n = sum(len(b['questions']) if b['type'] == 'passage' else 1 for b in blocks)
            return self.send(200, {'ok': True, 'questions': n, 'file': f'imports/approved/{self.name}.json'})
        self.send(404, {'error': 'not found'})

    def log_message(self, *a):
        pass


def main():
    if len(sys.argv) != 2:
        sys.exit('usage: review_server.py <subject>-<year>   e.g. english-2001')
    Handler.name = sys.argv[1]
    if not os.path.exists(os.path.join(REPO, 'imports', 'work', Handler.name, 'draft.json')):
        sys.exit(f'No draft for {Handler.name}. Run import_paper.py first.')
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', PORT), Handler)
    print(f'\nReview page: http://localhost:{PORT}/   (Ctrl+C to stop)\n'
          'In Codespaces, click "Open in Browser" on the port pop-up, or use the Ports tab.')
    try:
        srv.serve_forever()
    except KeyboardInterrupt:
        pass


if __name__ == '__main__':
    main()
