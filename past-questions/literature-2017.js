/**
 * JAMB/UTME 2017 — LITERATURE-IN-ENGLISH
 * From the 2017 question paper; answers from the JAMB/UTME Literature answer key 2001–2020 (Literary Appreciation and General Literary Principles only),
 * each checked independently. Set-text questions (no key) answered from the texts; those that could not be answered with confidence are left out (see REPORT.md).
 */
(function () {
  const Y = 2017;
  const SRC = 'JAMB UTME 2017';
  const A = 0, B = 1, C = 2, D = 3;
  const q = (question, options, answer, explanation, extra) =>
    Object.assign({ question, options, answer, explanation, year: Y, source: SRC }, extra || {});

  const OT = "Based on William Shakespeare's Othello: \n";
  const HC = "Based on Frank Ogodo Ogbeche's Harvest of Corruption: \n";
  const FA = "Based on Amma Darko's Faceless: \n";
  const LD = "Based on Bayo Adebowale's Lonely Days: \n";
  const NS = "Based on Richard Wright's Native Son: \n";
  const PO = "Based on the prescribed poems: \n";
  const OTt = { setText: 'William Shakespeare, Othello' };
  const HCt = { setText: 'Frank Ogodo Ogbeche, Harvest of Corruption' };
  const FAt = { setText: 'Amma Darko, Faceless' };
  const LDt = { setText: 'Bayo Adebowale, Lonely Days' };
  const NSt = { setText: 'Richard Wright, Native Son' };

  QUESTION_BANK.literature = QUESTION_BANK.literature.concat([
    // 1 (paper 1)
    q(OT + "'Though I do hate him as I do hell pains,\nYet for necessity of present life,\nI must show out a flag and sign of love,\nWhich is indeed but sign...'\nThe speaker of the excerpt above can be described as",
      ["trusting", "concubine", "schemer", "ambitious"], C,
      "Iago says this about Othello in Act 1 Scene 1: he hates him but will show a false 'flag' of love to serve his plans. He is a schemer.",
      OTt),
    // 2 (paper 2)
    q(OT + "'Fathers, from hence trust not your daughters' minds\nBy what you see them act. Is there not charms\nBy which the property of youth and maidhood\nMay be abused?...'\nThe speaker in the excerpt above addresses",
      ["Othello", "Iago", "Brabantio", "Roderigo"], D,
      "Brabantio speaks these words in Act 1 Scene 1 after learning Desdemona has fled; he goes on, 'Have you not read, Roderigo, of some such thing?' He is talking to Roderigo.",
      OTt),
    // 3 (paper 5)
    q(OT + "Othello wins Desdemona's heart by stories of his",
      ["wars and adventures", "love and escapade", "fights and defeats", "wealth and influence"], A,
      "Othello tells the Senate (Act 1 Scene 3) that Desdemona fell in love listening to his stories of battles, sieges, captivity and strange lands: 'She loved me for the dangers I had passed.'",
      OTt),
    // 4 (paper 6)
    q(HC + "The play portrays the judiciary as",
      ["unserious and lenient", "consistent and just", "corrupt and weak", "patronizing and self-righteous"], C,
      "Chief Ade-Amaka bribes the judge, who frees Aloho in a clear drug case; the court is shown as open to bribes and unable to stand against the powerful.",
      HCt),
    // 5 (paper 7)
    q(HC + "Two dominant themes of the play are",
      ["honesty and decency", "immorality and greed", "poverty and education", "weeding and planting"], B,
      "The play exposes the greed of officials like Chief and Ochuole, who embezzle and push drugs, and the sexual immorality that goes with their power.",
      HCt),
    // 6 (paper 8)
    q(HC + "It can be deduced from the play that",
      ["drug pushing is lucrative", "no crime will go unpunished", "the wealthy also cry", "people will always complain"], B,
      "As the title says, the corrupt reap what they sow: at the end Chief, Ochuole, Madam Hoha and the bribed judge are all tried and punished.",
      HCt),
    // 7 (paper 9)
    q(HC + "'Trust me. My duty is to convince her to play ball with him and the usual commission keeps rolling in, shee you get?...'\nThe speaker in the excerpt above is",
      ["Aloho", "Ogeyi", "Odili", "Ochuole"], D,
      "Ochuole, Chief's partner in crime, boasts that her job is to persuade Aloho to 'play ball' with Chief so that her commission keeps coming.",
      HCt),
    // 8 (paper 10)
    q(HC + "'(ACP Yakubu in his office)... How can that old crook of a judge acquit and discharge a very clear case of cocaine pushing... What evidence is he looking for?...'\nThe technique used in the excerpt above is called",
      ["interior monologue", "apostrophe", "dramatic monologue", "soliloquy"], D,
      "Alone in his office, ACP Yakubu speaks his angry thoughts aloud about the judge who freed Aloho: a soliloquy.",
      HCt),
    // 9 (paper 12)
    q(FA + "The narrative style adopted in the novel is",
      ["second person", "third person", "interior monologue", "first person"], B,
      "Faceless is told by a narrator outside the story who refers to Fofo, Kabria and the others as 'she' and 'they': third-person narration.",
      FAt),
    // 10 (paper 13)
    q(FA + "The street girl phenomenon in the novel is a universal theme because",
      ["it only occurs in Ghana", "it could be found only in Africa", "it is common to almost all nations of the world", "the novel is read in all parts of the world"], C,
      "A theme is universal when it concerns people everywhere: street children like Fofo are found in cities all over the world, not only in Accra.",
      FAt),
    // 11 (paper 14)
    q(LD + "The cap-picking ceremony is to",
      ["break the strong will of Yaremi", "make Yaremi remarry", "establish that she is wicked", "prove that Ajumobi is not the best"], B,
      "In Kufi a widow must choose a new husband by picking one of the suitors' caps; the ceremony is meant to make Yaremi remarry, which she refuses.",
      LDt),
    // 12 (paper 15)
    q(LD + "Yaremi's main job is",
      ["selling cassava", "harvesting cassava", "dyeing taffeta cloths", "sewing taffeta cloths"], C,
      "Besides her farm, Yaremi beats and dyes taffeta cloth and sells it in the market; dyeing is her main trade.",
      LDt),
    // 13 (paper 16)
    q(LD + "A major superstition associated with widows in Kufi is",
      ["reincarnation", "witchcraft", "that fertility is caused by the gods", "existence of ghosts"], B,
      "Kufi people believe no death is natural, so a widow is suspected of having killed her husband by witchcraft and is made to go through humiliating rites.",
      LDt),
    // 14 (paper 17)
    q(NS + "The character which represents the typical black American woman who suffers double yoke of racial and masculine oppression is",
      ["Peggy", "Mary", "Bessie", "Vera"], C,
      "Bessie Mears, Bigger's girlfriend, is poor and black, exploited by white employers and then used, raped and killed by Bigger: she is crushed by both racism and male violence.",
      NSt),
    // 15 (paper 18)
    q(NS + "The story is narrated using the",
      ["omniscient", "limited omniscient", "objective", "first person"], B,
      "Native Son is told in the third person but almost entirely through Bigger Thomas's thoughts and feelings: a limited omniscient point of view.",
      NSt),
    // 16 (paper 19)
    q(NS + "Bigger feels fulfilled in the novel because he successfully",
      ["frightened his younger sister", "hurts the pride of the whites", "helps his employers", "abuses Bessie his girlfriend"], B,
      "After killing Mary Dalton, Bigger feels for the first time a sense of power and meaning: he has struck at the white world that has always controlled and humiliated him.",
      NSt),
    // 17 (paper 22)
    q(PO + "'How can the bird that is born for joy\nSit in a cage and sing?'\nThe lines above from Blake's The School Boy is an example of",
      ["personification", "rhetorical question", "interior monologue", "synecdoche"], B,
      "The speaker asks a question that expects no answer: of course a caged bird cannot sing happily. It is a rhetorical question.",
      { setText: 'William Blake, The School Boy' }),
    // 18 (paper 23)
    q(PO + "'...where guerillas walk the land while crocodiles surf.'\nThe lines above in Hallowell's The Dining Table signify",
      ["danger", "calmness", "pity", "noise"], A,
      "Guerrillas roaming the land and crocodiles in the water show that there is no safety anywhere: the image signifies danger, from the Sierra Leone civil war.",
      { setText: 'Gbanabom Hallowell, The Dining Table' }),
    // 19 (paper 24)
    q(PO + "One of the thematic preoccupations of Awoonor's The Anvil and the Hammer is",
      ["clash of culture", "revival of colonialism", "the changing face of colonial masters", "the good attributes of colonialism"], A,
      "Awoonor shows the African caught between the anvil of tradition and the hammer of colonial, Western culture: a clash of cultures.",
      { setText: 'Kofi Awoonor, The Anvil and the Hammer' }),
    // 20 (paper 25)
    q(PO + "Piano and drums according to Okara's Piano and Drums are musical instruments of",
      ["contradictory tunes", "complementary tunes", "different cultural milieus", "different rhythmic appeals"], C,
      "The jungle drums stand for the speaker's African roots and the piano for Western culture: they are instruments of two different cultural worlds.",
      { setText: 'Gabriel Okara, Piano and Drums' }),
    // 21 (paper 27)
    q(PO + "In Diop's Vanity the persona is",
      ["mourning", "ululating", "lamenting", "mediating"], C,
      "Birago Diop's persona laments that no one listens to the sad, complaining voices of Africans, as they themselves did not listen to their ancestors.",
      { setText: 'Birago Diop, Vanity' }),
    // 22 (paper 29)
    q(PO + "The mood of Peters' The Panic of Growing Older can be described as",
      ["sober", "boastful", "defiant", "languid"], A,
      "Lenrie Peters reflects seriously and thoughtfully on the fears and lost chances of each stage of life as one ages: a sober mood.",
      { setText: 'Lenrie Peters, The Panic of Growing Older' }),
    // 23 (paper 30)
    q(PO + "'If goodness lead him not, yet weariness\nMay toss him to my breast.'\nThe literary device in the extract above from Herbert's The Pulley is",
      ["metonymy", "personification", "oxymoron", "irony"], B,
      "Goodness 'leads' and weariness 'tosses' man to God, as if they were people acting: personification.",
      { setText: 'George Herbert, The Pulley' }),
    // 24 (paper 31)
    q("An example of a narrative poem is",
      ["elegy", "epic", "dirge", "sonnet"], B,
      "An epic is a long narrative poem telling the deeds of a hero; the elegy, dirge and sonnet are lyric poems."),
    // 25 (paper 32)
    q("A literary device wherein the author places a person, concept, idea or theme parallel to another is",
      ["allusion", "juxtaposition", "symbolism", "memoir"], B,
      "Juxtaposition places two things side by side so that their similarities or contrasts stand out."),
    // 26 (paper 33)
    q("A prose work which centres on moral growth and character formation of an individual is called",
      ["psychological novel", "picaresque", "autobiography", "satirical novel"], B,
      "The precise name for a novel of a hero's moral growth and character formation is the bildungsroman, which is not among the options.",
      { keyVerdict: 'none', keyAnswer: 'B', answerNote: "None of the options is the right term. A novel that traces the moral growth and formation of a young person's character is a bildungsroman (novel of education), such as Dickens's David Copperfield. The answer often given is B, picaresque, which is only partly right: the picaresque also follows one hero through life, but it is a string of episodic adventures of a rogue who usually does not change much." }),
    // 27 (paper 34)
    q("Myths differ from legend in that myths",
      ["have more of the historical background and less of the supernatural", "are less concerned with moral didacticism", "are more concerned with moral didacticism", "have less of the historical background and less of the supernatural"], B,
      "Myths are sacred stories about gods and the origin of things, told mainly to explain; legends are about human heroes with some historical basis, often held up as models of conduct."),
    // 28 (paper 35)
    q("A character that develops as a story develops in a novel is",
      ["flat", "foil", "round", "eponymous"], C,
      "A round (dynamic) character is complex and changes as the story unfolds; a flat character stays the same."),
    // 29 (paper 36)
    q("'Our third jailer made little or no impression on me. He was one of the many people who struggled for a niche in the rebel administration in order to feed their families. He seemed to be very much controlled by the other two.'\nElechi Amadi, Sunset in Biafra\n\nThe speaker's attitude towards the jailer in the passage above is that of",
      ["admiration", "condemnation", "spite", "respect"], B,
      "The speaker dismisses the jailer as unimpressive, a self-seeker in the rebel administration controlled by others: a disapproving, condemning attitude."),
    // 30 (paper 37)
    q("'At the peak of the trumpeter's performance, his cheeks were as if they were balloons and his eyes speak many words.'\n\nThe literary devices in the extract above are",
      ["metaphor and paradox", "simile and metaphor", "simile and personification", "paradox and simile"], C,
      "'As if they were balloons' is a comparison with 'as if', a simile; eyes that 'speak many words' are given the human power of speech, personification.",
      { bookletKey: 'A', bookletNote: "The booklet answer A (metaphor and paradox) is wrong: the cheeks are compared to balloons with 'as if', which makes it a simile, and nothing in the sentence contradicts itself, so there is no paradox. Eyes that 'speak' are personified, so C is right." }),
    // 31 (paper 38)
    q("'But now my father asks me who I am. He says I have given manicure treatment to my finger and toe nails; That my hairs no longer stand erect. Like the forest trees of udu-uku shrine; That they are parti-coloured and stood loosely like the feathers of a sick cock.'\n\nThe dominant figure of speech in the stanza above is",
      ["metaphor", "simile", "soliloquy", "irony"], B,
      "The hair is compared with 'like' twice: 'like the forest trees of udu-uku shrine' and 'like the feathers of a sick cock'. Simile dominates."),
    // 32 (paper 39)
    q("'How wonderful it is that nobody need wait a single moment before starting to improve the world.'\nAnne Frank, The Diary of a Young Girl\n\nThe writer of the passage above is",
      ["assertive", "retrogressive", "optimistic", "antagonistic"], C,
      "'How wonderful' and the belief that anyone can start improving the world at once show hope and confidence in the future: the writer is optimistic.",
      { keyVerdict: 'corrected', keyAnswer: 'A', answerNote: "The answer often given is A, assertive. The sentence is a confident statement, but what it shows about the writer is her hopeful outlook: 'How wonderful it is' expresses joy that the world can be improved at once, so optimistic (C) describes her better." }),
    // 33 (paper 40)
    q("'I live in dark quarters of the world without light, nor life'\nAgostinho Neto, Night\n\nThe last line above suggests",
      ["living in squalor", "living in hell", "death", "living in affluence"], A,
      "Dark quarters without light or life describe the poor, wretched slums where the oppressed live: living in squalor."),
  ]);
})();
