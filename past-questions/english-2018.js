/**
 * JAMB/UTME 2018 — USE OF ENGLISH
 * From the 2018 question paper; answers from the JAMB/UTME English Language
 * answer key 2001–2020, each checked against the paper. Where the key in
 * circulation is wrong (often a printing error) the question carries
 * keyVerdict + keyAnswer + answerNote (see english-2007.js for the scheme).
 * Paper Q51-60 (set novel, Independence) are left out: no passage in the paper.
 * Loaded after questions.js and before app.js.
 */
(function () {
  const Y = 2018;
  const SRC = 'JAMB UTME 2018';
  const READ = 'Read the passage carefully and answer the questions that follow.';

  const PT0 = "One of the main problems when you are rearing baby animals is to keep them warm enough at nights, and this, strangely enough, applies even in the tropics where the temperature drops considerably after dark. In the wild state of course, the baby clings to the dense fur of the mother and obtains warmth and shelter in that way. Hot water bottles, as a substitute, I have found of very little use. They grow cold very easily, and you have to get up several times during the night to refill them, as well as a whole collection of adults. So in most cases, the simplest way is to take the babies into bed with you. You soon learn to sleep in one position half-waking up in the night, should you wish to move so that you avoid crushing them as you turn over.\n\nI have at one time or another shared my bed with a great variety of creatures, and sometimes several different species at once. On one occasion my narrow camp-bed contained three mongooses, two baby monkeys, a squirrel and a young chimpanzee. There was just enough room left for me. You might think that after taking all this trouble a little gratitude will come your way, but in many cases you get the opposite. One of the most impressive scars was inflicted by a young mongoose because I was five minutes late with his bottle. When people asked me about it now, I am forced to pretend it was given to me by a charging jaguar. Nobody would believe me if I told them it was really a baby mongoose under the bed-clothes.";
  const PT1 = "In African countries, industrialization which means industrial ___(6)___ is springing up in the developing countries which are struggling to ___(7)___ their fortune and ___(8)___. It involves such things as the provision of ___(9)___ station producing electricity for ___(10)___ and the construction of irrigation works. The development can improve production in any ___(11)___ by means of large ___(12)___ investments. The only source of ___(13)___ for such development is the government itself. An individual investment ___(14)___ are small and foreign loan is not easy to come by. ___(15)___ on foreign loans are quite high.";

  const P1Q = [
      { question: "The writer had many animals in her bed because she wanted to _____", options: ["lure them to sleep", "feed them at night", "keep them continuously warm at night", "sleep in one position with them"], answer: 2, explanation: "The main problem in rearing baby animals is 'to keep them warm enough at nights', and hot water bottles grow cold, so the writer takes them into bed. (The paper prints 'to' again before options C and D.)" },
      { question: "Taking the baby animals into bed is a substitute for", options: ["hot water bottles", "considerable temperature", "maternal warmth and shelter", "avoiding to crush them at night"], answer: 2, explanation: "In the wild the baby 'clings to the dense fur of the mother and obtains warmth and shelter'; the writer's bed takes the place of that mother's warmth." },
      { question: "One of these is true about the passage.", options: ["the baby animals grow cold very easily", "the writer only catered for a baby animals", "the writer only shared her bed with baby animals", "the animals take water to keep them warm"], answer: 2, explanation: "The creatures that shared the writer's bed were all babies she was rearing: mongooses, baby monkeys, a squirrel and a young chimpanzee. In the passage, 'They grow cold very easily' is said of the hot water bottles, not the animals." },
      { question: "Why did the author lie about the charging jaguar?", options: ["To protect the erring animal", "To avoid embarrassment", "That a baby animal could be harmful under one's care is far-fetched", "Only charging jaguar would have done such thing"], answer: 2, explanation: "'Nobody would believe me if I told them it was really a baby mongoose': people would find it too far-fetched that a baby animal in one's care could cause such a scar." },
      { question: "By profession, the writer is most likely a", options: ["Rancher", "Zoologist", "Veterinarian", "Naturalist"], answer: 1, alsoAccept: [3], explanation: "Someone who rears baby wild animals such as mongooses, monkeys and a chimpanzee, even on a camp-bed in the tropics, works with wild animals: a zoologist or naturalist.", keyVerdict: 'corrected', keyAnswer: 'A', answerNote: "A rancher runs a ranch, raising cattle, sheep or horses for sale; nothing in the passage is about farm livestock. The writer rears young wild animals (mongooses, monkeys, a squirrel, a chimpanzee) on what sounds like an expedition, which is the work of a zoologist (B) or naturalist (D). Both are marked right." },
  ];
  const CLOZE = [
      { question: "Gap 6: …industrialization which means industrial _____ is springing up in the developing countries…", options: ["development", "fund", "forces", "investment"], answer: 0, explanation: "Industrialization is industrial development; the passage goes on to speak of 'the development' and 'such development'." },
      { question: "Gap 7: …countries which are struggling to _____ their fortune…", options: ["supply", "improve", "balance", "decrease"], answer: 1, explanation: "Developing countries struggle to improve their fortune; no one struggles to decrease it." },
      { question: "Gap 8: …struggling to improve their fortune and _____.", options: ["productivity", "production", "condition", "service"], answer: 2, explanation: "'Improve their fortune and condition' pairs two words for a country's state of life." },
      { question: "Gap 9: It involves such things as the provision of _____ station producing electricity…", options: ["power", "work", "energy", "force"], answer: 0, explanation: "A station producing electricity is a power station, a fixed expression." },
      { question: "Gap 10: …station producing electricity for _____ and the construction of irrigation works.", options: ["companies", "warehouse", "works", "factories"], answer: 0, alsoAccept: [3], explanation: "Electricity is supplied to companies (and factories) so that industry can run.", keyVerdict: 'multiple', keyAnswer: 'A', answerNote: "The key gives companies (A), which fits. Factories (D) fits just as well, since industrialization needs electricity for factories, so both are marked right. Warehouse is singular without 'a', and 'works' would clash with 'irrigation works' in the same sentence." },
      { question: "Gap 11: The development can improve production in any _____ by means of large capital investments.", options: ["field", "area", "way", "work"], answer: 1, alsoAccept: [0], explanation: "'In any area' means in any sector of the economy.", keyVerdict: 'multiple', keyAnswer: 'B', answerNote: "The key gives area (B). 'In any field' (A) means the same thing here (any branch of activity), so both are marked right. 'In any way' and 'in any work' do not fit 'improve production in…'." },
      { question: "Gap 12: …by means of large _____ investments.", options: ["huge", "capital", "premium", "fund"], answer: 1, explanation: "Capital investment is money spent on things like power stations and irrigation works. 'Large huge' would repeat itself." },
      { question: "Gap 13: The only source of _____ for such development is the government itself.", options: ["finance", "interest", "demand", "power"], answer: 0, explanation: "The paragraph is about money (investments, loans), so the source of finance." },
      { question: "Gap 14: An individual investment _____ are small and foreign loan is not easy to come by.", options: ["interest", "cash", "capital", "capabilities"], answer: 3, explanation: "Only a plural noun agrees with 'are': individuals' investment capabilities (what they can afford to invest) are small." },
      { question: "Gap 15: _____ on foreign loans are quite high.", options: ["Interest charges", "Interest", "Cash", "Cash balances"], answer: 0, explanation: "What is high on loans is the interest charged; the plural 'are' needs 'interest charges'." },
  ];

  const passages = [
    { passageId: 'eng-2018-p1', passageTitle: 'JAMB 2018 — Passage I', year: Y, instruction: READ, passage: PT0, questions: P1Q },
    { passageId: 'eng-2018-p2', passageTitle: 'JAMB 2018 — Passage II (cloze)', year: Y, instruction: 'The passage has gaps numbered 6 to 15. Choose the most appropriate option for each gap.', passage: PT1, questions: CLOZE },
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
    q(MEANS + "The protesters were urged to keep a sense of proportion.", ["They should not go beyond the college gate with their protest", "They should divide into groups for a good protest", "They should do what is important in the protest", "They should reduce the number in the group"], C, "A sense of proportion is the ability to judge what really matters, so they should concentrate on what is important and not overreact."),
    q(MEANS + "Tolu lost her nerves when Ada appeared.", ["Tolu became sad on seeing Ada", "Tolu lost control of herself on seeing Ada", "Tolu ran away on seeing Ada", "Tolu became worried on seeing Ada"], D, "To lose one's nerve is to become anxious and lose one's courage, so Tolu became worried (nervous) when Ada appeared."),
    q(MEANS + "Bado got a job by paying hush money.", ["Bado was well paid for the job", "Bado gave a bribe to get a job", "Bado stole money to pay for the job", "Bado threatened them harshly"], B, "Hush money is a secret, improper payment, i.e. a bribe."),
    q(MEANS + "There are many bookshops close at hand.", ["There are many closed bookshops", "The bookshop can be reached easily", "The book shop can be reached with difficulty", "The bookshops are well stocked"], B, "Close at hand means near, within easy reach."),
    q(MEANS + "He took the high road in his campaigns.", ["He took his campaigns to highbrow areas", "He took a bold step in his campaigns", "He took a positive action in his campaigns", "He took important personalities to his campaigns"], C, "To take the high road is to take the honourable, positive course (e.g. not attacking opponents), so his campaign was positive.", { keyVerdict: 'corrected', keyAnswer: 'B', answerNote: "To 'take the high road' means to behave in a fair, decent and positive way, even when others do not; in elections it is the opposite of negative, mud-slinging campaigning. That matches 'a positive action' (C). A bold step (B) is about courage, which the idiom does not mean." }),
    q(STRESSOF + "Justification", ["JUStification", "jusTIfication", "justiFIcation", "justifiCAtion"], D, "Words ending in -tion are stressed on the syllable just before it: jus-ti-fi-CA-tion."),
    q(STRESSOF + "Admittedly", ["adMITtedly", "ADmittedly", "admitTEDly", "admittedLY"], A, "Admittedly keeps the stress of admit on its second syllable: ad-MIT-ted-ly. (The paper misprints option A as 'adMITtedely'.)"),
    q(SAMEV + "pARdon", ["dad", "clerk", "racket", "wow"], B, "The ar in pardon is the long /ɑː/; in British English clerk is pronounced /klɑːk/ with the same vowel. Dad and racket have short /æ/."),
    q(SAMEV + "mIGHt", ["wheat", "wrist", "wright", "writ"], C, "Might has the diphthong /aɪ/, spelt igh, exactly like wright (/raɪt/). Wrist and writ have short /ɪ/. (In the scan the underline sits under the gh.)"),
    q(CONS + "GNaw", ["crane", "cling", "rang", "flung"], A, "In gnaw the g is silent, so gn is plain /n/, as in crane. In cling, rang and flung, ng is /ŋ/."),
    q(CONS + "daMn", ["him", "draw", "known", "when"], A, "In damn the n is silent, so the sound is /m/, as in him."),
    q(GAP + "He _____ his father in high esteem.", ["has", "hallows", "had", "holds"], D, "The fixed expression is 'to hold someone in high esteem', i.e. to respect them greatly."),
    q(GAP + "The examiners are _____.", ["through", "thorough", "though", "throng"], B, "Thorough means careful and complete. Through, though and throng are look-alike words that don't fit."),
    q(GAP + "Toni's popularity has _____ since his latest album.", ["soared", "doubled", "surged", "multiply"], C, "Popularity that surges rises suddenly and strongly; 'has surged' is correct.", { alsoAccept: [A], keyVerdict: 'multiple', keyAnswer: 'C', answerNote: "The key gives surged (C), which is correct. 'Toni's popularity has soared' (A) is an equally common, correct way to say it rose sharply, so both are marked right. Multiply is the wrong form after 'has', and popularity is not usually said to 'double'." }),
    q(GAP + "The _____ of the beauty queen is captivating.", ["poisture", "position", "posture", "pose"], C, "Posture is the way a person holds and carries her body. 'Poisture' is not an English word (perhaps a misprint for poise)."),
    q(GAP + "A sound logic must appeal to one's _____.", ["situation", "affection", "cognition", "disposition"], C, "Logic appeals to the reasoning mind, i.e. cognition (thinking and understanding), not the feelings."),
    q(GAP + "The activities of the insurgents have been _____.", ["received with understanding", "bemused by all and sundry", "besotted with admiration", "berated by all sundry"], D, "To berate is to criticise angrily; insurgents' activities are condemned by everyone. (The paper prints 'all sundry' for 'all and sundry'.)"),
    q(GAP + "An actor in a play production is part of the _____.", ["crew", "performers", "dramatists", "cast"], D, "The cast is all the actors in a play. The crew works behind the scenes, and dramatists write plays."),
    q(GAP + "Some of the victims look _____.", ["hampered", "haggle", "hazard", "haggard"], D, "Haggard means looking tired, worn and ill, which suits victims. Haggle (bargain) and hazard (danger) are not adjectives."),
    q(GAP + "The business tycoon has found a new _____ for his goods.", ["cast", "outlet", "input", "annex"], B, "An outlet is a shop or market through which goods are sold."),
    q(GAP + "Independence of the local government authorities _____ facilitates speedy development.", ["would", "ought", "shall", "should"], A, "'Would facilitate' states what independence would bring about. (The paper prints 'facilitates'; after a modal verb the base form 'facilitate' is needed.)"),
    q(NEAR + "Many students are faced with PECUNIARY challenges.", ["academic", "home", "monetary", "important"], C, "Pecuniary means relating to money, i.e. monetary."),
    q(NEAR + "Bassey's actions have fallen outside the PRECINCTS of the law.", ["limits", "premises", "localities", "directives"], A, "Precincts here means bounds or limits: his actions are outside the limits of the law."),
    q(NEAR + "I have tried to make Ukwudi a friend, but she has remained PETTY.", ["hostile", "friendly", "parochial", "cynical"], C, "Petty means small-minded, caring about trivial things; parochial means narrow-minded."),
    q(NEAR + "The company has been declared INSOLVENT.", ["buoyant", "productive", "corrupt", "bankrupt"], D, "Insolvent means unable to pay one's debts, i.e. bankrupt."),
    q(NEAR + "The man with a bandaged hand has been a victim of XENOPHOBIA.", ["fear of the unknown", "fear of crowds", "fear of foreigners", "fear of darkness"], C, "Xenophobia (from Greek xenos, stranger) is fear or hatred of foreigners."),
    q(EMPH + "She SIMPLY ignored me.", ["Did she simply accept them?", "Who simply ignored me?", "Did she totally ignore me?", "Did she simply praise me?"], C, "Stressing SIMPLY corrects the degree or manner of ignoring: it answers 'Did she totally ignore me?'"),
    q(EMPH + "Emeka ENCOURAGED Bayo to take the job.", ["Did Emeka encourage Bayo to take a job?", "Did Emeka trick Bayo into rejecting the job?", "Did Emeka persuade Bayo to take the job?", "Who encouraged Bayo to take the job?"], C, "Stressing ENCOURAGED corrects the verb: it answers a question that uses a different verb for the same action, 'persuade'."),
    q("Choose the option that rhymes with the given word: Little", ["temple", "titled", "spittle", "bitter"], C, "Little ends in /-ɪtl/, exactly like spittle."),
    q("Choose the option that rhymes with the given word: grey", ["crow", "groom", "pray", "glow"], C, "Grey and pray both end in /eɪ/."),
    q(OPP + "We have learnt the THEORETICAL aspect of the course.", ["practical", "abstract", "written", "hypothetical"], A, "Theoretical (based on ideas) is the opposite of practical (based on doing)."),
    q(OPP + "Many people dislike the present AUSTERITY measures.", ["harsh", "rigid", "miserly", "buoyant"], D, "Austerity is a time of tight spending and hardship; its opposite is a buoyant (prosperous, thriving) economy."),
    q(OPP + "Women admire men who tell VERITABLE stories.", ["fantastic", "real", "negative", "archaic"], A, "Veritable means true and genuine; fantastic means imaginary or far-fetched, the opposite."),
    q(OPP + "Kolo has considerable ALLUREMENT for white shirts.", ["fascination", "repulsion", "attraction", "temptation"], B, "Allurement is attraction; its opposite is repulsion."),
    q(OPP + "He did not see the LIKELIHOOD of passing the examination.", ["difficulty", "probability", "impossibility", "practicability"], C, "Likelihood is the chance that something will happen; its opposite is impossibility."),
  ];

  QUESTION_BANK.english = QUESTION_BANK.english.concat(passages, flat);
})();
