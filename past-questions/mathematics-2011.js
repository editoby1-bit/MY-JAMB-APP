/**
 * JAMB/UTME 2011 — MATHEMATICS
 * From the 2011 question paper; answers from the JAMB/UTME Mathematics answer key 2001–2020,
 * each verified by working the question. Key errors carry keyVerdict/keyAnswer/answerNote.
 * Paper Q1 ("Which question paper type…") is not a mathematics question and is left out.
 * Q38 is left out: y = x³ + x² + x + 1 has no minimum point (dy/dx = 3x² + 2x + 1 is never zero).
 * Q42 is left out: the bars of the bar chart cannot be read on the scan.
 * Q45 is left out: the interpolated mode is 7.3, which is not an option.
 * Q46 is left out: the standard deviation is √6, which is not an option.
 */
(function () {
  const Y = 2011;
  const SRC = 'JAMB UTME 2011';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});
  const IMG = f => `<img src="past-questions/img/${f}" alt="Diagram for this question" loading="lazy">`;

  QUESTION_BANK.mathematics = QUESTION_BANK.mathematics.concat([
    // Paper Q2–Q11
    q("If 2q3_{5} = 77_{8}, find q.", ["2", "4", "0", "1"], A,
      "77_{8} = 7 × 8 + 7 = 63. 2q3_{5} = 2 × 25 + 5q + 3 = 53 + 5q. So 53 + 5q = 63 and q = 2."),
    q("Simplify (3 2/3 × 5/6 × 2/3)/(11/15 × 3/4 × 2/27).", ["5 2/3", "4 1/3", "50", "30"], C,
      "Top: 11/3 × 5/6 × 2/3 = 110/54 = 55/27. Bottom: 11/15 × 3/4 × 2/27 = 66/1620 = 11/270. 55/27 ÷ 11/270 = 55/27 × 270/11 = 50."),
    q("A man invested ₦5,000 for 9 months at 4%. What is the simple interest?", ["₦150", "₦130", "₦250", "₦220"], A,
      "I = PRT/100 with T = 9/12 year: 5,000 × 4 × 3/4 ÷ 100 = ₦150."),
    q("If the numbers M, N, Q are in the ratio 5 : 4 : 3, find the value of (2N − Q)/M.", ["2", "1", "4", "3"], B,
      "Take M = 5k, N = 4k, Q = 3k: (8k − 3k)/5k = 5k/5k = 1."),
    q("Simplify (16/81)^{1/4} ÷ (9/16)^{−1/2}.", ["2/3", "8/9", "1/3", "1/2"], D,
      "(16/81)^{1/4} = 2/3. (9/16)^{−1/2} = (16/9)^{1/2} = 4/3. 2/3 ÷ 4/3 = 2/3 × 3/4 = 1/2."),
    q("If log_{3} 18 + log_{3} 3 − log_{3} x = 3, find x.", ["1", "0", "3", "2"], D,
      "log_{3} (18 × 3/x) = 3, so 54/x = 3³ = 27 and x = 2."),
    q("Rationalize (2 − √5)/(3 − √5).", ["(1 − √5)/2", "(√5 − 1)/2", "(1 + √5)/4", "(1 − √5)/4"], D,
      "Multiply top and bottom by 3 + √5: top (2 − √5)(3 + √5) = 6 + 2√5 − 3√5 − 5 = 1 − √5; bottom 9 − 5 = 4. Answer (1 − √5)/4."),
    q("Simplify (√2 + 1/√3)(√2 − 1/√3).", ["7/3", "5/2", "3/2", "5/3"], D,
      "Difference of two squares: (√2)² − (1/√3)² = 2 − 1/3 = 5/3."),
    q("From the Venn diagram, the complement of the set P ∩ Q is given by", ["{a, b, d, e}", "{a, e}", "{c}", "{b, d}"], A,
      "P ∩ Q = {c} (the overlap). Its complement is every other element of U: {a, b, d, e}.",
      { diagram: IMG('maths-2011-q10.png'), keyVerdict: 'misprint', answerNote: "The paper prints \"P n Q\", with the letter n in place of the intersection sign. The intended set, P ∩ Q, is shown here." }),
    q("Raila has 7 different posters to be hanged in her bedroom, living room and kitchen. Assuming she has plans to place at least a poster in each of the 3 rooms, how many choices does she have?", ["49", "21", "210", "170"], C,
      "She chooses one poster for each of the 3 different rooms, so order matters: ⁷P₃ = 7 × 6 × 5 = 210."),
    // Paper Q12–Q21
    q("Make R the subject of the formula if T = (KR² + M)/3.", ["√((3T − K)/M)", "√((3T + K)/M)", "√((3T − M)/K)", "√((3T + M)/K)"], C,
      "3T = KR² + M, so KR² = 3T − M, R² = (3T − M)/K and R = √((3T − M)/K)."),
    q("Find the remainder when x³ − 2x² + 3x − 3 is divided by x² + 1.", ["2x − 1", "2x + 1", "x − 3", "x + 3"], A,
      "x³ − 2x² + 3x − 3 = (x − 2)(x² + 1) + (2x − 1), so the remainder is 2x − 1."),
    q("Factorize completely 9y² − 16x².", ["(3y − 2x)(3y + 4x)", "(3y + 2x)(3y − 4x)", "(3y + 4x)(3y − 4x)", "(3y + 4x)(3y + 4x)"], C,
      "9y² − 16x² = (3y)² − (4x)², a difference of two squares: (3y + 4x)(3y − 4x)."),
    q("Solve for x and y respectively in the simultaneous equations −2x − 5y = 3; x + 3y = 0.", ["−3, −9", "−9, 3", "3, −9", "9, −3"], B,
      "From x + 3y = 0, x = −3y. Then 6y − 5y = 3, so y = 3 and x = −9."),
    q("If x varies directly as the square root of y and x = 81 when y = 9, find x when y = 1 7/9.", ["20 1/4", "2 1/4", "36", "27"], C,
      "x = k√y: 81 = 3k, k = 27. y = 1 7/9 = 16/9, √y = 4/3, so x = 27 × 4/3 = 36."),
    q("T varies inversely as the cube of R. When R = 3, T = 2/81. Find T when R = 2.", ["1/18", "1/24", "1/16", "1/12"], D,
      "T = k/R³: k = 2/81 × 27 = 2/3. When R = 2: T = (2/3)/8 = 1/12."),
    q("Which of the following diagrams represents the solution to the inequalities y ≤ x − 2 and y ≥ x² − 4?", ["Diagram A", "Diagram B", "Diagram C", "Diagram D"], A,
      "The region must lie below the line y = x − 2 and above (inside) the parabola y = x² − 4: the area between them for −1 ≤ x ≤ 2. Only diagram A shades that.",
      { diagram: IMG('maths-2011-q18.png') }),
    q("Solve the inequality −6(x + 3) ≤ 4(x − 2).", ["x ≤ 2", "x ≥ −2", "x ≤ −1", "x ≥ −1"], D,
      "−6x − 18 ≤ 4x − 8 gives −10 ≤ 10x, so x ≥ −1."),
    q("Solve the inequality x² + 2x > 15.", ["x < −3 or x > 5", "x < 3 or x > 5", "x > 3 or x < −5", "−5 < x < 3"], C,
      "x² + 2x − 15 > 0 gives (x + 5)(x − 3) > 0, which holds outside the roots: x < −5 or x > 3."),
    q("Find the sum of the first 18 terms of the series 3, 6, 9, …", ["505", "433", "635", "513"], D,
      "a = 3, d = 3, n = 18: S = 18/2 × [2(3) + 17(3)] = 9 × 57 = 513.",
      { keyVerdict: 'misprint', answerNote: "The paper prints the series as \"3, 6, 9, … 36\", but 36 is only the 12th term; the 18th term is 54. The question asks for the first 18 terms, so the stray \"36\" is left out here." }),
    // Paper Q22–Q31
    q("The second term of a geometric series is 4 while the fourth term is 16. Find the sum of the first five terms.", ["60", "54", "64", "62"], D,
      "ar = 4 and ar³ = 16 give r² = 4. With r = 2, a = 2 and S₅ = 2(2⁵ − 1)/(2 − 1) = 62. (r = −2 gives −22, not an option.)"),
    q("A binary operation ⊕ on real numbers is defined by x ⊕ y = xy + x + y for two real numbers x and y. Find the value of 3 ⊕ −2/3.", ["−1/2", "−1", "2", "1/3"], D,
      "3 ⊕ (−2/3) = 3(−2/3) + 3 + (−2/3) = −2 + 3 − 2/3 = 1/3."),
    q("If the determinant of [[2, 3], [5, 3x]] equals the determinant of [[4, 1], [3, 2x]], find the value of x.", ["−6", "−12", "12", "6"], A,
      "2(3x) − 3(5) = 4(2x) − 1(3): 6x − 15 = 8x − 3, so −2x = 12 and x = −6."),
    q("Evaluate the determinant of [[4, 2, −1], [2, 3, −1], [−1, 1, 3]].", ["25", "15", "55", "45"], A,
      "Expand along the first row: 4(9 + 1) − 2(6 − 1) + (−1)(2 + 3) = 40 − 10 − 5 = 25."),
    q("The inverse of matrix N = [[2, 3], [1, 4]] is", ["1/5 [[2, 3], [1, 4]]", "1/5 [[2, −1], [−3, 4]]", "1/5 [[4, 3], [1, 2]]", "1/5 [[4, −3], [−1, 2]]"], D,
      "|N| = 8 − 3 = 5. Swap the leading diagonal and change the signs of the other two entries: N⁻¹ = 1/5 [[4, −3], [−1, 2]]."),
    q("What is the size of each interior angle of a 12-sided regular polygon?", ["120°", "30°", "180°", "150°"], D,
      "Each exterior angle = 360° ÷ 12 = 30°, so each interior angle = 180° − 30° = 150°."),
    q("A circle of perimeter 28 cm is opened to form a square. What is the maximum possible area of the square?", ["56 cm²", "98 cm²", "28 cm²", "49 cm²"], D,
      "The wire is 28 cm long, so the square has side 28 ÷ 4 = 7 cm and area 7² = 49 cm²."),
    q("A chord of a circle of radius 7 cm is 5 cm from the centre of the circle. What is the length of the chord?", ["4√6 cm", "6√6 cm", "2√6 cm", "3√6 cm"], A,
      "Half-chord = √(7² − 5²) = √24 = 2√6. Chord = 2 × 2√6 = 4√6 cm."),
    q("A solid metal cube of side 3 cm is placed in a rectangular tank of dimensions 3, 4 and 5 cm. What volume of water can the tank now hold?", ["48 cm³", "60 cm³", "27 cm³", "33 cm³"], D,
      "Tank volume = 3 × 4 × 5 = 60 cm³; the cube takes 3³ = 27 cm³. Water space = 60 − 27 = 33 cm³."),
    q("The perpendicular bisector of a line XY is the locus of a point", ["whose distance from X is always twice its distance from Y", "which moves on the line XY", "which is equidistant from the points X and Y", "whose distance from Y is always twice its distance from X"], C,
      "Every point on the perpendicular bisector of XY is the same distance from X as from Y."),
    // Paper Q32–Q41
    q("The midpoint of P(x, y) and Q(8, 6) is (5, 8). Find x and y.", ["(2, 10)", "(2, 12)", "(2, 6)", "(2, 8)"], A,
      "(x + 8)/2 = 5 gives x = 2; (y + 6)/2 = 8 gives y = 10. P is (2, 10)."),
    q("Find the equation of a line perpendicular to the line 2y = 5x + 4 which passes through (4, 2).", ["5y − 2x − 18 = 0", "5y − 2x + 18 = 0", "5y + 2x − 2 = 0", "5y + 2x − 18 = 0"], D,
      "The given gradient is 5/2, so the perpendicular gradient is −2/5. y − 2 = −2/5(x − 4) gives 5y − 10 = −2x + 8, i.e. 5y + 2x − 18 = 0."),
    q("In a right-angled triangle, if tan θ = 3/4, what is cos θ − sin θ?", ["2/5", "1/5", "4/5", "3/5"], B,
      "Opposite 3, adjacent 4, hypotenuse 5: cos θ = 4/5, sin θ = 3/5, so cos θ − sin θ = 1/5."),
    q("A man walks 100 m due West from the point X to Y. He then walks 100 m due North to a point Z. Find the bearing of X from Z.", ["195°", "225°", "045°", "135°"], D,
      "From Z, X is 100 m south and 100 m east, so it lies exactly south-east: bearing 180° − 45° = 135°."),
    q("The derivative of (2x + 1)(3x + 1) is", ["12x + 1", "6x + 1", "12x + 5", "6x + 5"], C,
      "(2x + 1)(3x + 1) = 6x² + 5x + 1, whose derivative is 12x + 5."),
    q("Find the derivative of sin θ/cos θ.", ["sec²θ", "cosec θ sec θ", "cosec²θ", "tan θ cosec θ"], A,
      "sin θ/cos θ = tan θ, and d/dθ (tan θ) = sec²θ. (Quotient rule: (cos²θ + sin²θ)/cos²θ = 1/cos²θ.)"),
    q("Find the value of x at the minimum point of the curve y = x³ + x² − x + 1.", ["1/3", "1", "−1", "−1/3"], A,
      "dy/dx = 3x² + 2x − 1 = (3x − 1)(x + 1) = 0 gives x = 1/3 or x = −1. d²y/dx² = 6x + 2 is positive at x = 1/3 (a minimum) and negative at x = −1 (a maximum).",
      { keyVerdict: 'misprint', answerNote: "The paper prints the curve as y = x³ + x² + x + 1, which has no minimum point (dy/dx = 3x² + 2x + 1 is never zero). The minus sign before x was lost in printing: another copy of this question prints y = x³ + x² − x + 1, shown here. Its minimum is at x = 1/3." }),
    q("Evaluate ∫_{0}^{1} (3 − 2x) dx.", ["3", "5", "2", "6"], C,
      "∫(3 − 2x) dx = 3x − x². From 0 to 1: (3 − 1) − 0 = 2."),
    q("Find ∫ cos 4x dx.", ["3/4 sin 4x + K", "−3/4 sin 4x + K", "1/4 sin 4x + K", "−1/4 sin 4x + K"], C,
      "∫ cos ax dx = (1/a) sin ax + K, so ∫ cos 4x dx = 1/4 sin 4x + K."),
    q("The pie chart shows the distribution of courses offered by students. What percentage of the students offer English?", ["30%", "35%", "20%", "25%"], D,
      "The English sector is marked with a right angle, 90°. 90/360 × 100% = 25%.",
      { diagram: IMG('maths-2011-q41.png') }),
    // Paper Q43, Q44, Q47–Q50
    q("The sum of four consecutive integers is 34. Find the least of these numbers.", ["7", "8", "5", "6"], A,
      "n + (n + 1) + (n + 2) + (n + 3) = 4n + 6 = 34, so n = 7 (the numbers are 7, 8, 9, 10)."),
    q("Numbers: 0, 1, 2, 3, 4, 5. Frequency: 1, 4, 3, 8, 2, 5. From the table, find the median and range of the data respectively.", ["(8, 5)", "(5, 8)", "(5, 3)", "(3, 5)"], D,
      "There are 23 values, so the median is the 12th. Cumulative frequencies 1, 5, 8, 16: the 12th value is 3. Range = 5 − 0 = 5. Answer (3, 5)."),
    q("Class interval: 0–2, 3–5, 6–8, 9–11. Frequency: 3, 2, 5, 3. Find the mode of the distribution.", ["9", "10", "7", "8"], C,
      "The modal class is 6–8 (highest frequency, 5). Mode = L + (d₁/(d₁ + d₂)) × c = 5.5 + (3/(3 + 2)) × 3 = 5.5 + 1.8 = 7.3, which is 7 to the nearest whole number. (7 is also the class mark of the modal class.)"),
    q("Class interval: 3–5, 6–8, 9–11. Frequency: 2, 2, 2. Find the standard deviation of the distribution.", ["√5", "√6", "√2", "√3"], B,
      "Class marks 4, 7, 10; mean = 7. Σf(x − mean)² = 2(9) + 2(0) + 2(9) = 36, and Σf = 6, so the variance = 36/6 = 6 and the standard deviation = √6.",
      { keyVerdict: 'misprint', answerNote: "The paper prints option B as √7, a printing error: the variance is 36 ÷ 6 = 6, so the standard deviation is √6. Another copy of this question prints √6 as option B, shown here." }),
    q("In how many ways can the letters of the word ELATION be arranged?", ["6!", "5!", "8!", "7!"], D,
      "ELATION has 7 letters, all different, so they can be arranged in 7! ways."),
    q("In how many ways can five people sit round a circular table?", ["24", "12", "120", "60"], A,
      "Fix one person's seat and arrange the other four: (5 − 1)! = 4! = 24."),
    q("Find the probability that a number picked at random from the set {43, 44, 45, …, 60} is a prime number.", ["2/3", "2/9", "7/9", "1/3"], B,
      "The set has 60 − 43 + 1 = 18 numbers. Primes: 43, 47, 53, 59 (4 of them). Probability = 4/18 = 2/9."),
    q("In a class of 60 students, 30 offer Physics and 40 offer Chemistry. If a student is picked at random from the class, what is the probability that the student offers both Physics and Chemistry?", ["1/3", "1/2", "1/6", "1/4"], C,
      "Every student offers at least one of the two, so n(both) = 30 + 40 − 60 = 10. Probability = 10/60 = 1/6.")
  ]);
})();
