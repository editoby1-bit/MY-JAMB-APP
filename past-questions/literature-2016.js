/**
 * JAMB/UTME 2016 — LITERATURE-IN-ENGLISH
 * From the 2016 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2016;
  const SRC = 'JAMB UTME 2016';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const HC = "Based on Frank Ogodo Ogbeche's Harvest of Corruption: \n";
  const OT = "Based on William Shakespeare's Othello: \n";
  const FA = "Based on Amma Darko's Faceless: \n";
  const LD = "Based on Bayo Adebowale's Lonely Days: \n";
  const NS = "Based on Richard Wright's Native Son: \n";
  const PO = "Based on the prescribed poems: \n";
  const HCt = { setText: 'Frank Ogodo Ogbeche, Harvest of Corruption' };
  const OTt = { setText: 'William Shakespeare, Othello' };
  const FAt = { setText: 'Amma Darko, Faceless' };
  const LDt = { setText: 'Bayo Adebowale, Lonely Days' };
  const NSt = { setText: 'Richard Wright, Native Son' };
  const NIGHT = "'Women as a clam, on the sea's crescent I saw your\njealous eye quench the sea's fluorescence, dance on\nthe pulse incessant.'\nWole Soyinka, Night\n\n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 1)
    q(HC + "Chief is sentenced to prison for",
      ["ten years", "twenty years", "twenty-five years", "fifteen years"], C,
      "At the end of the trial Chief Haladu Ade-Amaka is sentenced to twenty-five years in prison with hard labour and ordered to refund the money he embezzled.",
      HCt),
    // 2 (paper 2)
    q(HC + "The Secretary to the Honourable Minister is",
      ["Ochuole", "Mrs. Obi", "Halima", "Okpotu"], B,
      "Mrs Obi is Chief's secretary. Ochuole is a senior officer in the ministry (Chief Administrative Officer), and Okpotu is Aloho's younger brother.",
      HCt),
    // 3 (paper 5)
    q(HC + "'On both cheeks are three parallel marks, which look like whiskers of a cat.'\nThe excerpt above describes",
      ["Ogeyi", "Madam Hoha", "Inspector Inaku", "ACP Yakubu"], B,
      "Madam Hoha, the tall, bulky owner of the Akpara Hotel, has three parallel tribal marks on her cheeks that look like a cat's whiskers.",
      HCt),
    // 4 (paper 6)
    q(OT + "Brabantio is advised to resign himself to the happiness of the couple by",
      ["the First Officer", "the Sailor", "the Duke", "the First Senator"], C,
      "In Act 1 Scene 3 the Duke tells Brabantio, 'When remedies are past, the griefs are ended': he should accept the marriage of Othello and Desdemona.",
      OTt),
    // 5 (paper 7)
    q(OT + "Desdemona is convinced that Cassio is",
      ["a good man", "cruel", "a good suitor", "selfish"], A,
      "Desdemona believes Cassio is an honest, good man who has been unfairly dismissed, so she keeps pleading with Othello to restore him.",
      OTt),
    // 6 (paper 8)
    q(OT + "'His bark is stoutly timbered, and his pilot\nOf very expert and approved allowance;'\nThe subject of description in the lines above is a",
      ["ship", "tree", "raft", "aeroplane"], A,
      "In Act 2 Scene 1, at Cyprus, Cassio reassures Montano about Othello's ship ('bark') in the storm: it is strongly built and has an expert pilot.",
      OTt),
    // 7 (paper 9)
    q(OT + "'O heaven! How got she out? O treason of the blood!\nFathers, from hence trust not your daughters' minds\nBy what you see them act. Is there not charms\nBy which the property of youth and maidhood\nMay be abused?'\nThe act of treason in the excerpt above is",
      ["elopement", "suicide", "adultery", "murder"], A,
      "Brabantio has just learned that Desdemona has left his house secretly at night and married Othello: her 'treason of the blood' is elopement.",
      OTt),
    // 8 (paper 10)
    q(OT + "'Well, do it, and be brief; I will walk by:\nI would not kill thy unprepared spirit;\nNo; heaven forfend! I would not kill thy soul.'\nThis statement is made when Othello wants to commit",
      ["murder", "savagery", "adultery", "suicide"], A,
      "In the final scene Othello tells Desdemona to pray before he kills her, so that he does not kill her soul as well as her body: he is about to murder her.",
      OTt),
    // 9 (paper 11)
    q(FA + "The Street Lord in the novel is",
      ["Macho", "Kpapo", "Onko", "Poison"], D,
      "Poison is the violent 'street lord' of Agbogbloshie who controls and exploits the street children, including Fofo.",
      FAt),
    // 10 (paper 12)
    q(FA + "Sodom and Gomorrah gets its name as a result of",
      ["insecurity", "vices", "the population", "the location"], B,
      "The Accra slum is nicknamed after the Bible's Sodom and Gomorrah, the cities destroyed for their sins, because of the vice (crime, prostitution, drugs) found there.",
      FAt),
    // 11 (paper 14)
    q(LD + "'I was very elusive too, like the dwarfed shadow at noon.'\nAjumobi's feeling towards the speaker in the excerpt above is that of",
      ["rejection", "awe", "love", "hatred"], C,
      "Yaremi remembers how hard she was to win as a young woman; Ajumobi courted her because he loved her, and as her husband he showered her with love and care.",
      LDt),
    // 12 (paper 15)
    q(LD + "Yaremi's childhood memory is brought back to her through the author's use of",
      ["soliloquy", "flashback", "aside", "suspense"], B,
      "Adebowale takes the widow Yaremi back to her girlhood and courtship through flashback, a return to earlier events in the middle of the story.",
      LDt),
    // 13 (paper 17)
    q(NS + "Bigger is apprehended because he",
      ["kills", "fights", "assaults", "steals"], A,
      "Bigger is hunted down and arrested for killing Mary Dalton (and later Bessie).",
      NSt),
    // 14 (paper 18)
    q(NS + "Mr. Dalton's employee before Bigger is",
      ["Peggy", "White", "Bessie", "Green"], D,
      "Green was the Daltons' chauffeur before Bigger; with the family's help he went to night school and got a better job.",
      NSt),
    // 15 (paper 19)
    q(NS + "Bigger kills Bessie because",
      ["it is not a crime to kill a fellow Negro", "the former wants to save his neck", "the latter is an unfaithful girlfriend", "it has become easy to kill"], B,
      "Bessie knows about Mary's death and would give him away if caught, so Bigger kills her to save himself.",
      NSt),
    // 16 (paper 20)
    q(NS + "Two of the liberal characters in the novel are",
      ["Britten and Max", "Mr. and Mrs. Dalton", "Mary and Jan Erlone", "Buckley and Peggy"], C,
      "Mary Dalton and her communist boyfriend Jan Erlone openly reject racial barriers and try to treat Bigger as an equal.",
      Object.assign({ keyVerdict: 'multiple', alsoAccept: [B], answerNote: "Both C and B are right. Mary and Jan are the radical, progressive young whites who try to treat Bigger as an equal (C), and Mr and Mrs Dalton are the novel's wealthy white liberal philanthropists (B), though Wright shows the limits of their charity." }, NSt)),
    // 17 (paper 21)
    q(PO + "'The table that gathers us in an island where guerillas\nwalk the land while crocodiles surf.'\nThe lines above from Hallowell's The Dining Table depict",
      ["suffering", "love", "poverty", "hope"], A,
      "Gbanabom Hallowell's poem comes out of the Sierra Leone civil war: guerrillas roam the land and 'crocodiles' prey on the people, an image of a nation's suffering.",
      { setText: 'Gbanabom Hallowell, The Dining Table' }),
    // 18 (paper 22)
    q(PO + "'In the splash and moan of the sea'\nThe device used in the line above from Awoonor's The Anvil and the Hammer is",
      ["metaphor", "pun", "paradox", "personification"], D,
      "The sea is said to 'moan', a human sound of pain or grief, so it is personified.",
      { setText: 'Kofi Awoonor, The Anvil and the Hammer' }),
    // 19 (paper 24)
    q(PO + "'How can the bird that is born for joy\nSit in a cage and sing?\nHow can a child, when fears annoy,\nBut droop his tender wing,\nAnd forget his youthful spring!'\nThe person in the excerpt above from Blake's The School Boy wants",
      ["freedom", "commitment", "rectitude", "peace"], A,
      "The schoolboy compares himself to a caged bird: shut in the classroom on a summer morning, he longs for the freedom to play outdoors.",
      { setText: 'William Blake, The School Boy' }),
    // 20 (paper 26)
    q(PO + "'And my blood ripples, turns torrent,\ntopples the years and at once I'm\nin my mother's lap a suckling;'\nThe lines above from Okara's Piano and Drums exemplify",
      ["premonition", "dream", "hallucination", "flashback"], D,
      "The jungle drums carry the speaker back across the years to his infancy in his mother's lap: a flashback.",
      { setText: 'Gabriel Okara, Piano and Drums' }),
    // 21 (paper 27)
    q(PO + "'Aborting dreams of a good catch'\nAborting dreams in the line above from Adeoti's Ambush refers to",
      ["accident", "miscarriage", "disappointment", "punishment"], C,
      "The fisherman's hope of a good catch is cut short by the whale that swallows his tools: 'aborting dreams' means hopes dashed, disappointment.",
      { setText: 'Gbemisola Adeoti, Ambush' }),
    // 22 (paper 28)
    q(PO + "The allusion used in Herbert's The Pulley is",
      ["traditional", "natural", "classical", "biblical"], D,
      "The poem retells the creation of man by God (Genesis), with God keeping back 'rest' so that man's restlessness draws him to Him.",
      Object.assign({ keyVerdict: 'multiple', alsoAccept: [C], answerNote: "Both D and C are right. The Pulley retells God's creation of man from the Bible (D), and it is also a reworking of the classical Greek myth of Pandora's box, with God pouring out his gifts but keeping back rest (C)." }, { setText: 'George Herbert, The Pulley' })),
    // 23 (paper 30)
    q(PO + "The tone of Peters' The Panic of Growing Older is one of",
      ["anger", "frustration", "betrayal", "apprehension"], D,
      "Lenrie Peters traces the fears and anxieties that come with each stage of life as a person ages; the 'panic' of the title is apprehension.",
      { setText: 'Lenrie Peters, The Panic of Growing Older' }),
    // 24 (paper 31)
    q("The idea of metre as used in a literary piece is",
      ["rhyme", "stanza", "verse", "rhythm"], D,
      "Metre is the regular pattern of stressed and unstressed syllables in a line of verse: it is measured rhythm."),
    // 25 (paper 32)
    q("The formation of words in imitation of the actual sound is",
      ["oxymoron", "onomatopoeia", "pun", "metonymy"], B,
      "Onomatopoeia is the use of words whose sound imitates what they name, such as 'buzz', 'hiss' or 'bang'."),
    // 26 (paper 33)
    q("What is the strength of a tragic hero?",
      ["Nobility", "Humility", "Ambition", "Pride"], A,
      "A tragic hero is a person of high rank and noble qualities; that nobility is his strength, while a flaw such as pride or ambition causes his fall."),
    // 27 (paper 34)
    q("In drama, the foil to the main character is the",
      ["prompter", "playwright", "antagonist", "protagonist"], C,
      "The antagonist opposes the main character (the protagonist) and, by contrast, brings out his qualities."),
    // 28 (paper 35)
    q("The imaginary and invented stories of gods or heroes which the society sets aside as being sacred are known as",
      ["folktale", "ritual", "myth", "legend"], C,
      "A myth is a sacred traditional story about gods, supernatural beings or heroes, often explaining origins or beliefs."),
    // 29 (paper 36)
    q("The continuation of meaning without pause, from one line to the next is",
      ["synecdoche", "melodrama", "enjambment", "alliteration"], C,
      "Enjambment is the running on of a sentence from one line of verse into the next without a pause at the line end."),
    // 30 (paper 37)
    q("A paragraph in prose is equivalent to a",
      ["verse in poetry", "stanza in poetry", "metre in poetry", "trope in poetry"], B,
      "A stanza is a group of lines forming a unit in a poem, just as a paragraph is a unit of sentences in prose."),
    // 31 (paper 38)
    q("What sustains the interest of a reader in all literature is",
      ["ambiguity", "characterization", "suspense", "plot"], C,
      "Suspense, the reader's eager uncertainty about what will happen next, keeps the reader reading."),
    // 32 (paper 39)
    q("Satire employs the use of",
      ["onomatopoeia", "irony", "synecdoche", "melancholy"], B,
      "Satire ridicules vice and folly, and irony (saying one thing while meaning another) is its chief weapon."),
    // 33 (paper 40)
    q("The speech made by a character to himself on stage is",
      ["epilogue", "aside", "soliloquy", "monologue"], C,
      "A soliloquy is a speech in which a character alone on stage speaks his thoughts aloud to himself."),
    // 34 (paper 41)
    q(NIGHT + "The line above suggests that women are",
      ["covetous", "dogmatic", "seers", "magicians"], A,
      "Women are linked with a 'jealous eye' that quenches the sea's light: jealousy, wanting what belongs to another, is covetousness."),
    // 35 (paper 42)
    q("Fights by the book of arithmetic\nThe figure of speech in the above is",
      ["hyperbole", "euphemism", "litotes", "innuendo"], A,
      "The speaker mockingly exaggerates his opponent's stiff, precise swordsmanship, as if he fought by counting numbers from a textbook: hyperbole."),
    // 36 (paper 43)
    q("Weep not child, weep not my darling, with these kisses\nlet me remove your tears\nThe ravening clouds shall not long be victorious\nThey shall no longer possess the sky...\n\nThe speaker of the lines is",
      ["optimistic", "carefree", "helpless", "pessimistic"], A,
      "The speaker comforts the child and promises that the dark clouds will not win for long: an optimistic, hopeful voice."),
    // 37 (paper 44)
    q("'This thing you are doing is too heavy for you,' he said. 'I went to school only a little, but I have killed many more years in this world than you have.'\nG. Okara, The Voice\n\nIt can be inferred from the passage above that the",
      ["listener is wise", "speaker is a porter", "listener is more experienced", "speaker is more experienced"], D,
      "The speaker has 'killed many more years in this world': he is older and claims more experience of life than the listener."),
    // 38 (paper 45)
    q("'Oh incomprehensible God: Shall my pilot be my inborn\nstars to that final call to thee...'\n\nThe literary device used in the first line is",
      ["apostrophe", "burlesque", "rhetorical question", "passion"], A,
      "The speaker addresses God directly, 'Oh incomprehensible God': apostrophe."),
    // 39 (paper 46)
    q("'I have said too much unto a heart of stone,\nAnd laid my honour too unchary on it:\nThere's something in me that reproves my fault,\nBut such a headstrong potent fault it is\nThat it but mocks reproof.'\nWilliam Shakespeare, Twelfth Night\n\nA heart of stone in the lines above is an example of",
      ["litotes", "metonymy", "assonance", "metaphor"], D,
      "Olivia calls the unresponsive heart of Cesario (Viola in disguise) 'a heart of stone' without 'like' or 'as': a metaphor for coldness."),
    // 40 (paper 47)
    q("'No, no! Do not blame the gods. Let no one blame the powers. My people, learn from my fall. The powers would have failed if I did not let them use me. They easily knew my weakness: the weakness of a man easily moved to the defense of his tribe against others.'\nO. Rotimi, The Gods Are Not to Blame\n\nThe speaker in the passage is",
      ["reckless", "insane", "a coward", "a hero"], D,
      "Odewale, now blind, refuses to blame the gods and takes responsibility for his own weakness: the dignity of a tragic hero."),
    // 41 (paper 48)
    q("'He says the medicine gourds are filthy,\nAnd the herbs are drunk from unhygienic cups'\nOkot p'Bitek, Song of Lawino\n\nThe poet in the lines is saying that",
      ["the speaker is very hygienic", "the person referred to takes Western medicine", "herbal medicine is dangerous", "the speaker prefers Western medicine"], B,
      "Lawino is reporting what her husband Ocol says: he despises Acoli herbal medicine as dirty because he trusts Western medicine.",
      { keyVerdict: 'corrected', keyAnswer: 'D', answerNote: "The speaker of Song of Lawino is Lawino, who defends Acoli herbal medicine. The man who calls the gourds filthy is 'he', her husband Ocol, the person referred to, who prefers Western medicine (B). D would be right only if 'the speaker' meant Ocol, whose words Lawino is reporting." }),
    // 42 (paper 49)
    q("'He is a faithful liar.'\nThe line above is an example of",
      ["epigram", "oxymoron", "euphemism", "antithesis"], B,
      "'Faithful' and 'liar' contradict each other, yet are placed side by side: an oxymoron."),
    // 43 (paper 50)
    q("'I wonder how long, you awful parasites, shall share\nwith me this little bed, and awake me, from my sweet\ndreams be lost, by suckling blood from my poor\nhead...'\nMbure, To a Bed-bug\n\nThe most dominant figure of speech in the excerpt is",
      ["metaphor", "simile", "personification", "hyperbole"], C,
      "The bed-bugs are spoken to as if they were people who 'share' the speaker's bed and wake him: personification."),
  ]);
})();
