# Content loading and offline use

The web app remains vanilla HTML/CSS/JavaScript with the existing shared
`editoby-api.vercel.app` backend. No new production dependencies are required.

The initial page references three local scripts (`questions.js`,
`content-loader.js`, `app.js`) and the existing external Paystack script.
`content-manifest.json` supplies subject/year counts without fetching papers.

## Student behaviour

- Opening a paper, game or study section prepares only its selected subject.
  A combo prepares its four subjects. Subject packages contain all available
  years, prepared Teach Me explanations, topic mappings, booklet annotations
  and referenced diagrams. Downloading a subject together keeps repeat counts
  consistent across years; this version does not download one year at a time.
- A delayed preparation dialog shows real completed-file progress. Network
  requests time out after 45 seconds (8 seconds for service-worker shell
  requests). Failure offers retry or a return to choosing other content.
- All required files must download and pass SHA-256 verification before any
  package script runs. Partial downloads remain reusable, but partial question
  banks are never presented. Failed preparation consumes no free session.
- Verified files reopen from Cache Storage without contacting the network.
  The app shell is saved separately by the service worker. Content not yet
  saved requires connectivity; browser storage eviction can remove saved data.
  If storage is unavailable/full, online use continues with an explicit warning.
- On reopening online, the app checks the manifest. Changed files get new
  content hashes; unchanged saved files are reused. An active session keeps its
  existing content; no background replacement of answers occurs mid-session.
- Files in the old `jamb-app-v1` cache are verified and migrated when needed.
  The old cache is retained. Cache activation never deletes other apps' caches
  on the shared GitHub Pages origin.
- Live AI, payments, cloud dashboards and challenges still use the existing
  backend and require internet/access as before. This change adds no credentials.

## Saved-offline indicators

Subject pickers mark complete packages with “Saved offline”. The selected subject
also has an explanatory status line. Status is derived from the cached files for
the current manifest hashes, including diagrams, plus the cached app shell; a
partial package, missing file, outdated version or unavailable storage is not
marked saved. Status is checked at startup, after preparation, when returning
to the app and when connectivity changes. Cache metadata is checked without
redownloading content. Browser cleanup can still remove saved files later.

Run the focused indicator checks with `node tests/offline-status.cjs`.

## Editing content

After changing papers, images, Teach Me, lessons or booklet annotations, run:

```sh
node tools/build-content-manifest.cjs
```

Commit the generated manifest with the changed content. Its file hashes and
summary counts must match the shipped files. Do not manually invent hashes.
A deployment must include the manifest, loader, updated shell and content.

## Validation

Serve the repository root over localhost HTTP (or deploy over HTTPS). With
Playwright and Chromium installed in the development environment:

```sh
node tests/content-loading.cjs
```

Defaults: app at port 8001, Chromium at `/usr/bin/chromium`. Override with
`JAMB_TEST_URL` (including a trailing slash) and `CHROMIUM_PATH` if needed.
Playwright is a development-only test dependency, available in the cloud
workspace; it is not needed to run or deploy the app.

Checks cover a clean start, selected-subject preparation, preservation of all
question/lesson/ruling data, offline page reloads and diagrams, legacy-cache
migration, study hubs, retries, integrity failures, changed-file updates and
storage failures. External requests are blocked so these checks cannot make
payments or spend AI credits.

Not covered by these checks: real payments/AI/cloud services, Android packaging,
and long-term cache eviction policies on physical phones. A first subject
preparation includes all its papers and diagrams and can take time on a poor
connection. No speculative subject downloads are started automatically.

## Reviewed study metadata

`TEACH_TOPICS[subject].repeats` is an optional question-ID to stable-group-ID
map for reviewed variants that test the same fact with different wording or
options. Keep the original occurrences in each paper. Review the source years
and meaning before adding an ID; sharing a topic or passage is insufficient.
The app and manifest builder use these groups before the existing exact-text
and option-overlap matcher. Subjects without this map keep that matcher.
Reviewed groups say “tested this point” and list the source years.

Exam Traps requires an explicit `The trap:` paragraph in prepared Teach Me.
Author it only for a genuinely tempting wrong choice. Put references before
that final paragraph, because the extractor reads through the end of the text.
Key Points expands with imported topics; it is not a complete-syllabus claim.
Add or split lessons when needed, preserving earlier coverage and topic links.
Original administrative instructions may be retained with `administrative:
true` and `noanswer`, but receive no fabricated Bible lesson and are excluded
from Tricky Questions. Any attempted choice receives credit in practice.

`node tests/crs-content.cjs` checks the current CRS source/key provenance,
prepared teaching, reviewed repeats, traps, lesson lengths, question scoring,
study hubs and offline access. Browser tests block external service requests.

## Commerce imports and provisional answers

Commerce 2001–2004 supplies 200 dated questions, prepared explanations and topic
lessons as an on-demand package. Run `node tests/commerce-content.cjs` with the
app served locally to validate source keys, coverage, all four papers, study hubs
and saved offline content. `COMMERCE_HUBS_ONLY=1` runs the supplementary hub and
offline checks without replaying every paper.

New questions may set `teachKey` to their stable source ID. Use that same key in
`TEACH_ME` and `TEACH_TOPICS.of`; older questions retain the wording/options key.
This prevents a later repeated occurrence from overwriting an earlier prepared
explanation. Reviewed repeats are linked separately by source ID.

An unresolved question keeps its supplied key provisionally with
`reviewPending: true`, `keyVerdict: 'pending'`, `keyAnswer` and a clear
`answerNote`. Practice shows neutral supplied-key styling rather than confident
right/wrong colours. These records are excluded from fast games and Exam Traps;
uncertainty alone does not establish multiple-answer or wrong-key eligibility.
The 45-second timeout includes downloading each response body.
