/**
 * JAMB/UTME 2011 — LITERATURE-IN-ENGLISH
 * From the 2011 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2011;
  const SRC = 'JAMB UTME 2011';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const SD = "Based on J.C. de Graft's Sons and Daughters: \n";
  const RJ = "Based on William Shakespeare's Romeo and Juliet: \n";
  const OM = "Based on Ferdinand Oyono's The Old Man and the Medal: \n";
  const JM = "Based on Buchi Emecheta's The Joys of Motherhood: \n";
  const NE = "Based on George Orwell's Nineteen Eighty-Four: \n";
  const PO = "Based on the prescribed poems: \n";
  const sd = { setText: 'J.C. de Graft, Sons and Daughters' };
  const rj = { setText: 'William Shakespeare, Romeo and Juliet' };
  const ne = { setText: 'George Orwell, Nineteen Eighty-Four' };

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 2)
    q(SD + "From its resolution of conflicts, the play can be described as a",
      ["tragedy", "comedy", "farce", "melodrama"], B,
      "The conflict between James Ofosu and his children ends happily when he lets them follow their own careers, so the play is a comedy.", sd),
    // 2 (paper 4)
    q(SD + "The final harassment of Maanan takes place in",
      ["Ofosu's office", "Lawyer Bonu's house", "Lawyer Bonu's chamber", "Ofosu's house"], D,
      "Lawyer Bonu's last advance on Maanan happens in James Ofosu's own home: James comes downstairs to find Bonu trying to fondle her.", sd),
    // 3 (paper 5)
    q(SD + "'Everything in this room outrages my sense of beauty, undermines my will to create pictures of lasting appeal...' The speaker in the quotation above is",
      ["happy", "frustrated", "excited", "tired"], B,
      "The speaker, the would-be painter Aaron, complains that his surroundings 'outrage' his sense of beauty and 'undermine' his will to paint: he is frustrated.", sd),
    // 4 (paper 6)
    q(RJ + "'Farewell! God knows when we shall meet again.\nI have a faint cold fear thrills through my veins,\nThat almost freezes up the heat of life:\nI'll call them back again to comfort me:\nNurse! What should she do here?\nMy dismal scene I needs must act alone.\nCome, vial.'\nThe intention of the speaker above is to",
      ["commit suicide", "take a temporary harmful substance", "commit murder", "escape from harsh realities of life"], B,
      "Juliet is about to drink Friar Laurence's potion, which will make her seem dead for a time (forty-two hours) so that she can escape marrying Paris.", rj),
    // 5 (paper 7)
    q(RJ + "The play reaches the point of denouement",
      ["at the family feast", "when Romeo kills Paris at the tomb", "at the reconciliation of the feuding families", "when Romeo is informed of Juliet's death"], C,
      "The denouement is the final unravelling after the climax: here the Montagues and Capulets, seeing their dead children, end their feud.", rj),
    // 6 (paper 8)
    q(RJ + "The news of Juliet's death is broken to Romeo in Mantua by",
      ["Balthasar", "Friar Lawrence", "a boy", "Friar John"], A,
      "Romeo's servant Balthasar sees Juliet laid in the Capulet tomb and rides to Mantua to tell Romeo she is dead.", rj),
    // 7 (paper 9)
    q(RJ + "In the play, Mercutio can be described as",
      ["fraudulent", "quarrelsome", "gentle", "kind-hearted"], B,
      "Witty but hot-headed, Mercutio is always ready for a fight: when Romeo will not fight Tybalt, Mercutio draws on him himself and is killed.", rj),
    // 8 (paper 10)
    q(RJ + "The plot of the play is",
      ["simple", "complicated", "convoluted", "chronological"], D,
      "The events are told in the order they happen, over a few days from the street brawl to the lovers' deaths: the plot is chronological.", rj),
    // 9 (paper 12)
    q(OM + "Father Vandermayer's attitude and action toward Meka illustrate the church's",
      ["despondency", "suspicion", "infuriation", "hypocrisy"], D,
      "The priest praises Meka as a good Christian because Meka gave his land to the Church, yet the Church does nothing for him in return: Oyono exposes its hypocrisy.",
      { setText: 'Ferdinand Oyono, The Old Man and the Medal' }),
    // 10 (paper 15)
    q(JM + "In the novel, Nwokocha Agbadi is famous for his oratorical powers and",
      ["height", "treachery", "illiteracy", "wealth"], D,
      "Agbadi, Nnu Ego's father, is a very wealthy local chief, a great wrestler, admired for his gifted oratory.",
      { setText: 'Buchi Emecheta, The Joys of Motherhood' }),
    // 11 (paper 16)
    q(JM + "In the novel, the handing over of a baby boy in a dream to Nnu Ego by her personal god signifies",
      ["reincarnation", "future blessing", "idol worship", "doom"], B,
      "The dream in which her chi hands Nnu Ego a baby boy signals the child to come: soon after, she gives birth to her first son, Ngozi.",
      { setText: 'Buchi Emecheta, The Joys of Motherhood' }),
    // 12 (paper 17)
    q(NE + "The novel draws a picture of",
      ["a useless past", "a totalitarian future", "an unstable moment", "a peaceful atmosphere"], B,
      "Written in 1948, the novel imagines a future Britain (Airstrip One) under the total control of the Party and Big Brother: a totalitarian future.", ne),
    // 13 (paper 18)
    q(NE + "The power and oppression of an irresistible evil debased Winston's dreams of",
      ["freedom and democracy", "internal security", "wealth and capitalism", "sovereignty"], A,
      "Winston dreams of a free life outside the Party's control; the Party's crushing power breaks him and destroys those dreams of freedom.", ne),
    // 14 (paper 19)
    q(NE + "Room 101 symbolizes a place of",
      ["rest", "fun", "humiliation", "torture"], D,
      "Room 101 holds 'the worst thing in the world' for each prisoner; for Winston it is the cage of rats that finally breaks him: it stands for torture.", ne),
    // 15 (paper 20)
    q(NE + "The novel can be described as",
      ["optimistic", "antagonistic", "persuasive", "pessimistic"], D,
      "The novel ends with Winston broken and loving Big Brother; there is no hope of escape, so its outlook is pessimistic.", ne),
    // 16 (paper 21)
    q(PO + "In Naked Soles, Adeoti writes that the carnival of naked soles dances through",
      ["scorching sun", "a dirty room", "blooming thorns", "a cloudy atmosphere"], C,
      "The naked soles dance 'through blooming thorns', an image of people carrying on through pain.",
      { setText: 'Gbemisola Adeoti, Naked Soles' }),
    // 17 (paper 22)
    q(PO + "In Rubadiri's An African Thunderstorm, the thunderstorm begins with",
      ["rain from the west", "clouds from the east", "rain from the east", "clouds from the west"], D,
      "The poem opens 'From the west / Clouds come hurrying with the wind'.",
      { setText: 'David Rubadiri, An African Thunderstorm' }),
    // 18 (paper 23)
    q(PO + "The theme of Acquah's In the Navel of the Soul is",
      ["the conflict of traditions", "ensuring that traditions and beliefs were strictly observed", "the futility of man and his tradition", "the strength in diversity of culture and traditional views"], A,
      "The 'experts' with their negative urine test clash with 'the midwives of the spirit' who feel life by touch: modern and traditional ways of knowing in conflict.",
      { setText: 'Kobena Eyi Acquah, In the Navel of the Soul' }),
    // 19 (paper 26)
    q(PO + "'Woman cannot exist except by man, what is there in that to vex some of them so?' The statement above from the poem Give Me the Minstrel's Seat exemplifies",
      ["litotes", "rhetorical question", "transferred epithet", "synecdoche"], B,
      "'What is there in that to vex some of them so?' is asked for effect, not for an answer: a rhetorical question.",
      { setText: "Traditional Swahili, Give Me the Minstrel's Seat" }),
    // 20 (paper 27)
    q(PO + "Marvell, in To His Coy Mistress, uses the imagery of death to",
      ["appreciate God's power", "underscore life's transience", "condemn the lady", "scare the lady"], B,
      "Images of the grave and worms show how short life is, so the speaker urges the lady to love now: they underscore life's transience.",
      { setText: 'Andrew Marvell, To His Coy Mistress' }),
    // 21 (paper 28)
    q(PO + "To sustain the interest of readers, Lawrence in Bat uses",
      ["elision", "hyperbole", "suspense", "oxymoron"], C,
      "Lawrence takes the flying creatures at dusk for swallows and only gradually reveals the truth, 'Never swallows! / Bats!': he builds suspense.",
      { setText: 'D.H. Lawrence, Bat' }),
    // 22 (paper 29)
    q(PO + "'With a running stream and a water-mill beating the darkness,\nAnd three trees on the low sky.'\nIn the excerpt above from Eliot's Journey of the Magi, the dominant literary device is",
      ["oxymoron", "personification", "hyperbole", "alliteration"], B,
      "The water-mill is pictured 'beating the darkness', as if it were a living being striking at the night: personification.",
      { setText: 'T.S. Eliot, Journey of the Magi' }),
    // 23 (paper 31)
    q("The large space above the proscenium in a theatre from which the scenes are controlled is called",
      ["aside", "setting", "anachronism", "flies"], D,
      "The flies (the fly loft or fly tower) is the space above the stage from which scenery and lights are raised and lowered."),
    // 24 (paper 32)
    q("'Good warriors make others come to them and not go to others... When you induce opponents to come to you, then their force is always empty, like attacking emptiness with fullness, like throwing stones on eggs.'\nZhang Yu: The Art of War\n\nThe theme of the passage above is",
      ["folly of soldiers", "inspiration", "spurring people to action", "war"], C,
      "The passage is about getting the enemy to move: the good warrior 'induces' opponents to come to him, spurring them to act on his terms."),
    // 25 (paper 33)
    q("The repetition of single words or phrases at the beginning of lines is",
      ["assonance", "parallelism", "onomatopoeia", "alliteration"], B,
      "Repeating the same word or phrase at the start of successive lines (anaphora) gives the lines a parallel structure; of the options, parallelism is the device."),
    // 26 (paper 34)
    q("A ballad is meant to be",
      ["acted", "sung", "discussed", "read"], B,
      "A ballad is a story told in song: it began as a folk song meant to be sung."),
    // 27 (paper 35)
    q("In drama, a dramaturge is he who",
      ["writes or edits plays", "features in a play", "directs a play", "acts a film"], A,
      "A dramaturge (dramaturg) is a playwright or a theatre's literary adviser who adapts and edits plays."),
    // 28 (paper 36)
    q("A travelogue is a work of art written",
      ["by a famous playwright", "before the death of the author", "by an unpopular novelist", "on a journey"], D,
      "A travelogue records the places and people met on a journey."),
    // 29 (paper 37)
    q("Plays are basically meant to",
      ["change the world", "keep people out of trouble", "be ready for pleasure", "be presented on stage"], D,
      "Drama is written for performance: a play is meant to be acted on stage before an audience."),
    // 30 (paper 38)
    q("A character who re-enacts familiar experiences that readers easily identify with is a",
      ["round character", "flat character", "stock character", "static character"], C,
      "A stock character is a familiar type (the jealous husband, the wicked stepmother, the wise old man) whose behaviour readers recognise at once."),
    // 31 (paper 39)
    q("The plot of a story generally refers to the",
      ["intrigue made by a character against the hero", "way the writer ends the story", "way in which the events of the story are organized", "way in which the writer begins the story"], C,
      "Plot is the arrangement of the events of a story, linked by cause and effect, from beginning through conflict and climax to resolution."),
    // 32 (paper 40)
    q("The metric pattern in a line of poetry with five stressed and five unstressed syllables is",
      ["trochaic decametre", "dactylic metre", "iambic pentameter", "anapaestic metre"], C,
      "Five feet, each an unstressed syllable followed by a stressed one (da-DUM x 5), make iambic pentameter."),
    // 33 (paper 41)
    q("THESEUS: Now, fair Hippolyta, our nuptial hour\nDraws on apace; four happy days bring in\nAnother moon: but, O, methinks, how slow\nThis old moon wanes! she lingers my desires,\nLike to a step-dame or a dowager\nLong withering out a young man's revenue.\nWilliam Shakespeare: A Midsummer Night's Dream\n\nThe literary devices used in the excerpt above are",
      ["personification and simile", "irony and suspense", "alliteration and synecdoche", "rhyme and refrain"], A,
      "The moon is a 'she' who 'lingers' Theseus's desires (personification), and she is compared 'like to a step-dame or a dowager' (simile)."),
    // 34 (paper 42)
    q("'You are the silent code of pleasure locked in wordless wonder.\nYou are the hive of treasure, no dragon can plunder.'\nGbemisola Adeoti: Dream Code\n\nThe excerpt above achieves its rhetorical effect through the use of",
      ["repetition and meiosis", "metaphor and rhyme", "caesura and hyperbole", "alliteration and irony"], B,
      "The beloved is called a 'code' and a 'hive of treasure' (metaphors), and 'pleasure/treasure' and 'wonder/plunder' rhyme."),
    // 35 (paper 43)
    q("'It was not yet closing time, but already most staffs were trooping out of their offices. The lift was working now and he squeezed himself into it, breathing with difficulty the body odour emitted by one of the passengers. He sighed with relief when they got to the ground floor and tumbled out of the lift.'\nKen Saro-Wiwa: A Forest of Flowers\n\nIn the excerpt above, the subject's experience in the lift is",
      ["timely", "comfortable", "unpleasant", "amusing"], C,
      "He is squeezed in, breathes 'with difficulty' a passenger's body odour and sighs 'with relief' on getting out: the ride is unpleasant."),
    // 36 (paper 44)
    q("'Do not thank me, instead, let me ask you one question. Now you have all come here sprawling, vomiting, rubbing tears on one another, begging me to do my duty and help you. But what about you yourselves? What have you done to help yourselves? Answer, or is the land at peace? Are not people ailing and dying?'\nOla Rotimi: The Gods Are Not to Blame\n\nIn the excerpt above, the land is not at peace because of",
      ["chieftaincy tussle", "famine and war", "political unrest", "sickness and death"], D,
      "King Odewale asks, 'Are not people ailing and dying?': the land of Kutuje is troubled by sickness and death.",
      { bookletKey: 'B', bookletNote: "The excerpt itself names the trouble: 'Are not people ailing and dying?' and the people come 'vomiting', which is sickness and death (D). Kutuje is struck by a plague; no famine or war is mentioned in these lines." }),
    // 37 (paper 45)
    q("'In those days\nWhen civilization kicked us in the face\nWhen holy water slapped our cringing brows\nThe vultures built in the shadow of their talons...'\nDavid Diop: The Vultures\n\nThe dominant literary device used in the lines above is",
      ["pun", "metaphor", "personification", "simile"], C,
      "'Civilization' kicks and 'holy water' slaps, as if they were people: personification."),
    // 38 (paper 46)
    q("'I am not afraid of anything,' he told them. 'I have done almost everything in this world. I have committed all crimes you can think of and been jailed for most of them. I have been in prison more hours than I have been out of it within the last five years.'\n\nIn recounting his criminal life, the speaker's tone is",
      ["regretful", "boastful", "subdued", "repentant"], B,
      "'I am not afraid of anything... I have committed all crimes you can think of': he brags about his crimes, so his tone is boastful."),
    // 39 (paper 47)
    q("'I have said too much unto a heart of stone,\nAnd laid mine honour too unchary on't:\nThere's something in me that reproves my fault;\nBut such a headstrong potent fault it is,\nThat it but mocks reproof.'\nWilliam Shakespeare: Twelfth Night\n\n'A heart of stone' in the lines above is an example of",
      ["metonymy", "litotes", "assonance", "metaphor"], D,
      "Olivia calls Viola-Cesario's unfeeling heart 'a heart of stone', a direct comparison without 'like' or 'as': a metaphor."),
    // 40 (paper 48)
    q("'Blood was to prove no solace to the king. The rejection he had suffered at Idawa's hands pushed his spirit into a comfortless hole in which, alone with himself, he searched in vain for ways to run from his inner emptiness.'\nAyi Kwei Armah: Two Thousand Seasons\n\nThe narrator's attitude to the king is one of",
      ["envy", "sympathy", "suspicion", "contempt"], D,
      "The narrator shows the king as a hollow man, rejected, searching 'in vain' to escape his 'inner emptiness': the attitude is contempt."),
    // 41 (paper 49)
    q("'Homage to Peregede, the triumphant mother of mourning, radiant in Chameleon's velvet. Let today's dawn bring on its rail trains of good tidings.'\nGbemisola Adeoti: Salutation to the Gods\n\nThe excerpt above is an example of",
      ["invocation", "limerick", "ode", "elegy"], A,
      "The speaker pays 'homage' to a deity and calls on the day to bring good news: an invocation, a calling upon a god."),
    // 42 (paper 50)
    q("'The woods decay, the woods decay and fall,\nThe vapours weep their burthen to the ground,\nMan comes and tills the field and lies beneath,\nAnd after many a summer dies the swan.'\n\nThe subject matter of the lines above is",
      ["death", "rainfall", "famine", "storm"], A,
      "Woods 'decay and fall', man 'lies beneath' the field he tilled and the swan 'dies': everything in nature dies, so the subject is death."),
  ]);
})();
