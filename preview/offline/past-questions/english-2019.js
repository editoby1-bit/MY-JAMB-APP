/**
 * JAMB/UTME 2019 — USE OF ENGLISH
 * From the 2019 question paper; answers from the JAMB/UTME English Language
 * answer key 2001–2020, each checked against the paper. Where the key in
 * circulation is wrong (often a printing error) the question carries
 * keyVerdict + keyAnswer + answerNote (see english-2007.js for the scheme).
 *
 * Loaded after questions.js and before app.js.
 */
(function () {
  const Y = 2019;
  const SRC = 'JAMB UTME 2019';
  const READ = 'Read the passage carefully and answer the questions that follow.';

  const PT0 = "Life to me means the greatest of all game. The danger lies in treating it as a trivial game, a game to be taken lightly and a game in which the rules do not matter much. The rules matter a great deal. The game has to be played fairly or it is no game at all. Also, to win the game is not the chief end, but to win it honourably and splendidly. To this chief end, several things are necessary, including discipline, unselfishness, courage, optimism and chivalry.\n\nTo succeed as a leader, one should possess qualities that are not common in ordinary mortals. Personal intelligence and flexibility are vital for anyone to succeed as a leader. Leadership entails willingness to admit defeat when necessary and to perform super human feat when faced with unusual challenges. A good leader must be able to persevere in the face of the insurmountable odds. Determination is another important part of business success. In trouble, danger and disappointment, never give up hope as the worst can always be got over.\n\nYou often have to hide from your followers, not the truth of a dismal situation, but your feelings about such truth. You may know that the facts are dead against you, but you must not say it to your followers. If you are a real leader, a fellow that others follow, look up to, you have got to keep going no matter the odds.";
  const PT1 = "Money was fashioned to help curb the problems of trade by barter. The development of money to a great extent was occasioned by increased specialization of human beings, this necessitated ___(6)___. This is a movement away from a ___(7)___ society in which a closely knit family structure prevailed. In this setting, families were self-sufficient in goods and ___(8)___ needed. Thus, there was need to undertake ___(9)___. However, as specialization developed, there was the urgent need to devise a ___(10)___ of exchange. This led to the use of a number of materials used as ___(11)___. Later, metallic money which dates from ancient times joined these materials as a medium of exchange. Over time, given certain qualities metallic money has, it established its supremacy over the other and much antiquated materials in use as money.\n\nThe origin and development of ___(12)___ money as distinct from metallic money is not unconnected with the activities of goldsmiths. They were often trusted with jewels, given the nature of their jobs. In return for jewels deposited with them for safe keeping, they issued receipts indicating the quantity so ___(13)___ with them. Over time, depositors started using the ___(14)___ so issued in respect of their deposits as a medium of exchange. This antecedent of paper money perhaps explains why money in ___(15)___ is backed by gold.";

  const P1Q = [
      { question: "Why does the writer liken life to a game?", options: ["A life is a game that has to be played with some seriousness", "The game of life is a must do affair", "The game of life has rules that must be followed", "Life itself is not worth considering"], answer: 2, explanation: "The writer's point is that life, like a game, has rules: 'The rules matter a great deal. The game has to be played fairly or it is no game at all.' (The paper leaves out the (a) label on the first option.)" },
      { question: "According to the writer, for anyone to win in life's game, he/she has to", options: ["follow the rules of the game with laxity", "gather all the good things of life and be covetous", "be upright and honourable", "be honourable and static"], answer: 2, explanation: "To win is not enough: one must 'win it honourably and splendidly', playing 'fairly', i.e. being upright and honourable." },
      { question: "The word optimism, as used in the passage, means", options: ["hopefulness", "hopelessness", "determination", "loyalty"], answer: 0, explanation: "Optimism is hopefulness, a confident expectation that things will turn out well; the passage later says 'never give up hope'." },
      { question: "According to the writer, for a good leader to succeed in life's game, he/she has to be", options: ["rigid and cunning", "dynamic and truthful", "inflexible and loyal", "dynamic and intelligent"], answer: 3, explanation: "'Personal intelligence and flexibility are vital for anyone to succeed as a leader': flexible (dynamic) and intelligent." },
      { question: "An appropriate title for this passage is", options: ["Leadership Qualities", "The rules of life", "Life battles", "The game of life"], answer: 2, explanation: "The thread running through the whole passage is facing life's struggles: playing fairly, persevering against 'insurmountable odds', never giving up and keeping going 'no matter the odds'." },
  ];
  const CLOZE = [
      { question: "Gap 6: The development of money ... was occasioned by increased specialization of human beings, this necessitated _____. This is a movement away from a ... society", options: ["money", "capital", "exchange", "movement"], answer: 3, alsoAccept: [2], explanation: "The next sentence explains the word in the gap: 'This is a movement away from a primitive society', so the gap is movement. Exchange also makes good sense, since specialized people must exchange goods.", keyVerdict: 'multiple', keyAnswer: 'D', answerNote: "The key's movement (D) fits because the next sentence begins 'This is a movement away from...'. But exchange (C) is equally right: increased specialization is exactly what makes exchange necessary, and the passage is about money as a medium of exchange. Both are marked right." },
      { question: "Gap 7: This is a movement away from a _____ society in which a closely knit family structure prevailed.", options: ["kind", "secondary", "primitive", "standard"], answer: 2, explanation: "A society of self-sufficient families with no specialization is a primitive (early, simple) one." },
      { question: "Gap 8: In this setting, families were self-sufficient in goods and _____ needed.", options: ["trade", "cargoes", "money", "services"], answer: 3, explanation: "'Goods and services' is the fixed economic pair: things and work done for people." },
      { question: "Gap 9: Thus, there was need to undertake _____.", options: ["exchange", "canvassing", "production", "commotion"], answer: 0, explanation: "Once families stopped being self-sufficient, they had to exchange what they had for what they needed." },
      { question: "Gap 10: However, as specialization developed, there was the urgent need to devise a _____ of exchange.", options: ["means", "way", "lot", "land"], answer: 0, explanation: "'A means of exchange' (like 'a medium of exchange') is the standard expression for something used to pay." },
      { question: "Gap 11: This led to the use of a number of materials used as _____.", options: ["barter", "money", "naira", "trade"], answer: 1, explanation: "Those materials served as money; the passage goes on to say metallic money 'joined these materials as a medium of exchange'." },
      { question: "Gap 12: The origin and development of _____ money as distinct from metallic money is not unconnected with the activities of goldsmiths.", options: ["fabric", "paper", "oil", "earned"], answer: 1, explanation: "Money that is not metal is paper money; the passage ends with 'This antecedent of paper money'." },
      { question: "Gap 13: ...they issued receipts indicating the quantity so _____ with them.", options: ["deposited", "hired", "stored", "put"], answer: 0, explanation: "One deposits valuables with someone for safe keeping, and the sentence has already said 'jewels deposited with them'." },
      { question: "Gap 14: Over time, depositors started using the _____ so issued in respect of their deposits as a medium of exchange.", options: ["resit", "relief", "receipts", "cash"], answer: 2, explanation: "The goldsmiths 'issued receipts', and those receipts were used as money. 'Resit' is a misspelling trap." },
      { question: "Gap 15: This antecedent of paper money perhaps explains why money in _____ is backed by gold.", options: ["liquidation", "circulation", "mutation", "contribution"], answer: 1, explanation: "Money 'in circulation' is money being passed around and used in an economy." },
  ];

  const passages = [
    { passageId: 'eng-2019-p1', passageTitle: 'JAMB 2019 — Passage I', year: Y, instruction: READ, passage: PT0, questions: P1Q },
    { passageId: 'eng-2019-p2', passageTitle: 'JAMB 2019 — Passage II (cloze)', year: Y, instruction: 'The passage has gaps numbered 6 to 15. Choose the most appropriate option for each gap.', passage: PT1, questions: CLOZE },
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
    q(MEANS + "Ngozi is an epitome of beauty.", ["Ngozi is very ugly", "Ngozi loves to look good", "Ngozi is an embodiment of beauty", "Ngozi is admired by most people"], C, "An epitome is a perfect example of a quality, i.e. its embodiment."),
    q(MEANS + "Aduke did not know that the offer was a Greek gift.", ["It was an offer to lure him into a trap", "It was a package from Greece", "It was an attractive gift", "It was a bribe"], A, "A Greek gift (from the Trojan horse) is a gift given to trick or harm the receiver. (The paper prints 'him' for Aduke.)"),
    q(MEANS + "The ransom was paid on the nail.", ["It was paid without delay", "It was not paid in time", "It was not paid at all", "It was paid in bits"], A, "To pay 'on the nail' is to pay at once, without delay."),
    q(MEANS + "He is the black sheep of the family.", ["He is the most intelligent child", "He is the only dark person in the family", "He is the only son", "He is the problematic child"], D, "The black sheep is the member who brings trouble or disgrace to the family."),
    q(MEANS + "Yusuf is a ball of fire. This means that Yusuf", ["is full of energy", "loves to smoke", "loves to cook", "hates the sight of fire"], A, "A ball of fire is a very energetic, lively person."),
    q(OPP + "The national football coach said that RAW players were no good.", ["possessed", "unbacked", "tired", "seasoned"], D, "Raw players are new and inexperienced; seasoned players are experienced."),
    q(OPP + "Obi is INDUSTRIOUS and creative.", ["jobless", "wasteful", "indolent", "underdeveloped"], C, "Industrious means hard-working; indolent means lazy."),
    q(OPP + "Fatima was HARDWORKING.", ["hard hearted", "overzealous", "careless", "indolent"], D, "The opposite of hardworking is indolent (lazy)."),
    q(OPP + "Kola SELDOM drives his father's car.", ["sometimes", "frequently", "always", "often"], D, "Seldom means rarely; often means many times.", { alsoAccept: [B], keyVerdict: 'multiple', keyAnswer: 'D', answerNote: "Often (D) and frequently (B) mean the same thing, and both are the opposite of seldom (rarely), so both are marked right. Always (C) goes too far, and sometimes (A) is in between." }),
    q(OPP + "Secrets are truths CONCEALED.", ["aligned", "revealed", "informal", "unsolved"], B, "Concealed means hidden; revealed means made known."),
    q(NEAR + "The contractor became scared after reading the ANONYMOUS letter.", ["frightening", "awful", "nameless", "ominous"], C, "An anonymous letter is one whose writer's name is not given: nameless."),
    q(NEAR + "Aliyu was advised to quit smoking before it becomes an ADDICTION.", ["a name", "a trade", "a style", "a habit"], D, "An addiction is a habit one cannot stop; 'a habit' is the nearest option."),
    q(NEAR + "The passage is simple enough to DIGEST.", ["apprehend", "comprehend", "reprehend", "appraise"], B, "To digest information is to take it in and understand it: comprehend."),
    q(NEAR + "The spectator passed a WITTY remark.", ["clever", "complex", "simple", "encouraging"], A, "A witty remark is clever and amusing."),
    q(NEAR + "The clergy preaches against INDOLENCE.", ["pride", "selfishness", "laziness", "wickedness"], C, "Indolence means laziness."),
    q(GAP + "He sang the song which he _____ at school the previous day.", ["learn", "learns", "learnt", "has learnt"], C, "'The previous day' is a finished past time, so the past tense learnt is needed; 'has learnt' cannot go with a past time phrase."),
    q(GAP + "Kolo could have come for sallah if he _____.", ["wants to", "want to", "wanted to", "had wanted"], D, "Third conditional: 'could have come... if he had wanted (to)'."),
    q(GAP + "The man _____ at the party yesterday.", ["is drinking", "had drunk", "was drunk", "drunk"], C, "'Was drunk' (was intoxicated) fits the simple past 'yesterday'. 'Drunk' alone is the past participle, not the past tense (that would be drank)."),
    q(GAP + "Fatima realized that she _____ to post the letter when she reached home.", ["has forgotten", "had forgotten", "has forgot", "had forgot"], B, "The forgetting happened before she realized (past), so the past perfect had forgotten is needed; 'forgot' is not the British past participle."),
    q(GAP + "He must _____ to Ibrahim before the incident.", ["have spoken", "have spoke", "had spoken", "has spoken"], A, "Modal + have + past participle: 'must have spoken'."),
    q(GAP + "We will go home when the rain _____.", ["stopped", "have stopped", "stops", "stop"], C, "In a time clause about the future, English uses the present simple: 'when the rain stops'."),
    q(GAP + "When I got there, _____ already arrived.", ["was", "have", "had", "has"], C, "An action completed before another past action takes the past perfect: had already arrived. (The paper leaves out the subject, e.g. 'he had'.)"),
    q(GAP + "If Adama were here, the food _____ be ready by now.", ["will", "shall", "should", "would"], D, "Second conditional: 'If he were here, the food would be ready'."),
    q(GAP + "_____ we go to the zoo this afternoon?", ["shall", "were", "are", "would"], A, "'Shall we...?' is the standard way to make a suggestion with 'we'."),
    q(GAP + "The house _____ before the incident took place.", ["is being completed", "had been completed", "is completed", "will be completed"], B, "Something finished before a past event takes the past perfect (passive): had been completed."),
    q(SAMEV + "chURch", ["clutch", "choice", "girl", "push"], C, "The ur in church is /ɜː/, as the ir in girl."),
    q(SAMEV + "pARt", ["pant", "hat", "pad", "mass"], D, "The ar in part is the long /ɑː/. Pant, hat and pad have the short /æ/; mass is given by the key, as Mass (the church service) is sometimes said /mɑːs/.", { keyVerdict: 'none', keyAnswer: 'D', answerNote: "In standard British English none of the options has the /ɑː/ of part: pant, hat, pad and mass are all usually said with the short /æ/. Mass (the church service) does have a less common pronunciation /mɑːs/, which is probably what the setters meant, so the key's D is kept as the closest answer." }),
    q(CONS + "viSa", ["Saturday", "visit", "embassy", "step"], B, "The s in visa is /z/, as the s in visit. Saturday, embassy and step have /s/. (The paper's heading says 'vowel sound', but Q53-54 underline consonants.)"),
    q(CONS + "waSH", ["occasion", "equation", "explosion", "extension"], D, "The sh in wash is /ʃ/, as the -sion in extension. Occasion, equation and explosion have /ʒ/."),
    q("Choose the option that rhymes with the given word: bright", ["rill", "rite", "bought", "filthy"], B, "Bright ends in /aɪt/, which rhymes with rite."),
    q("Choose the option that rhymes with the given word: clay", ["plait", "claws", "plays", "day"], D, "Clay ends in /eɪ/, and day rhymes with it exactly."),
    q(STRESSOF + "development", ["deveLOPment", "deVElopment", "DEvelopment", "developMENT"], B, "de-VEL-op-ment: the stress stays on the second syllable, as in develop."),
    q(STRESSOF + "temporary", ["TEMporary", "tempoRAry", "temPOrary", "temporaRY"], A, "TEM-po-rar-y: stressed on the first syllable."),
    q(EMPH + "Adedeji OPENLY disagreed with his boss yesterday.", ["Did Adedeji secretly disagree with his boss yesterday?", "Did Badejo openly disagree with his boss yesterday?", "Did Adedeji openly disagree with his father yesterday?", "Did Adedeji openly disagree with his boss last week?"], A, "Stressing OPENLY corrects the manner: it answers a question that says 'secretly'."),
    q(EMPH + "Aisha loves her CHILDREN dearly.", ["Does Adama love her children dearly?", "Does Aisha hate her children dearly?", "Does Aisha love her husband dearly?", "Does Aisha love her children badly?"], C, "Stressing CHILDREN corrects who she loves: it answers a question that names someone else, her husband."),
  ];

  QUESTION_BANK.english = QUESTION_BANK.english.concat(passages, flat);
})();
