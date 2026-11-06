# JAMB Tricky Questions — Mathematics: Complete Source-Based Audit

Source: uploaded `MY-JAMB-APP-main (1).zip`, canonical `past-questions/mathematics-YYYY.js` files. Scope: records with `alsoAccept`.

**Result:** 7 unique flagged records; 6 `KEEP_MULTIPLE`, 1 `DEFECTIVE` (ambiguous wording; preserve both currently accepted answers pending rewrite); 0 `MOVE_TO_TRAPS`; 0 `REMOVE_SPECIAL`.

## Decisions

### MATH01 — 2004
- **Question:** The inverse of the matrix [[2, 1], [1, 1]] is
- **Options:** [[1, 1], [1, 2]] | [[1, 1], [−1, 2]] | [[1, −1], [−1, 2]] | [[1, −1], [−1, 2]]
- **Final classification:** `KEEP_MULTIPLE`
- **Reason:** C and D print the identical correct inverse matrix. Preserve both for fair scoring; flag duplicated options for editorial cleanup.
- **Implementation:** Do not delete an accepted answer. For `DEFECTIVE`, flag for editorial rewrite and preserve existing grading until corrected.

### MATH02 — 2005
- **Question:** If M and N are two matrices defined by M = [[1, 3, 2], [4, 5, −1], [−3, 2, 0]] and N = [[1, −2, 3], [4, −1, 5], [2, −3, −1]], evaluate 2M − 3N.
- **Options:** [[−1, 12, −5], [−4, 13, −17], [−12, 13, 3]] | [[−1, 12, 5], [4, 7, 13], [0, 12, −5]] | [[−1, 0, −5], [−4, 7, −17], [0, −5, 3]] | [[−1, 12, −5], [−4, 13, −17], [−12, 13, 3]]
- **Final classification:** `KEEP_MULTIPLE`
- **Reason:** A and D print the identical computed matrix. Preserve both; flag duplicated options.
- **Implementation:** Do not delete an accepted answer. For `DEFECTIVE`, flag for editorial rewrite and preserve existing grading until corrected.

### MATH03 — 2006
- **Question:** The cost of renovating a 6m square room is ₦540. What is the cost of renovating a 9m square room?
- **Options:** ₦720 | ₦810 | ₦1,620 | ₦1,215
- **Final classification:** `DEFECTIVE`
- **Reason:** “6m square room” can mean a square of side 6m (D: ₦1,215) or an area of 6m² (B: ₦810). The expression is ambiguous; do not force a sole answer. Editorial rewrite needed.
- **Implementation:** Do not delete an accepted answer. For `DEFECTIVE`, flag for editorial rewrite and preserve existing grading until corrected.

### MATH04 — 2008
- **Question:** If x > 0, find the range of the numbers x − 3, 3x + 2, x − 1, 4x, 2x − 1, x − 2, 2x − 2, 3x and 3x + 1.
- **Options:** 3x + 3 | 3x + 1 | 2x + 5 | 2x + 1
- **Final classification:** `KEEP_MULTIPLE`
- **Reason:** For 0<x<2, maximum is 3x+2, range 2x+5 (C). For x≥2, maximum is 4x, range 3x+3 (A). Both are correct on allowed domain. Keep both; question is under-specified.
- **Implementation:** Do not delete an accepted answer. For `DEFECTIVE`, flag for editorial rewrite and preserve existing grading until corrected.

### MATH05 — 2009
- **Question:** Evaluate (81.81 + 99.44)/(20.09 + 36.16) correct to 3 significant figures.
- **Options:** 6.21 | 3.22 | 3.22 | 2.13
- **Final classification:** `KEEP_MULTIPLE`
- **Reason:** B and C both print 3.22, the correct value to 3 significant figures. Keep both.
- **Implementation:** Do not delete an accepted answer. For `DEFECTIVE`, flag for editorial rewrite and preserve existing grading until corrected.

### MATH06 — 2012
- **Question:** Make n the subject of the formula if w = v(2 + cn)/(1 − cn).
- **Options:** (1/c)((w − 2v)/(v + w)) | (1/c)((w − 2v)/(v − w)) | (1/c)((w + 2v)/(v + w)) | (1/c)((w − 2v)/(v + w))
- **Final classification:** `KEEP_MULTIPLE`
- **Reason:** A and D print the identical correct expression for n. Keep both.
- **Implementation:** Do not delete an accepted answer. For `DEFECTIVE`, flag for editorial rewrite and preserve existing grading until corrected.

### MATH07 — 2014
- **Question:** Calculate the mid-point of the line segment y − 4x + 3 = 0 which lies between the x-axis and the y-axis.
- **Options:** (3/8, −3/2) | (3/8, −3/2) | (−3/2, −3/2) | (−2/3, −3/2)
- **Final classification:** `KEEP_MULTIPLE`
- **Reason:** A and B print the identical correct midpoint (3/8, −3/2). Keep both.
- **Implementation:** Do not delete an accepted answer. For `DEFECTIVE`, flag for editorial rewrite and preserve existing grading until corrected.

## Editorial note
Duplicate printed correct options are a question-quality defect, but are not grounds to penalize a student who chose either correct option. The 2006 and 2008 items need wording fixes; these are separate from any immediate scoring changes.