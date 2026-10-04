/**
 * JAMB/UTME 2020 — USE OF ENGLISH
 * From the 2020 question paper; answers from the JAMB/UTME English Language
 * answer key 2001–2020, each checked against the paper. Where the key in
 * circulation is wrong (often a printing error) the question carries
 * keyVerdict + keyAnswer + answerNote (see english-2007.js for the scheme).
 *
 * Loaded after questions.js and before app.js.
 */
(function () {
  const Y = 2020;
  const SRC = 'JAMB UTME 2020';
  const READ = 'Read the passage carefully and answer the questions that follow.';

  const PT0 = "Life to me means the greatest of all game. The danger lies in treating it as a trivial game, a game to be taken lightly and a game in which the rules do not matter much. The rules matter a great deal. The game has to be played fairly or it is no game at all. Also, to win the game is not the chief end, but to win it honourably and splendidly. To this chief end, several things are necessary, including discipline, unselfishness, courage, optimism and chivalry.\n\nTo succeed as a leader, one should possess qualities that are not common in ordinary mortals. Personal intelligence and flexibility are vital for anyone to succeed as a leader. Leadership entails willingness to admit defeat when necessary and to perform super human feat when faced with unusual challenges. A good leader must be able to persevere in the face of the insurmountable odds. Determination is another important part of business success. In trouble, danger and disappointment, never give up hope as the worst can always be got over.\n\nYou often have to hide from your followers, not the truth of a dismal situation, but your feelings about such truth. You may know that the facts are dead against you, but you must not say it to your followers. If you are a real leader, a fellow that others follow, look up to, you have got to keep going no matter the odds.";
  const PT1 = "In African countries, industrialization which means industrial ___(6)___ is springing up in the developing countries which are struggling to ___(7)___ their fortune and ___(8)___. It involves such things as the provision of ___(9)___ station producing electricity for ___(10)___ and the construction of irrigation works. The development can improve production in any ___(11)___ by means of large ___(12)___ investments. The only source of ___(13)___ for such development is the government itself. An individual investment ___(14)___ are small and foreign loan is not easy to come by. ___(15)___ on foreign loans are quite high.";

  const P1Q = [
      { question: "Why does the writer liken life to a game?", options: ["A life is a game that has to be played with some seriousness", "The game of life is a must do affair", "The game of life has rules that must be followed", "Life itself is not worth considering"], answer: 2, explanation: "The writer's point is that life, like a game, has rules: 'The rules matter a great deal. The game has to be played fairly or it is no game at all.'" },
      { question: "According to the writer, for anyone to win in life's game, he/she has to", options: ["follow the rules of the game with laxity", "gather all the good things of life and be covetous", "be upright and honourable", "be honourable and static"], answer: 2, explanation: "Winning is not enough: one must 'win it honourably and splendidly', playing 'fairly', i.e. being upright and honourable." },
      { question: "The word optimism, as used in the passage, means", options: ["hopefulness", "hopelessness", "determination", "loyalty"], answer: 0, explanation: "Optimism is hopefulness, a confident expectation that things will turn out well; the passage later says 'never give up hope'." },
      { question: "According to the writer, for a good leader to succeed in life's game, he/she has to be", options: ["rigid and cunning", "dynamic and truthful", "inflexible and loyal", "dynamic and intelligent"], answer: 3, explanation: "'Personal intelligence and flexibility are vital for anyone to succeed as a leader': flexible (dynamic) and intelligent." },
      { question: "An appropriate title for this passage is", options: ["Leadership Qualities", "The rules of life", "Life battles", "The game of life"], answer: 2, explanation: "The thread running through the passage is facing life's struggles: playing fairly, persevering against 'insurmountable odds', never giving up and keeping going 'no matter the odds'." },
  ];
  const CLOZE = [
      { question: "Gap 6: In African countries, industrialization which means industrial _____ is springing up in the developing countries...", options: ["development", "fund", "forces", "investment"], answer: 0, explanation: "Industrialization is the growth of industry, i.e. industrial development; the passage goes on to speak of 'The development'." },
      { question: "Gap 7: ...the developing countries which are struggling to _____ their fortune and ...", options: ["supply", "improve", "balance", "decrease"], answer: 1, explanation: "Poor, developing countries struggle to improve (better) their fortune." },
      { question: "Gap 8: ...which are struggling to improve their fortune and _____.", options: ["productivity", "production", "condition", "service"], answer: 2, explanation: "'Their fortune and condition' pairs two words for a country's state of life, both things one 'improves'." },
      { question: "Gap 9: It involves such things as the provision of _____ station producing electricity for ...", options: ["power", "work", "energy", "force"], answer: 0, explanation: "A plant that produces electricity is a power station, a fixed expression." },
      { question: "Gap 10: ...the provision of power station producing electricity for _____ and the construction of irrigation works.", options: ["companies", "warehouse", "works", "factories"], answer: 0, alsoAccept: [3], explanation: "The electricity is for the businesses that industrialization brings: companies, and equally factories.", keyVerdict: 'multiple', keyAnswer: 'A', answerNote: "The key's companies (A) fits, but factories (D) is equally right, and is the most natural word in a passage about industrialization: power stations produce electricity for factories. Both are marked right. Warehouse is singular and works would repeat 'irrigation works'." },
      { question: "Gap 11: The development can improve production in any _____ by means of large ... investments.", options: ["field", "area", "way", "work"], answer: 1, alsoAccept: [0], explanation: "'In any area' means in any sector of the economy; 'in any field' means the same.", keyVerdict: 'multiple', keyAnswer: 'B', answerNote: "The key gives area (B), and field (A) is equally right: 'improve production in any field' and 'in any area' both mean in any sector of activity. Both are marked right. Way and work do not fit after 'production in any'." },
      { question: "Gap 12: ...by means of large _____ investments.", options: ["huge", "capital", "premium", "fund"], answer: 1, explanation: "Capital investment is money put into factories, plant and equipment. Huge would only repeat 'large'." },
      { question: "Gap 13: The only source of _____ for such development is the government itself.", options: ["finance", "interest", "demand", "power"], answer: 0, explanation: "Development needs money; the source of money for it is its source of finance." },
      { question: "Gap 14: An individual investment _____ are small and foreign loan is not easy to come by.", options: ["interest", "cash", "capital", "capabilities"], answer: 3, explanation: "The plural verb 'are' needs a plural noun: individuals' investment capabilities (what they are able to invest) are small." },
      { question: "Gap 15: _____ on foreign loans are quite high.", options: ["Interest charges", "Interest", "Cash", "Cash balances"], answer: 0, explanation: "What is charged on a loan is interest, and the plural verb 'are' needs the plural 'interest charges'." },
  ];

  const passages = [
    { passageId: 'eng-2020-p1', passageTitle: 'JAMB 2020 — Passage I', year: Y, instruction: READ, passage: PT0, questions: P1Q },
    { passageId: 'eng-2020-p2', passageTitle: 'JAMB 2020 — Passage II (cloze)', year: Y, instruction: 'The passage has gaps numbered 6 to 15. Choose the most appropriate option for each gap.', passage: PT1, questions: CLOZE },
  ];

  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const GAP = 'Choose the option that best completes the gap(s): ';
  const VOWEL = 'Choose the option that has a DIFFERENT vowel sound from the others.';
  const SAMEV = 'Choose the option that has the same vowel sound as the letter(s) in capitals: ';
  const CONS = 'Choose the option that has the same consonant sound as the letter(s) in capitals: ';
  const DIFFC = 'Choose the option that has a DIFFERENT consonant sound from the others.';
  const DIFF = 'Choose the option that has a DIFFERENT stress pattern from the others.';
  const SAMES = 'Choose the option that has the same stress pattern as the given word (stressed syllable in capitals): ';
  const STRESSOF = 'Choose the appropriate stress pattern for the word (the stressed syllable is in capitals): ';
  const FIRST = 'Choose the option that has the stress on the FIRST syllable.';
  const NEAR = 'Choose the option NEAREST in meaning to the word(s) in capitals: ';
  const MEANS = 'Select the option that best explains the information conveyed in the sentence: ';
  const EMPH = 'The word in capitals has emphatic stress. Choose the option that best fits the expression: ';
  const OPP = 'Choose the option OPPOSITE in meaning to the word(s) in capitals: ';

  const flat = [
    q(MEANS + "Ada is an epitome of beauty.", ["Ada is very ugly", "Ada loves to look good", "Ada is an embodiment of beauty", "Ada is admired by most people"], C, "An epitome is a perfect example of a quality, i.e. its embodiment."),
    q(MEANS + "Tolu lost her nerves when Ada appeared.", ["Tolu became sad on seeing Ada", "Tolu lost control of herself on seeing Ada", "Tolu ran away on seeing Ada", "Tolu became worried on seeing Ada"], D, "To lose one's nerve is to become anxious and lose one's courage, so Tolu became worried (nervous) when Ada appeared."),
    q(MEANS + "The retired army officer did a yeoman's service to the nation.", ["His activity brought disrepute to the nation", "His service to the nation was not exemplary", "He was showered with the responsibility of the yeoman", "He was very loyal to the nation"], D, "Yeoman's service is excellent, loyal and valuable service.", { keyVerdict: 'corrected', keyAnswer: 'B', answerNote: "'Yeoman's service' is praise: long, faithful, valuable service. B says the opposite (his service was not exemplary). D, that he was very loyal to the nation, is the only option that keeps the positive meaning, so D is right." }),
    q(MEANS + "He suddenly found himself in the thick of the situation.", ["He did not agree with the situation", "He used his experience to settle the situation", "He saved himself out of the situation", "He found himself deeply involved in the situation"], D, "To be in the thick of something is to be in the busiest, most involved part of it."),
    q(MEANS + "Mula was told that if he behaved badly he would go to bed without any supper.", ["Mula had not yet had his supper", "Mula was behaving badly because he had no supper", "Mula had had no supper because he had behaved badly", "Mula had had supper and had gone to bed"], A, "The threat to send him to bed without supper only makes sense if supper was still to come, so he had not yet had it. (The paper misprints 'supper' as 'super' in C.)"),
    q(OPP + "Mary was a natural SPENDTHRIFT when she was single.", ["philanthropist", "miser", "gambler", "thrift collector"], B, "A spendthrift spends money wastefully; a miser hoards it and hates spending. (The paper prints 'he' for Mary.)"),
    q(OPP + "The student CAUTIOUSLY raised his arm.", ["finally", "slowly", "quickly", "rashly"], D, "Cautiously means carefully; rashly means without care or thought."),
    q(OPP + "Josephine was HARDWORKING.", ["hard hearted", "overzealous", "careless", "indolent"], D, "The opposite of hardworking is indolent (lazy)."),
    q(OPP + "Gloria walks in a GAWKY way.", ["suitable", "clumsy", "lumbering", "graceful"], D, "Gawky means awkward and clumsy; graceful is the opposite."),
    q(OPP + "Secrets are truths CONCEALED.", ["aligned", "revealed", "informal", "unsolved"], B, "Concealed means hidden; revealed means made known."),
    q(NEAR + "The coach of the team is often MALIGNED by the supporters.", ["slandered", "cherished", "praised", "hounded"], A, "To malign someone is to speak ill of them unfairly, i.e. to slander them."),
    q(NEAR + "She has a COGENT reason for quitting the relationship.", ["a convincing", "an important", "a tentative", "an unacceptable"], A, "A cogent reason is clear, logical and convincing."),
    q(NEAR + "The lazy man cast a LUSTFUL glance at his neighbour's wife.", ["covetous", "envious", "hateful", "quick"], A, "A lustful glance shows desire; covetous means wanting what belongs to someone else."),
    q(NEAR + "His search for the treasure was FRANTIC.", ["rewarding", "chaotic", "hectic", "sudden"], B, "A frantic search is wild, hurried and disorderly, i.e. chaotic; hectic (full of hurried activity) is equally close.", { alsoAccept: [C], keyVerdict: 'multiple', keyAnswer: 'B', answerNote: "The key's chaotic (B) is right: a frantic search is done in a wild, disorderly hurry. But hectic (C) is just as close, since dictionaries define hectic as 'full of frantic activity'. Both are marked right." }),
    q(NEAR + "The nursing mother wasn't yet ATTUNED to her baby's needs.", ["familiar with", "ready with", "free from", "planning for"], A, "To be attuned to something is to be aware of it and used to it, i.e. familiar with it."),
    q(GAP + "She must _____ to Ibrahim before the incident.", ["have spoken", "have spoke", "had spoken", "has spoken"], A, "Modal + have + past participle: 'must have spoken'."),
    q(GAP + "They will go home when the rain _____.", ["stopped", "have stopped", "stops", "stop"], C, "In a time clause about the future, English uses the present simple: 'when the rain stops'."),
    q(GAP + "Mr. Njoku _____ at the party yesterday.", ["is drinking", "had drunk", "was drunk", "drunk"], C, "'Was drunk' (was intoxicated) fits the simple past 'yesterday'. 'Drunk' alone is the past participle, not the past tense (that would be drank)."),
    q(GAP + "Fatima realized that she _____ to post the letter when she reached home.", ["has forgotten", "had forgotten", "has forgot", "had forgot"], B, "The forgetting happened before she realized (past), so the past perfect had forgotten is needed; 'forgot' is not the British past participle."),
    q(GAP + "Joe could have come for Easter if he _____.", ["wants to", "want to", "wanted to", "had wanted"], D, "Third conditional: 'could have come... if he had wanted (to)'."),
    q(GAP + "The hall _____ before the incident took place.", ["is being completed", "had been completed", "is completed", "will be completed"], B, "Something finished before a past event takes the past perfect (passive): had been completed."),
    q(GAP + "She sang the song which he _____ at school the previous day.", ["learn", "learns", "learnt", "has learnt"], C, "'The previous day' is a finished past time, so the past tense learnt is needed; 'has learnt' cannot go with a past time phrase."),
    q(GAP + "If Jude were here, the food _____ be ready by now.", ["will", "shall", "should", "would"], D, "Second conditional: 'If he were here, the food would be ready'."),
    q(GAP + "_____ we go to the zoo this afternoon?", ["shall", "were", "are", "would"], A, "'Shall we...?' is the standard way to make a suggestion with 'we'."),
    q(GAP + "This is my _____ car.", ["uncles", "uncle", "uncle's", "uncles'"], C, "Possession by one person takes apostrophe + s: my uncle's car."),
    q(SAMEV + "chURch", ["clutch", "choice", "girl", "push"], C, "The ur in church is /ɜː/, as the ir in girl."),
    q(SAMEV + "repriEve", ["rich", "police", "queer", "probity"], B, "The ie in reprieve is the long /iː/, as the i in police."),
    q(SAMEV + "dOOr", ["food", "cough", "sure", "board"], D, "The oor in door is /ɔː/, as the oar in board."),
    q(SAMEV + "pEAr", ["year", "near", "dear", "there"], D, "The ear in pear is /eə/, as the ere in there."),
    q("Choose the option that rhymes with the given word: Gold", ["goal", "gaol", "goad", "goat"], C, "Gold ends in /əʊld/. No option rhymes exactly; goad (/gəʊd/) is the key's answer, sharing the vowel and the final /d/.", { keyVerdict: 'none', keyAnswer: 'C', answerNote: "None of the options truly rhymes with gold (/gəʊld/): goal and gaol (both /-əʊl/) lack the final d, goad (/gəʊd/) lacks the l, and goat ends in /t/. The key's goad is kept as the closest, since it shares the vowel and the final /d/ sound." }),
    q("Choose the option that rhymes with the given word: clay", ["plait", "claws", "plays", "day"], D, "Clay ends in /eɪ/, and day rhymes with it exactly.", { keyVerdict: 'corrected', keyAnswer: 'B', answerNote: "Claws is pronounced /klɔːz/ and does not rhyme with clay (/kleɪ/), so the key's B must be a printing error. Day (/deɪ/) is a perfect rhyme. Plays is close but ends in an extra /z/, and plait is said /plæt/." }),
    q(STRESSOF + "obligation", ["obliGAtion", "OBligation", "obligaTION", "obLIgation"], A, "ob-li-GA-tion: like most -ation words, the stress falls on the syllable just before -tion."),
    q(STRESSOF + "disagreement", ["disagreement", "disaGREEment", "DISagreement", "disagreeMENT"], B, "dis-a-GREE-ment: the stress stays on 'gree', as in agree. (Option A is printed with no syllable in capitals.)"),
    q(EMPH + "HIS wife works in a bank.", ["Where does his wife work?", "Does his wife play in a bank?", "Does his concubine work in a bank?", "Does my wife work in a bank?"], D, "Stressing HIS corrects whose wife it is: it answers a question that says 'my wife'."),
    q(EMPH + "Tolu saw Tade's father YESTERDAY.", ["Who did Tade's father see yesterday?", "Did Tolu see Tade's mother yesterday?", "Was Tade's father seen today?", "Who saw Tade's father yesterday?"], C, "Stressing YESTERDAY corrects the time: it answers a question that says 'today'."),
  ];

  QUESTION_BANK.english = QUESTION_BANK.english.concat(passages, flat);
})();
