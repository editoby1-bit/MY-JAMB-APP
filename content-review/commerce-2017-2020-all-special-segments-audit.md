# Commerce 2017–2020: full Special-segments audit

All 160 source questions and 160 Teach Me entries checked against actual app selection logic. No production scoring was changed.

## Section definitions

- Tricky: `alsoAccept` alternatives or `noanswer`/`none` verdict, excluding administrative records.
- Exam Traps: Teach Me text must contain `The trap:`; repeated identical trap texts are grouped.
- Wrong Answers in Circulation: `bookletKey`, external BOOKLET_ERRORS entry, or `corrected` with `keyAnswer`. The global errors file has no Commerce map.

## Counts

| Year | Total | Exam Trap markers | Wrong Answers | Multiple | No correct (nonadmin) |
|---|---:|---:|---:|---:|---:|
| 2017 | 40 | 15 | 3 | 4 | 1 |
| 2018 | 40 | 15 | 1 | 0 | 1 |
| 2019 | 40 | 21 | 1 | 2 | 0 |
| 2020 | 40 | 16 | 4 | 5 | 1 |
| **Total** | **160** | **67** | **9** | **11** | **3** |

## All Wrong Answers in Circulation entries

| ID | Booklet letter | Accepted app answer(s) | Treatment |
|---|---|---|---|
| commerce-2017-q31 | D | D | noanswer |
| commerce-2017-q32 | B | C | corrected |
| commerce-2017-q34 | A | C/D | multiple |
| commerce-2018-q40 | C | C | noanswer |
| commerce-2019-q22 | C | D | corrected |
| commerce-2020-q12 | B | B | noanswer |
| commerce-2020-q30 | B | C | corrected |
| commerce-2020-q38 | D | B | corrected |
| commerce-2020-q40 | A | D | corrected |

## All Tricky entries

**Multiple:** commerce-2017-q15, commerce-2017-q23, commerce-2017-q34, commerce-2017-q35, commerce-2019-q26, commerce-2019-q34, commerce-2020-q24, commerce-2020-q29, commerce-2020-q31, commerce-2020-q33, commerce-2020-q36.

**No correct:** commerce-2017-q31, commerce-2018-q40, commerce-2020-q12.

2017 Q1 is administrative and excluded from study.

## Existing Exam Trap membership

- **2017:** Q4, Q5, Q8, Q9, Q11, Q17, Q21, Q22, Q29, Q32, Q33, Q36, Q37, Q38, Q39.
- **2018:** Q2, Q5, Q7, Q12, Q13, Q15, Q18, Q19, Q20, Q21, Q22, Q26, Q30, Q33, Q39.
- **2019:** Q1, Q3, Q4, Q6, Q7, Q8, Q9, Q10, Q15, Q16, Q18, Q20, Q22, Q24, Q26, Q30, Q32, Q33, Q36, Q39, Q40.
- **2020:** Q2, Q4, Q6, Q7, Q9, Q15, Q17, Q18, Q22, Q26, Q27, Q29, Q30, Q35, Q38, Q40.

There are 67 marked question occurrences, not necessarily 67 unique trap cards. The other 93 records lack the exact trap marker; this is not by itself an error.

## Trap recommendation gap

Earlier we proposed eight Exam Trap moves: 2017 Q12/Q22/Q26/Q30, 2018 Q29/Q31, 2019 Q2, 2020 Q27. Only **2017 Q22 and 2020 Q27** currently contain the required marker. The six missing candidates are **2017 Q12/Q26/Q30; 2018 Q29/Q31; 2019 Q2**. Add verified `The trap:` paragraphs only after approval; merely relabeling a verdict will not index them.

## Findings and implementation boundary

1. Preserve 11 multiple-answer and three substantive no-correct-answer protections, including neutral any-attempt scoring.
2. Preserve nine Wrong Answers entries. Some overlap defective or multiple-answer categories intentionally; they warn against a printed key and do not make a placeholder factually correct.
3. Preserve existing 67 trap-marked occurrences. A source-code membership audit cannot certify that all 67 trap explanations are pedagogically correct; manual text review remains appropriate.
4. No missing Teach Me entries or `reviewPending` flags were found among the 160.
5. 2018 Q23/Q24 are distinct questions based on the same scenario; 2020 Q1/Q5 are genuine duplicate occurrences.
6. The ten held answer disputes remain documented in `commerce-2017-2020-independent-second-pass.md`; this segment audit does not settle them.
7. No production changes or browser-level end-to-end tests were made. This report is the complete **membership and structural cross-check**, not a claim that every unflagged answer and trap explanation was independently fact-checked against the original paper.
