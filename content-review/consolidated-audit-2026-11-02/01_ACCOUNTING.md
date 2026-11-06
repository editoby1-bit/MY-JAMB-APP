# JAMB tricky-question audit — RESTART / Batch 01: Accounting (complete subject)

Source: `MY-JAMB-APP-main (1).zip`, `past-questions/accounting-YYYY.js`. All seven Accounting records carrying `alsoAccept` were inspected afresh against their actual stems and choices. **No app files edited.** This is an editorial review, not an authenticated official JAMB key.

## Decision vocabulary
- `REMOVE_SPECIAL`: one correct answer; competing choice is not sufficiently plausible to teach as a trap.
- `MOVE_TO_TRAPS`: one superior answer; tempting competing choice is meaningfully misleading.
- `KEEP_MULTIPLE`: two or more independently correct choices; **leave record unchanged**.
- `NEEDS_REVIEW`: do not implement a change until an identified ambiguity is resolved.

## A01 — Accounting 2004 — debenture redemption
- Stem: “Debentures can be redeemed out of”
- Options: A existing share capital reserve; B existing general reserve; C proceeds from new issue of shares; D withholding tax.
- Current: primary B, also C.
- **Decision: `KEEP_MULTIPLE` (B, C).** Both accumulated profits/reserves and proceeds of new share issues can finance redemption; neither is excluded by the stem. No change.
- Confidence: high.

## A02 — Accounting 2005 — profit available for appropriation
- Stem: “Calculate the profit available for appropriation” (refers to partnership preamble).
- Options: A ₦7,000; B ₦12,000; C ₦10,000; D ₦8,000.
- Current: primary D, also C.
- **Decision: `MOVE_TO_TRAPS`; preferred C (₦10,000).** Profit available *for appropriation* is the net profit before appropriating partner salary; ₦8,000 is the remainder after the ₦2,000 partner salary. D is tempting because it is the balance available for *sharing*, not appropriation.
- Implementation: change primary D → C, clear alternate D, add trap explanation. Verify the linked preamble is preserved.
- Confidence: high.

## A03 — Accounting 2007 — benefits of bookkeeping
- Stem: “One of the benefits of book-keeping records is that they”
- Options: A give prospective investors accurate and direct information for decision-making; B provide the public and creditors with details of operations; C give legal backing to all transactions; D provide information without which management would be difficult.
- Current: primary A, also D.
- **Decision: `MOVE_TO_TRAPS` candidate; preferred D.** D describes a direct, central use of bookkeeping. A overstates *direct* access by prospective investors, who generally receive financial reports derived from records. Nonetheless, A is not categorically false, so **hold implementation pending external textbook/key check**.
- Confidence: medium. Status: `NEEDS_REVIEW` for implementation.

## A04 — Accounting 2009 — production-support department costs
- Stem: “The costs incurred by departments that support the production department with such activities as maintenance, production control and storage are called”
- Options: A autonomous costs; B service costs; C supporting costs; D subsidiary costs.
- Current: primary C, also B.
- **Decision: `KEEP_MULTIPLE` (B, C).** “Service costs” is the more established technical label, but “supporting costs” accurately describes the same category and is not contradicted by the question. Greater conventionality alone is insufficient to mark C wrong. No change.
- Confidence: medium-high.

## A05 — Accounting 2010 — bank statement vs cash book
- Stem: “A major cause of the discrepancy between bank statement and the cash book that overstates the bank statement balance is the”
- Options: A commission paid; B interest received; C direct payment; D direct withdrawal.
- Current: primary C, also B.
- **Decision: `KEEP_MULTIPLE` (B, C), with wording caveat.** Interest credited by bank and direct payment *into* the bank by a customer can each make bank statement higher than the unupdated cash book. “Direct payment” alone is directionally ambiguous; cannot confidently disqualify B. No change.
- Confidence: high that B is independently correct.

## A06 — Accounting 2010 — interest on partner's loan
- Stem: “The interest on partners' loan is”
- Options: A debited in current account; B credited in profit and loss account; C debited in profit and loss account; D credited in current account.
- Current: primary C, also D; stored original booklet key A.
- **Decision: `MOVE_TO_TRAPS`; preferred C.** Interest is a charge against profits and therefore debited to P&L. D is a plausible counterpart credit under some accounting arrangements, but not a universal destination and does not best describe the expense treatment. A is incorrect.
- Implementation: keep primary C, remove alternate D, explain why D is attractive. Preserve original booklet-key provenance.
- Confidence: medium-high (journal-entry convention means further syllabus verification is worthwhile).

## A07 — Accounting 2017 — bank reconciliation additions
- Stem: “When starting with the cash book balance in preparing the bank reconciliation statement, the following are added”
- Options: A unpresented cheque; B dividend; C uncredited cheque; D credit transfer.
- Current: primary A, also B and D.
- **Decision: `NEEDS_REVIEW`, no change yet.** If starting with an *unadjusted* cash book, A/B/D may be added when arriving at statement balance. In the standard *adjusted cash book then reconciliation* approach, B and D are entered in the cash book first, leaving A as the reconciliation addition. The stem does not specify which starting balance. Verify the intended procedure from a reliable source before deciding `KEEP_MULTIPLE` or `MOVE_TO_TRAPS`.
- Confidence: high in ambiguity, low in exclusive A without further context.

## Subject tally and implementation queue
- `KEEP_MULTIPLE` / untouched: **3** (A01, A04, A05).
- `MOVE_TO_TRAPS` recommended: **2** (A02, A06).
- `NEEDS_REVIEW` before any implementation: **2** (A03, A07).
- `REMOVE_SPECIAL`: **0** confirmed in Accounting.

**Implementation instruction:** These are recommendations only. Do not silently modify source, delete questions, or treat conditional rulings as approved. In particular, `KEEP_MULTIPLE` records must remain unchanged. The coding AI should verify the complete prefixed question context and answer metadata before applying the two recommended trap migrations.

**Next:** Economics, in approximately three batches of 19–20 flagged records, then proceed subject by subject. Batch numbering is reset here; earlier audit files are superseded.
