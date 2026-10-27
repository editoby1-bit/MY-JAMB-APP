/**
 * JAMB/UTME 2006 — LITERATURE-IN-ENGLISH
 * From the 2006 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2006;
  const SRC = 'JAMB UTME 2006';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const PO = "Based on the prescribed poems: \n";
  const TESS = "Based on Thomas Hardy's Tess of the d'Urbervilles: \n";
  const FR = "Based on Ayi Kwei Armah's Fragments: \n";
  const HAM = "Based on William Shakespeare's Hamlet: \n";
  const ATT = "Based on Ahmed Yerima's Attahiru: \n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 1)
    q(PO + "In 'We Must Learn Again to Fly', Ofeimun exhorts the reader",
      ["not to lose hope in the face of adversity", "to enjoy his success", "to give up if he does not succeed", "to work harder even if he succeeds"], A,
      "The title itself is the message: after a fall we must rise and 'learn again to fly'. The poet urges his readers not to give up hope when disaster strikes.",
      { setText: "Odia Ofeimun, We Must Learn Again to Fly" }),
    // 2 (paper 3)
    q(PO + "Keats's 'On the Grasshopper and Cricket' is best described as",
      ["romantic", "medieval", "metaphysical", "platonic"], A,
      "John Keats was one of the great English Romantic poets, and this sonnet celebrates nature ('The poetry of earth is never dead'), a typical Romantic subject.",
      { setText: "John Keats, On the Grasshopper and Cricket" }),
    // 3 (paper 4)
    q(PO + "The character addressed in 'Serenade' is",
      ["from a poor family", "in a joyous mood", "in a sad mood", "at war with another character"], C,
      "The singer begs the lady to stop weeping, to put aside her grief and sing to her suitors instead: she is in a sad mood.",
      { setText: "Anonymous (Swahili), Serenade" }),
    // 4 (paper 5)
    q(PO + "Apart from his lover, the poet in Senghor's 'I Will Pronounce Your Name' is also concerned with his",
      ["religion", "continent", "cinnamon", "wealth"], B,
      "Naett, the black woman he loves, is praised in images drawn from African nature; as in much of Senghor's Negritude poetry, the beloved also stands for Africa, his continent.",
      { setText: "Léopold Sédar Senghor, I Will Pronounce Your Name" }),
    // 5 (paper 6)
    q(PO + "In Housman's 'To an Athlete Dying Young', the poet sees the death of the young athlete as",
      ["belated", "permanent", "temporary", "timely"], D,
      "'Smart lad, to slip betimes away / From fields where glory does not stay': the athlete died at the height of his fame, before it could fade, so his death is seen as timely.",
      { setText: "A.E. Housman, To an Athlete Dying Young" }),
    // 6 (paper 7)
    q(PO + "Brutus' 'A Troubadour I Traverse' paints the picture of",
      ["peace amidst pestilence", "love in a hostile environment", "hatred inspired by state terror", "hunger in the midst of plenty"], B,
      "Like a wandering love-singer, the poet roams his land, his 'mistress', laughing at those who banned his movement in apartheid South Africa: love in a hostile environment.",
      { setText: "Dennis Brutus, A Troubadour I Traverse" }),
    // 7 (paper 10)
    q(PO + "In Clark's 'Agbor Dancer', the drum is central to the message because it",
      ["portrays the drummer as an expert", "reminds the poet of his cultural roots", "provides the rhythm for the dancer", "draws the spectators to the dancing arena"], B,
      "The poet, 'early sequestered from my tribe' by Western education, wishes he could answer the drum's command as the dancer does: the drum reminds him of his cultural roots.",
      { setText: "J.P. Clark, Agbor Dancer" }),
    // 8 (paper 11)
    q("'He did his work in the same slow obstinate way as he had done it in Jones' time, never shirking and never volunteering for extra work either.'\nGeorge Orwell, Animal Farm\n\nFrom the passage above the character being described is",
      ["enthusiastic", "altruistic", "cynical", "lazy"], C,
      "This is Benjamin the donkey, who expects nothing from the revolution and so works exactly as before, no more and no less: a cynic."),
    // 9 (paper 12)
    q("'The hunter dies and leaves his poverty to his gun\nThe blacksmith dies and leaves his poverty to his anvil...'\n\nThe extract above is an example of",
      ["elegy", "ballad", "epic", "eulogy"], A,
      "The lines are a sad meditation on death: each worker dies and leaves only his poverty behind. A mournful poem on death is an elegy.",
      { bookletKey: 'D', bookletNote: "The booklet answer D, eulogy, means a speech or writing in praise of a person. These lines praise no one; they mourn death and the poverty it leaves behind, which is the mark of an elegy, so A is right." }),
    // 10 (paper 13)
    q("'It was not the apple that tempted Eve, But this grapefruit; thus did Maren revise the tale of Paradise Lost, and even Chris, shocked as he was at such blasphemy, confessed himself tempted to agree whenever Maren returned from raiding the Principal's compound, with a shirtful of booty to share, especially, on a hot afternoon.'\nWole Soyinka, Ibadan: The Penkelemes Years, A Memoir\n\nThe passage above achieves a mock-heroic effect through the use of",
      ["meiosis", "epigram", "allusion", "symbolism"], C,
      "Stealing grapefruit from the Principal's compound is set beside the Fall of Man by allusion to Eve and Milton's Paradise Lost; the grand reference to a trivial theft is mock-heroic."),
    // 11 (paper 14)
    q("'O fleeting gleam of noon dream\nYou incense my clotted dream!'\nTony E. Afejuku, An Orchard of Wishes\n\nThe literary device used in the lines above is",
      ["repetition", "refrain", "consonance", "assonance"], D,
      "The same long vowel sound /i:/ is repeated in 'fleeting', 'gleam' and 'dream': repetition of vowel sounds is assonance."),
    // 12 (paper 15)
    q("'For God's sake, let us sit upon the ground\nAnd tell sad stories of the death of kings;\nHow some have been deposed, some slain in war,\nSome haunted by the ghosts they have deposed,\nSome poisoned by their wives, some sleeping killed,\nAll murdered.'\nWilliam Shakespeare, King Richard II\n\nThe subject matter of the speech above is",
      ["regicide", "suicide", "infanticide", "parricide"], A,
      "Richard speaks of kings deposed, slain, poisoned and 'All murdered': the killing of kings is regicide."),
    // 13 (paper 16)
    q("'On the broken walls,\nBats hang away from the sun\nShadows of an ancient stranger\nCast their presence over our shoulders\nA pathway leads to the abandoned gate.'\nMazisi Kunene, The Fearful Ruin\n\nThe dominant mood in the excerpt above is that of",
      ["exhilaration", "pleasure", "rage", "terror"], D,
      "Broken walls, bats hiding from the sun, ghostly shadows over our shoulders and an abandoned gate create an eerie, frightening atmosphere: terror."),
    // 14 (paper 17)
    q("'Your no-good pig, and here I am feeding him everyday, letting him sleep in my house. I got a knife from the kitchen. I am going to kill that pig.'\nPatricia Melo, The Killer\n\nThe speaker in the excerpt above is trying to",
      ["brace himself up for the action", "report the pig before killing it", "contemplate the killing of the pig", "justify the action of killing the pig"], C,
      "The speaker is turning the killing over in his mind: he recalls his grievance, gets a knife and announces what he means to do. He is contemplating the killing."),
    // 15 (paper 18)
    q("'I am jealous and passionate\nLike Jehovah, God of the Jews,'\nJ.P. Clark, Olokun\n\nA device used in the second line of the excerpt above is",
      ["simile", "hyperbole", "metaphor", "paradox"], A,
      "The speaker compares his jealous passion to Jehovah's using 'like': an open comparison with 'like' or 'as' is a simile."),
    // 16 (paper 19)
    q("'...Not a few of us ended our application letters like this: 'If you are kind enough to accommodate this humble application, Sir/Madam, I shall do my uttermost best to render you the greatest services which it is at disposition to your best satisfactory. Yours obedient servant...' Yet without English, you had no education fit for a white collar job.'\nCameron Duodu, The Gab Boys\n\nThe tone of the passage above is",
      ["derisive", "ironic", "melancholic", "harsh"], A,
      "The narrator quotes the pompous, ungrammatical letters to laugh at them: the tone mocks the half-baked English that passed for education."),
    // 17 (paper 20)
    q("'You are the cold nests in which the migrant bird lays no eggs'\nKittobbe, To be Childless\n\nThe device used in the excerpt above is",
      ["synecdoche", "imagery", "metaphor", "irony"], C,
      "The person addressed is said to BE cold nests where no eggs are laid, a direct comparison without 'like' or 'as' for barrenness: a metaphor."),
    // 18 (paper 21)
    q(TESS + "Angel Clare prefers Tess to Mercy Chant as a wife because she",
      ["is an accomplished lady", "is from a very good family", "understands farm life", "is a good Christian"], C,
      "Angel means to be a farmer, and he tells his parents that a learned lady like Mercy Chant would be of no use to him; he needs a wife who understands farm work, as Tess the dairymaid does.",
      { setText: "Thomas Hardy, Tess of the d'Urbervilles" }),
    // 19 (paper 22)
    q(TESS + "The death of Prince can be said to",
      ["portray Tess as a fated character", "reveal the family's total dependence on the animal", "cause Tess' misfortunes", "foreshadow Tess' ultimate fate"], C,
      "Blaming herself for killing the family's horse, Tess agrees to go and 'claim kin' with the rich d'Urbervilles, where she meets Alec: the death sets her misfortunes in motion. The blood that splashes her also foreshadows her violent end.",
      { setText: "Thomas Hardy, Tess of the d'Urbervilles", keyVerdict: 'multiple', alsoAccept: [D], answerNote: "Both C and D are fully right. Prince's death causes Tess's misfortunes, because her guilt sends her to the d'Urbervilles and to Alec; and the scene, with Prince's blood spattering Tess, is widely read as foreshadowing the blood and death at the end of the novel." }),
    // 20 (paper 23)
    q(TESS + "Most of Tess' misery as a girl-mother comes from the thought of",
      ["herself as the parent of a nameless child", "the world's concern about her breaking social law", "herself as a spouseless mother", "her inexperience in childcare"], B,
      "Hardy says what bowed her head most was 'the thought of the world's concern at her situation', which was founded on an illusion: her misery came from her conventional fear of society's judgement.",
      { setText: "Thomas Hardy, Tess of the d'Urbervilles" }),
    // 21 (paper 24)
    q(TESS + "The theme of chance is graphically demonstrated by the",
      ["meeting of Parson Tringham and Mr. Durbeyfield", "rape scene", "sudden return of Angel Clare from Brazil", "death of Tess' child"], A,
      "The novel opens with Parson Tringham happening to meet John Durbeyfield on the road and telling him he descends from the noble d'Urbervilles; this chance meeting starts the whole tragedy.",
      { setText: "Thomas Hardy, Tess of the d'Urbervilles" }),
    // 22 (paper 28)
    q(FR + "The message 'State Express 555' is an advertisement for",
      ["an imported alcoholic drink", "a brand of elitist cigarette", "a newly commissioned road network", "Gold Coast Transport Corporation"], B,
      "State Express 555 is a brand of expensive imported cigarettes, smoked as a mark of status; none of the other options is a cigarette.",
      { setText: "Ayi Kwei Armah, Fragments" }),
    // 23 (paper 29)
    q(FR + "That Baako ultimately goes mad indicates that",
      ["the visionary is usually a sacrificial lamb", "society is incurable", "man is a fateful being", "the evils that men do live after them"], A,
      "Baako, the returned 'been-to' who refuses to bring home cargo and wants to write honestly, is crushed by his family and society: the visionary is sacrificed.",
      { setText: "Ayi Kwei Armah, Fragments" }),
    // 24 (paper 31)
    q(HAM + "The king who is poisoned in the garden in the play-within-the-play is",
      ["Gonzago", "Negtine", "Bernardo", "Hamlet"], A,
      "The players perform 'The Murder of Gonzago' (which Hamlet calls 'The Mousetrap'): Gonzago is poisoned in his garden, just as Claudius poisoned old King Hamlet.",
      { setText: 'William Shakespeare, Hamlet' }),
    // 25 (paper 32)
    q(HAM + "The Ghost serves to",
      ["accelerate dramatic conflict", "intensify dramatic conflict", "initiate dramatic conflict", "complicate dramatic conflict"], C,
      "The Ghost tells Hamlet that Claudius murdered him and demands revenge; this sets Hamlet against Claudius and starts the play's central conflict.",
      { setText: 'William Shakespeare, Hamlet' }),
    // 26 (paper 33)
    q(HAM + "'But howsoever thou pursuest this act, taint not thy mind, nor let thy soul contrive against thy mother...'\nThe Ghost exhorts young Hamlet not to kill his mother because",
      ["his wife is bewitched into falling for Claudius' seduction", "the ghost wishes her to be left to the torment of her conscience", "the ghost still loves his wife even in death", "the young Hamlet will be guilty of matricide"], B,
      "The Ghost goes on: 'Leave her to heaven, / And to those thorns that in her bosom lodge, / To prick and sting her.' Her punishment is to be her own conscience.",
      { setText: 'William Shakespeare, Hamlet' }),
    // 27 (paper 34)
    q(HAM + "The king's clown whose skull is exhumed by the Grave-digger is",
      ["Rosencrantz", "Yorick", "Sexton", "Fortinbras"], B,
      "In Act 5 the grave-digger turns up the skull of Yorick, the king's jester, and Hamlet says, 'Alas, poor Yorick! I knew him, Horatio.'",
      { setText: 'William Shakespeare, Hamlet' }),
    // 28 (paper 35)
    q(HAM + "The seemingly shifty structure of the play is used to",
      ["assist in the development of the characters", "sustain the reader's interest", "reflect the emotional and psychological state of Hamlet", "slow down the pace of the plot development"], C,
      "The play moves back and forth between action and long reflection, delay and sudden deeds; this wavering mirrors Hamlet's own doubt, melancholy and indecision.",
      { setText: 'William Shakespeare, Hamlet' }),
    // 29 (paper 39)
    q(ATT + "The character attributes of Attahiru qualify him as",
      ["an egocentric patriot", "a Muslim fanatic", "a religious martyr", "a political revolutionary"], C,
      "Attahiru, the last Caliph of Sokoto, refuses to submit to the British, leads his people on hijra and dies fighting at Burmi for his faith: a religious martyr.",
      { setText: 'Ahmed Yerima, Attahiru' }),
    // 30 (paper 40)
    q(ATT + "The play is historical because it deals with",
      ["the jihad led by Caliph Attahiru", "real personages and places", "Lugard's attempt to amalgamate the southern and northern protectorates", "Attahiru's ascension to the caliphate in November 1902"], B,
      "A history play dramatises real people and places from the past; Attahiru brings Caliph Attahiru, Lord Lugard and Sokoto to the stage.",
      { setText: 'Ahmed Yerima, Attahiru' }),
    // 31 (paper 41)
    q("The physical setting within which the action of a narrative takes place is the",
      ["stage", "scene", "locale", "location"], D,
      "The place where a story's action happens is its location or locale, the physical part of the setting.",
      { keyVerdict: 'multiple', alsoAccept: [C], keyAnswer: 'D', answerNote: "Both D and C are fully right. Location (D), the answer often given, and locale (C) both mean the place where the action happens; 'locale' is in fact the word many handbooks use for the physical setting of a story." }),
    // 32 (paper 42)
    q("An anti-social action taken by the tragic hero which results in a catastrophe is called",
      ["anagnorisis", "premonition", "hamartia", "empathy"], C,
      "Hamartia is the tragic hero's error or flaw that leads to his downfall, as in Okonkwo's rashness or Oedipus' pride."),
    // 33 (paper 43)
    q("A work which takes place in a non-existent world or which concerns an incredible character is a",
      ["romance", "fantasy", "parody", "superstition"], B,
      "Fantasy is set in an imaginary world or features impossible beings and events, as in Tutuola's The Palm-Wine Drinkard or Tolkien's The Hobbit."),
    // 34 (paper 44)
    q("A humorous scene, incident or speech in the course of a serious fiction or drama is a",
      ["play-within-the-play", "comic scene", "comic relief", "tragi-comedy"], C,
      "Comic relief is a light, funny moment placed in a serious work to ease the tension, like the grave-diggers in Hamlet or the Porter in Macbeth."),
    // 35 (paper 45)
    q("A travelogue is",
      ["the account of the travails of a character in a novel", "a record of the writer's experiences during a journey", "a variant of a novel written in a free style on a writer's journey", "the account of the experiences of an individual during his lifetime"], B,
      "A travelogue is a factual account of the places, people and experiences a writer meets on a journey."),
    // 36 (paper 46)
    q("Flashback in a literary work helps to",
      ["fill the missing link", "reveal the character's mindsets", "place the story in proper perspective", "relate events that are extraneous to the story"], A,
      "A flashback goes back to earlier events to supply background the reader needs, filling the gap in the story.",
      { keyVerdict: 'corrected', keyAnswer: 'D', answerNote: "The answer often given is D. But flashback events are not extraneous (outside or irrelevant) to the story: they are past events that belong to it and explain the present action. Supplying that missing background is what a flashback does, so A fits better." }),
    // 37 (paper 47)
    q("An address to a metaphysical source of inspiration by a poet is called",
      ["clairvoyance", "inspiration", "invocation", "nemesis"], C,
      "An invocation is a call to a Muse or deity for inspiration, as when Homer and Milton open their epics: 'Sing, Heavenly Muse'."),
    // 38 (paper 48)
    q("The sides of a stage are called",
      ["the ways", "both sides", "the pits", "the wings"], D,
      "The wings are the areas at the sides of the stage, hidden from the audience, where actors wait to enter."),
    // 39 (paper 49)
    q("A metrical pause occurring in the middle of a line in a poem is called",
      ["rhythm", "tetrametre", "assonance", "caesura"], D,
      "A caesura is a pause within a line of verse, usually marked by punctuation: 'To err is human; || to forgive, divine.'"),
    // 40 (paper 50)
    q("A complex plot can be described as the plot structure that has",
      ["multiple scenes", "strands of events running concurrently", "well-developed characters", "an abstract subject and setting"], B,
      "A complex plot weaves a main plot with subplots, several lines of action running at the same time, as in King Lear (Lear's story and Gloucester's)."),
  ]);
})();
