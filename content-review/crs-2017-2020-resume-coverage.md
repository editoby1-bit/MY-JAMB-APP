# CRS resumption: coverage and repeat-consistency audit

Audit date: 5 November 2026. This is an assessment of the existing draft and published HEAD, followed by a separate proposed coverage overlay. No original draft, repository file, source wording or scoring was changed.

## Main finding

**The draft has complete structural coverage for the 160 new questions, but it is not yet a fully reconciled release.** There are specific topic-placement/copy gaps and four linked old/new scoring cases. The published 850 records and all their prepared question explanations remain unchanged.

## Counts and preservation

| Item | Published HEAD | Working draft |
|---|---:|---:|
| Source/practice records | 850 | 1,010 |
| Paper records with stable IDs | 800 | 960 |
| Starter/practice records without IDs | 50 | 50 |
| Lessons | 32 | 35 |
| Prepared TeachMe keys | 850 | 1,010 |
| Academic topic mappings | 847 | 1,007 |
| Administrative items, excluded from topic mapping | 3 | 3 |
| Reviewed repeat groups | 94 | 156 |
| Repeat-group occurrences | 206 | 353 |

All four new papers have40 records:160 total. They contain no booklet-colour/type administrative question. The existing administrative2012Q1,2013Q1 and2014Q1 remain unmapped. There are no missing TeachMe entries, missing academic mappings, nonexistent topic targets or out-of-range lesson lengths in the working draft. All35 lesson bodies contain300–450 words.

`base-questions.json`, the CRS objects in `base-teaching.json`, and published HEAD match. All850 old question records (including answers and flags) and all850 old prepared explanations are unchanged in the working draft. The50 starter records are also identical. This does not mean every old topic mapping or lesson sentence is unchanged:18 earlier paper IDs move topics and22 prior lesson bodies are rewritten or supplemented. Three focused lessons are added.

The authored coverage files contain25 lesson updates,178 ID remaps (all160 new plus18 old), no starter-key remaps, and156 reviewed-repeat groups. These are counts of a prepared update, not independent proof that every factual claim has been preserved.

## Concrete coverage gaps

### coverage-new-leper-mapping

Cases: crs-2017-q24.

Current: miracles-signs.

Proposed: healing-faith.

The priest/offering material was moved to healing-faith, but this new question retained the nature/signs target.

### coverage-ot-leprosy-mapping

Cases: crs-2009-q47, crs-2010-q14.

Current: healing-faith.

Proposed: elisha-naaman-gehazi (shadow split).

These concern Elisha/Naaman/Gehazi, whereas healing-faith covers Jesus and contains neither the immediate Elisha response to the king nor Gehazi’s transferred disease.

### lesson-working-copy-drift

Cases: crs-2017-q5, crs-2017-q30.

Current: Working kings-division has 449 words and lacks the thousand-offering detail and Hilkiah name..

Proposed: Use the authored lesson-updates.json kings-division object (450 words), preserved in shadow-lesson-updates.json..

The prepared update supplies both specifically tested facts; copying only working crs-topics.js leaves the gaps.

## Separate shadow coverage proposal

The files `shadow-lesson-updates.json` and `shadow-topic-remap.json` implement only the clear coverage corrections for root review. They do not touch answers.

- 2017Q24 moves to healing-faith.
- A focused elisha-naaman-gehazi lesson receives the OT healing/integrity questions2002Q50,2009Q47,2010Q14,2016Q37 and2020Q25.
- The complete existing Naaman/Gehazi paragraph moves intact from elijah-elisha into the new lesson; all other Elijah paragraphs remain. This avoids forcing OT narratives into a Jesus-only lesson.
- The shadow preserves the fuller authored kings-division update, including the thousand offerings and Hilkiah.

After merging the shadow there are **36 lessons**, all300–450 words; **26 update objects** and **180 remap entries**. The new OT lesson is370 words; the remaining Elijah lesson is398 words. The other old question explanations and scoring remain untouched.

## Prepared explanation length

Every new record has prepared TeachMe text, but the160 new entries contain **44–80 words**, not100–180. Published CRS entries range39–120 words. The existing integration assertion measures characters, so it does not establish a word-length pass. If the current Commerce-style100–180-word prepared-teaching requirement is applied to resumed CRS, all160 need expansion. This is a content-depth consistency decision; it must not be reported as already passed.

