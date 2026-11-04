# Commerce 2017–2020 — Consolidated Audit and Enforcement Handoff

**Date:** 2026-11-04  
**Repository:** editoby1-bit/MY-JAMB-APP, main  
**Scope:** Four original 40-question papers, 160 source records, all three Special features.

## Completed work

1. Verified the repository contains 40 questions per year, 160 total, with Teach Me explanations for every record.
2. Independently reviewed the 50 questions already flagged by the prior AI for wrong keys, ambiguity, multiple answers, source errors or missing correct answers.
3. Classified the flagged cases for single-answer treatment, corrected answers, retained multiple answers, defective-item protection, and owner review. See `commerce-2017-2020-independent-second-pass.md`.
4. Cross-checked the full set of 160 records against the app's three Special-feature selectors and the available Teach Me text. See `commerce-2017-2020-all-special-segments-audit.md`.
5. Recorded independent reference-based concerns about cartel versus consortium, reserve versus unissued capital, money authentication, pricing and warehousing. These are not official JAMB rulings.
6. Committed both audit documents without altering live scoring or question content.

## Current Special-segment inventory

| Year | Exam Trap markers | Wrong Answers in Circulation | Multiple-answer questions | Substantive no-correct-answer questions |
|---|---:|---:|---:|---:|
| 2017 | 15 | 3 | 4 | 1 |
| 2018 | 15 | 1 | 0 | 1 |
| 2019 | 21 | 1 | 2 | 0 |
| 2020 | 16 | 4 | 5 | 1 |
| **Total** | **67** | **9** | **11** | **3** |

The 2017 administrative booklet-type question also receives any-attempt credit but is excluded from Tricky Questions. Counts overlap. Exam Trap cards can deduplicate identical trap text.

## Enforce later — approved in principle, subject to owner review

**Keep multiple accepted:** 2017 Q15/Q34/Q35; 2019 Q26/Q34; 2020 Q24/Q29/Q31/Q33/Q36. Verify alternatives before any changes.

**Keep no-correct-option protection:** 2017 Q31, 2018 Q40, 2020 Q12. Keep 2017 Q1 administrative and excluded.

**Preserve corrected answer-key annotations:** 2017 Q32; 2019 Q22; 2020 Q30/Q38/Q40.

**Preserve misprint annotations:** 2017 Q2/Q9/Q16/Q37; 2018 Q39; 2019 Q16/Q28; 2020 Q19.

**Single-best-answer, ordinary scoring:** 2017 Q12/Q22/Q26/Q27/Q30; 2018 Q14/Q29/Q31; 2019 Q2/Q13; 2020 Q20/Q23/Q27. Do not confuse a trap explanation with special scoring.

**Exam Trap candidates missing actual Teach Me markers:** 2017 Q12/Q26/Q30; 2018 Q29/Q31; 2019 Q2. Existing 2017 Q22 and 2020 Q27 already qualify. Add six markers only after the explanatory text is independently approved.

**Hold for owner decision:** 2017 Q14/Q23; 2018 Q13/Q24/Q35/Q38; 2019 Q12/Q17/Q21; 2020 Q10. Reconcile 2017 Q23 with earlier 2009 Q36 before changing legality/recognition scoring, and 2017 Q14 with 2019 Q12.

## All Wrong Answers in Circulation (nine)

2017 Q31 (defective printed D), Q32 (corrected B→C), Q34 (printed A; valid C/D);
2018 Q40 (defective printed C);
2019 Q22 (corrected C→D);
2020 Q12 (defective printed B), Q30 (corrected B→C), Q38 (corrected D→B), Q40 (corrected A→D).

These are legitimate printed-key warnings, not necessarily nine independent corrected single-answer cases.

## Important limitations and outstanding tasks

This work **completed the structural and membership audit** of all 160 records across the three Special features. It did **not** independently fact-check the content of every one of the 67 trap explanations, nor independently verify every unflagged question's answer against its original PDF. The source files include prior reviewers' research links, but those are not a substitute for new external verification of every unflagged item.

The six missing trap paragraphs are recommendations, not yet implemented. The ten held answer cases remain for owner review. No browser-level end-to-end test was run and no production changes were made. Do not describe the project as fully enforced or all disputes settled.

## Next implementation pass

1. Owner approves/overrides ten held cases and the six missing trap paragraphs.
2. Apply only approved changes, preserving normal past-paper access and cross-year consistency.
3. Rebuild content manifest if needed; test Tricky, Traps, Wrong Answers, Teach Me and no-answer scoring on actual UI.
4. Commit changes with question-level diffs and a test report.
