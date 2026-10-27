/**
 * JAMB/UTME 2020 — LITERATURE-IN-ENGLISH
 * From the 2020 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2020;
  const SRC = 'JAMB UTME 2020';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const PO = "Based on the prescribed poems: \n";
  const SS = "Based on Bolaji Abdullahi's Sweet Sixteen: \n";
  const OT = "Based on William Shakespeare's Othello: \n";
  const SSt = { setText: 'Bolaji Abdullahi, Sweet Sixteen' };
  const OTt = { setText: 'William Shakespeare, Othello' };
  const PK = { setText: 'William Morris, The Proud King' };
  const PU = { setText: 'George Herbert, The Pulley' };
  const CB = { setText: 'Alfred, Lord Tennyson, Crossing the Bar' };
  const PD = { setText: 'Gabriel Okara, Piano and Drums' };
  const AH = { setText: 'Kofi Awoonor, The Anvil and the Hammer' };
  const SB = { setText: 'William Blake, The School Boy' };

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 1)
    q("A fable is otherwise known as",
      ["eclogue", "apologue", "parable", "anecdote"], B,
      "A fable, a short moral tale usually with animals as characters, is also called an apologue."),
    // 2 (paper 2)
    q("Characterization takes into consideration the following except",
      ["physical description of a character", "character's speech, thought and actions", "the speech, thought and action of the other characters", "where and when a story takes place"], D,
      "Where and when a story takes place is the setting, not characterization; a character is revealed through description, his own words and deeds, and what others say and do about him."),
    // 3 (paper 3)
    q("In plot, exposition does the following except",
      ["sets the tone", "introduces the characters", "concludes the story", "establishes the setting"], C,
      "The exposition opens a story: it introduces the characters, sets the scene and the tone. Concluding the story is the work of the resolution (denouement)."),
    // 4 (paper 4)
    q(PO + "Which of the following is not a device/technique in William Morris's The Proud King?",
      ["Allusion", "Inversion", "Dramatic monologue", "Allegory"], C,
      "The Proud King is a third-person narrative poem about King Jovinian, told by a narrator; it is not a dramatic monologue spoken by one character to a silent listener.",
      PK),
    // 5 (paper 7)
    q(PO + "In Herbert's The Pulley, \"pulley\" represents",
      ["the supremacy of God", "God as omnipotent", "man's dependence on God", "the frailty of human mind"], C,
      "God withholds 'rest' from man so that restlessness and weariness will 'toss him to my breast': the pulley is what draws man back to God, showing man's dependence on Him.",
      PU),
    // 6 (paper 8)
    q(PO + "'Twilight and evening bell,\nAnd after that the dark!'\nIn the extract above from Tennyson's Crossing the Bar, \"the dark\" represents",
      ["transition", "silence", "old age", "death"], D,
      "Twilight and the evening bell stand for the close of life (old age); 'the dark' that follows is death itself.",
      CB),
    // 7 (paper 9)
    q(PO + "'...and at once I'm\nin my mother's lap a suckling;'\nThe extract above from Okara's Piano and Drums conveys the poet's",
      ["alertness", "nostalgia", "sincerity", "innocence"], B,
      "The jungle drums carry the speaker back to his infancy in his mother's lap: a longing for the simple African past, which is nostalgia.",
      PD),
    // 8 (paper 10)
    q(PO + "Adeoti draws on ____ and ____ to achieve the themes in the poem Ambush.",
      ["metaphor and diction", "personification and metaphor", "imagery and metaphor", "irony and diction"], C,
      "Ambush is built on a chain of metaphors (the land is a giant whale, a sabre-toothed tiger, a giant hawk) that create vivid, terrifying images of a nation that preys on its people.",
      { setText: 'Gbemisola Adeoti, Ambush' }),
    // 9 (paper 11)
    q(PO + "A dominant figure of speech in Birago Diop's Vanity is",
      ["hyperbole", "rhetorical question", "irony", "metonymy"], B,
      "Vanity is built on questions that need no answer, such as 'Who then will hear our voices without laughter?': rhetorical questions.",
      { setText: 'Birago Diop, Vanity' }),
    // 10 (paper 12)
    q(PO + "'Sew the old days for us, our fathers,\nthat we may wear them under our new garments'\nThe extract above from Kofi Awoonor's The Anvil and the Hammer accentuates",
      ["dilemma of culture", "blend of culture", "death of culture", "clash of culture"], B,
      "The poet asks the ancestors to preserve the old African ways so that they can be worn under the 'new garments' of Western culture: a blend of the two cultures.",
      AH),
    // 11 (paper 13)
    q(PO + "The poem The School Boy by William Blake could be described as a Romantic poem because",
      ["it makes mention of nature and season", "it is about a lone character who is a boy", "it accentuates the importance of and the quest for fulfilment in nature", "the poem makes use of simple words which refer to the flora and fauna"], C,
      "Romantic poetry treats nature as the source of freedom and fulfilment; the schoolboy longs for the summer morning, the birds and the open fields instead of the classroom.",
      SB),
    // 12 (paper 14)
    q("An action in a play that stimulates the audience to pity a character is",
      ["pathos", "parody", "pyrrhic", "props"], A,
      "Pathos is the quality in a work that arouses pity, tenderness or sorrow in the audience."),
    // 13 (paper 15)
    q("A literary work in which characters and events are used to represent certain abstract qualities is known as",
      ["parable", "allegory", "parody", "anecdote"], B,
      "In an allegory characters and events stand for abstract ideas or qualities, as in Bunyan's The Pilgrim's Progress."),
    // 14 (paper 16)
    q("In literature, a flat character can be described as one who",
      ["dies abruptly", "achieves greatness", "is undeveloped", "undergoes changes"], C,
      "A flat character is built around one trait and does not develop or change in the course of the story."),
    // 15 (paper 17)
    q("The speech made at the end of a dramatic performance is generally called",
      ["a dirge", "a monologue", "a prologue", "an epilogue"], D,
      "An epilogue is the speech or section that comes after the main action at the end of a play; a prologue comes at the beginning."),
    // 16 (paper 20)
    q(SS + "What is the name of Aliya's father?",
      ["Mr. Benjamin", "Mr. Bright", "Mr. Bellaola", "Mr. Bello"], D,
      "Aliya is the only child of Mr and Mrs Bello; her father's talks with her about growing up form the story.",
      SSt),
    // 17 (paper 22)
    q(SS + "Who is the writer of Sweet Sixteen?",
      ["Bolaji Abdullahi", "Bola Abara", "Bright Abdullahi", "B. Bello"], A,
      "Sweet Sixteen (2017) is a coming-of-age novel by the Nigerian writer and politician Bolaji Abdullahi.",
      SSt),
    // 18 (paper 25)
    q(PO + "William Blake's The School Boy is a ____ form of writing.",
      ["romance", "Romantic", "metaphysical", "lyrical"], B,
      "Blake is a poet of the Romantic period and The School Boy celebrates nature, childhood and freedom; it is also a short, song-like lyric.",
      Object.assign({ keyVerdict: 'multiple', alsoAccept: [D], answerNote: "Both B and D are right. The School Boy is a Romantic poem (B): it celebrates nature, childhood and freedom against a dull classroom. It is also a lyric (D): a short song-like poem in the first person expressing the boy's feelings, like all of Blake's Songs." }, SB)),
    // 19 (paper 27)
    q(PO + "The Pulley represents God as the",
      ["ultimate giver of all", "creature", "lovely one", "restlessness"], A,
      "God pours out on man strength, beauty, wisdom, honour and pleasure from his 'glass of blessings': He is the giver of all good things.",
      PU),
    // 20 (paper 28)
    q(PO + "'Caught between the anvil and the hammer\nin the forging house of the new life,\ntransforming the pangs that delivered me'\nIn Kofi Awoonor's The Anvil and the Hammer, the anvil represents",
      ["African culture", "Western culture", "schools", "goldsmith's instrument"], A,
      "The speaker is like metal being forged between two cultures: the anvil stands for the traditional African culture, and the hammer for the Western culture striking on it.",
      AH),
    // 21 (paper 29)
    q(PO + "William Morris' The Proud King is all but one of the following",
      ["didactic", "operatic", "epic", "dramatic"], B,
      "The Proud King is a long narrative poem (epic in scale) that teaches a moral against pride (didactic) and has dramatic scenes and dialogue; it is not operatic.",
      PK),
    // 22 (paper 30)
    q(OT + "The words of Iago made Othello",
      ["jealous", "angry", "proud", "weak"], A,
      "Iago's hints and lies convince Othello that Desdemona is unfaithful with Cassio, filling him with the jealousy that destroys him.",
      OTt),
    // 23 (paper 31)
    q(PO + "The \"dinner\" in Gbanabom Hallowell's The Dining Table is a metaphor for",
      ["war", "death", "power", "politics"], A,
      "Tonight's dinner 'comes with gun wounds': the meal served at the table is the Sierra Leone civil war and its violence.",
      { setText: 'Gbanabom Hallowell, The Dining Table' }),
    // 24 (paper 32)
    q(PO + "Tennyson's Crossing the Bar represents death as",
      ["lovely", "inevitable", "bad", "pitiful"], B,
      "The poem presents death calmly as a natural, inevitable journey, the tide carrying the soul out to sea to meet the Pilot (God).",
      CB),
    // 25 (paper 33)
    q(PO + "Gabriel Okara's Piano and Drums depicts",
      ["cultural clash", "influence of culture", "African way as supreme", "Western way as inferior"], A,
      "The jungle drums (African culture) and the piano (Western culture) pull the speaker in two directions, leaving him 'lost in the labyrinth': a clash of cultures.",
      PD),
    // 26 (paper 34)
    q("William Shakespeare's \"Shall I compare thee to a summer's day?\" ends with a",
      ["quatrain", "couplet", "heroic couplet", "tercet"], B,
      "Like every Shakespearean sonnet, Sonnet 18 ends with a rhyming couplet: 'So long as men can breathe or eyes can see, / So long lives this, and this gives life to thee.'",
      { keyVerdict: 'multiple', alsoAccept: [C], answerNote: "Both B and C are right. The sonnet ends with a rhyming couplet (B), and because its two lines are rhymed iambic pentameter, that couplet is also a heroic couplet (C)." }),
    // 27 (paper 35)
    q("In comparing the beauty of his lover in \"Shall I compare thee to a summer's day?\", Shakespeare employs all but one of the following",
      ["apostrophe", "imagery", "hyperbole", "allegory"], D,
      "The sonnet addresses the beloved directly (apostrophe), uses summer images and exaggerates ('thy eternal summer shall not fade'), but it is not an allegory."),
    // 28 (paper 36)
    q("He put himself in uniform, made one for his five-year-old son, and marched with the infant from dawn till noon every market day, on the main road singing 'Kayiwawa beturi...\n\nThe persona in the excerpt above is portrayed as",
      ["energetic", "a policeman", "a soldier", "abnormal"], D,
      "A grown man who dresses himself and a small child in uniform and marches up and down the main road for hours every market day, singing, is behaving strangely: he is portrayed as abnormal."),
    // 29 (paper 37)
    q("'He is a faithful liar.'\nThe above is an example of",
      ["epigram", "oxymoron", "euphemism", "antithesis"], B,
      "'Faithful' and 'liar' contradict each other, yet are placed side by side: an oxymoron."),
    // 30 (paper 38)
    q("'You\nYour head is like a drum that is beaten for spirits.\nYou\nYour ears are like the fans used for blowing fire.'\nThe lines above are a good example of",
      ["caricature", "ridicule", "satire", "lampoon"], D,
      "The lines openly abuse a person by mocking his head and ears with insulting comparisons: a lampoon, a direct personal attack in verse."),
    // 31 (paper 39)
    q("'Come on and kill me. I do not care who kills who.'\nThe persona in the abstract above is",
      ["pessimistic", "audacious", "melancholic", "beckoning"], B,
      "The speaker dares others to kill him and shows no fear: he is bold and defiant, that is, audacious."),
    // 32 (paper 40)
    q("'Then the fish came alive, with his death in him.'\nErnest Hemingway, The Old Man and the Sea\n\nThe abstract above illustrates",
      ["metaphor", "hyperbole", "contrast", "paradox"], D,
      "The harpooned marlin leaps 'alive' while carrying 'his death in him': life and death in one moment, a statement that seems self-contradictory yet is true, which is a paradox."),
  ]);
})();
