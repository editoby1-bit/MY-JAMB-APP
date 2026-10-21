/**
 * JAMB/UTME 2014 — LITERATURE-IN-ENGLISH
 * From the 2014 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2014;
  const SRC = 'JAMB UTME 2014';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const WO = "Based on Femi Osofisan's Women of Owu: \n";
  const TT = "Based on William Shakespeare's The Tempest: \n";
  const WP = "Based on Asare Konadu's A Woman in Her Prime: \n";
  const PH = "Based on Chimamanda Adichie's Purple Hibiscus: \n";
  const OS = "Based on Ernest Hemingway's The Old Man and the Sea: \n";
  const WOt = { setText: 'Femi Osofisan, Women of Owu' };
  const TTt = { setText: 'William Shakespeare, The Tempest' };
  const WPt = { setText: 'Asare Konadu, A Woman in Her Prime' };
  const PHt = { setText: 'Chimamanda Ngozi Adichie, Purple Hibiscus' };
  const OSt = { setText: 'Ernest Hemingway, The Old Man and the Sea' };
  const BUG = "'I wonder how long, you awful parasites, shall share\nwith me this little bed,\nAnd awake me, from my sweet dreams be lost,\nsucking blood from my poor head...'\nMbure: To a Bed-Bug\n\n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 2)
    q(WO + "In the play, the gods are portrayed as",
      ["helpless", "architects of man's destiny", "amorous", "saviours of mankind"], B,
      "Lawumi admits she stirred up the allied forces to destroy Owu, and the gods then decide the fate of the victors too: human beings are puppets whose destiny the gods shape.",
      WOt),
    // 2 (paper 3)
    q(WO + "Orisaye describes Balogun Kusa as",
      ["a great warrior", "an enemy and a butcher", "a friend in need", "a good leader"], B,
      "Orisaye says she will go to the camp to be married to her enemy, 'that handsome butcher of our people': the general who destroyed Owu.",
      WOt),
    // 3 (paper 5)
    q(WO + "Balogun Kusa is killed by a",
      ["god", "herbalist", "lunatic", "soldier"], C,
      "The half-mad Orisaye, whom everyone takes for a raving lunatic, prophesies that her 'marriage' to Kusa will bring his death at her own hands.",
      WOt),
    // 4 (paper 6)
    q(TT + "In the play, Ariel is identified as",
      ["leader of the spirits", "Prospero's daughter", "Alonso's wife", "assistant to Sycorax"], A,
      "Ariel is the chief spirit who serves Prospero and commands the lesser spirits ('thy meaner fellows') to carry out his magic.",
      TTt),
    // 5 (paper 7)
    q(TT + "Before the shipwreck that occurs at the beginning of the play, Prospero and his daughter have lived in the Island for",
      ["two decades", "twelve years", "forty days", "eighteen months"], B,
      "Prospero tells Miranda that 'twelve year since' he was Duke of Milan; they have been on the island for twelve years.",
      TTt),
    // 6 (paper 8)
    q(TT + "Caliban's intention to rape Miranda is born out of the desire to",
      ["destroy the Island", "compete with Ferdinand", "populate the Island with Calibans", "marry her"], C,
      "Caliban boasts that had he not been stopped, 'I had peopled else / This isle with Calibans.'",
      TTt),
    // 7 (paper 9)
    q(TT + "The character associated with savagery in the play is",
      ["Ariel", "Stephano", "Caliban", "Ferdinand"], C,
      "Caliban, the 'savage and deformed slave', son of the witch Sycorax, stands for untamed, savage nature.",
      TTt),
    // 8 (paper 10)
    q(TT + "Prospero is portrayed as a man who is",
      ["full of mistrust for everybody", "more interested in studying than in governance", "dependent on the spirits for his survival", "eager to conquer the world"], B,
      "As Duke of Milan, Prospero left the government to his brother Antonio and buried himself in his 'secret studies', which let Antonio usurp him.",
      TTt),
    // 9 (paper 11)
    q(WP + "The novel explores the theme of",
      ["exploitation of the African woman", "sex discrimination in Ghana", "women liberation in Nigeria", "child quest of an African woman"], D,
      "The novel follows Pokuwaa, a Ghanaian village woman, in her long, desperate quest to have a child.",
      WPt),
    // 10 (paper 12)
    q(WP + "According to the novel, the worst calamity that can befall a woman is",
      ["inability to bear male children", "inability to marry", "divorce", "barrenness"], D,
      "In Pokuwaa's world a woman's worth is measured by her children, so barrenness is the greatest misfortune she can suffer.",
      WPt),
    // 11 (paper 14)
    q(PH + "In the novel, one of the changes introduced into St. Agnes' church by Father Benedict is that",
      ["there must be fasting every month", "the Credo must be recited in Igbo", "the Kyrie must be rendered only in Latin", "everyone must take holy communion"], C,
      "The white priest Father Benedict insists that the Credo and the Kyrie be said only in Latin; Igbo is not acceptable in his Mass.",
      PHt),
    // 12 (paper 15)
    q(PH + "Eugene Achike in the novel is portrayed as",
      ["a soft and gentle husband", "an uncompromising traditionalist", "a fanatical Catholic adherent", "a tough retired soldier"], C,
      "Eugene is a rigid, fanatical Catholic who punishes his family brutally for any 'sin' and rejects his own 'heathen' father.",
      PHt),
    // 13 (paper 16)
    q(PH + "In the Achike family, the character who is central to the theme is",
      ["Kambili", "Mama", "Sisi", "Jaja"], A,
      "Kambili, the fifteen-year-old narrator, is the protagonist: the novel's themes of fear, silence and growing into freedom are seen through her.",
      PHt),
    // 14 (paper 17)
    q(OS + "In the novel, the type of fish caught by Santiago after days of effort is",
      ["shark", "iris", "marlin", "geisha"], C,
      "After eighty-four days without a catch, Santiago hooks and kills a giant marlin, which sharks later eat on the way home.",
      OSt),
    // 15 (paper 18)
    q(OS + "The novel demonstrates the",
      ["attempt to catch fish", "desire to understand life", "influence of the sea on man", "struggle of man against defeat"], D,
      "Santiago loses the marlin to the sharks but not his spirit: 'A man can be destroyed but not defeated.'",
      OSt),
    // 16 (paper 19)
    q(OS + "In the novel, the attitude of the old man toward nature is quite",
      ["cautious and sceptical", "hostile and callous", "careless and indifferent", "warm and friendly"], D,
      "Santiago loves the sea (la mar), talks to the birds and calls the marlin his brother, even as he kills it.",
      OSt),
    // 17 (paper 20)
    q(OS + "Santiago's second dream occurs",
      ["the night before his fishing expedition", "in his house", "at the end of the book", "when he sleeps on the boat for a few hours"], D,
      "His first dream (of Africa and the lions) is in his shack the night before he sets out; the next comes when he snatches a short sleep in the skiff while holding the marlin.",
      OSt),
    // 18 (paper 21)
    q("The dominant image in Adeoti's Hard Lines is",
      ["auditory", "gustatory", "visual", "tactile"], B,
      "The poem pictures hard truths as things that must be tasted and swallowed (bitter pills, things hard on the palate), so taste (gustatory) imagery dominates.",
      { setText: 'Gbemisola Adeoti, Hard Lines' }),
    // 19 (paper 24)
    q("Cheney-Coker's Myopia is a",
      ["dirge", "lament", "sonnet", "ballad"], B,
      "The persona grieves over the misery of his country's peasants ('the boulevards of misery', 'a train of anguish'): the poem is a lament.",
      { setText: 'Syl Cheney-Coker, Myopia' }),
    // 20 (paper 25)
    q("Jared Angira is an African poet from",
      ["Sierra-Leone", "Kenya", "South Africa", "Ghana"], B,
      "Jared Angira (born 1947) is a Kenyan poet, often called one of East Africa's leading poets.",
      { setText: 'Jared Angira (poet)' }),
    // 21 (paper 27)
    q("The sun in Donne's The Sun Rising is depicted through the use of",
      ["invocation", "ellipsis", "enjambment", "apostrophe"], D,
      "The speaker addresses the sun directly ('Busy old fool, unruly sun, / Why dost thou thus...'), which is apostrophe.",
      { setText: 'John Donne, The Sun Rising' }),
    // 22 (paper 28)
    q("In Raleigh's The Soul's Errand, the soul is portrayed as a",
      ["friend of suffering masses", "fearless message-bearer", "restorer of lost glory", "messenger of hope and peace"], B,
      "The speaker sends his soul ('Go, soul, the body's guest, / Upon a thankless errand') to tell court, church and all the world that they lie, without fear of the consequences.",
      { setText: 'Sir Walter Raleigh, The Soul\'s Errand (The Lie)' }),
    // 23 (paper 29)
    q("The allusion in Hughes's The Negro Speaks of Rivers is mainly",
      ["biblical", "historical", "classical", "literary"], B,
      "The rivers Euphrates, Congo, Nile and Mississippi recall stages of Black history, from ancient civilisation and the pyramids to Lincoln and slavery in America.",
      { setText: 'Langston Hughes, The Negro Speaks of Rivers' }),
    // 24 (paper 31)
    q("An action in a play that stimulates the audience to pity a character is",
      ["pathos", "parody", "pyrrhic", "props"], A,
      "Pathos is the quality in a scene or action that moves the audience to pity and sorrow."),
    // 25 (paper 32)
    q("Purgation of emotion, pity and fear is",
      ["epilogue", "exposition", "catharsis", "catastrophe"], C,
      "Aristotle's word for the purging of pity and fear that tragedy brings about in the audience is catharsis."),
    // 26 (paper 33)
    q("A device in drama where a character speaks alone is",
      ["apostrophe", "dialogue", "soliloquy", "aside"], C,
      "In a soliloquy a character alone on stage speaks his or her thoughts aloud."),
    // 27 (paper 34)
    q("A plot in a literary work is about",
      ["resolution of conflicts", "law of poetic justice", "character delineation", "causal arrangement of events"], D,
      "Plot is the arrangement of events linked by cause and effect, not simply their order in time."),
    // 28 (paper 35)
    q("Tone and mood of a poem refer to",
      ["setting", "space", "locale", "atmosphere"], D,
      "Tone (the poet's attitude) and mood (the feeling the poem creates) together make up its atmosphere."),
    // 29 (paper 36)
    q("A funny incident within a serious situation is",
      ["tragicomedy", "tragic hero", "comedy", "comic relief"], D,
      "Comic relief is a humorous scene placed in a serious work to ease tension, like the Porter scene in Macbeth."),
    // 30 (paper 37)
    q("In literature, a flat character can be described as one who",
      ["dies abruptly", "achieves greatness", "is undeveloped", "undergoes changes"], C,
      "A flat character is built around one trait and is not developed; a round character is complex and changes."),
    // 31 (paper 38)
    q("Dramatis personae in a play refers to",
      ["cast list", "protagonist and antagonist", "list of characters", "order of appearance"], A,
      "Dramatis personae (Latin, 'persons of the drama') is the list of the characters in a play, also called the cast list.",
      { keyVerdict: 'multiple', alsoAccept: [C], keyAnswer: 'A', answerNote: "Both A and C are right. Dramatis personae is the list of characters printed at the start of a play, which is also called the cast list." }),
    // 32 (paper 39)
    q("The speech made at the end of a dramatic performance is generally called",
      ["a dirge", "a monologue", "a prologue", "an epilogue"], D,
      "An epilogue is the closing speech of a play; a prologue opens it."),
    // 33 (paper 40)
    q("Which of the following is central to narrative fiction?",
      ["Objectivity", "Subjectivity", "Verisimilitude", "Dialogue"], C,
      "Narrative fiction must seem true to life (verisimilitude) so that readers believe in its invented people and events."),
    // 34 (paper 41)
    q("He put himself in uniform, made one for his five-year-old son, and marched with the infant from dawn till noon every market day, on the main road singing 'Kayiwawa betun'.\n\nThe persona in the excerpt above is portrayed as",
      ["energetic", "a policeman", "a soldier", "abnormal"], D,
      "A grown man who marches his small son up and down the main road in home-made uniforms every market day, singing, is behaving abnormally."),
    // 35 (paper 42)
    q("He is a faithful liar.\n\nThe above is an example of",
      ["epigram", "oxymoron", "euphemism", "antithesis"], B,
      "'Faithful' and 'liar' contradict each other and are placed side by side: an oxymoron."),
    // 36 (paper 43)
    q("Fights by the book of arithmetic\n\nThe figure of speech in the line above is",
      ["hyperbole", "Euphemism", "Litotes", "Innuendo"], D,
      "The line sneers at a fighter who fights mechanically, by rule and number, without saying so openly: an indirect, mocking hint, which is innuendo."),
    // 37 (paper 44)
    q("And when you trudge on one horny pads\nGullied like the soles of modern shoes\nPads that even jiggers\ncannot conquer\n\nHorny pads in the lines above is a reference to a",
      ["policeman", "madman", "sole of a pauper", "sole of a soldier"], C,
      "The 'horny pads' are the hard, cracked soles of a poor person who walks barefoot, so tough that even jiggers cannot get in."),
    // 38 (paper 45)
    q("'Lift not the painted veil which those who live\nCall Life: though unreal shapes be pictured there,\nAnd it but mimic all we would believe\nWith colours idly spread,—behind, lurk Fear'\nP.B Shelley: Sonnet\n\nThe stanza above is an example of a",
      ["quatrain", "sonnet", "couplet", "sestet"], A,
      "The extract is four lines rhyming abab: a quatrain, the opening quatrain of Shelley's sonnet."),
    // 39 (paper 46)
    q(BUG + "The lines are an example of a",
      ["limerick", "lampoon", "light verse", "light opera"], C,
      "A mock-serious complaint addressed to bed-bugs is playful, humorous poetry: light verse."),
    // 40 (paper 47)
    q(BUG + "The poet persona expresses dismay about",
      ["bat", "cockroaches", "grasshoppers", "bed bugs"], D,
      "The 'awful parasites' that share his bed and suck blood from his head are bed-bugs, as the title says."),
    // 41 (paper 48)
    q(BUG + "The most dominant figure of speech in the excerpt is",
      ["metaphor", "simile", "personification", "hyperbole"], C,
      "The bugs are treated like human bedfellows who 'share' his bed and are addressed as 'you': personification."),
    // 42 (paper 49)
    q("You\nYour head is like a drum that is beaten for spirits.\nYou\nYour ears are like the fans used for blowing fire.\n\nThe lines above are a good example of",
      ["caricature", "ridicule", "satire", "lampoon"], D,
      "The lines are a direct, abusive personal attack that mocks a person's head and ears: a lampoon."),
    // 43 (paper 50)
    q("'This thing you are doing is too heavy for you,' he said. 'I went to school only a little but I have killed many many more years in this world than you have.'\nG. Okara: The Voice\n\nIt can be inferred from the passage above that the",
      ["listener is wise", "speaker is a porter", "listener is more experienced", "speaker is more experienced"], D,
      "The speaker has 'killed many many more years in this world': he is older and more experienced than the listener."),
  ]);
})();
