# Final CRS 2017–2020 candidate: independent data audit

**Result: PASS — no material blocker found in the candidate data.**

This is a read-only audit of `final/2017.json` through `final/2020.json` after the latest user decisions. It does not alter a candidate, original draft, repository file or scoring rule. It verifies the prepared data; the parent separately verifies integration, rendering, grading and offline behaviour.

## Scope and integrity

- All **160** records are present: 40 authentic source positions for each year.
- Stable IDs, year/question numbers, original compiled-key letters, four-option order, source-file/page references and Bible references pass checks.
- Candidate question wording and option arrays are identical to the corresponding reviewed expanded proposals. No additional silent stem or distractor rewrite was introduced by finalization.
- Prepared teaching is **100–180 words for every record**. Existing trap paragraphs remain after the reference and at the end.
- All resolved candidates have their pending flags cleared. Searches found no stale statement that these final decisions remain provisional or still await joint review.
- Where an answer-check verdict exists, `keyAnswer` retains the original printed letter rather than the app’s accepted letter.
- Source-repair provenance remains reviewable in the prepared assets. The previously identified 2017 Q12 time-word repair and its option-B grammatical repair are recorded in original-question/options fields; finalization does not further rewrite those choices.

The audit relies on the four prepared independent source reviews for the full scan transcriptions. This reviewer directly inspected both 2017 scan pages and the enlarged original key, and actually retrieved the critical 2017 primary Bible passages. The other prepared audits retain their actual passage evidence and retrieval limits. No official JAMB marking scheme is claimed.

## Explicit user decisions

| Item | Required final treatment | Audit result |
|---|---|---|
| 2019 Q15 | B, forty years, with an evidence warning | PASS: B only; teaching distinguishes Caleb’s explicit age at the scouting mission from Joshua’s unrecorded Exodus age. It does not present forty as a directly stated biblical age for Joshua. |
| 2019 Q33 | C only, minimal answer explanation | PASS: C only; the short explanation is under 25 words. Teach Me stays on the non-political mission and contains no extended Trinity/component discussion or extra accepted option. |
| 2020 Q29 | C primary; A and D also accepted | PASS: primary index 2, alternatives 0 and 3 exactly. B is not added. Matthew 5:39 and the KJV wording of 5:44 are distinguished from Luke’s explicit enemy-mercy wording. |

The new 2020 Q29 alternatives are applied because the user expressly approved them, not because any related theological truth automatically receives credit.

## Literal source defects under the established defective-item policy

Exactly the following **seven** items use `noanswer`, neutral all-attempt credit and no `alsoAccept` list:

| Item | Literal defect | Evidence/provenance check |
|---|---|---|
| 2017 Q38 | Jezreel is absent; the supplied choice is Jezebel | Hosea 1:4 names Jezreel. Second Kings 9 puts Jezebel’s death at that location but does not change Hosea’s name. |
| 2018 Q17 | Repeats the same Jezreel/Jezebel mismatch | Same literal-text treatment as 2017; no arbitrary additional victim. |
| 2018 Q23 | Wrong Baal count and unsupported Asherah execution premise | First Kings 18:19 summons 450 Baal and 400 Asherah prophets; verse 40 narrates the Baal execution, not an execution count for Asherah. |
| 2019 Q4 | Mixed pre-Sinai codification, religion, biblical-law and later-commentary categories | The complete historical claim does not uniquely identify Judaism, Torah, Talmud or Hammurabi. No unsupported letter reversal is disguised as a factual repair. |
| 2019 Q14 | Repeats the faulty execution/count question | Same fact-based distinction between a summons list and an execution statement. No assumption that an unreported execution count equals zero. |
| 2019 Q18 | Correct reason is paired with the wrong direct recipient | First Samuel 3 addresses Samuel about judgement on Eli’s household. Samuel is missing from the recipient choices. |
| 2019 Q19 | Conquest before arrival and an unspecified six/seven list | Joshua’s crossing precedes the main Canaan campaigns; Joshua 9:1 and Joshua 3:10/Deuteronomy 7:1 are different lists. No offered choice fixes the entire printed premise. |

These are recorded source/premise defects, not new speculative doctrinal multiple-answer rulings. The candidate notes explain the actual evidence and do not call each retained `answer` index a factually correct offered choice. The app must continue to render this category neutrally, as the parent’s UI tests should confirm.

## Other final treatments

- **2019 Q12 B:** retained under the source’s made-popular wording, explicitly distinguishing Ahab’s continuation of Jeroboam-associated sins from Jeroboam’s establishment of the calf sanctuaries.
- **2019 Q29 C:** counts the repeated name in Genesis 22:11; it is not asserted as a count of separate divine calls throughout Abraham’s life.
- **2019 Q34 D:** attributed as the source’s intended symbolism. It does not claim that Simon’s compelled cross-bearing proves a continent-wide conversion or his private response.
- **2020 Q39 D/C:** the only additional translation-equivalence case. KJV Master and RSV Teacher gloss the same John 20:16 title in its teaching sense. No priest, disciple or arbitrary honorific is added.

Only **two** new records have alternative-answer arrays: **2020 Q29** and **2020 Q39**. No other interpretive alternative was added.

## Clear textual key corrections

The three corrected-key records are retained as straightforward passage/sequence corrections:

| Item | Printed → accepted | Check |
|---|---|---|
| 2018 Q10 | B → A | Hosea 14:2 explicitly requests removal of iniquity. A general description of worship is not the exact petition. |
| 2018 Q33 | C → B | John 20 has Peter and the other disciple go towards the tomb after Mary’s report; angels appear later. The loose plural in the source does not reverse that sequence. |
| 2020 Q34 | C → A | First Thessalonians 5:6 pairs keeping awake with being sober; watchfulness repeats the first idea rather than completing the second. |

## Closed baseline and older published questions

A fresh read-only comparison with Git HEAD passed:

- All **16 older CRS paper scripts** are byte-identical to their published versions.
- All **850 older question objects**, including the existing practice seed, are deeply equal to the published objects.
- **2003 Q3 remains C only**: answer index 2, with no additional accepted option.

This is a check of question/scoring preservation. New topic lessons and prepared-teaching expansions are separate planned content changes; this report does not incorrectly claim those entire files are byte-identical.

## Candidate hashes

The following hashes identify the exact four candidates audited:

- `2017.json`: `e00a71a292217ac9eeedc7f91cac4634cab3eebe4af2186f1a6152f65bbc477c`
- `2018.json`: `977e46414760377231f0ccd61731e4d3f6351d07e56453adcc81adc8ed724780`
- `2019.json`: `58ec07e7a3001bca1a94cd53ad2e4f13f90157a166dea1eb29039faf9c65c76b`
- `2020.json`: `f63f84b7df92cbe9f842ff36b955b9a24fc6cb58c92a1250863beb414f04e56d`

No candidate or repository mutation was performed by this reviewer.


## Release validation addendum

Root final checks passed all 160 new questions and accepted alternatives, the 2003 C-only regression, study hubs, offline reloads and all 18 loading/status regressions. Two source-defect repeat pairs were explicitly added after this audit, bringing repeat metadata to 158 groups/357 occurrences; all original groups remain. The final checksum repair and versioned shell-asset offline fix are documented in the completed review.
