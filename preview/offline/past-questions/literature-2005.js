/**
 * JAMB/UTME 2005 — LITERATURE-IN-ENGLISH
 * From the 2005 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2005;
  const SRC = 'JAMB UTME 2005';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const AT = "Based on Ahmed Yerima's Attahiru: \n";
  const HA = "Based on William Shakespeare's Hamlet: \n";
  const FR = "Based on Ayi Kwei Armah's Fragments: \n";
  const TE = "Based on Thomas Hardy's Tess of the d'Urbervilles: \n";
  const PO = "Based on the prescribed poems: \n";
  const ATT = { setText: 'Ahmed Yerima, Attahiru' };
  const HAM = { setText: 'William Shakespeare, Hamlet' };
  const FRA = { setText: 'Ayi Kwei Armah, Fragments' };
  const TES = { setText: "Thomas Hardy, Tess of the d'Urbervilles" };

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 1)
    q(AT + "To justify the deposition of the Emirs of Bida and Kontagora, the British authorities accuse them of",
      ["oppression", "mendacity", "partiality", "embezzlement"], A,
      "Lugard's letter, read at the Caliph's court, claims that the Emirs of Kontagora and Bida had been oppressing their people, and gives that as his reason for taking their crowns.", ATT),
    // 2 (paper 2)
    q(AT + "'I wish him luck with his infidel friends, but he must remember that there is only one moon at a time, one sun at a time.'\n\nThe speaker in the passage above is referring to a",
      ["moon gazer", "slave raider", "muezzin", "usurper"], D,
      "The proverb means a land can have only one ruler at a time; a man who claims power with the backing of 'infidel friends' while there is already a ruler is a usurper.", ATT),
    // 3 (paper 3)
    q(AT + "Lord Lugard and the British military find it easy to penetrate the Sokoto Caliphate because the",
      ["Muslim faithfuls fight with bows and arrows while the British soldiers use rifles", "Emir of Zazzau calls the white men to save him from the attack of a fellow Muslim, the Emir of Kontagora", "emirates of Sokoto and Zaria have not been friends since the reign of Caliph Abdulrahman", "emirates are only united to fight the whitemen when it is the turn of Sokoto"], B,
      "The Caliphate was divided from within: the Emir of Zazzau (Zaria) invited the British to protect him from the raids of a fellow Muslim ruler, the Emir of Kontagora, and that opened the door to them.", ATT),
    // 4 (paper 4)
    q(AT + "Caliph Attahiru's dream about heavy smoke on the battlefield and the ancestors passing the flag of Islam from one head to another serves as",
      ["a flashback", "a prophecy", "foreshadowing", "a reverie"], C,
      "The dream, in which the flag falls dripping blood when it reaches Attahiru, hints in advance at his death in battle and the fall of the Caliphate: foreshadowing.", Object.assign({ keyVerdict: 'multiple', alsoAccept: [B], answerNote: "Both C and B are accepted. The dream hints at the defeat that follows, which is foreshadowing (C); because it shows in a dream what will happen, it can also be read as a prophecy (B)." }, ATT)),
    // 5 (paper 5)
    q(AT + "Madawaki: The whiteman is an uninvited guest to our land, he must observe, not dictate.\n\nThe statement above is prompted by the",
      ["abolition of slave trade", "undermining of caliphal authority", "introduction of direct rule", "imposition of taxes"], B,
      "Madawaki speaks after Lugard's letter shows the British deposing emirs and giving orders in the Caliph's land; he objects that the white man is taking over authority that belongs to the Caliphate.", ATT),
    // 6 (paper 6)
    q(HA + "Claudius, though a murderer, is presented as a character",
      ["who has a superlative administrative style", "with a living conscience that torments him", "to whom past events are of significance", "with an admirable physical appearance"], B,
      "In the prayer scene Claudius confesses 'O, my offence is rank, it smells to heaven': his guilty conscience torments him even though he will not give up what the murder won him.", HAM),
    // 7 (paper 7)
    q(HA + "The call made on Hamlet to avenge his father's death makes him",
      ["purposeful", "impoverished", "confused", "amused"], C,
      "The ghost's command throws Hamlet into doubt and inner conflict ('The time is out of joint; O cursed spite, / That ever I was born to set it right!'), so he delays, questions the ghost and feigns madness.", HAM),
    // 8 (paper 8)
    q(HA + "Hamlet: Suit the action to the word, the word to the action; with this special observance, that you o'erstep not the modesty of nature.\n\nHere Hamlet is urging the players to",
      ["reflect reality", "be good actors", "justify their actions", "be creative on stage"], A,
      "Not overstepping 'the modesty of nature' means acting naturally; Hamlet goes on to say the purpose of playing is to hold 'the mirror up to nature', that is, to reflect reality.", HAM),
    // 9 (paper 9)
    q(HA + "The principal function of the play-within-the-play in Hamlet is to",
      ["amuse Claudius", "confirm the claim of the ghost", "divert attention from the main event", "create some comic relief in the tragedy"], B,
      "Hamlet stages The Mouse-trap to test whether the ghost told the truth: 'the play's the thing / Wherein I'll catch the conscience of the king.' Claudius's reaction confirms the ghost's story.", HAM),
    // 10 (paper 10)
    q(HA + "In The Mouse-Trap, the murderer is",
      ["Claudius", "Lucianus", "Gonzago", "Baptista"], B,
      "In the play-within-the-play, Lucianus ('nephew to the king', as Hamlet says) poisons Gonzago in the garden; Baptista is Gonzago's wife.", HAM),
    // 11 (paper 14)
    q(FR + "The novel suggests that an individual who stays apart from his society will",
      ["be praised for his action", "be alienated by his society", "be broken by his society", "live a fulfilled life"], C,
      "Baako, who refuses his family's and society's demand for quick wealth, is pushed until he breaks down and is committed to a mental asylum: the society breaks him.", Object.assign({ keyVerdict: 'multiple', alsoAccept: [B], answerNote: "Both C and B are accepted. Baako, who stands apart from the materialism of his society, is first alienated from it (B) and is finally broken by it, ending in madness (C)." }, FRA)),
    // 12 (paper 15)
    q(FR + "The setting of the novel is the",
      ["traditional Nigerian society", "post-independence Ghanaian society", "pre-independence Ghanaian society", "modern Nigerian society"], B,
      "Fragments (1970) is set mainly in Accra in the 1960s, after Ghana's independence, among people hungry for cars, houses and imported goods.", FRA),
    // 13 (paper 17)
    q(TE + "Angel Clare is depicted as",
      ["a rebellious and self-opinionated character", "an independent-minded character", "a fastidious and garrulous character", "a flirtatious and impulsive young man"], B,
      "Angel, a clergyman's son, refuses to become a parson because he cannot accept the Church's doctrines and chooses farming instead: he thinks for himself.", TES),
    // 14 (paper 18)
    q(TE + "'Phases' in the novel refers to",
      ["phases of the moon and their effects on the plot", "moments of awareness of Tess' misfortune", "points of conflict between good and evil", "stages of development in the life of Tess"], D,
      "Hardy divides the novel into seven 'Phases', from 'The Maiden' to 'Fulfilment', each marking a stage in Tess's life.", TES),
    // 15 (paper 19)
    q(TE + "From the tragedy of Tess, it can be said that Thomas Hardy is concerned with the evils of",
      ["modernization", "industrialization", "democratization", "colonization"], B,
      "Through scenes like the threshing machine at Flintcomb-Ash, Hardy shows the old rural life being crushed by industrial, modern change; industrialization and modernization both fit.",
      Object.assign({ keyVerdict: 'multiple', alsoAccept: [A], answerNote: "Both B and A are fully right. The novel shows machines and the railway replacing the old farming life and wearing down workers like Tess: this is industrialization, and it is also the wider modernization of rural England." }, TES)),
    // 16 (paper 20)
    q(TE + "Angel Clare's ambition in marrying Tess d'Urberville is to secure a wife with",
      ["high social standing", "great fortune", "rustic innocence", "a wide knowledge of the world"], C,
      "Angel wants a farmer's wife and idealises Tess as 'a fresh and virginal daughter of Nature': a pure country girl.", TES),
    // 17 (paper 21)
    q(PO + "Brutus' A Troubadour I Traverse is inspired by his struggle against",
      ["injustice", "capitalism", "colonialism", "zealotry"], A,
      "Dennis Brutus wrote as a fighter against apartheid, the system of racial injustice in South Africa; the wandering troubadour is his image for his quest for justice.",
      { setText: 'Dennis Brutus, A Troubadour I Traverse' }),
    // 18 (paper 22)
    q(PO + "The theme of Wangusa's A Taxi Driver on His Death is",
      ["the taxi driver's contemplation of the vehicle as the likely cause of his death", "that a driver's death must surely be caused by his vehicle", "the danger in the driving profession", "that roads are death-traps for drivers"], A,
      "The driver speaks about his own coming death and expects the taxi he drives so recklessly to be what kills him.",
      { setText: 'Timothy Wangusa, A Taxi Driver on His Death' }),
    // 19 (paper 23)
    q(PO + "J.P. Clark's Agbor Dancer portrays",
      ["a sophisticated dancer", "a girl attuned to her culture", "an uncivilized dancer", "a wild girl"], B,
      "The dancer moves in perfect harmony with the drums of her people, at one with her tradition, while the educated speaker feels cut off from it.",
      { setText: 'J.P. Clark, Agbor Dancer' }),
    // 20 (paper 24)
    q(PO + "The subject matter of Senghor's I Will Pronounce Your Name is",
      ["Elissa", "Naett", "love", "a nameless girl"], B,
      "The poem is addressed to and in praise of a woman named Naett, whose name the speaker vows to pronounce.",
      { setText: 'Léopold Sédar Senghor, I Will Pronounce Your Name' }),
    // 21 (paper 25)
    q(PO + "The tone of Ofeimun's We Must Learn Again to Fly is that",
      ["encouragement", "discouragement", "disappointment", "enthusiasm"], A,
      "Despite hunger and bad leadership, the speaker urges his people to learn again to fly, that is, to rise and try again: a tone of encouragement.",
      { setText: 'Odia Ofeimun, We Must Learn Again to Fly' }),
    // 22 (paper 28)
    q(PO + "'And the name died before the man.'\n\nFrom the statement above in Housman's To an Athlete Dying Young, what happens to the athlete?",
      ["He comes to a disgraceful end", "He loses his medal to another", "He dies eventually", "He dies prematurely"], D,
      "The line describes other champions who outlive their fame; the athlete escapes that fate because he dies young, while his glory is still fresh.",
      { setText: 'A.E. Housman, To an Athlete Dying Young' }),
    // 23 (paper 29)
    q(PO + "In Keats' On the Grasshopper and Cricket, poetry of earth refers to",
      ["poetry written about earth", "songs by grasshopper and cricket", "poetry written by mother earth", "songs by birds, grasshoppers and cricket"], B,
      "'The poetry of earth is never dead': the grasshopper sings in summer and the cricket in winter, so nature's song never stops.",
      { setText: 'John Keats, On the Grasshopper and Cricket' }),
    // 24 (paper 30)
    q(PO + "In On His Blindness, Milton uses the experience of his blind state to",
      ["condemn himself", "appreciate God", "abuse God", "disregard his fellow men"], B,
      "Patience answers his complaint: God does not need man's work, and 'They also serve who only stand and wait.' The poet accepts and honours God's will.",
      { setText: 'John Milton, On His Blindness' }),
    // 25 (paper 31)
    q("The predominant use of the third person pronoun in a novel creates a",
      ["sense of detachment on the part of the writer", "sense of detachment on the part of the reader", "psychological affinity with the characters", "balance of opinion among the characters"], A,
      "A third-person narrator ('he', 'she', 'they') stands outside the story, so the writer appears detached from the characters and events."),
    // 26 (paper 32)
    q("A poem without a regular rhyme scheme is a",
      ["traditional poem", "ballad", "lines poem", "blank verse"], D,
      "Blank verse does not rhyme at all (it is unrhymed iambic pentameter); ballads and traditional poems usually rhyme regularly."),
    // 27 (paper 33)
    q("Aesthetics in literature has to do with the creation of",
      ["imagery", "lines", "beauty", "themes"], C,
      "Aesthetics is the study and creation of beauty and artistic pleasure."),
    // 28 (paper 34)
    q("Cast in a play refers to",
      ["all the actors", "three of the actors", "a few of the actors", "an exclusive social class in the play"], A,
      "The cast is the whole set of actors who perform the roles in a play."),
    // 29 (paper 35)
    q("A tragic hero, according to the Aristotelian precept, must be a",
      ["noble character with hubris", "lowly character who suddenly stumbles on some fortunes", "king with deep affection for his subject", "central character after whom the play is named"], A,
      "Aristotle's tragic hero is a person of high rank and noble nature who falls through a flaw, often hubris (excessive pride)."),
    // 30 (paper 36)
    q("A careful choice of words dictated by a particular mood or an event refers to",
      ["register", "cadence", "rhyme", "tone"], D,
      "Tone is the attitude or mood a writer conveys, and it is created by careful choice of words suited to the mood or occasion."),
    // 31 (paper 37)
    q("The insertion of material unrelated or distantly related to the specific subject under discussion in a given work is called",
      ["digression", "flashback", "regression", "reverie"], A,
      "A digression is a departure from the main subject to discuss something only loosely related."),
    // 32 (paper 38)
    q("When an object is invested with a meaning beyond its immediate reference, it becomes",
      ["an irony", "a symbol", "a subject", "an epigram"], B,
      "A symbol is an object that stands for something beyond itself, such as a dove for peace."),
    // 33 (paper 39)
    q("Unity of time in a tragedy implies that all actions should take place",
      ["simultaneously", "intermittently", "in a single revolution of the sun", "within the same locale"], C,
      "The unity of time, drawn from Aristotle, asks that the action of a tragedy happen within one day, a single revolution of the sun."),
    // 34 (paper 40)
    q("A short, carefully phrased expression meant to elicit amusement and surprise is",
      ["hyperbole", "limerick", "tercet", "wit"], D,
      "Wit is clever, neatly phrased expression that surprises and amuses; a limerick is a five-line comic poem, not a short expression.",
      { bookletKey: 'B', bookletNote: "The booklet answer B, limerick, is a five-line humorous poem rhyming aabba, a verse form rather than a short expression. A brief, cleverly phrased remark that surprises and amuses is wit, so D is right." }),
    // 35 (paper 41)
    q("'History's stammerer.\nWhen will your memory master the vowels of your father's name?'\nNiyi Osundare, Waiting Laughters\n\nThe literary device used in the excerpt above is",
      ["apostrophe", "rhetorical question", "pun", "run-on-line"], A,
      "The speaker addresses 'History's stammerer' directly as 'you' (apostrophe) and asks a question that expects no answer (rhetorical question).",
      { keyVerdict: 'multiple', alsoAccept: [B], keyAnswer: 'A', answerNote: "Both A and B are fully right. The lines speak directly to 'History's stammerer', which is apostrophe (A), the answer often given; and 'When will your memory master...?' is a question asked for effect, not for an answer, which is a rhetorical question (B)." }),
    // 36 (paper 42)
    q("'It is a beauteous evening, calm and free,\nThe holy time is quiet as a Nun\nBreathless with adoration; the broad sun\nIs sinking down in its tranquillity;\nThe gentleness of heaven broods o'er the Sea:\nListen! the mighty Being is awake,\nAnd doth with his eternal motion make\nA sound like thunder—everlastingly.'\nW. Wordsworth, It Is a Beauteous Evening\n\nThe rhyme scheme of the stanza above is",
      ["cbba cdda", "bbac ddac", "ddca bbca", "abbc addc"], D,
      "The lines rhyme free (a), nun (b), sun (b), tranquillity (a), sea (a), awake (c), make (c), everlastingly (a): abba acca. None of the options gives this; D is closest.",
      { keyVerdict: 'none', keyAnswer: 'D', answerNote: "None of the options is fully correct. The eight lines rhyme free / nun / sun / tranquillity / sea / awake / make / everlastingly, which is abba acca (the octave of a sonnet). The answer often given, D (abbc addc), gets the first three lines right but not lines 4 and 8, which rhyme with 'free' and so are a, not c." }),
    // 37 (paper 43)
    q("'And the promise pleasure will never ever be found in the face of vanished treasure, in the face of plundered pound hidden beneath roots of greener grasses in a land far from the masses'.\n\nThe tone of the poem above is",
      ["pessimistic", "optimistic", "hyperbole", "persuasive"], A,
      "'Will never ever be found', 'vanished treasure' and 'plundered pound' hidden far from the masses express hopelessness about the future: a pessimistic tone."),
    // 38 (paper 44)
    q("The expression 'The ripest is the saddest encounter' is an example of",
      ["euphemism", "paradox", "hyperbole", "metaphor"], B,
      "Ripeness should be the happiest moment, yet it is called the saddest: a statement that seems self-contradictory but holds a truth (ripeness comes just before decay)."),
    // 39 (paper 45)
    q("'My heart is a quiet drum, something it flares like a parched thunder cracking through a damask sky, it lifts me in its fired spectacle.'\nCynthia James, Drumology\n\nThe imagery in the excerpt above is largely",
      ["olfactory and visual", "olfactory and tactile", "tactile and auditory", "auditory and visual"], D,
      "Drum, thunder and cracking appeal to hearing (auditory); flares, damask sky and fired spectacle appeal to sight (visual)."),
    // 40 (paper 46)
    q("'If an eagle be imprisoned on the back of a coin and the coin is tossed into the sky, that coin will flutter but the eagle will never fly'.\nHenry Dumas, America\n\nThe poem above achieves its literary effect through the use of",
      ["alliteration", "parallelism", "repetition", "solecism"], C,
      "The key words 'eagle' and 'coin' are repeated, setting the coin that flutters against the eagle that never flies."),
    // 41 (paper 47)
    q("'They came on like a whirlwind, and dashed over the line snorting, kicking, squealing in a compact, piebald tossing mob of bay, brown, grey backs, eyes staring, necks extended, nostrils red, long tails, streaming. As soon as they had leaped upon the road the thick dust flew upwards from under their hoofs, and within six yards of Giorgio only a brown cloud with vague forms of necks and cruppers rolled by, making the soil tremble...'\nJoseph Conrad, Nostromo\n\nThe passage above describes a troop of",
      ["cows", "elephants", "camels", "horses"], D,
      "Snorting, squealing, hoofs, cruppers and the colours bay and piebald all belong to horses."),
    // 42 (paper 48)
    q("\"She wanted to split herself. But she checked herself. 'Get dressed,' she said earnestly. 'Get dressed and let's go. You know I have a lot of things to do. And if we are going to meet again like this,..' She slapped the bed, 'then it won't be here. It will be at the Samson and Delilah.'\"\nFestus Iyayi, Violence\n\nIn the passage above, the speaker can be described as",
      ["domineering", "treacherous", "friendly", "hungry"], A,
      "She gives orders ('Get dressed and let's go'), puts her own business first and alone decides where they will meet next: she is domineering."),
    // 43 (paper 49)
    q("Mr. Beckley exploded: I did not come here to ask for a school report on my son. Did you or did you not savagely attack the child, knowing fully well that his health is most delicate at best of times?\nWole Soyinka, Isara: A Voyage Around Essay\n\nIn the excerpt above, Mr. Beckley is trying to",
      ["put the addressee on the defensive", "show off to the listener", "provoke a fight", "find out the truth from the addressee"], D,
      "He brushes aside talk of school reports and demands a straight answer, 'Did you or did you not...?': he wants to find out the truth about the attack."),
    // 44 (paper 50)
    q("'Where has my love blown his horn? The tune of his horn is well-known. Young men of my clan have you heard the horn of my love?'\nOkot p'Bitek, Horn of My Love\n\nThe overriding feeling of the persona in this extract is",
      ["anxiety", "certainty", "frustration", "joy"], A,
      "The speaker keeps asking where her lover's horn has sounded and begs the young men for news: she is anxious about him.")
  ]);
})();
