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
