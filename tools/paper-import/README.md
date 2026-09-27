# Past-paper import tool

Turns a past-question PDF and its answer key into questions in the app. You
run it yourself, in Codespaces, on papers you have. It uses free software on
your machine (no AI, no internet), and nothing reaches students until you
have checked and approved it.

## One-time setup

In the Codespace terminal:

```bash
bash tools/paper-import/setup.sh
```

## Importing a paper

1. **Put the PDFs somewhere in the Codespace**, e.g. drag them into an
   `imports/source/` folder. PDFs are never committed (`imports/.gitignore`).

2. **Run the importer** (one paper, one year):

   ```bash
   python3 tools/paper-import/import_paper.py \
     --paper imports/source/utme-2001-english.pdf \
     --key   imports/source/answer-key-2001-2020.pdf \
     --subject english --year 2001
   ```

   It reads every page (with OCR for scanned or photographed pages), finds
   the passages, questions and options, looks up the 2001 answers in the
   key, and prints a summary like
   `Found 100 questions (4 passages). Answers matched: 98/100. Flagged: 12.`

3. **Review.** The review page opens by itself. In Codespaces, click
   **Open in Browser** on the pop-up (or use the **Ports** tab, port 8765).
   - Each question sits next to a **page** button that shows the original
     page, so you can compare.
   - Items the tool is unsure about are marked in red. Fix them and tick
     **Checked**, or tick **Remove**.
   - Tick **Only show flagged** to see just the problems.
   - **Save progress** keeps your edits, so you can stop and come back later:
     `python3 tools/paper-import/review_server.py english-2001`
   - **Approve for the app** refuses until every question has text, options
     and a correct answer, and every flag is checked or removed.

4. **Add approved papers to the app:**

   ```bash
   python3 tools/paper-import/add_to_bank.py
   git add -A && git commit -m "Add 2001 English paper" && git push
   ```

5. **Explanations:** run the **Generate Teach Me explanations** workflow
   (GitHub → Actions) to generate Teach Me explanations for the new
   questions.

## Things to know

- **Italics, underlining and stress marks are lost.** OCR only sees letters.
  For "choose the word nearest in meaning to the word in italics" questions,
  type the marked word in CAPITALS (the rest of the bank already does this).
  The tool flags these questions.
- **Maths, physics and chemistry** symbols, formulas and diagrams read poorly.
  English is the best place to start.
- **Clean scans work best.** Phone photos work, but expect more flags.
- **Gap-fill passages:** the tool writes "Choose the option that best fills
  gap N in the passage." as the question text and flags it for you to check.
- **Answer key layout:** the tool finds the heading for the paper's year and
  reads `number + letter` pairs until the next year. If a key is laid out
  differently and answers don't match, a `.txt` file with lines like `1 A`
  also works as `--key`.
- To **remove** an imported paper, delete its file in `imports/approved/`
  and re-run `add_to_bank.py`.
