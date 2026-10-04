/**
 * Topic lessons for mathematics ("Learn the topic" under Teach Me), written in
 * advance like the Teach Me explanations: instant, offline, free. 'of' maps
 * each question (passageId|question|options) to its lesson.
 */
(window.TEACH_TOPICS = window.TEACH_TOPICS || {})["mathematics"] = {
 "lessons": {
  "number-bases": {
   "title": "Number bases: converting and calculating",
   "body": "JAMB tests converting between bases and doing simple arithmetic in a base.\n\nConverting TO base ten: multiply each digit by the base raised to its place value, then add.\n• 1011_{2} = 1×2^{3} + 0×2^{2} + 1×2^{1} + 1×2^{0} = 8 + 0 + 2 + 1 = 11.\n• 214_{5} = 2×25 + 1×5 + 4 = 59.\n\nConverting FROM base ten: divide repeatedly by the new base and read the remainders from the bottom up.\n• 59 in base 5: 59 ÷ 5 = 11 r 4, 11 ÷ 5 = 2 r 1, 2 ÷ 5 = 0 r 2 → 214_{5}.\n\nBetween two bases that are not ten, go through base ten.\n\nFinding an unknown base: if 25_{x} = 17_{10}, then 2x + 5 = 17, so x = 6.\n\nArithmetic in a base: work as usual, but \"carry\" when you reach the base. In base 5, 4 + 3 = 7 = 1×5 + 2, so write 2, carry 1.\n\nCommon traps:\n• A digit can never equal or exceed the base (no 5 in base 5). Use this to rule out options fast.\n• The right-hand digit has place value base^{0} = 1, not the base.\n\nMemory tip: \"multiply and add\" to get into base ten; \"divide and read remainders upwards\" to get out."
  },
  "fractions-decimals": {
   "title": "Fractions, decimals and approximation",
   "body": "Fractions: to add or subtract, use a common denominator; to multiply, multiply tops and bottoms; to divide, multiply by the reciprocal. Simplify mixed numbers into improper fractions first.\n\nDecimal places (d.p.) count digits after the point; significant figures (s.f.) count from the first non-zero digit.\n• 0.012856 to 3 s.f. = 0.0129; to 4 d.p. = 0.0129.\n• 52 461 to 2 s.f. = 52 000.\nRounding rule: look at the next digit; 5 or more rounds up.\n\nStandard form: A × 10^{n} with 1 ≤ A < 10. 0.00054 = 5.4 × 10^{-4}; 37 000 = 3.7 × 10^{4}.\n\nLong calculations without tables: write each number in standard form, group the powers of ten, and cancel before multiplying.\n\nPercentage error = (error ÷ actual value) × 100%.\n\nCommon traps:\n• Counting leading zeros as significant figures (they are not).\n• Rounding in the middle of a calculation; round only at the end.\n\nMemory tip: significant figures start at the first non-zero digit; decimal places start at the point."
  },
  "indices": {
   "title": "Laws of indices",
   "body": "The laws (same base a):\n• a^{m} × a^{n} = a^{m+n}\n• a^{m} ÷ a^{n} = a^{m−n}\n• (a^{m})^{n} = a^{mn}\n• a^{0} = 1\n• a^{−n} = 1/a^{n}\n• a^{1/n} = ⁿ√a, and a^{m/n} = (ⁿ√a)^{m}\n\nEvaluating: take the root first, then the power. 27^{2/3} = (∛27)^{2} = 3^{2} = 9. 16^{−3/4} = 1/(⁴√16)^{3} = 1/8.\n\nSolving index equations: make the bases the same, then equate the powers.\n• 2^{x+1} = 32 = 2^{5} → x + 1 = 5 → x = 4.\n• 9^{x} = 27 → 3^{2x} = 3^{3} → x = 3/2.\nIf two different bases appear, write both as powers of a common prime (4 = 2^{2}, 8 = 2^{3}, 9 = 3^{2}, 27 = 3^{3}).\n\nCommon traps:\n• a^{m} + a^{n} is NOT a^{m+n}; only multiplication adds powers.\n• A negative power gives a reciprocal, not a negative number: 2^{−3} = 1/8.\n\nMemory tip: \"root first, then power\" for fractional indices; \"same base, then equate powers\" for equations."
  },
  "logarithms": {
   "title": "Logarithms",
   "body": "Definition: log_{a} b = c means a^{c} = b. So log_{2} 8 = 3, log_{10} 0.01 = −2, log_{a} a = 1, log_{a} 1 = 0.\n\nLaws (same base):\n• log x + log y = log (xy)\n• log x − log y = log (x/y)\n• log x^{n} = n log x\n• Change of base: log_{a} b = log b / log a\n\nSimplifying: collect logs into a single log, then evaluate.\n• log_{3} 18 − log_{3} 2 = log_{3} 9 = 2.\n• 2 log 5 + log 4 = log 25 + log 4 = log 100 = 2 (base 10).\n\nSolving log equations: combine into one log, convert to index form, then CHECK the answer makes every original log defined (the inside of a log must be positive).\n• log_{2} x + log_{2} (x − 2) = 3 → x(x − 2) = 8 → x = 4 (reject x = −2).\n\nUsing tables/characteristics (older papers): the characteristic is the power of ten in standard form; a bar shows a negative characteristic, e.g. log 0.05 = 2̄.6990.\n\nCommon traps:\n• log (x + y) is NOT log x + log y.\n• Forgetting to reject solutions that make a log of a negative number.\n\nMemory tip: a log is just \"what power?\" — log_{a} b asks \"a to what power gives b?\""
  },
  "surds": {
   "title": "Surds",
   "body": "A surd is a root that cannot be simplified to a whole number, like √2.\n\nSimplify by taking out square factors: √72 = √(36 × 2) = 6√2. √48 = 4√3.\n\nAdd and subtract only like surds: 3√2 + 5√2 = 8√2. First simplify: √50 + √18 = 5√2 + 3√2 = 8√2.\n\nMultiply: √a × √b = √(ab); (√a)^{2} = a. Expand brackets as in algebra, e.g. (√3 + √5)(√3 − √5) = 3 − 5 = −2.\n\nRationalise the denominator:\n• 1/√2 = √2/2.\n• For a + √b, multiply top and bottom by its conjugate a − √b: 1/(2 + √3) = (2 − √3)/(4 − 3) = 2 − √3.\n\nCommon traps:\n• √a + √b is NOT √(a + b).\n• Forgetting that (√a + √b)^{2} = a + b + 2√(ab), not just a + b.\n\nMemory tip: to clear a surd from the bottom, multiply by its \"partner with the opposite sign\"."
  },
  "commercial": {
   "title": "Percentages, profit and loss, interest and ratio",
   "body": "Percentage of: 15% of ₦4,000 = 0.15 × 4000 = ₦600.\nPercentage change = (change ÷ original) × 100%.\n\nProfit and loss are percentages of the COST price:\n• Profit % = (SP − CP)/CP × 100%. Selling at a 25% loss means SP = 75% of CP.\n• To find CP from SP: CP = SP × 100/(100 ± %). E.g. SP ₦180,000 at a 25% loss → CP = 180000 × 100/75 = ₦240,000.\n\nSimple interest: I = PRT/100. Amount = P + I.\nCompound interest: A = P(1 + r/100)^{n}. Depreciation: A = P(1 − r/100)^{n}.\n\nRatio and sharing: to share ₦600 in the ratio 2 : 3, total parts = 5, so shares are 240 and 360.\nProportion: if 5 men take 45 days, then (inverse) 25 men take 45 × 5/25 = 9 days.\n\nShares and dividends, commission and discount use the same idea: a percentage of the right base amount.\n\nCommon traps:\n• Taking profit or loss as a percentage of the selling price.\n• Adding percentages that apply one after another; a 10% rise then a 10% fall is a 1% fall overall.\n\nMemory tip: always ask \"percentage OF WHAT?\" — the original amount is the base."
  },
  "variation": {
   "title": "Variation",
   "body": "• Direct: y ∝ x → y = kx. If x doubles, y doubles.\n• Inverse: y ∝ 1/x → y = k/x. If x doubles, y halves.\n• Joint: y ∝ xz → y = kxz.\n• Partial: y is partly constant and partly varies with x → y = a + bx (two unknowns, so you need two pairs of values).\nPowers and roots: \"y varies as the square of x\" → y = kx^{2}; \"inversely as the square root of x\" → y = k/√x.\n\nMethod (always the same):\n1. Write the equation with k.\n2. Use the given pair of values to find k.\n3. Use k to find the unknown.\n\nExample: y varies inversely as x^{2}; y = 4 when x = 3. Then 4 = k/9, k = 36. When x = 6, y = 36/36 = 1.\n\nCommon traps:\n• Mixing up direct and inverse.\n• For partial variation, forgetting the constant term.\n\nMemory tip: \"find k first\" — every variation question is solved by finding the constant."
  },
  "sets": {
   "title": "Sets and Venn diagrams",
   "body": "Notation: ∪ union (in either), ∩ intersection (in both), A′ complement (not in A), ⊂ subset, ∅ empty set, n(A) number of elements.\n\nTwo sets: n(A ∪ B) = n(A) + n(B) − n(A ∩ B).\nExample: 220 students take Biology or Maths; 125 take Biology and 110 take Maths. Both = 125 + 110 − 220 = 15, so Biology only = 125 − 15 = 110.\n\nThree sets: draw a Venn diagram and fill it from the CENTRE outwards: first all three, then each pair (minus the centre), then each \"only\" region. Use x for the unknown region and form one equation from the total.\n\nNumber of subsets of a set with n elements = 2^{n} (including ∅ and the set itself); proper subsets = 2^{n} − 1.\n\nCommon traps:\n• Forgetting to subtract the overlap, so elements in both sets are counted twice.\n• Confusing \"only A\" with \"A\".\n\nMemory tip: in Venn questions, fill the middle first and work outwards."
  },
  "algebra": {
   "title": "Algebraic expressions and functions",
   "body": "Expanding: (a + b)^{2} = a^{2} + 2ab + b^{2}; (a − b)^{2} = a^{2} − 2ab + b^{2}; (a + b)(a − b) = a^{2} − b^{2}.\n\nFactorising: take out common factors first; spot the difference of two squares; for ax^{2} + bx + c, find two numbers with product ac and sum b.\n\nAlgebraic fractions: factorise top and bottom, then cancel common FACTORS (never terms). Add with a common denominator.\n\nChange of subject: undo the operations around the required letter in reverse order, doing the same to both sides.\n• From T = 2π√(l/g): T/(2π) = √(l/g) → T^{2}/(4π^{2}) = l/g → l = gT^{2}/(4π^{2}).\n\nFunctions: f(x) = 2x + 3 means f(4) = 11. Composite f(g(x)): put g(x) into f. Inverse f^{−1}: swap x and y and solve for y.\n\nRemainder and factor theorems: the remainder when f(x) is divided by (x − a) is f(a); (x − a) is a factor if f(a) = 0.\n\nCommon traps:\n• Cancelling terms instead of factors: (x + 2)/2 is not x + 1.\n• Sign errors when expanding a minus outside a bracket.\n\nMemory tip: factorise before you cancel, and substitute to check."
  },
  "equations": {
   "title": "Linear and simultaneous equations",
   "body": "Linear: collect x-terms on one side and numbers on the other. With fractions, multiply every term by the LCM of the denominators first.\n\nSimultaneous equations:\n• Elimination: make the coefficients of one letter equal, then add or subtract the equations.\n• Substitution: make one letter the subject of one equation and substitute into the other.\nExample: 2x + y = 7 and x − y = 2 → adding gives 3x = 9, x = 3, y = 1.\n\nWord problems: let x be the unknown, write the equation from the words, solve, and answer the question asked.\n\nChecking: substitute your answers into BOTH original equations. In a JAMB question you can also test each option.\n\nCommon traps:\n• Multiplying only some terms by the LCM.\n• Answering x when the question asks for y, or for x + y.\n\nMemory tip: with four options, substituting each option back is often the fastest method."
  },
  "quadratics": {
   "title": "Quadratic equations",
   "body": "Standard form: ax^{2} + bx + c = 0.\n\nSolving:\n• Factorisation: x^{2} − 5x + 6 = 0 → (x − 2)(x − 3) = 0 → x = 2 or 3.\n• Formula: x = [−b ± √(b^{2} − 4ac)]/(2a).\n• Completing the square.\n\nRoots α and β: α + β = −b/a, αβ = c/a. The equation with roots α and β is x^{2} − (α + β)x + αβ = 0.\nExample: roots 2 and −3 → x^{2} + x − 6 = 0.\nUseful: α^{2} + β^{2} = (α + β)^{2} − 2αβ.\n\nThe discriminant b^{2} − 4ac: positive → two real roots; zero → equal roots; negative → no real roots.\n\nCubics in JAMB: find one root by testing small numbers (f(1), f(−1), …), then factorise. For x^{3} − 5x^{2} − x + 5 = 0, f(1) = 0, f(−1) = 0, f(5) = 0, so x = 1, −1 or 5.\n\nCommon traps:\n• Sign of the sum: α + β = −b/a (note the minus).\n• Dividing both sides by x and losing the root x = 0.\n\nMemory tip: \"sum = −b/a, product = c/a\"."
  },
  "inequalities": {
   "title": "Inequalities and linear programming",
   "body": "Solve like equations, EXCEPT: multiplying or dividing by a negative number reverses the sign.\n• −3x > 6 → x < −2.\n\nDouble inequalities: do the same to all three parts. −1 < 2x + 3 ≤ 7 → −4 < 2x ≤ 4 → −2 < x ≤ 2.\n\nQuadratic inequalities: find the roots, then test a value in each region. (x − 1)(x − 4) < 0 → 1 < x < 4.\n\nOn a number line or graph: an open circle or dotted line = strict (< or >); a closed circle or solid line = ≤ or ≥.\n\nLinear programming: graph each inequality, find the region satisfying all of them, then test the corners of that region in the objective (e.g. maximise P = 3x + 2y). The maximum or minimum is always at a corner.\n\nTo find an inequality from a shaded graph: get the line's equation from two points, then test a point inside the region (like (0, 0)) to choose the sign.\n\nCommon traps:\n• Forgetting to flip the sign when dividing by a negative.\n• Testing a point that lies on the boundary line.\n\nMemory tip: negative multiplier → flip the sign; in linear programming, the answer lives at a corner."
  },
  "sequences": {
   "title": "Sequences: AP and GP",
   "body": "Arithmetic progression (AP): constant difference d.\n• nth term: T_{n} = a + (n − 1)d\n• Sum: S_{n} = n/2 [2a + (n − 1)d] = n/2 (first + last)\n\nGeometric progression (GP): constant ratio r.\n• nth term: T_{n} = ar^{n−1}\n• Sum: S_{n} = a(r^{n} − 1)/(r − 1)\n• Sum to infinity (only when −1 < r < 1): S_{∞} = a/(1 − r)\n\nFrom a sum formula: T_{n} = S_{n} − S_{n−1}.\nMeans: the arithmetic mean of a and b is (a + b)/2; the geometric mean is √(ab).\n\nFinding a and d (or r): turn the two facts into two equations. E.g. T_{3} = 7 and T_{7} = 19 → 4d = 12, d = 3, a = 1.\n\nCommon traps:\n• Using n instead of (n − 1) in the nth-term formula.\n• Using the sum to infinity when |r| ≥ 1.\n\nMemory tip: AP = adding the same number; GP = multiplying by the same number."
  },
  "matrices": {
   "title": "Matrices and determinants",
   "body": "Adding and subtracting: matrices must be the same size; combine matching entries.\n\nMultiplying: row × column. A (2 × 3) times a (3 × 2) gives a 2 × 2. The number of columns of the first must equal the number of rows of the second. In general AB ≠ BA.\n\n2 × 2 matrix with rows (a, b) and (c, d):\n• Determinant = ad − bc.\n• Inverse = 1/(ad − bc) × [rows (d, −b) and (−c, a)]. Swap a and d, negate b and c, divide by the determinant.\n• A matrix with determinant 0 is singular and has no inverse.\n\n3 × 3 determinant: expand along the top row with alternating signs + − +, using the 2 × 2 determinants of the minors.\n\nSolving simultaneous equations with matrices: X = A^{−1}B, or use Cramer's rule.\n\nCommon traps:\n• Sign errors in the alternating + − + pattern.\n• Assuming AB = BA.\n\nMemory tip: inverse of a 2 × 2 is \"swap the diagonal, negate the others, divide by the determinant\"."
  },
  "binary-operations": {
   "title": "Binary operations",
   "body": "A binary operation * combines two elements using a given rule, e.g. a * b = a + b + 2ab.\n\nEvaluating: substitute carefully. With that rule, 2 * 3 = 2 + 3 + 12 = 17. Work out brackets first: (1 * 2) * 3.\n\nProperties:\n• Closure: the result is always in the set.\n• Commutative: a * b = b * a for all a, b.\n• Associative: (a * b) * c = a * (b * c).\n• Identity e: a * e = a for every a. Solve a * e = a for e.\n• Inverse of a: the element a^{−1} with a * a^{−1} = e.\n\nExample: for a * b = a + b + 2ab, a * e = a gives e + 2ae = 0, so e = 0. The inverse of a satisfies a + x + 2ax = 0, so x = −a/(1 + 2a).\n\nTables: the identity's row repeats the header row; check symmetry about the main diagonal for commutativity.\n\nCommon traps:\n• Treating * as ordinary multiplication.\n• Finding the inverse before finding the identity.\n\nMemory tip: identity first (a * e = a), then inverse (a * x = e)."
  },
  "geometry": {
   "title": "Angles, polygons, triangles and circles",
   "body": "Angles: on a straight line add to 180°; at a point add to 360°; vertically opposite angles are equal. With parallel lines: corresponding angles are equal, alternate angles are equal, co-interior angles add to 180°.\n\nTriangles: angles add to 180°; an exterior angle equals the sum of the two interior opposite angles. Isosceles: base angles are equal. Similar triangles: corresponding sides are in the same ratio.\n\nPolygons (n sides): interior angles add to (n − 2) × 180°; exterior angles add to 360°. Each exterior angle of a regular polygon = 360°/n.\n\nCircle theorems:\n• The angle at the centre is twice the angle at the circumference on the same arc.\n• Angles in the same segment are equal.\n• The angle in a semicircle is 90°.\n• Opposite angles of a cyclic quadrilateral add to 180°.\n• A tangent is perpendicular to the radius at the point of contact; two tangents from a point are equal.\n• Alternate segment theorem: the angle between a tangent and a chord equals the angle in the alternate segment.\n\nLoci: points a fixed distance from a point form a circle; equidistant from two points form the perpendicular bisector; equidistant from two lines form the angle bisector.\n\nMemory tip: in circle questions, mark the centre and radii first; most answers come from isosceles triangles and \"centre = 2 × circumference\"."
  },
  "mensuration": {
   "title": "Lengths, areas and volumes",
   "body": "Plane shapes:\n• Rectangle A = lb; triangle A = ½bh = ½ab sin C; parallelogram A = bh; trapezium A = ½(a + b)h.\n• Circle: C = 2πr, A = πr^{2}.\n• Arc length = (θ/360) × 2πr; sector area = (θ/360) × πr^{2}.\n\nSolids:\n• Cuboid V = lbh; cylinder V = πr^{2}h, curved surface = 2πrh.\n• Cone V = ⅓πr^{2}h, curved surface = πrl (l = slant height, l^{2} = r^{2} + h^{2}).\n• Sphere V = 4/3 πr^{3}, surface = 4πr^{2}. Pyramid V = ⅓ × base area × height.\n• Frustum = big cone − small cone.\n\nA sector folded into a cone: the arc length becomes the base circumference, and the sector radius becomes the slant height.\n\nSimilar shapes: if lengths scale by k, areas scale by k^{2} and volumes by k^{3}.\n\nCommon traps:\n• Using the diameter instead of the radius.\n• Mixing units (cm and m) in one calculation.\n\nMemory tip: check units: length (cm), area (cm²), volume (cm³). The answer's unit tells you which formula family you need."
  },
  "coordinate": {
   "title": "Coordinate geometry of straight lines",
   "body": "For points (x_{1}, y_{1}) and (x_{2}, y_{2}):\n• Gradient m = (y_{2} − y_{1})/(x_{2} − x_{1}).\n• Distance = √[(x_{2} − x_{1})^{2} + (y_{2} − y_{1})^{2}].\n• Midpoint = ((x_{1} + x_{2})/2, (y_{1} + y_{2})/2).\n\nEquation of a line: y = mx + c (c = y-intercept), or y − y_{1} = m(x − x_{1}).\nFrom ax + by + c = 0, the gradient is −a/b.\n\nParallel lines have equal gradients. Perpendicular lines: m_{1} × m_{2} = −1.\n\nGradient of a curve at a point = gradient of the tangent there (use differentiation).\n\nIntercepts: put x = 0 to find the y-intercept; put y = 0 to find the x-intercept.\n\nCommon traps:\n• Subtracting coordinates in different orders on the top and bottom of the gradient.\n• Forgetting the minus sign in −a/b.\n\nMemory tip: gradient = \"rise over run\"; perpendicular = \"flip and change the sign\"."
  },
  "trigonometry": {
   "title": "Trigonometry",
   "body": "Right-angled triangles: SOH CAH TOA. sin θ = opposite/hypotenuse, cos θ = adjacent/hypotenuse, tan θ = opposite/adjacent.\n\nSpecial angles: sin 30° = ½, cos 30° = √3/2, tan 30° = 1/√3; sin 45° = cos 45° = 1/√2, tan 45° = 1; sin 60° = √3/2, cos 60° = ½, tan 60° = √3.\n\nSigns by quadrant (All, Sin, Tan, Cos for quadrants 1–4): only sin is positive between 90° and 180°, so sin 150° = sin 30° = ½ but cos 150° = −√3/2.\n\nIdentities: sin^{2} θ + cos^{2} θ = 1; tan θ = sin θ/cos θ. If sin θ = 3/5 (acute), draw a 3-4-5 triangle: cos θ = 4/5, tan θ = 3/4.\n\nAny triangle: sine rule a/sin A = b/sin B; cosine rule a^{2} = b^{2} + c^{2} − 2bc cos A; area = ½ab sin C.\n\nBearings are measured clockwise from north, written with three figures (e.g. 060°). Angles of elevation and depression are measured from the horizontal.\n\nCommon traps:\n• Calculator in the wrong mode, or forgetting the quadrant sign.\n• Measuring a bearing from the wrong point.\n\nMemory tip: draw the triangle; for an acute angle given as a fraction, use a Pythagorean triple (3-4-5, 5-12-13)."
  },
  "differentiation": {
   "title": "Differentiation",
   "body": "Power rule: d/dx (x^{n}) = nx^{n−1}. Constants differentiate to 0.\n• y = 3x^{2} − 2x + 5 → dy/dx = 6x − 2.\n\nStandard results: d/dx (sin x) = cos x; d/dx (cos x) = −sin x; d/dx (e^{x}) = e^{x}; d/dx (ln x) = 1/x.\n\nRules:\n• Chain rule: d/dx f(g(x)) = f′(g(x)) × g′(x). E.g. y = sin^{2} 5x → dy/dx = 2 sin 5x × cos 5x × 5 = 10 sin 5x cos 5x.\n• Product rule: (uv)′ = u′v + uv′. Quotient rule: (u/v)′ = (u′v − uv′)/v^{2}.\n\nUses:\n• The gradient of the tangent at a point = dy/dx at that x.\n• Turning points: dy/dx = 0; the second derivative tells max (negative) or min (positive).\n• Rates of change: dA/dt = dA/dr × dr/dt. E.g. A = πr^{2}, r = 5, dr/dt = 0.2 → dA/dt = 2π(5)(0.2) = 2π.\n\nCommon traps:\n• Forgetting the \"inner derivative\" in the chain rule.\n• Writing d/dx(cos x) = sin x (it is −sin x).\n\nMemory tip: \"power down in front, reduce the power by one\", then multiply by the inside's derivative."
  },
  "integration": {
   "title": "Integration",
   "body": "Integration reverses differentiation.\n\nPower rule: ∫ x^{n} dx = x^{n+1}/(n + 1) + C (n ≠ −1). ∫ 1/x dx = ln x + C.\nStandard results: ∫ sin x dx = −cos x + C; ∫ cos x dx = sin x + C; ∫ e^{x} dx = e^{x} + C.\nWith ax inside: ∫ sin 3x dx = −⅓ cos 3x + C (divide by the coefficient of x).\n\nDefinite integrals: ∫_{a}^{b} f(x) dx = F(b) − F(a). No + C is needed.\n• ∫_{0}^{2} 3x^{2} dx = [x^{3}] from 0 to 2 = 8.\n\nArea under a curve between x = a and x = b = ∫_{a}^{b} y dx. A region below the x-axis gives a negative value; take its size.\n\nFinding y from dy/dx: integrate, then use the given point to find C.\n\nCommon traps:\n• Dividing by n instead of n + 1.\n• Forgetting the minus sign in ∫ sin x dx = −cos x.\n\nMemory tip: to check an integral, differentiate your answer; you should get back the original."
  },
  "statistics": {
   "title": "Statistics",
   "body": "Measures of central tendency:\n• Mean = Σx/n; for a frequency table, mean = Σfx/Σf.\n• Median: the middle value when the data are arranged in order (average the two middle values for an even count).\n• Mode: the most frequent value.\n\nSpread:\n• Range = highest − lowest.\n• Variance = Σ(x − x̄)^{2}/n; standard deviation = √variance.\n• Mean deviation = Σ|x − x̄|/n.\n\nGrouped data: use class mid-points as x. Cumulative frequency curves (ogives) give the median (at n/2) and quartiles (at n/4 and 3n/4); interquartile range = Q_{3} − Q_{1}.\n\nCharts: in a pie chart, a sector angle = (frequency/total) × 360°. Histograms use areas; for equal class widths, bar heights show frequencies.\n\nCommon traps:\n• Forgetting to sort the data before finding the median.\n• Using Σx/n instead of Σfx/Σf for a frequency table.\n\nMemory tip: the mean uses every value; the median uses position; the mode uses frequency."
  },
  "probability": {
   "title": "Probability",
   "body": "P(event) = number of favourable outcomes ÷ total number of equally likely outcomes. 0 ≤ P ≤ 1, and P(not A) = 1 − P(A).\n\nAND (independent events): multiply. P(two heads) = ½ × ½ = ¼.\nOR (mutually exclusive events): add. P(a 2 or a 5 on a die) = 1/6 + 1/6 = 1/3.\nIn general, P(A or B) = P(A) + P(B) − P(A and B).\n\nWithout replacement, the second probability changes: from 5 red and 3 blue, P(two reds) = 5/8 × 4/7 = 5/14.\n\nTwo dice: there are 36 outcomes. List them in a 6 × 6 table for sums and differences (a sum of 7 occurs 6 times, so P = 1/6).\n\n\"At least one\": P(at least one) = 1 − P(none).\n\nCommon traps:\n• Adding when you should multiply (AND = multiply).\n• Forgetting to reduce the totals when items are not replaced.\n\nMemory tip: AND → ×, OR → +, \"at least one\" → 1 − none."
  },
  "permutations": {
   "title": "Permutations and combinations",
   "body": "Factorial: n! = n × (n − 1) × … × 1; 0! = 1.\n\nPermutations (order matters): ⁿP_{r} = n!/(n − r)!. The ways to arrange 3 of 5 books on a shelf = 5 × 4 × 3 = 60.\nCombinations (order does not matter): ⁿC_{r} = n!/[r!(n − r)!]. The ways to choose 3 of 5 students = 10.\n\nArranging letters with repeats: divide by the factorial of each repeat. In \"ADDED\", 5!/(3!) = 20 (three Ds).\n\nCommittees with conditions: multiply the choices from each group. 2 men from 5 and 1 woman from 4 = ⁵C_{2} × ⁴C_{1} = 10 × 4 = 40.\n\nCircular arrangements of n objects: (n − 1)!.\n\nCommon traps:\n• Using permutations when the order does not matter (committees and selections are combinations).\n• Forgetting to divide for repeated letters.\n\nMemory tip: \"arrange → permutation; choose → combination\"."
  }
 },
 "of": {
  "|Simplify: (√3 + √5)(√3 − √5)|−2|2|−8|8": "surds",
  "|If 2^(x+1) = 32, find x.|3|4|5|6": "indices",
  "|Factorize completely: 6x² + 7x − 3|(3x − 1)(2x + 3)|(6x − 1)(x + 3)|(3x + 1)(2x − 3)|(2x + 3)(3x − 1)": "algebra",
  "|If the mean of 3, 7, x, 12, and 15 is 9, find x.|6|7|8|9": "statistics",
  "|Find the area of a circle with circumference 44 cm. (Take π = 22/7)|77 cm²|154 cm²|308 cm²|616 cm²": "mensuration",
  "|In the diagram, the interior angles of a triangle are 2x°, 3x° and 4x°. Find x.|10°|20°|30°|40°": "geometry",
  "|Evaluate: ³√(−27) + ⁴√16|−1|1|5|−5": "indices",
  "|If P = {1, 2, 3, 4, 5} and Q = {2, 4, 6, 8}, find P ∪ Q.|{1,2,3,4,5,6,8}|{2,4}|{1,3,5}|{1,2,3,4,5,6,7,8}": "sets",
  "|A fair die is thrown once. Find the probability of getting a prime number.|1/6|1/3|1/2|2/3": "probability",
  "|Find the gradient of the line joining (−2, 3) and (4, −9).|2|−2|3|−3": "coordinate",
  "|Simplify: (2x²y³)³ ÷ (4x³y²)|2x³y⁷|2x³y⁵|x³y⁷|2xy⁷": "indices",
  "|The bar chart shows the sales of oranges over 4 days. If Monday = 30, Tuesday = 50, Wednesday = 40, Thursday = 20, find the mean daily sales.|30|35|40|45": "statistics",
  "|If y = 3x² − 2x + 5, find dy/dx.|6x − 2|3x − 2|6x + 5|x² − 2": "differentiation",
  "|Solve: |2x − 3| = 7|x = 5 or x = −2|x = 5 or x = 2|x = −5 or x = 2|x = 5 only": "equations",
  "|A man travels 10 km due north and then 24 km due east. Find the shortest distance from his starting point.|26 km|34 km|14 km|22 km": "trigonometry",
  "|Find the angle subtended at the centre of a circle of radius 6 cm by an arc of length 3π cm.|30°|45°|90°|60°": "mensuration",
  "|If the roots of 2x² + kx + 3 = 0 are equal, find k.|2√6|4√6|√6|3√6": "quadratics",
  "|Evaluate: ∫₀² (3x² − 2x) dx|4|6|8|12": "integration",
  "|A student's score in six tests are: 60, 72, 54, 80, 66, 68. Find the median.|67|68|69|70": "statistics",
  "|From a point 150 m from the base of a tower, the angle of elevation of the top is 30°. Find the height of the tower.|50√3 m|75 m|150√3 m|50 m": "trigonometry",
  "|How many ways can the letters of the word 'GREAT' be arranged?|24|60|120|240": "permutations",
  "|Find the value of x if: (1/3)^x = 27|3|−3|9|−9": "indices",
  "|If sin θ = 3/5 and θ is acute, find tan θ.|3/4|4/3|3/5|5/3": "trigonometry",
  "|Simplify: log 8 + log 5 − log 2 (using base 10)|log 20|log 15|log 40|log 10": "logarithms",
  "|The graph of y = x² − 4 cuts the x-axis at:|x = ±2|x = 4 only|x = ±4|x = 2 only": "quadratics",
  "|The pie chart shows how a family spends its monthly income. If the total income is ₦120,000 and the rent sector is 90°, how much is spent on rent?|₦30,000|₦40,000|₦45,000|₦60,000": "statistics",
  "|Find the sum to infinity of the GP: 1 + 1/3 + 1/9 + ...|3/2|2/3|1/2|3": "sequences",
  "|If the quadratic equation x² − 5x + k = 0 has one root as 3, find k.|6|8|12|15": "quadratics",
  "|Find the remainder when x³ − 5x² + 7x − 2 is divided by (x − 2).|0|2|4|6": "algebra",
  "|Solve simultaneously: 2x + 3y = 12 and x − y = 1|x=3, y=2|x=2, y=3|x=4, y=1|x=1, y=4": "equations",
  "|If f(x) = 2x² + 3x − 1, find f(−2).|−3|1|−1|3": "algebra",
  "|A box contains 5 red, 3 blue and 2 green balls. A ball is picked at random. What is the probability of picking a blue or green ball?|1/2|3/10|2/10|5/10": "probability",
  "|What is the locus of a point equidistant from two fixed points A and B?|The perpendicular bisector of AB|The bisector of angle A|A circle through A and B|A line through A": "geometry",
  "|Given matrix M = [[2,1],[3,4]], find its determinant.|5|8|11|14": "matrices",
  "|Simplify: (x² − 4)/(x − 2)|x + 2|x − 2|x² + 2x|x − 4": "algebra",
  "|Find the value of angle x in a triangle where the exterior angle is 110° and one non-adjacent interior angle is 65°.|45°|55°|70°|75°": "geometry",
  "|The histogram shows frequency distribution. If the bars represent frequencies 4, 7, 10, 6, 3 for intervals 1-5, 6-10, 11-15, 16-20, 21-25 respectively, what is the modal class?|6-10|11-15|1-5|16-20": "statistics",
  "|Express 0.000372 in standard form.|3.72 × 10⁻⁴|3.72 × 10⁻³|37.2 × 10⁻⁵|0.372 × 10⁻³": "fractions-decimals",
  "|Evaluate: 2⁵ × 4⁻² ÷ 8¹|1/4|1/2|1|2": "indices",
  "|The nth term of a sequence is given by Tₙ = 3n − 1. Find the sum of the first 10 terms.|155|175|145|165": "sequences",
  "|If x varies directly as y² and x = 12 when y = 2, find x when y = 5.|60|75|90|100": "variation",
  "|Expand (2a − b)⁴ and find the coefficient of a²b².|12|24|16|48": "algebra",
  "|A straight line passes through (0, 3) and has gradient −2. Find the x-intercept.|3/2|2/3|−3/2|6": "coordinate",
  "|Convert 11011₂ to base 10.|25|27|29|31": "number-bases",
  "|The ages of students in a class have a standard deviation of 0. This means:|All students have different ages|All students have the same age|The ages are normally distributed|Half are above and half below the mean": "statistics",
  "|A cone has base radius 6 cm and height 8 cm. Find its volume. (π = 22/7)|301.7 cm³|302.3 cm³|150.86 cm³|96π cm³": "mensuration",
  "|Which of the following sets is a subset of {1, 2, 3, 4, 5}?|{1, 6}|{2, 4, 6}|{3, 5}|{0, 2, 4}": "sets",
  "|The interior angle of a regular polygon is 150°. How many sides does it have?|10|12|15|8": "geometry",
  "|Solve: log₂(x + 3) + log₂(x − 1) = 5|x = 5|x = 6|x = 3|x = 4": "logarithms",
  "|If P and Q are two events and P(P) = 0.4, P(Q) = 0.3, P(P∩Q) = 0.1, find P(P∪Q).|0.6|0.7|0.5|0.8": "probability",
  "|Without using tables, evaluate (343)^{1/3} × (0.14)^{-1} × (25)^{-1/2}.|10|12|8|7": "indices",
  "|In a school, 220 students offer Biology or Mathematics or both, 125 offer Biology and 110 offer Mathematics. How many offer Biology but not Mathematics?|95|80|125|110": "sets",
  "|Simplify 52.4 − 5.7 − 3.45 − 1.75.|41.4|41.5|42.1|42.2": "fractions-decimals",
  "|Simplify (√0.7 + √70)^{2}.|84.7|70.7|217.7|168.7": "fractions-decimals",
  "|Evaluate (0.21 × 0.072 × 0.00054)/(0.006 × 1.68 × 0.063), correct to four significant figures.|0.01286|0.01285|0.1286|0.1285": "fractions-decimals",
  "|A trader bought goats for ₦4,000 each. He sold them for ₦180,000 at a loss of 25%. How many goats did he buy?|60|50|45|36": "commercial",
  "|If dy/dx = 2x − 3 and y = 3 when x = 0, find y in terms of x.|2x^{2} − 3x|x^{2} − 3x|x^{2} − 3x − 3|x^{2} − 3x + 3": "integration",
  "|Find the derivative of y = sin^{2}(5x) with respect to x.|10 sin 5x cos 5x|5 sin 5x cos 5x|2 sin 5x cos 5x|15 sin 5x cos 5x": "differentiation",
  "|The slope of the tangent to the curve y = 3x^{2} − 2x + 5 at the point (1, 6) is|4|1|6|5": "differentiation",
  "|Evaluate ∫ sin 3x dx.|(2/3) cos 3x + C|(1/2) cos 3x + C|−(1/3) cos 3x + C|−(2/3) cos 3x + C": "integration",
  "|A circle with a radius 5 cm has its radius increasing at the rate of 0.2 cm s^{-1}. What will be the corresponding increase in the area?|2π|5π|π|4π": "differentiation",
  "|If y = x^{2} − 1/x, find dy/dx.|2x − 1/x^{2}|2x + x^{2}|2x − x^{2}|2x + 1/x^{2}": "differentiation",
  "|Use the graph above (the boundary line passes through (−4, 0) and (0, 2), and the shaded region contains the origin) to find the value of p and q if px + qy ≤ 4.|p = 2, q = 1|p = 2, q = −1|p = 1, q = 2|p = −1, q = 2": "inequalities",
  "|Solve for x in the equation x^{3} − 5x^{2} − x + 5 = 0.|1, −1 or 5|1, 1 or −5|−1, 1 or −5|1, 1 or 5": "quadratics",
  "|The time taken to do a piece of work is inversely proportional to the number of men employed. If it takes 45 men to do a piece of work in 5 days, how long will it take 25 men?|15 days|12 days|5 days|9 days": "variation",
  "|If P = [[2, 1], [−3, 0]] and I is a 2 × 2 unit matrix, evaluate P^{2} − 2P + 4I.|[[9, 4], [−12, 1]]|[[−3, 0], [0, −4]]|[[1, 0], [0, 1]]|[[1, 4], [4, 1]]": "matrices",
  "|Find the range of values of x for which (x + 2)/4 − (2x − 3)/3 < 4.|x > −6|x > −3|x < 8|x < 4": "inequalities",
  "|Find the maximum value of y in the equation y = 1 − 2x − 3x^{2}.|5/4|5/3|3/4|4/3": "differentiation",
  "|If the 9th term of an A.P. is five times the 5th term, find the relationship between a and d.|2a + d = 0|3a + 5d = 0|a + 3d = 0|a + 2d = 0": "sequences",
  "|Make r the subject of the formula x/(r + a) = a/r.|a^{2}/(x − a)|a^{2}/(x + a)|a/(x − a)|a/(x + a)": "algebra",
  "|The inverse of the function f(x) = 3x + 4 is|(1/3)(x − 4)|(1/5)(x − 5)|(1/4)(x + 3)|(1/3)(x + 4)": "algebra",
  "|If −2 is the solution of the equation 2x + 1 − 3c = 2c + 3x − 7, find the value of c.|4|3|2|1": "equations",
  "|The binary operation * is defined on the set of integers p and q by p * q = pq + p + q. Find 2 * (3 * 4).|59|19|67|38": "binary-operations",
  "|If N = [[3, 5, −4], [6, −3, −5], [−2, 2, 1]], find |N|.|17|23|65|91": "matrices",
  "|The sum to infinity of the series 1 + 1/3 + 1/9 + 1/27 + … is|11/3|10/3|5/2|3/2": "sequences",
  "|If x varies directly as √n and x = 9 when n = 9, find x when n = 17/9.|4|27|√3|√17": "variation",
  "|In the diagram above, PST is a straight line, PQ = QS = RS. If ∠RST = 72°, find x.|36°|18°|72°|24°": "geometry",
  "|A chord of a circle subtends an angle of 120° at the centre of a circle of diameter 4√3 cm. Calculate the area of the major sector.|4π cm²|32π cm²|16π cm²|8π cm²": "mensuration",
  "|Find the equation of the set of points which are equidistant from the parallel lines x = 1 and x = 7.|y = 3|x = 3|x = 4|y = 4": "geometry",
  "|In the diagram above, XZ is the diameter of the circle XYZW, with centre O and radius 15/2 cm. If XY = 12 cm, find the area of the triangle XYZ.|54 cm²|45 cm²|27 cm²|75 cm²": "geometry",
  "|If tan θ = 4/3, calculate sin^{2} θ − cos^{2} θ.|16/25|24/25|7/25|9/25": "trigonometry",
  "|In the diagram above are two concentric circles of radii r and R respectively with centre O. If r = (2/5)R, express the area of the shaded portion in terms of π and R.|(21/25)πR^{2}|(9/25)πR^{2}|(21/23)πR^{2}|(5/9)πR^{2}": "mensuration",
  "|A bucket is 12 cm in diameter at the top, 8 cm in diameter at the bottom and 4 cm deep. Calculate its volume.|(304/3)π cm³|144π cm³|(128/3)π cm³|72π cm³": "mensuration",
  "|In the diagram above, a cylinder is surmounted by a hemispherical bowl. Calculate the volume of the solid.|180π cm³|162π cm³|216π cm³|198π cm³": "mensuration",
  "|The sum of the interior angles of a polygon is 20 right angles. How many sides does the polygon have?|12|20|40|10": "geometry",
  "|Find the coordinate of the midpoint of the x and y intercepts of the line 2y = 4x − 8.|(2, 0)|(1, −2)|(−1, −2)|(1, 2)": "coordinate",
  "|A hunter 1.6 m tall views a bird on top of a tree at an angle of 45°. If the distance between the hunter and the tree is 10.4 m, find the height of the tree.|9.0 m|12.0 m|8.8 m|10.4 m": "trigonometry",
  "|A solid hemisphere has radius 7 cm. Find the total surface area. [π = 22/7]|400 m²|462 cm²|66 cm²|308 cm²": "mensuration",
  "|Find the value of α if the line 2y − αx + 4 = 0 is perpendicular to the line y + (1/4)x − 7 = 0.|−4|4|8|−8": "coordinate",
  "|The triangle PQR above is|an obtuse-angled triangle|a scalene triangle|an isosceles triangle|an equilateral triangle": "geometry",
  "|The locus of a point P which is equidistant from two given points S and T is|the perpendicular bisector of ST|the angle bisector of PS and ST|a perpendicular to ST|a line parallel to ST": "geometry",
  "|Find the mean of the data 7, −3, 4, −2, 5, −9, 4, 8, −6, 12.|3|4|1|2": "statistics",
  "|The Venn diagram above shows the number of students offering Music and History in a class of 80 students. If a student is picked at random from the class, what is the probability that he offers Music only?|0.38|0.13|0.50|0.25": "probability",
  "|The range of the data k + 2, k − 3, k + 4, k − 2, k − 5, k + 3, k − 1 and k + 6 is|10|11|6|8": "statistics",
  "|The probability of a student passing any examination is 2/3. If the student takes three examinations, what is the probability that he will not pass any of them?|2/3|4/9|8/27|1/27": "probability",
  "|The acres for rice, pineapple, cassava, cocoa and palm oil in a certain district are given respectively as 2, 5, 3, 11 and 9. What is the angle of the sector for cassava in a pie chart?|100°|180°|36°|60°": "statistics",
  "|How many three-digit numbers can be formed from 32564 without any digit being repeated?|120|10|20|60": "permutations",
  "|The mean of a set of six numbers is 60. If the mean of the first five is 50, find the sixth number in the set.|105|100|95|110": "statistics",
  "|Calculate the mean deviation of the set of numbers 7, 3, 14, 9, 7 and 8.|21/6|2½|11/6|2⅓": "statistics",
  "|No. of days: 1, 2, 3, 4, 5, 6; No. of students: 20, x, 50, 40, 2x, 60. The distribution above shows the number of days a group of 260 students were absent from school in a particular term. How many students were absent from school for at least four days in the term?|210|40|120|160": "statistics",
  "|Evaluate log_{√2} 4 + log_{1/2} 16 − log_{4} 32.|−5.5|−2.5|2.5|5.5": "logarithms",
  "|Simplify 213_{4} × 23_{4}.|10311_{4}|10321_{4}|12231_{4}|13211_{4}": "number-bases",
  "|In a class of 40 students, 32 offer Mathematics, 24 offer Physics and 4 offer neither Mathematics nor Physics. How many offer both Mathematics and Physics?|20|16|8|4": "sets",
  "|Find (1/0.06 ÷ 1/0.042)^{−1}, correct to two decimal places.|1.43|1.53|3.14|4.42": "fractions-decimals",
  "|A woman buys 270 oranges for ₦1800.00 and sells at 5 for ₦40.00. What is her profit?|₦216.00|₦1620.00|₦630.00|₦360.00": "commercial",
  "|Simplify 1 − (2⅓ × 1¼) + 3/5.|−1 1/15|−1 19/60|−2 7/15|−2 31/60": "fractions-decimals",
  "|Simplify (√98 − √50)/√32.|3|1|½|¼": "surds",
  "|A cinema hall contains a certain number of people. If 22½% are children, 47½% are men and 84 are women, find the number of men in the hall.|63|84|113|133": "commercial",
  "|If 9^{2x−1}/27^{x+1} = 1, find the value of x.|8|5|3|2": "indices",
  "|The sum of four numbers is 1214_{5}. What is the average expressed in base five?|114|141|401|411": "number-bases",
  "|Given U = {Even numbers between 0 and 30}, P = {Multiples of 6 between 0 and 30}, Q = {Multiples of 4 between 0 and 30}, find (P ∪ Q)'.|{2, 10, 14, 22, 26}|{0, 10, 14, 22, 26}|{2, 4, 14, 18, 26}|{0, 2, 6, 22, 26}": "sets",
  "|x varies directly as the product of u and v and inversely as their sum. If x = 3 when u = 3 and v = 1, what is the value of x if u = 3 and v = 3?|3|4|6|9": "variation",
  "|Find the range of values of x satisfying the inequalities 5 + x ≤ 8 and 13 + x ≥ 7.|−3 ≤ x ≤ 3|3 ≤ x ≤ 6|−6 ≤ x ≤ 3|−6 ≤ x ≤ −3": "inequalities",
  "|If det[[−x, 2], [4x, 1]] = det[[3, 3x], [4, −5]], find the value of x.|5|2|−2|−5": "matrices",
  "|The graphs of the function y = x² + 4 and a straight line PQ are drawn to solve the equation x² − 3x + 2 = 0. What is the equation of PQ?|y = 3x − 2|y = 3x + 2|y = 3x − 4|y = 3x + 4": "quadratics",
  "|The length a person can jump is inversely proportional to his weight. If a 20 kg person can jump 1.5 m, find the constant of proportionality.|60|30|20|15": "variation",
  "|Find the value of x and y respectively if 3x − 5y + 5 = 0 and 4x − 7y + 8 = 0.|−5, −4|−4, −5|4, 5|5, 4": "equations",
  "|Three consecutive terms of a geometric progression are given as n − 2, n and n + 3. Find the common ratio.|¼|½|2/3|3/2": "sequences",
  "|Triangle OPQ above is the solution of the inequalities|x + 1 ≥ 0, y + x ≤ 0, y − x ≥ 0|y + x ≤ 0, y − x ≥ 0, x − 1 ≥ 0|x − 1 ≤ 0, y − x ≥ 0, y + x ≥ 0|x − 1 ≤ 0, y + x ≥ 0, y − x ≤ 0": "inequalities",
  "|Factorize completely 4abx − 2axy − 12b²x + 6bxy.|2x(a − 3b)(2b − y)|2x(3b − a)(2b − y)|2x(a − 3b)(y − 2b)|2x(2b − a)(3b − y)": "algebra",
  "|A matrix P has an inverse P^{−1} = [[1, −3], [0, 1]]. Find P.|[[−1, 3], [0, −1]]|[[1, 3], [0, −1]]|[[1, −3], [0, −1]]|[[1, 3], [0, 1]]": "matrices",
  "|The sum of the first n terms of an arithmetic progression is 252. If the first term is −16 and the last term is 72, find the number of terms in the series.|6|7|8|9": "sequences",
  "|An arc of a circle subtends an angle of 30° on the circumference of a circle of radius 21 cm. Find the length of the arc. [π = 22/7]|11 cm|22 cm|44 cm|66 cm": "mensuration",
  "|Find the equation of the locus of a point P(x, y) which is equidistant from Q(0, 0) and R(2, 1).|4x + 2y = 5|4x − 2y = 5|2x + 2y = 5|2x + y = 5": "coordinate",
  "|In the diagram above, PQ is parallel to RS. What is the value of α + β + γ?|360°|200°|180°|90°": "geometry",
  "|A trapezium has two parallel sides of length 5 cm and 9 cm. If the area is 21 cm², find the distance between the parallel sides.|3 cm|4 cm|6 cm|7 cm": "mensuration",
  "|Which of the following is the graph of sin θ for −π/2 ≤ θ ≤ 3π/2?|Graph A|Graph B|Graph C|Graph D": "trigonometry",
  "|In the diagram above, O is the centre of the circle. POM is a diameter and ∠MNQ = 42°. Calculate ∠QMP.|42°|48°|132°|138°": "geometry",
  "|Find the value of p, if the line which passes through (−1, −p) and (−2p, 2) is parallel to the line 2y + 8x − 17 = 0.|7/6|6/7|−2/7|−6/7": "coordinate",
  "|An aeroplane flies due north from airport P to Q and then flies due east to R. If Q is equidistant from P and R, find the bearing of P from R.|090°|135°|225°|270°": "trigonometry",
  "|The locus of a point P which moves on one side only of a straight line XY so that ∠XPY = 90° is|a circle|a semicircle|an arc of a circle through X, Y|the perpendicular bisector of XY": "geometry",
  "|If π/2 ≤ θ ≤ 2π, find the maximum value of f(θ) = 4/(6 + 2 cos θ).|4|1|2/3|½": "trigonometry",
  "|XYZ is a circle centre O and radius 7 cm. Find the area of the shaded region.|84 cm²|77 cm²|38 cm²|14 cm²": "mensuration",
  "|A triangle has vertices P(−1, 6), Q(−3, −4) and R(1, −4). Find the midpoints of PQ and QR respectively.|(0, −2) and (−1, −4)|(−1, 0) and (−1, −1)|(−2, 1) and (0, 1)|(−2, 1) and (−1, −4)": "coordinate",
  "|In the diagram above, PQR is a straight line and PS is a tangent to the circle QRS with |PS| = |SR| and ∠SPR = 40°. Find ∠PSQ.|40°|30°|20°|10°": "geometry",
  "|Find the slope of the curve y = 2x² + 5x − 3 at (1, 4).|4|6|7|9": "differentiation",
  "|Evaluate ∫_{2}^{3} (x² − 2x) dx.|4|2|4/3|1/3": "integration",
  "|If y = 3 sin(−4x), dy/dx is|12x cos(4x)|−12x cos(−4x)|−12 cos(−4x)|−12 sin(−4x)": "differentiation",
  "|Determine the maximum value of y = 3x² − x³.|0|2|4|6": "differentiation",
  "|By how much is the mean of 30, 56, 31, 55, 43 and 44 less than the median?|0.75|0.50|0.33|0.17": "statistics",
  "|The range of 4, 3, 11, 9, 6, 15, 19, 23, 27, 24, 21 and 16 is|16|21|23|24": "statistics",
  "|Number: 0, 1, 2, 3, 4. Frequency: 1, 2, 2, 1, 9. Find the mean of the distribution above.|1|2|3|4": "statistics",
  "|On a pie chart, there are four sectors of which three angles are 45°, 90° and 135°. If the smallest sector represents ₦28.00, how much is the largest sector?|₦84.00|₦42.00|₦48.00|₦96.00": "statistics",
  "|Two dice are thrown. What is the probability that the sum of the numbers is divisible by 3?|2/3|½|1/3|¼": "probability",
  "|If ^{n}P_{3} − 6(^{n}C_{4}) = 0, find the value of n.|5|6|7|8": "permutations",
  "|Find the number of committees of three that can be formed consisting of two men and one woman from four men and three women.|3|6|18|24": "permutations",
  "|The mean of the numbers 3, 6, 4, x and 7 is 5. Find the standard deviation.|√2|√3|2|3": "statistics",
  "|A bag contains 5 black balls and 3 red balls. Two balls are picked at random without replacement. What is the probability that a black and a red ball are picked?|15/28|13/28|5/14|3/14": "probability",
  "|The histogram above shows the ages of the victims of a pollution. How many people were involved in the pollution?|15|18|20|21": "statistics",
  "|Number: 1, 2, 3, 4, 5, 6. Frequency: 12, 20, x, 21, x − 1, 28. The result of tossing a fair die 120 times is summarized above. Find the value of x.|19|20|21|22": "statistics"
 }
};
