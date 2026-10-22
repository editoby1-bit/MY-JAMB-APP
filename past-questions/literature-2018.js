/**
 * JAMB/UTME 2018 — LITERATURE-IN-ENGLISH
 * From the 2018 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2018;
  const SRC = 'JAMB UTME 2018';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const PO = "Based on the prescribed poems: \n";
  const HC = "Based on Frank Ogodo Ogbeche's Harvest of Corruption: \n";
  const NS = "Based on Richard Wright's Native Son: \n";
  const FA = "Based on Amma Darko's Faceless: \n";
  const OT = "Based on William Shakespeare's Othello: \n";
  const LD = "Based on Bayo Adebowale's Lonely Days: \n";
  const HCt = { setText: 'Frank Ogodo Ogbeche, Harvest of Corruption' };
  const NSt = { setText: 'Richard Wright, Native Son' };
  const FAt = { setText: 'Amma Darko, Faceless' };
  const OTt = { setText: 'William Shakespeare, Othello' };
  const LDt = { setText: 'Bayo Adebowale, Lonely Days' };

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 1)
    q("A fable is otherwise known as",
      ["eclogue", "apologue", "parable", "anecdote"], B,
      "A fable, a short moral tale usually with animal characters, is also called an apologue."),
    // 2 (paper 2)
    q("Characterization takes into consideration the following except",
      ["physical description of a character", "character's speech, thought and actions", "the speech, thought and action of the other characters", "where and when a story takes place"], D,
      "Where and when a story takes place is the setting, not characterization; a character is revealed through description, his own words and deeds, and what others say and do about him."),
    // 3 (paper 3)
    q("In plot, exposition does the following except",
      ["sets the tone", "introduces the characters", "concludes the story", "establishes the setting"], C,
      "Exposition is the opening part of a plot: it introduces characters and setting and sets the tone. Concluding the story is the work of the resolution (denouement)."),
    // 4 (paper 4)
    q("A literary work in which characters and events are used to represent certain abstract qualities is known as",
      ["parable", "allegory", "parody", "anecdote"], B,
      "In an allegory characters and events stand for abstract ideas or qualities, as in Bunyan's The Pilgrim's Progress, where Christian meets Faithful and Hopeful."),
    // 5 (paper 5)
    q("Which of the following is not a quality of an epic?",
      ["It has a serious tone", "Some characters are supernatural", "The length is long", "It is written in iambic pentameter"], D,
      "An epic is a long, serious narrative poem with heroic and often supernatural figures; it has no fixed metre (Homer used dactylic hexameter), so iambic pentameter is not a defining quality."),
    // 6 (paper 6)
    q(PO + "Which of the following is not a device/technique in William Morris's The Proud King?",
      ["Allusion", "Inversion", "Dramatic monologue", "Allegory"], C,
      "The Proud King is a long narrative poem told by a narrator in the third person, so it is not a dramatic monologue; it uses biblical allusion (Nebuchadnezzar's pride), inverted word order and a moral, allegorical story.",
      { setText: 'William Morris, The Proud King' }),
    // 7 (paper 9)
    q(PO + "In Herbert's The Pulley, \"pulley\" represents",
      ["the supremacy of God", "God as omnipotent", "man's dependence on God", "the frailty of human mind"], C,
      "God withholds 'rest' from man so that restlessness, like a pulley, will draw man back to Him: the pulley stands for man's need of and dependence on God.",
      { setText: 'George Herbert, The Pulley' }),
    // 8 (paper 10)
    q(PO + "\"Twilight and evening bell,\nAnd after that the dark!\"\nIn the extract above from Tennyson's Crossing the Bar, \"the dark\" represents",
      ["transition", "silence", "old age", "death"], D,
      "Twilight and the evening bell stand for the close of life; 'the dark' that follows is death itself.",
      { setText: 'Alfred Lord Tennyson, Crossing the Bar' }),
    // 9 (paper 11)
    q(PO + "\"... and at once I'm in my mother's lap a suckling.\"\nThe extract above from Okara's Piano and Drums conveys the poet's",
      ["alertness", "nostalgia", "sincerity", "innocence"], B,
      "The sound of the jungle drums carries the persona back at once to his infancy at his mother's breast: a longing for the simple African past, that is, nostalgia.",
      { setText: 'Gabriel Okara, Piano and Drums' }),
    // 10 (paper 12)
    q(PO + "Adeoti draws on ____ and ____ to achieve the themes in the poem \"Ambush\".",
      ["metaphor and diction", "personification and metaphor", "imagery and metaphor", "irony and diction"], C,
      "The land is presented through metaphors of predators (a sabre-toothed tiger, a giant whale, a giant hawk), vivid animal imagery that shows how the nation devours its people's hopes.",
      { setText: 'Gbemisola Adeoti, Ambush' }),
    // 11 (paper 13)
    q(PO + "A dominant figure of speech in Birago Diop's Vanity is",
      ["hyperbole", "rhetorical question", "irony", "metonymy"], B,
      "Vanity is built on questions the persona does not expect to be answered ('Who will hear our voices without laughter...?'), so rhetorical question dominates.",
      { setText: 'Birago Diop, Vanity' }),
    // 12 (paper 14)
    q(PO + "\"Sew the old days for us, our father, that we may wear them under our new garments\"\nThe extract above from Kofi Awoonor's The Anvil and the Hammer accentuates",
      ["dilemma of culture", "blend of culture", "death of culture", "clash of culture"], B,
      "The persona asks the ancestors to preserve the old ways so they can be worn under the 'new garments' of foreign culture: a blending of the two cultures.",
      { setText: 'Kofi Awoonor, The Anvil and the Hammer' }),
    // 13 (paper 15)
    q(PO + "The poem The School Boy by William Blake could be described as a Romantic poem because",
      ["it makes mention of nature and season", "it is about a lone character who is a boy", "it accentuates the importance of and the quest for fulfilment in nature", "the poem makes use of simple words which refer to the flora and fauna"], C,
      "Romantic poetry celebrates nature as the source of joy and growth; Blake's schoolboy longs to be free in the summer fields rather than caged in the classroom.",
      { setText: 'William Blake, The School Boy' }),
    // 14 (paper 17)
    q(HC + "The Police Headquarters is located in",
      ["Garki", "Darkin", "Ayokolo", "Maisama"], B,
      "The play's Police Headquarters is at Darkin, the same area as Madam Hoha's hotel; the Ministry of External Relations is at Maisama.",
      HCt),
    // 16 (paper 20)
    q(NS + "What does Hammond represent in the novel?",
      ["Old age", "Religion", "Racial discrimination", "The blacks"], B,
      "Reverend Hammond, Mrs Thomas's pastor, visits Bigger in jail and gives him a cross: he represents religion, the comfort Bigger rejects.",
      NSt),
    // 17 (paper 21)
    q(NS + "Mrs. Dalton's blindness is significant in the novel because it",
      ["represents racial bias and prejudice", "shows the stupidity of the whites", "demonstrates the naivety of the rich and the middle class", "creates an easy escape for Bigger after the killing of Mary"], A,
      "Mrs Dalton's physical blindness symbolises white society's blindness to Black people as real individuals: it can see them only through its racial prejudices.",
      NSt),
    // 18 (paper 22)
    q(NS + "At the Regal Theatre, Bigger and Jack watch a movie featuring a rich young woman dancing with her lover. The title of this movie is",
      ["The Trader Horn", "The Gay Woman", "A Monkey in a Tuxedo", "The Bitch Woman"], B,
      "The Gay Woman shows rich white people dancing and partying, which makes Bigger curious about the world of the Daltons; Trader Horn, shown with it, is about Africa.",
      NSt),
    // 19 (paper 23)
    q(NS + "Mr. Buckley and Mr. Boris Max are two white characters with",
      ["identical views", "contrasting views", "religious leanings", "antisocial traits"], B,
      "Buckley, the State's Attorney, wants Bigger executed as a beast; Max, his Communist lawyer, argues that society made Bigger what he is: their views are opposed.",
      NSt),
    // 20 (paper 24)
    q(FA + "MUTE can be interpreted as",
      ["Mutual Understanding Towards Education", "Men's Understanding Towards Emancipation", "Mentorship for the Uneducated Teenagers", "MUTE, as in mute"], D,
      "MUTE, the NGO of Dina and Kabria, is not an acronym: it is simply the English word mute, a name for a body that works quietly as an alternative library and voice for the voiceless.",
      FAt),
    // 21 (paper 26)
    q(FA + "How old is Fofo?",
      ["Fifteen years", "Fourteen years", "Thirteen years", "Twelve years"], B,
      "Fofo, Maa Tsuru's daughter and Baby T's younger sister, is a fourteen-year-old street girl in Accra.",
      FAt),
    // 22 (paper 28)
    q(OT + "Cassio is given to",
      ["wine", "jealousy", "malice", "anger"], A,
      "Cassio's weakness is drink ('I have very poor and unhappy brains for drinking'); Iago uses it to get him drunk and into the brawl that costs him his post.",
      OTt),
    // 23 (paper 29)
    q(OT + "\"Thus do I ever make my fool my purse...\"\n\"My fool\" is a reference to",
      ["Othello", "Cassio", "Roderigo", "Iago"], C,
      "At the end of Act 1 Iago boasts that he always makes a fool pay for him: the fool is Roderigo, whose money Iago keeps taking.",
      OTt),
    // 24 (paper 30)
    q(OT + "\"Her eyes must be fed; what delight shall she have to look upon the devil?\"\n\"The devil\" refers to",
      ["Iago", "Othello", "the green-eyed monster", "Roderigo"], B,
      "Iago tells Roderigo that Desdemona will soon tire of looking at Othello, whom he crudely calls 'the devil' because he is a black Moor.",
      OTt),
    // 25 (paper 31)
    q(OT + "Othello sees Iago as",
      ["discreet", "loyal", "honest", "faithful"], C,
      "Othello repeatedly calls him 'honest Iago', which is the play's central irony, since Iago is the arch-deceiver.",
      OTt),
    // 26 (paper 32)
    q("\"Thou still unravished bride of quietness,\nThou foster child of silence and slow time.\"\nThe figure of sound used in the extract above is",
      ["onomatopoeia", "alliteration", "consonance", "assonance"], D,
      "The long 'i' vowel recurs in 'child', 'silence' and 'time' (with the short 'i' of 'still' and 'quietness'): repeated vowel sounds are assonance.",
      { keyVerdict: 'multiple', alsoAccept: [B], keyAnswer: 'D', answerNote: "Both D and B are right. The lines repeat vowel sounds ('child', 'silence', 'time'), which is assonance (D), and they also repeat the initial 's' sound in 'still', 'silence' and 'slow', which is alliteration (B)." }),
    // 27 (paper 33)
    q("\"Swans sing before they die - 'twere no bad thing\nShould certain people die before they sing!\"\nThe lines above represent",
      ["an epigram", "a limerick", "a rhetorical question", "a parallelism"], A,
      "A short, witty poem ending in a sharp twist is an epigram; these two lines of Coleridge mock bad singers."),
    // 28 (paper 34)
    q("\"Come on and kill me. I do not care who kills who.\"\nThe persona in the extract above is",
      ["pessimistic", "audacious", "melancholic", "beckoning"], B,
      "The speaker dares his enemies to kill him and shows no fear: he is bold and defiant, that is, audacious."),
    // 29 (paper 35)
    q("\"Then the fish came alive, with his death in him.\"\nErnest Hemingway, The Old Man and the Sea\n\nThe extract above illustrates",
      ["metaphor", "hyperbole", "contrast", "paradox"], D,
      "The fish 'came alive' while carrying its death in it: a seeming contradiction that is true (its last great leap after the fatal harpoon), which is paradox."),
    // 30 (paper 36)
    q("\"Our people must go home father. No swimmer, however good, can swim beyond the river of the world. This world's journey has ended in catastrophe for us. Without your help we can no longer find our way back in the void.\"\nFemi Osofisan, Women of Owu\n\nThe extract above confirms",
      ["a necessity", "an impossibility", "an acknowledgment", "an identity"], A,
      "The speakers tell the ancestor that they cannot find their way without him: his help is a necessity."),
    // 31 (paper 37)
    q(LD + "Yaremi came from",
      ["Kufi", "Oyedeji", "Adeyipo", "Kelebe"], C,
      "Yaremi grew up in Adeyipo village; she married Ajumobi and lives with him, and later as his widow, in Kufi.",
      LDt),
  ]);
})();
