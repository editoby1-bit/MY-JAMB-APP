/**
 * JAMB/UTME 2012 — LITERATURE-IN-ENGLISH
 * From the 2012 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2012;
  const SRC = 'JAMB UTME 2012';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const SD = "Based on J.C. de Graft's Sons and Daughters: \n";
  const RJ = "Based on William Shakespeare's Romeo and Juliet: \n";
  const OM = "Based on Ferdinand Oyono's The Old Man and the Medal: \n";
  const JM = "Based on Buchi Emecheta's The Joys of Motherhood: \n";
  const NE = "Based on George Orwell's Nineteen Eighty-Four: \n";
  const PO = "Based on the prescribed poems: \n";
  const SDt = { setText: 'J.C. de Graft, Sons and Daughters' };
  const RJt = { setText: 'William Shakespeare, Romeo and Juliet' };
  const OMt = { setText: 'Ferdinand Oyono, The Old Man and the Medal' };
  const JMt = { setText: 'Buchi Emecheta, The Joys of Motherhood' };
  const NEt = { setText: 'George Orwell, Nineteen Eighty-Four' };
  const BOTTLE = "'If you touch me, I shall smash your face with this bottle.'\n\n";
  const NIGHT1 = "'Hide me now, when night children haunt the earth'\nWole Soyinka, Night\n\n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 2)
    q(SD + "Who is the paternal aunt to Aaron and Maanan?",
      ["Mrs Bonu", "Hannah", "Fosuwa", "Adwoa"], C,
      "Fosuwa is James Ofosu's elder sister, so she is the paternal aunt (father's sister) of Aaron and Maanan.",
      SDt),
    // 2 (paper 3)
    q(SD + "From the play, George is a",
      ["laboratory assistant", "pharmacist", "nurse", "medical doctor"], D,
      "George, the eldest of James Ofosu's children, has qualified from medical school and is a practising doctor, the kind of 'respectable' profession James admires.",
      SDt),
    // 3 (paper 4)
    q(SD + BOTTLE + "The statement is made by",
      ["Maanan to Lawyer B", "Maanan to Mrs Bonu", "James to Awere", "Awere to Aaron"], A,
      "Maanan threatens Lawyer Bonu with a bottle when he tries to force his attentions on her.",
      SDt),
    // 4 (paper 5)
    q(SD + BOTTLE + "The issue at stake is that",
      ["Maanan is trying to compromise", "Lawyer B is trying to kiss Maanan", "James sees Awere as a bad influence", "Mrs Bonu is taunting Maanan for loving her husband"], B,
      "Lawyer Bonu, the wealthy family friend, makes advances to Maanan and tries to kiss her; she defends herself with the bottle.",
      SDt),
    // 5 (paper 6)
    q(RJ + "'From forth the fatal loins of these two foes\nA pair of star-crossed lovers take their life...'\nThe lines above suggest that the tragedy in the play",
      ["could have been averted", "is predestined", "is brought on by enmity", "brought misfortune on the lovers"], B,
      "'Fatal loins' and 'star-crossed lovers' say that the lovers' doom is written in the stars from birth: the tragedy is predestined.",
      RJt),
    // 6 (paper 7)
    q(RJ + "'O, she doth teach the torches to burn bright!\nIt seems she hangs upon the cheek of night\nLike a rich jewel in an Ethiop's ear.'\nFrom the lines above, Juliet's beauty is presented",
      ["in contrast to the dark night", "as a source of envy to all", "in terms of riches", "as being outstanding"], A,
      "Romeo sets Juliet's brightness against darkness (the cheek of night, an Ethiop's ear), so that her beauty stands out above everything else.",
      Object.assign({ keyVerdict: 'multiple', alsoAccept: [D], answerNote: "Both A and D are fully right. Romeo presents Juliet's beauty against the darkness of night (A), and the point of the contrast is that she outshines everything, even the torches (D)." }, RJt)),
    // 7 (paper 8)
    q(RJ + "'The all-seeing sun\nNe'er saw her match since first the world begun.'\nThe lines above were spoken by",
      ["Count Paris in praise of Juliet", "Romeo in praise of Juliet", "Romeo in praise of Rosaline", "Lady Capulet in praise of Rosaline"], C,
      "In Act 1 Scene 2, before he has even met Juliet, Romeo tells Benvolio that no woman can match Rosaline.",
      RJt),
    // 8 (paper 9)
    q(RJ + "The major role of Mercutio in the play is to",
      ["serve as a contrast to Romeo", "aid and abet Romeo's passion", "annoy Tybalt", "accompany Romeo to Friar Lawrence"], A,
      "Witty, bawdy and scornful of romantic love, Mercutio is a foil to the dreamy, lovesick Romeo.",
      RJt),
    // 9 (paper 10)
    q(RJ + "The play shares the feature of classical tragedy through the use of",
      ["violence on stage", "chorus", "comic relief", "flashback"], B,
      "Like Greek tragedy, the play uses a Chorus, who speaks the Prologue and the opening of Act 2.",
      RJt),
    // 10 (paper 11)
    q(OM + "'Meka, kneeling down in his usual fashion with his behind up in the air. Kelara knelt down beside him. Amalia and her husband knelt down as well.'\nThe actions of Meka, Kelara, Amalia and her husband signify",
      ["parade", "dance", "prayer", "celebration"], C,
      "Kneeling down together is the posture of prayer; Meka and his family are devout Catholic converts.",
      OMt),
    // 11 (paper 12)
    q(OM + "'He had knocked his toes against so many things that he had no toenails anymore and the yaws he had suffered from his youth had twisted his toes up so that they pointed to the sky.'\nThe description above is in reference to the foot of",
      ["Kelara", "Meka", "Engamba", "Mvondo"], B,
      "These are Meka's feet, deformed by years of walking barefoot and by yaws; that is why the new shoes he wears for the medal ceremony torture him.",
      OMt),
    // 12 (paper 13)
    q(OM + "'They said their prayers in a monotonous sing-song, kneeling on their bamboo bed like camels waiting to be loaded.'\nThe dominant figure of speech in the excerpt above is",
      ["rhetorical question", "simile", "metaphor", "mixed metaphor"], B,
      "The kneeling couple are compared to camels using 'like': a simile.",
      OMt),
    // 13 (paper 14)
    q(JM + "As a symbol of material success and fulfilment, Ibuza community places a lot of importance on",
      ["childbirth", "wealth", "male child", "female child"], C,
      "In Ibuza a woman's worth and a man's success are measured by children, above all sons who carry on the family line.",
      Object.assign({ keyVerdict: 'multiple', alsoAccept: [A], answerNote: "Both C and A are right. Ibuza society treats bearing children as a woman's whole fulfilment (A), and it values male children most of all (C): a woman's standing depends on the sons she bears." }, JMt)),
    // 14 (paper 15)
    q(JM + "Ona on her dying bed appeals to Agbadi to",
      ["give her a befitting burial", "take good care of her children", "take another wife", "allow Nnu Ego marry a man of her choice"], D,
      "Dying, Ona asks Agbadi to let their daughter Nnu Ego have a life of her own and a husband if she wants one.",
      JMt),
    // 15 (paper 17)
    q(NE + "The novel is mainly classified as a",
      ["metaphor", "hyperbole", "satire", "fiction"], C,
      "Nineteen Eighty-Four is a political satire: a dystopian picture that attacks totalitarian rule.",
      NEt),
    // 16 (paper 18)
    q(NE + "Winston writes that the hope of the country lies on the",
      ["ministry of the truth", "proles", "party", "children"], B,
      "Winston writes in his diary, 'If there is hope, it lies in the proles', the masses who make up most of Oceania.",
      NEt),
    // 17 (paper 19)
    q(NE + "In the novel, two minutes hate is a programme designed for",
      ["parents", "thought police", "the community", "children"], C,
      "The Two Minutes Hate is a daily ritual in which the whole body of Party workers gathers to scream at the image of Goldstein.",
      NEt),
    // 18 (paper 20)
    q(NE + "To drop his philosophy of life and imbibe the tenets of the party, Winston is subjected to all forms of torture and inhuman treatment by",
      ["O'Brien", "thought police", "Big Brother", "Goldstein"], A,
      "O'Brien, the Inner Party member Winston trusted, tortures him in the Ministry of Love until he loves Big Brother.",
      NEt),
    // 19 (paper 21)
    q(PO + "The movement in Adeoti's Naked Soles is characterized by",
      ["hope and agreement", "freedom and self-determination", "pricks and tears", "disappointment and disarray"], C,
      "The bare-footed 'naked soles' dance through thorns and glass chips on a 'pin-ful path': their movement is one of pricks and tears.",
      { setText: 'Gbemisola Adeoti, Naked Soles' }),
    // 20 (paper 22)
    q(PO + "One of the dominant themes of Rubadiri's An African Thunderstorm is the",
      ["relationship between man and nature", "activities of man during rainy seasons", "effect of rain on women and children", "problem of climate change"], A,
      "The poem shows a village caught up in the power of an approaching storm: the relationship between man and nature.",
      { setText: 'David Rubadiri, An African Thunderstorm' }),
    // 21 (paper 25)
    q(PO + "'...the youthful hue\nSits on thy skin like morning dew...'\nThe excerpt above from Marvell's To His Coy Mistress is an example of",
      ["simile", "anaphora", "paradox", "onomatopoeia"], A,
      "The young woman's fresh complexion is compared to morning dew with 'like': a simile.",
      { setText: 'Andrew Marvell, To His Coy Mistress' }),
    // 22 (paper 26)
    q(PO + "In Lawrence's Bat, the poet compares bats with",
      ["sparrows", "swans", "swallows", "crows"], C,
      "At dusk in Florence the speaker first takes the darting creatures for swallows, then realises: 'Not swallows. Bats!'",
      { setText: 'D.H. Lawrence, Bat' }),
    // 23 (paper 27)
    q(PO + "Eliot's Journey of the Magi could be said to examine the issues of",
      ["three trees on the low sky", "empty wine-skins", "spiritual rebirth", "holy pilgrimage"], C,
      "The Magi's journey to Christ's birth was 'Hard and bitter agony for us, like Death': the poem is about the painful birth of a new faith, spiritual rebirth.",
      { setText: 'T.S. Eliot, Journey of the Magi' }),
    // 24 (paper 31)
    q("A literary work in which the characters and events are used as symbols is known as",
      ["characterization", "allegory", "metaphor", "parallelism"], B,
      "An allegory is a story whose characters and events stand for ideas, as in Animal Farm or The Pilgrim's Progress."),
    // 25 (paper 32)
    q("Characterization in a novel refers to the",
      ["writer's opinion of the characters", "way the characters are revealed to the reader", "characters and the way they behave", "reader's opinion of the characters"], B,
      "Characterisation is the method by which a writer presents and reveals characters to the reader."),
    // 26 (paper 33)
    q("In literary work, verbal irony refers to a",
      ["device in which the speaker means the opposite of what he says", "situation in which a character speaks or acts against the trend of events", "difficult situation which defies a logical or rational resolution", "device in which the actor on stage means exactly what he says"], A,
      "Verbal irony is saying one thing while meaning the opposite."),
    // 27 (paper 34)
    q("In the theater, words spoken by a character that are meant to be heard by the audience but not by the other characters on stage is called",
      ["aside", "soliloquy", "acoustic", "tone"], A,
      "An aside is a brief remark to the audience that the other characters on stage are supposed not to hear."),
    // 28 (paper 35)
    q("Drama is the representation of a complete series of actions by means of",
      ["movement and gesture for the screen and audience", "speech, movement and gesture for the stage only", "speech, movement and gesture for the stage, screen and radio", "speech, gesture and movement for the screen and radio"], C,
      "Drama presents action through speech, movement and gesture, and it can be performed on stage, screen or radio."),
    // 29 (paper 36)
    q("A poet's use of regular rhythm is known as",
      ["allegory", "assonance", "metre", "onomatopoeia"], C,
      "Metre is the regular pattern of stressed and unstressed syllables in a line of verse."),
    // 30 (paper 37)
    q("A literary genre which directly imitates human action is",
      ["drama", "comedy", "prose", "poetry"], A,
      "Drama imitates human action directly, through actors who act it out (Aristotle's 'imitation of an action')."),
    // 31 (paper 38)
    q("A fable is a story in which",
      ["allegations are made about characters", "animals or things are used as characters", "there is an important setting", "the story is told in poetic form"], B,
      "A fable is a short moral story whose characters are usually animals or things, like Aesop's fables."),
    // 32 (paper 39)
    q("The juxtaposition of two contrasting ideas in a line of poetry is",
      ["euphemism", "synecdoche", "catharsis", "oxymoron"], D,
      "An oxymoron puts two contrasting ideas side by side, as in 'sweet sorrow'; none of the other options involves contrast."),
    // 33 (paper 40)
    q("The main aim of caricature is to",
      ["describe", "expose", "emphasize", "ridicule"], D,
      "A caricature exaggerates a person's features or habits in order to ridicule them."),
    // 34 (paper 41)
    q("'O Ceremony, show me but thy worth:\nWhat is thy soul of adoration?'\n\nThe figure of speech in the lines above is",
      ["antithesis", "invocation", "personification", "apostrophe"], D,
      "The speaker addresses 'Ceremony', an abstract idea, as if it could hear and answer: apostrophe."),
    // 35 (paper 42)
    q("'What eyes will watch our large mouths\nShaped by the laughter of big children?\nWhat eyes will watch our large mouths?'\nBirago Diop, Vanity\n\nThe tone of the lines above is one of",
      ["sarcasm", "sacrilege", "chiasmus", "eulogy"], A,
      "The poet mocks his people's 'large mouths' and the laughter of 'big children', a bitter, sarcastic tone.",
      { bookletKey: 'D', bookletNote: "A eulogy is a speech or poem praising someone, usually after death; these lines praise no one. The poet mocks his own people's large, laughing mouths, so the tone is sarcastic (A)." }),
    // 36 (paper 43)
    q("The old man slept in his favourite chair\nThe wind ran its fingers through his hair\nHe looked like a tree gone dry of sap\nAnd his hands were dry upon his lap\n\nThe rhyme scheme of the poem above is",
      ["bbaa", "aabb", "abab", "baba"], B,
      "chair/hair rhyme (aa) and sap/lap rhyme (bb): aabb, rhyming couplets."),
    // 37 (paper 44)
    q("'...Unequal laws unto a savage race,\nThat hoard, and sleep, and feed....'\n\nThe lines above show that the speaker",
      ["detects discrimination", "is desirous of adventure", "hates his old wife", "knows much of his city men"], A,
      "The speaker is aware that the laws he deals out are unequal, given to a people he scorns as savage: he recognises inequality in how they are ruled.",
      { keyVerdict: 'none', keyAnswer: 'A', answerNote: "None of the options states the point of these lines exactly. Ulysses, an idle king, speaks with weariness and contempt of ruling a people who only \"hoard, and sleep, and feed\". A is the closest because he is aware that the laws he hands out are unequal, but the lines express his discontent with this life rather than a discovery of discrimination; his wish for adventure (B) comes in the lines that follow." }),
    // 38 (paper 45)
    q("'...How can I look at Oyo and say I hate long shiny cars? How can I come to the children and despise international schools? And Koomson comes, and the family sees Jesus Christ in him....'\n\nThe feeling conveyed by the speaker above is one of",
      ["anger", "alienation", "hope", "despair"], B,
      "The speaker cannot share his family's admiration for wealth and for Koomson; he feels cut off from those closest to him: alienation."),
    // 39 (paper 46)
    q(NIGHT1 + "Night children in the stanza above reflects the consciousness of",
      ["birds", "armed robbers", "animals", "spirit beings"], B,
      "The 'night children' who 'haunt the earth' are those who do evil under cover of darkness, like the 'night thieves' named elsewhere in the poem."),
    // 40 (paper 47)
    q("'Serrated shadows, through dark leaves\nTill, bathed in warm suffusion of your dappled cells,\nSensation pained me, faceless, silent as night thieves.'\nWole Soyinka, Night\n\nThe dominant mood in the lines above is one of",
      ["apprehension", "defiance", "joy", "indifference"], A,
      "Jagged ('serrated') shadows, pain and 'faceless' thieves in the night create a mood of fear and unease: apprehension."),
    // 41 (paper 48)
    q("'The drums overwhelmed the guns...'\nJ.P. Clark, Casualties\n\nThe poet in the excerpt above uses",
      ["litotes", "symbolism", "onomatopoeia", "alliteration"], B,
      "Drums and guns stand for something beyond themselves: the noise of the war's drum-beaters and propaganda drowning the reality of the fighting. That is symbolism.",
      { bookletKey: 'C', bookletNote: "Onomatopoeia needs a word that imitates a sound, such as 'boom' or 'bang'. 'Drums' and 'guns' only name things; here they stand for propaganda and war, which is symbolism (B)." }),
    // 42 (paper 49)
    q("'...They do not see the funeral piles\nAt home eating up the forests...'\nJ.P. Clark, Casualties\n\nThe imagery created in the above excerpt is achieved through",
      ["metaphor", "personification", "synecdoche", "metonymy"], B,
      "The funeral piles are given a human (living) action, 'eating up the forests': personification."),
    // 43 (paper 50)
    q("'I cannot rest from travel: I will drink\nLife to the lees: all times I have enjoyed\nGreatly, have suffered greatly...'\nA.L. Tennyson, Ulysses\n\nThe lines above inform the reader that the poet",
      ["is determined to suffer", "has his poetic imagination kindled", "will cure his sour mood", "will not drink much"], C,
      "Ulysses is restless and discontented as an idle king at home; going back to travel, 'drinking life to the lees', is his cure for that sour mood.",
      { keyVerdict: 'none', keyAnswer: 'C', answerNote: "None of the options states the meaning exactly. 'I cannot rest from travel: I will drink / Life to the lees' shows Ulysses determined to keep travelling and to live life fully to the very end. C is the closest, since going back to adventure ends his restless discontent as an idle king, but the lines are about his resolve to live to the full, not about curing a mood." }),
  ]);
})();
