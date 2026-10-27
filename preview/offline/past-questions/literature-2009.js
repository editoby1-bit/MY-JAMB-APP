/**
 * JAMB/UTME 2009 — LITERATURE-IN-ENGLISH
 * From the 2009 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2009;
  const SRC = 'JAMB UTME 2009';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const SD = "Based on J.C. de Graft's Sons and Daughters: \n";
  const RJ = "Based on William Shakespeare's Romeo and Juliet: \n";
  const NE = "Based on George Orwell's Nineteen Eighty-Four: \n";
  const OM = "Based on Ferdinand Oyono's The Old Man and the Medal: \n";
  const JM = "Based on Buchi Emecheta's The Joys of Motherhood: \n";
  const PO = "Based on the prescribed poems: \n";
  const RJX = "'... So tedious is this day\nAs is the night before some festival\nTo an impatient child that hath new robes\nAnd may not wear them.'\n\n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 2)
    q(SD + "James Ofosu's desire is to see Maanan trained as",
      ["a choreographer", "an attorney", "an accountant", "a surgeon"], B,
      "James wants his two youngest children in 'respectable' professions: Aaron in engineering and Maanan in law, while she herself wants to dance.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 2 (paper 3)
    q(SD + "The plot of the play is",
      ["linear", "cyclical", "complicated", "episodic"], A,
      "The events follow one another in time order, from the family quarrel over careers to James's change of heart: a linear plot.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 3 (paper 4)
    q(SD + "What causes the strained relationship between James and Lawyer Bonu?",
      ["Betrayal of trust", "Standard of education", "Working experience", "Family differences"], A,
      "Bonu is James's trusted friend and adviser, yet he makes advances to James's daughter Maanan: a betrayal of trust.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 4 (paper 5)
    q(SD + "'Now look what we have: a permanent bloom of ugly paper flowers!'\nThe device used by Aaron in the excerpt above is",
      ["suspense", "rhetorical question", "oxymoron", "allegory"], C,
      "A bloom is by nature short-lived and flowers are meant to be beautiful, so 'permanent bloom' of 'ugly ... flowers' joins contradictory ideas: an oxymoron.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 5 (paper 7)
    q(RJ + RJX + "What makes Juliet's night so tedious is the",
      ["murder of Tybalt by Romeo", "arranged marriage between her and Paris", "eagerness to be married to Romeo", "unconsummated marriage with Romeo"], D,
      "Juliet has married Romeo secretly that day and is longing for night, when he will come to her; until then the marriage is unconsummated.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 6 (paper 8)
    q(RJ + RJX + "The literary device used in the excerpt is",
      ["euphemism", "simile", "sarcasm", "bathos"], B,
      "The day is compared to the night before a festival using 'as': 'So tedious is this day / As is the night before some festival'. That is a simile.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 7 (paper 9)
    q(RJ + "The atmosphere of tragedy in the play is created through the use of",
      ["dreams and foreboding", "fights and quarrels", "wars and hatred", "ideas and dramatization"], A,
      "Romeo's misgiving that 'some consequence yet hanging in the stars' will end his life, his dreams and Juliet's 'ill-divining soul' fill the play with a sense of coming doom.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 8 (paper 10)
    q(RJ + "Shakespeare depicts love and idealism through the",
      ["party at the Capulets'", "lovers' tomb at the end", "brawl between Romeo and Tybalt", "balcony scene in the second Act"], D,
      "In the balcony scene (Act 2, Scene 2) the lovers declare their love in some of the most idealistic poetry in the play.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 9 (paper 11)
    q(NE + "In the novel, the Party approves separation of couples only",
      ["on condition of infidelity", "where there are no children", "in situations of irreconcilable differences", "on the death of one of the couples"], B,
      "Winston recalls that the Party did not permit divorce but encouraged separation where there were no children, as with him and Katharine.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 10 (paper 12)
    q(NE + "One of the themes of the novel is",
      ["colonialism", "repression", "senility", "destruction"], B,
      "The Party watches, controls and punishes every thought and act of its members: repression is a central theme.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 11 (paper 13)
    q(NE + "Newspeak, the official language of Oceania, is devised to",
      ["meet the ideological needs of Ingsoc", "help devoted party men and women", "provide a medium of expression for world-view only", "assist by cutting the choice of words for party members"], A,
      "Newspeak exists to serve Ingsoc: to give expression to the Party's world-view and make all other ways of thinking impossible.",
      { setText: 'George Orwell, Nineteen Eighty-Four', keyVerdict: 'multiple', alsoAccept: [C], answerNote: "Both A and C are right. The novel's appendix says the purpose of Newspeak was to provide a medium of expression for the world-view proper to followers of Ingsoc and to make all other modes of thought impossible: that meets Ingsoc's ideological needs (A) and is a medium for that world-view only (C). D describes how the purpose was helped along, not why the language was devised." }),
    // 12 (paper 14)
    q(NE + "The main concern of Winston in the novel is to",
      ["take power for himself", "acquire wealth", "overthrow the Party", "bring social change"], C,
      "Winston hates Big Brother and joins what he believes is the Brotherhood, a secret movement dedicated to bringing down the Party.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 13 (paper 15)
    q(OM + "'We are here to die of rage! Say die of rage because this time the uncircumcised have gone too far...'\nThe word 'uncircumcised' in the statement above by Nti refers to",
      ["Nua and Mvondo", "the whites", "the people of Doum", "the white farmers"], B,
      "The Africans of Doum scornfully call the white colonisers 'the uncircumcised'; Nti is raging at what the whites have done to Meka.",
      { setText: 'Ferdinand Oyono, The Old Man and the Medal' }),
    // 14 (paper 16)
    q(OM + "The only two sons of Meka die fighting for",
      ["independence", "the colonialists", "the church", "their people"], B,
      "Meka's two sons were killed in the war fighting in the French army: they died for the colonial masters.",
      { setText: 'Ferdinand Oyono, The Old Man and the Medal' }),
    // 15 (paper 19)
    q(JM + "In the society of Nwokocha Agbadi, a man's social rating is determined by his",
      ["oratorical power", "physical prowess", "gentleness", "altruistic actions"], B,
      "Agbadi is a great wrestler, and in his day a man's standing depended on his physical strength, so people accepted him as a leader.",
      { setText: 'Buchi Emecheta, The Joys of Motherhood' }),
    // 16 (paper 21)
    q(PO + "Thorn in Adeoti's 'Naked Soles' symbolizes",
      ["victory", "bleakness", "destruction", "suffering"], D,
      "The bare feet of the people dance through 'blooming thorns': the thorns stand for the pain and suffering they endure.",
      { setText: 'Gbemisola Adeoti, Naked Soles' }),
    // 17 (paper 24)
    q(PO + "'The silence of the battlefield heralds the widow's anguish'\nThe widow in the lines above in Launko's 'End of the War' is in anguish because of the",
      ["confirmation of her husband's death", "uncertainty over her husband returning alive", "delay in the husband's return from the battlefield", "death of all the soldiers in the battlefield"], A,
      "When the guns fall silent and the war is over, the soldier who does not come home is known to be dead: the silence confirms that the woman is now a widow.",
      { setText: 'Okinba Launko (Femi Osofisan), End of the War' }),
    // 18 (paper 26)
    q(PO + "In Marvell's 'To His Coy Mistress', the poet-persona tries to",
      ["build up the climax of expectation in women", "discuss how a woman labours hard", "meet the people's expectation in a religious adventure", "discuss the nature of man and the value of time"], D,
      "The speaker argues that life is short ('Time's wingèd chariot hurrying near'), so the lovers must seize the moment: the poem is about man's mortality and the value of time.",
      { setText: 'Andrew Marvell, To His Coy Mistress' }),
    // 20 (paper 28)
    q(PO + "In Lawrence's 'Bat', the poet's attitude to bats is one of",
      ["fear", "sarcasm", "contempt", "flattering"], C,
      "The speaker finds the bats disgusting, hanging 'like an old rag' upside down, and rejects them with 'Not for me!': contempt.",
      { setText: 'D.H. Lawrence, Bat' }),
    // 21 (paper 29)
    q(PO + "The first stanza of Eliot's 'Journey of the Magi' depicts the",
      ["hazards of the journey", "increment of fortune for the pilgrims", "blind acceptance of faith", "journey as an influential factor"], A,
      "The first stanza lists the hardships: 'A cold coming we had of it', the sore camels, the cities 'hostile' and the villages 'dirty and charging high prices'.",
      { setText: 'T.S. Eliot, Journey of the Magi' }),
    // 22 (paper 31)
    q("A poetic device in which an idea in a line runs into another is called",
      ["rhyme scheme", "enjambment", "end rhyme", "pathos"], B,
      "Enjambment is the running on of a sentence or idea from one line of verse into the next without a pause."),
    // 23 (paper 32)
    q("The use of sound pattern to suggest meaning in poetry is called",
      ["rhythm", "mimics", "lyric", "metonymy"], A,
      "Rhythm is the pattern of sounds (stressed and unstressed syllables) in a line, and poets use it to echo meaning: fast for excitement, slow for sorrow."),
    // 24 (paper 33)
    q("A conscious imitation of a literary work by another with the aim of ridicule is",
      ["mimesis", "performance", "mockery", "parody"], D,
      "A parody imitates the style of another work on purpose in order to mock it."),
    // 25 (paper 34)
    q("The use of gestures to communicate in drama is known as",
      ["burlesque", "soliloquy", "mime", "melodrama"], C,
      "Mime is acting through gestures, movement and facial expression without words."),
    // 26 (paper 35)
    q("A short and witty remark is",
      ["a limerick", "a tercet", "an epigram", "a litotes"], C,
      "An epigram is a short, clever saying, such as Wilde's 'I can resist everything except temptation.'"),
    // 27 (paper 36)
    q("An expression that signifies a whole through its significant parts is",
      ["synesthesia", "synecdoche", "metonymy", "allegory"], B,
      "Synecdoche names a part for the whole, as in 'all hands on deck' for all the sailors."),
    // 28 (paper 37)
    q("A structural arrangement of units of composition by which one element of equal importance with another is similarly placed is called",
      ["repetition", "paradox", "refrain", "parallelism"], D,
      "Parallelism places ideas of equal weight in the same grammatical pattern: 'I came, I saw, I conquered.'"),
    // 29 (paper 38)
    q("The pride that contributes to the fall of a tragic character in a play is known as",
      ["hamartia", "catharsis", "hubris", "epitasis"], C,
      "Hubris is the excessive pride or arrogance that leads a tragic hero to his downfall."),
    // 30 (paper 39)
    q("A metrical foot of two stressed or long syllables is called",
      ["a spondee", "a trochee", "an anapest", "an iamb"], A,
      "A spondee has two stressed syllables (DUM-DUM), as in 'heartbreak'."),
    // 31 (paper 40)
    q("A group of three lyric stanzas in classical Greek poetry is referred to as",
      ["triplet", "triolet", "trilogy", "triad"], D,
      "In the Greek (Pindaric) ode, the strophe, antistrophe and epode together form a group of three called a triad.",
      { bookletKey: 'C', bookletNote: "The booklet answer C, trilogy, is a set of three related plays or books (Greek tragedians entered trilogies of tragedies), not three stanzas. The strophe, antistrophe and epode of a Greek ode together make a triad, so D is right." }),
    // 32 (paper 41)
    q("Biokun: I did it for her! Let them laugh! Let them condemn me. I who have always derided superstition. I have gone back to the shrine of Olokun. At least if he dies, Oroki will know I tried everything.\nFemi Osofisan, No More the Wasted Breed\n\nBiokun's mood in this passage is one of",
      ["desperation", "frustration", "anger", "anxiety"], A,
      "Biokun, who always mocked superstition, has gone back to the shrine because he will 'try everything' to save the child: he is desperate."),
    // 33 (paper 42)
    q("'My song is the root\ntouching other roots\nin a covenant below the crust...'\nNiyi Osundare, Waiting Laughters\n\nThe imagery used in the second line of the extract above is",
      ["olfactory", "visual", "tactile", "auditory"], C,
      "'Touching other roots' appeals to the sense of touch: tactile imagery."),
    // 34 (paper 43)
    q("'The huge sacrifice that wards off death, the big offering that prevents diseases...'\nFemi Osofisan, Morountodun\n\nThe poem above can best be described as",
      ["epic", "heroic", "praise", "quatrain"], C,
      "The lines heap honorific names on their subject, in the style of Yoruba oriki: they are praise poetry.",
      { keyVerdict: 'corrected', keyAnswer: 'A', answerNote: "The answer often given is A, epic, perhaps because the play retells the heroic legend of Moremi. But an epic is a long narrative poem about heroic deeds, and these lines tell no story: they pile up praise names ('the huge sacrifice that wards off death, the big offering that prevents diseases') in the manner of oriki. That makes them praise poetry, C." }),
    // 35 (paper 44)
    q("Why blame he who denies love for the asking and not the birds and moths and beetles that after deep draughts from rich nectar wells flee the drained petals to virgin flowers.\n\nThe lines above are an indictment of",
      ["adultery", "gluttony", "flirtation", "infertility"], C,
      "The birds and insects drink from one flower and fly off to fresh 'virgin flowers': lovers who move from partner to partner, that is, flirtation."),
    // 36 (paper 45)
    q("Oh, the market is set like the hub of a wheel and it pulls like a magnet strong, it is easy to tell how it casts its spell and draws all the crowds along.\n\nThe sound device used in the extract above is",
      ["rhyme", "alliteration", "emphasis", "assonance"], D,
      "The vowel sound in 'set', 'tell' and 'spell' is repeated: assonance. Those words, with 'strong' and 'along', also rhyme.",
      { keyVerdict: 'multiple', alsoAccept: [A], keyAnswer: 'D', answerNote: "Both A and D are right. The short 'e' vowel is repeated in 'set', 'tell' and 'spell' (assonance), and the lines also rhyme: 'tell' with 'spell' inside the line and 'strong' with 'along'." }),
    // 37 (paper 46)
    q("A reference beyond the immediate purview of what is being presented is known as",
      ["allusion", "diversion", "inversion", "imagery"], A,
      "An allusion is a brief reference to a person, place, event or text outside the work itself.",
      { bookletKey: 'D', bookletNote: "The booklet answer D, imagery, is language that appeals to the senses; it does not point outside the work. A reference to something beyond what is being presented, such as calling a traitor 'a Judas', is an allusion, so A is right." }),
    // 38 (paper 47)
    q("'The hoe is her barber'\nThe line above is an example of",
      ["metaphor", "hyperbole", "personification", "litotes"], C,
      "The hoe is given a human job, that of a barber who 'shaves' her: personification, expressed as a direct metaphor.",
      { keyVerdict: 'multiple', alsoAccept: [A], keyAnswer: 'C', answerNote: "Both A and C are right. The line says the hoe IS a barber with no 'like' or 'as', which is a metaphor (A), and in doing so it gives the tool a human role, which is personification (C)." }),
    // 39 (paper 48)
    q("'From the sky suspended the strings of tattered pants marched a trembling feet under stone heavy-kits marched, on their breast scared, monogram of skulls and bones.'\nOssie Enekwe, Mass for the Dead\n\nThe subject matter of the extract above is",
      ["wastage", "war", "love", "hatred"], B,
      "Marching feet, heavy kits and the skull-and-bones badge on their breasts picture soldiers going to fight: the subject is war."),
    // 40 (paper 49)
    q("'Tonderai was assisted by the villagers in placing his trunk box into the back of the car and he got into the passenger side of the truck. Initially, he was a bit nervous and clearly uncomfortable, his young mind was asking how someone whom he had almost caused a serious accident could be his benefactor.'\nDaniel T. Manyika, Two Worlds Apart\n\nThe narrative point of view used in the extract above can best be described as",
      ["omniscient", "subjective", "panoramic", "scenic"], A,
      "A third-person narrator tells the story ('he', 'his') and also reveals what is going on in Tonderai's 'young mind': the omniscient point of view."),
    // 41 (paper 50)
    q("'Me to the Orangery solitude invites, a wagtail, to tell the tangled-wood-tale'\nChristopher Okigbo, Heavensgate\n\nThe complexity of the poem can be ascribed to the poet's use of",
      ["archaic diction", "structural inversion", "compound words", "extended metaphor"], C,
      "Coinages such as 'tangled-wood-tale' pack several ideas into one word, and the inverted word order ('Me to the orangery solitude invites') adds to the difficulty.",
      { keyVerdict: 'multiple', alsoAccept: [B], keyAnswer: 'C', answerNote: "Both B and C are right. The compound 'tangled-wood-tale' makes the lines dense (C), and the word order is inverted: in plain English, 'Solitude invites me, a wagtail, to the orangery to tell the tangled-wood-tale' (B)." }),
  ]);
})();
