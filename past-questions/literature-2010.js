/**
 * JAMB/UTME 2010 — LITERATURE-IN-ENGLISH
 * From the 2010 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2010;
  const SRC = 'JAMB UTME 2010';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const SD = "Based on J.C. de Graft's Sons and Daughters: \n";
  const RJ = "Based on William Shakespeare's Romeo and Juliet: \n";
  const JM = "Based on Buchi Emecheta's The Joys of Motherhood: \n";
  const OM = "Based on Ferdinand Oyono's The Old Man and the Medal: \n";
  const NE = "Based on George Orwell's Nineteen Eighty-Four: \n";
  const PO = "Based on the prescribed poems: \n";
  const KB = "'Basha: You dumb skull of a bone head . . . you will face court martial for this. You look everywhere? You search inside toilet bowl?'\nWole Soyinka, King Baabu\n\n";
  const FUT = "'Move him into the sun—\nGently its touch awoke him once,\nAt home, whispering of fields half-sown.\nAlways it woke him, even in France,\nUntil this morning and this snow.\nIf anything might rouse him now\nThe kind old sun will know.\n\nThink how it wakes the seeds—\nWoke, once, the clays of a cold star.\nAre limbs, so dear-achieved, are sides\nFull-nerved, still warm, too hard to stir?\nWas it for this the clay grew tall?\nO what made fatuous sunbeams toil\nTo break earth's sleep at all?'\n\n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 3)
    q(SD + "Maanan expresses dislike for Lawyer B because of",
      ["his condemnation of her choice of career", "his recent advances towards her", "the betrayal of her father's trust", "the betrayal of his wife's trust"], B,
      "Lawyer Bonu, a married family friend, makes advances to Maanan when she goes to his office; that is why she dislikes him.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 2 (paper 4)
    q(SD + "The traditional order in the play is represented by",
      ["Mrs. B", "Hannah", "Maanan", "Aunt"], D,
      "Aunt Fosuwa, James's elder sister, holds to the old ways and meddles in the family's affairs: she represents the traditional order.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 3 (paper 5)
    q(SD + "Where does the play take place?",
      ["On the street", "In George's place", "In Aunt's house", "In Ofosu's place"], D,
      "The action takes place in the home of James Ofosu, the father whose children's careers are in dispute.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 4 (paper 6)
    q(RJ + "'O deadly sin! O rude unthankfulness!\nThy fault our law calls death; but the kind Prince,\nTaking thy part, hath rushed aside the law,\nAnd turned that black word...'\nDeadly sin refers to the",
      ["suicide of Juliet", "suicide of Romeo", "murder of Paris", "murder of Tybalt"], D,
      "Friar Laurence scolds Romeo, who has just killed Tybalt: the law demands death for it, but the Prince has turned the sentence into banishment.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 5 (paper 7)
    q(RJ + "The play is mostly written in",
      ["blank verse", "free verse", "metres", "foot"], A,
      "Most of Romeo and Juliet is in blank verse, unrhymed iambic pentameter, with some rhymed passages and prose.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 6 (paper 8)
    q(RJ + "'O serpent heart, hid with a flowering face!'\nThe statement above refers to",
      ["Juliet", "Romeo", "Tybalt", "Benvolio"], B,
      "Juliet says this of Romeo when she learns he has killed her cousin Tybalt: a fair face hiding a serpent's heart.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 7 (paper 9)
    q(RJ + "The spatial setting of the play is",
      ["Athens", "Verona", "Padua", "Venice"], B,
      "The play opens 'In fair Verona, where we lay our scene'; only the later scenes of Romeo's exile are in Mantua.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 8 (paper 10)
    q(RJ + "Romeo is banished to Mantua because he",
      ["kills Tybalt in a street duel", "marries Juliet without parental consent", "attends Capulet's party uninvited", "attempts to kill Paris his rival"], A,
      "After Tybalt kills Mercutio, Romeo kills Tybalt in the street, and the Prince banishes him from Verona.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 9 (paper 11)
    q(JM + "In the novel, the society puts high value on",
      ["egalitarianism", "male ascendancy", "procreation", "gender equity"], C,
      "Igbo society in the novel measures a woman's worth by the children, above all sons, she bears: it prizes procreation.",
      { setText: 'Buchi Emecheta, The Joys of Motherhood' }),
    // 10 (paper 12)
    q(JM + "The medicine man links the lump discovered on the head of Nnu Ego at birth, to the",
      ["possession of physical admirable qualities that makes her an epitome of perfection", "wound inflicted on the slave woman buried with Agbadi's wife", "coming back of the Agunwa to the society to live again", "ill-luck and tragic events attributed to a predestined fate"], B,
      "The dibia says Nnu Ego is the slave woman, struck on the head and buried with Agbadi's senior wife Agunwa, come back as her chi; the lump marks that blow.",
      { setText: 'Buchi Emecheta, The Joys of Motherhood' }),
    // 11 (paper 13)
    q(JM + "The constant companions of Nnaife's family are",
      ["togetherness and happiness", "poverty and hunger", "sickness and joblessness", "disagreement and humiliation"], B,
      "In Lagos Nnaife's large family lives from hand to mouth, and Nnu Ego is always struggling to feed the children: poverty and hunger never leave them.",
      { setText: 'Buchi Emecheta, The Joys of Motherhood' }),
    // 12 (paper 15)
    q(OM + "Meka can be best described as",
      ["an egocentric old man", "a simple-hearted old man", "an impulsive old man", "an old religious bigot"], B,
      "Meka is a trusting, naive old man who gave his land and sons for the colonial cause and believes the medal means friendship: a simple-hearted old man.",
      { setText: 'Ferdinand Oyono, The Old Man and the Medal' }),
    // 13 (paper 16)
    q(OM + "In the novel, the colonialists treat the Africans with",
      ["kid gloves", "disdain", "indifference", "honour"], B,
      "The whites mock and despise the Africans: Meka is honoured one day and beaten and jailed the next. Their attitude is disdain.",
      { setText: 'Ferdinand Oyono, The Old Man and the Medal' }),
    // 14 (paper 17)
    q(NE + "The Ministry of Peace is concerned with making",
      ["instruments", "weapons", "wars", "reconciliation"], C,
      "In Oceania's doublespeak the Ministry of Peace (Minipax) runs the war; its name says the opposite of what it does.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 15 (paper 18)
    q(NE + "The subject matter of the novel is",
      ["totalitarian dictatorship", "exploitation and cruelty", "retributive justice", "class segregation"], A,
      "The novel shows a state, ruled by the Party and Big Brother, that controls every thought and act of its people: totalitarian dictatorship.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 16 (paper 19)
    q(NE + "How did Winston start his rebellion against the state?",
      ["By engaging in anti-party activities", "By keeping a private diary", "When he started a secret affair", "When he spied on the party"], B,
      "Winston's first act of rebellion is to buy a notebook and begin a secret diary, writing 'DOWN WITH BIG BROTHER'.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 17 (paper 20)
    q(NE + "The party seeks power for",
      ["the nation", "its own sake", "its members", "peoples' sake"], B,
      "O'Brien tells Winston: 'The Party seeks power entirely for its own sake.'",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 18 (paper 21)
    q(PO + "Rubadiri's 'An African Thunderstorm' says that during the thunderstorm in the village",
      ["women cook their food", "children play in the rain", "children are delighted while women move in and out", "both women and children are delighted"], C,
      "The poem speaks of the 'screams of delighted children' while women, babies on their backs, 'dart about / In and out / Madly'.",
      { setText: 'David Rubadiri, An African Thunderstorm' }),
    // 20 (paper 23)
    q(PO + "'Yet in their finger upon\nOur navel\nThe midwives of the spirit say\nThey feel a foetal throb.'\nThe dominant literary device used in the extract above from Acquah's 'In the Navel of the Soul' is",
      ["epigram", "allegory", "enjambment", "rhythm"], C,
      "The sentence runs on from line to line with no pause at the line ends ('upon / Our navel'): enjambment.",
      { setText: 'Kobena Eyi Acquah, In the Navel of the Soul' }),
    // 21 (paper 25)
    q(PO + "The predominant device in Launko's 'End of the War' is",
      ["onomatopoeia", "antithesis", "oxymoron", "paradox"], D,
      "The poem keeps making statements that seem self-contradictory, such as that the war has ended because war is now with us: paradox.",
      { setText: 'Okinba Launko, End of the War' }),
    // 22 (paper 26)
    q(PO + "The theme of the poem 'Give Me the Minstrel's Seat' centres on",
      ["divorce", "fortune", "marriage", "companionship"], D,
      "The poem celebrates friends and company as the way to bear life's troubles: its theme is companionship.",
      { setText: "Traditional Swahili poem, Give Me the Minstrel's Seat" }),
    // 23 (paper 27)
    q(PO + "The poet persona in Marvell's 'To His Coy Mistress' is willing to praise the lady's eyes for",
      ["thirty thousand years", "six decades", "two centuries", "a century"], D,
      "'An hundred years should go to praise / Thine eyes': a century. Two hundred go to each breast and thirty thousand to the rest.",
      { setText: 'Andrew Marvell, To His Coy Mistress' }),
    // 24 (paper 28)
    q(PO + "In Lawrence's 'Bat', the poet persona mistakes the bats for",
      ["owls", "swallows", "pipistrello", "sparrows"], B,
      "At first the speaker takes the flitting creatures at dusk over the Arno for swallows, then realises they are bats.",
      { setText: 'D.H. Lawrence, Bat' }),
    // 25 (paper 29)
    q(PO + "In Eliot's 'Journey of the Magi', the magi are aided on their journey by",
      ["donkeys", "horses", "camels", "chariots"], C,
      "The Magi travel on camels: 'And the camels galled, sore-footed, refractory'.",
      { setText: 'T.S. Eliot, Journey of the Magi' }),
    // 26 (paper 31)
    q("A play which mainly aims at provoking excessive laughter is called",
      ["tragi-comedy", "comedy", "a farce", "satire"], C,
      "A farce uses wild exaggeration, absurd situations and horseplay chiefly to make the audience roar with laughter."),
    // 27 (paper 32)
    q("Both comedy and tragedy have",
      ["happy ending", "climax", "tragic hero", "stanza"], B,
      "Every play, comic or tragic, builds to a climax, the point of highest tension; happy endings belong to comedy and the tragic hero to tragedy."),
    // 28 (paper 33)
    q("A formal dignified speech or writing praising a person or a thing for past or present deeds is",
      ["premiere", "eulogy", "anthology", "lampoon"], B,
      "A eulogy is a formal speech or piece of writing in praise of someone, often at a funeral."),
    // 29 (paper 34)
    q("The narrative style in which the hero tells his own story directly is the",
      ["objective", "subjective", "first-person", "third-person"], C,
      "When the main character tells the story himself, using 'I', the narrative is in the first person."),
    // 30 (paper 35)
    q("The physical, historical or cultural background of a literary work is referred to as",
      ["episode", "plot", "time", "setting"], D,
      "Setting is the place, time and social or historical background in which a work's action happens."),
    // 31 (paper 36)
    q("A plot structure that defies chronology can be described as",
      ["open-ended", "circular", "episodic", "organic"], C,
      "An episodic plot is a loose string of incidents not bound in strict time-and-cause order, so it does not follow a straight chronological line."),
    // 32 (paper 37)
    q("Pun as a literary device deals with",
      ["placing two opposite phrases", "placing words side by side", "playing on words", "arrangement of words"], C,
      "A pun is a play on words: it uses a word's two meanings, or two words that sound alike, for effect."),
    // 33 (paper 38)
    q("In a narrative poem, the poet attempts to",
      ["summarize a story", "describe a place", "preach a sermon", "tell a story"], D,
      "A narrative poem tells a story, with characters and events, as ballads and epics do."),
    // 34 (paper 39)
    q("The account of experiences of an individual during the course of a journey is known as",
      ["a travelogue", "an autobiography", "a catalogue", "a memoir"], A,
      "A travelogue is a written (or filmed) account of a person's experiences on a journey."),
    // 35 (paper 40)
    q("Satirical writing employs",
      ["epigram", "synecdoche", "irony", "onomatopoeia"], C,
      "Satire ridicules vice and folly, and its chief weapon is irony: saying one thing while meaning another."),
    // 36 (paper 41)
    q(KB + "The person being addressed above is a",
      ["soldier", "student", "domestic servant", "lawyer"], A,
      "Only soldiers face a court martial, the military court Basha threatens; in King Baabu, Basha is a general."),
    // 37 (paper 42)
    q(KB + "From the tone of the speech above, the speaker is obviously",
      ["enraged", "lackadaisical", "elated", "happy"], A,
      "The insults ('dumb skull of a bone head'), the threat of court martial and the scornful questions show a man in a rage."),
    // 38 (paper 43)
    q("'That year the harvest was sad, like a funeral, and many farmers wept as they dug up the miserable yams. One man tied his cloth to a tree branch and hanged himself.'\nChinua Achebe, Things Fall Apart\n\nThe mood conveyed in the excerpt above is one of",
      ["sadness", "frustration", "sympathy", "dilemma"], A,
      "The harvest is 'sad, like a funeral', farmers weep and a man hangs himself: the mood is one of sadness."),
    // 39 (paper 44)
    q("'That age is best which is the first,\nWhen youth and blood are warmer;\nBut being spent, the worse, and worst\nTimes still succeed the former.'\n\nThe rhyme scheme in the excerpt above is",
      ["bbaa", "aabb", "abab", "abba"], C,
      "first (a), warmer (b), worst (a), former (b): the rhymes alternate, abab."),
    // 40 (paper 45)
    q("'But the towering earth was tired of sitting in one position. She moved, suddenly, and the houses crumbled, the mountains heaved horribly, and the work of a million years was lost.'\n\nThe subject matter of the extract above is",
      ["storm", "sea waves", "house movement", "earthquake"], D,
      "The earth itself 'moved, suddenly', houses crumbled and mountains heaved: an earthquake."),
    // 41 (paper 46)
    q("'And your laughter like a flame piercing the shadows\nHas revealed Africa to me beyond the snow of yesterday.'\n\nFrom the poem above, shadow means",
      ["famine", "bleak future", "period of sufferings", "abstract ideas"], C,
      "The laughter, like a flame, pierces the shadows, the dark time the speaker has lived through; the shadows stand for a period of suffering."),
    // 42 (paper 47)
    q("'Don't panic. Be calm, if you are somehow upset ...try to regain your composure.'\n\nThe speaker in the excerpt above is",
      ["hopeless", "uncertain", "afraid", "confident"], D,
      "The speaker gives calm, firm instructions ('Don't panic. Be calm') to someone else who may be upset: the speaker is confident.",
      { bookletKey: 'B', bookletNote: "The booklet answer B, uncertain, does not fit: the only uncertainty in the lines ('if you are somehow upset') is about the listener's feelings. The speaker gives short, firm commands to stay calm, which shows confidence, so D is right." }),
    // 43 (paper 48)
    q(FUT + "The poem can be described as",
      ["a lyric", "an epic", "a sonnet", "an elegy"], D,
      "Owen's 'Futility' mourns a young soldier who has died in the snow in France: it is an elegy, a poem of lament for the dead.",
      { keyVerdict: 'corrected', keyAnswer: 'C', answerNote: "The answer often given is C, because the poem has fourteen lines. But it is not built as a sonnet: it is two seven-line stanzas (ababccc) with half-rhymes, not an octave and sestet or three quatrains and a couplet. What it does is lament a dead soldier, which makes it an elegy (D)." }),
    // 44 (paper 49)
    q(FUT + "The theme of the poem is",
      ["futility of life", "distortion of life", "creation of life", "vanity of life"], A,
      "The speaker asks why the sun ever bothered to wake life from the earth if it ends like this: 'O what made fatuous sunbeams toil / To break earth's sleep at all?' The theme is the futility of life.",
      { bookletKey: 'B', bookletNote: "The booklet answer B, distortion of life, is not what the poem says. Faced with the dead soldier, the speaker asks what was the point of the sun's work in creating life at all ('fatuous sunbeams toil'): life seems pointless, so the theme is the futility of life, A, which is also the poem's title." }),
    // 45 (paper 50)
    q("'A cursing rogue with a merry face,\nA bundle of rags upon a crutch,\nStumbled upon that windy place\nCalled Cruachan, and it was as much...'\n\nThe rhyme scheme of the stanza above is",
      ["aabb", "abab", "bbaa", "abba"], B,
      "face (a), crutch (b), place (a), much (b): alternate rhyme, abab."),
  ]);
})();
