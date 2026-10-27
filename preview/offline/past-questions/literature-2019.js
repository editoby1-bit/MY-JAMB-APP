/**
 * JAMB/UTME 2019 — LITERATURE-IN-ENGLISH
 * From the 2019 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Questions 1–15 and the set-text questions have no key and are answered from the texts and sound literary knowledge;
 * set-text questions that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2019;
  const SRC = 'JAMB UTME 2019';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const DB = "Ah, love, let us be true\nTo one another! For the world, which seems\nTo lie before us like a land of dreams,\nSo various, so beautiful, so new,\nHath really neither joy, nor love, nor light,\nNor certitude, nor peace, nor help for pain;\nAnd we are here as on a darkling plain\nSwept with confused alarms of struggle and flight,\nWhere ignorant armies clash by night.\n\n";
  const OT = "Based on William Shakespeare's Othello: \n";
  const NS = "Based on Richard Wright's Native Son: \n";
  const FA = "Based on Amma Darko's Faceless: \n";
  const LD = "Based on Bayo Adebowale's Lonely Days: \n";
  const HC = "Based on Frank Ogodo Ogbeche's Harvest of Corruption: \n";
  const SB = "Based on William Blake's The School Boy: \n";
  const PU = "Based on George Herbert's The Pulley: \n";
  const AH = "Based on Kofi Awoonor's The Anvil and the Hammer: \n";
  const AM = "Based on Gbemisola Adeoti's Ambush: \n";
  const PK = "Based on William Morris's The Proud King: \n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 1)
    q(DB + "A dominant theme of this poem is",
      ["the deceitful nature of man", "irony of life", "the essence of truthfulness", "the essence of love"], D,
      "The speaker turns to his beloved, 'Ah, love, let us be true / To one another!', because love and faithfulness are the only refuge in a world that only seems beautiful.",
      { keyVerdict: 'multiple', alsoAccept: [B], answerNote: "Both D and B are right. The extract is a plea for love and faithfulness as the one thing left (D), and it rests on the irony that the world which 'seems' so beautiful 'hath really neither joy, nor love, nor light' (B)." }),
    // 2 (paper 2)
    q(DB + "In lines 2 to 5, one dominant technique of the poet is",
      ["allegory", "repetition", "parallelism", "contrast"], D,
      "Lines 2 to 5 set what the world 'seems' (a beautiful land of dreams) against what it 'really' has (neither joy, nor love, nor light): a contrast.",
      { keyVerdict: 'multiple', alsoAccept: [B], answerNote: "Both D and B are right. The lines are built on the contrast between how the world 'seems' and what it 'really' has (D), and they also repeat 'so ... so ... so' and 'neither ... nor ... nor' (B)." }),
    // 3 (paper 3)
    q(DB + "The poet's attitude seems to be",
      ["altruistic", "indifferent", "pessimistic", "optimistic"], C,
      "The poet sees a world without joy, love, light, certitude, peace or help for pain, a 'darkling plain' of 'ignorant armies': a pessimistic view."),
    // 4 (paper 4)
    q(DB + "Line 3 can be an example of",
      ["alliteration and simile", "assonance and simile", "pun and simile", "simile and repetition"], A,
      "'To lie before us like a land of dreams' repeats the l sound in lie, like, land (alliteration) and compares the world to a land of dreams with 'like' (simile)."),
    // 5 (paper 5)
    q(DB + "Certitude in line 6 means the same as",
      ["assurance", "beatitudes", "satisfaction", "certification"], A,
      "Certitude means certainty, a firm feeling of being sure: assurance."),
    // 6 (paper 6)
    q(DB + "The obvious figure of speech employed in line 1 is",
      ["apostrophe", "personification", "symbolism", "imagery"], A,
      "'Ah, love, let us be true' is a direct, emotional address to the beloved, marked by 'Ah': apostrophe."),
    // 7 (paper 7)
    q("Like the dew in the morning\nLike the sun in the noon\nYou're always here.\n\nThe figure of speech in the lines above is",
      ["personification", "metaphor", "simile", "apostrophe"], C,
      "The person addressed is compared to the dew and the sun using 'like': simile."),
    // 8 (paper 8)
    q("A speech given by a character on stage to reveal his thought is",
      ["dramatic monologue", "aside", "soliloquy", "dialogue"], C,
      "A soliloquy is a speech in which a character, alone on stage, speaks his thoughts aloud so that the audience learns what is in his mind."),
    // 9 (paper 9)
    q("The form of writing that tells stories of heroes and heroines with valiant deeds is",
      ["epic", "myth", "prologue", "tragedy"], A,
      "An epic is a long narrative poem in an elevated style about the brave deeds of heroes, such as Homer's Iliad or the Sundiata epic."),
    // 10 (paper 10)
    q("The following are types of plot except",
      ["simple", "episodic", "organic", "independent"], D,
      "Plots are described as simple or complex, episodic (loosely linked episodes) or organic (tightly linked by cause and effect); 'independent' is not a type of plot."),
    // 11 (paper 11)
    q("Metaphysical poetry has all but one of the elements",
      ["conceit", "imagery", "wit", "simile"], D,
      "Metaphysical poetry is marked by the far-fetched conceit, wit and striking intellectual imagery; the simple simile is not one of its defining elements."),
    // 12 (paper 12)
    q("The use of an object to represent something else is",
      ["metaphor", "personification", "symbolism", "alliteration"], C,
      "Symbolism is the use of an object to stand for an idea or something else, e.g. a dove for peace."),
    // 13 (paper 13)
    q("A speech by a single character on stage when there are no other characters with him is",
      ["aside", "soliloquy", "monologue", "dialogue"], B,
      "A soliloquy is spoken by a character alone on stage; a monologue is a long speech by one character that others may hear."),
    // 14 (paper 14)
    q("The figure of speech that deals with implicit method of comparison is",
      ["metaphor", "simile", "imagery", "allegory"], A,
      "A metaphor compares two unlike things implicitly, without 'like' or 'as' (e.g. 'Life is a journey'); a simile compares them openly."),
    // 15 (paper 15)
    q("Metaphysical poetry was popular in the ______ century.",
      ["15th", "16th", "17th", "18th"], C,
      "The metaphysical poets, John Donne, George Herbert, Andrew Marvell and Henry Vaughan, flourished in the seventeenth century."),
    // 16 (paper 16)
    q(OT + "Desdemona is killed by",
      ["Iago", "Othello", "Roderigo", "Cassio"], B,
      "Deceived by Iago into believing she is unfaithful with Cassio, Othello smothers Desdemona in her bed in the final scene.",
      { setText: 'William Shakespeare, Othello' }),
    // 17 (paper 17)
    q(NS + "Native Son depicts ______ in American society.",
      ["capitalism", "communism", "racism", "communality"], C,
      "Native Son shows how racism in 1930s Chicago shapes the fear, poverty and crimes of Bigger Thomas, a young Black man.",
      { setText: 'Richard Wright, Native Son' }),
    // 18 (paper 18)
    q(FA + "The dominant theme is",
      ["parental neglect", "poverty", "child abuse", "rape"], A,
      "Faceless traces how children like Fofo and Baby T end up on the streets of Accra because their parents, Maa Tsuru and the men in her life, fail to care for them: parental neglect is the root of the story.",
      { setText: 'Amma Darko, Faceless' }),
    // 19 (paper 19)
    q(LD + "The novel portrays all but one of the following",
      ["sorrow of widowhood", "superstitious beliefs", "dehumanization of women", "love for lonely women"], D,
      "Lonely Days shows Yaremi's grief as a widow, the superstitious widowhood rites of her village and the dehumanising treatment of women; it does not portray love for lonely women.",
      { setText: 'Bayo Adebowale, Lonely Days' }),
    // 20 (paper 21)
    q(HC + "The play is all but one of the following",
      ["satire", "allegory", "play", "fable"], D,
      "Harvest of Corruption is a play that satirises corruption in Nigeria, and its characters stand for real types in society (allegory); it is not a fable, a short moral tale usually with animal characters.",
      { setText: 'Frank Ogodo Ogbeche, Harvest of Corruption' }),
    // 21 (paper 22)
    q(SB + "The poem is a ______ form of writing.",
      ["romance", "Romantic", "metaphysical", "lyrical"], B,
      "Blake is one of the first English Romantic poets, and The School Boy, from Songs of Innocence and of Experience, is a short lyric spoken in the first person.",
      { setText: 'William Blake, The School Boy', keyVerdict: 'multiple', alsoAccept: [D], answerNote: "Both B and D are right. The School Boy belongs to the Romantic movement, with its love of nature and childhood freedom (B), and it is a short musical poem expressing the speaker's own feelings, a lyric (D)." }),
    // 22 (paper 24)
    q(PU + "The poem represents God as the ______.",
      ["ultimate giver of all", "creature", "lovely one", "restlessness"], A,
      "God pours out on man his 'glass of blessings': strength, beauty, wisdom, honour and pleasure. He is the giver of all, keeping back only rest.",
      { setText: 'George Herbert, The Pulley' }),
    // 23 (paper 25)
    q(AH + "In the poem, the Anvil represents",
      ["African culture", "Western culture", "schools", "Goldsmith's instrument"], A,
      "The persona is caught between the anvil, the African tradition he was born into, and the hammer, the Western culture that strikes and reshapes it.",
      { setText: 'Kofi Awoonor, The Anvil and the Hammer' }),
    // 24 (paper 28)
    q(AM + "The 'Land' in the poem represents",
      ["political leaders", "citizens", "police", "student"], A,
      "The 'land' that lies in ambush, like the whale, the tiger and the hawk, stands for the selfish rulers who prey on the people's hopes and the nation's wealth.",
      { setText: 'Gbemisola Adeoti, Ambush' }),
    // 25 (paper 30)
    q(PK + "The proud king is guilty of",
      ["jealousy", "pride", "wealth", "love"], B,
      "King Jovinian is so proud that he thinks himself equal to God, so God humbles him by letting an angel take his place until he repents.",
      { setText: 'William Morris, The Proud King' }),
    // 26 (paper 31)
    q("A fable is otherwise known as",
      ["eclogue", "apologue", "parable", "anecdote"], B,
      "An apologue is a short moral story, often with animal characters: another name for a fable."),
    // 27 (paper 32)
    q("Characterization takes into consideration the following except",
      ["physical description of a character", "character's speech, thought and actions", "the speech, thought and action of other characters", "where and when a story takes place"], D,
      "Where and when a story takes place is the setting, not characterisation."),
    // 28 (paper 33)
    q("In plot, exposition does the following except",
      ["sets the tone", "introduces the characters", "concludes the story", "establishes the setting"], C,
      "The exposition is the opening of the plot: it introduces characters, setting and tone. The story is concluded in the resolution (denouement)."),
    // 29 (paper 34)
    q("A literary work in which characters and events are used to represent certain abstract qualities is known as",
      ["parable", "allegory", "parody", "anecdote"], B,
      "In an allegory, characters and events stand for abstract ideas, as in Bunyan's The Pilgrim's Progress or Orwell's Animal Farm."),
    // 30 (paper 35)
    q("Which of the following is not a quality of an epic?",
      ["It has a serious tone", "Some characters are supernatural", "The length is long", "It is written in iambic pentameter"], D,
      "An epic is long, serious and often includes gods or supernatural beings, but it has no fixed metre: classical epics use dactylic hexameter."),
    // 31 (paper 36)
    q("Thou still unravish'd bride of quietness,\nThou foster-child of silence and slow time.\n\nThe figure of sound used in the extract above is",
      ["onomatopoeia", "alliteration", "consonance", "assonance"], D,
      "The long 'i' vowel sound recurs in quietness, child, silence and time: assonance.",
      { keyVerdict: 'multiple', keyAnswer: 'D', alsoAccept: [B], answerNote: "Both D and B are right. The long 'i' vowel recurs in quietness, child, silence and time (assonance, D), and 'silence and slow' begin with the same s sound (alliteration, B)." }),
    // 32 (paper 37)
    q("Swans sing before they die — 'twere no bad thing\nShould certain people die before they sing!\n\nThe lines above represent",
      ["an epigram", "a limerick", "a rhetorical question", "a parallelism"], A,
      "A short, witty, pointed poem that ends with a sting is an epigram; this one is by S. T. Coleridge."),
    // 33 (paper 38)
    q("Come on and kill me. I do not care who kills who.\n\nThe persona in the extract above is",
      ["pessimistic", "audacious", "melancholic", "beckoning"], B,
      "Daring someone to kill him and not caring who kills whom shows a bold, fearless, defiant persona: audacious."),
    // 34 (paper 39)
    q("Then the fish came alive, with his death in him.\nErnest Hemingway, The Old Man and the Sea\n\nThe extract above illustrates",
      ["metaphor", "hyperbole", "contrast", "paradox"], D,
      "A dying fish 'came alive, with his death in him': life and death joined in one statement that seems contradictory but is true. That is a paradox."),
    // 35 (paper 40)
    q("Our people must go home, father. No swimmer, however good, can swim beyond the river of the world. This world's journey has ended in catastrophe for us. Without your help we can no longer find our way back in the void.\nFemi Osofisan, Women of Owu\n\nThe extract above confirms",
      ["a necessity", "an impossibility", "an acknowledgement", "an identity"], A,
      "The speaker insists that 'our people must go home' and that without the ancestor's help they cannot: it confirms a necessity."),
  ]);
})();
