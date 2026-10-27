/**
 * JAMB/UTME 2004 — ECONOMICS
 * From the 2004 question paper (questions 1–50); answers from the JAMB/UTME Economics answer key 2001–2020,
 * each checked independently. Answer checks carry keyVerdict/answerNote.
 */
(function () {
  const Y = 2004;
  const SRC = 'JAMB UTME 2004';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});
  const IMG = f => `<img src="past-questions/img/${f}" alt="Diagram for this question" loading="lazy">`;

  const T38 = "Use the table below to answer the question: \nCombination ... Beans (Unit) ... Rice (Unit)\nK ... 15 ... 19\nL ... 20 ... 17\nM ... 24 ... 16\n\nThe table above shows the combinations of beans and rice that can be purchased by a consumer. ";
  const D4546 = "Use the diagram below to answer the question. S₁ and S₂ are supply curves; M and T lie on S₁ and N lies on S₂.\n\n";

  QUESTION_BANK.economics = QUESTION_BANK.economics.concat([
    // 1
    q("By advertising, a monopolistic competitive firm tries to shift its",
      ["supply curve to the right", "demand curve to the right", "supply curve to the left", "demand curve to the left"], B,
      "Advertising aims to make more buyers want the firm's product at every price, which shifts its demand curve to the right."),
    // 2
    q("Given that Y = C + I and C = bY where b = 0.8, what is the multiplier?",
      ["5", "10", "4", "2"], A,
      "b is the marginal propensity to consume, so the multiplier = 1/(1 − b) = 1/(1 − 0.8) = 1/0.2 = 5."),
    // 3
    q("The role of the Central Bank in the economic development of Nigeria is to",
      ["give short-and medium-term loans to the public", "give financial and technical advice to customers", "use the cheques and bank drafts to facilitate business transactions", "maintain a stable price system"], D,
      "The Central Bank does not deal with the public; it uses monetary policy to keep prices stable, which supports development."),
    // 4
    q("The primary function of non-bank financial institutions is to",
      ["manage investment portfolios for government", "mobilize saving for investment", "grant loans to banks", "receive deposits from banks"], B,
      "Insurance companies, building societies, pension funds and similar bodies exist mainly to gather people's savings and channel them into investment."),
    // 5
    q("At the maximum point of the total product curve of a firm, marginal product is",
      ["decreasing", "increasing", "constant", "zero"], D,
      "Total product stops rising at its maximum, so the extra output from one more worker (marginal product) is zero there."),
    // 6
    q("In an open economy, the GNP is measured as",
      ["C + I + G + X", "C + I + G + (X − M)", "C + I + G + M", "C + I + G"], B,
      "In an open economy spending is consumption, investment and government spending plus net exports (X − M); C + I + G alone is a closed economy.",
      { keyVerdict: 'none', keyAnswer: 'B', answerNote: "C + I + G + (X − M) is strictly GDP (gross domestic product) at market prices. GNP adds net factor income from abroad: GNP = C + I + G + (X − M) + net factor income from abroad. No option includes it, but B is the closest because it is the only one that treats the foreign sector correctly (exports added, imports taken away)." }),
    // 7
    q("The diagram above represents the short-run position of a monopolist. The profit-maximizing output is",
      ["Q3", "Q4", "Q1", "Q2"], D,
      "A monopolist maximises profit where marginal cost equals marginal revenue; in the diagram the MR line cuts MC at output Q2.",
      { diagram: IMG('economics-2004-q7.png') }),
    // 8
    q("The capital market provides business firms with the avenue to",
      ["lease capital equipment", "obtain long-term funds", "obtain short-term funds", "purchase capital equipment"], B,
      "The capital market deals in long-term funds (shares, bonds, debentures); short-term funds come from the money market."),
    // 9
    q("Which of the financial institutions is charged with the formulation of monetary policies in Nigeria?",
      ["The Central Bank of Nigeria", "The Nigeria Deposit Insurance Corporation", "The Abuja Commodity Exchange", "The Lagos Stock Exchange"], A,
      "The Central Bank of Nigeria formulates and carries out monetary policy, controlling money supply, interest rates and credit."),
    // 10
    q("GDP differs from GNP because GDP",
      ["is inclusive of depreciation", "emphasizes the final goods and services produced within the country at a particular period", "emphasizes the goods and services produced within the country", "emphasizes the market value of all final goods and services produced by nationals"], C,
      "GDP counts what is produced within the country's borders, whoever produces it; GNP counts what is produced by the country's nationals wherever they are.",
      { keyVerdict: 'multiple', keyAnswer: 'C', alsoAccept: [B],
        answerNote: "Options B and C both make the same point: GDP is output produced within the country, while GNP is output of the country's nationals. B simply adds 'final' and 'at a particular period', which is also true, so either is accepted." }),
    // 11
    q("The distinction between perfect competition and monopolistic competition is that the latter is characterized by",
      ["a single market price", "many buyers and sellers", "product differentiation", "homogeneity of product"], C,
      "Both structures have many buyers and sellers, but under monopolistic competition each firm's product is slightly different (branded), not identical."),
    // 12
    q("The downstream activities of oil companies in Nigeria involve",
      ["refining and distribution", "prospecting and exploration", "off-shore drilling", "management of spillage and pollution"], A,
      "Downstream means everything after crude oil is produced: refining, transporting and marketing products; prospecting and drilling are upstream."),
    // 13
    q("The movement of goods and services from the producers to the consumers is referred to as",
      ["external trade", "the distribution chain", "the circular flow", "consumption"], B,
      "The chain of distribution is the path goods take from producer through wholesaler and retailer to the final consumer."),
    // 14
    q("The purpose of conducting a census is to enable a country to",
      ["plan her capital inflow and outflow", "determine the growth rate of population", "determine the optimum level of population", "plan her growth and development"], D,
      "A census gives the size, age, sex and spread of the population, which government needs to plan schools, hospitals, jobs and development generally."),
    // 15
    q("A major cause of the slow pace of industrialization in Nigeria is inadequate",
      ["raw materials", "landmass", "skilled labour", "communal labour"], C,
      "Nigeria has land and many raw materials, but a shortage of skilled technicians, engineers and managers has slowed industrial growth."),
    // 16
    q("The maximum wage legislation seeks to",
      ["fix wages above the equilibrium wage rate", "set wages below the equilibrium wage rate", "deter employers from exploiting their employees", "ensure an upper limit to the wages payable"], B,
      "A maximum wage is a legal ceiling on pay; to have any effect it must be set below the equilibrium wage rate.",
      { keyVerdict: 'multiple', keyAnswer: 'B', alsoAccept: [D],
        answerNote: "A maximum wage is an upper limit on the wages payable (D), and to be effective that limit is set below the equilibrium wage rate (B). Both describe the same policy, so either is accepted." }),
    // 17
    q("The marketing of agricultural commodities in Nigeria is hampered by",
      ["lack of adequate storage facilities", "the existence of farmers' associations", "the existence of commodity exchange", "the abolition of marketing boards"], A,
      "Without good storage, farmers must sell perishable produce quickly at harvest-time prices, and much is wasted."),
    // 18
    q("Import duty concessions on industrial inputs directly benefit the",
      ["consumers", "external sector", "commercial sector", "manufacturers"], D,
      "Lower duties on imported machinery and raw materials cut production costs, so the manufacturers who import these inputs gain directly."),
    // 19
    q("The labour force in Nigeria falls between the ages of",
      ["18 and 45", "18 and 55", "18 and 60", "18 and 30"], C,
      "Nigerian textbooks take the working population as people aged 18 to 60, the usual retirement age; today official statistics use 15 to 64."),
    // 20
    q("Government's involvement in agricultural business in Nigeria is most manifested in the",
      ["establishment of farm settlements in each state of the federation", "establishment of credit guarantee schemes for small-scale farmers", "formation of farmers' cooperative societies", "procurement and distribution of fertilizers"], D,
      "Federal and state governments have long bought fertilizer in bulk and distributed it, often subsidised, to farmers; it is their most visible direct role."),
    // 21
    q("The difference between birth and death rates of a given population is referred to as the",
      ["mortality rate", "fertility rate", "natural growth rate", "linear growth rate"], C,
      "Birth rate minus death rate gives the natural growth (natural increase) rate, ignoring migration."),
    // 22
    q("Fiscal policy is the government's plan to control aggregate demand by manipulating",
      ["the demand and supply of money", "revenue and expenditure", "tastes and preferences of consumers", "the structure of production and employment"], B,
      "Fiscal policy uses taxation (revenue) and government spending; controlling money supply is monetary policy."),
    // 23
    q("A country is said to have absolute advantage when she",
      ["has a higher opportunity cost in the production of a good", "can sell to other countries without buying from them", "can produce more of any good with fewer resources", "has a lower opportunity cost in the production of a good"], C,
      "Absolute advantage means producing more of a good with the same (or fewer) resources than another country; lower opportunity cost is comparative advantage."),
    // 24
    q("The European Union was formed to",
      ["promote free trade within member nations", "promote economic integration in non-member countries", "assist countries to achieve their economic goals", "finance development projects in member nations"], A,
      "The EU, which grew out of the European Economic Community, removes trade barriers among its members to create a single market."),
    // 25
    q("If budget deficits are financed by borrowing, the crowding-out effects can be offset by an increase in",
      ["government expenditure", "savings", "interest rates", "exchange rates"], B,
      "Government borrowing raises interest rates and squeezes out private borrowers; more savings add to loanable funds and ease that pressure.",
      { bookletKey: 'D', bookletNote: "Crowding out happens because government borrowing competes for limited loanable funds and pushes interest rates up. Only more savings (B) enlarge the pool of funds and offset this; a change in exchange rates (D, the booklet answer) does not add to the funds available to private borrowers." }),
    // 26
    q("When the importation of a commodity is limited to a definite quantity, the trade control means used is known as",
      ["exchange control", "tax relief", "devaluation", "quotas"], D,
      "A quota fixes the maximum quantity of a good that may be imported in a period."),
    // 27
    q("The excess of aggregate expenditure over full employment level of output is referred to as",
      ["GNP gap", "deflationary gap", "inflationary gap", "recessionary gap"], C,
      "When spending exceeds what the economy can produce at full employment, the excess pushes up prices: an inflationary gap."),
    // 28
    q("The tax levied on goods and services at each stage of production is",
      ["surtax", "VAT", "ad valorem tax", "PAYE"], B,
      "Value Added Tax is charged at each stage of production and distribution on the value added at that stage; Nigeria introduced it in 1993."),
    // 29
    q("The number of shareholders in a private limited liability company ranges from",
      ["two to seven", "two to three", "two to fifty", "two to twenty"], C,
      "Under the Companies and Allied Matters Act 1990 a private company had at least two and at most fifty members; CAMA 2020 now allows one member, still with a maximum of fifty."),
    // 30
    q("A major reason for having a national development plan is to",
      ["ensure efficient use of available resources", "involve people in national programmes", "make government spend more on production", "ensure that more citizens are involved in planning"], A,
      "A plan sets priorities so that scarce resources are put to their best uses and waste is avoided."),
    // 31
    q("The difference between payments and receipts for visible trade is called",
      ["bilateral trade", "current balance", "balance of payment", "balance of trade"], D,
      "Visible trade is trade in goods; the difference between visible exports and visible imports is the balance of trade."),
    // 32
    q("One of the causes of the present high rate of inflation in Nigeria is",
      ["increasing budget surplus", "increasing factors costs", "exchange rate appreciation", "high capacity utilization"], B,
      "Rising costs of labour, fuel, power and imported inputs push up prices (cost-push inflation); the other options would tend to reduce inflation."),
    // 33
    q("The final stage in the production process of any commodity involves its movement from the",
      ["retailer to the wholesaler", "producer to the wholesaler", "retailer to the consumer", "wholesaler to the retailer"], C,
      "Production is complete only when goods reach the final consumer, and the last link is the retailer selling to the consumer."),
    // 34
    q("A change in demand for a normal good means",
      ["a shift in the demand curve", "a change in the price elasticity", "the demand changes as price changes", "a movement along a given demand curve"], A,
      "A change in demand is caused by factors other than the good's own price and shifts the whole demand curve; a price change only moves along it."),
    // 35
    q("In the diagram above, ST is the budget line while I, II and III represent indifference curves. A rational consumer will choose to consume at point",
      ["M", "T", "K", "L"], D,
      "The consumer is in equilibrium where the budget line just touches the highest attainable indifference curve; that tangency is at L on curve II.",
      { diagram: IMG('economics-2004-q35.png') }),
    // 36
    q("In order to increase revenue, the seller of a commodity whose demand is fairly elastic is advised to",
      ["increase price", "reduce output", "reduce price", "retain price"], C,
      "With elastic demand, quantity bought rises proportionately more than price falls, so a price cut raises total revenue."),
    // 37
    q("In any set of data, the median represents the",
      ["value that is most representative of the data", "mid-position when the values are arranged in ascending or descending order", "mid-position when the values are arranged randomly", "difference between the highest and the lowest values when arranged in ascending order"], B,
      "The median is the middle value once the data are put in order; the difference between highest and lowest is the range."),
    // 38
    q(T38 + "The opportunity cost of moving from K to L is",
      ["2 units of rice", "5 units of beans", "17 units of rice", "20 units of beans"], A,
      "Moving from K (15 beans, 19 rice) to L (20 beans, 17 rice) gains 5 beans by giving up 19 − 17 = 2 units of rice."),
    // 39
    q("One of the assumptions of ordinalist utility in consumer behaviour is that",
      ["consumers are irrational", "marginal utility rises continuously", "utility is measurable", "utility can only be ranked"], D,
      "Ordinal utility theory (indifference curves) assumes consumers can rank bundles in order of preference but cannot measure utility in units."),
    // 40
    q("A large standard deviation is an indication of",
      ["the size of the sample", "a wide spread around the mean", "a wide difference between the mean and the mode", "the difference between the highest and the lowest values"], B,
      "Standard deviation measures how far the values are spread around the mean; a large value means they are widely scattered."),
    // 41
    q("A major characteristic of a mixed economy is that",
      ["economic decisions are made by both the rich and the poor", "both primary and secondary production are undertaken", "the federal and the state governments undertake joint projects", "economic activities are undertaken by both the public and private sectors"], D,
      "A mixed economy combines private enterprise with government ownership and control, so both sectors carry on economic activity."),
    // 42
    q("Given the cost function C = 160 + 36Q, what is the average cost at 20 units of output?",
      ["₦720", "₦216.00", "₦44.00", "₦880.00"], C,
      "Total cost = 160 + 36 × 20 = 160 + 720 = ₦880; average cost = 880 ÷ 20 = ₦44."),
    // 43
    q("If an increase in the price of good X leads to an increase in the supply of good Y, X and Y are said to be",
      ["jointly supplied", "competitive", "composite", "jointly demanded"], A,
      "In joint supply one good comes out with the other (e.g. beef and hides); a higher price of X brings more X and so more Y as well."),
    // 44
    q("The diagram above shows the shifts in both demand and supply curves. What is the new equilibrium point after the shifts?",
      ["E₃", "E₁", "E₄", "E₂"], D,
      "Demand shifts from D₁ to D₂ and supply from S₁ to S₂; the new equilibrium is where D₂ crosses S₂, at E₂.",
      { diagram: IMG('economics-2004-q44.png') }),
    // 45
    q(D4546 + "When there is a change from T to N, it implies that",
      ["supply has increased", "quantity supplied has increased", "quantity demanded has increased", "price has fallen"], A,
      "T is on S₁ and N is on S₂, further right; moving from one curve to a new one to the right is an increase in supply.",
      { diagram: IMG('economics-2004-q45.png') }),
    // 46
    q(D4546 + "A movement from M to T implies that there has been",
      ["a decrease in supply", "an increase in demand", "a decrease in price", "an increase in price"], D,
      "M and T are on the same supply curve S₁, with T higher; a movement up along a supply curve is caused by a rise in the good's price.",
      { diagram: IMG('economics-2004-q46.png') }),
    // 47
    q("A necessary condition for specialization in an economy is the existence of",
      ["a regulated market", "a competitive market", "a medium of exchange", "adequate capital"], C,
      "A specialist must exchange his output for everything else he needs; money as a medium of exchange makes that exchange possible."),
    // 48
    q("A firm operating at full capacity will experience rising short-run total costs when",
      ["prices of its variable inputs rise", "prices of its variable inputs fall", "there is a change in management", "labour productivity increases"], A,
      "With output fixed at capacity, total cost rises only if the inputs it buys, such as raw materials and labour, become dearer."),
    // 49
    q("In a textile factory, the cost of cotton used is a typical example of",
      ["an average cost", "a variable cost", "a total cost", "a fixed cost"], B,
      "Cotton is a raw material: the more cloth produced, the more cotton used, so its cost varies with output."),
    // 50
    q("A black market can occur when",
      ["supply is in excess of demand", "consumption of the commodity is restricted", "prices are set by government above the equilibrium", "prices are set by government below the equilibrium"], D,
      "A maximum price below equilibrium creates a shortage, and some buyers will pay more illegally, giving rise to a black market."),
  ]);
})();
