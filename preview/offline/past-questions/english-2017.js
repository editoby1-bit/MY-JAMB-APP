/**
 * JAMB/UTME 2017 — USE OF ENGLISH
 * From the 2017 question paper; answers from the JAMB/UTME English Language
 * answer key 2001–2020, each checked against the paper. Where the key in
 * circulation is wrong (often a printing error) the question carries
 * keyVerdict + keyAnswer + answerNote (see english-2007.js for the scheme).
 *
 * Loaded after questions.js and before app.js.
 */
(function () {
  const Y = 2017;
  const SRC = 'JAMB UTME 2017';
  const READ = 'Read the passage carefully and answer the questions that follow.';

  const PT0 = "The grave danger that alcohol abuses pose to human health and well-being has again been highlighted by the World Health Organisation (WHO) which recently disclosed that abuse of the substance causes nearly four per cent more deaths than the dreaded Acquired Immune Deficiency Syndrome (AIDS) and tuberculosis worldwide.\n\nThe global body put the number of deaths from alcohol abuse, every year, at 2.5 million. Rising incomes were identified to have triggered more drinking in Africa and Asia while binge drinking is a problem in many developed countries. The organisation decried the failure of most governments to institute strong alcohol control policies in spite of its heavy toll on society from road accidents, violence, disease, child neglect and absenteeism at work. The WHO alert on alcohol abuse is timely. The organisation's call for prioritization of alcohol control policies has come at a time when governments all over the world need information and support to reduce alcohol consumption.";
  const PT1 = "Mr. Ikimi, the headmaster, decided to erect a new domestic science block. He awarded the ___(6)___ to a well-known ___(7)___ who drew up a ___(8)___ which was sent to the Town Planning Authority for approval. The ___(9)___ which had been chosen was cleared and ___(10)___ engaged to start work on laying the foundation of which the most important process was pouring the ___(11)___. Very soon the building took ___(12)___ and the roof was in no time. The ___(13)___ done by a set of very competent carpenters, which intricately interwoven, and louver windows added extra beauty to the new block, whose exterior walls looked most striking after the second ___(14)___ had been put on. The interior ___(15)___ was left to the competent domestic science teacher.";

  const P1Q = [
      { question: "The author seems to suggest that Asians and Africans resort to more drinking when", options: ["they are bereaved", "there is improved living standard", "national incomes are at their lowest ebb", "the weather is conducive"], answer: 1, explanation: "The passage says 'rising incomes were identified to have triggered more drinking in Africa and Asia', so more drinking follows a better standard of living." },
      { question: "Which of the following is true according to the passage?", options: ["The outbreak of tuberculosis is caused by alcohol abuse", "Most people in the world are oblivious of the harmful effect of alcohol abuse", "The danger of alcohol abuse was highlighted in the developed countries", "The abuse of alcohol can only be controlled in Africa and Asia"], answer: 1, explanation: "The WHO alert comes 'at a time when governments all over the world need information' to reduce drinking, implying that the harm is not widely appreciated. The other options say things the passage never states." },
      { question: "Which of the following best describes the tone of the writer in the passage?", options: ["Conciliatory", "Alarming", "Persuasive", "Disillusioned"], answer: 1, explanation: "The writer opens with 'the grave danger' and piles up deaths and harms (2.5 million deaths a year, road accidents, violence): the tone is alarming. (The paper labels the last two options (c) and (c); Disillusioned is (d).)" },
      { question: "The expression 'binge drinking', as used in the passage, means", options: ["drinking for a short period", "drinking intermittently", "drinking profusely", "drinking against medical advice"], answer: 2, explanation: "To binge is to do something to excess, so binge drinking is drinking heavily (profusely) at one go." },
      { question: "From the passage, it can be deduced that developed countries' attitude towards alcohol control is", options: ["compromising", "encouraging", "proactive", "lethargic"], answer: 3, explanation: "Binge drinking is a problem in many developed countries, and the WHO decried 'the failure of most governments to institute strong alcohol control policies': their attitude is sluggish, i.e. lethargic." },
  ];
  const CLOZE = [
      { question: "Gap 6: He awarded the _____ to a well-known ___(7)___ ...", options: ["contract", "project", "assignment", "business"], answer: 0, explanation: "A building job is given out as a contract: one 'awards a contract'." },
      { question: "Gap 7: He awarded the contract to a well-known _____ who drew up a ___(8)___ ...", options: ["architect", "designer", "engineer", "planner"], answer: 0, explanation: "The professional who designs a building and draws up its plan is an architect." },
      { question: "Gap 8: ... a well-known architect who drew up a _____ which was sent to the Town Planning Authority for approval.", options: ["plan", "picture", "chart", "programme"], answer: 0, explanation: "An architect draws up a building plan, and it is the plan that goes to the Town Planning Authority for approval." },
      { question: "Gap 9: The _____ which had been chosen was cleared ...", options: ["spot", "locality", "site", "environment"], answer: 2, explanation: "The piece of land on which a building is put up is the building site." },
      { question: "Gap 10: ... was cleared and _____ engaged to start work on laying the foundation ...", options: ["a worker", "a mason", "an artist", "a plumber"], answer: 1, explanation: "A mason works with blocks, bricks and concrete, so he is the one who lays a foundation." },
      { question: "Gap 11: ... the most important process was pouring the _____.", options: ["marble", "concrete", "laterite", "sand"], answer: 1, explanation: "A foundation is made by pouring concrete." },
      { question: "Gap 12: Very soon the building took _____ ...", options: ["position", "shape", "place", "direction"], answer: 1, explanation: "'To take shape' is a fixed expression meaning to develop a definite form." },
      { question: "Gap 13: The _____ done by a set of very competent carpenters ...", options: ["woodwork", "wood fixing", "wood cutting", "timber work"], answer: 0, explanation: "The wooden parts of a building made by carpenters are called the woodwork. (The paper prints 'don' for 'done'.)" },
      { question: "Gap 14: ... exterior walls looked most striking after the second _____ had been put on.", options: ["spraying", "washing", "coating", "covering"], answer: 2, explanation: "Paint is put on in coats: 'the second coating (coat) had been put on'." },
      { question: "Gap 15: The interior _____ was left to the competent domestic science teacher.", options: ["design", "dressing", "planning", "decoration"], answer: 0, explanation: "'Interior design' is a fixed phrase for planning how the inside of a building looks; 'interior decoration' is equally good here.", alsoAccept: [3], keyVerdict: 'multiple', keyAnswer: 'A', answerNote: "The key gives A (design). 'Interior design' and 'interior decoration' are both standard phrases for arranging and furnishing the inside of a building, and decoration suits a teacher (not a professional designer) just as well, so D is also marked right." },
  ];

  const passages = [
    { passageId: 'eng-2017-p1', passageTitle: 'JAMB 2017 — Passage I', year: Y, instruction: READ, passage: PT0, questions: P1Q },
    { passageId: 'eng-2017-p2', passageTitle: 'JAMB 2017 — Passage II (cloze)', year: Y, instruction: 'The passage has gaps numbered 6 to 15. Choose the most appropriate option for each gap.', passage: PT1, questions: CLOZE },
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
    q(MEANS + "You had better do as the doctor says and stay in bed.", ["It is better to stay in bed when listening to the doctor", "It is wiser listen to the doctor than to stay in bed", "It is wiser to wait in bed for the doctor", "The wisest thing to do is to stay in bed"], D, "'You had better' gives advice: the wise course is to obey the doctor and stay in bed."),
    q(MEANS + "Dangana put the screw on his sister.", ["He pressurized and encouraged her", "He hindered and discouraged his sister", "He frightened and threatened her", "He flogged and injured his sister"], A, "To put the screw(s) on someone is to put pressure on them to do something."),
    q(MEANS + "Mula was told that if he behaved badly he would go to bed without any supper.", ["Mula had not yet had his supper", "Mula was behaving badly because he had no supper", "Mula had had no super because he had behaved badly", "Mula had had supper and had gone to bed"], A, "The threat of losing his supper only makes sense if he had not yet eaten it."),
    q(MEANS + "Kunle was allowed to stew in his own juice.", ["He enjoyed the fruits of his labour", "He suffered the consequence of his action", "He associated with the rich in the society", "He suffered untold hardship"], B, "To stew in one's own juice is to be left to suffer the results of one's own actions."),
    q(MEANS + "Wouldn't it have been better to accept the referee's decision, Tunde?", ["Tunde did not agree with the referee", "The referee's decision was fair", "Tunde had to accept the referee's decision", "The referee's decision was better than Tunde's"], A, "The question implies that Tunde did not accept the referee's decision, i.e. he disagreed with it."),
    q(OPP + "Abiola was a very FEEBLE man.", ["selfish", "weak", "strong", "tall"], C, "Feeble means weak; its opposite is strong."),
    q(OPP + "The smell is OBNOXIOUS.", ["pleasant", "loathsome", "unpleasant", "obvious"], A, "Obnoxious means extremely unpleasant; its opposite is pleasant."),
    q(OPP + "Aliyu was a natural SPENDTHRIFT when he was single.", ["philanthropist", "miser", "gambler", "thrift collector"], B, "A spendthrift wastes money; a miser hoards it."),
    q(OPP + "The decision will have no ADVERSE effect on us.", ["inimical", "detrimental", "beneficial", "lasting"], C, "Adverse means harmful; its opposite is beneficial."),
    q(OPP + "I DESPISE the way she lived her life.", ["abhor", "hate", "admire", "remember"], C, "To despise is to look down on; its opposite is to admire."),
    q(NEAR + "Tolu broke her leg because of her RESTIVE nature.", ["lively", "relaxed", "patient", "unruly"], D, "Restive means restless and hard to control, i.e. unruly."),
    q(NEAR + "The secretary's speech was interesting, though IMPROMPTU.", ["unprepared", "improper", "controversial", "important"], A, "An impromptu speech is given without preparation."),
    q(NEAR + "The manager of the team is often MALIGNED by the supporters.", ["slandered", "cherished", "praised", "hounded"], A, "To malign someone is to speak ill of them unfairly, i.e. to slander them."),
    q(NEAR + "He has a COGENT reason for quitting the relationship.", ["a convincing", "an important", "a tentative", "an unacceptable"], A, "A cogent reason is clear, logical and convincing."),
    q(NEAR + "Mrs. Adio wasn't yet ATTUNED TO her baby's needs.", ["familiar with", "ready with", "free from", "planning for"], A, "To be attuned to something is to be aware of and used to it, i.e. familiar with it."),
    q(GAP + "Mrs. Audu wept when she discovered that she had lost her _____ rings.", ["very expensive wedding gold", "gold wedding very expensive", "gold very expensive wedding", "very expensive gold wedding"], D, "Adjective order: opinion (very expensive), then material (gold), then the purpose noun (wedding) right next to rings."),
    q(GAP + "_____ apologize or face the consequences.", ["You are bound to", "You'd better", "You are better off to", "You better"], B, "'You'd (had) better' + bare infinitive is the standard way to give a firm warning.' instead of '(b)'.)"),
    q(GAP + "Your driving was very dangerous; _____", ["you might even have been killed", "you might have been killed", "you might have been even killed", "you even might have been killed"], B, "'Might have been killed' is the correct form for a possibility in the past that did not happen.", { alsoAccept: [A], keyVerdict: 'multiple', keyAnswer: 'B', answerNote: "The key gives B, which is correct. A ('you might even have been killed') is also correct, because 'even' properly goes after the first helping verb (might), so both are marked right. C and D put 'even' in the wrong place." }),
    q(GAP + "Although he tried, the journalist couldn't get _____ information.", ["several", "an", "many", "much"], D, "Information is uncountable, so it takes much, not many, several or an."),
    q(GAP + "This is my _____ car.", ["uncles", "uncle", "uncle's", "uncles'"], C, "One uncle owns the car, so the singular possessive uncle's is needed. Uncles' would mean several uncles share it, which does not fit 'my'."),
    q(GAP + "_____ any rate, he tackled the problem courageously.", ["In", "At", "By", "For"], B, "'At any rate' is the fixed expression meaning 'anyway'."),
    q(GAP + "Though Amina was very well paid, _____.", ["since she was always short of money", "but she was always short of money", "and when she always short of money", "she was always short of money"], D, "'Though' already joins the two clauses, so no second conjunction (but, since, and) is needed."),
    q(GAP + "I could understand how she slept _____ the uproar.", ["through", "on", "off", "among"], A, "To sleep through a noise is to stay asleep while it goes on."),
    q(GAP + "My teacher asked me _____.", ["if the food is ready", "if the food was ready", "is the food ready", "whether the food is ready"], B, "In reported speech after a past reporting verb (asked), the tense moves back: is becomes was, and the question becomes a statement after if."),
    q(GAP + "No one was killed in the disaster though _____ were injuries.", ["their", "they", "there", "these"], C, "'There were' introduces something that exists: there were injuries."),
    q(SAMEV + "acCOmpany", ["abolish", "fail", "sluggish", "movement"], C, "The o in accompany is /ʌ/ (a-CUM-pa-ny), the same vowel as the u in sluggish."),
    q(SAMEV + "pEAr", ["year", "near", "dear", "there"], D, "Pear has the diphthong /eə/, as in there; year, near and dear have /ɪə/."),
    q(CONS + "towN", ["ring", "non", "fling", "erosion"], D, "The n in town is /n/, and erosion (/ɪˈrəʊʒn/) ends in the same /n/; non also has /n/. In ring and fling the ng stands for /ŋ/.", { alsoAccept: [B], keyVerdict: 'multiple', keyAnswer: 'D', answerNote: "The key gives D (erosion), which is right: its final n is /n/. But non (B) plainly has the same /n/ sound too, so B is also marked right. Only ring and fling lack /n/: their ng is /ŋ/." }),
    q(CONS + "eNGlish", ["thin", "think", "edge", "end"], B, "The underlined ng in English is pronounced /ŋɡ/, beginning with /ŋ/, the same sound as the n in think (/θɪŋk/). Thin and end have /n/, and edge has no nasal at all."),
    q("Choose the option that rhymes with the given word: Machine", ["campaign", "attain", "sheen", "fine"], C, "Machine ends in /iːn/ (ma-SHEEN), which rhymes with sheen."),
    q("Choose the option that rhymes with the given word: Key", ["grey", "quay", "sit", "prey"], B, "Quay (a landing place for ships) is pronounced exactly like key, /kiː/."),
    q(STRESSOF + "Prohibition", ["proHIbition", "prohiBItion", "PROhibition", "prohibiTION"], B, "Words ending in -tion are stressed on the syllable just before it: pro-hi-BI-tion."),
    q(STRESSOF + "Aggregation", ["AGgregation", "aggREgation", "aggreGAtion", "aggregaTION"], C, "Words ending in -tion are stressed on the syllable just before it: ag-gre-GA-tion."),
    q(EMPH + "Amina attends a COMMERCIAL college.", ["Does Kunle attend a commercial college?", "Has Amina graduated from a commercial college?", "Does Amina attend a technical college?", "Does Amina attend a commercial school?"], C, "Stressing COMMERCIAL corrects the type of college: it answers a question that names another type, a technical college."),
    q(EMPH + "HIS wife works in a bank.", ["Where does his wife work?", "Does his wife play in a bank?", "Does his concubine work in a bank?", "Does my wife work in a bank?"], D, "Stressing HIS corrects whose wife it is: it answers 'Does my wife work in a bank?'"),
  ];

  QUESTION_BANK.english = QUESTION_BANK.english.concat(passages, flat);
})();
