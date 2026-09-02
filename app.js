(() => {
  // Show Working mode constants
  const SW_SUBJECTS    = ['mathematics','physics','chemistry','economics','accounting'];
  const SW_SUBJECTS_LBL = { mathematics:'Mathematics', physics:'Physics', chemistry:'Chemistry', economics:'Economics', accounting:'Accounting' };
  const SK_SW_CREDITS  = 'jamb-sw-credits-v1';
  const SW_QUARTERLY   = 20; // snaps per quarter
  const SNAP_API_URL   = 'https://editoby-api.vercel.app/api/mark';
  // Same Vercel project as My Exams App — /api/verify-payment and /api/teach
  // are shared across both apps.
  const API_BASE = 'https://editoby-api.vercel.app';

  function getSWCredits() {
    const qtr = getCurrentQuarter();
    const d   = loadPref(SK_SW_CREDITS);
    if (!d || d.quarter !== qtr) { savePref(SK_SW_CREDITS,{n:SW_QUARTERLY,quarter:qtr}); return SW_QUARTERLY; }
    return d.n;
  }
  function useSWCredit() {
    const c = getSWCredits();
    if (c<=0) return false;
    savePref(SK_SW_CREDITS,{n:c-1,quarter:getCurrentQuarter()});
    return true;
  }

  const storageKeys = {
    users: 'jamb-cbt-users-v3',
    currentUser: 'jamb-cbt-current-user-v3'
  };

  // ── New feature constants — defined at top so available throughout ──
  const SK_ACCESS     = 'jamb-access-v1';
  const SK_FREE       = 'jamb-free-v1';
  const SK_TIER       = 'jamb-tier-v1';
  const SK_EASOLD     = 'jamb-ea-sold-v1';
  const SK_AI_CREDITS = 'jamb-ai-credits-v1';
  const SK_CLASS       = 'jamb-class-v1';       // { classCode, name, pin } — this device's class membership
  const SK_CLASS_ADMIN = 'jamb-class-admin-v1'; // { classCode, adminSecret, schoolName } — teacher device only
  const JAMB_FREE_LIMIT = 10;
  const JAMB_EA_CAP     = 100;
  const AI_QUARTERLY    = 100;
  const PAYSTACK_KEY    = 'pk_live_5d12ee2a90900116dc222107e059a06214c085ff';
  // 🔑 Replace above with pk_live_ key when Paystack approves

  function savePref(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
  function loadPref(k,d=null){try{const v=localStorage.getItem(k);return v!==null?JSON.parse(v):d;}catch(e){return d;}}
  function checkAccess(){const d=loadPref(SK_ACCESS);return !!(d?.expires&&new Date(d.expires)>new Date());}
  function getFreeUsed(){return loadPref(SK_FREE)?.n||0;}
  function getFreeUsedCount(){return loadPref(SK_FREE)?.n||0;}
  function getCurrentQuarter(){const d=new Date();return `${d.getFullYear()}-Q${Math.ceil((d.getMonth()+1)/3)}`;}
  function getAICredits(){const d=loadPref(SK_AI_CREDITS);if(!d||d.quarter!==getCurrentQuarter()){savePref(SK_AI_CREDITS,{n:AI_QUARTERLY,quarter:getCurrentQuarter()});return AI_QUARTERLY;}return d.n;}
  function useAICredit(){const c=getAICredits();if(c<=0)return false;savePref(SK_AI_CREDITS,{n:c-1,quarter:getCurrentQuarter()});return true;}
  function refreshChallengeBtn(){const btn=document.getElementById('jambChallengeBtn');if(!btn)return;if(state&&state.currentUser)btn.classList.remove('hidden');else btn.classList.add('hidden');const dbtn=document.getElementById('jambDashBtn');if(dbtn){if(state&&state.currentUser)dbtn.classList.remove('hidden');else dbtn.classList.add('hidden');}}
  function refreshUpgradeBar(){
    const bar=document.getElementById('jambUpgradeBar');
    const txt=document.getElementById('jambUpgradeText');
    const card=document.getElementById('jambUpgradeCard');
    if(!bar)return;
    if(checkAccess()){
      bar.classList.add('hidden');
      if(card) card.classList.add('hidden');
      return;
    }
    bar.classList.remove('hidden');
    if(card) card.classList.remove('hidden');
    if(txt){
      const used=getFreeUsedCount();
      const msgs=[
        `⚡ ${used} of 10 free sessions used — unlock full access for ₦1,500`,
        `🧠 The only JAMB app with AI explanations — ₦1,500`,
        `🏆 Subscribe to challenge friends and unlock community quiz`,
        `📅 ${10-used} free session${10-used===1?'':'s'} remaining — upgrade anytime`,
      ];
      txt.textContent=msgs[Math.floor(Date.now()/30000)%msgs.length];
    }
  }

  const el = {
    homeScreen: document.getElementById('homeScreen'),
    quizScreen: document.getElementById('quizScreen'),
    resultScreen: document.getElementById('resultScreen'),
    studentName: document.getElementById('studentName'),
    loginBtn: document.getElementById('loginBtn'),
    currentStudentBox: document.getElementById('currentStudentBox'),
    sessionTypeSelect: document.getElementById('sessionTypeSelect'),
    singleSubjectWrap: document.getElementById('singleSubjectWrap'),
    comboConfig: document.getElementById('comboConfig'),
    subjectSelect: document.getElementById('subjectSelect'),
    comboSubject1: document.getElementById('comboSubject1'),
    comboSubject2: document.getElementById('comboSubject2'),
    comboSubject3: document.getElementById('comboSubject3'),
    comboQCountSelect: document.getElementById('comboQCountSelect'),
    modeSelect: document.getElementById('modeSelect'),
    questionCountSelect: document.getElementById('questionCountSelect'),
    durationSelect: document.getElementById('durationSelect'),
    startBtn: document.getElementById('startBtn'),
    switchUserBtn: document.getElementById('switchUserBtn'),
    resetProgressBtn: document.getElementById('resetProgressBtn'),
    statSessions: document.getElementById('statSessions'),
    statAverage: document.getElementById('statAverage'),
    statBest: document.getElementById('statBest'),
    statQuestions: document.getElementById('statQuestions'),
    historyTitle: document.getElementById('historyTitle'),
    historyList: document.getElementById('historyList'),
    // Sidebar
    sidebarStudent: document.getElementById('sidebarStudent'),
    sidebarMode: document.getElementById('sidebarMode'),
    timerDisplay: document.getElementById('timerDisplay'),
    progressText: document.getElementById('progressText'),
    progressBar: document.getElementById('progressBar'),
    questionPills: document.getElementById('questionPills'),
    pillsLabel: document.getElementById('pillsLabel'),
    subjectSwitcher: document.getElementById('subjectSwitcher'),
    subjectTabs: document.getElementById('subjectTabs'),
    submitBtn: document.getElementById('submitBtn'),
    // Quiz main
    questionNumberBadge: document.getElementById('questionNumberBadge'),
    questionSubjectMeta: document.getElementById('questionSubjectMeta'),
    subjectPositionTag: document.getElementById('subjectPositionTag'),
    questionText: document.getElementById('questionText'),
    diagramBox: document.getElementById('diagramBox'),
    optionsList: document.getElementById('optionsList'),
    toggleExplanationBtn: document.getElementById('toggleExplanationBtn'),
    explanationBox: document.getElementById('explanationBox'),
    prevBtn: document.getElementById('prevBtn'),
    nextBtn: document.getElementById('nextBtn'),
    backHomeBtn: document.getElementById('backHomeBtn'),
    // Result
    resultScore: document.getElementById('resultScore'),
    resultSummary: document.getElementById('resultSummary'),
    resultBreakdown: document.getElementById('resultBreakdown'),
    subjectBreakdown: document.getElementById('subjectBreakdown'),
    subjectBreakdownList: document.getElementById('subjectBreakdownList'),
    reviewBtn: document.getElementById('reviewBtn'),
    restartBtn: document.getElementById('restartBtn')
  };

  const state = {
    users: loadUsers(),
    currentUser: loadCurrentUser(),
    currentQuestions: [],
    answers: [],
    currentIndex: 0,
    mode: 'practice',
    subject: '',
    subjects: [],
    student: '',
    reviewMode: false,
    showReviewExplanation: false,
    timerId: null,
    timeLeft: 0,
    chosenDurationMinutes: null,
    sessionType: 'single',
    // Subject switching data
    subjectRanges: {} // { subjectName: { start, end } }
  };

  // ─────────────────────────────────────────────────
  function init() {
    populateSubjects();
    bindEvents();
    renderCurrentUser();
    renderStats();
    renderHistory();
    syncSessionTypeUi();
    syncStartButton();
    showScreen('home');
    initPaywall();
    initAIExplain();
    initCommunityQuiz();
    checkForSharedSession();
    refreshChallengeBtn();
    initUpgradeBar();
    checkForStartedJambChallenges();
    checkScheduledChallengeReminders();

    // Without this, a student who creates or joins a scheduled/ready
    // challenge and then just sits on some other screen would never
    // find out it started until they happened to reopen the modal or
    // log in again. This catches that regardless of which screen they're on.
    setInterval(() => {
      if (!state.currentUser) return;
      checkForStartedJambChallenges();
      checkScheduledChallengeReminders();
    }, 45000);
  }

  function populateSubjects() {
    const subjects = Object.keys(QUESTION_BANK);
    // Single subject — no default, force conscious selection
    el.subjectSelect.innerHTML =
      '<option value="" disabled>— Select Subject —</option>' +
      subjects.map(s => `<option value="${escHtml(s)}">${fmt(s)}</option>`).join('');
    // Force browser to show placeholder — must set value after innerHTML
    el.subjectSelect.value = '';

    // Combo — English is always first fixed subject, no change needed
    const combo = subjects.filter(s => s !== 'english');
    const opts = combo.map(s => `<option value="${escHtml(s)}">${fmt(s)}</option>`).join('');
    [el.comboSubject1, el.comboSubject2, el.comboSubject3].forEach(sel => { sel.innerHTML = opts; });

    if (QUESTION_BANK['mathematics']) el.comboSubject1.value = 'mathematics';
    if (QUESTION_BANK['physics'])     el.comboSubject2.value = 'physics';
    if (QUESTION_BANK['chemistry'])   el.comboSubject3.value = 'chemistry';

    const total = subjects.reduce((sum, s) => sum + QUESTION_BANK[s].length, 0);
    el.statQuestions.textContent = String(total);
  }

  function bindEvents() {
    el.loginBtn.addEventListener('click', loginStudent);
    el.studentName.addEventListener('keydown', e => { if (e.key === 'Enter') loginStudent(); });
    el.startBtn.addEventListener('click', startSession);
    el.prevBtn.addEventListener('click', () => moveQuestion(-1));
    el.nextBtn.addEventListener('click', () => moveQuestion(1));
    el.submitBtn.addEventListener('click', finishQuiz);
    el.backHomeBtn.addEventListener('click', confirmExit);
    el.reviewBtn.addEventListener('click', enterReviewMode);
    el.restartBtn.addEventListener('click', () => showScreen('home'));
    el.resetProgressBtn.addEventListener('click', resetProgress);
    el.switchUserBtn.addEventListener('click', switchUser);
    // Config button groups
    document.querySelectorAll('.config-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.group;
        document.querySelectorAll(`.config-btn[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const hiddenId = group === 'session' ? 'sessionTypeSelect' : 'modeSelect';
        const hidden = document.getElementById(hiddenId);
        if (hidden) hidden.value = btn.dataset.value;
        if (group === 'session') syncSessionTypeUi();
        if (group === 'mode') syncDurationUi();
        syncStartButton();
      });
    });

    // SW close button
    const swCloseBtn = document.getElementById('swCloseBtn');
    if (swCloseBtn) swCloseBtn.addEventListener('click', () => {
      const panel = document.getElementById('showWorkingPanel');
      if (panel) panel.classList.add('hidden');
    });

    // SW lock bar snap button
    const swLockSnapBtn = document.getElementById('swLockSnapBtn');
    if (swLockSnapBtn) swLockSnapBtn.addEventListener('click', () => {
      const panel = document.getElementById('showWorkingPanel');
      if (panel) panel.classList.remove('hidden');
      triggerSWSnap();
    });

    el.modeSelect.addEventListener('change', () => { syncDurationUi(); syncStartButton(); });
    el.subjectSelect.addEventListener('change', () => syncStartButton());
    el.sessionTypeSelect.addEventListener('change', syncSessionTypeUi);
    el.toggleExplanationBtn.addEventListener('click', toggleReviewExplanation);
    // New features
    const shareBtn = document.getElementById('shareResultBtn');
    if (shareBtn) shareBtn.addEventListener('click', shareJambResult);
    const challengeBtn = document.getElementById('jambChallengeBtn');
    if (challengeBtn) challengeBtn.addEventListener('click', openJambChallenge);
  }

  // ─── SESSION START ────────────────────────────────
  function loginStudent() {
    const name = normalizeName(el.studentName.value);
    if (!name) { alert('Enter a student name to continue.'); return; }
    if (!state.users[name]) state.users[name] = { history: [] };
    state.currentUser = name;
    saveUsers(state.users);
    saveCurrentUser(name);
    renderCurrentUser();
    renderStats();
    renderHistory();
    checkForStartedJambChallenges();
    checkScheduledChallengeReminders();
  }

  function startSession() {
    if (!state.currentUser) {
      loginStudent();
      if (!state.currentUser) return;
    }

    // Validate all selections with gentle popups
    const sessionType = document.getElementById('sessionTypeSelect')?.value || '';
    const mode        = document.getElementById('modeSelect')?.value || '';
    const subject     = el.subjectSelect?.value || '';

    if (!sessionType) {
      showGentlePopup('👇 Please select a Session Type first', document.getElementById('sessionTypeBtns'));
      return;
    }
    if (!mode) {
      showGentlePopup('👇 Please select a Mode first', document.getElementById('modeBtns'));
      return;
    }
    if (sessionType === 'single' && !subject) {
      showGentlePopup('👇 Please select a Subject first', el.subjectSelect);
      return;
    }

    // Paywall check
    if (!checkAccess()) {
      const used = getFreeUsed();
      if (used >= JAMB_FREE_LIMIT) {
        showPaywall('trial');
        return;
      }
      // Increment free usage
      savePref(SK_FREE, { n: used + 1 });
    }

    state.sessionType = el.sessionTypeSelect.value;
    state.mode = el.modeSelect.value;
    state.reviewMode = false;
    state.showReviewExplanation = false;
    state.currentIndex = 0;
    state.student = state.currentUser;

    const selection = state.sessionType === 'combo'
      ? buildComboSession()
      : buildSingleSession();

    if (!selection || !selection.questions.length) {
      alert('No questions available for the selected setup.');
      return;
    }

    state.currentQuestions = selection.questions;
    state.answers = new Array(state.currentQuestions.length).fill(null);
    state.subject = selection.sessionLabel;
    state.subjects = selection.subjects;
    state.subjectRanges = selection.subjectRanges || {};
    state.chosenDurationMinutes = getChosenDurationMinutes(state.currentQuestions.length, state.mode);
    state.timeLeft = state.mode === 'exam' ? state.chosenDurationMinutes * 60 : 0;

    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
    if (state.mode === 'exam') startTimer();
    if (state.mode === 'showworking') showSWIntroBanner();

    el.sidebarStudent.textContent = state.student;
    el.sidebarMode.textContent = state.mode === 'exam'
      ? `Exam · ${state.chosenDurationMinutes} min`
      : 'Practice Mode';

    // Show/hide subject switcher
    const isCombo = state.sessionType === 'combo' && state.subjects.length > 1;
    el.subjectSwitcher.classList.toggle('hidden', !isCombo);
    if (isCombo) buildSubjectSwitcher();

    buildQuestionPills();
    renderQuestion();
    showScreen('quiz');
  }

  function buildSingleSession() {
    const subject = el.subjectSelect.value;
    const pool = shuffle([...QUESTION_BANK[subject]]);
    const countValue = el.questionCountSelect.value;
    const count = countValue === 'all' ? pool.length : Math.min(Number(countValue), pool.length);
    const questions = pool.slice(0, count).map(q => ({ ...q, sourceSubject: subject }));
    return {
      questions,
      subjects: [subject],
      sessionLabel: fmt(subject),
      subjectRanges: { [subject]: { start: 0, end: questions.length - 1 } }
    };
  }

  function buildComboSession() {
    const chosen = [el.comboSubject1.value, el.comboSubject2.value, el.comboSubject3.value].filter(Boolean);
    const unique = [...new Set(chosen)];
    if (unique.length !== 3) {
      alert('Choose 3 different subjects for the full JAMB combination.');
      return null;
    }

    const countVal = el.comboQCountSelect ? el.comboQCountSelect.value : 'standard';
    const isStandard = countVal === 'standard';
    const engCount = isStandard ? 60 : parseInt(countVal);
    const otherCount = isStandard ? 40 : parseInt(countVal);

    const allSubjects = ['english', ...unique];
    const subjectRanges = {};
    let offset = 0;
    let allQuestions = [];

    const enPool = shuffle([...QUESTION_BANK.english]);
    const enQs = enPool.slice(0, Math.min(engCount, enPool.length)).map(q => ({ ...q, sourceSubject: 'english' }));
    subjectRanges['english'] = { start: offset, end: offset + enQs.length - 1 };
    offset += enQs.length;
    allQuestions.push(...enQs);

    unique.forEach(subject => {
      const pool = shuffle([...QUESTION_BANK[subject]]);
      const qs = pool.slice(0, Math.min(otherCount, pool.length)).map(q => ({ ...q, sourceSubject: subject }));
      subjectRanges[subject] = { start: offset, end: offset + qs.length - 1 };
      offset += qs.length;
      allQuestions.push(...qs);
    });

    return {
      questions: allQuestions,
      subjects: allSubjects,
      sessionLabel: allSubjects.map(fmt).join(' + '),
      subjectRanges
    };
  }

  // ─── SUBJECT SWITCHER ─────────────────────────────
  function buildSubjectSwitcher() {
    el.subjectTabs.innerHTML = '';
    state.subjects.forEach(subject => {
      const range = state.subjectRanges[subject];
      const total = range ? (range.end - range.start + 1) : 0;
      const answered = range
        ? state.answers.slice(range.start, range.end + 1).filter(a => a !== null).length
        : 0;

      const btn = document.createElement('button');
      btn.className = 'subject-tab-btn';
      btn.dataset.subject = subject;
      btn.innerHTML = `<span>${fmt(subject)}</span><span class="subject-tab-count">${answered}/${total}</span>`;
      btn.addEventListener('click', () => jumpToSubject(subject));
      el.subjectTabs.appendChild(btn);
    });
    syncSubjectTabs();
  }

  function updateSubjectSwitcherCounts() {
    if (el.subjectSwitcher.classList.contains('hidden')) return;
    const btns = el.subjectTabs.querySelectorAll('.subject-tab-btn');
    btns.forEach(btn => {
      const subject = btn.dataset.subject;
      const range = state.subjectRanges[subject];
      if (!range) return;
      const total = range.end - range.start + 1;
      const answered = state.answers.slice(range.start, range.end + 1).filter(a => a !== null).length;
      const countEl = btn.querySelector('.subject-tab-count');
      if (countEl) countEl.textContent = `${answered}/${total}`;
    });
    syncSubjectTabs();
  }

  function jumpToSubject(subject) {
    const range = state.subjectRanges[subject];
    if (!range) return;
    state.currentIndex = range.start;
    renderQuestion();
    syncSubjectTabs();
  }

  function syncSubjectTabs() {
    const current = state.currentQuestions[state.currentIndex];
    if (!current) return;
    const currentSubject = current.sourceSubject;
    const btns = el.subjectTabs.querySelectorAll('.subject-tab-btn');
    btns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.subject === currentSubject);
    });
  }

  // ─── TIMER ────────────────────────────────────────
  function getChosenDurationMinutes(count, mode) {
    if (mode !== 'exam') return 0;
    const raw = el.durationSelect.value;
    if (raw === 'auto') return count;
    return Math.max(1, Number(raw) || count);
  }

  function startTimer() {
    updateTimerDisplay();
    state.timerId = setInterval(() => {
      state.timeLeft -= 1;
      updateTimerDisplay();
      if (state.timeLeft <= 0) {
        clearInterval(state.timerId);
        state.timerId = null;
        finishQuiz(true);
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    const t = Math.max(state.timeLeft, 0);
    const m = Math.floor(t / 60);
    const s = t % 60;
    el.timerDisplay.textContent = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    el.timerDisplay.classList.toggle('urgent', state.mode === 'exam' && t < 300 && t > 0);
  }

  // ─── PILLS ────────────────────────────────────────
  function buildQuestionPills() {
    el.questionPills.innerHTML = '';
    // If combo, show label; else show "Questions"
    el.pillsLabel.textContent = state.sessionType === 'combo' ? 'All Questions' : 'Questions';

    state.currentQuestions.forEach((_, idx) => {
      const btn = document.createElement('button');
      btn.className = 'pill';
      btn.textContent = String(idx + 1);
      btn.title = `Question ${idx + 1}${state.currentQuestions[idx].sourceSubject ? ' — ' + fmt(state.currentQuestions[idx].sourceSubject) : ''}`;
      btn.addEventListener('click', () => {
        state.currentIndex = idx;
        renderQuestion();
      });
      el.questionPills.appendChild(btn);
    });
    syncPills();
  }

  function syncPills() {
    [...el.questionPills.children].forEach((pill, idx) => {
      pill.classList.toggle('current', idx === state.currentIndex);
      pill.classList.toggle('answered', state.answers[idx] !== null);
    });
  }

  // ─── RENDER QUESTION ─────────────────────────────
  function renderQuestion() {
    const q = state.currentQuestions[state.currentIndex];
    if (!q) return;

    // Show AI explain button only in Practice mode or when reviewing past
    // results — never during a live, timed Exam Mode session, so it can't
    // be used to see the answer to a question you're being tested on.
    // Full Explain This in Practice Mode or when reviewing results; a small,
    // inert teaser during a live Exam Mode session; nothing if not logged in.
    if (!checkAccess()) hideAIButton();
    else if (state.mode === 'practice' || state.reviewMode) showAIButton();
    else showAITeaserButton();

    // Show Working mode panel
    const swPanel = document.getElementById('showWorkingPanel');
    const isCalcSubject = SW_SUBJECTS.includes((el.subjectSelect?.value||state.subject||'').toLowerCase());
    if (state.mode === 'showworking' && isCalcSubject) {
      if (swPanel) swPanel.classList.remove('hidden');
      // Reset for new question
      state.swDone = false;
      const swResult = document.getElementById('swResult');
      if (swResult) swResult.classList.add('hidden');
      const swCredits = document.getElementById('swCredits');
      if (swCredits) swCredits.textContent = getSWCredits() + ' snaps left';
      // Lock options until working is snapped
      // Show SW panel inline and lock bar
      const swPanel2 = document.getElementById('showWorkingPanel');
      if (swPanel2) swPanel2.classList.remove('hidden');
      lockOptionsUntilWorking(false);
      const lockBar = document.getElementById('swLockBar');
      if (lockBar) lockBar.classList.remove('hidden');
    } else {
      if (swPanel) swPanel.classList.add('hidden');
      lockOptionsUntilWorking(true);
      const lockBar = document.getElementById('swLockBar');
      if (lockBar) lockBar.classList.add('hidden');
    }

    el.questionNumberBadge.textContent = `Question ${state.currentIndex + 1} of ${state.currentQuestions.length}`;
    el.questionSubjectMeta.textContent = fmt(q.sourceSubject || state.subject);

    // Subject position indicator (e.g. "Q6 of 40 in Physics")
    const range = state.subjectRanges[q.sourceSubject];
    if (range && el.subjectPositionTag) {
      const posInSubject = state.currentIndex - range.start + 1;
      const totalInSubject = range.end - range.start + 1;
      el.subjectPositionTag.textContent = `${posInSubject} / ${totalInSubject} in ${fmt(q.sourceSubject)}`;
      el.subjectPositionTag.classList.remove('hidden');
    } else if (el.subjectPositionTag) {
      el.subjectPositionTag.classList.add('hidden');
    }
    el.questionText.innerHTML = escHtml(q.question).replace(/\n/g, '<br>');

    const hasDiagram = Boolean(q.diagram);
    el.diagramBox.classList.toggle('hidden', !hasDiagram);
    el.diagramBox.innerHTML = hasDiagram ? q.diagram : '';

    el.optionsList.innerHTML = '';
    const selectedAnswer = state.answers[state.currentIndex];

    q.options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.innerHTML = `<strong>${String.fromCharCode(65 + idx)}.</strong> ${escHtml(opt)}`;

      if (selectedAnswer === idx) btn.classList.add('selected');

      if (state.reviewMode || state.mode === 'practice') {
        if (selectedAnswer !== null) {
          if (idx === q.answer) btn.classList.add('correct');
          if (idx === selectedAnswer && selectedAnswer !== q.answer) btn.classList.add('wrong');
        }
      }

      btn.addEventListener('click', (e) => {
        // Show Working mode — if not yet snapped, show warning near clicked option
        if (state.mode === 'showworking' && !state.swDone) {
          showGentlePopup('✍️ Snap your working first to unlock answers', e.currentTarget);
          const panel = document.getElementById('showWorkingPanel');
          if (panel) panel.classList.remove('hidden');
          return;
        }
        selectAnswer(idx);
      });
      btn.disabled = state.reviewMode;
      el.optionsList.appendChild(btn);
    });

    // Apply visual lock after options are built
    if (state.mode === 'showworking' && !state.swDone) {
      lockOptionsUntilWorking(false);
    } else {
      lockOptionsUntilWorking(true);
    }

    // Explanation logic
    const shouldShowExpl = (
      (state.mode === 'practice' && selectedAnswer !== null) ||
      (state.reviewMode && (state.mode === 'practice' ? selectedAnswer !== null : state.showReviewExplanation))
    );

    const shouldShowToggle = state.reviewMode && state.mode === 'exam';
    el.toggleExplanationBtn.classList.toggle('hidden', !shouldShowToggle);
    el.toggleExplanationBtn.textContent = state.showReviewExplanation ? '🙈 Hide Explanation' : '💡 Show Explanation';
    el.explanationBox.classList.toggle('hidden', !shouldShowExpl);
    if (shouldShowExpl) el.explanationBox.textContent = q.explanation || '';

    // Nav buttons — on the very first question, "Previous" has nowhere to
    // go, so it becomes the exit action instead of just being greyed out.
    el.prevBtn.disabled = false;
    el.prevBtn.textContent = state.currentIndex === 0 ? '✕ Exit' : '← Previous';
    el.nextBtn.textContent = state.currentIndex === state.currentQuestions.length - 1
      ? 'Finish ✓'
      : 'Next →';

    // Progress
    const answered = state.answers.filter(a => a !== null).length;
    el.progressText.textContent = `${answered} / ${state.currentQuestions.length}`;
    el.progressBar.style.width = `${(answered / state.currentQuestions.length) * 100}%`;

    syncPills();
    updateSubjectSwitcherCounts();
    syncSubjectTabs();
  }

  function selectAnswer(idx) {
    if (state.reviewMode) return;
    state.answers[state.currentIndex] = idx;
    renderQuestion();
  }

  function moveQuestion(step) {
    if (step > 0 && state.currentIndex === state.currentQuestions.length - 1) {
      finishQuiz(false);
      return;
    }
    if (step < 0 && state.currentIndex === 0) {
      confirmExit();
      return;
    }
    state.currentIndex = Math.max(0, Math.min(state.currentQuestions.length - 1, state.currentIndex + step));
    renderQuestion();
  }

  function toggleReviewExplanation() {
    if (!(state.reviewMode && state.mode === 'exam')) return;
    state.showReviewExplanation = !state.showReviewExplanation;
    renderQuestion();
  }

  // ─── FINISH QUIZ ─────────────────────────────────
  function finishQuiz(fromTimeout = false) {
    if (!state.currentQuestions.length) return;
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }

    const correct = state.currentQuestions.reduce((sum, q, i) =>
      sum + (state.answers[i] === q.answer ? 1 : 0), 0);
    const total = state.currentQuestions.length;
    const wrong = state.answers.filter((a, i) => a !== null && a !== state.currentQuestions[i].answer).length;
    const skipped = state.answers.filter(a => a === null).length;
    const percent = Math.round((correct / total) * 100);

    if (!state.users[state.currentUser]) state.users[state.currentUser] = { history: [] };

    const result = {
      student: state.student,
      subject: state.subject,
      mode: state.mode,
      sessionType: state.sessionType,
      durationMinutes: state.chosenDurationMinutes,
      total, correct, wrong, skipped, percent,
      completedByTimeout: fromTimeout,
      date: new Date().toLocaleString()
    };

    state.users[state.currentUser].history.unshift(result);
    state.users[state.currentUser].history = state.users[state.currentUser].history.slice(0, 50);
    saveUsers(state.users);

    // Store for session sharing
    window._jambLastResult    = result;
    window._jambLastQuestions = [...state.currentQuestions];
    window._jambLastAnswers   = [...state.answers];

    // Score display + color
    el.resultScore.textContent = `${percent}%`;
    el.resultScore.style.color = percent >= 50
      ? (percent >= 70 ? 'var(--green)' : 'var(--navy)')
      : 'var(--red)';

    el.resultSummary.textContent = `${result.student} scored ${correct} out of ${total} in ${result.subject}${fromTimeout ? ' (time elapsed).' : '.'}`;
    el.resultBreakdown.innerHTML = [
      statCard('Correct', correct),
      statCard('Wrong', wrong),
      statCard('Skipped', skipped),
      statCard('Duration', result.mode === 'exam' ? `${result.durationMinutes} min` : '—')
    ].join('');

    // Per-subject breakdown for combo
    if (state.sessionType === 'combo' && Object.keys(state.subjectRanges).length > 0) {
      el.subjectBreakdown.classList.remove('hidden');
      el.subjectBreakdownList.innerHTML = state.subjects.map(subject => {
        const range = state.subjectRanges[subject];
        if (!range) return '';
        const qs = state.currentQuestions.slice(range.start, range.end + 1);
        const c = qs.reduce((sum, q, i) =>
          sum + (state.answers[range.start + i] === q.answer ? 1 : 0), 0);
        const pct = Math.round((c / qs.length) * 100);
        return `
          <div class="sbdown-row">
            <span class="sbdown-name">${fmt(subject)}</span>
            <div class="sbdown-bar-wrap">
              <div class="sbdown-bar" style="width:${pct}%"></div>
            </div>
            <span class="sbdown-score">${pct}%</span>
          </div>`;
      }).join('');
    } else {
      el.subjectBreakdown.classList.add('hidden');
    }

    renderStats();
    renderHistory();
    showScreen('result');

    // If this was a Challenge Mode attempt, report the score to the shared
    // leaderboard so the creator and anyone else with the code can see it —
    // not just whoever is on this exact device.
    const wasChallenge = !!state._challengeCode;
    if (state._challengeCode) {
      submitJambChallengeScore(state._challengeCode, state.currentUser, correct, total, percent);
    }

    // Best-effort report to the class dashboard (no-op if this device
    // hasn't joined a class). This question bank has no stable per-question
    // id, so a short hash of subject+question text stands in for one —
    // stable across sessions, which is what "missed more than once" needs.
    if (total > 0) {
      const missed = state.currentQuestions
        .map((q, i) => (state.answers[i] !== null && state.answers[i] !== q.answer)
          ? qHash(q.sourceSubject || state.subject, q.question) : null)
        .filter(Boolean);
      recordClassSession({
        subject: state.subject,
        mode: wasChallenge ? 'challenge' : 'practice',
        score: correct, total, missed,
      });
    }
  }

  // Short, stable hash — same subject+question text always produces the
  // same id, which is all the dashboard's "weak spot" detection needs.
  function qHash(subject, text) {
    const str = String(subject) + '|' + String(text);
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return 'q' + (h >>> 0).toString(36);
  }

  /* ════════ SCHOOL / PARENT DASHBOARDS ════════
     A student joins a class with a class code + a 4-6 digit PIN they pick
     (stops another student claiming their name). Every completed session
     (practice, exam, or challenge) reports to /api/dashboard — best-effort,
     never blocks the student's own result screen. A parent link is a
     read-only code the student's own device generates for one child.
     Shares the same backend and API_BASE as My Exams App's version. */
  function getClassMembership() { return loadPref(SK_CLASS); }
  function saveClassMembership(m) { savePref(SK_CLASS, m); }
  function clearClassMembership() { try { localStorage.removeItem(SK_CLASS); } catch (e) {} }

  async function dashApi(action, body) {
    const res = await fetch(API_BASE + '/api/dashboard', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action, ...body }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data.error || 'Request failed');
    return data;
  }

  async function recordClassSession({ subject, mode, score, total, missed }) {
    const m = getClassMembership();
    if (!m) return;
    try {
      await dashApi('record_session', {
        classCode: m.classCode, name: m.name, pin: m.pin,
        subject, mode, score, total, missed, timestamp: Date.now(),
      });
    } catch (e) { /* offline or class removed — not worth surfacing */ }
  }

  let _dashTab = null; // 'student' | 'teacher' | 'parent'

  function openDashModal(tab) {
    if (tab) _dashTab = tab;
    if (!_dashTab) {
      _dashTab = getClassMembership() ? 'student' : (loadPref(SK_CLASS_ADMIN) ? 'teacher' : 'student');
    }
    document.getElementById('jambDashModal')?.classList.remove('hidden');
    renderDashModal();
  }
  function closeDashModal() {
    document.getElementById('jambDashModal')?.classList.add('hidden');
  }

  function renderDashModal() {
    document.querySelectorAll('#dashTabBar .dash-tab').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tab === _dashTab);
    });
    const body = document.getElementById('dashTabBody');
    if (_dashTab === 'teacher') renderDashTeacherTab(body);
    else if (_dashTab === 'parent') renderDashParentTab(body);
    else renderDashStudentTab(body);
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#dashTabBar .dash-tab').forEach(btn => {
      btn.addEventListener('click', () => { _dashTab = btn.dataset.tab; renderDashModal(); });
    });
    document.getElementById('jambDashBtn')?.addEventListener('click', () => openDashModal());
    document.getElementById('jambDashClose')?.addEventListener('click', closeDashModal);
    document.getElementById('teacherDashClose')?.addEventListener('click', () => document.getElementById('teacherDashModal')?.classList.add('hidden'));
    document.getElementById('parentDashClose')?.addEventListener('click', () => document.getElementById('parentDashModal')?.classList.add('hidden'));
  });

  /* ── Student tab: join a class, or manage membership + parent link ── */
  function renderDashStudentTab(body) {
    const m = getClassMembership();
    if (m) {
      body.innerHTML = `
        <p class="jqc-sub" style="margin-bottom:.5rem;">You're in a class</p>
        <p style="font-size:.85rem; margin-bottom:1rem;">Class code <b>${escHtml(m.classCode)}</b> · joined as <b>${escHtml(m.name)}</b><br>
        <span class="jqc-sub" style="margin:0;">Your practice sessions and challenges are now shared with your teacher's class dashboard.</span></p>
        <button class="jqc-btn jqc-primary" id="genParentLinkBtn" style="width:100%;">Generate Parent Link</button>
        <div id="parentLinkOut" style="margin-top:.75rem;"></div>
        <button class="jqc-btn jqc-ghost" id="leaveClassBtn" style="margin-top:1rem;">Leave Class</button>
      `;
      document.getElementById('genParentLinkBtn').addEventListener('click', async () => {
        const btn = document.getElementById('genParentLinkBtn');
        btn.disabled = true; btn.textContent = 'Generating…';
        try {
          const { parentCode } = await dashApi('link_parent', { classCode: m.classCode, name: m.name, pin: m.pin });
          document.getElementById('parentLinkOut').innerHTML = `
            <input class="jqc-code-input" readonly value="${escHtml(parentCode)}" style="width:100%;margin-bottom:.5rem;">
            <p class="jqc-sub" style="margin:0;">Share this code with your parent — they enter it under the Parent tab.</p>`;
        } catch (e) {
          showInfoToast(e.message || 'Could not generate link');
        }
        btn.disabled = false; btn.textContent = 'Generate Parent Link';
      });
      document.getElementById('leaveClassBtn').addEventListener('click', () => {
        showConfirmModal('Leave this class? You can rejoin any time with the class code.', 'Leave', 'Cancel')
          .then(ok => { if (ok) { clearClassMembership(); renderDashModal(); } });
      });
      return;
    }

    body.innerHTML = `
      <p class="jqc-sub">Ask your teacher for the class code. Pick a 4-6 digit PIN — this keeps your results only yours.</p>
      <div class="jqc-form">
        <div class="jqc-field"><input class="jqc-code-input" id="joinClassCode" placeholder="Class code (e.g. C-XXXXXX)" style="text-transform:uppercase;"></div>
        <div class="jqc-field"><input class="jqc-code-input" id="joinClassName" placeholder="Your name" style="text-transform:none;" value="${state.currentUser ? escHtml(state.currentUser) : ''}"></div>
        <div class="jqc-field"><input class="jqc-code-input" id="joinClassPin" type="tel" placeholder="PIN (4-6 digits)" maxlength="6" style="text-transform:none;"></div>
      </div>
      <button class="jqc-btn jqc-primary" id="joinClassBtn" style="width:100%;margin-top:1rem;">Join Class</button>
    `;
    document.getElementById('joinClassBtn').addEventListener('click', async () => {
      const classCode = document.getElementById('joinClassCode').value.trim().toUpperCase();
      const name = document.getElementById('joinClassName').value.trim();
      const pin = document.getElementById('joinClassPin').value.trim();
      if (!classCode || !name || !/^\d{4,6}$/.test(pin)) { showInfoToast('Fill in class code, name, and a 4-6 digit PIN.'); return; }
      const btn = document.getElementById('joinClassBtn');
      btn.disabled = true; btn.textContent = 'Joining…';
      try {
        await dashApi('join_class', { classCode, name, pin });
        saveClassMembership({ classCode, name, pin });
        showInfoToast('Joined class!');
        renderDashModal();
      } catch (e) {
        showInfoToast(e.message || 'Could not join class');
        btn.disabled = false; btn.textContent = 'Join Class';
      }
    });
  }

  /* ── Teacher tab: create a class, or log in to an existing one ── */
  function renderDashTeacherTab(body) {
    const admin = loadPref(SK_CLASS_ADMIN);
    if (admin) {
      body.innerHTML = `
        <p class="jqc-sub" style="margin-bottom:.5rem;">Logged in as admin</p>
        <p style="font-size:.85rem; margin-bottom:1rem;">${escHtml(admin.schoolName || 'Class')} · code <b>${escHtml(admin.classCode)}</b></p>
        <button class="jqc-btn jqc-primary" id="openTeacherDashBtn2" style="width:100%;margin-bottom:.5rem;">Open Teacher Dashboard</button>
        <button class="jqc-btn jqc-ghost" id="teacherLogoutBtn">Log Out / Switch Class</button>
      `;
      document.getElementById('openTeacherDashBtn2').addEventListener('click', () => openTeacherDashboard(admin.classCode, admin.adminSecret));
      document.getElementById('teacherLogoutBtn').addEventListener('click', () => {
        try { localStorage.removeItem(SK_CLASS_ADMIN); } catch (e) {}
        renderDashModal();
      });
      return;
    }

    body.innerHTML = `
      <p class="jqc-sub">Already created a class? Log back in with your class code and admin PIN.</p>
      <div class="jqc-form">
        <div class="jqc-field"><input class="jqc-code-input" id="loginClassCode" placeholder="Class code" style="text-transform:uppercase;"></div>
        <div class="jqc-field"><input class="jqc-code-input" id="loginAdminPin" type="tel" placeholder="Admin PIN" maxlength="6" style="text-transform:none;"></div>
      </div>
      <button class="jqc-btn jqc-primary" id="teacherLoginBtn" style="width:100%;margin-top:1rem;margin-bottom:1.25rem;">Log In</button>
      <p class="jqc-sub" style="margin-bottom:.5rem;">New here? Create a class and get a code to share with your students.</p>
      <button class="jqc-btn jqc-secondary" id="showCreateClassBtn" style="width:100%;">Create a Class</button>
      <div id="createClassForm" class="hidden" style="margin-top:1rem;">
        <div class="jqc-form">
          <div class="jqc-field"><input class="jqc-code-input" id="newSchoolName" placeholder="School / class name" style="text-transform:none;"></div>
          <div class="jqc-field"><input class="jqc-code-input" id="newAdminPin" type="tel" placeholder="Admin PIN (4-6 digits, for future logins)" maxlength="6" style="text-transform:none;"></div>
        </div>
        <button class="jqc-btn jqc-primary" id="createClassBtn" style="width:100%;margin-top:1rem;">Create Class</button>
      </div>
    `;

    document.getElementById('teacherLoginBtn').addEventListener('click', async () => {
      const classCode = document.getElementById('loginClassCode').value.trim().toUpperCase();
      const adminPin = document.getElementById('loginAdminPin').value.trim();
      if (!classCode || !/^\d{4,6}$/.test(adminPin)) { showInfoToast('Enter your class code and admin PIN.'); return; }
      const btn = document.getElementById('teacherLoginBtn');
      btn.disabled = true; btn.textContent = 'Logging in…';
      try {
        const { adminSecret, schoolName } = await dashApi('admin_login', { classCode, adminPin });
        savePref(SK_CLASS_ADMIN, { classCode, adminSecret, schoolName });
        showInfoToast('Logged in!');
        openTeacherDashboard(classCode, adminSecret);
      } catch (e) {
        showInfoToast(e.message || 'Could not log in — check your class code and PIN.');
        btn.disabled = false; btn.textContent = 'Log In';
      }
    });

    document.getElementById('showCreateClassBtn').addEventListener('click', () => {
      document.getElementById('createClassForm').classList.toggle('hidden');
    });

    document.getElementById('createClassBtn').addEventListener('click', async () => {
      const schoolName = document.getElementById('newSchoolName').value.trim();
      const adminPin = document.getElementById('newAdminPin').value.trim();
      if (!schoolName || !/^\d{4,6}$/.test(adminPin)) { showInfoToast('Enter a class name and a 4-6 digit PIN.'); return; }
      const btn = document.getElementById('createClassBtn');
      btn.disabled = true; btn.textContent = 'Creating…';
      try {
        const { classCode, adminSecret } = await dashApi('create_class', { schoolName, adminPin });
        savePref(SK_CLASS_ADMIN, { classCode, adminSecret, schoolName });
        document.getElementById('createClassForm').innerHTML = `
          <p style="font-weight:700; margin-bottom:.5rem;">Class created! Share this code with your students:</p>
          <p style="font-size:1.4rem; font-weight:700; letter-spacing:.05em; color:var(--amber,#f5a623);">${escHtml(classCode)}</p>
          <button class="jqc-btn jqc-primary" style="width:100%; margin-top:1rem;" id="openTeacherDashBtn">Open Teacher Dashboard</button>`;
        document.getElementById('openTeacherDashBtn').addEventListener('click', () => openTeacherDashboard(classCode, adminSecret));
      } catch (e) {
        showInfoToast(e.message || 'Could not create class');
        btn.disabled = false; btn.textContent = 'Create Class';
      }
    });
  }

  /* ── Parent tab: log in with a parent code ───────────────────── */
  function renderDashParentTab(body) {
    body.innerHTML = `
      <p class="jqc-sub">Enter the parent code your child shared with you.</p>
      <div class="jqc-field"><input class="jqc-code-input" id="parentTabCode" placeholder="Parent code (e.g. P-XXXXXXXX)" style="width:100%;"></div>
      <button class="jqc-btn jqc-primary" id="parentTabGoBtn" style="width:100%;margin-top:1rem;">View Progress</button>
      <p id="parentTabErr" style="color:#e57373; font-size:.8rem; margin-top:.5rem;"></p>
    `;
    document.getElementById('parentTabGoBtn').addEventListener('click', async () => {
      const code = document.getElementById('parentTabCode').value.trim().toUpperCase();
      if (!code) return;
      const btn = document.getElementById('parentTabGoBtn');
      btn.disabled = true; btn.textContent = 'Loading…';
      try {
        const data = await dashApi('get_parent_dashboard', { parentCode: code });
        closeDashModal();
        renderParentDash(data);
        document.getElementById('parentDashModal')?.classList.remove('hidden');
      } catch (e) {
        document.getElementById('parentTabErr').textContent = e.message || 'Could not load — check the code.';
        btn.disabled = false; btn.textContent = 'View Progress';
      }
    });
  }

  /* ── Teacher dashboard (class-wide view) ─────────────────────── */
  function openTeacherDashboard(classCode, adminSecret) {
    closeDashModal();
    document.getElementById('teacherDashBody').innerHTML = `<p class="jqc-sub">Loading class…</p>`;
    document.getElementById('teacherDashModal')?.classList.remove('hidden');
    dashApi('get_class_dashboard', { classCode, adminSecret }).then(renderTeacherDash).catch(e => {
      document.getElementById('teacherDashBody').innerHTML = `<p style="color:#e57373;">${escHtml(e.message || 'Could not load dashboard')}</p>`;
    });
  }
  function renderTeacherDash(data) {
    const body = document.getElementById('teacherDashBody');
    if (!data.students.length) {
      body.innerHTML = `<p class="jqc-sub">No students have joined <b>${escHtml(data.classCode)}</b> yet. Share the class code to get started.</p>`;
      return;
    }
    const sorted = [...data.students].sort((a, b) => (b.avgPct || 0) - (a.avgPct || 0));
    body.innerHTML = `
      <p class="jqc-sub">${escHtml(data.schoolName || 'Class')} · ${data.students.length} student${data.students.length === 1 ? '' : 's'}</p>
      <div class="jqc-pending-list">
        ${sorted.map(s => `
          <div class="jqc-pending-row" style="flex-direction:column; align-items:stretch;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <span class="jqc-score-name">${escHtml(s.name)}</span>
              <span class="jqc-score-val">${s.avgPct == null ? '—' : s.avgPct + '%'}</span>
            </div>
            <p class="jqc-pending-sub">${s.sessionCount} session${s.sessionCount === 1 ? '' : 's'} · ${s.practiceCount || 0} practice · ${s.challengeCount || 0} challenge${(s.challengeCount || 0) === 1 ? '' : 's'}</p>
            ${renderSubjectBreakdown(s.bySubject)}
          </div>`).join('')}
      </div>
    `;
  }
  function renderSubjectBreakdown(bySubject) {
    const entries = Object.entries(bySubject || {});
    if (!entries.length) return '';
    return entries.sort((a, b) => a[1].avgPct - b[1].avgPct).map(([subj, d]) => `
      <div style="display:flex; justify-content:space-between; font-size:.78rem; padding:.15rem 0; color:rgba(255,255,255,.6);">
        <span>${escHtml(subj)} ${d.weakQuestions.length ? '⚠️' : ''}</span>
        <span>${d.avgPct}% avg · ${d.sessions}x</span>
      </div>`).join('');
  }

  /* ── Parent dashboard (single-child, read-only) ──────────────── */
  function renderParentDash(data) {
    const body = document.getElementById('parentDashBody');
    body.innerHTML = `
      <p style="font-weight:700; margin-bottom:.2rem;">${escHtml(data.name)}</p>
      <p class="jqc-sub" style="margin-bottom:.5rem;">${escHtml(data.schoolName || '')}</p>
      <div style="display:flex; gap:1.5rem; margin-bottom:1rem;">
        <div><span style="font-weight:700; font-size:1.3rem;">${data.avgPct == null ? '—' : data.avgPct + '%'}</span><br><span class="jqc-pending-sub">Average</span></div>
        <div><span style="font-weight:700; font-size:1.3rem;">${data.sessions.length}</span><br><span class="jqc-pending-sub">Sessions</span></div>
      </div>
      <p class="jqc-pending-title" style="margin-top:0;">By Subject</p>
      ${renderSubjectBreakdown(data.bySubject) || '<p class="jqc-sub">No sessions yet.</p>'}
      <p class="jqc-pending-title">Recent Sessions</p>
      <div class="jqc-pending-list">
        ${data.sessions.slice(0, 15).map(s => `
          <div class="jqc-pending-row">
            <div class="jqc-pending-info">
              <span class="jqc-score-name" style="font-weight:600;">${escHtml(s.subject)} ${s.mode === 'challenge' ? '🏆' : ''}</span>
              <p class="jqc-pending-sub">${new Date(s.at).toLocaleDateString()}</p>
            </div>
            <span class="jqc-score-val">${s.score}/${s.total}</span>
          </div>`).join('') || '<p class="jqc-sub">No sessions yet.</p>'}
      </div>
    `;
  }


  async function submitJambChallengeScore(code, student, score, total, pct) {
    // Update the local copy too — this is what lets the creator's own
    // device recognize "you've already completed this" without a network
    // round trip, and keeps it correct even if the submit call below fails.
    const challenges = loadPref(QC_STORE, {});
    if (challenges[code]) {
      challenges[code].scores = challenges[code].scores || {};
      challenges[code].scores[student] = { score, total, pct, completedAt: Date.now() };
      savePref(QC_STORE, challenges);
    }
    refreshJambChallengeBadgeState();
    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'submit', code, student, score, total, pct }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) renderJambLeaderboard(code, data.scores);
    } catch (err) {
      // Non-fatal — the student's own result screen already showed their
      // score; the shared leaderboard just won't update this time.
    }
  }

  function renderJambLeaderboard(code, scores) {
    const list = document.getElementById('jambLeaderboardList');
    if (!list) return;
    const entries = Object.entries(scores || {}).sort((a, b) => b[1].pct - a[1].pct);
    list.innerHTML = entries.map(([name, s], i) => `
      <div class="jqc-score-row ${name === state.currentUser ? 'jqc-score-me' : ''}">
        <span class="jqc-rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '#' + (i+1)}</span>
        <span class="jqc-score-name">${escHtml(name)}${name === state.currentUser ? ' (you)' : ''}</span>
        <span class="jqc-score-val">${s.score}/${s.total} · ${s.pct}%</span>
      </div>
    `).join('') || '<p class="jqc-sub">No scores yet — share the code with a friend!</p>';
    document.getElementById('jambCodeDisplay') && (document.getElementById('jambCodeDisplay').textContent = code);
    showJQCPanel('jambQcLeaderboard');
    document.getElementById('jambQuizModal')?.classList.remove('hidden');
  }

  function enterReviewMode() {
    state.reviewMode = true;
    state.currentIndex = 0;
    state.showReviewExplanation = state.mode === 'practice';
    showScreen('quiz');
    renderQuestion();
  }

  /* ════════ CUSTOM CONFIRM MODAL (replaces native browser confirm()) ════════ */
  function showConfirmModal(message, confirmLabel = 'Yes', cancelLabel = 'Cancel') {
    return new Promise((resolve) => {
      let overlay = document.getElementById('confirmModalOverlay');
      if (overlay) overlay.remove();

      overlay = document.createElement('div');
      overlay.id = 'confirmModalOverlay';
      overlay.style.cssText = `
        position:fixed; inset:0; background:rgba(5,10,20,.72);
        display:flex; align-items:center; justify-content:center;
        z-index:10000; padding:1rem; font-family:var(--sans,sans-serif);
      `;
      overlay.innerHTML = `
        <div style="background:#0a1628; border:1.5px solid var(--gold,#d4af37); border-radius:14px;
                    padding:1.75rem 1.5rem; max-width:340px; width:100%; box-shadow:0 10px 40px rgba(0,0,0,.5);">
          <p style="margin:0 0 1.1rem; color:#fff; font-size:.95rem; line-height:1.5;">${escHtml(message)}</p>
          <div style="display:flex; gap:.6rem;">
            <button id="confirmModalCancel" style="flex:1; padding:.65rem; border-radius:9px; border:1.5px solid #26344a;
                    background:transparent; color:#fff; font-weight:600; font-size:.85rem;">${escHtml(cancelLabel)}</button>
            <button id="confirmModalOk" style="flex:1; padding:.65rem; border-radius:9px; border:none;
                    background:var(--gold,#d4af37); color:#0a1628; font-weight:700; font-size:.85rem;">${escHtml(confirmLabel)}</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      const cleanup = (val) => { overlay.remove(); resolve(val); };
      document.getElementById('confirmModalCancel').addEventListener('click', () => cleanup(false));
      document.getElementById('confirmModalOk').addEventListener('click', () => cleanup(true));
      overlay.addEventListener('click', (e) => { if (e.target === overlay) cleanup(false); });
    });
  }

  async function confirmExit() {
    const leave = await showConfirmModal('Exit this session? Your progress will be lost.', 'Exit', 'Stay');
    if (leave) {
      if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
      showScreen('home');
    }
  }

  async function switchUser() {
    if (state.timerId) {
      const ok = await showConfirmModal('Switch student? Current session will close.', 'Switch', 'Cancel');
      if (!ok) return;
      clearInterval(state.timerId); state.timerId = null;
      showScreen('home');
    }
    state.currentUser = '';
    saveCurrentUser('');
    renderCurrentUser();
    renderStats();
    renderHistory();
    el.studentName.value = '';
    el.studentName.focus();
  }

  // ─── SCREEN + SYNC ────────────────────────────────
  function showScreen(name) {
    el.homeScreen.classList.toggle('active', name === 'home');
    el.quizScreen.classList.toggle('active', name === 'quiz');
    el.resultScreen.classList.toggle('active', name === 'result');
    if (name !== 'quiz') hideAIButton();
    if (name === 'home') refreshChallengeBtn();

    // Hash-based back-button support — mirrors My Exams App's approach so
    // the phone/browser back button doesn't just yank the student out of
    // an in-progress session with no warning.
    if (name === 'quiz' || name === 'result') {
      history.pushState(null, '', window.location.pathname + '#' + name);
    } else {
      history.pushState(null, '', window.location.pathname);
    }
  }

  // Double-back-to-exit — first back press shows a toast, second confirms exit.
  let _backLastPress = 0;
  let _backToastTimer = null;

  function showBackWarningToast() {
    let toast = document.getElementById('jambBackWarningToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'jambBackWarningToast';
      toast.style.cssText = `
        position:fixed; bottom:5rem; left:50%; transform:translateX(-50%);
        background:#0a1628; color:white; border:1.5px solid var(--gold,#d4af37);
        border-radius:10px; padding:.75rem 1.25rem;
        font-family:var(--sans,sans-serif); font-size:.82rem; font-weight:500;
        text-align:center; z-index:9999; max-width:320px; width:calc(100% - 2rem);
        box-shadow:0 4px 20px rgba(0,0,0,.4); line-height:1.5;
      `;
      document.body.appendChild(toast);
    }
    toast.innerHTML = '⚠️ <strong>Press back again to exit session.</strong><br>Use the on-screen buttons to navigate questions.';
    toast.style.display = 'block';
    clearTimeout(_backToastTimer);
    _backToastTimer = setTimeout(() => { toast.style.display = 'none'; }, 3000);
  }

  window.addEventListener('hashchange', () => {
    // Challenge modal open — back button navigates its panels instead of
    // whatever the quiz-exit logic below would otherwise do.
    const modalEl = document.getElementById('jambQuizModal');
    if (modalEl && !modalEl.classList.contains('hidden')) {
      if (_jambModalPanelHistory.length > 0) {
        window.location.hash = 'jamb-challenge'; // stay armed for another back press
        const prev = _jambModalPanelHistory.pop();
        showJQCPanel(prev, true);
      } else {
        clearInterval(_waitingRoomTimer);
        clearInterval(_waitingRoomCountdownTicker);
        modalEl.classList.add('hidden');
        history.replaceState(null, '', window.location.pathname);
      }
      return;
    }

    const quizActive   = el.quizScreen?.classList.contains('active');
    const resultActive = el.resultScreen?.classList.contains('active');
    if (!quizActive && !resultActive) return;

    // Immediately restore the hash so the back button stays "armed"
    if (quizActive)   window.location.hash = 'quiz';
    if (resultActive) window.location.hash = 'result';

    if (resultActive) {
      showScreen('home');
      return;
    }

    const now = Date.now();
    if (now - _backLastPress < 3000) {
      _backLastPress = 0;
      const toast = document.getElementById('jambBackWarningToast');
      if (toast) toast.style.display = 'none';
      confirmExit();
    } else {
      _backLastPress = now;
      showBackWarningToast();
    }
  });

  function syncDurationUi() {
    const mode = el.modeSelect.value;
    el.durationSelect.disabled = mode !== 'exam';
    // Show working mode — show subject restriction note
    const swNote = document.getElementById('swSubjectsNote');
    if (swNote) {
      if (mode === 'showworking') {
        swNote.textContent = '⚠️ Show Working is available for: Mathematics, Physics, Chemistry, Economics only.';
        swNote.style.display = 'block';
      } else {
        swNote.style.display = 'none';
      }
    }
  }

  function syncStartButton() {
    const mode    = document.getElementById('modeSelect')?.value || '';
    const session = document.getElementById('sessionTypeSelect')?.value || '';
    const subject = el.subjectSelect?.value || '';
    const needsSubject = session === 'single' && !subject;

    // Never disable — always clickable so popup can guide the user
    el.startBtn.disabled = false;

    if (!session && !mode) {
      el.startBtn.textContent = 'Choose Session Type & Mode →';
    } else if (!session) {
      el.startBtn.textContent = 'Choose Session Type →';
    } else if (!mode) {
      el.startBtn.textContent = 'Choose a Mode →';
    } else if (needsSubject) {
      el.startBtn.textContent = 'Choose a Subject →';
    } else {
      el.startBtn.textContent = mode === 'exam' ? 'Start Exam' : mode === 'showworking' ? 'Start Show Working ✍️' : 'Start Practice';
    }
  }

  function syncSessionTypeUi() {
    const isCombo = el.sessionTypeSelect.value === 'combo';
    el.singleSubjectWrap.classList.toggle('hidden', isCombo);
    el.comboConfig.classList.toggle('hidden', !isCombo);
    syncDurationUi();
  }

  // ─── RENDER UI ────────────────────────────────────
  function renderCurrentUser() {
    if (state.currentUser) {
      el.currentStudentBox.textContent = `✓ Logged in as: ${state.currentUser}`;
      el.currentStudentBox.className = 'student-pill logged-in';
      el.studentName.value = state.currentUser;
      el.historyTitle.textContent = state.currentUser;
    } else {
      el.currentStudentBox.textContent = 'No student logged in';
      el.currentStudentBox.className = 'student-pill';
      el.historyTitle.textContent = 'No student selected';
    }
    syncDurationUi();
    refreshUpgradeBar();
    refreshChallengeBtn();
  }

  function renderStats() {
    const history = getCurrentHistory();
    const sessions = history.length;
    const avg = sessions ? Math.round(history.reduce((s, h) => s + h.percent, 0) / sessions) : null;
    const best = sessions ? Math.max(...history.map(h => h.percent)) : null;
    el.statSessions.textContent = String(sessions);
    el.statAverage.textContent = avg !== null ? `${avg}%` : '—';
    el.statBest.textContent = best !== null ? `${best}%` : '—';
  }

  function renderHistory() {
    const history = getCurrentHistory();
    if (!state.currentUser) {
      el.historyList.className = 'history-list empty-state';
      el.historyList.textContent = 'Login with a student name to view history.';
      return;
    }
    if (!history.length) {
      el.historyList.className = 'history-list empty-state';
      el.historyList.textContent = 'No practice history yet. Start your first session!';
      return;
    }
    el.historyList.className = 'history-list';
    el.historyList.innerHTML = history.map(item => `
      <div class="history-item">
        <div>
          <strong>${escHtml(item.subject)}</strong><br>
          <span class="muted">${escHtml(item.date)}</span>
        </div>
        <div><strong>${item.percent}%</strong><br><span class="muted">Score</span></div>
        <div><strong>${item.correct}/${item.total}</strong><br><span class="muted">Correct</span></div>
        <div><strong>${item.mode === 'exam' ? 'Exam' : 'Practice'}</strong><br><span class="muted">Mode</span></div>
        <div><strong>${item.mode === 'exam' ? (item.durationMinutes || '—') + ' min' : '—'}</strong><br><span class="muted">Time</span></div>
      </div>
    `).join('');
  }

  function getCurrentHistory() {
    if (!state.currentUser || !state.users[state.currentUser]) return [];
    return state.users[state.currentUser].history || [];
  }

  async function resetProgress() {
    if (!state.currentUser) { alert('Login with a student name first.'); return; }
    const ok = await showConfirmModal(`Erase all saved results for "${state.currentUser}" on this device?`, 'Erase', 'Cancel');
    if (!ok) return;
    if (!state.users[state.currentUser]) state.users[state.currentUser] = { history: [] };
    state.users[state.currentUser].history = [];
    saveUsers(state.users);
    renderStats();
    renderHistory();
  }

  // ─── STORAGE ─────────────────────────────────────
  function loadUsers() {
    try { return JSON.parse(localStorage.getItem(storageKeys.users) || '{}'); }
    catch { return {}; }
  }

  function saveUsers(v) { localStorage.setItem(storageKeys.users, JSON.stringify(v)); }
  function loadCurrentUser() { return localStorage.getItem(storageKeys.currentUser) || ''; }
  function saveCurrentUser(v) { localStorage.setItem(storageKeys.currentUser, v); }

  // ─── UTILS ───────────────────────────────────────
  function statCard(label, value) {
    return `<div class="stat-box"><span>${escHtml(label)}</span><strong>${escHtml(String(value))}</strong></div>`;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function fmt(val) {
    return String(val).split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  function normalizeName(val) { return String(val).replace(/\s+/g, ' ').trim(); }

  function escHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  /* ════════════════════════════════════════════════════
     PAYWALL + ACCESS CONTROL
  ════════════════════════════════════════════════════ */

  function grantAccess(days, tier) {
    const exp = new Date();
    exp.setDate(exp.getDate() + days);
    savePref(SK_ACCESS, { expires: exp.toISOString() });
    savePref(SK_TIER, tier || 'jamb');
    document.getElementById('jambPaywall')?.classList.add('hidden');
    refreshChallengeBtn();
    alert(`✅ Access granted for ${days} days! Welcome to My JAMB App.`);
  }


  function showPaywall(reason) {
    const badge = document.getElementById('jambPaywallBadge');
    if (badge) badge.textContent = reason === 'trial' ? 'FREE TRIAL COMPLETE' : 'PREMIUM FEATURE';
    document.getElementById('jambPaywall')?.classList.remove('hidden');
  }

  function initPaywall() {
    document.getElementById('jambPaywallClose')?.addEventListener('click', () => {
      document.getElementById('jambPaywall')?.classList.add('hidden');
    });
    document.getElementById('jambPayBtn')?.addEventListener('click', handleJambPayment);
    document.getElementById('jambRedeemBtn')?.addEventListener('click', redeemJambCode);
    // Check for shared access from My Exams App
    const examsAccess = loadPref('mea-access-v1');
    if (examsAccess?.expires && new Date(examsAccess.expires) > new Date()) {
      // Student Pass on Exams App grants JAMB access
      grantJambFromExamsApp();
    }
    // Check URL for shared session
    const params = new URLSearchParams(window.location.search);
    if (params.get('session')) checkForSharedSession();
  }

  function grantJambFromExamsApp() {
    const examsAccess = loadPref('mea-access-v1');
    if (!examsAccess?.expires) return;
    savePref(SK_ACCESS, { expires: examsAccess.expires, fromExamsApp: true });
    refreshChallengeBtn();
  }

  /* ════════ EMAIL MODAL (replaces native prompt() for payment email) ════════ */
  function getEmailViaModal() {
    return new Promise((resolve) => {
      let overlay = document.getElementById('emailModalOverlay');
      if (overlay) overlay.remove();

      overlay = document.createElement('div');
      overlay.id = 'emailModalOverlay';
      overlay.style.cssText = `
        position:fixed; inset:0; background:rgba(5,10,20,.72);
        display:flex; align-items:center; justify-content:center;
        z-index:10000; padding:1rem; font-family:var(--sans,sans-serif);
      `;
      overlay.innerHTML = `
        <div style="background:#0a1628; border:1.5px solid var(--gold,#d4af37); border-radius:14px;
                    padding:1.75rem 1.5rem; max-width:340px; width:100%; box-shadow:0 10px 40px rgba(0,0,0,.5);">
          <h3 style="margin:0 0 .5rem; color:#fff; font-size:1.05rem; font-weight:700;">Enter your email</h3>
          <p style="margin:0 0 1rem; color:var(--text-dim,#9aa5b1); font-size:.85rem; line-height:1.4;">
            We'll send your payment receipt here.
          </p>
          <input id="emailModalInput" type="email" inputmode="email" autocomplete="email" placeholder="you@example.com"
                 style="width:100%; box-sizing:border-box; padding:.7rem .85rem; border-radius:9px;
                        border:1.5px solid #26344a; background:#0d1b2a; color:#fff; font-size:.95rem; outline:none;" />
          <p id="emailModalError" style="display:none; color:var(--red,#e55); font-size:.78rem; margin:.4rem 0 0;">
            Please enter a valid email address.
          </p>
          <div style="display:flex; gap:.6rem; margin-top:1.1rem;">
            <button id="emailModalCancel" style="flex:1; padding:.65rem; border-radius:9px; border:1.5px solid #26344a;
                    background:transparent; color:#fff; font-weight:600; font-size:.85rem;">Cancel</button>
            <button id="emailModalContinue" style="flex:1; padding:.65rem; border-radius:9px; border:none;
                    background:var(--gold,#d4af37); color:#0a1628; font-weight:700; font-size:.85rem;">Continue</button>
          </div>
        </div>
      `;
      document.body.appendChild(overlay);

      const input = document.getElementById('emailModalInput');
      const errEl = document.getElementById('emailModalError');
      const cleanup = (val) => { overlay.remove(); resolve(val); };

      input.focus();
      document.getElementById('emailModalCancel').addEventListener('click', () => cleanup(null));
      overlay.addEventListener('click', (e) => { if (e.target === overlay) cleanup(null); });
      const submit = () => {
        const val = (input.value || '').trim();
        if (!val.includes('@') || !val.includes('.')) { errEl.style.display = 'block'; return; }
        cleanup(val);
      };
      document.getElementById('emailModalContinue').addEventListener('click', submit);
      input.addEventListener('keydown', (e) => { if (e.key === 'Enter') submit(); });
    });
  }

  async function handleJambPayment() {
    const email = await getEmailViaModal();
    if (!email) return; // cancelled
    const sold = loadPref(SK_EASOLD) || 0;
    const isEA = sold < JAMB_EA_CAP;
    const amount = 150000; // ₦1,500 in kobo

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email, amount,
      currency: 'NGN',
      ref: 'JAMB-' + Date.now(),
      metadata: { custom_fields: [
        { display_name: 'Plan', variable_name: 'plan', value: 'My JAMB App' },
        { display_name: 'App',  variable_name: 'app',  value: 'My JAMB App' },
      ]},
      onClose() {},
      callback(response) {
        (async () => {
          const res = await fetch(API_BASE + '/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reference: response.reference })
          }).catch(() => null);
          const data = res ? await res.json().catch(() => ({})) : {};
          if (!res || !res.ok || !data.verified) {
            alert('We could not confirm this payment yet. If you were charged, please contact support with reference: ' + response.reference);
            return;
          }
          if (isEA) savePref(SK_EASOLD, sold + 1);
          grantAccess(data.days || 90, data.tier || 'jamb');
        })();
      }
    });
    handler.openIframe();
  }

  function redeemJambCode() {
    const code = (document.getElementById('jambCodeInput')?.value || '').trim().toUpperCase();
    if (!code) return;
    const codes = {
      'MEA-DEMO-2025': { days:90, tier:'jamb' },
      'JAMB-PROMO':    { days:90, tier:'jamb' },
      'MEA-PLUS-DEMO': { days:90, tier:'plus' },
      'TEST7':         { days:7,  tier:'jamb' },
    };
    if (codes[code]) {
      grantAccess(codes[code].days, codes[code].tier);
    } else {
      alert('Invalid or expired code.');
    }
  }

  /* ════════════════════════════════════════════════════
     AI EXPLANATIONS
  ════════════════════════════════════════════════════ */

  function updateAICreditsBadge() {
    const badge = document.getElementById('aiCreditsBadge');
    if (!badge) return;
    const c = getAICredits();
    badge.textContent = `${c} credit${c===1?'':'s'} left`;
    badge.style.color = c < 10 ? '#e74c3c' : '#27ae60';
  }

  /* ════════ INFO TOAST (replaces native alert() for simple notices) ════════ */
  function showInfoToast(message) {
    let toast = document.getElementById('jambInfoToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'jambInfoToast';
      toast.style.cssText = `
        position:fixed; bottom:5rem; left:50%; transform:translateX(-50%);
        background:#0a1628; color:white; border:1.5px solid var(--gold,#d4af37);
        border-radius:10px; padding:.75rem 1.25rem;
        font-family:var(--sans,sans-serif); font-size:.82rem; font-weight:500;
        text-align:center; z-index:9999; max-width:320px; width:calc(100% - 2rem);
        box-shadow:0 4px 20px rgba(0,0,0,.4); line-height:1.5;
      `;
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.style.display = 'block';
    clearTimeout(toast._hideTimer);
    toast._hideTimer = setTimeout(() => { toast.style.display = 'none'; }, 3500);
  }

  function initAIExplain() {
    document.getElementById('aiPanelClose')?.addEventListener('click', () => {
      document.getElementById('aiPanel')?.classList.add('hidden');
    });
    document.getElementById('aiExplainBtn')?.addEventListener('click', triggerAIExplain);
    document.getElementById('aiExplainTeaserBtn')?.addEventListener('click', () => {
      showInfoToast('Explanations are only available in Practice Mode or when reviewing your results.');
    });
  }

  function showAIButton() {
    if (!checkAccess()) return;
    document.getElementById('aiExplainBtn')?.classList.remove('hidden');
    document.getElementById('aiExplainTeaserBtn')?.classList.add('hidden');
  }

  // Shown only during a live Exam Mode session — small and deliberately
  // inert, just tells the student when the real explain feature becomes
  // available rather than pretending the feature doesn't exist at all.
  function showAITeaserButton() {
    if (!checkAccess()) return;
    document.getElementById('aiExplainBtn')?.classList.add('hidden');
    document.getElementById('aiExplainTeaserBtn')?.classList.remove('hidden');
  }

  function hideAIButton() {
    document.getElementById('aiExplainBtn')?.classList.add('hidden');
    document.getElementById('aiExplainTeaserBtn')?.classList.add('hidden');
  }

  async function triggerAIExplain() {
    if (!checkAccess()) { showPaywall('feature'); return; }
    if (!(state.mode === 'practice' || state.reviewMode)) {
      showInfoToast('Explanations are only available in Practice Mode or when reviewing your results.');
      return;
    }
    const credits = getAICredits();
    if (credits <= 0) {
      alert(`You've used all ${AI_QUARTERLY} AI explanation credits for this quarter.\n\nTop up: ₦500 = 50 more explanations.`);
      return;
    }
    const q = state.currentQuestions[state.currentIndex];
    if (!q) return;

    const panel = document.getElementById('aiPanel');
    const loading = document.getElementById('aiLoading');
    const response = document.getElementById('aiResponse');
    panel?.classList.remove('hidden');
    loading?.classList.remove('hidden');
    response?.classList.add('hidden');
    updateAICreditsBadge();

    const correctOpt = q.options[q.answer];
    const studentAns = state.answers[state.currentIndex];
    const studentOpt = studentAns !== null ? q.options[studentAns] : 'Did not answer';
    const wasCorrect = studentAns === q.answer;

    const prompt = `You are a JAMB/UTME exam tutor helping a Nigerian student prepare.

Question: ${q.question}
Options: ${q.options.map((o,i)=>String.fromCharCode(65+i)+'. '+o).join(' | ')}
Correct answer: ${correctOpt}
Student answered: ${studentOpt} (${wasCorrect ? 'CORRECT ✓' : 'WRONG ✗'})

Give a clear, concise explanation in 3-4 sentences:
1. Why the correct answer is right
2. Why common wrong choices are incorrect (if student was wrong, specifically address their choice)
3. A memory tip or key principle to remember for JAMB

Use plain English. Be encouraging. Keep it brief — this student is studying under pressure.`;

    try {
      if (!useAICredit()) {
        loading?.classList.add('hidden');
        alert('No AI credits remaining this quarter.');
        panel?.classList.add('hidden');
        return;
      }
      const res = await fetch(API_BASE + '/api/teach', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });
      const data = await res.json();
      const text = data.text || data.content?.map(c=>c.text||'').join('') || 'Could not get explanation. Please try again.';
      loading?.classList.add('hidden');
      if (response) {
        response.innerHTML = `<div class="ai-q-recap"><strong>${escHtml(q.question.substring(0,80))}${q.question.length>80?'…':''}</strong></div><div class="ai-text">${escHtml(text).replace(/\n/g,'<br/>')}</div>`;
        response.classList.remove('hidden');
      }
      updateAICreditsBadge();
    } catch(err) {
      loading?.classList.add('hidden');
      if (response) {
        response.innerHTML = '<p style="color:#e74c3c">Could not reach AI. Check your connection and try again.</p>';
        response.classList.remove('hidden');
      }
    }
  }

  /* ════════════════════════════════════════════════════
     COMMUNITY QUIZ
  ════════════════════════════════════════════════════ */
  const QC_STORE = 'jamb-challenges-v1';
  let _currentChallengeCode = null;
  let _pendingChallenge = null;   // challenge object waiting to start (sync-start mode)
  let _waitingRoomTimer = null;   // poll interval handle
  let _waitingRoomCountdownTicker = null; // 1s display-only countdown ticker
  let _isWaitingRoomCreator = false;
  const WAITING_ROOM_TIMEOUT_MS = 2 * 60 * 1000; // auto-start 2 min after first "ready"

  function initCommunityQuiz() {
    const modal = document.getElementById('jambQuizModal');
    document.getElementById('jambQcClose')?.addEventListener('click', () => {
      modal?.classList.add('hidden');
      _jambModalPanelHistory = [];
      if (window.location.hash === '#jamb-challenge') history.replaceState(null, '', window.location.pathname);
    });
    modal?.addEventListener('click', e => {
      if (e.target !== modal) return;
      modal?.classList.add('hidden');
      _jambModalPanelHistory = [];
      if (window.location.hash === '#jamb-challenge') history.replaceState(null, '', window.location.pathname);
    });
    document.getElementById('jambQcCreate')?.addEventListener('click', () => showJQCPanel('jambQcCreate2'));
    document.getElementById('jambQcBack')?.addEventListener('click', () => showJQCPanel('jambQcHome'));
    document.getElementById('jambShare2Back')?.addEventListener('click', () => { showJQCPanel('jambQcHome'); renderJambPendingChallenges(); });
    document.getElementById('jambWaitingBack')?.addEventListener('click', () => {
      clearInterval(_waitingRoomTimer);
      clearInterval(_waitingRoomCountdownTicker);
      showJQCPanel('jambQcHome');
      renderJambPendingChallenges();
      refreshJambChallengeBadgeState();
    });
    document.getElementById('jambQcJoin')?.addEventListener('click', () => {
      document.getElementById('jambJoinRow')?.classList.toggle('hidden');
    });
    document.getElementById('jambJoinConfirm')?.addEventListener('click', joinJambChallenge);
    document.getElementById('jambQcGenerate')?.addEventListener('click', generateJambChallenge);
    document.getElementById('jambQcShareLink')?.addEventListener('click', shareJambChallengeLink);
    document.getElementById('jambQcStartOwn')?.addEventListener('click', () => startJambChallengeAttempt());
    document.getElementById('jambQcNew')?.addEventListener('click', () => showJQCPanel('jambQcCreate2'));
    document.getElementById('jambQcDone')?.addEventListener('click', () => {
      clearInterval(_waitingRoomTimer);
      clearInterval(_waitingRoomCountdownTicker);
      modal?.classList.add('hidden');
      _jambModalPanelHistory = [];
      if (window.location.hash === '#jamb-challenge') history.replaceState(null, '', window.location.pathname);
    });
    document.getElementById('jambReadyBtn')?.addEventListener('click', markJambReady);
    document.getElementById('jambForceStartBtn')?.addEventListener('click', forceStartJambChallenge);
    document.getElementById('jambEndChallengeBtn')?.addEventListener('click', endJambChallengeFromWaitingRoom);

    // Toggle the scheduled-time picker when that start mode is chosen
    document.querySelectorAll('input[name="jambSyncMode"]').forEach(radio => {
      radio.addEventListener('change', () => {
        document.getElementById('jambScheduledTimeWrap')?.classList.toggle('hidden', radio.value !== 'scheduled' || !radio.checked);
      });
    });
    document.getElementById('jambConfirmScheduledTime')?.addEventListener('click', () => {
      const input = document.getElementById('jambScheduledTime');
      const confirmEl = document.getElementById('jambScheduledTimeConfirmed');
      input?.blur(); // closes the native date/time picker on desktop browsers
      if (input?.value && confirmEl) {
        const d = new Date(input.value);
        confirmEl.textContent = Number.isNaN(d.getTime())
          ? ''
          : `✅ Set for ${d.toLocaleDateString(undefined, { month:'short', day:'numeric' })} at ${d.toLocaleTimeString(undefined, { hour:'numeric', minute:'2-digit' })}`;
        confirmEl.classList.toggle('hidden', !confirmEl.textContent);
      }
    });

    // Populate subject checkboxes (multi-select)
    const subjectsWrap = document.getElementById('jambQcSubjects');
    if (subjectsWrap) Object.keys(QUESTION_BANK).forEach(s => {
      const label = document.createElement('label');
      label.className = 'jqc-subject-check';
      label.innerHTML = `<input type="checkbox" value="${s}"/> <span>${fmt(s)}</span>`;
      const input = label.querySelector('input');
      input.addEventListener('change', () => label.classList.toggle('checked', input.checked));
      subjectsWrap.appendChild(label);
    });

    // Check URL for challenge code
    const params = new URLSearchParams(window.location.search);
    const code = params.get('challenge');
    if (code) {
      history.replaceState(null,'',window.location.pathname);
      openJambChallenge();
      document.getElementById('jambJoinCode').value = code;
      joinJambChallenge();
    }
  }

  const _jambPanelOrder = ['jambQcHome','jambQcCreate2','jambQcShare2','jambQcLeaderboard','jambQcWaitingRoom'];
  let _jambCurrentPanel = 'jambQcHome';
  let _jambModalPanelHistory = [];

  function showJQCPanel(id, fromBack = false) {
    if (!fromBack && id !== _jambCurrentPanel) {
      if (id === 'jambQcHome') {
        _jambModalPanelHistory = []; // Home is the root — nothing further back
      } else {
        _jambModalPanelHistory.push(_jambCurrentPanel);
      }
    }
    _jambCurrentPanel = id;
    _jambPanelOrder.forEach(p => {
      document.getElementById(p)?.classList.toggle('hidden', p !== id);
    });
  }

  function refreshJambChallengeBadgeState() {
    const all = loadPref(QC_STORE, {});
    const needsAttention = Object.values(all).some(c => {
      if (c.ended) return false;
      if (!c.syncMode || c.syncMode === 'anytime') return false; // no "started" moment to alert about
      const completed = c.scores && c.scores[state.currentUser];
      return c.startedAt && !completed;
    });
    setJambChallengeBadge(needsAttention);
  }

  function openJambChallenge() {
    if (!checkAccess()) { showPaywall('feature'); return; }
    if (!state.currentUser) { alert('Please log in first.'); return; }
    _jambModalPanelHistory = [];
    showJQCPanel('jambQcHome');
    document.getElementById('jambQuizModal')?.classList.remove('hidden');
    // Push a hash entry so the hardware/gesture back button can be caught
    // and used to navigate panels within the modal, instead of just
    // falling through to whatever the browser's default back does.
    history.pushState(null, '', window.location.pathname + '#jamb-challenge');
    renderJambPendingChallenges();
    checkForStartedJambChallenges().then(() => { renderJambPendingChallenges(); refreshJambChallengeBadgeState(); });
  }

  // Instead of yanking the student straight into the quiz the moment a
  // scheduled/ready challenge starts (jarring if they're doing something
  // else), show a small dismissible notice with the choice to join now or
  // later. "Later" leaves a badge on the Challenge button as a reminder.
  function showChallengeStartedNotice(code, challenge, startedAt) {
    let card = document.getElementById('jambStartedNotice');
    if (card) card.remove();
    playChallengeBeep();

    card = document.createElement('div');
    card.id = 'jambStartedNotice';
    card.style.cssText = `
      position:fixed; bottom:1.25rem; left:50%; transform:translateX(-50%);
      background:#0a1628; border:1.5px solid var(--gold,#d4af37); border-radius:14px;
      padding:1.1rem 1.25rem; max-width:340px; width:calc(100% - 2rem);
      box-shadow:0 10px 40px rgba(0,0,0,.5); z-index:10001; font-family:var(--sans,sans-serif);
      text-align:center; position:fixed;
    `;
    card.innerHTML = `
      <button id="jambStartedClose" style="position:absolute; top:.6rem; right:.7rem; background:none; border:none;
              color:rgba(255,255,255,.5); font-size:1.1rem; cursor:pointer; line-height:1;">✕</button>
      <p style="margin:0 0 .7rem; color:#fff; font-size:.9rem; font-weight:600;">🎉 Your challenge has started!</p>
      <button id="jambStartedNow" style="width:100%; padding:.65rem; border-radius:9px; border:none; margin-bottom:.6rem;
              background:var(--gold,#d4af37); color:#0a1628; font-weight:700; font-size:.85rem;">Join Now</button>
      <p style="margin:0 0 .4rem; color:rgba(255,255,255,.5); font-size:.72rem;">Or remind me again in:</p>
      <div style="display:flex; gap:.4rem; margin-bottom:.6rem;">
        <button class="jamb-snooze-opt" data-min="5" style="flex:1; padding:.5rem; border-radius:8px; border:1px solid #26344a; background:transparent; color:#fff; font-size:.75rem;">5 min</button>
        <button class="jamb-snooze-opt" data-min="15" style="flex:1; padding:.5rem; border-radius:8px; border:1px solid #26344a; background:transparent; color:#fff; font-size:.75rem;">15 min</button>
        <button class="jamb-snooze-opt" data-min="30" style="flex:1; padding:.5rem; border-radius:8px; border:1px solid #26344a; background:transparent; color:#fff; font-size:.75rem;">30 min</button>
      </div>
      <button id="jambStartedDecline" style="width:100%; padding:.4rem; border-radius:8px; border:none;
              background:transparent; color:rgba(255,255,255,.4); font-size:.72rem; text-decoration:underline; cursor:pointer;">Decline — I won't be joining this one</button>
    `;
    document.body.appendChild(card);

    document.getElementById('jambStartedClose').addEventListener('click', () => {
      card.remove();
      const challenges = loadPref(QC_STORE, {});
      if (challenges[code]) { challenges[code].startedAt = startedAt; savePref(QC_STORE, challenges); }
      setJambChallengeBadge(true); // still findable via the badge + pending list, just not re-popped automatically
    });
    document.getElementById('jambStartedDecline').addEventListener('click', async () => {
      card.remove();
      try {
        await fetch(API_BASE + '/api/challenge', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'remove_participant', code, student: state.currentUser }),
        });
      } catch (err) { /* still remove locally even if this fails */ }
      const challenges = loadPref(QC_STORE, {});
      delete challenges[code];
      savePref(QC_STORE, challenges);
      refreshJambChallengeBadgeState();
      renderJambPendingChallenges();
    });
    document.getElementById('jambStartedNow').addEventListener('click', () => {
      card.remove();
      document.getElementById('jambQuizModal')?.classList.add('hidden');
      startJambChallengeAttempt(challenge, startedAt);
    });
    card.querySelectorAll('.jamb-snooze-opt').forEach(btn => {
      btn.addEventListener('click', () => {
        const minutes = parseInt(btn.dataset.min, 10);
        card.remove();
        const challenges = loadPref(QC_STORE, {});
        if (challenges[code]) { challenges[code].startedAt = startedAt; savePref(QC_STORE, challenges); }
        setJambChallengeBadge(true);
        setTimeout(() => {
          const latest = loadPref(QC_STORE, {})[code];
          if (latest && !latest.ended && !(latest.scores && latest.scores[state.currentUser])) {
            showChallengeStartedNotice(code, challenge, startedAt);
          }
        }, minutes * 60000);
      });
    });
  }

  function playChallengeBeep() {
    try {
      const ctx = new (window.AudioContext || window.webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain); gain.connect(ctx.destination);
      osc.type = 'sine'; osc.frequency.value = 880;
      gain.gain.setValueAtTime(0.15, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
      osc.start(); osc.stop(ctx.currentTime + 0.35);
    } catch (err) { /* audio not available — badge/card still show visually */ }
  }

  function setJambChallengeBadge(show) {
    document.getElementById('jambChallengeBadge')?.classList.toggle('hidden', !show);
  }

  // Checked on app load and whenever the Challenge modal opens — quietly
  // (no interrupting popup) flags the button if something the student
  // owns or joined has started without them actively watching for it.
  // Shows a one-time-per-day reminder toast for a scheduled challenge
  // that's coming up within the next 2 days — a gentle heads-up, not a
  // repeat every single time the app opens.
  const JAMB_REMINDED_STORE = 'jamb-challenge-reminded-v1';
  function checkScheduledChallengeReminders() {
    if (!state.currentUser) return;
    const all = loadPref(QC_STORE, {});
    const reminded = loadPref(JAMB_REMINDED_STORE, {});
    const todayKey = new Date().toDateString();
    const mine = Object.values(all).filter(c =>
      c.creator === state.currentUser && c.syncMode === 'scheduled'
      && c.scheduledStartAt && !c.startedAt && !c.ended
    );
    for (const c of mine) {
      if (reminded[c.code] === todayKey) continue; // already reminded today
      const daysUntil = Math.ceil((c.scheduledStartAt - Date.now()) / 86400000);
      if (daysUntil < 0 || daysUntil > 2) continue;
      const when = daysUntil === 0 ? 'today' : daysUntil === 1 ? 'in 1 day' : 'in 2 days';
      showInfoToast(`📅 You have a scheduled challenge (${c.code}) starting ${when}.`);
      reminded[c.code] = todayKey;
      savePref(JAMB_REMINDED_STORE, reminded);
      break; // one toast at a time — don't stack multiple on top of each other
    }
  }

  async function checkForStartedJambChallenges() {
    if (!state.currentUser) return;
    // Don't interrupt with a popup if the student is mid-quiz right now —
    // the badge will still be set so it's not lost, just not popped over
    // whatever they're actively doing.
    const inQuiz = document.getElementById('quizScreen')?.classList.contains('active');

    const all = loadPref(QC_STORE, {});
    const candidates = Object.values(all).filter(c =>
      c.syncMode && c.syncMode !== 'anytime' && !c.ended && !c.startedAt
      && (c.creator === state.currentUser || c.joinedAsParticipant)
    );
    if (!candidates.length) return;

    const justStarted = [];
    for (const c of candidates) {
      try {
        const res = await fetch(API_BASE + '/api/challenge', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'status', code: c.code }),
        });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.ok && data.startedAt) {
          all[c.code].startedAt = data.startedAt;
          justStarted.push({ code: c.code, challenge: all[c.code], startedAt: data.startedAt });
        }
      } catch (err) { /* skip — try again next time */ }
    }
    if (!justStarted.length) return;

    savePref(QC_STORE, all);
    setJambChallengeBadge(true);
    playChallengeBeep();

    if (inQuiz) return; // badge is set — they'll see it once they finish

    if (justStarted.length === 1) {
      showChallengeStartedNotice(justStarted[0].code, justStarted[0].challenge, justStarted[0].startedAt);
    } else {
      showMultipleChallengesStartedNotice(justStarted);
    }
  }

  // When more than one challenge starts around the same time, a student
  // can only actually take one right now — let them pick which, and leave
  // the rest sitting in the pending list (still joinable, as long as
  // they're still within their time window) rather than stacking popups.
  function showMultipleChallengesStartedNotice(startedList) {
    let card = document.getElementById('jambStartedNotice');
    if (card) card.remove();
    playChallengeBeep();

    card = document.createElement('div');
    card.id = 'jambStartedNotice';
    card.style.cssText = `
      position:fixed; bottom:1.25rem; left:50%; transform:translateX(-50%);
      background:#0a1628; border:1.5px solid var(--gold,#d4af37); border-radius:14px;
      padding:1.1rem 1.25rem; max-width:340px; width:calc(100% - 2rem);
      box-shadow:0 10px 40px rgba(0,0,0,.5); z-index:10001; font-family:var(--sans,sans-serif);
      text-align:center;
    `;
    const rows = startedList.map(({code, challenge}) => {
      const endTxt = challenge.time > 0
        ? ' · ends ' + new Date(challenge.startedAt + challenge.time * 60000).toLocaleTimeString(undefined, { hour:'numeric', minute:'2-digit' })
        : '';
      return `
        <div class="jqc-pending-row" style="text-align:left; margin-bottom:.5rem;">
          <div class="jqc-pending-info">
            <div class="jqc-pending-code">${escHtml(code)}</div>
            <div class="jqc-pending-sub">${escHtml(challenge.subject||'')}${endTxt}</div>
          </div>
          <button class="jqc-pending-btn" data-code="${escHtml(code)}">Join</button>
        </div>
      `;
    }).join('');
    card.innerHTML = `
      <button id="jambStartedClose" style="position:absolute; top:.6rem; right:.7rem; background:none; border:none;
              color:rgba(255,255,255,.5); font-size:1.1rem; cursor:pointer; line-height:1;">✕</button>
      <p style="margin:0 0 .7rem; color:#fff; font-size:.9rem; font-weight:600;">🎉 ${startedList.length} challenges have started!</p>
      <p style="margin:0 0 .7rem; color:rgba(255,255,255,.55); font-size:.75rem;">Pick one to join now — the rest stay in your challenge list.</p>
      ${rows}
    `;
    document.body.appendChild(card);

    document.getElementById('jambStartedClose').addEventListener('click', () => card.remove());
    card.querySelectorAll('.jqc-pending-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const code = btn.dataset.code;
        const picked = startedList.find(s => s.code === code);
        card.remove();
        if (picked) startJambChallengeAttempt(picked.challenge, picked.startedAt);
      });
    });
  }

  function generateJambChallengeCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'JAMB-';
    for (let i=0;i<5;i++) code += chars[Math.floor(Math.random()*chars.length)];
    return code;
  }

  const MAX_PENDING_CHALLENGES = 5;

  function getMyChallenges() {
    const all = loadPref(QC_STORE, {});
    return Object.values(all)
      .filter(c => c.creator === state.currentUser)
      .sort((a, b) => (b.createdAt||0) - (a.createdAt||0));
  }

  function getJoinedChallenges() {
    const all = loadPref(QC_STORE, {});
    return Object.values(all)
      .filter(c => c.joinedAsParticipant && c.creator !== state.currentUser)
      .sort((a, b) => (b.createdAt||0) - (a.createdAt||0));
  }

  function renderJambPendingChallenges() {
    const wrap = document.getElementById('jambPendingWrap');
    const list = document.getElementById('jambPendingList');
    const countEl = document.getElementById('jambPendingCount');
    if (!wrap || !list) return;

    const mine   = getMyChallenges().slice(0, MAX_PENDING_CHALLENGES);
    const joined = getJoinedChallenges().slice(0, MAX_PENDING_CHALLENGES);
    countEl && (countEl.textContent = mine.length);
    const maxEl = document.getElementById('jambPendingMax');
    if (maxEl) maxEl.textContent = MAX_PENDING_CHALLENGES;
    wrap.classList.toggle('hidden', mine.length === 0 && joined.length === 0);

    const renderRow = (c, isOwner) => {
      const completed = !!(c.scores && c.scores[state.currentUser]);
      const isDone = c.ended || completed;
      let statusLabel;
      if (c.ended)      statusLabel = '⏹ Ended';
      else if (completed) statusLabel = '✅ Completed';
      else if (c.syncMode === 'scheduled' && !c.startedAt) {
        const when = c.scheduledStartAt
          ? new Date(c.scheduledStartAt).toLocaleString(undefined, { month:'short', day:'numeric', hour:'numeric', minute:'2-digit' })
          : '';
        statusLabel = '📅 Scheduled' + (when ? ' for ' + when : '');
      }
      else if (c.syncMode === 'ready' && !c.startedAt)     statusLabel = '⏱ Waiting room';
      else if (c.startedAt && c.syncMode && c.syncMode !== 'anytime') {
        const endTxt = c.time > 0
          ? ' · ends ' + new Date(c.startedAt + c.time * 60000).toLocaleTimeString(undefined, { hour:'numeric', minute:'2-digit' })
          : '';
        statusLabel = '▶ Ongoing' + endTxt;
      } else statusLabel = '▶ Not yet taken';

      const actionBtn = isDone
        ? `<button class="jqc-pending-btn" data-code="${escHtml(c.code)}" data-action="results">View Results</button>`
        : `<button class="jqc-pending-btn" data-code="${escHtml(c.code)}" data-action="continue">Continue</button>`;
      const deleteBtn = isOwner
        ? `<button class="jqc-pending-delete" data-code="${escHtml(c.code)}" data-action="delete">Delete</button>`
        : '';

      return `
        <div class="jqc-pending-row">
          <div class="jqc-pending-info">
            <div class="jqc-pending-code">${escHtml(c.code)}${isOwner ? '' : ' <span class="jqc-pending-tag">Joined</span>'}</div>
            <div class="jqc-pending-sub">${escHtml(c.subject||'')} · ${statusLabel}</div>
          </div>
          ${actionBtn}
          ${deleteBtn}
        </div>
      `;
    };

    list.innerHTML = mine.map(c => renderRow(c, true)).join('')
      + joined.map(c => renderRow(c, false)).join('');

    list.querySelectorAll('[data-action="continue"]').forEach(btn => {
      btn.addEventListener('click', () => continueJambChallenge(btn.dataset.code));
    });
    list.querySelectorAll('[data-action="results"]').forEach(btn => {
      btn.addEventListener('click', () => viewJambChallengeResults(btn.dataset.code));
    });
    list.querySelectorAll('[data-action="delete"]').forEach(btn => {
      btn.addEventListener('click', () => deleteJambChallenge(btn.dataset.code));
    });
  }

  async function viewJambChallengeResults(code) {
    const local = loadPref(QC_STORE, {})[code];
    if (local && local.scores) renderJambLeaderboard(code, local.scores);
    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'leaderboard', code }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) renderJambLeaderboard(code, data.scores);
    } catch (err) { /* local scores already shown as a fallback */ }
  }

  function continueJambChallenge(code) {
    const challenges = loadPref(QC_STORE, {});
    const challenge = challenges[code];
    if (!challenge) return;
    _currentChallengeCode = code;
    const isOwner = challenge.creator === state.currentUser;
    if (challenge.syncMode && challenge.syncMode !== 'anytime' && !challenge.startedAt) {
      _pendingChallenge = challenge;
      openJambWaitingRoom(code, isOwner);
    } else if (challenge.syncMode && challenge.syncMode !== 'anytime' && challenge.startedAt) {
      showChallengeStartedNotice(code, challenge, challenge.startedAt);
    } else {
      document.getElementById('jambCodeDisplay').textContent = code;
      showJQCPanel('jambQcShare2');
    }
  }

  async function deleteJambChallenge(code, silent = false) {
    if (!silent) {
      const ok = await showConfirmModal(`Delete challenge ${code}? Anyone with the code will no longer be able to join.`, 'Delete', 'Cancel');
      if (!ok) return;
    }
    try {
      await fetch(API_BASE + '/api/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'end_challenge', code }),
      });
    } catch (err) { /* still remove locally even if the network call fails */ }
    const challenges = loadPref(QC_STORE, {});
    if (challenges[code]) { challenges[code].ended = true; savePref(QC_STORE, challenges); }
    renderJambPendingChallenges();
    refreshJambChallengeBadgeState();
  }

  const RECENT_QS_STORE = 'jamb-challenge-recent-qs-v1';
  const RECENT_QS_CAP = 80;

  // Picks `count` questions from `pool` (a QUESTION_BANK[subject] array),
  // preferring ones this student hasn't used in their recent challenges —
  // so repeated challenges with the same friends don't keep surfacing the
  // same questions. Uses "subject:index" as a stable ID since these
  // questions don't carry a real id field.
  function pickJambQuestions(subject, pool, count) {
    if (!pool.length) return [];
    const tagged = pool.map((q, i) => ({ ...q, _qid: `${subject}:${i}` }));
    const recentIds = loadPref(RECENT_QS_STORE, []);
    const recentSet = new Set(recentIds);
    const fresh = [...tagged.filter(q => !recentSet.has(q._qid))].sort(() => Math.random() - .5);
    const stale = tagged.filter(q => recentSet.has(q._qid))
      .sort((a, b) => recentIds.indexOf(a._qid) - recentIds.indexOf(b._qid));

    const selected = fresh.slice(0, count);
    if (selected.length < count) selected.push(...stale.slice(0, count - selected.length));

    const usedIds = selected.map(q => q._qid);
    const updated = [...recentIds.filter(id => !usedIds.includes(id)), ...usedIds].slice(-RECENT_QS_CAP);
    savePref(RECENT_QS_STORE, updated);

    return selected;
  }

  async function generateJambChallenge() {
    // Keep at most MAX_PENDING_CHALLENGES total — auto-retire the oldest
    // one rather than blocking creation.
    const mine = getMyChallenges();
    if (mine.length >= MAX_PENDING_CHALLENGES) {
      const oldest = mine[mine.length - 1];
      await deleteJambChallenge(oldest.code, true);
    }

    const subjectBoxes = [...document.querySelectorAll('#jambQcSubjects input:checked')].map(i => i.value);
    if (!subjectBoxes.length) { showInfoToast('Pick at least one subject.'); return; }
    const count      = parseInt(document.getElementById('jambQcCount')?.value || '10');
    const duration   = parseInt(document.getElementById('jambQcDuration')?.value || '0');
    const syncMode   = document.querySelector('input[name="jambSyncMode"]:checked')?.value || 'anytime';
    let scheduledStartAt = null;
    if (syncMode === 'scheduled') {
      const raw = document.getElementById('jambScheduledTime')?.value;
      if (!raw) { showInfoToast('Pick a date and time for the challenge to start.'); return; }
      scheduledStartAt = new Date(raw).getTime();
      if (!Number.isFinite(scheduledStartAt) || scheduledStartAt <= Date.now()) {
        showInfoToast('Pick a start time in the future.');
        return;
      }
    }

    // Split the requested count evenly across subjects, but keep each
    // subject's questions grouped together (not interleaved) so students can
    // switch between subjects the same way they do in a normal exam.
    const perSubject = Math.max(1, Math.floor(count / subjectBoxes.length));
    let selected = [];
    const subjectRanges = {};
    let offset = 0;
    subjectBoxes.forEach(subject => {
      const pool = QUESTION_BANK[subject] || [];
      const qs = pickJambQuestions(subject, pool, perSubject).map(q => ({ ...q, sourceSubject: subject }));
      subjectRanges[subject] = { start: offset, end: offset + qs.length - 1 };
      offset += qs.length;
      selected = selected.concat(qs);
    });
    if (!selected.length) { showInfoToast('No questions available for the selected subjects.'); return; }

    const subjectLabel = subjectBoxes.map(fmt).join(' + ');
    const code = generateJambChallengeCode();

    const btn = document.getElementById('jambQcGenerate');
    if (btn) { btn.disabled = true; btn.textContent = 'Creating…'; }

    try {
      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'create', code, subject: subjectLabel, subjects: subjectBoxes, subjectRanges,
          count: selected.length, questions: selected, creator: state.currentUser,
          time: duration, syncMode, scheduledStartAt,
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error(data.error || 'Could not create challenge');

      // Also keep a local copy so the creator's own attempt works instantly
      // without waiting on a second network round trip.
      const challenges = loadPref(QC_STORE, {});
      const challengeObj = {
        code, subject: subjectLabel, subjects: subjectBoxes, subjectRanges,
        count: selected.length, questions: selected, creator: state.currentUser,
        time: duration, syncMode, scheduledStartAt,
        startedAt: syncMode === 'anytime' ? Date.now() : null,
        createdAt: Date.now(), ended: false, scores: {},
      };
      challenges[code] = challengeObj;
      savePref(QC_STORE, challenges);

      _currentChallengeCode = code;
      document.getElementById('jambCodeDisplay').textContent = code;

      if (syncMode !== 'anytime') {
        _pendingChallenge = challengeObj;
        openJambWaitingRoom(code, true);
      } else {
        showJQCPanel('jambQcShare2');
      }
    } catch (err) {
      showInfoToast('Could not create challenge — check your connection and try again.');
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = 'Generate Code →'; }
    }
  }

  function shareJambChallengeLink() {
    if (!_currentChallengeCode) return;
    const url  = window.location.origin + window.location.pathname + '?challenge=' + _currentChallengeCode;
    const challenges = loadPref(QC_STORE, {});
    const subj = challenges[_currentChallengeCode]?.subject || '';
    const text = `🏆 JAMB Challenge! Beat my score in ${fmt(subj)}.\n\nCode: ${_currentChallengeCode}\nLink: ${url}`;
    if (navigator.share) navigator.share({ title:'JAMB Challenge', text, url }).catch(()=>{});
    else navigator.clipboard?.writeText(text).then(()=>alert('Link copied!')).catch(()=>prompt('Copy:',url));
  }

  async function joinJambChallenge() {
    const code = (document.getElementById('jambJoinCode')?.value||'').trim().toUpperCase();
    if (!code) return;

    const btn = document.getElementById('jambJoinConfirm');
    if (btn) { btn.disabled = true; btn.textContent = 'Joining…'; }

    try {
      // Check locally first (covers the creator's own device, no network
      // needed), then fall back to the shared backend for anyone else.
      const local = loadPref(QC_STORE, {})[code];
      if (local) {
        if (local.ended) { showInfoToast('This challenge has ended.'); return; }
        _currentChallengeCode = code;
        if (local.syncMode && local.syncMode !== 'anytime' && !local.startedAt) {
          _pendingChallenge = local;
          openJambWaitingRoom(code, local.creator === state.currentUser);
        } else if (local.syncMode && local.syncMode !== 'anytime' && local.startedAt) {
          // Already running with a shared clock — show the same Join Now /
          // snooze notice a watching participant would have gotten, rather
          // than dropping straight into the quiz.
          showChallengeStartedNotice(code, local, local.startedAt);
        } else {
          startJambChallengeAttempt(local);
        }
        return;
      }

      const res = await fetch(API_BASE + '/api/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'join', code, student: state.currentUser }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        if (res.status === 409 && data.alreadyCompleted) {
          showInfoToast("You've already completed this challenge — check the leaderboard for your result.");
          // We don't have the full scores list from this response alone —
          // fetch it fresh so the leaderboard shown is complete and current.
          const lbRes = await fetch(API_BASE + '/api/challenge', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'leaderboard', code }),
          });
          const lbData = await lbRes.json().catch(() => ({}));
          if (lbRes.ok && lbData.ok) renderJambLeaderboard(code, lbData.scores);
          return;
        }
        showInfoToast(res.status === 410 ? 'This challenge has ended.'
          : data.error === 'Challenge not found or expired'
          ? 'Challenge not found — check the code and try again.'
          : 'Could not join challenge — check your connection and try again.');
        return;
      }
      _currentChallengeCode = code;
      // Persist locally so this device has its own record of challenges it
      // joined, not just ones it created — without this, a joiner had no
      // way to find their way back except re-entering the code each time.
      {
        const challenges = loadPref(QC_STORE, {});
        challenges[code] = { ...data.challenge, joinedAsParticipant: true };
        savePref(QC_STORE, challenges);
      }
      if (data.challenge.syncMode && data.challenge.syncMode !== 'anytime' && !data.challenge.startedAt) {
        _pendingChallenge = data.challenge;
        openJambWaitingRoom(code, data.challenge.creator === state.currentUser);
      } else if (data.challenge.syncMode && data.challenge.syncMode !== 'anytime' && data.challenge.startedAt) {
        // Already started (including a scheduled challenge whose time has
        // passed) — show the Join Now / snooze notice instead of dropping
        // straight in, same as a watching participant would see.
        showChallengeStartedNotice(code, data.challenge, data.challenge.startedAt);
      } else {
        startJambChallengeAttempt(data.challenge);
      }
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = 'Join →'; }
    }
  }

  function openJambWaitingRoom(code, isCreator) {
    _isWaitingRoomCreator = isCreator;
    document.getElementById('jambWaitingCodeDisplay').textContent = code;
    document.getElementById('jambForceStartBtn')?.classList.toggle('hidden', !isCreator);
    document.getElementById('jambEndChallengeBtn')?.classList.toggle('hidden', !isCreator);
    const readyBtn = document.getElementById('jambReadyBtn');
    if (readyBtn) { readyBtn.disabled = false; readyBtn.textContent = "✅ I'm Ready"; }
    showJQCPanel('jambQcWaitingRoom');
    document.getElementById('jambQuizModal')?.classList.remove('hidden');
    pollJambWaitingRoom(code);
  }

  function renderJambWaitingList(participants) {
    const list = document.getElementById('jambWaitingList');
    if (!list) return;
    const entries = Object.entries(participants || {});
    list.innerHTML = entries.map(([name, p]) => `
      <div class="jqc-score-row">
        <span class="jqc-rank">${p.ready ? '✅' : '⏳'}</span>
        <span class="jqc-score-name">${escHtml(name)}${name === state.currentUser ? ' (you)' : ''}</span>
        <span class="jqc-score-val">${p.ready ? 'Ready' : 'Waiting'}</span>
        ${_isWaitingRoomCreator && name !== state.currentUser
          ? `<button class="jqc-pending-delete" data-name="${escHtml(name)}" style="margin-left:.4rem">Remove</button>` : ''}
      </div>
    `).join('') || '<p class="jqc-sub">Waiting for people to join…</p>';

    list.querySelectorAll('button[data-name]').forEach(btn => {
      btn.addEventListener('click', () => removeJambParticipant(btn.dataset.name));
    });
  }

  function updateJambCountdownDisplay(msRemaining) {
    const el2 = document.getElementById('jambWaitingCountdown');
    if (!el2) return;
    if (msRemaining == null || msRemaining <= 0) { el2.classList.add('hidden'); return; }
    const totalSec = Math.ceil(msRemaining / 1000);
    const m = Math.floor(totalSec / 60), s = totalSec % 60;
    el2.textContent = `Auto-starts in ${m}:${String(s).padStart(2,'0')}`;
    el2.classList.remove('hidden');
  }

  async function pollJambWaitingRoom(code) {
    clearInterval(_waitingRoomTimer);
    clearInterval(_waitingRoomCountdownTicker);
    let localFirstReadyAt = null;
    let localScheduledAt = null;

    // Smooth per-second countdown between the (slower) network polls.
    _waitingRoomCountdownTicker = setInterval(() => {
      if (localScheduledAt) updateJambCountdownDisplay(localScheduledAt - Date.now());
      else if (localFirstReadyAt) updateJambCountdownDisplay((localFirstReadyAt + WAITING_ROOM_TIMEOUT_MS) - Date.now());
    }, 1000);

    const tick = async () => {
      try {
        const res = await fetch(API_BASE + '/api/challenge', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'status', code }),
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !data.ok) return; // transient network hiccup — just try again next tick

        if (data.ended) {
          clearInterval(_waitingRoomTimer);
          clearInterval(_waitingRoomCountdownTicker);
          document.getElementById('jambWaitingStatus').textContent = 'This challenge has ended.';
          document.getElementById('jambReadyBtn')?.classList.add('hidden');
          document.getElementById('jambForceStartBtn')?.classList.add('hidden');
          return;
        }

        renderJambWaitingList(data.participants);
        localFirstReadyAt = data.firstReadyAt || null;
        localScheduledAt  = data.scheduledStartAt || null;
        if (localScheduledAt) {
          document.getElementById('jambWaitingStatus').textContent = 'Challenge starts automatically at the scheduled time.';
        }

        if (data.startedAt) {
          clearInterval(_waitingRoomTimer);
          clearInterval(_waitingRoomCountdownTicker);
          showChallengeStartedNotice(code, _pendingChallenge, data.startedAt);
          return;
        }

        // Auto-start safety net: if someone's been ready a while and not
        // everyone else has joined in, start anyway rather than wait forever.
        if (data.firstReadyAt && (Date.now() - data.firstReadyAt) > WAITING_ROOM_TIMEOUT_MS) {
          await fetch(API_BASE + '/api/challenge', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'force_start', code }),
          });
        }
      } catch (err) { /* try again next tick */ }
    };

    tick();
    _waitingRoomTimer = setInterval(tick, 3000);
  }

  async function removeJambParticipant(name) {
    if (!_currentChallengeCode) return;
    try {
      await fetch(API_BASE + '/api/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'remove_participant', code: _currentChallengeCode, student: name }),
      });
    } catch (err) {
      showInfoToast('Could not remove participant — check your connection.');
    }
  }

  async function endJambChallengeFromWaitingRoom() {
    if (!_currentChallengeCode) return;
    const ok = await showConfirmModal('End this challenge for everyone? Nobody will be able to join or continue it.', 'End Challenge', 'Cancel');
    if (!ok) return;
    await deleteJambChallenge(_currentChallengeCode);
    clearInterval(_waitingRoomTimer);
    clearInterval(_waitingRoomCountdownTicker);
    document.getElementById('jambQuizModal')?.classList.add('hidden');
  }

  async function markJambReady() {
    if (!_currentChallengeCode) return;
    const btn = document.getElementById('jambReadyBtn');
    if (btn) { btn.disabled = true; btn.textContent = '✅ Waiting for others…'; }
    try {
      await fetch(API_BASE + '/api/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'mark_ready', code: _currentChallengeCode, student: state.currentUser }),
      });
    } catch (err) {
      showInfoToast('Could not mark ready — check your connection.');
      if (btn) { btn.disabled = false; btn.textContent = "✅ I'm Ready"; }
    }
  }

  async function forceStartJambChallenge() {
    if (!_currentChallengeCode) return;
    try {
      await fetch(API_BASE + '/api/challenge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'force_start', code: _currentChallengeCode }),
      });
    } catch (err) {
      showInfoToast('Could not start — check your connection.');
    }
  }

  function startJambChallengeAttempt(challengeArg, startedAtOverride) {
    clearInterval(_waitingRoomTimer);
    clearInterval(_waitingRoomCountdownTicker);
    const challenges = loadPref(QC_STORE, {});
    const challenge  = challengeArg || challenges[_currentChallengeCode];
    if (!challenge) return;

    // A challenge is a one-shot comparison, not a retakeable practice set —
    // if this student already has a recorded score, show results instead.
    if (challenge.scores && challenge.scores[state.currentUser]) {
      showInfoToast("You've already completed this challenge — check the leaderboard for your result.");
      renderJambLeaderboard(challenge.code, challenge.scores);
      return;
    }

    document.getElementById('jambQuizModal')?.classList.add('hidden');

    state.sessionType = 'single';
    state.mode = 'exam';
    state.subject = challenge.subject;
    state.subjects = challenge.subjects || [challenge.subject];
    state.subjectRanges = challenge.subjectRanges || {};
    state.currentQuestions = challenge.questions;
    state.answers = new Array(challenge.questions.length).fill(null);
    state.currentIndex = 0;
    state.reviewMode = false;
    state.student = state.currentUser;
    state._challengeCode = challenge.code;

    // Timer: honour whatever duration the creator set (0 = no limit). For a
    // challenge with a shared clock (ready/scheduled modes), a late joiner
    // resumes the already-ticking timer rather than getting a fresh one.
    const startedAt = startedAtOverride || challenge.startedAt || Date.now();
    state.chosenDurationMinutes = challenge.time || 0;
    if (state.timerId) { clearInterval(state.timerId); state.timerId = null; }
    if (state.chosenDurationMinutes > 0) {
      const elapsedSec = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
      state.timeLeft = Math.max(0, state.chosenDurationMinutes * 60 - elapsedSec);
      startTimer();
    } else {
      state.timeLeft = 0;
    }

    el.sidebarStudent.textContent = state.currentUser;
    el.sidebarMode.textContent = state.chosenDurationMinutes > 0
      ? `Challenge · ${state.chosenDurationMinutes} min`
      : 'Challenge';

    // Subject switcher — same UI as a normal multi-subject exam.
    const isMulti = state.subjects.length > 1;
    el.subjectSwitcher.classList.toggle('hidden', !isMulti);
    if (isMulti) buildSubjectSwitcher();

    buildQuestionPills();
    renderQuestion();
    showScreen('quiz');
  }

  /* ════════════════════════════════════════════════════
     SESSION SHARING
  ════════════════════════════════════════════════════ */
  function shareJambResult() {
    const r  = window._jambLastResult;
    const qs = window._jambLastQuestions || [];
    const as = window._jambLastAnswers  || [];
    if (!r) return;
    const payload = {
      r,
      q: qs.slice(0,10).map((q,i)=>({
        q: q.question,
        o: q.options,
        a: q.answer,
        ua: as[i],
      }))
    };
    const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
    const url  = window.location.origin + window.location.pathname + '?session=' + encoded;
    const text = `🎯 ${r.student} scored ${r.percent}% in ${fmt(r.subject)} JAMB\n\nSee my full session:\n${url}\n\nThink you can beat it? 💪`;
    if (navigator.share) navigator.share({ title:'JAMB Result', text, url }).catch(()=>{});
    else navigator.clipboard?.writeText(text).then(()=>alert('Result link copied!')).catch(()=>prompt('Copy:',url));
  }

  function checkForSharedSession() {
    const params = new URLSearchParams(window.location.search);
    const data   = params.get('session');
    if (!data) return;
    history.replaceState(null,'',window.location.pathname);
    try {
      const payload = JSON.parse(decodeURIComponent(escape(atob(data))));
      showJambSharedSession(payload);
    } catch(e) { console.warn('Could not parse session:', e); }
  }

  function showJambSharedSession(payload) {
    const r   = payload.r;
    const modal = document.getElementById('jambSharedModal');
    if (!modal) return;
    const pct   = r.percent || 0;
    const emoji = pct>=70?'🏆':pct>=50?'🎯':'💪';
    const color = pct>=50?'#27ae60':'#e74c3c';
    document.getElementById('jambSsEmoji').textContent = emoji;
    document.getElementById('jambSsScore').textContent = pct + '%';
    document.getElementById('jambSsScore').style.color = color;
    document.getElementById('jambSsMeta').innerHTML = `<strong>${escHtml(r.student)}</strong> · ${escHtml(fmt(r.subject||'JAMB'))} · ${escHtml(r.mode||'')}`;
    document.getElementById('jambSsStats').innerHTML = `<span style="color:#27ae60">✓ ${r.correct} correct</span> · <span style="color:#e74c3c">✗ ${r.wrong} wrong</span> · <span>⊘ ${r.skipped} skipped</span>`;
    document.getElementById('jambSsClose')?.addEventListener('click', ()=>modal.classList.add('hidden'));
    modal.addEventListener('click', e=>{ if(e.target===modal) modal.classList.add('hidden'); });
    document.getElementById('jambSsTry')?.addEventListener('click', ()=>{
      modal.classList.add('hidden');
      showScreen('home');
    });
    modal.classList.remove('hidden');
  }

  /* ════════════════════════════════════════════════════
     UPGRADE BAR + CROSS-SELL
  ════════════════════════════════════════════════════ */
  const CROSSSELL_MSGS = [
    { title: 'Writing WAEC this year?',      sub: 'My Exams App covers 15 subjects — WAEC, NECO, GCE, NABTEB. Your JAMB subscription covers it too.' },
    { title: 'NECO coming up next?',          sub: 'Same subscription. Switch to My Exams App and drill NECO past questions with full marking schemes.' },
    { title: 'Done with JAMB prep?',          sub: 'My Exams App has 665+ past questions across 4 exam bodies. Your access transfers — no extra payment.' },
    { title: 'Score high in JAMB. Ace WAEC too.', sub: 'One subscription covers both apps. My Exams App — try it free today.' },
    { title: 'Theory giving you trouble?',    sub: 'My Exams App has snap-and-mark — write your answer, snap it, get marked against the official scheme.' },
  ];

  function initUpgradeBar() {
    const btn = document.getElementById('jambUpgradeBarBtn');
    if (btn) btn.addEventListener('click', () => showPaywall('upgrade'));
    const cardBtn = document.getElementById('jambUpgradeCardBtn');
    if (cardBtn) cardBtn.addEventListener('click', () => showPaywall('upgrade'));
    refreshUpgradeBar();
    setInterval(refreshUpgradeBar, 30000);
    rotateCrosssell();
    setInterval(rotateCrosssell, 45000);
  }

  function rotateCrosssell() {
    const card  = document.getElementById('jambCrosssell');
    if (!card) return;
    const idx   = Math.floor(Date.now() / 45000) % CROSSSELL_MSGS.length;
    const msg   = CROSSSELL_MSGS[idx];
    const title = document.getElementById('jcsTitleText');
    const sub   = card.querySelector('.jcs-sub');
    if (title) title.textContent = msg.title;
    if (sub)   sub.textContent   = msg.sub;
  }

  /* ════════════════════════════════
     SHOW WORKING MODE
  ════════════════════════════════ */

  /* ════════════════════════════════
     GENTLE VALIDATION POPUPS
  ════════════════════════════════ */
  function showGentlePopup(msg, anchorEl) {
    // Remove any existing popup
    document.querySelectorAll('.gentle-popup').forEach(p => p.remove());

    const popup = document.createElement('div');
    popup.className = 'gentle-popup';
    popup.textContent = msg;
    popup.style.cssText = [
      'display:block',
      'background:rgba(11,31,58,0.97)',
      'color:white',
      'border:1.5px solid rgba(245,166,35,.7)',
      'border-radius:10px',
      'padding:.6rem 1rem',
      'font-size:.82rem','font-weight:600',
      'text-align:center',
      'line-height:1.45',
      'margin-bottom:.5rem',
      'box-shadow:0 4px 16px rgba(0,0,0,.35)',
      'animation:gentlePopIn .18s ease',
    ].join(';');

    if (anchorEl) {
      // Insert directly before the anchor element
      anchorEl.parentNode.insertBefore(popup, anchorEl);
      anchorEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    } else {
      document.body.appendChild(popup);
      popup.style.cssText += ';position:fixed;top:80px;left:50%;transform:translateX(-50%);max-width:300px;z-index:9999';
    }

    setTimeout(() => {
      popup.style.opacity = '0';
      popup.style.transition = 'opacity .3s';
      setTimeout(() => popup.remove(), 300);
    }, 3000);
  }

  function showSWSnapWarning() {
    showGentlePopup('✍️ Snap your working first to unlock answers');
    const panel = document.getElementById('showWorkingPanel');
    if (panel) panel.classList.remove('hidden');
  }

  function showSWIntroBanner() {
    // One-time banner when entering Show Working mode
    let banner = document.getElementById('swIntroBanner');
    if (!banner) {
      banner = document.createElement('div');
      banner.id = 'swIntroBanner';
      banner.style.cssText = [
        'position:fixed','top:70px','left:50%','transform:translateX(-50%)',
        'background:#0d1f38','color:white',
        'border:2px solid var(--amber,#f5a623)',
        'border-radius:14px','padding:1rem 1.25rem',
        'font-size:.85rem','line-height:1.6',
        'text-align:center','z-index:9999',
        'max-width:420px','width:calc(100% - 2rem)',
        'box-shadow:0 8px 32px rgba(0,0,0,.5)',
      ].join(';');
      banner.innerHTML = [
        '<div style="font-size:1.5rem;margin-bottom:.35rem">✍️</div>',
        '<strong style="font-size:.95rem;color:var(--amber,#f5a623)">Show Working Mode</strong><br/>',
        'Write your solution on paper before selecting an answer.<br/>',
        'Snap your working — AI checks your method, then options unlock.<br/>',
        '<button id="swIntroBannerClose" style="margin-top:.65rem;background:var(--amber,#f5a623);color:#0b1f3a;border:none;border-radius:99px;padding:.4rem 1.1rem;font-weight:700;font-size:.82rem;cursor:pointer">Got it →</button>',
      ].join('');
      document.body.appendChild(banner);
      document.getElementById('swIntroBannerClose')?.addEventListener('click', () => { banner.style.display = 'none'; });
    }
    banner.style.display = 'block';
    clearTimeout(banner._timer);
    banner._timer = setTimeout(() => { banner.style.display = 'none'; }, 5000);
  }

  function lockOptionsUntilWorking(unlock) {
    const opts = document.querySelectorAll('.option-btn');
    opts.forEach(btn => {
      // Don't grey out — just block via click handler
      // Visual greyout confuses students into thinking app is broken
      btn.style.opacity    = '';
      btn.style.pointerEvents = '';
      btn.style.cursor     = '';
    });
    const lockBar = document.getElementById('swLockBar');
    if (lockBar) lockBar.classList.toggle('hidden', unlock);
  }

  function triggerSWSnap() {
    if (!checkAccess()) { showPaywall('feature'); return; }
    const credits = getSWCredits();
    if (credits <= 0) {
      showSWTopUp();
      return;
    }
    document.getElementById('swFileInput')?.click();
  }

  function showSWTopUp() {
    const modal = document.getElementById('exitConfirmModal');
    const icon  = document.getElementById('exitModalIcon');
    const title = document.getElementById('exitModalTitle');
    const sub   = document.getElementById('exitModalSub');
    if (!modal) return;
    icon.textContent  = '📸';
    title.textContent = 'Snaps Exhausted';
    sub.textContent   = 'You have used all 20 Show Working snaps for this quarter. Top up with 10 more snaps for ₦300.';
    const stay  = document.getElementById('exitModalStay');
    const leave = document.getElementById('exitModalLeave');
    const newStay  = stay.cloneNode(true);
    const newLeave = leave.cloneNode(true);
    stay.parentNode.replaceChild(newStay, stay);
    leave.parentNode.replaceChild(newLeave, leave);
    document.getElementById('exitModalStay').textContent  = 'Not Now';
    document.getElementById('exitModalLeave').textContent = 'Top Up — ₦300 →';
    document.getElementById('exitModalStay').addEventListener('click',  () => modal.classList.add('hidden'));
    document.getElementById('exitModalLeave').addEventListener('click', () => {
      modal.classList.add('hidden');
      handleSWTopUpPayment();
    });
    modal.classList.remove('hidden');
  }

  async function handleSWTopUpPayment() {
    const email = await getEmailViaModal();
    if (!email) return; // cancelled
    const handler = window.PaystackPop.setup({
      key: PAYSTACK_KEY,
      email,
      amount: 30000,
      currency: 'NGN',
      ref: 'SW-TOPUP-' + Date.now(),
      metadata: { custom_fields: [
        { display_name: 'Product', variable_name: 'product', value: 'Show Working Top-up 10 snaps' },
      ]},
      onClose() {},
      callback(response) {
        (async () => {
          const res = await fetch(API_BASE + '/api/verify-payment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ reference: response.reference })
          }).catch(() => null);
          const data = res ? await res.json().catch(() => ({})) : {};
          if (!res || !res.ok || !data.verified) {
            alert('We could not confirm this payment yet. If you were charged, please contact support with reference: ' + response.reference);
            return;
          }
          const addCredits = data.credits || 10;
          const current = getSWCredits();
          savePref(SK_SW_CREDITS, { n: current + addCredits, quarter: getCurrentQuarter() });
          const badge = document.getElementById('swCredits');
          if (badge) badge.textContent = getSWCredits() + ' snaps left';
          alert(`✅ ${addCredits} snaps added! You now have ` + getSWCredits() + ' snaps remaining.');
        })();
      }
    });
    handler.openIframe();
  }

  function handleSWFile(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = '';
    compressForSW(file).then(sendWorkingToMark).catch(err => {
      console.error(err);
      alert('Could not process image. Please try again.');
    });
  }

  function compressForSW(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = ev => {
        const img = new Image();
        img.onerror = reject;
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let w = img.width, h = img.height;
          if (w > 900) { h = Math.round(h * 900/w); w = 900; }
          canvas.width = w; canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.fillStyle = '#fff';
          ctx.fillRect(0, 0, w, h);
          ctx.drawImage(img, 0, 0, w, h);
          resolve({ base64: canvas.toDataURL('image/jpeg', 0.8).split(',')[1], mediaType: 'image/jpeg' });
        };
        img.src = ev.target.result;
      };
      reader.readAsDataURL(file);
    });
  }

  async function sendWorkingToMark({ base64, mediaType }) {
    const q = state.currentQuestions[state.currentIndex];
    if (!q) return;

    const proc = document.getElementById('swProcessing');
    if (proc) proc.classList.remove('hidden');

    if (!useSWCredit()) {
      if (proc) proc.classList.add('hidden');
      alert('No working snaps remaining.');
      return;
    }

    const subjectKey  = (el.subjectSelect?.value||state.subject||'').toLowerCase();
    const subjectName = SW_SUBJECTS_LBL[subjectKey] || state.subject;
    const correctOpt  = q.options[q.answer];

    const prompt = `You are a JAMB examiner checking a student's working for a ${subjectName} question.

QUESTION: ${q.question}
OPTIONS: ${q.options.map((o,i)=>String.fromCharCode(65+i)+'. '+o).join(' | ')}
CORRECT ANSWER: ${correctOpt}

The student has shown their working on paper. Evaluate ONLY the method and steps — do NOT reveal which option letter is correct.

Return ONLY valid JSON:
{
  "workingCorrect": true or false,
  "approach": "one sentence describing the student's approach",
  "steps": [
    { "step": "description of what student did", "correct": true/false, "comment": "brief feedback" }
  ],
  "feedback": "2-3 sentence overall feedback on the working method",
  "hint": "one hint to guide them to the answer without revealing it"
}`;

    try {
      const res = await fetch(SNAP_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          image: base64, mediaType,
          question: prompt,
          scheme: [{ point: 'Correct working method', marks: 1 }],
          totalMarks: 1,
          subject: subjectName,
          examBody: 'JAMB',
        }),
      });

      if (proc) proc.classList.add('hidden');

      const data = await res.json();
      // Parse the feedback from the API — the API returns breakdown/feedback
      // We sent a custom prompt so parse from the feedback field
      let parsed;
      try {
        // Try to extract JSON from the feedback field
        const raw = data.feedback || '';
        const match = raw.match(/\{[\s\S]*\}/);
        parsed = match ? JSON.parse(match[0]) : null;
      } catch(e) { parsed = null; }

      showSWResult(parsed, data);

    } catch(err) {
      if (proc) proc.classList.add('hidden');
      alert('Could not reach marking server. Check your connection.');
    }
  }

  function showSWResult(parsed, rawData) {
    const swResult = document.getElementById('swResult');
    const swResultHead = document.getElementById('swResultHead');
    const swResultFeedback = document.getElementById('swResultFeedback');
    const swResultSteps = document.getElementById('swResultSteps');
    if (!swResult) return;

    const correct = parsed?.workingCorrect ?? (rawData?.percent >= 50);
    const feedback = parsed?.feedback || rawData?.feedback || 'Working reviewed.';
    const hint     = parsed?.hint || '';
    const steps    = parsed?.steps || rawData?.breakdown || [];

    swResultHead.innerHTML = correct
      ? '<span class="sw-correct">✓ Good working method!</span>'
      : '<span class="sw-wrong">✗ Check your working — see feedback below</span>';

    swResultFeedback.textContent = feedback;

    if (steps.length) {
      swResultSteps.innerHTML = steps.map(s => `
        <div class="sw-step ${s.correct||s.awarded>0 ? 'sw-step-ok' : 'sw-step-err'}">
          <span class="sw-step-icon">${s.correct||s.awarded>0 ? '✓' : '✗'}</span>
          <div class="sw-step-body">
            <div class="sw-step-desc">${escHtml(s.step||s.point||'')}</div>
            ${s.comment ? `<div class="sw-step-comment">${escHtml(s.comment)}</div>` : ''}
          </div>
        </div>`).join('');
    }

    if (hint) {
      swResultFeedback.innerHTML += `<div class="sw-hint">💡 ${escHtml(hint)}</div>`;
    }

    state.swDone = true;
    swResult.classList.remove('hidden');
    lockOptionsUntilWorking(true);
    const lockBar = document.getElementById('swLockBar');
    if (lockBar) lockBar.classList.add('hidden');

    // Update credits badge
    const swCredits = document.getElementById('swCredits');
    if (swCredits) swCredits.textContent = getSWCredits() + ' snaps left';
  }

  function swProceed() {
    // Hide the panel and let student select answer
    const swPanel = document.getElementById('showWorkingPanel');
    if (swPanel) swPanel.classList.add('hidden');
    lockOptionsUntilWorking(true);
  }

  // Inline onclick="..." attributes (in index.html) can only see truly
  // global functions — anything defined inside this closure is invisible to
  // them. Exposing defensively here since My Exams App had this exact bug.
  window.showPaywall       = showPaywall;
  window.handleJambPayment = handleJambPayment;

  // Called here, at the very end, so every const declared anywhere in this
  // file (like CROSSSELL_MSGS) has already been initialized by the time
  // init() and anything it calls actually runs. Calling init() earlier in
  // the file caused "Cannot access 'CROSSSELL_MSGS' before initialization".
  init();

})();
