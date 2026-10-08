/**
 * JAMB/UTME 2020 — MATHEMATICS
 * From the 2020 question paper (39 of 40 questions; paper Q7 left out, see REPORT.md); answers from
 * the JAMB/UTME Mathematics answer key 2001–2020, each verified by working the question.
 * Misprints carry keyVerdict/answerNote.
 */
(function () {
  const Y = 2020;
  const SRC = 'JAMB UTME 2020';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});
  const IMG = f => `<img src="past-questions/img/${f}" alt="Diagram for this question" loading="lazy">`;

  QUESTION_BANK.mathematics = QUESTION_BANK.mathematics.concat([
    // paper 1–10 (paper Q7 left out)
    q("Simplify 1 − (1/7 × 3½) ÷ 3/4.", ["2", "1/3", "1", "2/3"], B,
      "1/7 × 7/2 = 1/2; 1/2 ÷ 3/4 = 1/2 × 4/3 = 2/3; 1 − 2/3 = 1/3."),
    q("Find the value of 110111_{2} + 10100_{2}.", ["1101011_{2}", "1000101_{2}", "1001011_{2}", "1001111_{2}"], C,
      "110111_{2} = 55 and 10100_{2} = 20; 55 + 20 = 75 = 64 + 8 + 2 + 1 = 1001011_{2}."),
    q("A woman bought a grinder for ₦60,000. She sold it at a loss of 15%. How much did she sell it for?", ["₦53,000", "₦52,000", "₦51,000", "₦50,000"], C,
      "Selling price = 85% of ₦60,000 = 0.85 × 60,000 = ₦51,000."),
    q("Find the mid-point of S(−5, 4) and T(−3, −2).", ["(−4, 2)", "(4, −2)", "(−4, 1)", "(4, 1)"], C,
      "Mid-point = ((−5 + (−3))/2, (4 + (−2))/2) = (−8/2, 2/2) = (−4, 1)."),
    q("How many sides has a regular polygon whose interior angle is 135° each?", ["12", "10", "9", "8"], D,
      "Each exterior angle = 180° − 135° = 45°; number of sides = 360° ÷ 45° = 8."),
    q("If log 7.5 = 0.8751, evaluate 2 log 75 + log 750.", ["6.6252", "6.6253", "66.252", "66.253"], B,
      "log 75 = 1.8751 and log 750 = 2.8751; 2 × 1.8751 + 2.8751 = 3.7502 + 2.8751 = 6.6253."),
    q("Solve for x in 8x^{−2} = 2/25.", ["4", "6", "8", "10"], D,
      "8x^{−2} = 8/x², so 8/x² = 2/25. Cross-multiply: 2x² = 200, so x² = 100 and x = 10 (taking the positive value, as in the options)."),
    q("Simplify (2√2 − √3)/(√2 + √3).", ["3√6 − 7", "3√6 + 7", "3√6 − 1", "3√6 + 1"], A,
      "Multiply top and bottom by √3 − √2: denominator 3 − 2 = 1; numerator (2√2 − √3)(√3 − √2) = 2√6 − 4 − 3 + √6 = 3√6 − 7."),
    q("Find the equation of the straight line through (−2, 3) and perpendicular to 4x + 3y − 5 = 0.", ["3x − 4y + 18 = 0", "3x + 2y − 18 = 0", "4x + 5y + 3 = 0", "5x − 2y − 11 = 0"], A,
      "Gradient of 4x + 3y − 5 = 0 is −4/3, so the perpendicular gradient is 3/4. y − 3 = (3/4)(x + 2) → 4y − 12 = 3x + 6 → 3x − 4y + 18 = 0."),
    q("From the Venn diagram above, the shaded part represents", ["(P∩Q)∪(P∩R)", "(P∪Q)(P∪R)", "(P∪Q)∪(P∪R)", "(P∩Q)∩(P∩R)"], A,
      "The shading covers the overlap of P with Q and the overlap of P with R, i.e. the union (P∩Q)∪(P∩R).",
      { diagram: IMG('maths-2020-q10.png') }),
    // paper 11–20
    q("If gt² − k − w = 0, make g the subject of the formula.", ["(k + w)/t²", "(k − w)/t²", "(k + w)/t", "(k − w)/t"], A,
      "gt² = k + w, so g = (k + w)/t²."),
    q("Factorize 2y² − 15xy + 18x².", ["(2y − 3x)(y + 6x)", "(2y − 3x)(y − 6x)", "(2y + 3x)(−6x)", "(3y + 2x)(y − 6x)"], B,
      "Product 2 × 18 = 36x², sum −15xy: −3xy and −12xy. 2y² − 12xy − 3xy + 18x² = 2y(y − 6x) − 3x(y − 6x) = (2y − 3x)(y − 6x)."),
    q("Find the value of k if y − 1 is a factor of y³ + 4y² + ky − 6.", ["−6", "−4", "0", "1"], D,
      "By the factor theorem, put y = 1: 1 + 4 + k − 6 = 0, so k = 1."),
    q("y varies directly as w². When y = 8, w = 2. Find y when w = 3.", ["18", "12", "8", "6"], A,
      "y = kw²: 8 = 4k, so k = 2. When w = 3, y = 2 × 9 = 18."),
    q("P varies directly as Q and inversely as R. When Q = 36 and R = 16, P = 27. Find the relation between P, Q and R.", ["P = Q/(12R)", "P = 12Q/R", "P = 12QR", "P = 12/(QR)"], B,
      "P = kQ/R: 27 = 36k/16, so k = 27 × 16/36 = 12. Hence P = 12Q/R."),
    q("What is the solution of (x − 5)/(x + 3) < −1?", ["−3 < x < 1", "x < −3 or x > 1", "−3 < x < 5", "x < −3 or x > 5"], A,
      "(x − 5)/(x + 3) + 1 < 0 → (2x − 2)/(x + 3) < 0. The critical values are x = 1 and x = −3, and the fraction is negative between them: −3 < x < 1."),
    q("Solve the inequality x/2 + 3/4 ≤ 5x/6 − 7/12.", ["x ≥ 4", "x ≤ 3", "x ≥ −3", "x ≤ −4"], A,
      "Multiply by 12: 6x + 9 ≤ 10x − 7 → 16 ≤ 4x → x ≥ 4."),
    q("The 4th term of an A.P. is 13 while the 10th term is 31. Find the 24th term.", ["89", "75", "73", "69"], C,
      "a + 3d = 13 and a + 9d = 31, so 6d = 18, d = 3 and a = 4. T_{24} = a + 23d = 4 + 69 = 73."),
    q("What is the common ratio of the G.P. (√10 + √5) + (√10 + 2√5) + …?", ["√2", "√5", "3", "5"], A,
      "r = (√10 + 2√5)/(√10 + √5). Multiply top and bottom by √10 − √5: (10 − √50 + 2√50 − 10)/5 = √50/5 = 5√2/5 = √2."),
    q("A binary operation * is defined by x * y = x^{y}. If x * 2 = 12 − x, find the possible values of x.", ["3, 4", "3, −4", "−3, 4", "−3, −4"], B,
      "x * 2 = x², so x² = 12 − x → x² + x − 12 = 0 → (x + 4)(x − 3) = 0, giving x = 3 or −4."),
    // paper 21–30
    q("Find y, if [[5, −6], [2, −7]] × [[x], [y]] = [[7], [−11]].", ["8", "5", "3", "2"], C,
      "5x − 6y = 7 and 2x − 7y = −11. Multiply the first by 2 and the second by 5 and subtract: −12y + 35y = 14 + 55 → 23y = 69 → y = 3 (and x = 5)."),
    q("Simplify 4√27 + 5√12 − 3√75.", ["7", "−7", "−7√3", "7√3"], D,
      "4√27 = 12√3, 5√12 = 10√3, 3√75 = 15√3; 12√3 + 10√3 − 15√3 = 7√3."),
    q("Find the value of the determinant |0 3 2; 1 7 8; 0 5 4| (rows (0, 3, 2), (1, 7, 8), (0, 5, 4)).", ["−12", "10", "−1", "−2"], D,
      "Expand along the first column (only the 1 in row 2 is non-zero): −1 × (3 × 4 − 2 × 5) = −(12 − 10) = −2."),
    q("The mean of 2 − t, 4 + t, 3 − 2t, 2 + t and t − 1 is", ["t", "−t", "2", "−2"], C,
      "Sum = (2 + 4 + 3 + 2 − 1) + (−t + t − 2t + t + t) = 10 + 0 = 10; mean = 10/5 = 2."),
    q("Values: 0, 1, 2, 3, 4 with frequencies 1, 2, 2, 1, 9 respectively. Find the mode of the distribution.", ["1", "2", "3", "4"], D,
      "The mode is the value with the highest frequency: 4 occurs 9 times."),
    q("Find the median of 5, 9, 1, 10, 3, 8, 9, 2, 4, 5, 5, 5, 7, 3 and 6.", ["6", "5", "4", "3"], B,
      "In order: 1, 2, 3, 3, 4, 5, 5, 5, 5, 6, 7, 8, 9, 9, 10. There are 15 numbers, so the median is the 8th: 5."),
    q("Which of the shaded regions in the following diagrams represents A ∩ B′ ∩ C?", ["A", "B", "C", "D"], C,
      "A ∩ B′ ∩ C is the part that is inside A and inside C but outside B: the region shaded in diagram C.",
      { diagram: IMG('maths-2020-q27.png') }),
    q("What is the total surface area of a right-angled triangular prism with sides 3 cm, 4 cm and 5 cm, if the length of the prism is 8 cm?", ["108 cm²", "226 cm²", "96 cm²", "88 cm²"], A,
      "Two triangular ends: 2 × ½ × 3 × 4 = 12 cm². Three rectangles: (3 + 4 + 5) × 8 = 96 cm². Total = 108 cm²."),
    q("If the angle of a sector of a circle with radius 10.5 cm is 120°, find the perimeter of the sector.", ["40 cm", "43 cm", "45 cm", "48 cm"], B,
      "Arc = 120/360 × 2 × 22/7 × 10.5 = 22 cm. Perimeter = arc + 2 radii = 22 + 21 = 43 cm."),
    q("Simplify 5⅓ × 7¼ ÷ 116/27.", ["3", "9", "8", "6"], B,
      "16/3 × 29/4 = 116/3; 116/3 ÷ 116/27 = 116/3 × 27/116 = 9."),
    // paper 31–40
    q("Express the product of 0.00043 and 2000 in standard form.", ["8.6 × 10^{−3}", "8.3 × 10^{−2}", "8.6 × 10^{−1}", "8.6 × 10"], C,
      "0.00043 × 2000 = 0.86 = 8.6 × 10^{−1}."),
    q("The gradient of the line joining (x, 4) and (1, 2) is ½. Find the value of x.", ["5", "3", "−3", "−5"], A,
      "(4 − 2)/(x − 1) = 1/2 → x − 1 = 4 → x = 5."),
    q("A man donates 10% of his monthly net earnings to his church. If it amounts to ₦4,500, what is his net monthly income?", ["₦40,500", "₦45,000", "₦52,500", "₦62,500"], B,
      "10% of income = ₦4,500, so income = 4,500 × 10 = ₦45,000."),
    q("The pie chart above shows the monthly distribution of a man's salary on food items. If he spent ₦8,000 on rice, how much did he spend on yam?", ["₦24,000", "₦18,000", "₦16,000", "₦12,000"], C,
      "Yam angle = 360° − (70° + 80° + 50°) = 160°. 80° stands for ₦8,000, so 1° = ₦100 and yam = 160 × ₦100 = ₦16,000.",
      { diagram: IMG('maths-2020-q34.png') }),
    q("Find the minimum value of y = x² − 2x − 3.", ["4", "1", "−1", "−4"], D,
      "y = (x − 1)² − 4, so the minimum value is −4 (at x = 1)."),
    q("Evaluate log_{2} 8 + log_{2} 16 − log_{2} 4.", ["3", "4", "5", "6"], C,
      "log_{2} 8 = 3, log_{2} 16 = 4, log_{2} 4 = 2; 3 + 4 − 2 = 5."),
    q("If P = {1, 2, 3, 4, 5} and P ∪ Q = {1, 2, 3, 4, 5, 6, 7}, list the elements in Q.", ["{6}", "{7}", "{6, 7}", "{5, 7}"], C,
      "6 and 7 are in P ∪ Q but not in P, so both must be in Q. Of the options, only {6, 7} contains both."),
    q("If sin θ = 12/13, find the value of 1 + cos θ.", ["25/11", "18/13", "8/13", "5/13"], B,
      "Right triangle 5, 12, 13: cos θ = 5/13 (θ acute). 1 + 5/13 = 18/13."),
    q("If y = 4x³ − 2x² + x, find dy/dx.", ["8x² − 2x + 1", "8x² − 4x + 1", "12x² − 2x + 1", "12x² − 4x + 1"], D,
      "dy/dx = 3 × 4x² − 2 × 2x + 1 = 12x² − 4x + 1."),
    q("Evaluate ∫ sin 2x dx.", ["cos 2x + k", "½ cos 2x + k", "−½ cos 2x + k", "−cos 2x + k"], C,
      "∫ sin ax dx = −(1/a) cos ax + k, so ∫ sin 2x dx = −½ cos 2x + k."),
  ]);
})();
