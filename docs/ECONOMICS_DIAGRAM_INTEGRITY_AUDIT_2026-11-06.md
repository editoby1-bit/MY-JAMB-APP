# Economics Diagram Integrity Audit — Initial Repository Pass
Date: 2026-11-06

## Scope and evidence
Inspected the production `app.js` vector renderer and its explicit Economics question-to-diagram mapping. 46 mapped question references identified. This is a **code-level inventory and risk assessment**, not an exhaustive visual verification of the original JAMB papers. No item without an original source comparison is certified faithful.

## Confirmed findings
1. **2003 Q5–Q6 (PPC)**: user-provided original scan and app rendering showed a materially incorrect curvature and generic axis labels. The shared renderer was subsequently modified to approximate the original curve and use Consumer goods / Producer goods labels. **Status: corrected in code, exact overlay comparison pending.**
2. **2014 pie chart**: code uses Agriculture 126°, Oil 72°, Manufacturing 108°, Services 54°. These sum to 360°, and services = 15%. Original chart's sector order/labels have **not** been independently checked. Added colour-matched legend in production. **Status: numerical consistency checked, source fidelity pending.**
3. **Shared template risk**: one drawing template is reused for distinct questions and years. The mapping does not encode question-specific coordinates, point placements or source provenance. **Status: structural defect/risk; source-by-source validation required.**
4. **Generic axes**: renderer defaults to 'Price / Y' and 'Quantity / X' for non-pie figures, which may contradict the original economic variable names. **Status: requires per-diagram verification.**
5. **Question location vs source identity**: image IDs are used to select vector replacements; the UI's numbered position can differ from the original exam question number. **Status: check stable source IDs when validating.**

## Full mapped inventory by template (NOT individually source-verified)
- **utility** (1): 2001-q7
- **mrs** (1): 2002-q5
- **trade** (1): 2002-q23
- **excess** (1): 2002-q34
- **ppc** (2): 2003-q5, 2003-q6
- **monopoly** (1): 2004-q7
- **indiff** (9): 2004-q35, 2006-q43, 2006-q44, 2011-q20, 2012-q13, 2013-q13, 2014-q11, 2019-q14, 2020-q33
- **both** (1): 2004-q44
- **supplyshift** (2): 2004-q45, 2004-q46
- **flow** (1): 2005-q2
- **ceiling** (2): 2006-q22, 2016-q14
- **monocomp** (1): 2007-q22
- **surplus** (1): 2008-q19
- **cost** (1): 2008-q23
- **population** (1): 2008-q44
- **pie2009** (2): 2009-q4, 2009-q5
- **atc** (1): 2011-q23
- **gap** (1): 2011-q34
- **pieoil** (2): 2012-q5, 2020-q35
- **wage** (1): 2012-q50
- **vertical** (1): 2013-q10
- **costlines** (2): 2013-q23, 2019-q36
- **profit** (3): 2013-q24, 2019-q11, 2019-q12
- **pieservices** (2): 2014-q5, 2020-q25
- **demandshift** (2): 2014-q7, 2020-q10
- **floor** (1): 2016-q11
- **unitary** (1): 2016-q37
- **movement** (1): 2017-q14

## Audit protocol / acceptance criteria
For every original figure: verify (a) correct paper/year/question, (b) figure type and topology, (c) axis titles and units, (d) all points/labels and their exact relative positions, (e) all values and angles, (f) relationships implied by answer options, (g) placement above/below question, (h) reuse for linked questions, (i) display in main and Key Points practice, (j) source citation or archived reference image.

**Do not mark any entry PASS until a matching original source has been viewed and compared.** If source unavailable, mark NEEDS SOURCE rather than inventing geometry. In particular, do not infer the 2020 pie chart from 2014 just because both use the 'pieservices' template.

## Next required work
Collect or locate the original 2001–2020 Economics papers (or individual diagrams) and perform a figure-by-figure visual comparison. Repeat the same inventory and audit for all other subjects and any diagram-containing question outside the vector map. This initial audit does not establish whole-bank coverage.