## Scoring consistency under the owner’s C-only baseline

CRS2003Q3 already accepts **C only**, with no alsoAccept value, in both HEAD and working draft. Its old multi-answer ruling must not be restored from a historical review inventory. The wider lesson can explain image, likeness and responsibility without granting the related representation option a score. The new2019Q1 and2020Q6 image-related questions also select their direct image wording; these do not require an automatic new multiple-answer rule.

Normalized exact-stem plus option-text comparison found28 old/new match pairs. Three pairs have different accepted option-text sets. A fourth near-identical Jonah pair has the same policy issue. Option letters below follow each individual record; no comparison assumes letters remain constant across papers.

### crs-2013-q21 / crs-2018-q2

Match type: exact-normalized-stem-and-option-set.

Older stem: Before his call, Amos was a

A. herdsman
B. seer
C. farmer
D. prophet

Older accepted: herdsman, farmer.

New stem: Before his call, Amos was a

A. herdsman
B. seer
C. farmer
D. prophet

New accepted: herdsman. Pending: False.

Linked founder review; no old scoring changed by this audit.

### crs-2005-q25 / crs-2020-q29

Match type: exact-normalized-stem-and-option-set.

Older stem: In His Sermon on the Mount, Jesus taught Christians to

A. turn the other cheek to their enemies
B. be merciful to their enemies
C. love and pray for their enemies
D. do good to their enemies

Older accepted: love and pray for their enemies, turn the other cheek to their enemies, do good to their enemies.

New stem: In his Sermon on the Mount, Jesus taught Christians to

A. turn the other cheek to their enemies
B. be merciful to their enemies
C. love and pray for their enemies
D. do good to their enemies

New accepted: love and pray for their enemies. Pending: False.

Linked founder review; no old scoring changed by this audit.

### crs-2008-q10 / crs-2020-q39

Match type: exact-normalized-stem-and-option-set.

Older stem: According to John, the word Rabboni in Hebrew means

A. disciple
B. priest
C. master
D. Teacher

Older accepted: Teacher, master.

New stem: According to John, the word Rabboni in Hebrew means

A. disciple
B. priest
C. master
D. Teacher

New accepted: Teacher. Pending: True.

Linked founder review; no old scoring changed by this audit.

### crs-2004-q41 / crs-2020-q1

Match type: near-identical-stem-with-added-people-of.

Older stem: God called Jonah and sent him to Nineveh to

A. pray for the people's forgiveness
B. pray for their repentance
C. preach his word to them
D. cry against their wickedness

Older accepted: cry against their wickedness, preach his word to them.

New stem: God called Jonah and sent him to the people of Nineveh to

A. pray to him for their forgiveness
B. pray for their repentance
C. preach his word to them
D. cry against their wickedness

New accepted: cry against their wickedness. Pending: False.

Linked founder review; the extra people-of wording does not explain the changed accepted set by itself.

The three ordinary new cases2018Q2,2020Q1 and2020Q29 are not currently marked pending despite these linked conflicts. Narrowing an answer may fit the new single-best policy, but silently preserving an older contrary exact-repeat rule remains inconsistent. The Rabboni case is already in the pending queue. It concerns directly attested translation equivalence, so the image/representation example does not by itself decide it.

Within the new160 alone, 5 normalized exact-repeat pairs have consistent accepted option-text sets; no new/new exact-repeat scoring conflict was found.

The Jerusalem-council group is a useful non-conflict: old2014Q39 asks which issue was settled, while new2018Q32 asks which council was convened. Different accepted texts there answer different questions and should not be mechanically reconciled.

The existing integrate.cjs duplicate assertion keys questions by TeachMe key. New questions have their unique IDs as teachKey, while older records generally use composite question/options keys. That assertion therefore does not establish old/new exact-repeat compatibility. A normalized stem/options comparison or explicit reviewed-decision links are still required.

## Pending new issues and older queues

The new queue contains13 source items in11 linked issue groups. Their proposed treatments are not applied:

