# Commerce 2017–2020 — implementation and verification update

Date: 2026-11-04. Branch: main.

## Implemented

- Added six `The trap:` explanations to `teach/commerce.js` for 2017 Q12/Q26/Q30, 2018 Q29/Q31 and 2019 Q2.
- Existing questions, answer keys, `alsoAccept` values, source wording and `bookletKey` fields were not edited.
- Commit: `d8f9454e7393f068e9476dfc81675afd2a84fe8f`.

## Post-change static checks (directly against committed GitHub files)

| Year | Source questions | Exam Trap-marked occurrences | Multiple-answer cases | Substantive no-answer cases | Wrong Answers in Circulation |
|---|---:|---:|---:|---:|---:|
| 2017 | 40 | 18 | 4 | 1 | 3 |
| 2018 | 40 | 17 | 0 | 1 | 1 |
| 2019 | 40 | 22 | 2 | 0 | 1 |
| 2020 | 40 | 16 | 5 | 1 | 4 |
| **Total** | **160** | **73** | **11** | **3** | **9** |

All six additions now match the app's exact Exam Trap selection regex. There are zero missing Teach Me entries and zero duplicate question IDs among the 160. The 2017 Q1 administrative item is excluded from Tricky Questions.

## Outstanding before declaring a complete independent content audit

- A full fresh option-by-option fact-check of all **160** questions, including the 110 not included in the original 50 flagged cases, has not been independently completed in this pass.
- A full semantic verification of all **73** trap paragraphs against their source question and accepted answer has not been completed. A trap marker is not proof that the explanation is pedagogically correct.
- Ten disputed questions remain documented for owner review in `commerce-2017-2020-independent-second-pass.md`.
- No actual browser-based practice/scoring tests were executed in this connector environment.
- No changes were made to the ten held cases; doing so without sufficient evidence could damage answer fairness.

## Source reports

- `commerce-2017-2020-independent-second-pass.md`
- `commerce-2017-2020-all-special-segments-audit.md`
- `commerce-2017-2020-consolidated-audit-report.md`

Do not state that all independent verification or live tests have passed until they have been performed.
