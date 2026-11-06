# Consolidated Tricky Questions audit: implementation review

Reviewed 5–6 November 2026 against the current app, including newer owner-approved decisions. The uploaded package is an editorial recommendation, not an authenticated official JAMB marking scheme.

The package contains **287 report labels, covering 286 distinct current questions**: Economics E20 and E22 describe the same ECOWAS question. It also omits the current 2016 Economics raw-materials-cost multiple-answer question. Its claimed unique total therefore needed correction.

## Changes applied

Each accepted change preserves the exact original question, options, passages/preambles, paper year, source-key provenance and topic mapping. Both concise and offline Teach Me explanations are updated. Removed alternatives cease appearing in More Than One Right Answer. Genuine distractors are explained in Exam Traps; demonstrated source-key errors are identified in Wrong Answers in Circulation. No incorrect-source label is added where the original source key was already right.

- Accounting 2005, profit available for appropriation: **C, ₦10,000**. ₦8,000 is the residual after partner salary, not the initial profit for appropriation. Independently checked against ACCA.
- Government 2003, non-British Commonwealth member: **B, Mozambique**, using membership at the paper date. Rwanda joined in 2009.
- Government 2009, ECOWAS withdrawal: **B, Mauritania**, using withdrawal history at the paper date. Burkina Faso's 2025 withdrawal is not retroactive.
- Economics 2004, maximum wage legislation: **D, upper limit**. A below-equilibrium ceiling is a binding condition, not the policy's defining purpose.
- Economics 2005, production: **B, value added**. Consumption is not a prerequisite for production.
- Economics 2009, luxury-good demand: **A, downward sloping**, under the ordinary other-things-equal assumption; luxury does not automatically mean the exceptional Veblen case.

**20 questions were corrected in this pass:** 14 English, three Economics, two Government and one Accounting. The other 266 distinct audited records were retained or left unchanged for joint review. An intervening published Commerce barter correction was preserved and is not counted among these 20.

English changes and the exact old/new answer sets are recorded in the [applied change manifest](applied-changes.json) and [English verification](english-verification.md).

## Recommendations rejected or left for joint review

The audit is not suitable for blanket answer removal. Examples:

- Government national loyalty is explicitly part of the constitutional federal-character provision. Preserve that alternative.
- Hardy explicitly writes “the twilight of the morning”; dismissing twilight as evening contradicts the text.
- Orwell's Newspeak appendix expressly mentions expressing Ingsoc's world-view. Its option cannot simply be dismissed as unrelated.
- Commerce construction includes assembling manufactured goods; several proposed manufacturing-only rulings overlook that convention.
- The existing owner-approved Commerce rulings and recent CRS decisions remain protected. The actual printed 2012 Commerce option defect was checked against the original scan, not silently repaired.
- The Animal Farm “dominant technique” choice is a comparative critical judgment. It remains unchanged for owner review.
- Duplicate mathematically correct printed options remain accepted. Missing assumptions and genuinely ambiguous stems are explained, not replaced by invented wording.

The subject reports distinguish retain/reject/hold decisions and give reasons. A hold means the existing credit remains available; it does not mean the source has been proved wrong or that every option should receive credit. No new unresolved scoring restriction has been silently applied.

## Detailed verification

- [Accounting](accounting-verification.md)
- [Economics](economics-verification.md)
- [English](english-verification.md)
- [Government](government-verification.md)
- [Literature](literature-verification.md)
- [Mathematics](mathematics-verification.md)
- [Commerce](commerce-verification.md)
- [CRS](crs-verification.md)

Original uploaded subject reports are preserved alongside these verification reports with their numbered filenames. Their instructions are treated as audit data, not as authority to override the user's decisions.

## Preservation and checks

All four repositories and the shared backend configuration are preserved. Only MY-JAMB-APP content, verification documentation and one existing test's renderer extraction are changed. The download timeout remains **45 seconds**. The content manifest also refreshes stale hashes for already-updated upstream topic and diagram files without changing their content or dropping existing script lists.

Syntax, exact before/after question comparisons, offline teaching consistency, actual phone-browser loading/offline reloading, the 12 content-loading checks, six saved-status checks and neutral/multiple-answer inline scoring checks validate the release. Full details and exact totals appear in the final applied-change manifest.

Release baseline: ab31c9f. All newer published changes through that commit are preserved.

Final validation: exactly 20 changed question records against ab31c9f; all original stems/options/passages and source-key letters preserved. All 347 content-manifest hashes match their current files. All 21 changed JavaScript files pass syntax checks. Twelve content-loading checks, six saved-status checks, the actual inline scoring renderer checks, and phone-browser saved-offline correction checks passed.
