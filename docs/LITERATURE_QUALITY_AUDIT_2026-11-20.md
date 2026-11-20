# Literature Key Points — Initial Quality Audit (20 November 2026)

Status: **PARTIAL PASS — DO NOT DEPLOY TO MAIN APP YET**

## Scope and sources
- Reviewed `key-points-review-literature.js` on the default branch: 51 lesson records, their headings, teaching examples and lesson-end checks.
- Compared curriculum headings and prescribed-text names against the JAMB Literature-in-English IBASS syllabus as reproduced by current syllabus references: https://ibass.jamb.gov.ng/e-syllabus and https://ezinelearning.com/exams/jamb-utme/literature-in-english/syllabus/
- Cross-checked prescribed-title overlap with WAEC's separate 2026–2030 list: https://www.waecnigeria.org/sites/default/files/2023-06/LITERATURE-IN-ENG%202026-2030.pdf
- Important: WAEC's full list is not interchangeable with JAMB's prescribed list; the 2027 JAMB list has not been separately confirmed.

## Checks completed
1. **Inventory: PASS.** 51/51 lesson records have nonempty bodies; all have at least one `Example (i)` and a `QUICK UNDERSTANDING CHECK`.
2. **Curriculum topic presence: PASS AT TOPIC LEVEL.** Drama, prose, poetry, literary terms and unseen appreciation are all represented. Specific required concepts including farce, opera, mime, epiphany, faction, second-person narration, synecdoche, metonymy, blank verse and panegyric appear in the lesson bodies. This checks presence, not accuracy or instructional adequacy of every occurrence.
3. **Prescribed text inventory: PASS against the currently referenced JAMB syllabus.** Lessons 37–51 contain 2 drama, 3 prose and 10 poetry studies, with the expected titles. The WAEC list contains additional works; do not automatically add them as JAMB prescriptions.
4. **Lesson-end study prompts: PASS with format variation.** Lessons 1–20 use `EXAM CONNECTION`; lessons 21–51 use `PRACTICE CONNECTION`. This is a label difference, not missing practice guidance.
5. **General teaching scaffolding: PASS AT PRESENCE LEVEL.** Definitions, illustrations, worked examples, common JAMB traps and short checks are present throughout.

## Unresolved release gates
1. **Prescribed-text factual verification: OPEN.** Verify scene-by-scene plot details, names, poem-specific claims, historical allusions and conclusions directly against the original prescribed works. Current audit verifies titles, not the accuracy of every summary.
2. **Question mappings: OPEN.** The lesson source file alone does not establish whether each JAMB year/question is mapped to the correct lesson. Audit the actual mapping files and representative questions, including new years and repeated questions; preserve duplicate years and original numbering.
3. **Quick-check interaction: OPEN.** Verify every question's option display, answer and explanation in the running preview and main-app integration. Presence of text does not prove UI functionality.
4. **Preview rendering: OPEN.** Browser-test all 51 lessons on mobile and desktop for section ordering, typography, equations, dropdown navigation and the practice controls.
5. **Preview/live parity: OPEN.** Confirm the preview's teaching content, example colour coding, dropdowns and practice controls are identical to the eventual main-app deployment.
6. **2027 prescription status: OPEN.** Recheck JAMB IBASS or an official registration notice before labelling the set current for the 2027 examination.

## Release decision
**Hold main-app deployment.** The content inventory and broad syllabus coverage pass, but factual verification, mappings and UI testing have not passed. Do not claim a complete end-to-end audit until these gates are resolved.
