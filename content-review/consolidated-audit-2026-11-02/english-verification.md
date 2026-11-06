# English: verification of the consolidated report

**14 verified changes applied; 12 proposed narrowings held; 44 KEEP_MULTIPLE rulings left unchanged; 3 defective items held.**

All 73 report entries were mapped to the current application sources. All 22 distinct passage contexts were read in full. The report was treated as a recommendation, not as an instruction to overwrite scoring. Its old batch summaries and some preferred-answer fields conflict with the reconciled individual rulings; those summaries were not used as an implementation specification.

## Applied changes

Each item now has one accepted answer, retains the existing source-key letter in `keyAnswer` and `bookletKey`, and has a matching prepared explanation of 114–129 words. No stem, option, passage, year or source attribution was changed.

| Report ID | Actual source | Single answer | Verified reason |
|---|---|---|---|
| EN02 | `past-questions/english-2002.js:52` | A | Supporters describe personal writing as conversation-like and “more interesting.” B adds a claim that the writers themselves become more focused; the passage discusses the writing’s force and directness instead. |
| EN08 | `past-questions/english-2004.js:126` | C | Pejorative expresses disparagement. Critical is the nearest offered sense; contemptible means deserving contempt, unlike contemptuous. |
| EN10 | `past-questions/english-2005.js:100` | D | The actual highlighted NG in eNGlish is /ŋɡ/, matching single. Ink has /ŋk/: matching the nasal alone does not match the full highlighted sequence. |
| EN14 | `past-questions/english-2006.js:122` | A | Primary stress is on AL in genealogy. The printed D capitalizes ALOGY across several syllables; it is a malformed stress-marking option. This is explicitly described as a printing/format problem. No option was silently repaired. |
| EN21 | `past-questions/english-2008.js:86` | B | The sentence describes observant visitors’ behaviour. A changes it into universal advice that all visitors must be alert. |
| EN22 | `past-questions/english-2008.js:96` | D | Democratic authority contrasts with absolute rule. A benevolent leader can still be an absolute ruler; kindness alone does not reverse the relevant meaning. |
| EN23 | `past-questions/english-2008.js:124` | C | The offered standard attributive compound is “a three-part analysis.” D lacks its hyphen; no existing option was rewritten. |
| EN26 | `past-questions/english-2009.js:29` | B | The passage explains pidgin’s first-choice status among people of different ethnic and linguistic backgrounds. Writers’ later adoption demonstrates its spread rather than supplying that main cause. |
| EN27 | `past-questions/english-2009.js:39` | D | The final paragraph explicitly says the condition worsens gradually, so victims may not recognize a serious disorder. A social “status symbol” is not a direct claim that inadequate sleep enhances personality. |
| EN41 | `past-questions/english-2011.js:22` | B | “Early bio cells were powered with sugar” is the exact historical claim. A wider range of possible fuels is discussed separately; C’s initial sugar-and-fuel conjunction is not that statement. |
| EN56 | `past-questions/english-2015.js:25` | C | Noise, accidents, crowding and danger support the traffic-disorder inference. A incorrectly generalizes insufficient road widening/straightening to insignificant improvement in transport as a whole. |
| EN57 | `past-questions/english-2015.js:32` | A | Selecting and trimming stems, ignoring unsuitable hills and careful feeding directly support meticulous behaviour. D combines sociality with an overbroad diet label despite the stated varied, predominantly fruit-based diet. This does not deny that chimpanzees sometimes eat meat. |
| EN61 | `past-questions/english-2016.js:20` | A | The passage says physical force may create circumstances for diplomatic negotiations. A gives that specific peace-seeking inference; D generalizes one possible purpose into an undefined benefit of conflicts as such. |
| EN69 | `past-questions/english-2019.js:26` | C | Specialization necessitates exchange. The following sentence’s “movement away” refers to the wider transition from self-sufficiency, not a requirement to repeat movement in the gap. |

The ten `MOVE_TO_TRAPS` items above receive genuine final trap paragraphs. EN14, EN22, EN41 and EN57 remain ordinary single-answer questions without adding new trap paragraphs merely to fill a category. Their corrected-source-key notes remain visible separately.

