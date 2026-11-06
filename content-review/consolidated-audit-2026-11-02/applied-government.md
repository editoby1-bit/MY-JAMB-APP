# Applied Government audit corrections

2026-11-05. Applied only GOV05 and GOV19, as directed by root. No Literature, manifest, or other repository changes.

## Changes

- `past-questions/government-2003.js:167`, file position49: Mozambique **B only** for the2003 paper; Rwanda joined2009. Removed `alsoAccept:[C]` and multiple verdict. Source keyB retained; stem, options, year and source untouched. Updated explanation/answerNote clearly distinguish historical paper cutoff from present-day membership.
- `past-questions/government-2009.js:73`, file position20: Mauritania **B only** for the2009 paper; BurkinaFaso withdrew2025. Removed `alsoAccept:[D]` and multiple verdict. Source keyB retained; source text/options/year intact. Updated concise explanation/answerNote.
- `teach/government.js`: exactly the two matching legacy keys updated. Offline explanations127 and136 words. Each explains correctB and why the later modern alternative does not answer the dated paper. A genuine historical-cutoff trap is the final paragraph. No source key misrepresented as wrong; no `bookletKey`/WrongAnswers metadata introduced.

## Verification

Passed `node --check` for all three edited files. NodeVM comparison of all20Government year files versusHEAD proved exactly two record changes, at2003position49 and2009position20. Changed properties are only `explanation`, `answerNote`, `alsoAccept` removal and `keyVerdict` removal. Both `answer` values remain1 (B), `keyAnswer` staysB, and all other Government source records/fields are identical after evaluation. TeachMe comparison proves identical key set and exactly two changed text values; each100–180words and final “The trap:” paragraph. Verification script `/tmp/verify-government-audit.cjs`.

Current diff scoped to three files:8insertions/8deletions. No manifest regenerated or edited.
