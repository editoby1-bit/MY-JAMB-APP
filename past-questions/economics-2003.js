/**
 * JAMB/UTME 2003 — ECONOMICS
 * From the 2003 question paper (questions 1–50); answers from the JAMB/UTME Economics answer key 2001–2020,
 * each checked independently. Answer checks carry keyVerdict/answerNote.
 */
(function () {
  const Y = 2003;
  const SRC = 'JAMB UTME 2003';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});
  const IMG = f => `<img src="past-questions/img/${f}" alt="Diagram for this question" loading="lazy">`;

  const PPC = "Use the production possibility curve of a country represented in the diagram to answer the question.\n\n";
  const MU = "Use the table below to answer the question: \nQ ... 1 ... 2 ... 3 ... 4 ... 5 ... 6 ... 7 ... 8\nMUy ... 16 ... 14 ... 12 ... 10 ... 8 ... 6 ... 4 ... 2\nMUx ... 11 ... 10 ... 9 ... 8 ... 7 ... 6 ... 5 ... 4\n\n";
  const COST = "Use the table below to answer the question: \nOutput produced per day (unit) ... Fixed cost per day (₦) ... Total cost per day (₦)\n20 ... 60 ... 100\n30 ... 60 ... 120\n40 ... 60 ... 130\n50 ... 60 ... 135\n60 ... 60 ... 150\n70 ... 60 ... 170\n80 ... 60 ... 190\n\n";

  QUESTION_BANK.economics = QUESTION_BANK.economics.concat([
    // 1
    q("The price of a good rises from ₦5 to ₦8 and the quantity demanded falls from 200 to 190 units. Over this price range, the demand curve is",
      ["fairly inelastic", "fairly elastic", "perfectly inelastic", "perfectly elastic"], A,
      "Quantity falls by 10/200 = 5% while price rises by 3/5 = 60%, so PED = 5% ÷ 60% ≈ 0.08. This is less than 1 but not zero, so demand is fairly inelastic."),
    // 2
    q("In economic analysis, a statement is said to be normative if it",
      ["can be tested scientifically", "relates to value judgment", "is contradictory", "is incorrect"], B,
      "A normative statement says what ought to be; it rests on value judgments and cannot be proved true or false by testing."),
    // 3
    q("Utility is the satisfaction derived from",
      ["production", "distribution", "consumption", "demand"], C,
      "Utility is the satisfaction a consumer gets from consuming a good or service."),
    // 4
    q("If there is an increase in demand without a corresponding increase in supply, there will be",
      ["fall in price", "rise in price", "shift in supply curve to the right", "shift in demand curve to the left"], B,
      "When demand rises and supply stays the same, there is excess demand at the old price, so the price rises."),
    // 5
    q(PPC + "An improvement in technology will enable the country to produce at",
      ["V", "W", "X", "Z"], D,
      "Better technology shifts the production possibility curve outwards, so a point beyond the present curve, such as Z, becomes attainable.",
      { diagram: IMG('economics-2003-q5.png') }),
    // 6
    q(PPC + "If the country is currently producing at point Y, it can increase production of producer goods by moving to the point",
      ["V", "W", "X", "Z"], B,
      "Producer goods are on the horizontal axis. Moving along the curve from Y down to W gives more producer goods (at the cost of some consumer goods).",
      { diagram: IMG('economics-2003-q6.png') }),
    // 7
    q(MU + "In the table above, the price of commodity y is ₦2 and that of x is ₦1 while the individual has an income of ₦12. Determine the combination of the two commodities the individual should consume to maximize his utility",
      ["3y and 3x", "6y and 4x", "3y and 6x", "5y and 5x"], C,
      "Utility is maximised where MUy/Py = MUx/Px and the whole income is spent. At 3y and 6x, 12/2 = 6/1 = 6 and spending is 3 × ₦2 + 6 × ₦1 = ₦12."),
    // 8
    q("When two variables are positively related, the graph of the relationship",
      ["is a straight line", "is a downward-sloping curve", "is an upward sloping curve", "has a negative intercept"], C,
      "A positive relationship means both variables rise together, so the graph slopes upwards from left to right."),
    // 9
    q("For an inferior good, a decrease in real income will lead to",
      ["an outward shift of the demand curve", "an inward shift of the demand curve", "a lowered equilibrium price", "a change in quantity demanded"], A,
      "Demand for an inferior good moves opposite to income, so a fall in real income raises demand and shifts the demand curve outwards (to the right)."),
    // 10
    q("In a planned economy, the emphasis is on",
      ["individual choice and decisions", "public ownership and control", "private ownership and control", "prices and competition"], B,
      "In a planned (command) economy the state owns and controls the means of production and decides what, how and for whom to produce."),
    // 11
    q("Price elasticity of supply is a ratio of the change in",
      ["quantity supplied to the change in demand", "original quantity to a change in new quantity", "quantity supplied to the change in price", "price to the change in quantity supplied"], C,
      "Elasticity of supply = percentage change in quantity supplied ÷ percentage change in price."),
    // 12
    q("The long-run average cost curve is called a planning curve because it shows what happens to costs when",
      ["variable inputs are increased", "fixed factors are increased", "different sizes of plants are built", "a bigger size of plants is built"], C,
      "The LRAC curve envelops the short-run cost curves of different plant sizes, so a firm uses it to plan which size of plant to build for any output."),
    // 13
    q("Imperfect market is characterized by",
      ["many buyers and few sellers", "a large number of buyers and sellers", "non-preferential treatment", "perfect mobility of factors of production"], A,
      "In imperfect markets there are few sellers, each with some control over price; the other options are features of perfect competition."),
    // 14
    q("Short-run period in production is a period too short for a firm to be able to change its",
      ["variable inputs", "total outputs", "total revenue", "scale of operation"], D,
      "In the short run at least one factor (plant, machinery, land) is fixed, so the firm cannot change its scale of operation; it can only vary inputs such as labour and raw materials."),
    // 15
    q(COST + "The ATC at 30 units of output is",
      ["₦120.00", "₦60.00", "₦4.00", "₦3.00"], C,
      "ATC = total cost ÷ output = ₦120 ÷ 30 = ₦4.00."),
    // 16
    q(COST + "At 60 units of output, the AVC is",
      ["₦150.00", "₦90.00", "₦2.50", "₦1.50"], D,
      "Variable cost = ₦150 − ₦60 = ₦90, so AVC = ₦90 ÷ 60 = ₦1.50."),
    // 17
    q("If the demand curve facing a firm is sharply downward sloping, the firm is likely to be",
      ["a perfect competitor", "a monopolistic competitor as it can have a limited influence on price", "an oligopolist as it can collude with other firms to have some influence on price", "a monopolist as it can have a great influence on price"], D,
      "A steep (sharply sloping) demand curve means few or no close substitutes, which is the position of a monopolist with great power over price."),
    // 18
    q("A normal supply curve is usually positively sloped because the relationship between",
      ["demand and price is positive", "supply and price is negative", "price and demand is negative", "price and supply is positive"], D,
      "The law of supply says more is supplied at higher prices, a positive relationship, so the supply curve slopes upwards."),
    // 19
    q("The best method of production in an under-populated country is",
      ["labour-extensive", "land-intensive", "capital-intensive", "labour-intensive"], C,
      "Where labour is scarce, a country should use methods that use more machines and less labour, that is, capital-intensive production."),
    // 20
    q("Insurance companies, pension and provident funds and unit trusts are all examples of",
      ["government financial agencies", "non-governmental organizations", "non-bank financial institutions", "rural-based revenue mobilisers"], C,
      "These institutions mobilise savings and lend or invest them but do not accept chequeable deposits, so they are non-bank financial institutions."),
    // 21
    q("For a firm, value added can be defined as the difference between the",
      ["value of its output and the cost of production", "total revenue and total cost", "input prices and product prices", "value of its output and inputs purchased from other firms"], D,
      "Value added = value of output minus the value of inputs (raw materials, services) bought from other firms; it avoids double counting."),
    // 22
    q("Securities are described as listed when they are",
      ["bought and sold purely for development purposes", "mobilized as short-term debt instruments", "mobilized as long-term debt instrument", "traded on a recognized stock market"], D,
      "A listed (quoted) security is one admitted for trading on a recognised stock exchange, such as the Nigerian Exchange."),
    // 23
    q("The commercial banks differ from non-bank financial institutions because they",
      ["accept deposits withdrawable by cheque", "mobilize savings", "invest surplus funds", "contribute to economic development"], A,
      "Only commercial banks accept demand deposits that can be withdrawn by cheque; this is also why they can create credit. The other options apply to both."),
    // 24
    q("Inflation that is usually associated with periods of trade boom is",
      ["cost-push inflation", "demand-pull inflation", "creeping inflation", "stagnation"], B,
      "In a boom, spending and demand rise faster than output, pulling prices up: demand-pull inflation."),
    // 25
    q("The term \"Near Money\" is best described as",
      ["a financial asset that is convertible to cash", "a financial instrument that is readily convertible to cash", "government financial instrument that is convertible to cash", "time deposits with low interest rates"], B,
      "Near money is a financial asset, such as a savings deposit, treasury bill or bill of exchange, that is not itself money but can be turned into cash quickly and easily."),
    // 26
    q("The distinguishing characteristic between the money market and the capital market lies in whether the",
      ["funds mobilized are private or public", "securities are primary or secondary", "debt instruments provided are long-term or short-term", "securities are in debentures or ordinary shares"], C,
      "The money market deals in short-term funds and instruments; the capital market deals in long-term funds and instruments."),
    // 27
    q("If Nigeria's composite price index in 1999 was 140.03% and 144.05% in 2000, the rate of inflation in 2000 was",
      ["4.02%", "2.10%", "2.06%", "1.03%"], A,
      "The index rose by 144.05 − 140.03 = 4.02 points, which is the answer intended. Strictly, the rate of inflation is 4.02 ÷ 140.03 × 100 ≈ 2.87%.",
      { keyVerdict: 'none', keyAnswer: 'A', answerNote: "Option A (4.02%) is only the rise in the index in points (144.05 − 140.03). The rate of inflation is the percentage change in the index: 4.02 ÷ 140.03 × 100 ≈ 2.87%, which is not among the options. A is the answer intended, but it is not fully correct." }),
    // 28
    q("The monetary control instrument most effectively used by the Central Bank of Nigeria is the",
      ["discount rate", "reserve ratio", "margin requirements", "open market operations"], D,
      "Since the move to indirect (market-based) monetary control in the 1990s, open market operations, the buying and selling of government securities, have been the CBN's main tool."),
    // 29
    q("The major objectives of a revenue allocation formula in a country is to",
      ["share revenue between the public and private sectors", "ensure the financial viability of the country", "share revenue between the different tiers of government", "divert revenue from areas of surplus to areas of need"], C,
      "A revenue allocation formula decides how federally collected revenue is shared among the federal, state and local governments."),
    // 30
    q("The effectiveness of devaluation as a solution to a balance of payments problems depends on the",
      ["relative elasticities of demand and supply of imports and exports", "foreign investments of business", "value of visible and invisible goods", "value of invisible items of both domestic and foreign trades"], A,
      "Devaluation works only if demand for exports and imports is elastic enough (the Marshall–Lerner condition) and export supply can expand."),
    // 31
    q("IBRD as an international monetary institution is concerned with the",
      ["balance of payments problems of member nations", "financing of private business in member nations", "development of infrastructure in member nations", "improvement of trade among member nations"], C,
      "The IBRD (World Bank) gives long-term loans for development projects such as roads, power and water; balance of payments help is the IMF's job."),
    // 32
    q("An advantage of the sole proprietorship over the partnership form of business organization is that",
      ["it enjoys limited liability for debt in the event of failure", "its existence is limited to an individual's lifespan", "it relies on the decision of friends to succeed", "the possibility of conflict in management is virtually non-existent"], D,
      "A sole trader makes all decisions alone, so there are no disagreements between owners as there can be in a partnership."),
    // 33
    q("The distinction between capital and recurrent expenditure lies in the",
      ["amount of expenditure involved", "source of the revenue generated", "nature of the goods and services to be provided", "time frame of the expenditure"], D,
      "Recurrent expenditure is on items used up within the year and repeated every year (salaries, maintenance); capital expenditure is on projects and assets that last for many years."),
    // 34
    q("Under floating exchange rate regime, the determinant of the exchange rate is",
      ["the system of government", "demand for and supply of foreign goods", "the highest denomination of the currency", "an act of the national assembly"], B,
      "Under a floating system the exchange rate is set by market forces: the demand for and supply of foreign exchange, which come from buying and selling foreign goods and services."),
    // 35
    q("To compare the standard of living among nations, the most widely used economic indicator is the",
      ["per capita nominal income", "real domestic output", "real gross national income", "real per capita income"], D,
      "Real per capita income (real national income ÷ population) removes the effects of price changes and population size, so it is the usual measure for comparing living standards."),
    // 36
    q("Statutory organizations usually established by Acts of parliament are called",
      ["public enterprises", "public corporations", "cooperative societies", "joint-stock companies"], B,
      "A public corporation is set up by a special Act (statute) of parliament, which states its powers and duties."),
    // 37
    q("A greater burden of the taxes on essential goods is borne by the",
      ["higher income group", "newly recruited workers", "lower income group", "contract workers"], C,
      "Taxes on essentials are regressive: the poor spend a larger share of their income on such goods, so they bear a greater burden."),
    // 38
    q("Privatization and commercialization of public enterprises in Nigeria is necessitated by",
      ["the IMF conditions", "the IBRD conditions", "the government's loss of interest in them", "their operational inefficiency"], D,
      "Public enterprises were privatised or commercialised (from the 1988 decree under SAP) mainly because they were inefficient and a drain on government funds."),
    // 39
    q("The theory of comparative advantage states that a commodity should be produced in that nation where the",
      ["absolute cost is least", "absolute money cost is least", "opportunity cost is least", "production possibility curve increases"], C,
      "Comparative advantage (Ricardo) says a country should specialise in the good it can produce at the lowest opportunity cost."),
    // 40
    q("The effect of an increase in the personal income tax is to",
      ["raise the absolute price level", "distort the economy", "reduce unemployment", "reduce the disposable income"], D,
      "Personal income tax is deducted from income, so a higher rate leaves people with less disposable income to spend or save."),
    // 41
    q("An important factor hindering the rapid development of the industrial sector in Nigeria is",
      ["excessive demand for finished products", "the dominance of the oil sector", "rural-urban migration", "inadequate infrastructure facilities"], D,
      "Poor power supply, roads, water and communications raise costs and hold back Nigerian industry."),
    // 42
    q("The demand for labour is an example of",
      ["competitive demand", "derived demand", "composite demand", "joint demand"], B,
      "Labour is demanded not for itself but for the goods and services it helps to produce, so its demand is derived demand."),
    // 43
    q("The major role of multi-national companies in the petroleum industry in Nigeria is",
      ["oil prospecting only", "oil marketing only", "the establishment of refineries", "oil marketing and prospecting"], D,
      "Multinationals such as Shell, Mobil, Chevron and Total both explore for and produce oil and market petroleum products in Nigeria."),
    // 44
    q("Fixing the prices of agricultural products can be a problem because of the",
      ["unpredictable output of farmers", "instability of government policies", "activities of marketing boards", "size of agricultural exports"], A,
      "Farm output depends on weather, pests and disease, so supply swings unpredictably and makes fixed prices hard to set and hold."),
    // 45
    q("Occupational mobility as applied to factors of production means the ease by which",
      ["factors can be transferred from one place to another", "factors can be transferred from one form of use to another", "resources can be transferred from one place to another", "resources can be transformed from one form to another"], B,
      "Occupational mobility is the ease of moving a factor from one use or job to another; moving from place to place is geographical mobility."),
    // 46
    q("The labour force of a country can be determined by examining the",
      ["sex distribution of the population", "occupational distribution of the population", "age structure of the population", "geographical distribution of the population"], C,
      "The labour force is drawn from the working-age population (about 15–64 years), so it is found from the age structure."),
    // 47
    q("Two basic features common to an industry are",
      ["similarity of products and production processes", "similarity of products and source of raw materials", "production processes and source of capital", "source of capital and labour supply"], A,
      "An industry is a group of firms producing similar products, usually with similar production processes."),
    // 48
    q("A country is said to be over populated when",
      ["there are too many able-bodied men and women in the country", "the resources are more than enough to cater for the population", "the size of the population is greater than the annual budget", "the resources are inadequate to cater for the population"], D,
      "Over-population exists when the population is too large for the available resources, so income per head falls below what a smaller population would enjoy."),
    // 49
    q("When a union is composed of workers with same skill, it is called",
      ["an industrial union", "a workers' union", "a craft union", "a technical union"], C,
      "A craft union is made up of workers with the same skill or trade, whatever industry they work in."),
    // 50
    q("An adverse environmental impact of the petroleum industry on the economy is",
      ["the vandalisation of oil equipment", "oil spillage", "communal riots", "community development"], B,
      "Oil spills pollute land, rivers and farmland in the Niger Delta, harming fishing and farming: an environmental cost of the oil industry."),
  ]);
})();