Exact questions, options, before/after metadata, original source-key letters, teaching keys and final answer letters are recorded in **`english-change-manifest.json`**.

## Twelve proposed narrowings not applied

| ID | Existing acceptance preserved | Why the report does not establish a safe exclusion |
|---|---|---|
| EN03 | A/C | Clearly interconnected and somewhat interconnected differ in certainty/degree rather than being clean opposites. The passage establishes links but does not conclusively exclude the qualified formulation. |
| EN05 | B/A | Both course-material and course-materials compounds can describe writers. Preference for one established phrase does not establish the singular form as invalid. |
| EN15 | A/D | The possessive/ellipsis construction needs care. The report’s blanket rejection of doubled possession is insufficient because English permits double genitives; no restriction was imposed without resolving this exact construction. |
| EN16 | C/D | “The handwriting on the wall” is a real idiom alongside “the writing on the wall.” C’s printed open spelling “hand writing” is an editorial issue, not proof that the underlying idiom is false. |
| EN31 | B/D | “Value honour in their lives” is grammatical as well as “above their lives.” The stem does not explicitly demand a comparison of priorities. |
| EN35 | D/A | The full stress passage discusses both changing contributing behaviour and aerobic exercise, calling exercise the best way to drain stress energy. It does not cleanly establish the report’s exclusive ranking from the broad question. |
| EN36 | B/D | The passage explicitly discusses internal and external stressors and calls much stress self-generated. An external-only formulation cannot safely displace that supported inference. |
| EN38 | A/D | Axe-to-grind has grievance and private-interest readings. Adding “with his brothers” does not conclusively eliminate the latter; hatred is itself stronger than a grievance. |
| EN43 | D/C | Both human life and human systems fit the supplied cloze. A preferred technical pairing with ecosystems is not an exclusive answer supplied by this gapped passage. |
| EN45 | D/B | Both “a reason” and “a certain reason” are grammatical with a deliberately withheld explanation. Greater specificity is not an error in the other option. |
| EN59 | B/C | Assert and exert authority differ in emphasis but can both fit this situation. A collocational preference alone did not justify removing existing acceptance. |
| EN60 | C/A | PH in phantom represents the single phoneme /f/. Phew /fjuː/ contains that same initial /f/; its additional /j/ does not remove the matching phoneme. This differs from EN10, whose full highlighted NG represents a two-consonant sequence. |

No new alternatives were added to these held items.

## Unchanged and defective groups

The report’s **44 KEEP_MULTIPLE** entries remain unchanged. This is preservation of the existing decisions within the requested reconciliation scope, not certification that every wording issue elsewhere in the English bank has been resolved.

**EN17, EN20 and EN48 remain on editorial hold** with their existing scoring unchanged. The awkward adjective order, defective Asian-prescription cloze and imprecise antidote antonyms were not silently rewritten or converted into automatic no-answer scoring.

EN66/EN71 refer to the same cloze wording appearing in **2018 and 2020** (`english-2018.js:30`, `english-2020.js:30`). EN67/EN72 similarly refer to `english-2018.js:31` and `english-2020.js:31`. These are actual repeated source occurrences, not a reason to delete either year. Identical-option items EN44, EN52 and EN53 retain both duplicate correct choices.

## Validation and limits

- Runtime comparison checked all **1,733 English records** after application: exactly 14 intended metadata changes; the other **1,719 question objects** are unchanged.
- Every question, option array, passage and year is unchanged, including the 14 edited records.
- Exactly 14 prepared Teach Me values were updated; every other prepared English entry is unchanged. All updated entries meet 100–180 words, and genuine trap paragraphs are last.
- JavaScript loading and source/teaching-key checks pass. Whitespace checks pass.
- Only the ten affected English year files and `teach/english.js` were edited. No manifest was edited by this reviewer.

This verification uses the current application’s full source contexts and existing recorded key provenance. It does not claim a newly verified official JAMB marking scheme or a fresh dictionary download. The parent performs release-level browser, scoring and offline verification.
