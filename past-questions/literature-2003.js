/**
 * JAMB/UTME 2003 — LITERATURE-IN-ENGLISH
 * From the 2003 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2003;
  const SRC = 'JAMB UTME 2003';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const EX45 = "'I am informed the day recycles itself today\nWhen I slept in the Lord in February\nI blame no one for an untimely death\nI bless God for a noble departure—His words\nThe Lord taketh the righteous away before evil days.'\n\n";
  const EX10 = "'The gloom will give way to light\nAnd the thorny path cleared of pain\nThe storms will bow to the prompting of peace\nLost moments of glory will be restored\nAnd strangled opportunities reborn:\nWe shall yet regain the dawn'\n\n";
  const WR = "Based on J.P. Clark's The Wives' Revolt: \n";
  const SSC = "Based on Oliver Goldsmith's She Stoops to Conquer: \n";
  const AF = "Based on George Orwell's Animal Farm: \n";
  const WT = "Based on Abubakar Gimba's Witnesses to Tears: \n";
  const PO = "Based on the prescribed poems: \n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1
    q("'Jibunoh was simply a difficult man. He was hated by all his neighbours and deserted by his relations. He was the first and only person to beat a policeman in the entire village. He also had ten cases instituted against him for either stealing or violating the rights of others. He had no regard for decency or normal conduct. No lover of peace or order could be his friend. It is not surprising that his death elicited jubilation rather than mourning.'\n\nThe passage above reveals that Jibunoh symbolizes",
      ["wickedness", "insanity", "lawlessness", "isolation"], C,
      "Beating a policeman, ten court cases for stealing and violating others' rights, and no regard for order all show a man who lives outside the law: lawlessness."),
    // 2
    q("'Loveliest of trees, the cherry now\nIs hung with bloom along the bough,\nAnd stands about the woodland ride\nWearing white for Eastertide.'\nA.E. Housman, Loveliest of Trees, the Cherry Now\n\nIn the excerpt above, the subject matter is",
      ["love of trees", "cherry bloom", "snow at easter", "woodland ride"], B,
      "The lines describe one thing: the cherry tree 'hung with bloom' and 'wearing white', that is, the cherry in blossom.",
      { keyVerdict: 'corrected', keyAnswer: 'A', answerNote: "The answer often given is A, love of trees. But the subject matter is what the lines are about, and these lines describe the cherry tree covered in white blossom. The speaker's admiration ('Loveliest of trees') is his attitude to that subject, not the subject itself, so B fits better." }),
    // 3
    q("'As virtuous men pass mildly away,\nAnd whisper to their souls to go,\nWhilst some of their sad friends do say\nThe breath goes now, and some say, No:'\n\nThe tone of the poem is generally",
      ["appreciative", "serious", "imaginative", "conversational"], B,
      "The calm, solemn picture of good men dying quietly while sad friends watch sets a serious, grave tone."),
    // 4
    q(EX45 + "The persona in the poem appears happy to have died",
      ["a noble death", "during the day", "at an old age", "an untimely death"], A,
      "'I bless God for a noble departure' shows the dead speaker is glad that the death was noble; he says he blames no one for its untimeliness."),
    // 5
    q(EX45 + "The lines above express",
      ["anniversary", "procreation", "incarnation", "resurrection"], A,
      "'The day recycles itself today' means the date of the February death has come round again: the lines mark an anniversary of the death."),
    // 6
    q("'If God is the sole author of man's life and all that befalls him on earth, does it not stand to reason that all evils that befall man are God sanctioned? If man generally turns to God to bail him out of evil or bad occurrences, is one wrong then to conclude that He allows evils to befall man to bring him back to Him?'\n\nThe literary style used in the passage above is",
      ["discursive", "rhetorical", "accusative", "interrogative"], D,
      "The whole passage is built from questions, so its style is interrogative."),
    // 7
    q("'And so Tom awoke and we rose in the dark\nAnd got with our bags and our brushes to work\nThough the morning was cold,\nTom was happy and warm;\nSo if all do their duty they need not fear harm.'\n\nIn the lines above, Tom is warm because he",
      ["has just woken from sleep", "is doing his duty", "is wearing warm clothes", "is working indoors"], B,
      "The last line gives the reason: 'if all do their duty they need not fear harm'. Tom feels warm inside because he is doing his duty."),
    // 8
    q("'James started showing interest in Buchi a long time ago. In playing the hunter, he realized that he needed a bait. This turned out to be his frequent offer of assistance to the difficult needy young woman. But Buchi has proved to be a difficult game. The more James trailed her the more he realized that she could not be easily caught.'\n\nThe choice of words in the passage above is remarkable because it is",
      ["largely confusing", "very difficult", "quite appropriate", "drawn from hunting"], D,
      "'Hunter', 'bait', 'game', 'trailed' and 'caught' all come from hunting: the courtship is described in the language of a hunt."),
    // 9
    q("'To see the world in a grain of sand\nAnd a heaven in a wild flower,\nHold infinity in the palm of your hand\nAnd eternity in an hour.'\nWilliam Blake, To See a World in a Grain of Sand\n\nThe predominant figure of speech used in the lines above is",
      ["metaphor", "hyperbole", "simile", "paradox"], B,
      "Seeing a whole world in a grain of sand and holding infinity in a palm are deliberate, impossible overstatements (hyperbole); they are also paradoxes, the vast held in the tiny.",
      { keyVerdict: 'multiple', alsoAccept: [D], keyAnswer: 'B', answerNote: "Both B and D are fully right. Read as overstatement, the lines are hyperbole (B), the answer often given. Read as apparent contradictions that hold a truth (the infinite inside something tiny), they are paradoxes (D), which is how many critics describe them." }),
    // 10
    q(EX10 + "The suggestion that runs through the short poem above is that of",
      ["anxiety and worry", "anticipation of positive change", "sorrow and dejection", "fear of change"], B,
      "Every line looks forward to something better: gloom will give way to light, glory will be restored, 'We shall yet regain the dawn'."),
    // 11
    q("Farce thrives on",
      ["big events", "premonition", "absurdity", "incidents"], C,
      "Farce is a kind of comedy that gets its laughter from absurd, improbable situations, wild coincidences and physical clowning."),
    // 12
    q("The form of poetry that celebrates with nostalgia the ideal world of the countryside is referred to as",
      ["an ode", "a ballad", "an elegy", "a pastoral"], D,
      "A pastoral poem idealises country life, shepherds and rural peace, often looking back with longing."),
    // 13
    q("One rhyme scheme typical of the English sonnet is",
      ["abab cdcd cdedce", "abba cdcd cde cde", "abba abba cde dee", "abab cdcd efef gg"], D,
      "The English (Shakespearean) sonnet has three quatrains and a closing couplet: abab cdcd efef gg."),
    // 14
    q("The tragic character is the person whose experiences arouse pity and",
      ["terror", "horror", "frustration", "sympathy"], A,
      "Aristotle said tragedy arouses pity and fear (terror), which are then purged in catharsis."),
    // 15
    q("Allegory is used to describe a work in which",
      ["humans are transposed into animals", "both animals and humans swap roles", "animals are given human characters", "abstract ideas are personified"], D,
      "In an allegory, characters and events stand for abstract ideas (Christian in The Pilgrim's Progress stands for every believer; Giant Despair for despair)."),
    // 16
    q("The author of a novel sustains readers' interest through the use of",
      ["ambiguity", "anecdotes", "prologue", "suspense"], D,
      "Suspense, the reader's anxious wish to know what happens next, is what keeps the pages turning."),
    // 17
    q("'Theatre-in-the-round' is employed to achieve a",
      ["quick resolution of conflicts", "hilarious ending", "contest between the hero and the villain", "close rapport between players and spectators"], D,
      "In theatre-in-the-round the audience sits all around the acting area, close to the actors, which creates intimacy between players and spectators."),
    // 18
    q("In its classic form, the short story is distinguished by its",
      ["resolution", "narrative form", "compact plot", "prosaic conception"], C,
      "A short story is short: it has a compact, single plot with few characters and one main effect, unlike the many strands of a novel."),
    // 19
    q("In literary convention, 'aside' is used to",
      ["make a pointed remark", "emphasize scenes as different from acts", "distinguish between events", "gossip about other characters"], A,
      "An aside is a brief, pointed remark a character makes to the audience (or one other character) that the others on stage are taken not to hear."),
    // 20
    q("The writing convention in which the events in a narrative are scrambled as they come to the writer's mind without any attempt to arrange them in orderly sequence is called",
      ["shifting style", "narrator's mind style", "psycho-consciousness style", "stream of consciousness"], D,
      "Stream of consciousness presents thoughts and events in the random order in which they flow through a mind, as in James Joyce and Virginia Woolf.",
      { bookletKey: 'B', bookletNote: "The booklet answer B, 'narrator's mind style', is not a literary term. The technique of setting down events and thoughts in the jumbled order in which they come to the mind is called stream of consciousness, so D is right." }),
    // 21 (paper 21)
    q(WR + "The mutual exchange of abuse in the play is reminiscent of",
      ["Ikaki", "Ekpe", "Udje", "Etiyeri"], C,
      "Udje is the Urhobo tradition of satirical songs in which rival groups trade abuse; the play is set in the Urhobo town of Erhuwaren, and Okoro and Koko trade insults in the same spirit.",
      { setText: "J.P. Clark, The Wives' Revolt" }),
    // 22 (paper 24)
    q(WR + "'...Great orators in the assembly, and poor nannies at home.' Those being ridiculed here are the",
      ["spinsters", "husbands", "wives", "old women"], B,
      "The men of Erhuwaren talk grandly in the town assembly, but once their wives walk out they are reduced to minding children at home: the husbands are mocked.",
      { setText: "J.P. Clark, The Wives' Revolt" }),
    // 23 (paper 25)
    q(WR + "In their flight, the women settle at Iyara in order to",
      ["forestall reconciliation", "seek peace", "trade in its market", "hurt their husbands"], D,
      "Iyara (Eyara) is Erhuwaren's arch-enemy town, a place known for disease and poverty; by choosing to stay there the women deliberately taunt and wound their men.",
      { setText: "J.P. Clark, The Wives' Revolt" }),
    // 24 (paper 26)
    q(SSC + "'My heart thus pressing—fix'd my face and eye—\nWith a sententious look, that nothing means...'\n\nIn the lines above, the speaker implies that",
      ["his gesture means nothing", "he is a pious man", "he is being sentimental", "his heart is pressing against his face and eye"], A,
      "In the Prologue the actor mimics the pose of sentimental comedy (hand on heart, solemn look) and says outright that the look 'nothing means': the gesture is empty.",
      { setText: 'Oliver Goldsmith, She Stoops to Conquer' }),
    // 25 (paper 27)
    q(SSC + "The use of the traditional verse form in the play applies to",
      ["the character of Sir Charles Marlow", "the prologue, songs and the epilogue", "male characters", "female characters"], B,
      "The dialogue is in prose; only the Prologue, Tony's song 'The Three Pigeons' and the Epilogue are in rhymed verse.",
      { setText: 'Oliver Goldsmith, She Stoops to Conquer' }),
    // 26 (paper 28)
    q(SSC + "The story of the play would have been different but for",
      ["Miss Hardcastle's attitude towards her guests", "Mr. Hardcastle's ignorance of Young Marlow's true identity", "the insensitivity of Mrs. Hardcastle", "Tony's misinformation of Young Marlow and Mr. Hastings"], D,
      "Tony's prank of telling Marlow and Hastings that Hardcastle's house is an inn starts every mistake of the night.",
      { setText: 'Oliver Goldsmith, She Stoops to Conquer' }),
    // 27 (paper 29)
    q(SSC + "The success of the play as a comedy relies on the author's use of",
      ["dramatic irony", "stock comic characters", "comic relief", "stage and scenic disguise"], A,
      "The audience knows what the characters do not (the 'inn' is a private house, the 'barmaid' is Kate), and the laughter comes from that dramatic irony.",
      { setText: 'Oliver Goldsmith, She Stoops to Conquer' }),
    // 28 (paper 30)
    q(SSC + "The Dorothy of the play is",
      ["Tony Lumpkin's mother", "Young Marlow's mother", "Miss Neville's mother", "Kate, Hardcastle's daughter"], A,
      "Mr Hardcastle calls his wife 'Dorothy'; Mrs Hardcastle is Tony Lumpkin's mother by her first marriage.",
      { setText: 'Oliver Goldsmith, She Stoops to Conquer' }),
    // 29 (paper 32)
    q(WT + "The subject matter of the novel is",
      ["marital infidelity", "the evils of materialism", "child abuse", "the gains of love"], B,
      "Lahab's greed for wealth and power drives him to bribery, corruption and ritual practice, and it ends in the death of his own son: the novel shows the evils of materialism.",
      { setText: 'Abubakar Gimba, Witnesses to Tears' }),
    // 30 (paper 33)
    q(WT + "The stealing of three thousand naira by the messenger and the manner of its presentation can be interpreted as Gimba's",
      ["sentimental attachment to money", "approbation of stealing", "condemnation of social injustice", "justification of social vices"], C,
      "The weak, poor messenger bears a heavy punishment while the powerful, like Lahab, steal far more: Gimba uses the episode to condemn social injustice.",
      { setText: 'Abubakar Gimba, Witnesses to Tears' }),
    // 31 (paper 34)
    q(AF + "In the novel, 'animalism' is a system of thought that emphasizes",
      ["conformity", "equality", "animality", "disparity"], B,
      "Animalism's last and most important commandment is 'All animals are equal'.",
      { setText: 'George Orwell, Animal Farm' }),
    // 32 (paper 35)
    q(AF + "The dominant technique in the book is",
      ["irony", "foreshadowing", "symbolism", "reminiscence"], C,
      "Animal Farm is an allegory: every animal and event symbolises a person or event of the Russian Revolution. Irony also runs through the whole book.",
      { setText: 'George Orwell, Animal Farm', keyVerdict: 'multiple', alsoAccept: [A], answerNote: "Both C and A are fully right. The book works by symbolism (Napoleon stands for Stalin, the pigs for the Communist Party), and it is also ironic from start to finish: a revolution for equality ends with 'some animals are more equal than others'." }),
    // 33 (paper 36)
    q(AF + "In the novel, Boxer is respected for his",
      ["duplicity", "reticence", "intellect", "hard work"], D,
      "Boxer, the huge cart-horse, is admired for his strength and tireless labour; his mottoes are 'I will work harder' and 'Napoleon is always right'.",
      { setText: 'George Orwell, Animal Farm' }),
    // 34 (paper 37)
    q(AF + "The overthrow of Jones happens sooner than expected because the animals",
      ["experience acute suffering", "are milked by Jones", "are better schemers", "receive assistance from Foxwood"], A,
      "Jones gets drunk and his men go rabbiting without feeding the animals; starving, they break into the store-shed and drive the men out.",
      { setText: 'George Orwell, Animal Farm' }),
    // 35 (paper 41)
    q(PO + "In Robert Frost's 'Wild Grapes' the girl's brother throws down grapes in the manner he does to",
      ["make his sister have her fill", "allow himself time in-between to eat", "make his sister desire to climb the tree", "allow himself to have some fun"], B,
      "He 'threw me down grapes to miss and scatter / And have to hunt for', which 'gave him some time to himself to eat'.",
      { setText: "Robert Frost, Wild Grapes" }),
    // 36 (paper 43)
    q(PO + "Donne's 'Death, be not Proud' is",
      ["an epic", "a dirge", "a ballad", "a sonnet"], D,
      "'Death, be not proud' is one of John Donne's Holy Sonnets: fourteen lines, ending in a couplet.",
      { setText: "John Donne, Death, be not Proud" }),
    // 37 (paper 44)
    q(PO + "The arrangement of David Diop's 'Loser of Everything' in two stanzas reflects his use of",
      ["reinforcement", "enjambment", "contrast", "amplification"], C,
      "The first stanza paints the happy African past; the second shows its destruction by the colonisers. The two stanzas are set in contrast.",
      { setText: "David Diop, Loser of Everything" }),
    // 38 (paper 45)
    q(PO + "The subject matter of Kassam's 'Maji Maji' is",
      ["socio-economic crises", "independence", "politics", "colonialism"], D,
      "The poem recalls the Maji Maji Rebellion (1905–1907) against German colonial rule in East Africa, with an old man remembering the Germans, their guns and the dead: its subject is colonialism.",
      { setText: 'Yusuf O. Kassam, Maji Maji' }),
    // 39 (paper 48)
    q(PO + "'As if men hung here unblown, Their mildewed buds of love like pollen, Late caught, damp in a swollen...'\nThe sound device in the stanza above from Kalu Uka's 'Earth to Earth' is",
      ["onomatopoeia", "a refrain", "rhyme", "repetition"], C,
      "'Pollen' and 'swollen' rhyme (and 'unblown' chimes with them): the sound device is rhyme.",
      { setText: "Kalu Uka, Earth to Earth" }),
    // 40 (paper 50)
    q(PO + "The tone of Kofi Awoonor's 'The Cathedral' is one of",
      ["reverence", "contempt", "indifference", "awe"], B,
      "The speaker calls the building that replaced the life-giving tree 'a huge senseless cathedral of doom': his tone is contemptuous.",
      { setText: "Kofi Awoonor, The Cathedral" }),
  ]);
})();
