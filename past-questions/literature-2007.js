/**
 * JAMB/UTME 2007 — LITERATURE-IN-ENGLISH
 * From the 2007 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2007;
  const SRC = 'JAMB UTME 2007';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const PO = "Based on the prescribed poems: \n";
  const TESS = "Based on Thomas Hardy's Tess of the d'Urbervilles: \n";
  const FR = "Based on Ayi Kwei Armah's Fragments: \n";
  const ATT = "Based on Ahmed Yerima's Attahiru: \n";
  const HAM = "Based on William Shakespeare's Hamlet: \n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1
    q("'And the fountain of Tololo is an Oasis. It quenches the thirst of travellers. The myriad peaces of the mind fold their wings, for here too, growth emerges from sleep; From a beginning that was the end of an era.'\nMazisi Kunene, The Ancestors and the Sacred Mountain\n\nFrom the excerpt above, it can be said that the poet is being",
      ["illogical", "tautological", "paradoxical", "antithetical"], C,
      "'A beginning that was the end of an era' and 'growth emerges from sleep' seem self-contradictory but hold a truth: the poet is being paradoxical."),
    // 2
    q("'Emonewua: You it is who own me, and I speak by your permission. When I came home with my husband this morning, believing my mother was ill and needed nursing, I little knew I was walking into a house of ruin.'\nJ.P. Clark-Bekederemo, The Boat\n\nFrom the excerpt above, the speaker is",
      ["homeless", "a trained nurse", "bereaved", "recovering from an illness"], C,
      "She came home expecting to nurse a sick mother and found 'a house of ruin': death has struck her family, so she is bereaved."),
    // 3
    q("'If I cannot slaughter other tribesmen if I do not say my prayer in the morning, if I turn my back on some of your advice...'\nIshmael Heron, Pardon Me\n\nThe repetition in the lines above is a poetic device of",
      ["anaphora", "plagiarism", "alliteration", "paralipsis"], A,
      "The same words, 'if I', open each clause in turn. Repeating words at the start of successive lines or clauses is anaphora.",
      { bookletKey: 'D', bookletNote: "The booklet answer D, paralipsis, means drawing attention to something by pretending to pass over it ('I will not mention his debts...'). Nothing is passed over here; the lines repeat 'if I' at the start of each clause, which is anaphora (A)." }),
    // 4
    q("'Truly sir, all that I live by is with the awl: I meddle with no tradesman's matters nor women's matters, but withal — I am indeed, sir, a surgeon to old shoes. When they are in great danger, I recover them.'\nWilliam Shakespeare, Julius Caesar\n\nThe speaker in the excerpt above is a",
      ["cobbler", "meddler", "surgeon", "trader"], A,
      "He lives 'with the awl' (a shoemaker's tool) and is 'a surgeon to old shoes' who 'recovers' (re-covers) them: he is the Cobbler of the opening scene."),
    // 5
    q("'I will pronounce your name, Obi, I will declaim you, Obi!'\n\nThe device used in the line above is",
      ["refrain", "parallelism", "chronological", "repetition"], D,
      "'I will' and the name 'Obi' are repeated in the two halves of the line: repetition. The two halves are also built the same way, which is parallelism.",
      { keyVerdict: 'multiple', alsoAccept: [B], keyAnswer: 'D', answerNote: "Both D and B are fully right. The line repeats 'I will ... Obi' (repetition, the answer often given), and its two halves have the same grammatical shape, 'I will pronounce your name, Obi' / 'I will declaim you, Obi' (parallelism)." }),
    // 6
    q("'KATE: No shame but mine. I must, forsooth, be forced\nTo give my hand opposed against my heart\nUnto a mad-brain rudesby, full of spleen,\nWho wooed in haste and means to wed at leisure.\nI told you, I, he was a frantic fool,\nHiding his bitter jests in blunt behaviour.'\nWilliam Shakespeare, The Taming of the Shrew\n\nIn the excerpt above, it is clear that the speaker is",
      ["enthusiastic", "contented", "indifferent", "anxious"], D,
      "On her wedding day Petruchio has not arrived, and Kate fears the 'shame' of being left at the altar: she is upset and anxious, not indifferent.",
      { bookletKey: 'C', bookletNote: "The booklet answer C, indifferent, means not caring. Kate cares a great deal: she complains of 'shame', of being forced to marry against her heart, and of a groom who 'means to wed at leisure', so she is anxious (D)." }),
    // 7
    q("'Caliph: ...Son, open all your ears. May Allah grant us the fortitude to accept his commands.... Now the rest is my burden.\nI am willing to accept Allah's will in the matter.'\n\nThe language of the speaker above is",
      ["imploring", "diplomatic", "submissive", "inciting"], C,
      "'Grant us the fortitude to accept his commands' and 'I am willing to accept Allah's will' show a speaker yielding to God's will: submissive language."),
    // 8
    q("'Though alien to this crime its capacity for bagging crime befits a legendary scion of the soil the brief sack with bulging stomach.'\n\nThe poem achieves its significant effect through the use of",
      ["rhyme and simile", "alliteration and personification", "quatrain and imagery", "onomatopoeia and alliteration"], B,
      "The b-sounds of 'bagging', 'befits', 'brief' and 'bulging' are alliteration, and the sack is given a human 'capacity' for crime and a 'bulging stomach': personification.",
      { keyVerdict: 'corrected', keyAnswer: 'C', answerNote: "The answer often given is C, quatrain and imagery. The sack is certainly an image, but a quatrain is only a four-line stanza, and the effect of these lines does not come from their stanza form. What stands out is the run of b-sounds (bagging, befits, brief, bulging) and the sack treated like a greedy person with a 'bulging stomach', so B fits better." }),
    // 9
    q("'O, let us have him, for his silver hairs\nWill purchase us a good opinion\nAnd buy men's voices to commend our deeds:\nIt shall be said his judgment ruled our hands;\nOur youths and wildness shall no whit appear,\nBut all be buried in his gravity.'\nWilliam Shakespeare, Julius Caesar\n\nIn the excerpt above, 'his silver hairs' refers to",
      ["wealth", "old age", "make-up", "a judicial wig"], B,
      "Silver (grey) hair stands for age and the wisdom that goes with it; the conspirators want the old Cicero's 'gravity' to cover their own 'youths and wildness'."),
    // 10
    q("'\"The white man of God is coming here for Easter! The white man of God is coming to spend Easter with us!\" This was the talk everywhere in Nkar among the old and young, even among pagans. We had been taught everything about him in advance. When he comes we should observe his beard and see if it is not forked like that of Christ.'\nKenjo Jumbam, The White Man of God\n\nFrom the passage, the White Man of God is treated with",
      ["derision", "indifference", "awe", "suspicion"], C,
      "Everyone, 'old and young, even among pagans', talks excitedly of his coming, and the children expect his beard to look like Christ's: he is treated with awe.",
      { keyVerdict: 'corrected', keyAnswer: 'D', answerNote: "The answer often given is D, suspicion. But nobody in the passage doubts the man: the whole village repeats the news with excitement, and the children are told to look for a beard 'forked like that of Christ', expecting him to resemble Christ. That is reverent wonder, awe (C), not suspicion." }),
    // 11
    q("Chanson is a term denoting a",
      ["song from the middle ages", "poem of varied metrical forms", "popular Korean verse", "form of love song"], B,
      "Chanson (French for 'song') is a French lyric in stanzas, written in many different metrical forms, from the medieval chansons to later songs."),
    // 12
    q("Which of the following forms of poetry is an example of monologue?",
      ["Ode", "Lament", "Epic", "Sonnet"], B,
      "A lament is the outpouring of one grieving voice, a single speaker pouring out sorrow: a monologue."),
    // 13
    q("Monometer is a",
      ["single foot used in John Milton's sonnets", "line repeated in the first syllable of a word", "line of verse consisting of one metrical foot", "single metre of Coleridge's poem, 'Christabel'"], C,
      "Mono- means one: a monometer is a line of verse with only one metrical foot."),
    // 14
    q("Black theatre is drama concerned with",
      ["Africans of West Indian origin", "the identity of black Americans", "mourners dressed in black", "actors of black origin"], D,
      "Black theatre is theatre made by black people: plays written, staged and acted by people of black origin, about the black experience."),
    // 15
    q("The moment of recognition of truth when ignorance gives way to knowledge in a character is known as",
      ["anagnorisis", "hamartia", "anamnesis", "hubris"], A,
      "Aristotle's term for the moment of discovery, when a character passes from ignorance to knowledge, is anagnorisis."),
    // 16
    q("Zeugma is a figurative device in which a",
      ["pronoun governs two parts of an expression", "verb refers to two parts of an expression", "conjunction governs two parts of an expression", "noun refers to two parts of an expression"], B,
      "In zeugma one word, usually a verb, governs two parts of a sentence, often in different senses: 'She lost her keys and her temper.'"),
    // 17
    q("A final stanza of a poem that is shorter than the preceding ones is called",
      ["irony", "epanalepsis", "antithesis", "envoi"], D,
      "The envoi (envoy) is the short closing stanza of a ballade or similar poem, often addressed to a patron."),
    // 18
    q("A character that heavily relies on cultural types for his manner of speech, his personality and other distinguishing characteristics is",
      ["a stock character", "an antagonist", "a fictional character", "a rounded character"], A,
      "A stock character is a familiar type (the miser, the braggart soldier, the wicked stepmother) recognised by conventional speech and traits."),
    // 19
    q("That quality in a literary work which evokes tenderness, pity or sorrow is",
      ["pataphysics", "pathopoeia", "patois", "pathos"], D,
      "Pathos (Greek for 'suffering') is the quality in a work that moves the reader to pity, tenderness or sorrow."),
    // 20
    q("The part of a play when climax approaches is known as",
      ["protasis", "epitasis", "catastasis", "catharsis"], C,
      "In the classical division of a play (protasis, epitasis, catastasis, catastrophe), the catastasis is the stage where the action is heightened to its climax."),
    // 21 (paper 22)
    q(PO + "In Senghor's 'I Will Pronounce Your Name', 'cinnamon' is significant for its",
      ["extended metaphor", "olfactory image", "dramatic irony", "botanical allusion"], B,
      "The poet likens Naett's name to cinnamon and the scent of the lemon grove: the image appeals to the sense of smell, an olfactory image.",
      { setText: "Léopold Sédar Senghor, I Will Pronounce Your Name" }),
    // 22 (paper 23)
    q(PO + "In Odia Ofeimun's 'We Must Learn Again to Fly', the use of 'we' gives the poem",
      ["dramatic sensation", "symbolic undertone", "personifying effect", "universal appeal"], D,
      "'We' speaks for the whole people, not one person, so every reader is drawn in: it gives the poem a collective, universal appeal.",
      { setText: "Odia Ofeimun, We Must Learn Again to Fly" }),
    // 23 (paper 24)
    q(PO + "The persona in Housman's 'To an Athlete Dying Young' addresses the dead athlete using",
      ["apostrophe", "monologue", "admonition", "dialogue"], A,
      "The speaker talks directly to the dead young man ('Smart lad, to slip betimes away'), who cannot answer: that is apostrophe.",
      { setText: "A.E. Housman, To an Athlete Dying Young" }),
    // 24 (paper 25)
    q(PO + "The concern of the poet in 'Serenade' is to",
      ["examine the gloomy side of marriage", "express the lady's sense of grief", "boast about the lover's wealth", "appeal to the lady in question"], D,
      "A serenade is a love song a lover sings to his lady to win her: the poet's concern is to appeal to her.",
      { setText: "Anonymous (Swahili), Serenade" }),
    // 25 (paper 26)
    q(PO + "In Milton's 'On His Blindness', the poet's attitude towards his blindness is one of",
      ["apathy", "fortitude", "sorrow", "anger"], B,
      "After his first complaint, Patience answers that God is served by those who 'bear his mild yoke' and that 'they also serve who only stand and wait': he bears his blindness with fortitude.",
      { setText: "John Milton, On His Blindness" }),
    // 26 (paper 27)
    q(PO + "In Clark's 'Agbor Dancer', the poet watches the dancer with",
      ["nostalgia", "rhapsody", "despair", "spite"], A,
      "Watching the girl dance in perfect harmony with the drums, the westernised poet longs to get back to the roots of his own culture: nostalgia.",
      { setText: "J.P. Clark, Agbor Dancer" }),
    // 27 (paper 29)
    q(PO + "In Keats' 'On the Grasshopper and Cricket', the frost of winter evenings is said to cause",
      ["luxury", "silence", "loneliness", "violence"], B,
      "'On a lone winter evening, when the frost / Has wrought a silence': the frost causes silence, which the cricket's song then breaks.",
      { setText: "John Keats, On the Grasshopper and Cricket" }),
    // 28 (paper 30)
    q(PO + "The poet persona in Wangusa's 'A Taxi Driver on His Death' is",
      ["pessimistic", "sarcastic", "optimistic", "romantic"], A,
      "The driver foresees that he will die in a road crash and treats his death as certain and unavoidable: his outlook is gloomy and pessimistic.",
      { setText: "Timothy Wangusa, A Taxi Driver on His Death" }),
    // 29 (paper 32)
    q(TESS + "At what time does Tess often look so transformed before Angel Clare?",
      ["At twilight", "At 12 noon", "At 3am on their way to milking the cows", "At 12 midnight while retiring to bed"], C,
      "At Talbothays, Tess and Angel rise around three for the skimming and milking; in that grey dawn light she seems to him 'a visionary essence of woman'.",
      { setText: "Thomas Hardy, Tess of the d'Urbervilles", keyVerdict: 'multiple', alsoAccept: [A], answerNote: "Both C and A are right. The scene is the very early morning, around three, when the dairy folk rise for the skimming and milking (C), and Hardy himself calls that hour 'the twilight of the morning' (A)." }),
    // 30 (paper 33)
    q(TESS + "One thing that Angel Clare hates most is",
      ["marrying a girl of his parents' choice", "Cambridge education", "becoming a minister", "the notion of old family"], D,
      "Angel scorns aristocratic pride of birth and 'old families', which is why Tess fears telling him she is a d'Urberville.",
      { setText: "Thomas Hardy, Tess of the d'Urbervilles" }),
    // 31 (paper 34)
    q(TESS + "Tess of the d'Urbervilles is an interrogation of the Victorian period's",
      ["concept of love", "celebration of industrialization", "double standard", "ideas about women"], C,
      "Angel confesses his own past affair and expects forgiveness, yet abandons Tess for hers: the novel questions the Victorian double standard of sexual morality.",
      { setText: "Thomas Hardy, Tess of the d'Urbervilles" }),
    // 32 (paper 38)
    q(FR + "It can be safely assumed that the novel is",
      ["naturally simple", "culturally simple", "physically relevant", "structurally complex"], D,
      "Fragments moves between several characters' viewpoints and times, and opens and closes with the grandmother Naana's monologues: its structure is complex.",
      { setText: "Ayi Kwei Armah, Fragments" }),
    // 33 (paper 40)
    q(FR + "The outdooring ceremony of Araba's child, fixed for the fifth day after his birth, is opposed by Naana because the child",
      ["is reincarnated in the father", "needs the uncle's support", "makes the spirits angry", "is still in the custody of the spirits"], D,
      "By tradition a newborn is not shown to the world until about the seventh day, while it still belongs to the spirit world; Naana fears the early outdooring will kill the child, and it does.",
      { setText: "Ayi Kwei Armah, Fragments" }),
    // 34 (paper 42)
    q(ATT + "The play is about",
      ["disunity among the Hausa states", "resistance to British administration", "unity in the caliphate", "opposition to Christianity"], B,
      "The play dramatises Caliph Attahiru's refusal of Lugard's 'friendship' and his resistance to British conquest, ending in his death at Burmi in 1903.",
      { setText: 'Ahmed Yerima, Attahiru' }),
    // 35 (paper 46)
    q(HAM + "'Fear it, Ophelia, fear it, my dear sister,\nAnd keep you in the rear of your affection,\nOut of the shot and danger of desire.\nThe chariest maid is prodigal enough,\nIf she unmask her beauty to the moon.'\n\nIn the excerpt above, Laertes warns Ophelia to beware of Hamlet's attentions because",
      ["of his mournful state", "the sincerity of his love is in doubt", "of his insanity", "such attentions cannot be given by too young a person"], B,
      "Laertes calls Hamlet's love 'a fashion and a toy in blood', not lasting, and warns that a prince's choice is not his own: the sincerity of his love is in doubt.",
      { setText: 'William Shakespeare, Hamlet' }),
    // 36 (paper 47)
    q(HAM + "In the play, the two revenge plots revolve around",
      ["Ophelia against Hamlet and Laertes against Hamlet", "Hamlet against Polonius and Laertes against Claudius", "Hamlet against Claudius and Laertes against Hamlet", "Claudius against Hamlet and Laertes against Gertrude"], C,
      "Hamlet seeks revenge on Claudius for murdering his father; Laertes seeks revenge on Hamlet for killing Polonius.",
      { setText: 'William Shakespeare, Hamlet' }),
    // 37 (paper 49)
    q(HAM + "How does Queen Gertrude finally die?",
      ["By venomed sword", "From poisoned drink", "Of snake bite", "Through strangulation"], B,
      "During the fencing match she drinks from the poisoned cup Claudius prepared for Hamlet and dies.",
      { setText: 'William Shakespeare, Hamlet' }),
    // 38 (paper 50)
    q(HAM + "'But, O, what form of prayer\nCan serve my turn? \"Forgive me my foul murder\"?\nThat cannot be; since I am still possess'd\nOf those effects for which I did the murder.'\n\nThose effects which Claudius is still possessed of from the excerpt above are",
      ["the crown and the queen", "Norway and young Fortinbras", "young Hamlet and Gertrude", "Hamlet's orchard and his crown"], A,
      "Claudius goes on: 'My crown, mine own ambition and my queen.' He killed his brother for the crown and Gertrude, and still holds both.",
      { setText: 'William Shakespeare, Hamlet' }),
  ]);
})();
