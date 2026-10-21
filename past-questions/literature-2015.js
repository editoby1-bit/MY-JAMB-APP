/**
 * JAMB/UTME 2015 — LITERATURE-IN-ENGLISH
 * From the 2015 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2015;
  const SRC = 'JAMB UTME 2015';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const WO = "Based on Femi Osofisan's Women of Owu: \n";
  const TT = "Based on William Shakespeare's The Tempest: \n";
  const WP = "Based on Asare Konadu's A Woman in Her Prime: \n";
  const PH = "Based on Chimamanda Ngozi Adichie's Purple Hibiscus: \n";
  const OM = "Based on Ernest Hemingway's The Old Man and the Sea: \n";
  const PO = "Based on the prescribed poems: \n";
  const WOt = { setText: 'Femi Osofisan, Women of Owu' };
  const TTt = { setText: 'William Shakespeare, The Tempest' };
  const WPt = { setText: 'Asare Konadu, A Woman in Her Prime' };
  const PHt = { setText: 'Chimamanda Ngozi Adichie, Purple Hibiscus' };
  const OMt = { setText: 'Ernest Hemingway, The Old Man and the Sea' };
  const SERIOUS = "'I think this is a very serious matter,' she said slowly. 'I feel that we should keep it to ourselves. We will not mention it to anybody else.'\n\n";
  const MAC = "'There is no art to find the mind's construction in the face\nHe was a gentleman on whom I built an absolute trust.'\nShakespeare, Macbeth\n\n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 3)
    q(WO + "The first character to speak in the play is",
      ["Anlugbua", "Okunade", "Asunkungbade", "Adeoti"], A,
      "The play opens with Anlugbua, the deified founder of Owu, disguised as an old man, asking two women what city lies in ruins.",
      WOt),
    // 2 (paper 4)
    q(WO + "In the play, the open space where the actions first begin used to be",
      ["the shrine of Ogun", "a market place", "the king's palace", "the royal burial ground"], B,
      "The play is set in an open space near the main gate of ruined Owu, a place which used to serve as a market.",
      WOt),
    // 3 (paper 6)
    q(TT + "The character of Prospero is",
      ["static", "flat", "dynamic", "ambivalent"], C,
      "Prospero changes in the course of the play: he plans revenge on his enemies but ends by forgiving them and giving up his magic, so he is a dynamic character.",
      TTt),
    // 4 (paper 7)
    q(TT + "One of the lessons to be learnt from the play is that",
      ["spirit controls all man's actions", "it is good to be wicked sometimes", "to err is human, to forgive divine", "royalty must not meet with the lowly class"], C,
      "Prospero forgives Alonso and Antonio, who wronged him: 'The rarer action is in virtue than in vengeance.' The play teaches forgiveness.",
      TTt),
    // 5 (paper 8)
    q(TT + "The magical atmosphere in the play is created by",
      ["Ariel", "Caliban", "Ferdinand", "Miranda"], A,
      "Ariel, Prospero's spirit servant, raises the tempest, plays invisible music, appears as a harpy and carries out all of Prospero's magic.",
      TTt),
    // 6 (paper 9)
    q(TT + "'...This damned witch..., for mischiefs manifold...'\nThe lines above refer to",
      ["Ariel", "Nymph", "Prospero", "Sycorax"], D,
      "Prospero reminds Ariel of 'This damn'd witch Sycorax, / For mischiefs manifold and sorceries terrible', Caliban's mother, who once imprisoned Ariel in a pine.",
      TTt),
    // 7 (paper 10)
    q(TT + "The relationship between Prospero and Caliban symbolizes",
      ["democracy", "colonialism", "materialism", "justice"], B,
      "Prospero takes Caliban's island, teaches him his language and makes him a slave: the relationship of colonial master and colonised native.",
      TTt),
    // 8 (paper 11)
    q(WP + SERIOUS + "The serious matter refers to",
      ["the search for Yaw Boakye", "the disappearance of the black hen for sacrifice", "Pokuwaa's sighting of a corpse near her farm", "Pokuwaa's inability to have a child"], C,
      "Pokuwaa finds a dead body in the forest near her farm; afraid of drawing attention to herself, she tells only her mother and they keep quiet while the village searches for the missing man.",
      WPt),
    // 9 (paper 12)
    q(WP + SERIOUS + "The speaker of the excerpt is",
      ["Pokuwaa's husband", "Koramoa", "Pokuwaa", "Pokuwaa's mother"], D,
      "Pokuwaa tells only her mother about the corpse, and it is her mother who advises that they keep the matter to themselves.",
      WPt),
    // 10 (paper 13)
    q(WP + "The first husband of Pokuwaa is",
      ["Kofi Ako", "Kofi Daafo", "Dede", "Kwadwo"], B,
      "Pokuwaa divorced her first two husbands, Kofi Daafo and Kwaku Fosu, because she had no child by them; Kwadwo is her third husband.",
      WPt),
    // 11 (paper 14)
    q(PH + "Jaja and Kambili are",
      ["siblings", "half-brothers", "cousins", "not brothers"], A,
      "Jaja and Kambili are brother and sister, the two children of Eugene and Beatrice Achike.",
      PHt),
    // 12 (paper 15)
    q(PH + "'The wafer gives me bad breath.'\nWhat is referred to in the statement above is",
      ["chocolate", "the Last Supper", "biscuit", "Holy Communion"], D,
      "Jaja refuses to receive Holy Communion on Palm Sunday and gives this excuse: the wafer is the bread of Communion.",
      PHt),
    // 13 (paper 16)
    q(PH + "The novel begins with an account of",
      ["family reunion", "family meeting", "Jaja's rebellion", "Kambili's school"], C,
      "The first line is 'Things started to fall apart at home when my brother, Jaja, did not go to communion and Papa flung his heavy missal across the room.'",
      PHt),
    // 14 (paper 17)
    q(OM + "In the novella, Manolin is",
      ["a type of fish", "the author's pseudonym", "the name of a ship", "the old man's apprentice"], D,
      "Manolin is the boy whom Santiago taught to fish; he loves the old man and looks after him.",
      OMt),
    // 15 (paper 18)
    q(OM + "The novella portrays death as",
      ["an end in itself", "a means of punishment", "an inevitable force", "the beginning of man's struggle"], C,
      "In the sea's world every creature kills and is killed: the marlin, the sharks and in time the old man himself. Death is the inevitable end that man must face with courage.",
      OMt),
    // 16 (paper 19)
    q(OM + "The protagonist of the novella is remarkable for his",
      ["cowardice and laziness", "cunningness and dexterity", "courage and tenacity", "altruism and sophistry"], C,
      "Santiago fights the marlin for three days and the sharks all the way home: 'A man can be destroyed but not defeated.'",
      OMt),
    // 17 (paper 20)
    q(OM + "The first experience of Manolin on a fishing expedition is at the age of",
      ["ten", "eight", "twelve", "five"], D,
      "Manolin asks how old he was when Santiago first took him in a boat; the old man answers, 'Five', and that he was nearly killed when a fish was brought in too green.",
      OMt),
    // 18 (paper 21)
    q(PO + "Umeh's Ambassadors of Poverty suggests that the ambassadors are",
      ["corrupt and greedy", "honest and hardworking", "selfless and patriotic", "warriors and fighters"], A,
      "The 'ambassadors of poverty' are the corrupt, greedy leaders who loot the nation and keep the people poor.",
      { setText: 'Philip Umeh, Ambassadors of Poverty' }),
    // 19 (paper 22)
    q(PO + "In Owonibi's Homeless, not Hopeless, the persona makes a case for the",
      ["parliamentarians", "beggars", "military", "rulers"], B,
      "The persona speaks as one of the beggars, the 'natives of the street', insisting 'We are necessary'.",
      { setText: 'Sola Owonibi, Homeless, not Hopeless' }),
    // 20 (paper 23)
    q(PO + "In Raleigh's The Soul's Errand, rhetorical effect is achieved through the use of",
      ["parallelism", "enjambment", "caesura", "irony"], A,
      "Stanza after stanza repeats the same pattern ('Say to the court... Say to the church... If they reply, / Then give them all the lie'): parallelism.",
      { setText: 'Sir Walter Raleigh, The Soul\'s Errand' }),
    // 21 (paper 24)
    q(PO + "The dominant device in Donne's The Sun Rising is",
      ["personification", "metaphor", "alliteration", "simile"], A,
      "The speaker scolds the sun as a 'Busy old fool, unruly Sun' that peeps through the curtains: the sun is treated as a person throughout.",
      { setText: 'John Donne, The Sun Rising' }),
    // 22 (paper 25)
    q(PO + "The tone of Angira's Expelled is",
      ["indifferent", "aggressive", "melancholic", "optimistic"], C,
      "The persona mourns the loss of his land and home to intruders, weeping in helpless sorrow: a melancholic tone.",
      { setText: 'Jared Angira, Expelled' }),
    // 23 (paper 26)
    q(PO + "Cheney-Coker's Myopia suggests that peasants are seen on",
      ["rainy mornings", "dark evenings", "sunny days", "stormy nights"], A,
      "The poem opens: 'On rainy mornings / You will see them drenched / PEASANTS!'",
      { setText: 'Syl Cheney-Coker, Myopia' }),
    // 24 (paper 28)
    q(PO + "The tone of Fletcher's Upon an Honest Man's Fortune is",
      ["confident", "anxious", "calm", "hostile"], A,
      "The poet firmly declares that 'Man is his own star' and needs no astrologers: an assured, confident tone.",
      { setText: 'John Fletcher, Upon an Honest Man\'s Fortune' }),
    // 25 (paper 29)
    q(PO + "In Adeoti's Hard Lines, sodium cyanide is",
      ["poisonous", "fragrant", "sweet", "adhesive"], A,
      "Sodium cyanide is a deadly poison; the poem uses it, with mustard gas, for the dangers that face anyone who speaks the truth.",
      { setText: 'Gbemisola Adeoti, Hard Lines' }),
    // 26 (paper 30)
    q(PO + "'and it lulled me to sleep'\nThe excerpt above from Hughes's The Negro Speaks of Rivers refers to",
      ["New Orleans", "River Mississippi", "River Congo", "River Nile"], C,
      "'I built my hut near the Congo and it lulled me to sleep.'",
      { setText: 'Langston Hughes, The Negro Speaks of Rivers' }),
    // 27 (paper 31)
    q("A literary device in which two negative ideas are used to express the positive is",
      ["innuendo", "synecdoche", "litotes", "ellipsis"], C,
      "Litotes is understatement by denying the opposite, often with a double negative: 'not unkind' for kind."),
    // 28 (paper 32)
    q("The analysis of a work of art is",
      ["style", "resolution", "rhetorics", "criticism"], D,
      "Literary criticism is the analysis, interpretation and evaluation of works of literature."),
    // 29 (paper 33)
    q("The central idea in a play or novel is known as the",
      ["synopsis", "theme", "summary", "style"], B,
      "The theme is the main idea or message a work explores; a synopsis or summary only retells what happens."),
    // 30 (paper 34)
    q("A passage which endeavours to tell a well-defined story is",
      ["expository", "narrative", "argumentative", "descriptive"], B,
      "Narrative writing tells a story, a sequence of events."),
    // 31 (paper 35)
    q("The general locale, historical time and social circumstances in which an action occurs in a literary work is",
      ["setting", "theme", "plot", "structure"], A,
      "Setting is the place, time and social background of a story."),
    // 32 (paper 36)
    q("A literary work that ridicules a society is",
      ["satire", "farce", "paradox", "sarcasm"], A,
      "Satire uses humour, irony and exaggeration to ridicule the faults of a society or its people."),
    // 33 (paper 37)
    q("The point in literature where two characters struggle is",
      ["conflict", "irony", "suspense", "catastrophe"], A,
      "Conflict is the struggle between opposing forces, such as two characters."),
    // 34 (paper 38)
    q("The drama which subordinates words to actions, gestures and sound in an effort to overwhelm the audience is",
      ["theatre-in-the-theatre", "theatre-in-the-round", "theatre of the absurd", "theatre of cruelty"], D,
      "Antonin Artaud's Theatre of Cruelty plays down words in favour of gesture, sound, light and spectacle in order to shock and overwhelm the audience's senses.",
      { bookletKey: 'C', bookletNote: "The Theatre of the Absurd (Beckett, Ionesco) shows a meaningless world, often through illogical dialogue, but it still relies on words. The aim of overwhelming the audience with gesture and sound rather than words is Artaud's Theatre of Cruelty (D)." }),
    // 35 (paper 39)
    q("A work of art that is designed to expound on a moral is",
      ["didactic", "humorous", "aesthetic", "idyllic"], A,
      "A didactic work is written to teach a lesson or moral."),
    // 36 (paper 40)
    q("The technique employed by a writer to sustain the interest of a reader is",
      ["foreshadowing", "suspense", "flashback", "aside"], B,
      "Suspense keeps the reader anxious to know what will happen next, and so holds interest."),
    // 37 (paper 41)
    q("'Ay, your times were fine times indeed; you have been telling\nus of them for many a long year. Here we live in an old\nrumbling mansion, that looks for all the world like an inn, but\nwe never see company.'\nGoldsmith: She Stoops to Conquer\n\nThe dominant figure of speech used in line four is",
      ["alliteration", "personification", "onomatopoeia", "antithesis"], D,
      "'We never see company' is set against the 'inn' of the line before, a place always full of guests: the contrast is antithesis."),
    // 38 (paper 42)
    q("'There is no armour against fate;\nDeath lays his icy hand on kings:\nSceptre and crown...\nAnd in the dust be equal made\nWith the poor crooked scythe and spade'\n\nThe poet above implies that",
      ["all people must die one day", "death of the common man is not celebrated", "men are equal in death", "kings also die"], C,
      "The king's sceptre and crown are 'in the dust ... equal made' with the peasant's scythe and spade: death makes all men equal."),
    // 39 (paper 43)
    q(MAC + "Face from the excerpt can be",
      ["appealing", "difficult", "deceptive", "trusted"], C,
      "Duncan says no skill can read a person's mind from his face: Cawdor looked loyal but was a traitor, so a face can be deceptive."),
    // 40 (paper 44)
    q(MAC + "The tone of the speaker is that of",
      ["fear", "disappointment", "doubt", "indifference"], B,
      "Duncan speaks of the traitor Cawdor, 'a gentleman on whom I built / An absolute trust': the tone is of disappointment at a betrayed trust.",
      { keyVerdict: 'corrected', keyAnswer: 'C', answerNote: "The answer often given is C, doubt. Duncan is not doubting anything: he is certain Cawdor betrayed him and regrets the 'absolute trust' he placed in him. His words express disappointment at that betrayal, so B fits better." }),
    // 41 (paper 45)
    q("'Her neck is rope-like thin, long and skinny and her face sickly pale.'\nOkot p'Bitek: Song of Lawino\n\nThe subject referred to in the poem is being",
      ["pitied", "praised", "ridiculed", "appreciated"], C,
      "Lawino mocks Clementine, her rival, with ugly images: a 'rope-like' neck and a 'sickly pale' face. She is being ridiculed."),
    // 42 (paper 46)
    q("'Ah, sunflower, weary of time,\nWho countest the steps of the sun,\nSeeking after that sweet golden clime\nWhere the traveller's journey is done.'\n\nThe figure of speech used in line two of the poem is",
      ["personification", "oxymoron", "simile", "alliteration"], A,
      "The sunflower is said to count the steps of the sun, a human action: personification."),
    // 43 (paper 47)
    q("'Gradually, the guests assembled; young and old, pretty and plain; all alike seemingly bent on enjoying themselves, some with gifts, and all with cordial greeting for Mary...'\n\n'Young and old, pretty and plain' in the extract are examples of",
      ["oxymoron", "simile", "antithesis", "litotes"], C,
      "Opposites (young/old, pretty/plain) are set side by side in balanced phrases to describe different guests: antithesis.",
      { bookletKey: 'A', bookletNote: "An oxymoron joins contradictory words to describe one and the same thing, as in 'sweet sorrow'. Here the opposites describe different people (some young, some old), set side by side in balanced phrases, which is antithesis (C)." }),
    // 44 (paper 48)
    q("'O great defeated ancestors you promised us mortal life with immortal joys\nBut how you deceived us!'\nM. Kunene: Elegy\n\nThe mood of the persona above is that of",
      ["defiance", "supplication", "grief", "submission"], C,
      "In this elegy the persona mourns the broken promise of the 'defeated ancestors': 'how you deceived us!' The mood is one of grief."),
    // 45 (paper 49)
    q("'Pagan names, he says, belong to sinners who will burn in everlasting fire...'\nOkot p'Bitek: Song of Lawino\n\nThe tone from the lines above is",
      ["aggressive", "indifferent", "satirical", "hysterical"], C,
      "Lawino repeats the preacher's teaching that African names are 'pagan' and doom people to hellfire, in order to mock it: the tone is satirical.",
      { keyVerdict: 'corrected', keyAnswer: 'D', answerNote: "The answer often given is D, hysterical. Lawino is calm and mocking here, not frantic: she reports the claim that pagan names doom people to 'everlasting fire' so that its absurdity shows. That is a satirical tone (C)." }),
    // 46 (paper 50)
    q("'She gave out colanuts and together they ate to appease the angry earth and Amadioha spoke through lightning and thunder.'\n\nPeace in the poem is achieved through",
      ["eating together", "appeasing the earth", "giving out of colanuts", "Amadioha's speech"], A,
      "Sharing kola is the traditional sign of peace and fellowship: the people eat the colanuts together, and that shared act makes peace."),
  ]);
})();
