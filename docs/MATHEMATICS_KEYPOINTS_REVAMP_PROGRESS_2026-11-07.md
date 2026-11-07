# Mathematics Key Points Revamp — 2026-11-07

Status: **ALL 29 TEACHING LESSONS REVISED IN PREVIEW** — not yet published to live Key Points.
Review URL: https://editoby1-bit.github.io/MY-JAMB-APP/key-points-review-v2.html?v=mathematics-full-29-20261107

## Scope and standards
The 29 lesson sequence covers all 23 broad JAMB Mathematics syllabus topic blocks across:
1. Number & Numeration
2. Algebra
3. Geometry & Trigonometry
4. Calculus
5. Statistics

The 24 existing mathematics lesson identifiers remain present. Five syllabus subtopics are expanded in their appropriate positions rather than as appendices: Loci; Applications of differentiation; Representation of data; Measures of location; Measures of dispersion. All 29 have full teaching material, definitions, formulas, worked examples, examination traps and short self-check questions with answers.

## Completed teaching lessons
Number bases; Fractions, decimals, approximation; Commercial mathematics; Indices; Logarithms; Surds; Sets; Algebra; Equations; Quadratics; Variation; Inequalities; Sequences; Binary operations; Matrices; Euclidean geometry; Mensuration; Loci; Coordinate geometry; Trigonometry; Differentiation; Applications of differentiation; Integration; Representation of data; Measures of location; Measures of dispersion; Statistics — combined revision; Permutations/combinations; Probability.

## In-lesson diagrams and visuals
An explanatory visual is embedded at the relevant position inside each of 18 applicable lessons: binary place value, commercial price breakdown, Venn regions, quadratic parabola, direct/inverse variation, inequality number line, matrix multiplication, triangle angles, loci perpendicular bisector, coordinate gradient, trigonometric ratios, stationary points, integration area, pie chart, cumulative frequency/ogive, dispersion comparison, permutations/selection, and two-toss probability tree. Every SVG is designed to be responsive. These are **lesson teaching aids**, not asserted reconstructions of individual JAMB past-paper scans.

## Preview experience
- Existing shared review page defaults to Mathematics, at the TOP of subject dropdown. Other subject previews remain selectable.
- Topic dropdown lists all 29, in pedagogical/syllabus order; labels and progress counts update dynamically as lesson data changes.
- New lessons appear integrated within the subject list; not listed as addenda.
- Existing old-vs-new comparison retained; all 29 are flagged revised.
- Topic practice button is wired to the existing real question bank; no mock questions replace actual JAMB practice.
- Existing diagrams and tables in individual past questions are passed to the practice renderer. Original visual authenticity is part of the separately paused diagram audit.

## Structural mapping verification (source code-level)
- Verified Mathematics past-question JS files for each year 2001 through 2020.
- Total executable questions in those 20 files: **955**.
- Unmapped questions under the existing question-to-topic matching key: **0**.
- Original 24 lesson IDs and 973 mapping-key entries remain in `teach/mathematics-topics.js`; no answer keys or base mappings were overwritten.
- New five topic associations are performed in the preview by testing each mapped question's wording and existing parent lesson:
  - Loci: 24
  - Applications of differentiation: 17
  - Representation of data: 35
  - Measures of location: 45
  - Measures of dispersion: 17
- This verifies code-level associations, **not semantic correctness of every classification**, nor browser rendering on the deployed site. All split topics have at least one mapped question.

## Remaining production acceptance checks
- Visual review of the 29 revised lessons against the five JAMB syllabus sections, including formulas, examples, graph labels and syllabus sub-objectives.
- Browser QA of every lesson and practice navigation, including touch/mobile scrolling and diagram sizing.
- Validate all numerical worked solutions and multi-year repeated-question badges.
- After owner approval, move reviewed Mathematics lessons into the live Key Points resource, update its content manifest hash, and verify offline downloads.
- Resume the PAUSED original-exam diagram verification immediately after the Key Points work. The source-photo audit is not closed by these lesson diagrams.

## Numbering and booklet-type question guard
Separate core-app changes display authentic printed paper numbers for selected single-year papers, using `paperQuestion` metadata where available; they exclude expressly administrative paper-type items from the question pools. Academic Question 1 is retained where present (e.g. Economics 2002); the 2012/2014 49-question scenarios correctly display Questions 2–50. Numbering tests are code-level and require a live mobile check before certification.
