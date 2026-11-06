# Government consolidated audit — independent current-source verification

Read-only verification, 2026-11-05. All 31 report stems matched uniquely to evaluated current source objects (including preambles). Mapping below uses 1-based current file positions, not assumed booklet numbering. No app files modified. Raw matched objects are in `government-mapped.json`.

## Outcome

Two clear historically dated scoring corrections are supported: GOV05 and GOV19. Reject GOV24's proposed removal: loyalty is explicitly a constitutional purpose, not merely an indirect consequence. GOV12's erroneous Jukun rationale exists only in the uploaded report; current app correctly explains Yoruba institutions already. GOV03 omits the country and cannot safely be restricted to Nigerian practice. GOV28/30 need an owner decision about strict dictionary suffrage versus the wider local textbook convention; current source intentionally accepts both. Leave all reported DEFECTIVE/NEEDS_REVIEW cases unchanged pending real context.

## Concrete safe change manifest

1. **GOV05 — government-2003.js:167, current position49**. Stem: “The non-British colony which is a member of the Commonwealth is”. Preserve source/options. Primary B remains; remove alternate C, remove `keyVerdict: multiple` (or use normal single-answer representation), keep source `keyAnswer: B`. Replace current answerNote with: “In this 2003 paper, B (Mozambique) is correct. Mozambique joined in 1995; Rwanda joined in 2009, so C is a later fact and was not an answer when the paper was set.” Do not add Wrong Answers in Circulation: source B was right. The question's source year supplies the temporal cutoff. Commonwealth official country pages confirm both admission years: https://thecommonwealth.org/our-member-countries/mozambique and https://thecommonwealth.org/our-member-countries/rwanda (both successfully retrieved during this check).
2. **GOV19 — government-2009.js:73, current position20**. Stem: “Which of the following countries has withdrawn her membership of the ECOWAS?” Primary B remains; remove alternate D; remove multiple metadata; preserve `keyAnswer: B`. Explain “For this 2009 paper, B (Mauritania) is correct: it withdrew in 2000. Burkina Faso's withdrawal took effect on 29 January 2025, so D must not be applied retrospectively.” Current app already records and correctly dates both historical facts but wrongly uses the 2025 event as an accepted 2009 answer. Independent live ECOWAS press-page retrieval returned404, so do not claim a successfully accessed new primary ECOWAS citation. Chronology is nevertheless unambiguous and agreed by both existing source explanation and consolidated report. No Wrong Answers in Circulation.

## Recommendations that must not be applied automatically

- **GOV03 (2002 position5, government-2002.js:29)**: the exact stem does not say Nigeria. UK Boundary Commissions delimit constituencies. Current answerNote already explains the international scope. Nigerian electoral commission D is expected, but C is independently correct under the unqualified wording. Keep D/C unless user chooses a Nigeria-only editorial interpretation; do not rewrite stem silently.
- **GOV24 (2012 position36, government-2012.js:127)**: KEEP C/A. 1979 Constitution s14(3) explicitly says federal character is used “to promote national unity, and also to command national loyalty”, then requires absence of predominance of a few states/ethnic/sectional groups. Hence the report's claim that loyalty is not a constitutional purpose is false. The source's current note cites this correctly. Current 1999 s14(3) also preserves the same wording, but do not conflate editions; inspect1979 if attaching a newly verified primary citation. Attempts to retrieve a1979 PDF returned403/404/503 in this run.
- **GOV28/GOV30 (2016/2020 position31, respective files:108)**: A is strict voting-right meaning. The existing app explicitly cites a broader Nigerian classroom definition for booklet C “vote and be voted for”. No independently retrieved syllabus was supplied to settle local usage. Keep C/A pending owner choice; do not imply C is proven false merely by a narrow dictionary definition. If owner chooses strict A, update primary to A, remove alternate, preserve source C in key provenance and explain the convention transparently.
- **GOV12 (2006 position17, government-2006.js:66)**: no correction needed in app. It already says Igbo umuada/Omu and Yoruba Iyalode/IyaOba/Iyakere. Jukun appears only in report's original rationale, corrected by its own reconciliation note.
- **GOV10 (2005 position46)**: numeric `3` is valid zero-based D in `alsoAccept`, not corrupt data. Keep current C/D pending defect handling. Nine-vote/no-veto distinctions and procedural-versus-substantive resolutions prevent treating either partial statement as a clean universal rule.
- **GOV07,18,23,27,31**: retain current sets. Their under-specification is not permission to mark every option correct. Commonwealth1931-versus1949 ambiguity affects both duplicate questions.

## All matched records

|Report|Source file:line|Current position|Accepted now|Action|
|---|---|---:|---|---|
|GOV01|government-2001.js:53|13|C,B|Retain|
|GOV02|government-2001.js:131|37|C,D|Retain|
|GOV03|government-2002.js:29|5|D,C|Reject removal; retain exact-stem alternatives|
|GOV04|government-2003.js:58|15|C,D|Retain|
|GOV05|government-2003.js:167|49|B,C|Safe: retain B only, historical paper cutoff|
|GOV06|government-2004.js:49|12|B,D|Retain|
|GOV07|government-2004.js:69|18|B,D|Hold defect/unspecified context; preserve scoring|
|GOV08|government-2004.js:115|32|D,B|Retain|
|GOV09|government-2005.js:30|6|B,A|Retain|
|GOV10|government-2005.js:156|46|C,D|Hold defect/unspecified context; preserve scoring|
|GOV11|government-2006.js:33|7|C,A|Retain|
|GOV12|government-2006.js:66|17|B,C|Retain|
|GOV13|government-2006.js:134|37|D,C|Retain|
|GOV14|government-2006.js:163|45|D,A,C|Retain|
|GOV15|government-2006.js:168|46|C,B|Retain|
|GOV16|government-2007.js:100|28|C,A|Retain|
|GOV17|government-2008.js:42|10|A,B|Retain|
|GOV18|government-2008.js:102|28|A,D|Hold defect/unspecified context; preserve scoring|
|GOV19|government-2009.js:73|20|B,D|Safe: retain B only, historical paper cutoff|
|GOV20|government-2010.js:37|8|A,D|Retain|
|GOV21|government-2010.js:151|44|B,A|Retain|
|GOV22|government-2011.js:62|16|B,A,D|Retain|
|GOV23|government-2011.js:137|39|B,D|Hold defect/unspecified context; preserve scoring|
|GOV24|government-2012.js:127|36|C,A|Reject removal; retain exact-stem alternatives|
|GOV25|government-2012.js:148|42|C,A|Retain|
|GOV26|government-2013.js:103|28|A,C|Retain|
|GOV27|government-2015.js:15|1|C,A|Hold defect/unspecified context; preserve scoring|
|GOV28|government-2016.js:108|31|C,A|Hold terminology decision|
|GOV29|government-2019.js:58|15|B,D|Retain|
|GOV30|government-2020.js:108|31|C,A|Hold terminology decision|
|GOV31|government-2020.js:128|37|C,A|Hold defect/unspecified context; preserve scoring|
