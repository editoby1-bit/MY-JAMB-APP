/**
 * JAMB/UTME 2008 — LITERATURE-IN-ENGLISH
 * From the 2008 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2008;
  const SRC = 'JAMB UTME 2008';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const SD = "Based on J.C. de Graft's Sons and Daughters: \n";
  const RJ = "Based on William Shakespeare's Romeo and Juliet: \n";
  const NE = "Based on George Orwell's Nineteen Eighty-Four: \n";
  const OM = "Based on Ferdinand Oyono's The Old Man and the Medal: \n";
  const JM = "Based on Buchi Emecheta's The Joys of Motherhood: \n";
  const PO = "Based on the prescribed poems: \n";
  const EX42 = "'But the towering earth was tired of sitting in one position. She moved, suddenly, and the houses crumbled, the mountains heaved horribly, and the work of a million years was lost.'\n\n";

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 1)
    q(SD + "In the play, Fosuwa represents the",
      ["new culture", "younger generation", "old order", "African civilization"], C,
      "Fosuwa, James's meddling elder sister who interferes in his household and pushes Lawyer Bonu's interests, stands for the old order the young people are breaking away from.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 2 (paper 3)
    q(SD + "'I still think you can do something about it... persuade him; make him see how frustrating the whole business is bound to be for you.' The whole business in the excerpt above refers to",
      ["marriage proposal", "career choice", "business contract", "political transition"], B,
      "The 'whole business' is the career James Ofosu is forcing on his child; the speaker urges that he be persuaded to see how frustrating it will be.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 3 (paper 4)
    q(SD + "The central conflict in the play is",
      ["religious", "romantic", "generational", "communal"], C,
      "The play turns on the clash between a father, James Ofosu, and his children Aaron and Maanan over who chooses their careers: a conflict between generations.",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 4 (paper 5)
    q(SD + "The change in fortune is achieved in the play when",
      ["James agrees that Aaron and Maanan should study what they want", "Lawyer harasses Maanan in his office", "Hannah, James's wife, convinces him", "Aaron and Maanan agree to read the courses James chooses for them"], A,
      "The children's fortunes turn when James at last gives in and lets Aaron and Maanan study what they want (painting and dancing).",
      { setText: 'J.C. de Graft, Sons and Daughters' }),
    // 5 (paper 6)
    q(RJ + "'I will be brief, for my short date of breath\nIs not so long as is a tedious tale.'\nThe statement above is in reference to the speaker's",
      ["retirement", "imminent death", "state of health", "short-tempered nature"], B,
      "Old Friar Laurence means that the time he has left to live ('my short date of breath') is shorter than a long story: his death is near.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 6 (paper 7)
    q(RJ + "Romeo's death becomes inevitable because",
      ["Friar Lawrence's letter is not delivered", "Juliet is married to Paris", "Romeo kills Tybalt in a duel", "Juliet has committed suicide"], A,
      "Friar John cannot deliver Friar Laurence's letter explaining the sleeping potion, so Romeo believes Juliet is truly dead and kills himself.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 7 (paper 8)
    q(RJ + "The multiple deaths in the play serve as a punishment for",
      ["imposing life partners on children", "treating others with hatred", "obeying one's own parents", "shedding kinsmen's blood"], B,
      "The Prince tells Capulet and Montague, 'See what a scourge is laid upon your hate': the deaths punish the families' long hatred.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 8 (paper 9)
    q(RJ + "The major reason for Juliet's grief is",
      ["the death of her cousin", "her reluctant marriage to the County", "the banishment of her lover", "her imminent death"], C,
      "Juliet mourns Tybalt, but what truly crushes her is Romeo's banishment: that one word 'banished' 'hath slain ten thousand Tybalts'.",
      { setText: 'William Shakespeare, Romeo and Juliet' }),
    // 9 (paper 10)
    q(RJ + "The chorus in the prologue of the play is essentially meant to",
      ["foreshadow the play", "highlight the characters", "estimate the actions", "introduce the play"], A,
      "The Prologue introduces the play by summing up its story in a sonnet, and in doing so foreshadows the ending: the 'star-cross'd lovers' who 'take their life'.",
      { setText: 'William Shakespeare, Romeo and Juliet', keyVerdict: 'multiple', alsoAccept: [D], answerNote: "Both A and D are fully right. A prologue by definition introduces the play (D), and this one does it by telling the audience in advance that the 'star-cross'd lovers' will die, which foreshadows the whole tragedy (A)." }),
    // 10 (paper 11)
    q(NE + "In the novel, Big Brother metaphorizes a",
      ["totalitarian authority", "benevolent leader", "revolutionary leader", "party brotherhood"], A,
      "Big Brother, the all-seeing face on the posters ('BIG BROTHER IS WATCHING YOU'), stands for the Party's total control over every part of life: totalitarian authority.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 11 (paper 12)
    q(NE + "In the novel, Orwell attempts to",
      ["satirize the artificiality of a machine-controlled society", "eulogize the beauty of the socialist system", "condemn the disgusting hypocrisy of all communist systems", "laud the boundless possibilities of the human intellect"], A,
      "The novel is a satire on a society run like a machine, watched by telescreens and drilled by the Party, where even truth and language are manufactured.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 12 (paper 13)
    q(NE + "Winston Smith begins his rebellion against the power of the state by",
      ["purchasing arms", "keeping a private diary", "opposing the law", "educating the youth"], B,
      "Winston's first act of rebellion is to start a secret diary, in which he writes 'DOWN WITH BIG BROTHER'.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 13 (paper 14)
    q(NE + "The Ministry of Truth is concerned with",
      ["news, entertainment, education and fine arts", "propaganda, war, publishing and enlightenment", "investigation, propaganda and fine arts", "economic affairs, education and propaganda"], A,
      "Orwell says the Ministry of Truth 'concerned itself with news, entertainment, education and the fine arts'.",
      { setText: 'George Orwell, Nineteen Eighty-Four' }),
    // 14 (paper 15)
    q(OM + "The events following the ceremony confirm Meka's",
      ["disillusion with the whites", "satisfaction with the medal", "contribution to the colonialists", "admiration for the church"], A,
      "After the medal ceremony Meka gets lost in a storm, loses the medal, is beaten and locked up by the colonial police; he comes home bitter and disillusioned with the white men.",
      { setText: 'Ferdinand Oyono, The Old Man and the Medal' }),
    // 15 (paper 17)
    q(OM + "In the novel, the expression 'breaking the leg of an antelope' means",
      ["hunting", "marriage", "fighting", "honeymoon"], B,
      "The novel says of a man who already had five wives that he was soon going to 'break the legs of the antelope' for the sixth time: the expression means taking a wife.",
      { setText: 'Ferdinand Oyono, The Old Man and the Medal' }),
    // 16 (paper 19)
    q(JM + "Nnaife's conscription into the army is portrayed as part of",
      ["family conflict", "British oppression", "family tradition", "societal intrigue"], B,
      "Nnaife is forcibly taken into the army by the British colonial rulers to fight in the Second World War, one of many ways colonial power controls the lives of the family.",
      { setText: 'Buchi Emecheta, The Joys of Motherhood' }),
    // 17 (paper 20)
    q(JM + "The attitude of Nnu Ego when she was told that her chi would not give her a child is one of",
      ["indifference", "despair", "apathy", "hope"], B,
      "For Nnu Ego, whose whole worth in her society rests on bearing children, the news that her chi will deny her a child brings despair.",
      { setText: 'Buchi Emecheta, The Joys of Motherhood' }),
    // 18 (paper 21)
    q(PO + "The subject matter of Adeoti's 'Naked Soles' is",
      ["soul and mind", "hunger and strife", "suffering and despair", "hatred and bitterness"], C,
      "Gbemisola Adeoti's poem pictures oppressed people as bare feet 'dancing through blooming thorns' and crying in silence: its subject is suffering and despair.",
      { setText: 'Gbemisola Adeoti, Naked Soles' }),
    // 19 (paper 22)
    q(PO + "Rubadiri's 'An African Thunderstorm' appeals to the reader's sense of",
      ["sight and taste", "feeling and sight", "smell, taste and hearing", "sight, smell and hearing"], D,
      "We see the clouds and 'blinding flashes', hear the wind that 'whistles' and the thunder that 'rumble, tremble and crack', and smell 'fired smoke': sight, smell and hearing.",
      { setText: 'David Rubadiri, An African Thunderstorm' }),
    // 20 (paper 23)
    q(PO + "'The experts, of course, disagree; the urine test they ordered said, Negative.'\nThe lines above from Acquah's 'In the Navel of the Soul' depict",
      ["contradiction", "inevitability", "progress", "awareness"], A,
      "The experts disagree with one another, and the urine test says 'Negative' while the midwives say otherwise: the lines show contradiction.",
      { setText: 'Kobena Eyi Acquah, In the Navel of the Soul' }),
    // 21 (paper 26)
    q(PO + "The persona in the poem 'Give Me the Minstrel's Seat' discourages",
      ["togetherness", "hatred", "isolation", "poverty"], C,
      "The poem praises friends and companionship as the way through life's troubles, so the persona discourages isolation.",
      { setText: "Traditional Swahili poem, Give Me the Minstrel's Seat" }),
    // 22 (paper 27)
    q(PO + "Marvell's 'To His Coy Mistress' is written mainly in",
      ["alternate rhymes", "blank verse", "heroic couplets", "middle rhymes"], C,
      "The poem is written in rhyming couplets (aa bb cc...), so C is the intended answer, although strictly its lines have four beats, not the five of true heroic couplets.",
      { setText: 'Andrew Marvell, To His Coy Mistress', keyVerdict: 'none', keyAnswer: 'C', answerNote: "The answer usually expected is C, because the poem is written in rhyming couplets. Strictly, though, a heroic couplet is a pair of rhyming lines in iambic pentameter (five beats), and Marvell's lines are iambic tetrameter (four beats: 'Had we but world enough and time'). The exact term is octosyllabic or tetrameter couplets, which is not offered." }),
    // 23 (paper 28)
    q(PO + "The attitude of the poet-persona to bats, in Lawrence's 'Bat', is one of",
      ["satisfaction", "reverence", "hatred", "repulsion"], D,
      "The speaker is disgusted by the bats that 'hang themselves up like an old rag' 'disgustingly upside down', and cries 'Not for me!': repulsion.",
      { setText: 'D.H. Lawrence, Bat' }),
    // 24 (paper 29)
    q(PO + "The language used in Eliot's 'Journey of the Magi' is generally",
      ["difficult", "complex", "simple", "complicated"], C,
      "One of the wise men tells the story in plain, conversational words: 'A cold coming we had of it, / Just the worst time of the year'.",
      { setText: 'T.S. Eliot, Journey of the Magi' }),
    // 25 (paper 31)
    q("An interlude is a brief",
      ["presentation in the interval of a dramatic performance", "play before the main dramatic performance", "presentation after the main dramatic performance", "dialogue between two persons"], A,
      "An interlude (Latin inter, between + ludus, play) is a short piece performed in the interval between the parts of a longer performance."),
    // 26 (paper 32)
    q("An epic is a heroic story which includes",
      ["ballad", "lyric", "myth", "dialogue"], C,
      "An epic is a long narrative of a hero's great deeds, mixing history with myth: gods, supernatural beings and marvels."),
    // 27 (paper 33)
    q("Farce can be described as a dramatic piece marked by",
      ["movement from serious to light-hearted mood", "comic and exaggerated actions", "actions devoid of meaning", "gloomy actions with momentary reliefs"], B,
      "Farce is low comedy built on exaggerated, improbable situations and physical humour, aiming only at laughter."),
    // 28 (paper 34)
    q("A long story narrating a series of complicated events is called",
      ["saga", "discourse", "monologue", "harangue"], A,
      "A saga is a long story of many connected adventures, often across generations of a family, like the old Icelandic sagas."),
    // 29 (paper 35)
    q("Oxymoron is the use of two contrasting words that are",
      ["placed far apart", "different in meaning", "placed side by side", "similar in meaning"], C,
      "An oxymoron puts two contradictory words side by side, as in 'living death' or 'bitter-sweet'."),
    // 30 (paper 36)
    q("A line or a group of lines repeated in the course of a poem is called",
      ["chorus", "refrain", "repetition", "prologue"], B,
      "A refrain is a line or group of lines repeated at intervals in a poem, usually at the end of each stanza."),
    // 31 (paper 37)
    q("A limerick is a light verse which consists of five lines that are",
      ["anapestic", "trochaic", "spondaic", "dactylic"], A,
      "A limerick has five lines rhymed aabba in a bouncing anapestic rhythm (da-da-DUM): 'There was an old man with a beard'."),
    // 32 (paper 38)
    q("A short narrative or lyrical poem intended to be sung is a",
      ["leich", "lay", "lauda", "letrilla"], B,
      "A lay is a short narrative or lyric poem meant to be sung, like the medieval Breton lays.",
      { keyVerdict: 'corrected', keyAnswer: 'A', answerNote: "The answer often given is A, leich. A leich is a long medieval German lyric of irregular stanzas, the German form of the French lai, so it is related but it is not short and not narrative. The English term defined in the question, a short narrative or lyrical poem meant to be sung, is lay (B)." }),
    // 33 (paper 39)
    q("A figurative device in which a statement is made and then withdrawn is referred to as",
      ["metanoia", "metaphysical", "metalanguage", "metalepsis"], A,
      "Metanoia (Greek, 'change of mind') is correcting or withdrawing a statement just made: 'She is pretty, no, she is beautiful.'"),
    // 34 (paper 40)
    q("A literary work which imitates another in a distorted form is called",
      ["exordium", "isocolon", "metonymy", "burlesque"], D,
      "A burlesque mocks a serious work by imitating it in a ridiculous, distorted way."),
    // 35 (paper 41)
    q("'You do not have to be brutal to be a soldier, or rather you are brutal not because you are a soldier, but because there is a sadist, a rapist, a fascist and a murderer in you who is waiting for war and army uniforms to give them expression.'\n\nThe speaker here contends that",
      ["soldiers are generally wicked", "human nature has to do with a profession", "soldiers are characteristically gentle", "the latent brutality in man finds expression in war"], D,
      "The speaker says brutality does not come from being a soldier; it is already hidden in a person, 'waiting for war and army uniforms to give them expression'.",
      { bookletKey: 'B', bookletNote: "The booklet answer B says human nature has to do with a profession, but the speaker says the opposite: 'you are brutal not because you are a soldier'. The cruelty is already inside the person and war only lets it out, so D is right." }),
    // 36 (paper 42)
    q(EX42 + "The subject matter of the passage is",
      ["earthquake", "demolition", "flood", "storm"], A,
      "The earth 'moved, suddenly', houses crumbled and mountains heaved: the passage describes an earthquake."),
    // 37 (paper 43)
    q(EX42 + "The image depicted is one of",
      ["destruction", "dejection", "happiness", "admiration"], A,
      "Crumbling houses, heaving mountains and 'the work of a million years was lost' build a picture of destruction."),
    // 38 (paper 44)
    q("'She even thinks that up in heaven\nHer class lies late and snores,\nWhile poor black cherubs rise at seven\nTo do celestial chores.'\nCountee Cullen, For a Lady I Know\n\nThe tone of the poem above is",
      ["satiric", "affectionate", "indifferent", "sympathetic"], A,
      "Cullen mocks a rich white lady who imagines that even in heaven her class will sleep late while black children do the chores: the tone is satiric.",
      { bookletKey: 'B', bookletNote: "The booklet answer B, affectionate, misses the mockery. The poem laughs at a lady so used to black servants that she expects 'poor black cherubs' to serve her class even in heaven; ridiculing a fault like this is satire, so A is right." }),
    // 39 (paper 45)
    q("'Life, though a vanity yet, not purposeful in drawling resignation. Life's spice is in strife.'\n\nFrom the extract above, the poet suggests that",
      ["life is full of care", "there can't be life without strife", "life is worthwhile without care", "strife makes life worth living"], D,
      "Life has no purpose in idle resignation; its 'spice', what gives it flavour and worth, is struggle: strife makes life worth living.",
      { keyVerdict: 'corrected', keyAnswer: 'B', answerNote: "The answer often given is B. But the poet does not say life cannot exist without struggle; he says struggle is life's 'spice', the thing that gives it flavour and purpose, while 'drawling resignation' leaves it purposeless. That is the idea in D: strife makes life worth living." }),
    // 40 (paper 46)
    q("'An unlucky creation\nHis mother, a street walker;\nHis lying father; A champion at producing bastards.'\nB.S. Tibenderana, The Bastard\n\nThe subject of the poem above is",
      ["a prostitute", "the lying father", "the son", "the orphan"], C,
      "The poem is about the 'unlucky creation' himself, the son ('His mother', 'His lying father'), as its title, The Bastard, shows."),
    // 41 (paper 47)
    q("'Sweet smile in time of snarl\nGives pride in spite of sneer\nSing, rid this world of despair\nAnd save, a snared heart from cascading stream of strife.'\n\nThe dominant rhetorical device in the excerpt above is",
      ["rhyme", "alliteration", "repetition", "onomatopoeia"], B,
      "The 's' sound starts word after word: sweet smile, snarl, spite, sneer, sing, save, snared, stream, strife. That is alliteration."),
    // 42 (paper 48)
    q("'My heart leaps up when I behold\nA rainbow in the sky:\nSo was it when my life began;\nSo is it now I am a man;\nSo be it when I shall grow old,\nOr let me die!\nThe Child is father of the Man;\nAnd I could wish my days to be\nBound each to each by natural piety.'\nWilliam Wordsworth, My Heart Leaps Up When I Behold\n\nThe expression 'The Child is father of the Man' in the poem above is an example of",
      ["paradox", "metaphor", "simile", "ellipsis"], A,
      "A child cannot literally father a man; the seeming contradiction holds a truth (the man grows out of the child he was): a paradox, made through a metaphor."),
    // 43 (paper 49)
    q("'Today's my last day here. I'm done banging my head against the glass ceiling. They think I don't know why they really hired me. They're talking to dad behind my back. Begging for favours. Work permit renewals. Licences, tax and duty waivers. Contracts and tenders.'\nKen Kamoche, A Fragile Hope\n\nThe technique employed in narrating the excerpt above is",
      ["flashback", "stream of consciousness", "foreshadowing", "play-within-the-play"], B,
      "The narrator's thoughts pour out in the present, in short broken fragments ('Begging for favours. Work permit renewals.') as they come to mind: stream of consciousness."),
    // 44 (paper 50)
    q("'If the earth were mortal\nWhere would the flower live?\nIf you left the earth\nWhat would happen to beauty?'\n\nThe poet's tone above can be described as",
      ["lamentative", "satiric", "imploring", "adoring"], A,
      "The speaker broods on loss and death ('mortal', 'If you left the earth') and asks what would become of beauty: a mournful, lamenting tone."),
  ]);
})();