- **crs-2017-q38** (jehu-jezreel), suppliedD: The offered Jezebel answer is a contextual victim, not the phrase Hosea actually names; Jezreel is absent from the options.
- **crs-2018-q17** (jehu-jezreel), suppliedD: The offered Jezebel answer is a contextual victim, not the phrase Hosea actually names; Jezreel is absent from the options.
- **crs-2018-q23** (asherah-execution), suppliedA: The stem gives a false Baal count and asserts an Asherah execution that is not narrated. The keyed 400 is an invitation count, not a demonstrated execution count.
- **crs-2019-q12** (calf-founder), suppliedB: JeroboamI establishes the Bethel/Dan calf sanctuaries but is absent. Ahab is associated with continued Jeroboam-style sins and promotion of Baal, so made popular is too vague to prove the intended replacement from these options.
- **crs-2019-q14** (asherah-execution), suppliedA: The stem gives a false Baal count and asserts an Asherah execution that is not narrated. The keyed 400 is an invitation count, not a demonstrated execution count.
- **crs-2019-q15** (joshua-age), suppliedB: Joshua’s age at the Exodus is not explicitly given by the cited narrative. The familiar40 belongs to Caleb at the spying mission, a different person and event.
- **crs-2019-q18** (eli-recipient), suppliedB: The quoted message is spoken to Samuel about Eli’s house; the supplied B names Eli as recipient while giving the right cause.
- **crs-2019-q19** (canaan-peoples), suppliedA: The sequence before arrival is defective, and six versus seven depends on the list selected. A proposed seven correction is not secure without specifying the enumeration.
- **crs-2019-q29** (abraham-call-count), suppliedC: No scene or counting unit is supplied. Two repetitions of Abraham’s name in one address are not clearly two separate calls before a response.
- **crs-2019-q33** (mission-non-goal), suppliedC: C is the strongest intended non-political mission answer, but D is also defective: Christ is not a component/part of the Trinity and becoming such a component is not an earthly mission.
- **crs-2019-q34** (cyrene-symbolism), suppliedD: The proposed continental symbolism is a classroom interpretation rather than a conclusion stated by the Gospel. Simon’s compelled cross-bearing does not prove Africa as a whole accepted Jesus.
- **crs-2019-q4** (pre-sinai-law), suppliedB: The stem mixes religious customs, codified law and a pre-Sinai chronology. Judaism, Torah, Talmud and Hammurabi are not interchangeable terms.
- **crs-2020-q39** (rabboni-translation), suppliedD: Teacher is the strongest direct modern gloss, but KJV renders the same John20:16 gloss Master in its teacher sense. This is real translation equivalence, not a broadly related theological truth.

Full stems, all options, primary-text references and unapplied proposals are already recorded in `crs-2017-2020/pending-review.json` and `independent-review.md`. That queue is separate from the old multiple-answer policy review.

The historical founder inventory contains141 flagged paper records, including the already settled2003Q3 case. Published HEAD currently has140 flagged records and53 remaining multiple-answer questions. The53-item multiple audit,78 panel verdicts,35 initial online checks and120 extended checks overlap; adding these numbers would overstate unresolved work. They are evidence inventories, not authorizations or independent votes.

Relevant prior materials reviewed: `crs-founder-review/interpretive-audit.md`, `multiple-audit.md`, `current-issues.json`, `crs-verdict-panel/consistency-audit.md`, and the current new-paper independent/pending reviews. The earlier panel specifically warns about the entire-Sermon scope in the enemy-love question and consistent treatment of translation equivalents.

## Remaining work before claiming the draft reconciled

1. Review and merge the separate shadow coverage overlay, or make equivalent explicit corrections. Do not copy only the stale working topic file.
2. Resolve or explicitly preserve for joint decision the13 pending new source items, plus the linked ordinary old/new scoring conflicts. Keep the old C-only ruling intact and do not silently generalize changes to all older multiple-answer cases.
3. Decide the prepared-explanation depth standard and expand the160 short entries if100–180 words is required.
4. Verify source wording, references and the older lesson fact inventory during the content review. This audit confirms data preservation and named fact relocations, not an official syllabus audit or an official JAMB marking scheme.
5. Run root’s scored-practice, repeat-group, study-section and offline tests against the exact final release snapshot after decisions.

No source/scoring edits, repository mutations or publication were performed by this audit.
