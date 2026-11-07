# Mathematics Key Points Revamp — Preview Progress

Date: 2026-11-07
Branch: main
Preview: https://editoby1-bit.github.io/MY-JAMB-APP/key-points-review-v2.html?v=mathematics-batch1

## Scope and lesson architecture
The next subject after Government, Economics, Commerce, and Accounting is **Mathematics**. The original Mathematics Key Points have 24 lesson identifiers and 973 existing question-to-lesson mappings in `teach/mathematics-topics.js`. Their identifiers and question keys have been preserved.

The new Mathematics review outline has **29 teaching lessons**, aligned and ordered under the **23 broad JAMB Mathematics syllabus topics** and related objectives. Five distinct lessons expand subtopics that the existing 24-lesson scheme combined:
- Loci and geometric constructions
- Applications of differentiation
- Representation of data
- Measures of location
- Measures of dispersion

These subjects are integrated where they logically belong; they are not appended as afterthoughts.

## Completed in first preview batch (7/29)
1. Number bases: positional values; integer/fractional conversions; base operations; unknown bases; modular arithmetic; worked examples and traps; place-value diagram.
2. Fractions, decimals and approximation: all operations; recurring decimals; significant figures; decimal places; percentage error; bounds; ratios and rates.
3. Percentages and commercial arithmetic: profit vs margin, discounts, VAT with question-specific rates, simple/compound interest, depreciation, shares, commission, and conversion.
4. Indices: laws, negative/fractional powers, equations, standard form, and sign traps.
5. Logarithms: definition, domains, laws, equations, change of base, tables, and checking extraneous roots.
6. Surds: simplification, exact operations, rationalisation, surd equations, and checking extraneous roots.
7. Sets and Venn diagrams: symbols, union/intersection/complement, two- and three-set counting, De Morgan's laws, and a correctly labelled two-set diagram.

Every revised lesson includes definitions, precise methods, worked calculations, JAMB traps, short practice with answers, and Nigerian context where relevant. Mathematics diagrams are embedded inside lesson content, not separated as disconnected appendices.

## Preview experience
- Mathematics is the first/default subject in the existing Key Points preview. The home-page Preview banner opens that page.
- All 29 lessons are shown in syllabus order; the 7 completed lessons are labelled revised and the other 22 are explicitly labelled next batch. Never imply uncompleted material is revised.
- The subject dropdown, progress banner, and lesson selection update automatically from the lesson data. Previously completed subject previews remain accessible.
- A Practice Questions button uses the existing Mathematics question-to-topic mapping. The original 24 lesson IDs and their 973 mappings remain intact; new split-topic associations exist in preview only and are based on question content.
- The preview renders existing question diagrams/tables with linked past questions; this does not establish visual authenticity of original exam diagrams, which remains a separate paused audit.
- This is **preview only**, not yet pushed to the live Key Points panel.

## Outstanding revisions
Next batches: algebraic expressions, simultaneous equations, quadratics, variation, inequalities, AP/GP, binary operations, matrices; then Euclidean geometry, mensuration, loci, coordinate geometry, trigonometry; finally calculus, data representation, statistics, permutations/combinations and probability.

Before publication, verify each lesson's objectives against the current JAMB syllabus, validate worked solutions and SVGs, ensure mapping coverage and repeated year tags, test topic practice in-browser, and push only approved revised lessons to production. Do not mark Mathematics complete prematurely.

## Separate task: question numbering
Student-selected year papers now carry original paper number metadata separately from the on-screen test index. Original `paperQuestion` fields are authoritative where available. Explicitly administrative paper-type questions are excluded from selectable exam/past-paper pools and all-year/combo pools; no source files or answer keys were edited. Source papers that demonstrably contain a real academic Q1 (e.g., Economics 2002) are not automatically shifted. Other omitted-question gaps require an explicit source-number audit rather than invented offsets.

## Diagram audit pause
The separate Economics and cross-subject original-diagram visual audit is paused at the owner's request and resumes immediately after Key Points work. See `docs/ECONOMICS_DIAGRAM_INTEGRITY_AUDIT_2026-11-06.md`. The verified source screenshots, inspected question-year batches, and existing mappings are not discarded.