## Source cross-check, 2026-11-06 (second pass)
Sources: [Larnedu scanned compilation, Economics 1983–2004](https://www.larnedu.com/wp-content/uploads/2019/03/JAMB-Economics-Past-Questions-1983-2004.pdf); user-provided screenshot of the original Economics 2003 paper.

| Diagram | Comparison | Status |
|---|---|---|
| 2003 Q5 and Q6 PPC | Original scan confirms a curve initially nearly horizontal then steepening toward the producer-goods axis; V, Y and W on frontier, X inside, Z outside; axis labels Consumer goods and Producer goods. Initial app curve was reversed. Subsequent renderer change addresses the shape and axes, but has not been overlaid pixel-for-pixel. | CONFIRMED ORIGINAL; RECONSTRUCTION NEEDS VISUAL QA |
| 2002 Q34 excess-demand graph | Scanned compilation describes demand and supply crossing, price N60 and quantity marks 100, 200, 300. App template includes these quantities, but line crossings and price guide positions have not been checked against the image. | PARTIAL MATCH; NOT CERTIFIED |
| 2014 Q5 pie | App data: Agriculture 126°, Oil 72°, Manufacturing 108°, Services 54°. Angles sum to 360°, services is 15%. No authenticated source diagram viewed. | ARITHMETIC PASS; SOURCE UNVERIFIED |
| 2020 Q25 pie | Same 'pieservices' template as 2014 Q5; no evidence the original sectors/angles are identical. | HIGH RISK: SOURCE UNVERIFIED |
| 2012 Q5 / 2020 Q35 pie | Both use 'pieoil' template with identical sector sizes, unverified for both papers. | HIGH RISK: SOURCE UNVERIFIED |

### Integrity safeguards
- Source fidelity is different from numerical or conceptual plausibility.
- Secondary answer sites can conflict with the scanned figure; when they do, use the figure itself and record the disagreement.
- Do not classify any of the remaining 46 mapped images as PASS without the matching original figure.
- Full cross-subject coverage remains outstanding. This is a documented partial audit, not completion.


## Source comparison follow-up — 2026-11-06
Sources checked:
- 2014 paper: https://winpaq.wordpress.com/wp-content/uploads/2018/01/jamb-utme-economics-questions-2014.pdf
- 2012 compilation: https://utmehelp.com/wp-content/uploads/2024/01/JAMB-Economics-Past-Questions-and-Answers-2010-2018.pdf

### Confirmed source discrepancies and code corrections
- **2014 Q5:** Source pie labels are Mining 126°, Agriculture 72°, Manufacturing 108°, Services 54°. App previously used Agriculture 126° and Oil 72°. Fixed sector names and values specifically for 2014 Q5. Mathematical answer to services question remains 15%.
- **2012 Q5:** Source pie labels Oil 160°, Agriculture 90°, Mining 30°, Manufacturing remaining 80°. App previously called Mining 'Other'. Fixed specifically for 2012 Q5.
- **2020 Q25 and Q35:** Source sector labels and values remain unverified. Deliberately not copied from 2014/2012 as though verified.

These corrections establish **sector-value correspondence** for two source figures, not exact slice orientation or complete all-year verification. Other mapped templates and diagrams remain pending.


## Cross-year provenance check — further audit
Reviewed `past-questions/economics-2009.js`, `economics-2012.js`, `economics-2014.js`, and `economics-2020.js` alongside the production vector mappings.

### Findings
- **2020 Q25 vs 2014 Q5:** Both bank records ask the *same* services-percentage question with the *same* answer options, the same angle arithmetic (126°, 72°, 108°, 54°), and the same 15% answer. This strongly suggests duplicated/reused content. It does **not** establish that both original years contained this question. The 2020 renderer currently uses different sector labels from the corrected 2014 renderer. **Priority: HIGH; source-year authenticity and sector-label discrepancy require independent proof.**
- **2020 Q35 vs 2012 Q5:** The 2020 question uses Oil 160°, Agriculture 90°, a 30° sector and Manufacturing 80°, matching the angular dataset used in 2012. The 2020 vector calls the 30° sector 'Other'; the 2012 source comparison identified it as 'Mining'. **Priority: HIGH; possible mislabeled duplicated figure.**
- **2009 Q4–Q5:** Both records intentionally share one pie chart. The answer explanations require Oil 120° and Transport 60°; remainder 180°. The renderer reproduces those angle totals. **Arithmetic check PASS, original sector names, ordering and layout NOT source-certified.**
- **2014 Q5 and 2012 Q5:** Source-backed label corrections already made; the renderer's slice rotation is still not certified as a facsimile.
- External year-specific question listings differ in sequence and sometimes content from the repository. For example, a 2020 online compilation places a progressive-tax curve at question 25, whereas the app's 2020 Q25 is a services pie chart. Numbering alone cannot prove a discrepancy; a complete original paper is required to resolve competing editions/sets. See https://www.deeepsolve.com/jamb/economics/2020 and https://myschool.ng/classroom/economics?exam_type=jamb&exam_year=2020 .

### Audit decision
Do not silently propagate the 2012 or 2014 corrections into 2020. Flag the two 2020 diagrams as **SOURCE-YEAR UNVERIFIED / POSSIBLE CROSS-YEAR DUPLICATE** until the original 2020 paper is examined. Preserve the 2009 shared chart for Q4–Q5 because both questions explicitly use the same figure, but do not certify its visual fidelity.

### Coverage note
This check examined 4 year-specific source files and the 46-entry vector map. It did not inspect every original diagram, all other year files, or all subjects. It is not a completed whole-bank audit.


## Repeated-question policy clarification and corrective action
**User-confirmed product requirement:** JAMB repeats exact questions. The app deliberately preserves repeated questions and displays every year of occurrence. Do not delete, relabel, or de-duplicate a question merely because the same content appears in another year. Year-listing and repeated-question feature are out of scope for diagram corrections.

The earlier classification of 2014 Q5 / 2020 Q25 and 2012 Q5 / 2020 Q35 as suspicious *because they repeat* was an invalid inference. The actual defect was **inconsistent sector labels in visually identical repeated-question diagrams**.

**Fixed in app.js:** 2014 Q5 and 2020 Q25 now both use Mining 126°, Agriculture 72°, Manufacturing 108°, Services 54°; 2012 Q5 and 2020 Q35 now both use Oil 160°, Agriculture 90°, Manufacturing 80°, Mining 30°. Existing year tags, question entries, answer options and repeated-question mappings were not modified. These updates align vector diagrams with their corresponding repeated-question data; individual source-year authentication remains a separate question and is not grounds for removal.


## Answer-leakage audit — 2026-11-06
A new acceptance criterion is **no inferred numerical value, derived point, or answer-bearing annotation may be shown in a question figure unless it is printed on the original exam figure**. Geometry can encode the unknown sector, but the text must not give its value away.

### Confirmed and fixed
- 2014 Q5 / 2020 Q25: Services is a sector of 54° but original 2020 scan intentionally omits the degree label. SVG now displays **Services** only. The 54° remains in the answer explanation.
- 2012 Q5–Q6 / 2020 Q35: Manufacturing's 80° is explicitly derived in the bank's answer explanations as 360° − 160° − 90° − 30°. SVG now displays **Manufacturing** without 80°. This is a preventive answer-leakage correction; original 2012 figure's printed text still requires a direct source comparison.
- Both changes preserve all question and year mappings.

### Other potentially answer-bearing renderer annotations requiring original comparison
- `excess`: Qs=100, Qd=300, price ₦60.
- `surplus`: Qd=20 and Qs=40.
- `atc`: '20 units' and '₦15'.
- `mrs`: coordinates S(2,18), T(4,15).
- `trade`: 'Cost per cotton: Ghana 4; Nigeria 2' is a **derived comparative-cost statement** in the drawing itself, potentially revealing the answer; must be checked against original.
- `pie2009`: 'Remaining sectors: 180°' is a computed complement of Oil 120° and Transport 60°, but is not the full 240° of all other sectors. Original legend/sector identity not source-certified.
- `costlines`: labels contain alternative point letters 'E / T', 'F / R' and 'M' rather than a verified source-specific diagram.
- Generic `Price / Y` and `Quantity / X` axes, including for non-price economic diagrams, need source-specific replacement.

These items are **FLAGGED FOR SOURCE COMPARISON**, not automatically removed. Deleting an original printed value can itself make a question impossible. No further guessed removals were made.


## 2002 answer-leakage correction
- **2002 Q23, opportunity cost of cotton:** Bank asks the learner to calculate the comparative opportunity costs using Ghana cocoa 20/cotton 5 and Nigeria cocoa 60/cotton 30. Production SVG included the answer outright as `Cost per cotton: Ghana 4; Nigeria 2`. **Removed this derived answer annotation**, retained the original numerical production quantities. The answer explanation still gives the calculation after answering.
- **2002 Q34, excess demand:** Bank asks for excess demand at ₦60. The diagram shows Qs 100 and Qd 300, which are inputs required to calculate the answer (200), not the answer itself. **Retained** pending original visual comparison.
- **2002 Q5, MRS:** Diagram coordinates S(2,18), T(4,15) are required to calculate the ratio; **retained** pending original visual comparison. The bank flags the answer choices as having no correct option, a separate answer-key issue.
- **Audit principle:** Remove a *derived result* prematurely displayed, not the raw numbers that make a problem solvable. These checks compare renderer against question text/explanations; they are not a full image-to-source certification.


## Further question-to-figure audit: 2008, 2011, 2013 and 2019
Reviewed question-bank records in `past-questions/economics-2008.js`, `economics-2011.js`, `economics-2013.js`, `economics-2019.js` against the current vector renderer.

### Confirmed answer-leakage correction
- The shared `profit` vector printed **"OB / OH"** at its output axis. The 2013 paper asks for output **OB**, while 2019 asks for **OH**; displaying both as a combined annotation gives away possible answers and is not a faithful axis label. Replaced with neutral **"Output"** pending source-specific reconstruction. Question content, year tags and answers unchanged.

### High-priority figure deficiencies, NOT YET RECONSTRUCTED
- **2013 Q24–Q25**: the question bank asks for total revenue rectangle **GHOB**. Current generic profit vector lacks the complete G/H/O/B rectangle and corresponding point placements. It cannot support the question properly.
- **2019 Q11–Q12**: same generic profit vector reused, although the stated output axis uses **OH** and price **OB**; renderer lacks a full GHOB rectangle. Must reconstruct individually from the source figure, not use a merged OB/OH diagram.
- **2011 Q20 and 2019 Q14**: explanations refer to an indifference-curve tangency at **S** on curve II and unreachable **R** on curve III. Shared renderer's point placement and labels do not explicitly represent this correctly. Source image comparison needed.
- **2019 Q36 vs 2013 Q23**: renderer merges source-specific cost line names as **E / T**, **F / R**. The 2019 question explicitly asks what line **E** represents, while the 2013 question asks about **R**. Must use year-specific labels and curve geometry.
- **2008 Q19**: explanation requires Qd=20, Qs=40 and a 20-unit excess supply. Inputs are necessary; do not remove them as if they are leaked answers.
- **2011 Q23–Q24**: ATC 15 at output 20 is given in graph and required to compute total cost 300. Keep source inputs, verify point coordinates against original scan.

**Audit status:** The answer-leak fix is committed. The figure deficiencies are flagged; accurate replacements require original images. Do not classify the above as source-certified.


## Targeted reconstruction pass: cost and profit figures
- **2013 Q23 vs 2019 Q36:** Removed combined ambiguous cost-curve annotations `E / T` and `F / R`. 2013 now uses T, R, M; 2019 uses E, F, M. This follows the question-bank explanations, **not a pixel-accurate source scan**.
- **2019 Q11–Q12:** Added source-question point names O, B, G, H and their price/output guides to a year-specific profit diagram. This supports the rectangle question but is **a provisional reconstruction**. Exact curve intersections and rectangle placement still require visual comparison with the original 2019 paper. The 2013 graph remains a separate template pending source reconstruction.
- No repeated questions, years, answers, or option sets were altered.
- **Outstanding:** Original-paper image comparisons for 2011 indifference curves, 2013 profit graph, 2019 profit graph and 2019 cost graph. Do not mark these as fully source-verified.


## Original paper comparison: 2013 and 2011
- 2013 original question PDF: https://winpaq.wordpress.com/wp-content/uploads/2018/01/jamb-utme-economics-questions-2013.pdf ; corroborating scan descriptions: https://myexamcode.net/wp-content/uploads/2022/04/JAMB-ECONOMICS-PAST-QUESTIONS.pdf .
- **2013 Q23:** source figure labels vertical axis Cost and horizontal Output, with T horizontal, M rising from zero, and R rising above M from the fixed-cost intercept. Production graph previously inherited generic Price / Y and Quantity / X axes. Corrected to Cost (₦) and Output, and retained T/R/M source-specific curve names. **Geometry not certified pixel-accurate.**
- **2013 Q24–25:** original scan describes a richer profit diagram with G,H,E,J,F,C,D,MR and B,S, multiple guides and a revenue rectangle. Existing generic template is still inadequate. **BLOCKED for faithful reconstruction pending visual tracing of source image.** Do not certify.
- **2011 Q20:** the source question and answer S are corroborated by https://myschool.ng/classroom/economics/32348?exam_type=jamb&exam_year=2011&page=8 . The shared indifference-curve template does not show verified S/R/U/T placement. **BLOCKED for faithful reconstruction pending visual tracing.**
- **2019 Q11–12 and Q36:** 2019 original graph remains unverified; the 2019 profit reconstruction is provisional. The cost diagram now uses Cost (₦) and Output axes instead of generic price/quantity, with E/F source-specific names. **Not certified.**

Source comparison here supports labels and relationships but does not constitute pixel-accurate graph reconstruction. No answer or year mappings modified.
