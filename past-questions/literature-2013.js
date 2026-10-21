/**
 * JAMB/UTME 2013 — LITERATURE-IN-ENGLISH
 * From the 2013 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2013;
  const SRC = 'JAMB UTME 2013';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const SD = "Based on J.C. de Graft's Sons and Daughters: \n";
  const RJ = "Based on William Shakespeare's Romeo and Juliet: \n";
  const OM = "Based on Ferdinand Oyono's The Old Man and the Medal: \n";
  const NE = "Based on George Orwell's Nineteen Eighty-Four: \n";
  const PO = "Based on the prescribed poems: \n";
  const SDt = { setText: 'J.C. de Graft, Sons and Daughters' };
  const RJt = { setText: 'William Shakespeare, Romeo and Juliet' };
  const OMt = { setText: 'Ferdinand Oyono, The Old Man and the Medal' };
  const NEt = { setText: 'George Orwell, Nineteen Eighty-Four' };
  const SUN = "'Busy old fool, unruly sun,\nWhy dost thou thus,\nThrough windows, and through curtains call on us?'\nJ. Donne, The Sun Rising\n\n";
  const REAPER = "'Will no one tell me what she sings?\nPerhaps the plaintive numbers flow\nFor old, unhappy, far-off things,\nAnd battles long ago.\nOr is it some more humble lay,\nFamiliar matter of today?'\n\n";
  const BODY = "'The body perishes, the heart stays young.\nThe platter wears away with serving food.\nNo log retains its bark when old,\nNo lover peaceful while the rival weeps.'\n\n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 2)
    q(SD + "James: Let me swear, woman. And I will swear by my father's coffin that if....\n\nThe lines depict James as a",
      ["traditionalist", "Christian", "pagan", "Muslim"], A,
      "Swearing an oath by one's dead father (his coffin) is a traditional African way of making a solemn promise, so the lines show James as a traditionalist.",
      SDt),
    // 2 (paper 4)
    q(SD + "Aaron: '...All I need really is a place in an Art school, engineering can go hang itself.'\n\nThe dominant figure of speech in the excerpt above is",
      ["metonymy", "synecdoche", "personification", "metaphor"], C,
      "Engineering, a profession, is spoken of as if it were a person who could 'go hang itself': personification.",
      SDt),
    // 3 (paper 5)
    q(SD + "From the play, the character of Aaron represents the",
      ["painters", "art work", "new generation", "old generation"], C,
      "Aaron, who wants to study art against his father's wishes, stands for the new generation in the play's conflict between parents and children.",
      SDt),
    // 4 (paper 6)
    q(RJ + "'Uncle, this is a Montague, our foe;\nA villain that is hither come in spite,\nTo scorn at our solemnity this night.'\n\nThe villain in the excerpt above is",
      ["attempting to steal", "attending a feast uninvited", "engaging in a shouty match", "holding a sword to commit murder"], B,
      "Tybalt complains to Capulet that Romeo, a Montague, has come uninvited to the Capulet feast.",
      RJt),
    // 5 (paper 7)
    q(RJ + "'What, drawn, and talk of peace? I hate the word,\nAs I hate hell, all Montagues, and thee.\nHave at thee, coward!'\n\nThe lines above reveal the speaker as a",
      ["violence seeker", "peace maker", "real Montague", "trouble shooter"], A,
      "Tybalt, a Capulet, scorns Benvolio's talk of peace and attacks him: he is a violence seeker.",
      RJt),
    // 6 (paper 8)
    q(RJ + "Romeo's mood at the beginning of the play can be described as",
      ["melancholic and sentimental", "dreamy and hopeful", "frustrated and pensive", "gay and elated"], A,
      "At the start Romeo is lovesick for Rosaline, who rejects him: he shuts himself away, sighs and weeps, melancholic and sentimental.",
      RJt),
    // 7 (paper 9)
    q(RJ + "'O deadly sin! O rude unthankfulness!\nThy fault our law calls death, but the kind Prince,\nTaking thy part, hath rushed aside the law,\nAnd turned that black word \"death\" to banishment.'\n\nThe speaker in the passage above is",
      ["Lord Montague", "Friar Lawrence", "Apothecary", "Lord Capulet"], B,
      "Friar Lawrence scolds Romeo in his cell for calling banishment worse than death, when the Prince has spared his life.",
      RJt),
    // 8 (paper 10)
    q(RJ + "'...Put up thy sword,\nOr manage it to part these men with me.'\n\nThe speech above was made when",
      ["Tybalt challenges Romeo to duel", "Prince Escalus arrives to make peace between the families", "Romeo and Paris engaged themselves in a fight", "Benvolio tries to separate the servants of the feuding families"], D,
      "In the opening scene Benvolio tries to stop the brawl between the Capulet and Montague servants and asks Tybalt to help him part them.",
      RJt),
    // 9 (paper 13)
    q(OM + "To the white men, the medal that is given to Meka symbolizes",
      ["harmonious relationship", "love", "peace", "friendship"], D,
      "At the ceremony the white Chief presents the medal as a sign of friendship, saying that the whites and Meka's people are 'more than friends'.",
      OMt),
    // 10 (paper 17)
    q(NE + "The Ministry of Love is concerned with",
      ["peace and freedom", "torture and pain", "joy and peace", "hatred and pain"], B,
      "Despite its name, the Ministry of Love is where the Party imprisons and tortures its enemies, as Winston learns in Room 101.",
      NEt),
    // 11 (paper 18)
    q(NE + "The instruments of power and torture belong to",
      ["the government", "the party", "the thought police", "individuals"], B,
      "In Oceania all power, including the Thought Police and the Ministry of Love, belongs to the Party.",
      NEt),
    // 12 (paper 19)
    q(NE + "The action in the novel is built around",
      ["Winston Smith", "O'Brien", "Julia", "Big Brother"], A,
      "Winston Smith is the protagonist: the story follows his rebellion, his love affair with Julia, his arrest and his breaking.",
      NEt),
    // 13 (paper 20)
    q(NE + "Winston Smith works in the Records Department of the Ministry of",
      ["love", "truth", "peace", "plenty"], B,
      "Winston works in the Records Department of the Ministry of Truth, rewriting old newspaper articles to fit the Party's current line.",
      NEt),
    // 14 (paper 22)
    q(PO + "Rubadiri's An African Thunderstorm can be described as",
      ["didactic", "dramatic", "traditional", "satirical"], B,
      "The poem builds up the approaching storm with movement, suspense and excitement, like a scene acted out: it is dramatic.",
      { setText: 'David Rubadiri, An African Thunderstorm' }),
    // 15 (paper 24)
    q(PO + "'Let me ask for what reason or rhyme women refuse to marry?\nWoman cannot exist except by man,\nwhat is there in that to vex some of them so?'\n\nThe lines above from Give Me The Minstrel's Seat is an example of",
      ["pathetic fallacy", "chiasmus", "ironical statement", "rhetorical question"], D,
      "The speaker asks questions not to get an answer but to make a point: rhetorical questions.",
      { setText: "Give Me the Minstrel's Seat (prescribed poem)" }),
    // 16 (paper 25)
    q(PO + "'Time's winged chariot'\n\nThe line above from Marvell's To His Coy Mistress depicts",
      ["how fast time flies", "the usefulness of time", "the measurement of time", "how fast events unfold"], A,
      "Time is pictured as a chariot with wings hurrying near: time flies fast, so the lovers must not delay.",
      { setText: 'Andrew Marvell, To His Coy Mistress' }),
    // 17 (paper 26)
    q(PO + "Lawrence's Bat opens with the description of the",
      ["scene", "creatures", "bats", "scenery"], D,
      "The poem opens with the evening landscape seen from a terrace in Florence: the sun setting beyond Pisa and the mountains of Carrara, the river and the bridge.",
      { keyVerdict: 'multiple', alsoAccept: [A], answerNote: "Both D and A are accepted. The poem opens by describing the evening landscape at Florence (the scenery), which is also the scene in which the bats appear.", setText: 'D.H. Lawrence, Bat' }),
    // 18 (paper 27)
    q(PO + "The theme of Eliot's Journey of the Magi is",
      ["quest for salvation", "escape from persecution", "nature", "journey"], A,
      "The wise men's hard journey to the birth of Christ stands for the painful search for salvation and spiritual rebirth.",
      { setText: 'T.S. Eliot, Journey of the Magi' }),
    // 19 (paper 31)
    q("A device used by a writer to recall past events in a literary work is",
      ["interlude", "anti-climax", "flashback", "foreshadowing"], C,
      "A flashback interrupts the story to show events that happened earlier."),
    // 20 (paper 32)
    q("A paragraph in prose is equivalent to a",
      ["trope in poetry", "verse in poetry", "stanza in poetry", "meter in poetry"], C,
      "A stanza is a group of lines that forms a unit in a poem, as a paragraph is a unit of sentences in prose."),
    // 21 (paper 33)
    q("A fable is a brief narrative illustrating wisdom and",
      ["urgency", "origin", "custom", "truth"], D,
      "A fable is a short story, usually with animal characters, that teaches a moral truth or piece of wisdom."),
    // 22 (paper 34)
    q("A device used in poetry to achieve emphasis or stress a point is known as",
      ["rhyme", "assonance", "repetition", "alliteration"], C,
      "Repeating a word, line or idea is the poet's main way of emphasising a point."),
    // 23 (paper 35)
    q("A literary work that ridicules the shortcomings of people or ideas is",
      ["a masque", "a satire", "an irony", "a fable"], B,
      "Satire uses humour, irony and exaggeration to ridicule the faults of people, ideas or society."),
    // 24 (paper 36)
    q("The figure of speech in which the writer means the exact opposite of what he says is",
      ["satire", "irony", "paradox", "metaphor"], B,
      "Verbal irony is saying one thing while meaning the opposite."),
    // 25 (paper 37)
    q("Action without speech in a play is",
      ["soliloquy", "aside", "epilogue", "mime"], D,
      "Mime tells a story through gesture and movement alone, without words."),
    // 26 (paper 38)
    q("A literary work that teaches morals is said to be",
      ["impressive", "didactic", "instructive", "corrective"], B,
      "Didactic is the literary term for a work written to teach a moral lesson."),
    // 27 (paper 39)
    q("A mistake committed by the hero which leads to his downfall is known as",
      ["comic relief", "terse", "climax", "tragic flaw"], D,
      "The tragic flaw (hamartia) is the error or weakness in the hero that brings about his downfall."),
    // 28 (paper 40)
    q("The speech made by a character to himself on stage is",
      ["monologue", "epilogue", "aside", "soliloquy"], D,
      "In a soliloquy a character alone on stage speaks his thoughts aloud, as if to himself."),
    // 29 (paper 41)
    q("'Woman as a clam, on the sea's crescent\nI saw your jealous eye quench the sea's\nFluorescence, dance on the pulse incessant.'\nWole Soyinka, Night\n\nThe lines above suggest that women are",
      ["magicians", "covetous", "dogmatic", "seers"], B,
      "The 'jealous eye' that puts out the sea's brightness shows envy, a desire for what belongs to another: covetousness."),
    // 30 (paper 42)
    q(SUN + "The excerpt above suggests",
      ["praise of nature", "invitation to the sun", "welcoming the sun", "indictment of the sun"], D,
      "The speaker scolds the sun as a 'busy old fool' and 'unruly' for disturbing the lovers: he accuses (indicts) the sun."),
    // 31 (paper 43)
    q(SUN + "The figure of speech involved in the lines above is",
      ["simile", "personification", "epigram", "pun"], B,
      "The sun is treated as a person: a 'busy old fool' who is 'unruly' and calls on the lovers through windows and curtains."),
    // 32 (paper 44)
    q(REAPER + "The lines above show that the persona",
      ["does not understand the girl's language", "is so much in love with the girl", "so hates the words of the girl", "understands the girl's songs"], A,
      "The speaker asks 'Will no one tell me what she sings?' and can only guess at her subject: he does not understand her language."),
    // 33 (paper 45)
    q(REAPER + "The lines end in a literary device known as",
      ["transferred epithet", "rhetorical question", "irony", "conceit"], B,
      "The last lines, 'Or is it some more humble lay, / Familiar matter of today?', are a question the speaker asks without expecting an answer."),
    // 34 (paper 46)
    q("'Oh incomprehensible God!\nShall my pilot be\nMy inborn stars to that\nFinal call to thee...'\n\nThe literary device used in the first line is",
      ["passion", "apostrophe", "burlesque", "rhetoric"], B,
      "The speaker addresses God directly with 'Oh': apostrophe."),
    // 35 (paper 47)
    q("'Busy old fool, unruly sun,\nWhy dost thou thus...'\nJ. Donne, The Sun Rising\n\nFrom the lines above, the poet sees the sun as",
      ["a necessary evil", "a light provider", "illumination after darkness", "an unnecessary evil"], A,
      "The sun is needed by the world, but to the lovers it is a meddling nuisance that wakes them: a necessary evil."),
    // 36 (paper 48)
    q(BODY + "The theme of the poem above is",
      ["permanence of love", "decaying nature of wood", "non-peaceful nature of love", "diminishing nature of love"], A,
      "While the body, the platter and the log wear away, 'the heart stays young': feeling and love last when all else decays."),
    // 37 (paper 49)
    q(BODY + "'No lover peaceful while the rival weeps' means that",
      ["there is true and permanent love", "the two lovers weep together", "the pain of one lover is felt by the other", "there is no permanent love"], C,
      "The line ties the peace of one lover to the grief of the other: one cannot be at peace while the other suffers."),
    // 38 (paper 50)
    q("'Will college make you a better Olokun priest?\nWill it make you serve our ancestors better?\nLook at me. An able-bodied, strong-hearted priest of\nOlokun. Did I go to college?'\nGrace Osifo, Dizzy Angel\n\nThe literary device used in the passage above is",
      ["simile", "parallelism", "onomatopoeia", "metaphor"], B,
      "The questions repeat the same structure ('Will college make you...? Will it make you...?'): parallelism."),
  ]);
})();
