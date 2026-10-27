/**
 * JAMB/UTME 2017 — MATHEMATICS
 * From the 2017 question paper (40 questions); answers from the JAMB/UTME Mathematics answer
 * key 2001–2020, each verified by working the question. Misprints carry keyVerdict/answerNote.
 */
(function () {
  const Y = 2017;
  const SRC = 'JAMB UTME 2017';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});
  const IMG = f => `<img src="past-questions/img/${f}" alt="Diagram for this question" loading="lazy">`;

  QUESTION_BANK.mathematics = QUESTION_BANK.mathematics.concat([
    // paper 1–10
    q("Simplify log_{4} 256 − log_{4} 4 + 2.", ["4", "2", "2", "5"], D,
      "256 = 4⁴, so log_{4} 256 = 4; log_{4} 4 = 1. So 4 − 1 + 2 = 5."),
    q("Find the area of a parallelogram PQRS with base 16 cm long and the height 8 cm.", ["126 cm²", "128 cm²", "122 cm²", "124 cm²"], B,
      "Area of a parallelogram = base × perpendicular height = 16 × 8 = 128 cm²."),
    q("Express 0.265 in standard form.", ["2.65 × 10^{1}", "2.65 × 10^{2}", "2.65 × 10^{−1}", "2.65 × 10^{2}"], C,
      "Move the decimal point one place to the right to get 2.65, so 0.265 = 2.65 × 10^{−1}."),
    q("A car was put on sale for ₦12,000. It was sold for a discount of 20%. How much was paid for it?", ["₦7,200", "₦9,600", "₦9,800", "₦6,400"], B,
      "Discount = 20% of ₦12,000 = ₦2,400. Price paid = ₦12,000 − ₦2,400 = ₦9,600."),
    q("If U = {1, 2, 3, …, 10} and N = {2, 4, 6, 8, 10}, find N′.", ["{1, 2, 3, 5, 6, 9}", "{1, 3, 6, 7, 9}", "{1, 3, 5, 7, 9}", "{1, 3, 5, 7}"], C,
      "N′ is every element of U not in N: {1, 3, 5, 7, 9}."),
    q("Find the value of x for which the function f(x) = 3x² − x − 6 is minimum.", ["−1/6", "1/6", "−73/12", "73/12"], B,
      "f′(x) = 6x − 1 = 0 gives x = 1/6; f″(x) = 6 > 0, so this is a minimum."),
    q("A binary operation on the set of real numbers is defined by x * y = (x + y)/2 for all x, y ∈ R. Find 7 * 5.", ["8", "9", "5", "6"], D,
      "7 * 5 = (7 + 5)/2 = 12/2 = 6."),
    q("If the midpoint of (2, x) and (y, 2) is (4, 2), the respective values of x and y are", ["2, 6", "3, 6", "4, 3", "6, 4"], A,
      "(2 + y)/2 = 4 gives y = 6; (x + 2)/2 = 2 gives x = 2. So x = 2, y = 6."),
    q("y is inversely proportional to x and y = 6 when x = 7. Find the constant of the variation.", ["48", "47", "54", "42"], D,
      "y = k/x, so k = xy = 7 × 6 = 42."),
    q("From the diagram above, the value of x is", ["90°", "110°", "100°", "80°"], D,
      "MNSL is a cyclic quadrilateral, so opposite angles add to 180°: x = 180° − 100° = 80°.",
      { diagram: IMG('maths-2017-q10.png') }),
    // paper 11–20
    q("Given: M = {1, 2, 3, 4, 5}, N = {1, 2, 4, 5, 3}, Z = {2, 1, 4, 5}. Which of the following is accurate?", ["N ⊂ M", "N ⊂ M", "Z ⊂ M", "N ⊂ Z"], C,
      "N has exactly the same elements as M, so N = M and N is not a proper subset of M. Every element of Z is in M and M has an extra element (3), so Z ⊂ M (Z is a proper subset of M)."),
    q("The locus of a point moving with equal distance from a point is", ["a parabola", "a sphere", "a circle", "an ellipse"], C,
      "All points at a fixed distance from a fixed point form a circle (in a plane), with the fixed point as centre."),
    q("Solve x² − 5x + 6 ≤ 0.", ["−3 ≤ x ≤ −2", "−2 ≤ x ≤ −1", "1 ≤ x ≤ 2", "2 ≤ x ≤ 3"], D,
      "x² − 5x + 6 = (x − 2)(x − 3) ≤ 0 between the roots: 2 ≤ x ≤ 3."),
    q("Find the simple interest on ₦225 in 5 years at 10%.", ["₦108.00", "₦224.00", "₦112.50", "₦167.60"], C,
      "I = PRT/100 = 225 × 10 × 5/100 = ₦112.50."),
    q("Find the range of 2, 6, 8, 10, 12, 25, 3, 4 and 32.", ["27", "30", "22", "24"], B,
      "Range = largest − smallest = 32 − 2 = 30."),
    q("Find the determinant of the matrix with rows (1, 0, 1), (1, 1, 0) and (0, 1, 2).", ["3", "6", "4", "5"], A,
      "Expand along the first row: 1(1 × 2 − 0 × 1) − 0 + 1(1 × 1 − 1 × 0) = 2 + 1 = 3."),
    q("From the top of a tree, the angle of depression to a point on the ground 5 m away is 60°. Find the height of the tree.", ["5√3 m", "√55 m", "4√5 m", "√60 m"], A,
      "The angle of elevation from the point is also 60°: tan 60° = h/5, so h = 5√3 m."),
    q("Factorize completely 4u² − 36uv − uv + 9v².", ["(4u + v)(u + 9v)", "(4u + v)(u − 9v)", "(4u − v)(u − 9v)", "(4u − v)(u + 9v)"], C,
      "Group: 4u(u − 9v) − v(u − 9v) = (4u − v)(u − 9v)."),
    q("Find the turning points of the function y = x³ − x² − x.", ["1, −1/3", "−1, −1/3", "−1, 1/3", "1, 1/3"], A,
      "dy/dx = 3x² − 2x − 1 = (3x + 1)(x − 1) = 0, so the turning points are at x = 1 and x = −1/3."),
    q("If Q is the matrix with rows (3, −2, 1), (−2, 1, −1) and (1, −3, 2), then −3Q is", ["the matrix with rows (−9, 6, −3), (6, −3, 3), (−3, 9, −6)", "the matrix with rows (9, −6, 3), (−6, 3, 3), (3, −9, −6)", "the matrix with rows (−9, −6, 3), (6, 3, −3), (−3, −9, 6)", "the matrix with rows (9, −6, 3), (−6, 3, −3), (−3, 9, −6)"], A,
      "Multiply every entry of Q by −3: rows (−9, 6, −3), (6, −3, 3), (−3, 9, −6)."),
    // paper 21–30
    q("Find the number of ways the letters of the word COMMITTEE can be permuted.", ["9!", "9!/(2!2!2!)", "9!/(2!2!)", "9!/2!"], B,
      "COMMITTEE has 9 letters with M, T and E each repeated twice, so 9!/(2! × 2! × 2!)."),
    q("Convert 553_{7} to a number in base 10.", ["283", "271", "298", "292"], A,
      "553_{7} = 5 × 7² + 5 × 7 + 3 = 245 + 35 + 3 = 283."),
    q("If y varies directly as x, find the constant of the variation when y = 12 and x = 4.", ["8", "6", "5", "3"], D,
      "y = kx, so k = y/x = 12/4 = 3."),
    q("If p varies inversely as the square of q and p = 4 when q = 5, find p when q = 2.", ["32", "12", "16", "25"], D,
      "p = k/q²: k = 4 × 25 = 100. When q = 2, p = 100/4 = 25."),
    q("The histogram above shows the number of participants in a meeting from Monday to Friday. How many participated on Monday, Wednesday and Thursday?", ["55", "50", "65", "45"], A,
      "Read the bars: Monday 25, Wednesday 20, Thursday 10. Total = 25 + 20 + 10 = 55.",
      { diagram: IMG('maths-2017-q25.png') }),
    q("Determine the distance between the points P(3, 4) and Q(4, 5).", ["2", "√5", "√2", "1"], C,
      "PQ = √((4 − 3)² + (5 − 4)²) = √(1 + 1) = √2."),
    q("Find the number of sides of a regular polygon if the size of each interior angle is 150°.", ["9", "12", "10", "14"], B,
      "Each exterior angle = 180° − 150° = 30°. Number of sides = 360° ÷ 30° = 12."),
    q("Given that θ is an acute angle and tan θ = 12/5, find sin θ.", ["12/13", "5/12", "13/5", "5/13"], A,
      "Opposite 12, adjacent 5, hypotenuse √(144 + 25) = 13. sin θ = 12/13."),
    q("Find the sum to infinity of the series 1/4, 1/12, 1/36, …", ["2/3", "3/8", "1/8", "1/3"], B,
      "a = 1/4, r = (1/12) ÷ (1/4) = 1/3. S∞ = a/(1 − r) = (1/4)/(2/3) = 3/8."),
    q("The operation below was carried out in base 2. Find the missing number. **** + 111 + 110 = 10110 (the missing number is shown as ****).", ["1011", "1000", "1010", "1001"], D,
      "In base ten: 10110_{2} = 22, 111_{2} = 7, 110_{2} = 6. Missing number = 22 − 7 − 6 = 9 = 1001_{2}."),
    // paper 31–40
    q("A box contains 10 black, 4 green and 6 yellow pens. What is the probability of picking a yellow pen with eyes closed?", ["1/5", "7/10", "3/10", "1/2"], C,
      "Total pens = 10 + 4 + 6 = 20. P(yellow) = 6/20 = 3/10."),
    q("Evaluate 5⅓ × 7¼ ÷ 116/27.", ["3", "9", "8", "6"], B,
      "16/3 × 29/4 × 27/116 = (16 × 29 × 27)/(3 × 4 × 116) = 9."),
    q("If x³ − 2x² − x + 6 is divided by x − 3, find the remainder.", ["27", "9", "12", "18"], C,
      "Remainder theorem: f(3) = 27 − 18 − 3 + 6 = 12."),
    q("Evaluate (5^{−3} × 5^{−4})/(5^{−6} × 5^{−2}).", ["5", "25", "−7", "−8"], A,
      "Numerator 5^{−7}, denominator 5^{−8}; 5^{−7} ÷ 5^{−8} = 5^{−7 + 8} = 5¹ = 5."),
    q("From the diagram above, find the value of x.", ["15°", "45°", "25°", "30°"], A,
      "The 65° angle and the angle beside it on the straight line add to 180°, so that angle is 115°. In the top triangle: x = 180° − 50° − 115° = 15°.",
      { diagram: IMG('maths-2017-q35.png') }),
    q("The bar chart above is a representation of a candidate's scores in UTME in 2014. Find his total score.", ["210", "240", "340", "200"], A,
      "Read the bars: Physics 75, Maths 45, Chemistry 60, English 30. Total = 75 + 45 + 60 + 30 = 210.",
      { diagram: IMG('maths-2017-q36.png') }),
    q("Use the data below: 21, 21, 21, 22, 22, 22, 22, 23, 23, 24, 24, 24, 24, 24, 24, 25, 26, 36, 36, 36. Find the mode of the distribution.", ["24", "26", "36", "25"], A,
      "24 occurs six times, more often than any other value, so the mode is 24."),
    q("Use the data below: 21, 21, 21, 22, 22, 22, 22, 23, 23, 24, 24, 24, 24, 24, 24, 25, 26, 36, 36, 36. What is the mean of the distribution?", ["20", "23", "25", "21"], C,
      "There are 20 values and their sum is 500, so the mean = 500 ÷ 20 = 25."),
    q("A boy moves from a point P to another point Q due north. He then moves the same distance to another point R due east. What is the bearing of R from P?", ["300°", "135°", "225°", "045°"], D,
      "PQ (north) = QR (east), so triangle PQR is right-angled and isosceles: ∠QPR = 45°. Bearing of R from P = 045°."),
    q("Find the common difference of an A.P. whose 4th term is 24 and 11th term is 52.", ["4", "3", "14", "12"], A,
      "a + 3d = 24 and a + 10d = 52. Subtract: 7d = 28, so d = 4."),
  ]);
})();
