/**
 * JAMB/UTME 2019 — MATHEMATICS
 * From the 2019 question paper (38 of 40 questions; paper Q10 and Q27 left out as unanswerable as
 * printed); answers from the JAMB/UTME Mathematics answer key 2001–2020, each verified by working
 * the question. Misprints carry keyVerdict/answerNote.
 */
(function () {
  const Y = 2019;
  const SRC = 'JAMB UTME 2019';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});
  const IMG = f => `<img src="past-questions/img/${f}" alt="Diagram for this question" loading="lazy">`;

  QUESTION_BANK.mathematics = QUESTION_BANK.mathematics.concat([
    // paper 1–9
    q("Solve for y in the equation 9^{2y+1} = 81^{y−2}/3^{y}.", ["2", "10", "−10", "−2"], C,
      "Write everything as powers of 3: 3^{4y+2} = 3^{4(y−2)}/3^{y} = 3^{3y−8}. So 4y + 2 = 3y − 8, giving y = −10."),
    q("Simplify √((8^{−2} × 2^{2n+1})/(4^{n} × 16^{−1})).", ["1", "√2", "√2/2", "1/2"], C,
      "In powers of 2: 2^{−6} × 2^{2n+1} ÷ (2^{2n} × 2^{−4}) = 2^{−6+2n+1−2n+4} = 2^{−1}. √(2^{−1}) = 1/√2 = √2/2."),
    q("What is the value of a if log_{49} a = 1.5?", ["434", "343", "334", "49"], B,
      "a = 49^{1.5} = 49^{3/2} = (√49)³ = 7³ = 343."),
    q("Simplify (√3 × √18 × √39)/(√24 × √26).", ["4√3/6", "√3/2", "3√6/4", "√3/8"], C,
      "= √((3 × 18 × 39)/(24 × 26)) = √(27/8) = 3√3/(2√2) = 3√6/4."),
    q("(log 4 − log 2)/log √8 simplifies to", ["3/2", "2/3", "4/5", "5/4"], B,
      "log 4 − log 2 = log 2, and log √8 = log 2^{3/2} = (3/2) log 2. So the ratio is 1 ÷ 3/2 = 2/3."),
    q("What is the value of t if the line which passes through (−1, −t) and (−2t, 2) is perpendicular to the line 2x + 8y + 17 = 0?", ["2/9", "7/8", "1/8", "2/7"], A,
      "2x + 8y + 17 = 0 has gradient −1/4, so the perpendicular gradient is 4. (2 + t)/(−2t + 1) = 4 gives 2 + t = 4 − 8t, so 9t = 2 and t = 2/9."),
    q("If the average of the scores 15, 21, 17, 26, 18 and 29 is 21, calculate the variance of the scores.", ["5", "25", "6", "150"], B,
      "Deviations from 21: −6, 0, −4, 5, −3, 8; squares 36, 0, 16, 25, 9, 64 add to 150. Variance = 150 ÷ 6 = 25."),
    q("Find the gradient of the tangent to the curve y = x² − 3x + 4 at the point (−1, 8).", ["5", "−1", "−5", "1"], C,
      "dy/dx = 2x − 3. At x = −1: 2(−1) − 3 = −5.",
      { keyVerdict: 'misprint', answerNote: "The paper prints the point as (−1, −1), but that point is not on the curve: at x = −1, y = 1 + 3 + 4 = 8. The point on the curve, (−1, 8), is shown here. The gradient depends only on x = −1, so the answer is the same." }),
    q("Solve the inequality −1/4 < (3/4)(3y − 2) < 1/2.", ["5/9 < y < 8/9", "8/9 < y < 5/9", "2/7 < y < 1/7", "1/7 < y < 2/7"], A,
      "Multiply through by 4/3: −1/3 < 3y − 2 < 2/3. Add 2: 5/3 < 3y < 8/3. Divide by 3: 5/9 < y < 8/9."),
    // paper 11–20 (paper Q10 left out)
    q("If y ∝ 1/x² and x = 3 when y = 2, find y when x = 3/2.", ["6", "10", "12", "8"], D,
      "y = k/x², so k = 2 × 3² = 18. When x = 3/2, y = 18 ÷ (9/4) = 18 × 4/9 = 8.",
      { keyVerdict: 'misprint', answerNote: "The paper prints option (d) as 18, a printing slip: y = 18 ÷ (3/2)² = 8, so option (d) is shown corrected as 8." }),
    q("A binary operation on the set of real numbers is defined by x * y = (x + y)/2 for all x, y ∈ R. Find the value of y if 3 * y = 24.", ["84", "48", "22", "45"], D,
      "3 * y = (3 + y)/2 = 24, so 3 + y = 48 and y = 45.",
      { keyVerdict: 'misprint', answerNote: "The paper prints option (d) as 54, with the digits swapped. (3 + y)/2 = 24 gives y = 45, so the corrected option is shown here." }),
    q("Calculate the length of the straight line joining the points (−1, 0) and (2, −2).", ["√6 units", "√13 units", "2√5 units", "√2 units"], B,
      "Distance = √((2 − (−1))² + (−2 − 0)²) = √(9 + 4) = √13 units."),
    q("Calculate the volume of a cone 7.0 cm deep with base radius 1½ cm. [π = 22/7]", ["16½ cm³", "14 cm³", "14½ cm³", "16 cm³"], A,
      "V = ⅓πr²h = ⅓ × 22/7 × (3/2)² × 7 = ⅓ × 22 × 9/4 = 33/2 = 16½ cm³."),
    q("A shopkeeper allows a discount of 10% on the marked price of a commodity. If a customer paid ₦56,000 for the commodity, what was the marked price of the commodity to the nearest whole number?", ["₦72,000", "₦62,222", "₦62,000", "₦72,222"], B,
      "₦56,000 is 90% of the marked price: 56,000 ÷ 0.9 = ₦62,222.22 ≈ ₦62,222."),
    q("Which of the following is a sketch of y = 2 sin x, 0 ≤ x < 2π?", ["A", "B", "C", "D"], A,
      "y = 2 sin x starts at 0 (sin 0 = 0), rises to a maximum of 2 at x = π/2, returns to 0 at π and falls to −2 at 3π/2: sketch A.",
      { diagram: IMG('maths-2019-q15.png') }),
    q("A box contains 2 white and 3 blue identical balls. If two balls are picked at random, one after the other, without replacement, what is the probability of picking two balls of different colours?", ["3/5", "2/5", "7/20", "3/10"], A,
      "P(white then blue) + P(blue then white) = (2/5)(3/4) + (3/5)(2/4) = 6/20 + 6/20 = 3/5."),
    q("If one of the roots of the equation 2y² − (m + 2)y + m = 0 is 2, find the value of m.", ["6", "4", "2", "3"], B,
      "Put y = 2: 8 − 2(m + 2) + m = 0, so 8 − 2m − 4 + m = 0 and m = 4."),
    q("Given that 11011_{2} + 11111_{2} + 10000_{2} is 10m10n0_{2}, find the values of m and n respectively.", ["1 and 0", "0 and 0", "1 and 1", "0 and 1"], D,
      "In base ten: 27 + 31 + 16 = 74 = 1001010_{2}. Matching 1 0 m 1 0 n 0 with 1 0 0 1 0 1 0 gives m = 0, n = 1."),
    q("A man made a loss of 15% when he sold an article for ₦510. What is the original price of the article?", ["₦600", "₦575", "₦545", "₦722"], A,
      "₦510 is 85% of the cost price: 510 ÷ 0.85 = ₦600."),
    q("Differentiate cos (x/a) with respect to x.", ["−sin (x/a²)", "(1/a) sin (x/a)", "−(1/a) sin (x/a)", "a sin (x/a)"], C,
      "Chain rule: d/dx cos (x/a) = −sin (x/a) × d/dx (x/a) = −(1/a) sin (x/a)."),
    // paper 21–26
    q("What is the remainder when the polynomial y³ + 4y² − 8y + 1 is divided by y − 1?", ["2", "−2", "1", "−1"], B,
      "Remainder theorem: f(1) = 1 + 4 − 8 + 1 = −2."),
    q("The angle of a sector of a circle of radius 10.5 cm is 120°. What is the perimeter of the sector?", ["23 cm", "40 cm", "43 cm", "34 cm"], C,
      "Arc = 120/360 × 2 × 22/7 × 10.5 = 22 cm. Perimeter = arc + two radii = 22 + 21 = 43 cm."),
    q("A committee of 5 members is to be chosen from a group of 6 men and 4 women. How many committees are possible if there are to be 3 men and 2 women in each committee?", ["24 ways", "120 ways", "720 ways", "96 ways"], B,
      "⁶C₃ × ⁴C₂ = 20 × 6 = 120 ways."),
    q("The sum of an infinite geometric series is 6 and the sum of the first two terms is 4½. Find the common ratio.", ["±1", "±0.5", "±3", "±0.25"], B,
      "a/(1 − r) = 6 and a(1 + r) = 9/2. Dividing: (1 − r)(1 + r) = 9/12 = 3/4, so r² = 1/4 and r = ±0.5."),
    q("Find the minimum value of the function y = 2x³ − 21x² + 36x − 20.", ["−3", "−30", "30", "−128"], D,
      "dy/dx = 6x² − 42x + 36 = 6(x − 1)(x − 6) = 0 gives x = 1 or 6. d²y/dx² = 12x − 42 > 0 at x = 6 (minimum): y = 432 − 756 + 216 − 20 = −128."),
    q("Find the locus of a point which is equidistant from the points X(1, 2) and Y(3, 5).", ["4x + 6y = 29", "6x + 4y = 29", "4x + 6y = 39", "6x + 4y = 39"], A,
      "(x − 1)² + (y − 2)² = (x − 3)² + (y − 5)² simplifies to −2x − 4y + 5 = −6x − 10y + 34, i.e. 4x + 6y = 29."),
    // paper 28–40 (paper Q27 left out)
    q("Evaluate (log 4^{1/2}) ÷ (log 4).", ["−1/2", "1/2", "2", "−2"], B,
      "log 4^{1/2} = (1/2) log 4, so (log 4^{1/2}) ÷ (log 4) = 1/2.",
      { keyVerdict: 'misprint', answerNote: "The expression on the original paper was not printed clearly (it reads as log 4^{1/2} ÷ log 20^{1/4}, which gives about 0.93 and matches no option). We rebuilt the question as the paper intended, (log 4^{1/2}) ÷ (log 4); the answer is 1/2 (B)." }),
    q("Factorise the expression ax − 2bx − 4by + 2ay.", ["(x + 2y)(a + 2b)", "(x − 2y)(a + 2b)", "(x + 2y)(a − 2b)", "(x − 2y)(a − 2b)"], C,
      "Group: x(a − 2b) + 2y(a − 2b) = (x + 2y)(a − 2b)."),
    q("Which of the following about a rhombus may NOT necessarily be true?", ["The diagonals bisect each other", "They have equal diagonals", "The adjacent sides are equal", "Opposite angles are equal"], B,
      "A rhombus has four equal sides, opposite angles equal and diagonals that bisect each other at right angles, but its diagonals are equal only when it is a square."),
    q("What is the total surface area of a right-angled triangular prism with sides 3 cm, 4 cm and 5 cm, if the length of the prism is 8 cm?", ["108 cm²", "226 cm²", "96 cm²", "88 cm²"], A,
      "Two triangular ends: 2 × ½ × 3 × 4 = 12 cm². Three rectangles: (3 + 4 + 5) × 8 = 96 cm². Total = 108 cm²."),
    q("The table shows the frequency distribution of the weight of a group of people in a certain hospital.\nWeights (kg): 30, 40, 50, 60, 70, 80\nFrequency: 5, 10, 11, Y, 4, 1\nIf the mean weight is 50 kg, calculate the median of the distribution.", ["60 kg", "50 kg", "70 kg", "80 kg"], B,
      "Σfx = 1460 + 60Y and Σf = 31 + Y; (1460 + 60Y)/(31 + Y) = 50 gives Y = 9, so there are 40 people. The 20th and 21st weights are both 50 kg (cumulative frequencies 5, 15, 26), so the median is 50 kg."),
    q("In the relation x/√3 = √(z/(z + y)), express z in terms of x and y.", ["x²y/(3 − x)", "y²x/(x² − 3)", "−x²y/(3 − x²)", "x²y/(3 − x²)"], D,
      "Square: x²/3 = z/(z + y), so x²z + x²y = 3z, 3z − x²z = x²y, and z = x²y/(3 − x²)."),
    q("If a fair coin is tossed three times, what is the chance of obtaining at least two heads?", ["1/4", "1/8", "1/2", "2/5"], C,
      "Of the 8 equally likely outcomes, HHT, HTH, THH and HHH have at least two heads: 4/8 = 1/2."),
    q("Find the value of ∫₀¹ (5x³ + 4x² + 7x) dx to 3 significant figures.", ["8.63", "6.083", "6.10", "6.08"], D,
      "[5x⁴/4 + 4x³/3 + 7x²/2] from 0 to 1 = 5/4 + 4/3 + 7/2 = 73/12 = 6.0833… = 6.08 (3 s.f.)."),
    q("The length of the hypotenuse of a right-angled isosceles triangle is √2 cm. What is the area of the triangle?", ["1 cm²", "2 cm²", "0.5 cm²", "0.25 cm²"], C,
      "Equal legs a: a² + a² = 2, so a = 1 cm. Area = ½ × 1 × 1 = 0.5 cm²."),
    q("If cos θ = t, find cot θ, with 0° ≤ θ ≤ 90°.", ["t/√(t² − 1)", "t/√(1 + t²)", "t/√(1 − t²)", "t/√(1 − t)"], C,
      "sin θ = √(1 − t²) (positive in this range), so cot θ = cos θ/sin θ = t/√(1 − t²)."),
    q("Which of the shaded regions in the following diagrams represents A ∩ B′ ∩ C?", ["A", "B", "C", "D"], C,
      "A ∩ B′ ∩ C is inside A and inside C but outside B: the part of the A–C overlap not covered by B, shaded in diagram C.",
      { diagram: IMG('maths-2019-q37.png'), keyVerdict: 'misprint', answerNote: "The paper prints the set as A∩B¹∩ᶜ: the C was set as a raised letter and the prime on B as a 1. The four diagrams shade A′∩B∩C, A∩B∩C′, A∩B′∩C and B only, so the intended set is A ∩ B′ ∩ C, shown here." }),
    q("The fourth term of an A.P. is 37 and the 6th term is 12 more than the fourth term. Find the seventh term.", ["55", "19", "36", "65"], A,
      "T₆ − T₄ = 2d = 12, so d = 6. T₇ = T₄ + 3d = 37 + 18 = 55."),
    q("In the diagram, O is the centre of the circle ABCD. If |AB| = |BC| and ∠CDA = 64°, find ∠BAD.", ["85°", "58°", "32°", "64°"], B,
      "ABCD is cyclic, so ∠ABC = 180° − 64° = 116°, and AB = BC makes ∠BAC = ∠BCA = 32°. AD is a diameter, so ∠ACD = 90° and ∠CAD = 90° − 64° = 26°. ∠BAD = 32° + 26° = 58°.",
      { diagram: IMG('maths-2019-q39.png') }),
    q("Find the value(s) of a for which the matrix [[a − 2, 2], [1, a − 3]] has no inverse.", ["1", "2", "1, 2", "1, 4"], D,
      "No inverse when the determinant is 0: (a − 2)(a − 3) − 2 = a² − 5a + 4 = (a − 1)(a − 4) = 0, so a = 1 or 4."),
  ]);
})();
