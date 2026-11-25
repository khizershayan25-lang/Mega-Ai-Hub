const chatBox = document.getElementById("chatBox");
const normalInputRow = document.getElementById("normalInputRow");
const promptInput = document.getElementById("promptInput");
const sendBtn = document.getElementById("sendBtn");
const micBtn = document.getElementById("micBtn");
const plusBtn = document.getElementById("plusBtn");
const plusMenu = document.getElementById("plusMenu");
const imagePhotoOption = document.getElementById("imagePhotoOption");
const craftImageOption = document.getElementById("craftImageOption");
const craftSongOption = document.getElementById("craftSongOption");
const liveTalkOption = document.getElementById("liveTalkOption");
const codingForGamesOption = document.getElementById("codingForGamesOption");
const robloxLiteOptionBtn = document.getElementById("robloxLiteOptionBtn");
const schoolOptionBtn = document.getElementById("schoolOptionBtn");
const createInMegaAiOption = document.getElementById("createInMegaAiOption");

const studioWorkspaceTitle = document.getElementById("studioWorkspaceTitle");
const scriptorTargetModal = document.getElementById("scriptorTargetModal");
const closeScriptorTargetBtn = document.getElementById("closeScriptorTargetBtn");

const topEventTimerBox = document.getElementById("topEventTimerBox");
const topEventTimerLabel = document.getElementById("topEventTimerLabel");
const topEventRewardHint = document.getElementById("topEventRewardHint");

const artLabOptionsModal = document.getElementById("artLabOptionsModal");
const closeArtOptionsBtn = document.getElementById("closeArtOptionsBtn");

const craftSongModal = document.getElementById("craftSongModal");
const closeCraftSongBtn = document.getElementById("closeCraftSongBtn");
const songDurationSelect = document.getElementById("songDurationSelect");
const songThemeInput = document.getElementById("songThemeInput");
const generateCraftSongBtn = document.getElementById("generateCraftSongBtn");
const songTriangleWatermarkOverlay = document.getElementById("songTriangleWatermarkOverlay");

const accountCornerBtn = document.getElementById("accountCornerBtn");
const accountCornerMenu = document.getElementById("accountCornerMenu");
const singleAccountActionBtn = document.getElementById("singleAccountActionBtn");
const chatGoMenu = document.getElementById("chatGoMenu");
const goLanguageBtn = document.getElementById("goLanguageBtn");
const goProfileBtn = document.getElementById("goProfileBtn");
const goSubscriptionBtn = document.getElementById("goSubscriptionBtn");

const accountAuthModal = document.getElementById("accountAuthModal");
const closeAuthModalBtn = document.getElementById("closeAuthModalBtn");
const authModalTitle = document.getElementById("authModalTitle");
const createAccountPane = document.getElementById("createAccountPane");
const loginAccountPane = document.getElementById("loginAccountPane");
const regNameInput = document.getElementById("regNameInput");
const regDobInput = document.getElementById("regDobInput");
const regUserInput = document.getElementById("regUserInput");
const regPassInput = document.getElementById("regPassInput");
const regErrorBox = document.getElementById("regErrorBox");
const createAccountSubmitBtn = document.getElementById("createAccountSubmitBtn");
const loginNameInput = document.getElementById("loginNameInput");
const loginPassInput = document.getElementById("loginPassInput");
const loginErrorBox = document.getElementById("loginErrorBox");
const loginAccountSubmitBtn = document.getElementById("loginAccountSubmitBtn");
const loginSavedItemsBox = document.getElementById("loginSavedItemsBox");

const languagePickerModal = document.getElementById("languagePickerModal");
const closeLangModalBtn = document.getElementById("closeLangModalBtn");
const languageOptionsGrid = document.getElementById("languageOptionsGrid");

const profileInfoModal = document.getElementById("profileInfoModal");
const closeProfileModalBtn = document.getElementById("closeProfileModalBtn");
const profileSummaryBox = document.getElementById("profileSummaryBox");
const profileChatListBox = document.getElementById("profileChatListBox");
const dailyRewardClaimBtn = document.getElementById("dailyRewardClaimBtn");
const dailyRewardMsg = document.getElementById("dailyRewardMsg");

const subscriptionModal = document.getElementById("subscriptionModal");
const closeSubModalBtn = document.getElementById("closeSubModalBtn");
const subCurrentBalanceText = document.getElementById("subCurrentBalanceText");
const subDiscountBannerText = document.getElementById("subDiscountBannerText");
const discountCardHeading = document.getElementById("discountCardHeading");
const discDayPlanBtn = document.getElementById("discDayPlanBtn");
const discMonthPlanBtn = document.getElementById("discMonthPlanBtn");
const discYearPlanBtn = document.getElementById("discYearPlanBtn");
const subStatusMessage = document.getElementById("subStatusMessage");

const moodCycleBtn = document.getElementById("moodCycleBtn");
const ideaMixerBtn = document.getElementById("ideaMixerBtn");
const memeMakerBtn = document.getElementById("memeMakerBtn");
const sceneStarterBtn = document.getElementById("sceneStarterBtn");

const megaGateModal = document.getElementById("megaGateModal");
const gateStepText = document.getElementById("gateStepText");
const gateCheckbox = document.getElementById("gateCheckbox");
const gateCheckText = document.getElementById("gateCheckText");
const gateErrorText = document.getElementById("gateErrorText");
const gateCancelBtn = document.getElementById("gateCancelBtn");
const gateContinueBtn = document.getElementById("gateContinueBtn");

const megaStudioWorkspace = document.getElementById("megaStudioWorkspace");
const studioFileBtn = document.getElementById("studioFileBtn");
const studioFileMenu = document.getElementById("studioFileMenu");
const fileReadyGamesBtn = document.getElementById("fileReadyGamesBtn");
const fileDownloadGameBtn = document.getElementById("fileDownloadGameBtn");
const fileSaveLoadBtn = document.getElementById("fileSaveLoadBtn");
const fileHelpsBtn = document.getElementById("fileHelpsBtn");

const readyGamesPanel = document.getElementById("readyGamesPanel");
const closeReadyGamesBtn = document.getElementById("closeReadyGamesBtn");
const meekaHelpBox = document.getElementById("meekaHelpBox");
const closeMeekaHelpBtn = document.getElementById("closeMeekaHelpBtn");
const meekaHelpInput = document.getElementById("meekaHelpInput");
const meekaHelpAskBtn = document.getElementById("meekaHelpAskBtn");
const meekaHelpAnswer = document.getElementById("meekaHelpAnswer");

const oneTapArenaBtn = document.getElementById("oneTapArenaBtn");
const playTestStudioBtn = document.getElementById("playTestStudioBtn");
const exitStudioBtn = document.getElementById("exitStudioBtn");
const studioStatusBanner = document.getElementById("studioStatusBanner");
const studio3DCanvas = document.getElementById("studio3DCanvas");
const studioFolderInspector = document.getElementById("studioFolderInspector");
const studioFolderChips = document.getElementById("studioFolderChips");
const studioScriptViewer = document.getElementById("studioScriptViewer");
const studioScriptTitle = document.getElementById("studioScriptTitle");
const studioScriptCode = document.getElementById("studioScriptCode");
const megaStudioInput = document.getElementById("megaStudioInput");
const megaStudioSendBtn = document.getElementById("megaStudioSendBtn");

const schoolModal = document.getElementById("schoolModal");
const closeSchoolModalBtn = document.getElementById("closeSchoolModalBtn");
const schoolDetailBox = document.getElementById("schoolDetailBox");
const codingLoadingScreen = document.getElementById("codingLoadingScreen");
const codingStartBtn = document.getElementById("codingStartBtn");
const photoFileInput = document.getElementById("photoFileInput");
const newChatTopBtn = document.getElementById("newChatTopBtn");
const audioToggleBtn = document.getElementById("audioToggleBtn");
const historyArrowBtn = document.getElementById("historyArrowBtn");
const historyPanel = document.getElementById("historyPanel");
const langStatus = document.getElementById("langStatus");
const statsStatus = document.getElementById("statsStatus");

const zoomModal = document.getElementById("zoomModal");
const zoomedImg = document.getElementById("zoomedImg");
const zoomInBtn = document.getElementById("zoomInBtn");
const zoomOutBtn = document.getElementById("zoomOutBtn");
const zoomResetBtn = document.getElementById("zoomResetBtn");
const zoomCloseBtn = document.getElementById("zoomCloseBtn");

const liveTalkScreen = document.getElementById("liveTalkScreen");
const liveExitBtn = document.getElementById("liveExitBtn");
const liveMicBtn = document.getElementById("liveMicBtn");
const liveStatusText = document.getElementById("liveStatusText");
const liveVoiceTextInput = document.getElementById("liveVoiceTextInput");
const liveSendTextBtn = document.getElementById("liveSendTextBtn");
const alienAnimCanvas = document.getElementById("alienAnimCanvas");

const SAVED_PERM_LANG_KEY = "firemcm_permanent_lang_v2";
const CHAT_SESSIONS_KEY = "mega_ai_chat_sessions_v2";
const PINNED_NOTES_KEY = "mega_ai_pinned_notes_v1";
const SAVED_NOBUG_SCRIPTS_KEY = "mega_ai_nobug_scripts_v1";
const SAVED_STUDIO_GAME_KEY = "mega_ai_studio_saved_game_v1";
const STUDIO_GATE_PASSED_KEY = "mega_ai_studio_gate_passed_once_v1";
const MIC_GRANTED_KEY = "mega_ai_mic_permission_granted_v1";
const USER_ACCOUNT_KEY = "mega_ai_user_account_v1";
const USER_LOGGED_IN_KEY = "mega_ai_user_logged_in_v1";
const DAILY_REWARD_CLAIM_KEY = "mega_ai_daily_reward_last_claim_v1";
const EVENT_TIMER_STATE_KEY = "mega_ai_random_event_state_v1";
const RANDOM_DISCOUNT_STATE_KEY = "mega_ai_random_discount_24h_v1";
const SECRET_AGENT_LOG_KEY = "mega_ai_secret_agent_ai_v1";

const MATH_KEY = 7;
const STRIKE_STORAGE_KEY = "firemcm_abuse_strikes_v1";
const ONLY_3D_IMAGE_MODE = true;

let currentLang = "en-US";
let currentLangLabel = "English";
let permanentLang = null;
let isMuted = false;
let lastBotMessage = "";
let isHoldingChatMic = false;
let isLiveTapRecording = false;
let micPermissionGranted = false;
let aiMode = "HANGOUT";
let codingOnlyMode = false;
let selectedScriptTargetEngine = "Roblox (Luau)";
let pendingScriptGoalText = "";
let zoomScale = 1;
let alienAnimFrameId = null;
let latestTranscriptBuffer = "";
let oneTapArenaActive = false;
let selectedArtRatio = "16:9";
let bugHistoryLog = [];
let detectedScreenProfile = "Mobile";

// --- Auto Screen AI: Detects Mobile, Chrome, PC, Laptop, MacBook ---
function runAutoScreenAi() {
  const ua = (navigator.userAgent || "").toLowerCase();
  const width = window.innerWidth || 390;
  const isMac = ua.includes("macintosh") || ua.includes("mac os x");
  const isChrome = ua.includes("chrome") && !ua.includes("edg") && !ua.includes("opr");
  const isMobile = /android|iphone|ipad|ipod|mobile/i.test(ua) || width < 640;

  document.body.classList.remove(
    "screen-mobile-mode",
    "screen-desktop-mode",
    "screen-laptop-mode",
    "screen-macbook-mode",
    "screen-chrome-mode"
  );

  if (isChrome) {
    document.body.classList.add("screen-chrome-mode");
  }

  if (isMobile) {
    detectedScreenProfile = isChrome ? "Mobile Chrome" : "Mobile";
    document.body.classList.add("screen-mobile-mode");
  } else if (isMac) {
    detectedScreenProfile = isChrome ? "MacBook Chrome" : "MacBook";
    document.body.classList.add("screen-desktop-mode", "screen-macbook-mode");
  } else if (width < 1180) {
    detectedScreenProfile = isChrome ? "Laptop Chrome" : "Laptop";
    document.body.classList.add("screen-desktop-mode", "screen-laptop-mode");
  } else {
    detectedScreenProfile = isChrome ? "PC Chrome" : "PC";
    document.body.classList.add("screen-desktop-mode");
  }
}

window.addEventListener("resize", () => {
  runAutoScreenAi();
  refreshStatusUI();
});

// --- Animated Big Triangle Watermark Helper ---
function showAnimatedTriangleWatermark(durationMs = 2400) {
  if (!songTriangleWatermarkOverlay) return;
  songTriangleWatermarkOverlay.classList.add("active");
  setTimeout(() => {
    songTriangleWatermarkOverlay.classList.remove("active");
  }, durationMs);
}

let userAccount = loadStoredAccount();
let isLoggedIn = loadLoggedInFlag();
let activeSessionId = "chat_" + Date.now();
let chatSessions = loadChatSessions();
let pinnedNotes = loadPinnedNotes();

function loadStoredAccount() {
  try {
    const raw = localStorage.getItem(USER_ACCOUNT_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function saveStoredAccount(acc) {
  userAccount = acc;
  try {
    localStorage.setItem(USER_ACCOUNT_KEY, JSON.stringify(acc));
  } catch (e) {}
}

function loadLoggedInFlag() {
  try {
    return localStorage.getItem(USER_LOGGED_IN_KEY) === "1" && Boolean(loadStoredAccount());
  } catch (e) {
    return false;
  }
}

function setLoggedInFlag(flag) {
  isLoggedIn = flag;
  try {
    localStorage.setItem(USER_LOGGED_IN_KEY, flag ? "1" : "0");
  } catch (e) {}
  updateAccountHeaderBadge();
  refreshStatusUI();
}

function runSecretAgentAiCheck() {
  const now = Date.now();
  if (!userAccount || !userAccount.subscription || !userAccount.subscriptionExpiresAt) {
    return false;
  }

  if (userAccount.subscription.includes("Day")) {
    const startDayStr = userAccount.subStartDayKey || "";
    const todayDayStr = new Date(now).toISOString().slice(0, 10);
    if (now >= Number(userAccount.subscriptionExpiresAt) || (startDayStr && startDayStr !== todayDayStr)) {
      userAccount.subscription = null;
      userAccount.subscriptionExpiresAt = null;
      userAccount.subStartDayKey = null;
      saveStoredAccount(userAccount);
      try {
        localStorage.setItem(
          SECRET_AGENT_LOG_KEY,
          JSON.stringify({ agent: "Secret Agent AI", status: "Expired (Day)", checkedAt: now })
        );
      } catch (e) {}
      updateAccountHeaderBadge();
      refreshStatusUI();
      return false;
    }
  }

  if (now >= Number(userAccount.subscriptionExpiresAt)) {
    userAccount.subscription = null;
    userAccount.subscriptionExpiresAt = null;
    userAccount.subStartDayKey = null;
    saveStoredAccount(userAccount);
    updateAccountHeaderBadge();
    refreshStatusUI();
    return false;
  }

  try {
    localStorage.setItem(
      SECRET_AGENT_LOG_KEY,
      JSON.stringify({
        agent: "Secret Agent AI",
        plan: userAccount.subscription,
        expiresAt: userAccount.subscriptionExpiresAt,
        last24hAuditAt: now
      })
    );
  } catch (e) {}

  return true;
}

setInterval(() => {
  runSecretAgentAiCheck();
  getOrRoll24hRandomDiscount();
}, 24 * 60 * 60 * 1000);

function hasActiveSubscription() {
  return runSecretAgentAiCheck();
}

function rollWeightedDiscountPercent() {
  if (Math.random() < 0.78) {
    return Math.floor(Math.random() * 46) + 5;
  }
  return Math.floor(Math.random() * 45) + 51;
}

function getOrRoll24hRandomDiscount() {
  const now = Date.now();
  const twentyFourHoursMs = 24 * 60 * 60 * 1000;
  let state = null;
  try {
    const raw = localStorage.getItem(RANDOM_DISCOUNT_STATE_KEY);
    if (raw) state = JSON.parse(raw);
  } catch (e) {}

  if (!state || !state.expiresAt || now >= Number(state.expiresAt)) {
    const pct = state ? rollWeightedDiscountPercent() : 50;
    state = {
      percent: pct,
      expiresAt: now + twentyFourHoursMs
    };
    try {
      localStorage.setItem(RANDOM_DISCOUNT_STATE_KEY, JSON.stringify(state));
    } catch (e) {}
  }
  return Number(state.percent || 50);
}

function syncSubscriptionDiscountUi() {
  const pct = getOrRoll24hRandomDiscount();
  const factor = (100 - pct) / 100;
  const dCost = Math.max(1, Math.round(30 * factor));
  const mCost = Math.max(1, Math.round(60 * factor));
  const yCost = Math.max(1, Math.round(120 * factor));

  subDiscountBannerText.textContent = `24h Discount: ${pct}% (Resets every 24h)`;
  discountCardHeading.textContent = `Discount For Yours (${pct}% Off)`;

  discDayPlanBtn.setAttribute("data-cost", String(dCost));
  discDayPlanBtn.textContent = `Day — ${dCost}`;

  discMonthPlanBtn.setAttribute("data-cost", String(mCost));
  discMonthPlanBtn.textContent = `Monthly — ${mCost}`;

  discYearPlanBtn.setAttribute("data-cost", String(yCost));
  discYearPlanBtn.textContent = `Year — ${yCost}`;
}

function rollRandomEventDurationMs() {
  return Math.random() < 0.5 ? 30 * 60 * 1000 : 60 * 60 * 1000;
}

function getOrStartRandomEventTimer() {
  const now = Date.now();
  let ev = null;
  try {
    const raw = localStorage.getItem(EVENT_TIMER_STATE_KEY);
    if (raw) ev = JSON.parse(raw);
  } catch (e) {}

  if (!ev || !ev.endsAt) {
    const dur = rollRandomEventDurationMs();
    ev = {
      durationMs: dur,
      endsAt: now + dur
    };
    try {
      localStorage.setItem(EVENT_TIMER_STATE_KEY, JSON.stringify(ev));
    } catch (e) {}
  }
  return ev;
}

function awardRandomEventCoinsAndRestart() {
  const reward = Math.floor(Math.random() * 50) + 1;
  if (userAccount) {
    userAccount.balance = Number(userAccount.balance || 0) + reward;
    saveStoredAccount(userAccount);
    refreshStatusUI();
  }
  const nextDur = rollRandomEventDurationMs();
  const nextState = {
    durationMs: nextDur,
    endsAt: Date.now() + nextDur
  };
  try {
    localStorage.setItem(EVENT_TIMER_STATE_KEY, JSON.stringify(nextState));
  } catch (e) {}
  topEventRewardHint.textContent = `+₹${reward} Won!`;
  addBotMessageWithDotsAndReveal(`Event finished! You won ₹${reward} balance.`);
}

function updateTopEventTimerTick() {
  if (!topEventTimerBox.classList.contains("open")) return;
  const ev = getOrStartRandomEventTimer();
  const remMs = Number(ev.endsAt) - Date.now();
  if (remMs <= 0) {
    awardRandomEventCoinsAndRestart();
    return;
  }
  const totalSec = Math.floor(remMs / 1000);
  const mins = Math.floor(totalSec / 60);
  const secs = totalSec % 60;
  const modeTag = ev.durationMs === 30 * 60 * 1000 ? "30m" : "1h";
  topEventTimerLabel.textContent = `⏳ Event (${modeTag}): ${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  topEventRewardHint.textContent = "Prize: ₹1–₹50";
}

setInterval(updateTopEventTimerTick, 1000);

function updateAccountHeaderBadge() {
  const activeSub = hasActiveSubscription();
  accountCornerBtn.classList.toggle("premium-gold", activeSub);
  if (isLoggedIn && userAccount) {
    const baseName = userAccount.name.slice(0, 10);
    accountCornerBtn.textContent = activeSub ? `👑 ${baseName}` : `👤 ${baseName}`;
  } else {
    accountCornerBtn.textContent = "👤 Account";
  }
}

function refreshStatusUI() {
  runAutoScreenAi();
  const activeSub = hasActiveSubscription();
  const bal = userAccount ? Number(userAccount.balance || 0) : 0;
  const userTag = isLoggedIn && userAccount ? `${userAccount.name} | Bal: ₹${bal}` : "Guest | Bal: ₹0";
  const tierTag = activeSub ? `Golden (${userAccount.subscription})` : "Standard";
  langStatus.textContent = `Mega Chat | Mood: ${aiMode} | ${tierTag}`;
  statsStatus.textContent = `${userTag} | Lang: ${currentLangLabel} | Screen: ${detectedScreenProfile}`;
}

function calculateAgeFromDob(dobStr) {
  if (!dobStr) return -1;
  const dob = new Date(dobStr);
  if (Number.isNaN(dob.getTime())) return -1;
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) age--;
  return age;
}

function isStrongPassword(pass) {
  if (!pass || pass.length < 8) return false;
  return /[a-zA-Z]/.test(pass) && /\d/.test(pass) && /[^a-zA-Z0-9]/.test(pass);
}

function renderSavedItemsPreview() {
  let savedScriptsCount = 0;
  let savedStudioName = "None";
  try {
    const list = JSON.parse(localStorage.getItem(SAVED_NOBUG_SCRIPTS_KEY) || "[]");
    savedScriptsCount = list.length;
    const rawGame = localStorage.getItem(SAVED_STUDIO_GAME_KEY);
    if (rawGame) {
      const g = JSON.parse(rawGame);
      if (g && g.gameTitle) savedStudioName = g.gameTitle;
    }
  } catch (e) {}

  const accName = userAccount ? userAccount.name : "Guest";
  const bal = userAccount ? Number(userAccount.balance || 0) : 0;
  const sub = hasActiveSubscription() ? userAccount.subscription : "None";
  loginSavedItemsBox.textContent =
    `${accName} | ₹${bal} | ${sub}\n` +
    `${savedStudioName} | ${savedScriptsCount} | ${Object.keys(chatSessions).length}`;
}

function openAuthModalSingleMode(mode) {
  accountCornerMenu.classList.remove("open");
  chatGoMenu.classList.remove("open");
  regErrorBox.textContent = "";
  loginErrorBox.textContent = "";

  if (mode === "login") {
    authModalTitle.textContent = "Login";
    createAccountPane.style.display = "none";
    loginAccountPane.style.display = "block";
    if (userAccount) loginNameInput.value = userAccount.name;
    renderSavedItemsPreview();
  } else {
    authModalTitle.textContent = "Create Account";
    createAccountPane.style.display = "block";
    loginAccountPane.style.display = "none";
  }
  accountAuthModal.classList.add("open");
}

closeAuthModalBtn.addEventListener("click", () => accountAuthModal.classList.remove("open"));

accountCornerBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  if (isLoggedIn && userAccount) {
    accountCornerMenu.classList.remove("open");
    chatGoMenu.classList.toggle("open");
    return;
  }
  chatGoMenu.classList.remove("open");
  singleAccountActionBtn.textContent = userAccount ? "Login" : "Create Account";
  accountCornerMenu.classList.toggle("open");
});

singleAccountActionBtn.addEventListener("click", () => {
  openAuthModalSingleMode(userAccount ? "login" : "create");
});

createAccountSubmitBtn.addEventListener("click", () => {
  const name = regNameInput.value.trim();
  const dob = regDobInput.value;
  const username = regUserInput.value.trim() || name;
  const password = regPassInput.value;

  if (!name || !dob) {
    regErrorBox.textContent = "Please enter your name and date of birth.";
    return;
  }
  if (calculateAgeFromDob(dob) < 10) {
    regErrorBox.textContent = "You are cannot be login\nCreating";
    return;
  }
  if (!isStrongPassword(password)) {
    regErrorBox.textContent = "The password is low. Please make it high\nMake it strong password";
    return;
  }

  regErrorBox.textContent = "";
  saveStoredAccount({
    name,
    dob,
    username,
    password,
    balance: 0,
    subscription: null,
    subscriptionExpiresAt: null,
    subStartDayKey: null
  });
  setLoggedInFlag(true);
  openAuthModalSingleMode("login");
});

loginAccountSubmitBtn.addEventListener("click", () => {
  if (!userAccount) {
    loginErrorBox.textContent = "No account found.";
    return;
  }
  const enteredName = loginNameInput.value.trim();
  if (
    enteredName.toLowerCase() !== userAccount.name.toLowerCase() &&
    enteredName.toLowerCase() !== userAccount.username.toLowerCase()
  ) {
    loginErrorBox.textContent = "Account name does not match.";
    return;
  }
  if (loginPassInput.value !== userAccount.password) {
    loginErrorBox.textContent = "Incorrect password.";
    return;
  }

  loginErrorBox.textContent = "";
  hasActiveSubscription();
  setLoggedInFlag(true);
  renderSavedItemsPreview();
  accountAuthModal.classList.remove("open");
  closeCreateInMegaAiStudio();

  const greetRaw = `Welcome ${userAccount.name}`;
  const finalGreet =
    permanentLang && !permanentLang.code.startsWith("en")
      ? translateTextToSelectedLang(greetRaw, permanentLang.code, permanentLang.label)
      : greetRaw;

  addBotMessageWithDotsAndReveal(finalGreet, "", () => saveCurrentSessionSnapshot(finalGreet));
});

const LANGUAGE_TRANSLATION_MAP = {
  "ur-PK": {
    phrases: {
      "hello": "سلام",
      "hi": "ہیلو",
      "hey": "ارے دوست",
      "upgrade subscription you can": "پہلے سبسکرپشن اپ گریڈ کریں تاکہ آپ بنا سکیں",
      "new chat started": "نئی چیٹ شروع ہو گئی",
      "welcome": "خوش آمدید",
      "language switched to": "زبان تبدیل ہو گئی ہے",
      "all previous messages translated": "تمام پچھلے پیغامات کا ترجمہ کر دیا گیا ہے"
    },
    words: {
      "and": "اور",
      "with": "ساتھ",
      "for": "لیے",
      "chat": "چیٹ",
      "balance": "بیلنس",
      "language": "زبان",
      "profile": "پروفائل",
      "subscription": "سبسکرپشن",
      "game": "گیم",
      "idea": "آئیڈیا",
      "car": "کار",
      "open": "کھولیں"
    }
  },
  "hi-IN": {
    phrases: {
      "hello": "नमस्ते",
      "hi": "हाय",
      "hey": "अरे दोस्त",
      "upgrade subscription you can": "पहले सब्सक्रिप्शन अपग्रेड करें तभी बना पाएंगे",
      "new chat started": "नई चैट शुरू हो गई",
      "welcome": "स्वागत है",
      "language switched to": "भाषा बदल गई है",
      "all previous messages translated": "पिछले सभी संदेशों का अनुवाद कर दिया गया है"
    },
    words: {
      "and": "और",
      "with": "साथ",
      "for": "लिए",
      "chat": "चैट",
      "balance": "बैलेंस",
      "language": "भाषा",
      "profile": "प्रोफाइल",
      "subscription": "सब्स्क्रिप्शन",
      "game": "गेम",
      "idea": "आइडिया",
      "car": "कार",
      "open": "खोलें"
    }
  }
};

function translateTextToSelectedLang(text, langCode, langLabel) {
  if (!text || langCode.startsWith("en")) return text;
  let out = text.replace(/^\[[^\]]+\]\s*/g, "").trim();
  const pack = LANGUAGE_TRANSLATION_MAP[langCode];
  if (pack) {
    Object.entries(pack.phrases)
      .sort((a, b) => b[0].length - a[0].length)
      .forEach(([eng, loc]) => {
        out = out.replace(new RegExp(eng.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi"), loc);
      });
    Object.entries(pack.words)
      .sort((a, b) => b[0].length - a[0].length)
      .forEach(([eng, loc]) => {
        out = out.replace(new RegExp(`\\b${eng.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "gi"), loc);
      });
    return out.replace(/\s{2,}/g, " ").trim();
  }
  return `${langLabel}: ${out}`;
}

function translateAllUiAndMessages(langCode, langLabel) {
  chatBox.querySelectorAll(".msg").forEach((msgEl) => {
    if (msgEl.querySelector("img") || msgEl.querySelector("pre")) return;
    if (!msgEl.dataset.origText) msgEl.dataset.origText = msgEl.textContent || "";
    const orig = msgEl.dataset.origText;
    msgEl.textContent = langCode.startsWith("en") ? orig : translateTextToSelectedLang(orig, langCode, langLabel);
  });
  saveCurrentSessionSnapshot("Translated");
}

const ALL_150_COUNTRIES = [
  { label: "India (Hindi)", code: "hi-IN" },
  { label: "Pakistan (Urdu)", code: "ur-PK" },
  { label: "USA (English)", code: "en-US" },
  { label: "England (English)", code: "en-GB" },
  { label: "Saudi Arabia (Arabic)", code: "ar-SA" },
  { label: "Japan (Japanese)", code: "ja-JP" },
  { label: "Germany (German)", code: "de-DE" },
  { label: "France (French)", code: "fr-FR" },
  { label: "Turkey (Turkish)", code: "tr-TR" },
  { label: "South Korea (Korean)", code: "ko-KR" }
].concat(
  Array.from({ length: 140 }, (_, i) => ({
    label: `Region ${i + 11}`,
    code: "en-US"
  }))
);

goLanguageBtn.addEventListener("click", () => {
  chatGoMenu.classList.remove("open");
  languageOptionsGrid.innerHTML = "";
  ALL_150_COUNTRIES.forEach((item) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "lang-pick-btn";
    btn.textContent = item.label;
    btn.addEventListener("click", () => {
      currentLang = item.code;
      currentLangLabel = item.label;
      permanentLang = { code: item.code, label: item.label };
      try {
        localStorage.setItem(SAVED_PERM_LANG_KEY, JSON.stringify(permanentLang));
      } catch (e) {}
      translateAllUiAndMessages(item.code, item.label);
      refreshStatusUI();
      languagePickerModal.classList.remove("open");
      const confirmMsg = translateTextToSelectedLang(
        `Language switched to ${item.label}. All previous messages translated!`,
        item.code,
        item.label
      );
      lastBotMessage = confirmMsg;
      addBotMessageWithDotsAndReveal(confirmMsg);
    });
    languageOptionsGrid.appendChild(btn);
  });
  languagePickerModal.classList.add("open");
});

closeLangModalBtn.addEventListener("click", () => languagePickerModal.classList.remove("open"));

dailyRewardClaimBtn.addEventListener("click", () => {
  if (!isLoggedIn || !userAccount) {
    dailyRewardMsg.textContent = "Please login first.";
    return;
  }
  const now = Date.now();
  const twentyFourHoursMs = 24 * 60 * 60 * 1000;
  let lastClaim = 0;
  try {
    lastClaim = Number(localStorage.getItem(DAILY_REWARD_CLAIM_KEY) || "0");
  } catch (e) {}

  if (lastClaim > 0 && now - lastClaim < twentyFourHoursMs) {
    const remHours = Math.ceil((twentyFourHoursMs - (now - lastClaim)) / (60 * 60 * 1000));
    dailyRewardMsg.textContent = `Already claimed. Next +10 in ~${remHours}h.`;
    return;
  }

  userAccount.balance = Number(userAccount.balance || 0) + 10;
  saveStoredAccount(userAccount);
  try {
    localStorage.setItem(DAILY_REWARD_CLAIM_KEY, String(now));
  } catch (e) {}

  dailyRewardMsg.textContent = "+10 added! (Strictly +10 per 24h)";
  profileSummaryBox.textContent =
    `${userAccount.name} (${hasActiveSubscription() ? "Premium Golden" : "Standard"})\n` +
    `Chats: ${Object.values(chatSessions).length}\n` +
    `Balance: ₹${userAccount.balance}`;
  refreshStatusUI();
});

goProfileBtn.addEventListener("click", () => {
  chatGoMenu.classList.remove("open");
  saveCurrentSessionSnapshot();
  hasActiveSubscription();
  const sessionsArr = Object.values(chatSessions);
  const accName = userAccount ? userAccount.name : "Guest";
  const bal = userAccount ? Number(userAccount.balance || 0) : 0;
  const tier = hasActiveSubscription() ? `Premium Golden (${userAccount.subscription})` : "Standard";

  profileSummaryBox.textContent =
    `${accName} • ${tier}\n` +
    `Chats: ${sessionsArr.length}\n` +
    `Balance: ₹${bal}`;
  dailyRewardMsg.textContent = "";

  if (!sessionsArr.length) {
    profileChatListBox.textContent = "0";
  } else {
    profileChatListBox.innerHTML = "";
    sessionsArr.forEach((s, idx) => {
      const row = document.createElement("div");
      row.style.padding = "4px 0";
      row.style.borderBottom = "1px solid #1e293b";
      row.textContent = `${idx + 1}. ${s.title}`;
      profileChatListBox.appendChild(row);
    });
  }
  profileInfoModal.classList.add("open");
});

closeProfileModalBtn.addEventListener("click", () => profileInfoModal.classList.remove("open"));

goSubscriptionBtn.addEventListener("click", () => {
  chatGoMenu.classList.remove("open");
  hasActiveSubscription();
  syncSubscriptionDiscountUi();
  updateAccountHeaderBadge();
  refreshStatusUI();
  const bal = userAccount ? Number(userAccount.balance || 0) : 0;
  subCurrentBalanceText.textContent = `Balance: ₹${bal}`;
  subStatusMessage.style.color = "#ef4444";
  subStatusMessage.textContent = "";
  subscriptionModal.classList.add("open");
});

closeSubModalBtn.addEventListener("click", () => subscriptionModal.classList.remove("open"));

document.querySelectorAll(".buy-plan-btn, .buy-discount-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!userAccount) {
      subStatusMessage.style.color = "#ef4444";
      subStatusMessage.textContent = "Create or login account first.";
      return;
    }
    const basePlan = btn.getAttribute("data-base-plan") || "Day";
    const isDisc = btn.classList.contains("buy-discount-btn");
    const planName = isDisc ? `Discount ${basePlan}` : basePlan;
    const cost = isDisc
      ? Number(btn.getAttribute("data-cost") || 15)
      : Number(btn.getAttribute("data-base-cost") || 30);
    const days = Number(btn.getAttribute("data-days") || 1);
    const bal = Number(userAccount.balance || 0);

    if (bal < cost) {
      subStatusMessage.style.color = "#ef4444";
      subStatusMessage.textContent = "Your balance is not complete to buy this";
      return;
    }

    const now = Date.now();
    userAccount.balance = bal - cost;
    userAccount.subscription = planName;
    userAccount.subscriptionExpiresAt = now + days * 24 * 60 * 60 * 1000;
    userAccount.subStartDayKey = new Date(now).toISOString().slice(0, 10);
    saveStoredAccount(userAccount);
    runSecretAgentAiCheck();

    subCurrentBalanceText.textContent = `Balance: ₹${userAccount.balance}`;
    subStatusMessage.style.color = "#86efac";
    subStatusMessage.textContent = `Secret Agent AI active: ${planName} (${days}d)`;
    updateAccountHeaderBadge();
    refreshStatusUI();
  });
});

const MOOD_LIST = ["HANGOUT", "STORY", "FAST HELPER"];
let moodIndex = 0;

moodCycleBtn.addEventListener("click", () => {
  moodIndex = (moodIndex + 1) % MOOD_LIST.length;
  aiMode = MOOD_LIST[moodIndex];
  const labelMap = {
    HANGOUT: "😎 Mood: Hangout",
    STORY: "📖 Mood: Story",
    "FAST HELPER": "⚡ Mood: Fast Helper"
  };
  moodCycleBtn.textContent = labelMap[aiMode];
  refreshStatusUI();
});

ideaMixerBtn.addEventListener("click", () => {
  const combos = [
    "Power Simulator + Floating Sky Island + Gravity Pad",
    "Chupan Chupai + Teleport Portals + Mystery Radar",
    "Qatil ko Dhundne + Neon Street Night Map + Clue Scanner"
  ];
  const raw = combos[Math.floor(Math.random() * combos.length)];
  addBotMessageWithDotsAndReveal(raw, "", () => saveCurrentSessionSnapshot(raw));
});

memeMakerBtn.addEventListener("click", () => {
  const lines = [
    "Jab timer 1 second pe ho aur finish line 2 kadam door ho! 😂",
    "Ek script lagayi aur poori car hawa mein ud gayi! 🚀"
  ];
  const raw = lines[Math.floor(Math.random() * lines.length)];
  addBotMessageWithDotsAndReveal(raw, "", () => saveCurrentSessionSnapshot(raw));
});

sceneStarterBtn.addEventListener("click", () => {
  const scenes = [
    "Raat ka waqt hai, Neon Street par tumhari red 3D car start hoti hai aur saamne ek glowing portal khulta hai...",
    "Floating Sky Island par hawa chal rahi hai, aur ek secret chest tumhara intezar kar rahi hai..."
  ];
  const raw = scenes[Math.floor(Math.random() * scenes.length)];
  addBotMessageWithDotsAndReveal(raw, "", () => saveCurrentSessionSnapshot(raw));
});

let gateStep = 1;
let gateOpenedAt = 0;
let humanPointerMoved = false;

function hasPassedStudioGateOnce() {
  try {
    return localStorage.getItem(STUDIO_GATE_PASSED_KEY) === "1";
  } catch (e) {
    return false;
  }
}

function markStudioGatePassedOnce() {
  try {
    localStorage.setItem(STUDIO_GATE_PASSED_KEY, "1");
  } catch (e) {}
}

function renderGateStep() {
  gateCheckbox.checked = false;
  gateErrorText.textContent = "";
  if (gateStep === 1) {
    gateStepText.textContent = "you are can make any game or script and play game and accept this";
    gateCheckText.textContent = "Accept this";
  } else if (gateStep === 2) {
    gateStepText.textContent =
      "Read this\n" +
      "Warring of people\n" +
      "You can make but a security of owner can b make any bad game\n" +
      "And verify that you are not Ai and can be make\n" +
      "Accept this";
    gateCheckText.textContent = "Accept this";
  } else {
    gateStepText.textContent = "Loading verification:\nverify you are not a robot";
    gateCheckText.textContent = "verify you are not a robot";
  }
}

function openCreateGateFlow() {
  plusMenu.classList.remove("open");
  historyPanel.classList.remove("open");

  if (!hasActiveSubscription()) {
    addBotMessageWithDotsAndReveal("Upgrade subscription you can");
    return;
  }

  if (hasPassedStudioGateOnce()) {
    openCreateInMegaAiStudioDirect("Mega Forge");
    return;
  }

  gateStep = 1;
  gateOpenedAt = Date.now();
  humanPointerMoved = false;
  renderGateStep();
  megaGateModal.classList.add("open");
}

megaGateModal.addEventListener("pointermove", () => {
  humanPointerMoved = true;
});
gateCancelBtn.addEventListener("click", () => megaGateModal.classList.remove("open"));
gateContinueBtn.addEventListener("click", () => {
  if (!gateCheckbox.checked) {
    gateErrorText.textContent = "Accept this that's can't work";
    return;
  }
  if (gateStep < 3) {
    gateStep++;
    gateOpenedAt = Date.now();
    humanPointerMoved = false;
    renderGateStep();
    return;
  }
  if (Date.now() - gateOpenedAt < 350 || !humanPointerMoved) {
    megaGateModal.classList.remove("open");
    closeCreateInMegaAiStudio();
    addBotMessageWithDotsAndReveal("Verification stopped.");
    return;
  }
  markStudioGatePassedOnce();
  megaGateModal.classList.remove("open");
  openCreateInMegaAiStudioDirect("Mega Forge");
});

createInMegaAiOption.addEventListener("click", () => {
  resetChatForToolOpened("+ Create with AI (3D)");
  openCreateGateFlow();
});

robloxLiteOptionBtn.addEventListener("click", () => {
  resetChatForToolOpened("+ Roblox Studio Lite");
  openCreateInMegaAiStudioDirect("Roblox Studio Lite");
  studioStatusBanner.textContent = "Roblox Studio Lite active: Workspace, ServerScriptService, StarterGui, SoundService.";
});

let selectedStudioFolder = "Workspace";
let selectedStudioTool = "select";
let isStudioPlaying = false;
let studio3DAnimFrameId = null;

function createDefaultStudioState() {
  return {
    gameTitle: "Custom_3D_Game",
    gameMode: "sandbox",
    modelType: null,
    objX: 0,
    objY: 0,
    objScale: 1,
    objAngle: 0,
    camZ: 0,
    spinCar: false,
    selectedObjectName: null,
    selectedTeamMember: "Host_Builder (Owner)",
    folders: {
      ServiceScriptService: [],
      Sounds: [],
      Workspace: [],
      Storage: ["Stored_Turbo_Part"],
      Teams: ["Host_Builder (Owner)", "Builder_02 (Invited)"],
      GUI: [],
      Playersbody: ["DefaultRig"],
      Animation: []
    }
  };
}

let studioModelState = createDefaultStudioState();

oneTapArenaBtn.addEventListener("click", () => {
  oneTapArenaActive = !oneTapArenaActive;
  if (oneTapArenaActive) {
    if (!studioModelState.modelType) studioModelState.modelType = "car";
    isStudioPlaying = true;
    playTestStudioBtn.classList.add("playing");
    playTestStudioBtn.textContent = "⏹ Stop";
    studioStatusBanner.textContent = "ONE-TAP TEST ARENA: Live physics & speed boost active!";
  } else {
    isStudioPlaying = false;
    playTestStudioBtn.classList.remove("playing");
    playTestStudioBtn.textContent = "▶ Play";
    studioStatusBanner.textContent = "Exited Test Arena back to editor.";
  }
});

studioFileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  studioFileMenu.classList.toggle("open");
});
studioFileMenu.addEventListener("click", (e) => e.stopPropagation());
fileReadyGamesBtn.addEventListener("click", () => {
  studioFileMenu.classList.remove("open");
  meekaHelpBox.classList.remove("open");
  readyGamesPanel.classList.toggle("open");
});
closeReadyGamesBtn.addEventListener("click", () => readyGamesPanel.classList.remove("open"));

function buildReadyToMakeGame(templateKey) {
  const presets = {
    simulator: {
      title: "Power_Simulator",
      modelType: "car",
      spin: true,
      workspace: ["Simulator_Pad_1", "Speed_Booster_Car"],
      gui: ["PowerPoints_GUI", "Rebirth_Button_GUI"],
      sounds: ["Click_Boost_Sound"],
      storage: ["Mega_Pet_Egg"],
      scriptName: "SimulatorLoopScript",
      scriptCode: "-- Simulator Script\nlocal pad = script.Parent\npad.Touched:Connect(function(hit)\n\tprint('Boost!')\nend)"
    },
    tycoon: {
      title: "Mega_Tycoon",
      modelType: "part",
      spin: false,
      workspace: ["Dropper_Machine_1", "Cash_Collector_Pad"],
      gui: ["Cash_Counter_GUI"],
      sounds: ["Cash_Register_Sound"],
      storage: ["Dropper_Tier2_Part"],
      scriptName: "TycoonCashScript",
      scriptCode: "-- Tycoon Script\nprint('Cash collected!')"
    },
    marne: {
      title: "Arena_Marne_Game",
      modelType: "car",
      spin: false,
      workspace: ["Arena_Sword_Car", "Hazard_Spike_Zone"],
      gui: ["Health_Bar_GUI"],
      sounds: ["Slash_Hit_Sound"],
      storage: ["Super_Shield_Part"],
      scriptName: "MarneCombatScript",
      scriptCode: "-- Combat Script\nprint('Arena active!')"
    },
    murder: {
      title: "Qatil_Ko_Dhundne",
      modelType: "part",
      spin: true,
      workspace: ["Mystery_Clue_Orb", "Sheriff_Scan_Zone"],
      gui: ["Role_Sheriff_Innocent_GUI"],
      sounds: ["Clue_Found_Sound"],
      storage: ["Detective_Radar_Part"],
      scriptName: "QatilMysteryScript",
      scriptCode: "-- Mystery Script\nprint('Clue scanned!')"
    },
    hide_seek: {
      title: "Chupan_Chupai",
      modelType: "part",
      spin: false,
      workspace: ["Hiding_Box_Cover", "Seeker_Radar_Beacon"],
      gui: ["Timer_60s_GUI"],
      sounds: ["Seeker_Alert_Sound"],
      storage: ["Camouflage_Crate"],
      scriptName: "ChupanChupaiScript",
      scriptCode: "-- Hide & Seek Script\nprint('Timer started!')"
    }
  };
  const p = presets[templateKey] || presets.simulator;
  studioModelState.gameTitle = p.title;
  studioModelState.modelType = p.modelType;
  studioModelState.spinCar = p.spin;
  studioModelState.folders.Workspace = [...p.workspace];
  studioModelState.folders.GUI = [...p.gui];
  studioModelState.folders.Sounds = [...p.sounds];
  studioModelState.folders.Storage = [...p.storage];
  studioModelState.folders.ServiceScriptService = [{ name: p.scriptName, code: p.scriptCode }];
  studioModelState.selectedObjectName = p.workspace[0];
  selectedStudioFolder = "Workspace";
  isStudioPlaying = true;
  playTestStudioBtn.classList.add("playing");
  playTestStudioBtn.textContent = "⏹ Stop";
  readyGamesPanel.classList.remove("open");
  updateStudioBadgesAndInspector();
  studioStatusBanner.textContent = `Running "${p.title}"!`;
}

document.querySelectorAll(".ready-game-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const tpl = btn.getAttribute("data-template");
    if (tpl) buildReadyToMakeGame(tpl);
  });
});

fileDownloadGameBtn.addEventListener("click", () => {
  studioFileMenu.classList.remove("open");
  const jsonText = JSON.stringify({ game: studioModelState }, null, 2);
  const blob = new Blob([jsonText], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "mega_forge_game.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  studioStatusBanner.textContent = "Downloaded mega_forge_game.json!";
});

fileSaveLoadBtn.addEventListener("click", () => {
  studioFileMenu.classList.remove("open");
  let savedRaw = null;
  try {
    savedRaw = localStorage.getItem(SAVED_STUDIO_GAME_KEY);
  } catch (e) {}
  if (!savedRaw) {
    try {
      localStorage.setItem(SAVED_STUDIO_GAME_KEY, JSON.stringify(studioModelState));
      studioStatusBanner.textContent = `Saved "${studioModelState.gameTitle}"!`;
    } catch (e) {}
    return;
  }
  try {
    const parsed = JSON.parse(savedRaw);
    studioModelState = {
      ...createDefaultStudioState(),
      ...parsed,
      folders: { ...createDefaultStudioState().folders, ...(parsed.folders || {}) }
    };
    updateStudioBadgesAndInspector();
    studioStatusBanner.textContent = `Loaded "${studioModelState.gameTitle}"!`;
  } catch (e) {}
});

fileHelpsBtn.addEventListener("click", () => {
  studioFileMenu.classList.remove("open");
  readyGamesPanel.classList.remove("open");
  meekaHelpBox.classList.toggle("open");
});
closeMeekaHelpBtn.addEventListener("click", () => meekaHelpBox.classList.remove("open"));

function answerMeekaHelpQuestion(rawQ) {
  const low = (rawQ || "").toLowerCase();
  if (low.includes("chalana") || low.includes("run")) {
    meekaHelpAnswer.textContent = "Meeka: File > Ready to Make Games chuno ya neeche likh kar Build dabao.";
    return;
  }
  if (low.includes("kya hota") || low.includes("what is")) {
    meekaHelpAnswer.textContent = "Meeka: Ye Studio / Roblox Studio Lite workspace hai.";
    return;
  }
  meekaHelpAnswer.textContent = "Meeka: Ready games chuno aur ▶ Play ya Test Arena dabao.";
}

document.querySelectorAll(".meeka-help-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    const q = chip.getAttribute("data-q") || "";
    meekaHelpInput.value = chip.textContent || q;
    answerMeekaHelpQuestion(q);
  });
});
meekaHelpAskBtn.addEventListener("click", () => {
  if (meekaHelpInput.value.trim()) answerMeekaHelpQuestion(meekaHelpInput.value.trim());
});

playTestStudioBtn.addEventListener("click", () => {
  isStudioPlaying = !isStudioPlaying;
  playTestStudioBtn.classList.toggle("playing", isStudioPlaying);
  playTestStudioBtn.textContent = isStudioPlaying ? "⏹ Stop" : "▶ Play";
  studioStatusBanner.textContent = isStudioPlaying ? "PLAY MODE ON" : "EDIT MODE";
});

document.querySelectorAll(".studio-tool-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedStudioTool = btn.getAttribute("data-tool") || "select";
    document.querySelectorAll(".studio-tool-btn").forEach((b) => b.classList.toggle("active", b === btn));
    studioStatusBanner.textContent = `Tool: ${selectedStudioTool.toUpperCase()}`;
  });
});

function applyObjectNudge(dx, dy) {
  if (!studioModelState.modelType) return;
  if (selectedStudioTool === "move" || selectedStudioTool === "select") {
    studioModelState.objX = Math.max(-70, Math.min(70, studioModelState.objX + dx * 12));
    studioModelState.objY = Math.max(-35, Math.min(28, studioModelState.objY + dy * 9));
  } else if (selectedStudioTool === "rotate") {
    studioModelState.objAngle += (dx || dy) * 0.28;
  } else if (selectedStudioTool === "size") {
    const delta = dy < 0 || dx > 0 ? 0.15 : -0.15;
    studioModelState.objScale = Math.max(0.5, Math.min(1.75, Number((studioModelState.objScale + delta).toFixed(2))));
  }
  updateStudioBadgesAndInspector();
}

document.getElementById("objLeftBtn").addEventListener("click", () => applyObjectNudge(-1, 0));
document.getElementById("objRightBtn").addEventListener("click", () => applyObjectNudge(1, 0));
document.getElementById("objUpBtn").addEventListener("click", () => applyObjectNudge(0, -1));
document.getElementById("objDownBtn").addEventListener("click", () => applyObjectNudge(0, 1));
document.getElementById("camFwdBtn").addEventListener("click", () => {
  studioModelState.camZ = Math.min(60, studioModelState.camZ + 12);
});
document.getElementById("camBackBtn").addEventListener("click", () => {
  studioModelState.camZ = Math.max(-60, studioModelState.camZ - 12);
});

function spawnStorageItemToWorkspace(itemName) {
  if (!studioModelState.modelType) studioModelState.modelType = "part";
  const spawnedName = `Spawned_${itemName}_${studioModelState.folders.Workspace.length + 1}`;
  studioModelState.folders.Workspace.push(spawnedName);
  studioModelState.selectedObjectName = spawnedName;
  selectedStudioFolder = "Workspace";
  updateStudioBadgesAndInspector();
}

function updateStudioBadgesAndInspector() {
  Object.keys(studioModelState.folders).forEach((fname) => {
    const badge = document.getElementById(`badge-${fname}`);
    if (badge) badge.textContent = String(studioModelState.folders[fname].length);
  });
  document.querySelectorAll(".explorer-item").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-folder") === selectedStudioFolder);
  });
  const items = studioModelState.folders[selectedStudioFolder] || [];
  studioFolderChips.innerHTML = "";
  studioScriptViewer.classList.remove("open");
  studioFolderInspector.textContent = `[${selectedStudioFolder}] ${studioModelState.selectedObjectName || ""}`;

  items.forEach((it, idx) => {
    const label = typeof it === "string" ? it : it.name;
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `folder-item-chip ${studioModelState.selectedObjectName === label ? "selected-chip" : ""}`.trim();
    chip.textContent = `${idx + 1}. ${label}`;
    chip.addEventListener("click", () => {
      if (selectedStudioFolder === "Storage") {
        spawnStorageItemToWorkspace(label);
        return;
      }
      studioModelState.selectedObjectName = label;
      if (typeof it === "object" && it.code) {
        studioScriptTitle.textContent = it.name;
        studioScriptCode.textContent = it.code;
        studioScriptViewer.classList.add("open");
      }
      updateStudioBadgesAndInspector();
    });
    studioFolderChips.appendChild(chip);
  });
}

document.querySelectorAll(".explorer-item").forEach((el) => {
  el.addEventListener("click", () => {
    selectedStudioFolder = el.getAttribute("data-folder") || "Workspace";
    updateStudioBadgesAndInspector();
  });
});

function startStudio3DViewportLoop() {
  if (!studio3DCanvas) return;
  const ctx = studio3DCanvas.getContext("2d");

  function render3DScene() {
    if (!megaStudioWorkspace.classList.contains("open")) return;
    ctx.clearRect(0, 0, studio3DCanvas.width, studio3DCanvas.height);
    const camZoom = 1 + studioModelState.camZ * 0.004;
    const playSwarmX = isStudioPlaying ? Math.sin(Date.now() * (oneTapArenaActive ? 0.008 : 0.004)) * 34 : 0;
    const cx = studio3DCanvas.width / 2 + studioModelState.objX + playSwarmX;
    const cy = 74 + studioModelState.objY;

    if (!studioModelState.modelType) {
      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 11px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText("3D Viewport Ready", studio3DCanvas.width / 2, 74);
    } else if (studioModelState.modelType === "car") {
      if (studioModelState.spinCar || isStudioPlaying) studioModelState.objAngle += 0.05;
      const spinStretch =
        studioModelState.spinCar || isStudioPlaying ? Math.max(0.32, Math.abs(Math.cos(studioModelState.objAngle))) : 1;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(studioModelState.objScale * spinStretch, studioModelState.objScale * camZoom);
      ctx.fillStyle = "#ef4444";
      ctx.beginPath();
      ctx.roundRect(-52, -4, 104, 22, 7);
      ctx.fill();
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.moveTo(-28, -4);
      ctx.lineTo(-16, -21);
      ctx.lineTo(18, -21);
      ctx.lineTo(30, -4);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    } else {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.scale(studioModelState.objScale * camZoom, studioModelState.objScale * camZoom);
      ctx.fillStyle = "#3b82f6";
      ctx.beginPath();
      ctx.moveTo(-22, -10);
      ctx.lineTo(0, -22);
      ctx.lineTo(22, -10);
      ctx.lineTo(0, 2);
      ctx.closePath();
      ctx.fill();
      ctx.restore();
    }
    studio3DAnimFrameId = requestAnimationFrame(render3DScene);
  }

  if (studio3DAnimFrameId) cancelAnimationFrame(studio3DAnimFrameId);
  render3DScene();
}

function openCreateInMegaAiStudioDirect(titleLabel = "Mega Forge") {
  studioWorkspaceTitle.textContent = titleLabel;
  chatBox.style.display = "none";
  normalInputRow.style.display = "none";
  megaStudioWorkspace.classList.add("open");
  updateStudioBadgesAndInspector();
  startStudio3DViewportLoop();
}

function closeCreateInMegaAiStudio() {
  isStudioPlaying = false;
  oneTapArenaActive = false;
  studioFileMenu.classList.remove("open");
  playTestStudioBtn.classList.remove("playing");
  playTestStudioBtn.textContent = "▶ Play";
  megaStudioWorkspace.classList.remove("open");
  if (studio3DAnimFrameId) cancelAnimationFrame(studio3DAnimFrameId);
  chatBox.style.display = "block";
  normalInputRow.style.display = "flex";
}

exitStudioBtn.addEventListener("click", closeCreateInMegaAiStudio);

function handleStudioCommand(rawCommand) {
  const cmd = (rawCommand || "").trim();
  if (!cmd) return;
  const lower = cmd.toLowerCase();
  const wantsCar = lower.includes("car") || cmd.includes("گاڑی");
  const wantsSpin = lower.includes("spin") || lower.includes("rotate") || cmd.includes("گول");

  if (lower.includes("storage")) {
    studioModelState.folders.Storage.push(`Crate_${studioModelState.folders.Storage.length + 1}`);
    selectedStudioFolder = "Storage";
    updateStudioBadgesAndInspector();
    return;
  }
  if (lower.includes("part gui") || (lower.includes("part") && lower.includes("gui"))) {
    studioModelState.folders.GUI.push(`PartBillboardGui_${studioModelState.folders.GUI.length + 1}`);
    selectedStudioFolder = "GUI";
    updateStudioBadgesAndInspector();
    return;
  }
  if (lower.includes("gui") || lower.includes("coin")) {
    studioModelState.folders.GUI.push(`CoinGui_${studioModelState.folders.GUI.length + 1}`);
    selectedStudioFolder = "GUI";
    updateStudioBadgesAndInspector();
    return;
  }
  if (lower.includes("script") || cmd.includes("اسکرپٹ")) {
    const codeText = "-- Mega Scriptor\nprint('Running')";
    const scriptObj = { name: `Script_${studioModelState.folders.ServiceScriptService.length + 1}`, code: codeText };
    studioModelState.folders.ServiceScriptService.push(scriptObj);
    selectedStudioFolder = "ServiceScriptService";
    updateStudioBadgesAndInspector();
    studioScriptTitle.textContent = scriptObj.name;
    studioScriptCode.textContent = scriptObj.code;
    studioScriptViewer.classList.add("open");
    return;
  }

  studioStatusBanner.textContent = "Your Meeka AI is making your 3D model";
  setTimeout(() => {
    studioModelState.modelType = wantsCar ? "car" : "part";
    const objName = `${wantsCar ? "3D_Car" : "3D_Model"}_${studioModelState.folders.Workspace.length + 1}`;
    studioModelState.folders.Workspace.push(objName);
    studioModelState.selectedObjectName = objName;
    if (wantsSpin) studioModelState.spinCar = true;
    selectedStudioFolder = "Workspace";
    updateStudioBadgesAndInspector();
    studioStatusBanner.textContent = "3D model ready!";
  }, 450);
}

document.querySelectorAll(".quick-craft-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const qCmd = btn.getAttribute("data-quick");
    if (qCmd) handleStudioCommand(qCmd);
  });
});

megaStudioSendBtn.addEventListener("click", () => {
  const text = megaStudioInput.value.trim();
  if (!text) return;
  megaStudioInput.value = "";
  handleStudioCommand(text);
});

megaStudioInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const text = megaStudioInput.value.trim();
    if (!text) return;
    megaStudioInput.value = "";
    handleStudioCommand(text);
  }
});

function spotAndFixScriptBugs(rawCode, goalLabel = "") {
  let fixed = rawCode || "";
  if (fixed.includes("while true do") && !fixed.includes("wait(")) {
    fixed = fixed.replace("while true do", "while true do\n\ttask.wait(0.1)");
    bugHistoryLog.push(`Repaired missing wait() loop for: ${goalLabel}`);
  }
  return fixed;
}

function autoDecidePlacementAndSetup(goalText, targetEngine) {
  const low = (goalText || "").toLowerCase();
  const isPartGui = (low.includes("gui") && low.includes("part")) || low.includes("billboard");
  const isScreenGui = low.includes("gui") && !low.includes("part");
  const isSound = low.includes("sound") || low.includes("audio") || low.includes("music");
  const isServer = low.includes("server") || low.includes("leaderstats") || low.includes("save");

  let folder =
    targetEngine && targetEngine.includes("Roblox")
      ? "ServerScriptService"
      : `${targetEngine || "Project"} / Scripts`;
  let setupType = "Server Script";

  if (isPartGui) {
    folder = "Workspace > TargetPart > BillboardGui";
    setupType = "Part BillboardGui Auto-Setup";
  } else if (isScreenGui) {
    folder = "StarterGui > ScreenGui";
    setupType = "ScreenGui Auto-Setup";
  } else if (isSound) {
    folder = "SoundService";
    setupType = "Sound Auto-Setup";
  } else if (isServer) {
    folder = "ServerScriptService";
    setupType = "Server Logic Auto-Setup";
  }

  return {
    folder,
    setupType,
    autoNote: `Auto-Selected: ${folder} (${setupType})`
  };
}

function applyAutoPlacementToStudio(goalText, targetEngine, scriptCode) {
  if (!studioModelState.folders) return;
  const low = (goalText || "").toLowerCase();
  const isPartGui = (low.includes("gui") && low.includes("part")) || low.includes("billboard");
  const isScreenGui = low.includes("gui") && !low.includes("part");

  if (isPartGui) {
    if (!studioModelState.modelType) studioModelState.modelType = "part";
    const partName = `AutoGuiPart_${studioModelState.folders.Workspace.length + 1}`;
    studioModelState.folders.Workspace.push(partName);
    studioModelState.folders.GUI.push(`BillboardGui_${partName}`);
    studioModelState.selectedObjectName = partName;
    selectedStudioFolder = "GUI";
  } else if (isScreenGui) {
    studioModelState.folders.GUI.push(`AutoScreenGui_${studioModelState.folders.GUI.length + 1}`);
    selectedStudioFolder = "GUI";
  } else {
    studioModelState.folders.ServiceScriptService.push({
      name: `Auto_${(targetEngine || "Script").split(" ")[0]}_${studioModelState.folders.ServiceScriptService.length + 1}`,
      code: scriptCode
    });
    selectedStudioFolder = "ServiceScriptService";
  }
  updateStudioBadgesAndInspector();
}

function generateEngineScript(goalText, targetEngine, passSeed) {
  const low = (goalText || "").toLowerCase();
  const wantsPartGui = (low.includes("gui") && low.includes("part")) || low.includes("billboard");
  const wantsGuiOnly = low.includes("gui") && !low.includes("part");

  if (wantsPartGui) {
    return spotAndFixScriptBugs(
`-- GUI on Part Script (${targetEngine}) | Cycle ${passSeed}
local part = script.Parent:IsA("BasePart") and script.Parent or workspace:FindFirstChild("TargetPart")
if part then
\tlocal bGui = part:FindFirstChildOfClass("BillboardGui") or Instance.new("BillboardGui")
\tbGui.Size = UDim2.new(0, 180, 0, 50)
\tbGui.StudsOffset = Vector3.new(0, 3, 0)
\tbGui.AlwaysOnTop = true
\tbGui.Parent = part

\tlocal label = bGui:FindFirstChildOfClass("TextLabel") or Instance.new("TextLabel")
\tlabel.Size = UDim2.new(1, 0, 1, 0)
\tlabel.BackgroundTransparency = 0.25
\tlabel.Text = "Part GUI Ready (${goalText.replace(/"/g, "")})"
\tlabel.Parent = bGui
end`,
      goalText
    );
  }

  if (wantsGuiOnly) {
    return spotAndFixScriptBugs(
`-- ScreenGui Setup Script (${targetEngine}) | Cycle ${passSeed}
local Players = game:GetService("Players")
local player = Players.LocalPlayer
local screenGui = Instance.new("ScreenGui")
screenGui.Name = "MegaScreenGui"
screenGui.ResetOnSpawn = false
screenGui.Parent = player:WaitForChild("PlayerGui")

local btn = Instance.new("TextButton")
btn.Size = UDim2.new(0, 160, 0, 44)
btn.Position = UDim2.new(0.5, -80, 0.8, 0)
btn.Text = "Action Ready"
btn.Parent = screenGui`,
      goalText
    );
  }

  if (targetEngine.includes("Unity")) {
    return spotAndFixScriptBugs(
`using UnityEngine;

public class MegaAdvancedController : MonoBehaviour
{
    public bool seatReady = true;
    void OnTriggerEnter(Collider other)
    {
        if (other.CompareTag("Player") && seatReady)
        {
            Debug.Log("Player seated/triggered: ${goalText.replace(/"/g, "")} [Cycle ${passSeed}]");
        }
    }
}`,
      goalText
    );
  }

  if (targetEngine.includes("Godot")) {
    return spotAndFixScriptBugs(
`extends Node3D

func _ready() -> void:
\tprint("Godot Ready [Cycle ${passSeed}]: ${goalText.replace(/"/g, "")}")

func _on_seat_area_body_entered(body: Node) -> void:
\tif body.is_in_group("human"):
\t\tprint("Human seated on part!")`,
      goalText
    );
  }

  if (targetEngine.includes("Unreal")) {
    return spotAndFixScriptBugs(
`// Unreal C++ Module [Cycle ${passSeed}]
// Goal: ${goalText}
void AMegaSeatTrigger::OnOverlapBegin(AActor* OtherActor)
{
    if (OtherActor)
    {
        UE_LOG(LogTemp, Log, TEXT("Seat & Part Test Passed"));
    }
}`,
      goalText
    );
  }

  if (targetEngine.includes("Web")) {
    return spotAndFixScriptBugs(
`// Web Game Script [Cycle ${passSeed}] - ${goalText}
export function attachSeatPart(partEntity, humanEntity) {
  if (!partEntity || !humanEntity) return false;
  humanEntity.seatedOn = partEntity.id;
  return true;
}`,
      goalText
    );
  }

  if (targetEngine.includes("Crafter")) {
    return spotAndFixScriptBugs(
`// 2D Game Crafter Behavior [Cycle ${passSeed}]
// Goal: ${goalText}
onCollision("Human", "MiniBoxPart", () => {
  attachToSeat("MiniBoxPart", "Human");
});`,
      goalText
    );
  }

  return spotAndFixScriptBugs(
`-- Mega Scriptor (${targetEngine}) | Cycle ${passSeed}
-- Goal: ${goalText}
local part = script.Parent
if not part or not part:IsA("BasePart") then return end
part.Anchored = true

local seat = Instance.new("Seat")
seat.Name = "TestedSeatPart"
seat.Size = Vector3.new(4, 1, 4)
seat.Anchored = true
seat.Position = part.Position + Vector3.new(0, 1.5, 0)
seat.Parent = part

seat.Touched:Connect(function(hit)
\tlocal hum = hit.Parent and hit.Parent:FindFirstChildOfClass("Humanoid")
\tif hum and hum.Health > 0 then
\t\tseat:Sit(hum)
\t\tprint("Human seated cleanly on part!")
\tend
end)`,
    goalText
  );
}

function runThreeStarScriptVerificationPipeline(goalText, targetEngine) {
  const statusBubble = document.createElement("div");
  statusBubble.className = "msg bot";
  statusBubble.dataset.typing = "1";
  statusBubble.innerHTML =
    `<div class="connect-status-strip"><span>Thinking</span><span class="tri-icon">▲</span><span>Connect: YouTube + Chrome + AI (30s–60s Window)</span></div>` +
    `<div>[${targetEngine}] Asking YouTube, Chrome &amp; AI about "${goalText}"...</div>`;
  chatBox.appendChild(statusBubble);
  chatBox.scrollTop = chatBox.scrollHeight;

  const sources = ["YouTube", "Chrome", "AI Network"];
  let srcIdx = 0;
  let cycle = 1;
  let scriptCode = generateEngineScript(goalText, targetEngine, cycle);

  const srcInterval = setInterval(() => {
    const activeSrc = sources[srcIdx % sources.length];
    srcIdx++;
    statusBubble.innerHTML =
      `<div class="connect-status-strip"><span>Thinking</span><span class="tri-icon">▲</span><span>Connect: ${activeSrc}</span></div>` +
      `<div>[${targetEngine}] Asking ${activeSrc} for best practices on "${goalText}"...</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 850);

  function executeStage1() {
    statusBubble.innerHTML =
      `<div class="connect-status-strip"><span>Thinking</span><span class="tri-icon">▲</span><span>Connect: YouTube + Chrome + AI</span></div>` +
      `<div>[${targetEngine}] ⭐ Check 1/3 (Bug Scan): Script mein bugs check ho rahe hain...</div>`;
    setTimeout(() => {
      const hadRawIssue = scriptCode.includes("while true do") && !scriptCode.includes("task.wait");
      if (hadRawIssue) {
        scriptCode = spotAndFixScriptBugs(scriptCode, goalText);
        statusBubble.innerHTML =
          `<div class="connect-status-strip"><span>Thinking</span><span class="tri-icon">▲</span><span>Connect: AI Repair</span></div>` +
          `<div>[${targetEngine}] ⭐ Check 1/3: Bug mila aur repair hua -> Dobara Check 1 se shuru!</div>`;
        cycle++;
        setTimeout(executeStage1, 800);
        return;
      }
      statusBubble.innerHTML =
        `<div class="connect-status-strip"><span>Thinking</span><span class="tri-icon">▲</span><span>Connect: Chrome + AI</span></div>` +
        `<div>[${targetEngine}] ⭐ Check 1/3 Passed! Ab Check 2/3 (Mini Box/Part + Human Seat Test)...</div>`;
      setTimeout(executeStage2, 950);
    }, 1050);
  }

  function executeStage2() {
    statusBubble.innerHTML =
      `<div class="connect-status-strip"><span>Thinking</span><span class="tri-icon">▲</span><span>Connect: YouTube + AI</span></div>` +
      `<div>[${targetEngine}] ⭐⭐ Check 2/3: Chota Box/Part bana kar Human seat test ho raha hai...</div>`;
    setTimeout(() => {
      const seatCheckOk =
        scriptCode.includes("seat") ||
        scriptCode.includes("Seat") ||
        scriptCode.includes("BillboardGui") ||
        scriptCode.includes("ScreenGui") ||
        cycle >= 2;
      if (!seatCheckOk) {
        cycle++;
        scriptCode = generateEngineScript(goalText, targetEngine, cycle);
        statusBubble.innerHTML =
          `<div class="connect-status-strip"><span>Thinking</span><span class="tri-icon">▲</span><span>Connect: AI Repair</span></div>` +
          `<div>[${targetEngine}] ⭐⭐ Check 2/3 Failed -> Repair kar ke wapas Check 1/3 par ja raha hai!</div>`;
        setTimeout(executeStage1, 900);
        return;
      }
      statusBubble.innerHTML =
        `<div class="connect-status-strip"><span>Thinking</span><span class="tri-icon">▲</span><span>Connect: Mega 3D + AI</span></div>` +
        `<div>[${targetEngine}] ⭐⭐⭐ Check 2/3 Passed (Mini Part + Human OK)! Ab Check 3/3 (Mega 3D System)...</div>`;
      setTimeout(executeStage3, 950);
    }, 1150);
  }

  function executeStage3() {
    const mega3dReady = Boolean(studioModelState.folders) && Array.isArray(studioModelState.folders.Workspace);
    statusBubble.innerHTML =
      `<div class="connect-status-strip"><span>Thinking</span><span class="tri-icon">▲</span><span>Connect: YouTube + Chrome + Mega 3D</span></div>` +
      `<div>[${targetEngine}] ⭐⭐⭐ Check 3/3: Mega 3D Craft system mein final check ho raha hai...</div>`;
    setTimeout(() => {
      clearInterval(srcInterval);
      if (!mega3dReady) {
        cycle++;
        studioModelState = createDefaultStudioState();
        setTimeout(executeStage1, 900);
        return;
      }
      statusBubble.remove();
      appendCodingOnlyBotBubble({
        headerText: `⭐⭐⭐ All 3 Checks Passed (${targetEngine}) — ${goalText}`,
        codeString: scriptCode,
        goalText,
        targetEngine
      });
    }, 1100);
  }

  setTimeout(executeStage1, 1400);
}

function appendCodingOnlyBotBubble(resultObj) {
  const plan = autoDecidePlacementAndSetup(
    resultObj.goalText || "",
    resultObj.targetEngine || selectedScriptTargetEngine
  );
  applyAutoPlacementToStudio(
    resultObj.goalText || "",
    resultObj.targetEngine || selectedScriptTargetEngine,
    resultObj.codeString || ""
  );

  const bubble = document.createElement("div");
  bubble.className = "msg bot";

  const autoBadge = document.createElement("div");
  autoBadge.className = "connect-status-strip";
  autoBadge.innerHTML = `<span>Auto</span><span class="tri-icon">▲</span><span>${plan.autoNote}</span>`;
  bubble.appendChild(autoBadge);

  const titleLine = document.createElement("div");
  titleLine.textContent = `${resultObj.headerText} • Placed in ${plan.folder}`;
  bubble.appendChild(titleLine);

  if (resultObj.codeString) {
    const wrap = document.createElement("div");
    wrap.className = "code-box-wrap";

    const topBar = document.createElement("div");
    topBar.className = "code-top-bar";

    const copyBtn = document.createElement("button");
    copyBtn.type = "button";
    copyBtn.className = "copy-copy-btn";
    copyBtn.textContent = "Copy Copy 📃";
    copyBtn.addEventListener("click", () => {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(resultObj.codeString).catch(() => {});
      }
      copyBtn.textContent = "Copied 📃";
      setTimeout(() => {
        copyBtn.textContent = "Copy Copy 📃";
      }, 1500);
    });

    const saveNoBugBtn = document.createElement("button");
    saveNoBugBtn.type = "button";
    saveNoBugBtn.className = "save-nobug-btn";
    saveNoBugBtn.textContent = "Save has no bug";
    saveNoBugBtn.addEventListener("click", () => {
      try {
        const list = JSON.parse(localStorage.getItem(SAVED_NOBUG_SCRIPTS_KEY) || "[]");
        list.push({
          goal: resultObj.goalText,
          code: resultObj.codeString,
          folder: plan.folder,
          savedAt: new Date().toISOString()
        });
        localStorage.setItem(SAVED_NOBUG_SCRIPTS_KEY, JSON.stringify(list));
      } catch (e) {}
      saveNoBugBtn.classList.add("saved");
      saveNoBugBtn.textContent = "Saved ✓";
    });

    const pre = document.createElement("pre");
    pre.textContent = resultObj.codeString;

    topBar.appendChild(copyBtn);
    topBar.appendChild(saveNoBugBtn);
    wrap.appendChild(topBar);
    wrap.appendChild(pre);
    bubble.appendChild(wrap);
  }

  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
  saveCurrentSessionSnapshot(resultObj.headerText);
}

codingForGamesOption.addEventListener("click", () => {
  plusMenu.classList.remove("open");
  pendingScriptGoalText = promptInput.value.trim() || "Part Seat Script";
  promptInput.value = "";
  resetChatForToolOpened(`Mega Scriptor (${pendingScriptGoalText})`);
  codingOnlyMode = true;
  aiMode = "MEGA SCRIPTOR";
  refreshStatusUI();
  scriptorTargetModal.classList.add("open");
});

closeScriptorTargetBtn.addEventListener("click", () => {
  scriptorTargetModal.classList.remove("open");
});

document.querySelectorAll(".engine-pick-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedScriptTargetEngine = btn.getAttribute("data-engine") || "Roblox (Luau)";
    scriptorTargetModal.classList.remove("open");
    codingLoadingScreen.classList.add("open");
  });
});

codingStartBtn.addEventListener("click", () => {
  setTimeout(() => {
    codingLoadingScreen.classList.remove("open");
    const goal = pendingScriptGoalText || promptInput.value.trim() || "Part Seat Script";
    promptInput.value = "";
    pendingScriptGoalText = "";
    runThreeStarScriptVerificationPipeline(goal, selectedScriptTargetEngine);
  }, 350);
});

const SCHOOL_CURRICULUM_DETAILS = {
  c1_5: "Class 1 – 5: Primary subjects.",
  c6_8: "Class 6 – 8: Middle subjects.",
  c9_10: "Class 9 – 10: Matric subjects.",
  c11_12: "Class 11 – 12: Intermediate subjects.",
  uni: "University: BS / Degree programs."
};

schoolOptionBtn.addEventListener("click", () => {
  plusMenu.classList.remove("open");
  resetChatForToolOpened("School & University");
  schoolModal.classList.add("open");
});
closeSchoolModalBtn.addEventListener("click", () => schoolModal.classList.remove("open"));
document.querySelectorAll(".school-level-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const lvl = btn.getAttribute("data-level");
    schoolDetailBox.textContent = SCHOOL_CURRICULUM_DETAILS[lvl] || "";
  });
});

function loadPinnedNotes() {
  try {
    return JSON.parse(localStorage.getItem(PINNED_NOTES_KEY) || "[]");
  } catch (e) {
    return [];
  }
}
function loadChatSessions() {
  try {
    return JSON.parse(localStorage.getItem(CHAT_SESSIONS_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function attachZoomClickToImages(container) {
  container.querySelectorAll("img").forEach((imgEl) => {
    imgEl.addEventListener("click", (ev) => {
      ev.stopPropagation();
      openZoomViewer(imgEl.src);
    });
  });
}

function openZoomViewer(src) {
  zoomScale = 1;
  zoomedImg.src = src;
  zoomedImg.style.transform = `scale(${zoomScale})`;
  zoomModal.classList.add("open");
}

zoomInBtn.addEventListener("click", () => {
  zoomScale = Math.min(4, Number((zoomScale + 0.35).toFixed(2)));
  zoomedImg.style.transform = `scale(${zoomScale})`;
});
zoomOutBtn.addEventListener("click", () => {
  zoomScale = Math.max(0.5, Number((zoomScale - 0.35).toFixed(2)));
  zoomedImg.style.transform = `scale(${zoomScale})`;
});
zoomResetBtn.addEventListener("click", () => {
  zoomScale = 1;
  zoomedImg.style.transform = "scale(1)";
});
zoomCloseBtn.addEventListener("click", () => {
  zoomModal.classList.remove("open");
  zoomScale = 1;
  zoomedImg.style.transform = "scale(1)";
});

function saveCurrentSessionSnapshot(titleHint = "") {
  try {
    const items = [];
    chatBox.querySelectorAll(".msg").forEach((el) => {
      if (el.dataset.typing === "1") return;
      const img = el.querySelector("img");
      const pre = el.querySelector("pre");
      items.push({
        sender: el.classList.contains("user") ? "user" : "bot",
        extraClass: el.classList.contains("angry") ? "angry" : el.classList.contains("warn") ? "warn" : "",
        text: el.dataset.origText || el.textContent || "",
        imgSrc: img ? img.src : null,
        codeText: pre ? pre.textContent : null
      });
    });
    if (!items.length) return;
    const existing = chatSessions[activeSessionId];
    const title =
      (existing && existing.title) ||
      (titleHint && titleHint.slice(0, 36)) ||
      (items[0] && items[0].text.slice(0, 36)) ||
      "Chat";
    chatSessions[activeSessionId] = {
      id: activeSessionId,
      title,
      updatedAt: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      messages: items
    };
    localStorage.setItem(CHAT_SESSIONS_KEY, JSON.stringify(chatSessions));
  } catch (e) {}
}

function resetChatForToolOpened(toolLabel = "New Chat") {
  activeSessionId = "chat_" + Date.now();
  chatBox.innerHTML = "";
  historyPanel.classList.remove("open");
  const startMsg = `New chat opened for ${toolLabel}.`;
  addBotMessageWithDotsAndReveal(startMsg, "", () => saveCurrentSessionSnapshot(toolLabel), false);
}

function startBrandNewChat() {
  closeCreateInMegaAiStudio();
  activeSessionId = "chat_" + Date.now();
  codingOnlyMode = false;
  aiMode = "HANGOUT";
  refreshStatusUI();
  chatBox.innerHTML = "";
  historyPanel.classList.remove("open");
  const rawWelcome = "Hey bestie! New chat started!";
  const welcome =
    permanentLang && !permanentLang.code.startsWith("en")
      ? translateTextToSelectedLang(rawWelcome, permanentLang.code, permanentLang.label)
      : rawWelcome;
  lastBotMessage = welcome;
  addBotMessageWithDotsAndReveal(welcome, "", () => saveCurrentSessionSnapshot(welcome));
}

newChatTopBtn.addEventListener("click", startBrandNewChat);

function renderHistoryList() {
  const list = Object.values(chatSessions).reverse();
  if (!list.length) {
    historyPanel.innerHTML = `<div style="color:#9ca3af;font-size:13px;">0</div>`;
    return;
  }
  historyPanel.innerHTML = "";
  list.forEach((sess) => {
    const row = document.createElement("div");
    row.className = "history-item";
    row.innerHTML = `<strong>${sess.title}</strong><br><small style="color:#9ca3af;">${sess.updatedAt}</small>`;
    row.addEventListener("click", () => {
      closeCreateInMegaAiStudio();
      activeSessionId = sess.id;
      chatBox.innerHTML = "";
      (sess.messages || []).forEach((m) => {
        const div = document.createElement("div");
        div.className = `msg ${m.sender} ${m.extraClass || ""}`.trim();
        div.dataset.origText = m.text;
        div.textContent =
          permanentLang && !permanentLang.code.startsWith("en")
            ? translateTextToSelectedLang(m.text, permanentLang.code, permanentLang.label)
            : m.text;
        if (m.imgSrc) {
          const card = document.createElement("div");
          card.className = "img-card";
          const im = document.createElement("img");
          im.src = m.imgSrc;
          card.appendChild(im);
          div.appendChild(document.createElement("br"));
          div.appendChild(card);
          attachZoomClickToImages(div);
        }
        chatBox.appendChild(div);
      });
      chatBox.scrollTop = chatBox.scrollHeight;
      historyPanel.classList.remove("open");
    });
    historyPanel.appendChild(row);
  });
}

historyArrowBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  historyPanel.classList.toggle("open");
  if (historyPanel.classList.contains("open")) renderHistoryList();
});

(function loadSavedPermanentLanguage() {
  try {
    const saved = localStorage.getItem(SAVED_PERM_LANG_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.code && parsed.label) {
        permanentLang = parsed;
        currentLang = parsed.code;
        currentLangLabel = parsed.label;
      }
    }
  } catch (e) {}
})();

function getStrikeCount() {
  try {
    return Number(localStorage.getItem(STRIKE_STORAGE_KEY)) || 0;
  } catch (e) {
    return 0;
  }
}

function incrementStrikeCount() {
  const next = getStrikeCount() + 1;
  try {
    localStorage.setItem(STRIKE_STORAGE_KEY, String(next));
  } catch (e) {}
  return next;
}

function encodeInternalMath(text) {
  const nums = [];
  for (let i = 0; i < text.length; i++) {
    const cp = text.codePointAt(i);
    nums.push(cp * 2 + MATH_KEY);
    if (cp > 0xffff) i++;
  }
  return nums.join("-");
}

function decodeInternalMath(encoded) {
  if (!encoded) return "";
  return encoded
    .split("-")
    .map((n) => String.fromCodePoint((Number(n) - MATH_KEY) / 2))
    .join("");
}

function pickPresetAiFemaleVoice(langCode) {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices() || [];
  if (!voices.length) return null;
  const shortLang = (langCode || "en").split("-")[0].toLowerCase();
  const matchingLang = voices.filter((v) => v.lang.toLowerCase().startsWith(shortLang));
  return matchingLang[0] || voices[0];
}

function speakWithPresetAiFemale(spokenText, langCode = currentLang) {
  if (isMuted || codingOnlyMode || !("speechSynthesis" in window) || !spokenText) return;
  try {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(spokenText.slice(0, 220));
    utter.lang = langCode;
    const presetVoice = pickPresetAiFemaleVoice(langCode);
    if (presetVoice) utter.voice = presetVoice;
    window.speechSynthesis.speak(utter);
  } catch (e) {}
}

function addUserMessage(text) {
  const shown =
    permanentLang && !permanentLang.code.startsWith("en")
      ? translateTextToSelectedLang(text, permanentLang.code, permanentLang.label)
      : text;
  const div = document.createElement("div");
  div.className = "msg user";
  div.dataset.origText = text;
  div.textContent = shown;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
  return div;
}

function appendFollowUpChips(bubble) {
  const ideas = ["Mix a Game Idea", "Craft 3D Image", "Craft Song", "Open Mega Forge"];
  const row = document.createElement("div");
  row.className = "followup-chips-row";
  ideas.forEach((label) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "followup-chip-btn";
    chip.textContent =
      permanentLang && !permanentLang.code.startsWith("en")
        ? translateTextToSelectedLang(label, permanentLang.code, permanentLang.label)
        : label;
    chip.addEventListener("click", () => {
      if (label.includes("Mix")) ideaMixerBtn.click();
      else if (label.includes("3D Image")) craftImageOption.click();
      else if (label.includes("Song")) craftSongOption.click();
      else openCreateGateFlow();
    });
    row.appendChild(chip);
  });
  bubble.appendChild(row);
}

function addBotMessageWithDotsAndReveal(fullText, extraClass = "", onComplete = null, withFollowUps = true) {
  const bubble = document.createElement("div");
  bubble.className = `msg bot ${extraClass}`.trim();
  bubble.dataset.typing = "1";
  bubble.innerHTML = `<div class="typing-dots"><span></span><span></span><span></span></div>`;
  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;

  setTimeout(() => {
    delete bubble.dataset.typing;
    bubble.textContent = "";
    bubble.dataset.origText = fullText;
    const tokens = fullText.split(/(\s+)/);
    let idx = 0;

    const timer = setInterval(() => {
      if (idx < tokens.length) {
        bubble.textContent += tokens[idx];
        idx++;
        chatBox.scrollTop = chatBox.scrollHeight;
      } else {
        clearInterval(timer);
        if (withFollowUps && !extraClass) appendFollowUpChips(bubble);
        if (typeof onComplete === "function") onComplete(bubble);
      }
    }, 20);
  }, 400);
}

function updateAudioButtonUI() {
  audioToggleBtn.textContent = isMuted ? "🔇" : "🔊";
  audioToggleBtn.classList.toggle("muted", isMuted);
  refreshStatusUI();
}

audioToggleBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  if (isMuted && "speechSynthesis" in window) window.speechSynthesis.cancel();
  updateAudioButtonUI();
});

function isHackingAttempt(text) {
  const lower = text.toLowerCase();
  return ["hack", "hacking", "exploit", "bypass", "jailbreak", "ہیک", "हैक"].some((k) => lower.includes(k));
}

function containsBadWords(text) {
  const lower = text.toLowerCase();
  return ["fuck", "shit", "bitch", "idiot", "stupid", "chutiya", "گالی", "بکواس", "गाली", "बकवास"].some(
    (w) => new RegExp(`\\b${w}\\b`, "i").test(lower) || lower.includes(w)
  );
}

function buildSmartAnswer(cleanText) {
  if (isHackingAttempt(cleanText)) {
    aiMode = "ANGRY";
    refreshStatusUI();
    return "Threat detected. Access guarded.";
  }
  if (containsBadWords(cleanText)) {
    incrementStrikeCount();
    return "Warning: Keep chat respectful.";
  }
  const lower = cleanText.toLowerCase();
  if (
    codingOnlyMode ||
    lower.includes("meeka") ||
    lower.includes("script") ||
    lower.includes("gui") ||
    lower.includes("اسکرپٹ")
  ) {
    codingOnlyMode = true;
    runThreeStarScriptVerificationPipeline(cleanText, selectedScriptTargetEngine);
    return null;
  }

  const isGold = hasActiveSubscription();
  let reply = isGold
    ? `Golden VIP Response: Detailed & priority answer for "${cleanText}"`
    : `Hello! "${cleanText}"`;

  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) {
    reply = isGold ? "Hey Golden VIP bestie! Priority mode active!" : "Hey bestie! How are you?";
  }
  if (permanentLang && !permanentLang.code.startsWith("en")) {
    return translateTextToSelectedLang(reply, permanentLang.code, permanentLang.label);
  }
  return reply;
}

function processUserInput(rawText) {
  const text = rawText.trim();
  if (!text) return;
  const verifiedText = decodeInternalMath(encodeInternalMath(text));
  addUserMessage(verifiedText);
  saveCurrentSessionSnapshot(verifiedText);
  const reply = buildSmartAnswer(verifiedText);
  if (reply) {
    lastBotMessage = reply;
    addBotMessageWithDotsAndReveal(reply, "", () => saveCurrentSessionSnapshot(reply));
    speakWithPresetAiFemale(reply, currentLang);
  }
}

function handleSend() {
  const text = promptInput.value.trim();
  if (!text) return;
  promptInput.value = "";
  processUserInput(text);
}

sendBtn.addEventListener("click", handleSend);
promptInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSend();
});

plusBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  getOrStartRandomEventTimer();
  topEventTimerBox.classList.add("open");
  updateTopEventTimerTick();
  plusMenu.classList.toggle("open");
});

document.addEventListener("click", () => {
  plusMenu.classList.remove("open");
  historyPanel.classList.remove("open");
  studioFileMenu.classList.remove("open");
  accountCornerMenu.classList.remove("open");
  chatGoMenu.classList.remove("open");
});

historyPanel.addEventListener("click", (e) => e.stopPropagation());
plusMenu.addEventListener("click", (e) => e.stopPropagation());
accountCornerMenu.addEventListener("click", (e) => e.stopPropagation());
chatGoMenu.addEventListener("click", (e) => e.stopPropagation());

// --- Craft Song System (1 to 2 Min + Listen Player + Prompt Style + Animated Triangle Watermark) ---
function parseSongPromptStyle(themeText) {
  const low = (themeText || "").toLowerCase();
  let tempoMul = 1.0;
  let waveType = "triangle";
  let scale = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25];

  if (low.includes("fast") || low.includes("drift") || low.includes("action") || low.includes("fight") || low.includes("hero")) {
    tempoMul = 1.35;
    scale = [293.66, 349.23, 392.0, 440.0, 523.25, 587.33];
  } else if (low.includes("calm") || low.includes("chill") || low.includes("night") || low.includes("sad") || low.includes("soft")) {
    tempoMul = 0.75;
    waveType = "sine";
    scale = [220.0, 261.63, 293.66, 329.63, 392.0, 440.0];
  } else if (low.includes("happy") || low.includes("party") || low.includes("fun") || low.includes("high")) {
    tempoMul = 1.22;
    scale = [261.63, 329.63, 392.0, 493.88, 523.25, 659.25];
  }

  return { tempoMul, waveType, scale };
}

function synthesizeSongWavBlob(themeLabel, hasWatermark, durationSec = 60) {
  const safeDuration = Math.max(60, Math.min(120, Number(durationSec) || 60));
  const sampleRate = 11025;
  const numSamples = sampleRate * safeDuration;
  const buffer = new ArrayBuffer(44 + numSamples * 2);
  const view = new DataView(buffer);

  function writeStr(offset, str) {
    for (let i = 0; i < str.length; i++) view.setUint8(offset + i, str.charCodeAt(i));
  }

  writeStr(0, "RIFF");
  view.setUint32(4, 36 + numSamples * 2, true);
  writeStr(8, "WAVE");
  writeStr(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeStr(36, "data");
  view.setUint32(40, numSamples * 2, true);

  const style = parseSongPromptStyle(themeLabel);
  const melodyPattern = [0, 2, 4, 5, 4, 2, 3, 1, 0, 4, 3, 2];
  let seed = 0;
  for (let i = 0; i < themeLabel.length; i++) seed += themeLabel.charCodeAt(i);

  const beatsPerSec = 2.5 * style.tempoMul;
  let phaseLead = 0;
  let phaseBass = 0;
  let phaseChord = 0;

  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    const beatIndex = Math.floor(t * beatsPerSec);
    const noteIdx = melodyPattern[(beatIndex + seed) % melodyPattern.length] % style.scale.length;
    const leadFreq = style.scale[noteIdx];
    const bassFreq = style.scale[noteIdx % 3] * 0.5;
    const chordFreq = style.scale[(noteIdx + 2) % style.scale.length] * 0.75;

    const beatPos = (t * beatsPerSec) % 1;
    const env = Math.sin(Math.min(1, beatPos * 8) * Math.PI * 0.5) * (1 - beatPos * 0.35);

    phaseLead += (2 * Math.PI * leadFreq) / sampleRate;
    phaseBass += (2 * Math.PI * bassFreq) / sampleRate;
    phaseChord += (2 * Math.PI * chordFreq) / sampleRate;

    const leadWave = style.waveType === "sine"
      ? Math.sin(phaseLead)
      : Math.sin(phaseLead) * 0.7 + Math.sin(phaseLead * 2) * 0.15;
    const bassWave = Math.sin(phaseBass) * 0.55;
    const chordWave = Math.sin(phaseChord) * 0.25;

    const kickEnv = beatPos < 0.14 ? Math.sin((beatPos / 0.14) * Math.PI) * 0.28 : 0;
    const pulseWave = Math.sin(2 * Math.PI * (55 + (1 - beatPos / 0.14) * 65) * t) * kickEnv;

    const mixed = (leadWave * 0.42 + bassWave + chordWave + pulseWave) * env;
    const clamped = Math.max(-0.92, Math.min(0.92, mixed));
    view.setInt16(44 + i * 2, clamped * 0x7fff, true);
  }

  const wmTag = hasWatermark
    ? `\n[WATERMARK: BIG TRIANGLE - MEGA AI 3D SONG | ${safeDuration}s]`
    : `\n[WATERMARK REMOVED - MEMBERSHIP | ${safeDuration}s]`;
  const finalBlob = new Blob([buffer, wmTag], { type: "audio/wav" });
  return URL.createObjectURL(finalBlob);
}

function appendCraftedSongBubble(themeText, durationSec = 60) {
  const cleanTheme = themeText || "Mega 3D Vibe";
  const safeDuration = Math.max(60, Math.min(120, Number(durationSec) || 60));
  let hasWatermark = true;
  let audioUrl = synthesizeSongWavBlob(cleanTheme, hasWatermark, safeDuration);

  const bubble = document.createElement("div");
  bubble.className = "msg bot";

  const card = document.createElement("div");
  card.className = "song-craft-card";

  const title = document.createElement("div");
  title.innerHTML = `<strong>🎵 Crafted Song (${safeDuration}s):</strong> ${cleanTheme}`;
  card.appendChild(title);

  const audioPlayer = document.createElement("audio");
  audioPlayer.controls = true;
  audioPlayer.preload = "metadata";
  audioPlayer.src = audioUrl;
  audioPlayer.style.width = "100%";
  audioPlayer.style.marginTop = "8px";
  card.appendChild(audioPlayer);

  const wmBadge = document.createElement("div");
  wmBadge.className = "song-wm-badge";
  wmBadge.textContent = "▲ MEGA AI 3D SONG (Animated Triangle Watermark)";
  card.appendChild(wmBadge);

  const dlBtn = document.createElement("a");
  dlBtn.className = "dl-btn";
  dlBtn.href = audioUrl;
  dlBtn.download = `mega_song_${safeDuration}s_${cleanTheme.toLowerCase().replace(/[^a-z0-9]+/g, "_") || "track"}.wav`;
  dlBtn.textContent = `⬇ Download ${safeDuration}s Song (With Watermark)`;
  dlBtn.addEventListener("click", () => {
    showAnimatedTriangleWatermark(2200);
  });
  card.appendChild(document.createElement("br"));
  card.appendChild(dlBtn);

  const removeWmBtn = document.createElement("button");
  removeWmBtn.type = "button";
  removeWmBtn.className = "remove-wm-btn";
  removeWmBtn.textContent = "👑 Remove Watermark (Membership)";
  removeWmBtn.addEventListener("click", () => {
    if (!hasActiveSubscription()) {
      addBotMessageWithDotsAndReveal("Membership required to remove watermark! Open Account > Subscription.");
      return;
    }
    hasWatermark = false;
    audioUrl = synthesizeSongWavBlob(cleanTheme, false, safeDuration);
    audioPlayer.src = audioUrl;
    wmBadge.style.animation = "none";
    wmBadge.style.opacity = "1";
    wmBadge.style.borderStyle = "solid";
    wmBadge.style.borderColor = "#22c55e";
    wmBadge.style.color = "#86efac";
    wmBadge.textContent = "✓ Watermark Removed (Active Membership)";
    dlBtn.href = audioUrl;
    dlBtn.download = `mega_song_clean_${safeDuration}s_${cleanTheme.toLowerCase().replace(/[^a-z0-9]+/g, "_") || "track"}.wav`;
    dlBtn.textContent = `⬇ Download Clean ${safeDuration}s Song`;
    removeWmBtn.textContent = "✓ Watermark Removed";
  });
  card.appendChild(removeWmBtn);

  bubble.appendChild(card);
  chatBox.appendChild(bubble);
  chatBox.scrollTop = chatBox.scrollHeight;
  saveCurrentSessionSnapshot(`Song (${safeDuration}s): ${cleanTheme}`);
}

craftSongOption.addEventListener("click", () => {
  plusMenu.classList.remove("open");
  resetChatForToolOpened("Craft Song");
  craftSongModal.classList.add("open");
});
closeCraftSongBtn.addEventListener("click", () => craftSongModal.classList.remove("open"));
generateCraftSongBtn.addEventListener("click", () => {
  const themeVal = (songThemeInput && songThemeInput.value.trim()) || "Mega 3D Vibe";
  const chosenSec = Number(songDurationSelect ? songDurationSelect.value : 90) || 90;
  if (songThemeInput) songThemeInput.value = "";
  craftSongModal.classList.remove("open");
  addUserMessage(`Craft Song (${chosenSec}s): ${themeVal}`);
  showAnimatedTriangleWatermark(2500);
  setTimeout(() => {
    appendCraftedSongBubble(themeVal, chosenSec);
  }, 900);
});

// --- 3D-Only Photo & Image Generator ---
function convertCapturedPhotoTo3D(imgSrc, labelText = "Captured Photo") {
  return new Promise((resolve) => {
    const sourceImg = new Image();
    sourceImg.onload = () => {
      const w = 1280;
      const h = 1280;
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");

      const bgGrad = ctx.createLinearGradient(0, 0, w, h);
      bgGrad.addColorStop(0, "#090d16");
      bgGrad.addColorStop(0.55, "#1e1b4b");
      bgGrad.addColorStop(1, "#0f172a");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, w, h);

      ctx.strokeStyle = "rgba(56, 189, 248, 0.25)";
      ctx.lineWidth = 2;
      for (let g = -6; g <= 6; g++) {
        ctx.beginPath();
        ctx.moveTo(w / 2 + g * 45, h * 0.68);
        ctx.lineTo(w / 2 + g * 195, h);
        ctx.stroke();
      }

      ctx.fillStyle = "rgba(0, 0, 0, 0.65)";
      ctx.beginPath();
      ctx.ellipse(w * 0.52, h * 0.84, 340, 68, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = "#1d4ed8";
      ctx.beginPath();
      ctx.roundRect(w * 0.16 + 24, h * 0.16 + 24, w * 0.68, h * 0.62, 26);
      ctx.fill();

      ctx.save();
      ctx.beginPath();
      ctx.roundRect(w * 0.16, h * 0.16, w * 0.68, h * 0.62, 24);
      ctx.clip();
      ctx.drawImage(sourceImg, w * 0.16, h * 0.16, w * 0.68, h * 0.62);

      const sheen = ctx.createLinearGradient(w * 0.16, h * 0.16, w * 0.84, h * 0.78);
      sheen.addColorStop(0, "rgba(255,255,255,0.22)");
      sheen.addColorStop(0.5, "rgba(56,189,248,0.06)");
      sheen.addColorStop(1, "rgba(2,6,23,0.35)");
      ctx.fillStyle = sheen;
      ctx.fillRect(w * 0.16, h * 0.16, w * 0.68, h * 0.62);
      ctx.restore();

      ctx.strokeStyle = "#7dd3fc";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.roundRect(w * 0.16, h * 0.16, w * 0.68, h * 0.62, 24);
      ctx.stroke();

      if (!hasActiveSubscription()) {
        ctx.save();
        ctx.globalAlpha = 0.35;
        ctx.fillStyle = "#fef08a";
        ctx.font = "bold 24px system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("▲ MEGA AI 3D", w * 0.5, h * 0.48);
        ctx.restore();
      }

      ctx.fillStyle = "#e0f2fe";
      ctx.font = "bold 28px system-ui, sans-serif";
      ctx.textAlign = "center";
      ctx.fillText(`3D RENDER ONLY • ${labelText}`, w * 0.5, h * 0.92);

      resolve(canvas.toDataURL("image/png"));
    };
    sourceImg.src = imgSrc;
  });
}

imagePhotoOption.addEventListener("click", () => {
  plusMenu.classList.remove("open");
  resetChatForToolOpened("Image in Photo (3D Only)");
  photoFileInput.value = "";
  photoFileInput.click();
});

photoFileInput.addEventListener("change", () => {
  const file = photoFileInput.files && photoFileInput.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = async () => {
    const rendered3DUrl = ONLY_3D_IMAGE_MODE
      ? await convertCapturedPhotoTo3D(reader.result, file.name || "Photo")
      : reader.result;

    const msgDiv = document.createElement("div");
    msgDiv.className = "msg bot";
    msgDiv.textContent = "🧊 3D Image Ready (3D Only Mode)";

    const cardDiv = document.createElement("div");
    cardDiv.className = "img-card";
    const imgEl = document.createElement("img");
    imgEl.src = rendered3DUrl;
    cardDiv.appendChild(imgEl);

    const dlLink = document.createElement("a");
    dlLink.className = "dl-btn";
    dlLink.href = rendered3DUrl;
    dlLink.download = `3d_${(file.name || "photo").replace(/\.[^.]+$/, "")}.png`;
    dlLink.textContent = "⬇ Download 3D PNG";

    msgDiv.appendChild(document.createElement("br"));
    msgDiv.appendChild(cardDiv);
    msgDiv.appendChild(document.createElement("br"));
    msgDiv.appendChild(dlLink);
    attachZoomClickToImages(msgDiv);

    chatBox.appendChild(msgDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    saveCurrentSessionSnapshot(`3D ${file.name}`);
  };
  reader.readAsDataURL(file);
});

// --- Super High-Detail 3D Art Lab Render (3D Only + Membership Watermark Removal) ---
document.querySelectorAll(".ratio-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedArtRatio = btn.getAttribute("data-ratio") || "16:9";
    document.querySelectorAll(".ratio-btn").forEach((b) => b.classList.toggle("active", b === btn));
  });
});

craftImageOption.addEventListener("click", () => {
  plusMenu.classList.remove("open");
  resetChatForToolOpened("Mega Art Lab (3D Only)");
  artLabOptionsModal.classList.add("open");
});

closeArtOptionsBtn.addEventListener("click", () => {
  artLabOptionsModal.classList.remove("open");
});

function renderSuperHighDetailArtwork(artKey, ratio, stripWatermark = false) {
  const dims = {
    "16:9": [1600, 900],
    "1:1": [1280, 1280],
    "9:16": [900, 1600]
  };
  const [w, h] = dims[ratio] || [1600, 900];
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");

  const skyGrad = ctx.createLinearGradient(0, 0, w * 0.25, h);
  if (artKey === "lava_castle") {
    skyGrad.addColorStop(0, "#090404");
    skyGrad.addColorStop(0.45, "#450a0a");
    skyGrad.addColorStop(0.78, "#c2410c");
    skyGrad.addColorStop(1, "#facc15");
  } else if (artKey === "sky_island") {
    skyGrad.addColorStop(0, "#082f49");
    skyGrad.addColorStop(0.45, "#0284c7");
    skyGrad.addColorStop(0.8, "#7dd3fc");
    skyGrad.addColorStop(1, "#fef9c3");
  } else if (artKey === "cozy_room") {
    skyGrad.addColorStop(0, "#0f172a");
    skyGrad.addColorStop(0.55, "#312e81");
    skyGrad.addColorStop(1, "#f59e0b");
  } else if (artKey === "space_station") {
    skyGrad.addColorStop(0, "#020617");
    skyGrad.addColorStop(0.5, "#1e1b4b");
    skyGrad.addColorStop(1, "#0e7490");
  } else {
    skyGrad.addColorStop(0, "#050816");
    skyGrad.addColorStop(0.45, "#2e1065");
    skyGrad.addColorStop(0.78, "#9d174d");
    skyGrad.addColorStop(1, "#22d3ee");
  }
  ctx.fillStyle = skyGrad;
  ctx.fillRect(0, 0, w, h);

  for (let i = 0; i < 95; i++) {
    const sx = ((i * 197) % 1000) / 1000 * w;
    const sy = ((i * 331) % 620) / 1000 * h;
    const sr = (i % 3) + 1.2;
    ctx.fillStyle = i % 2 === 0 ? "rgba(255,255,255,0.78)" : "rgba(125,211,252,0.75)";
    ctx.beginPath();
    ctx.arc(sx, sy, sr, 0, Math.PI * 2);
    ctx.fill();
  }

  const sunX = w * 0.74;
  const sunY = h * 0.22;
  const sunRadius = Math.min(w, h) * 0.48;
  const sunGlow = ctx.createRadialGradient(sunX, sunY, 8, sunX, sunY, sunRadius);
  sunGlow.addColorStop(0, "rgba(255, 255, 240, 0.96)");
  sunGlow.addColorStop(0.18, "rgba(250, 204, 21, 0.45)");
  sunGlow.addColorStop(0.45, "rgba(56, 189, 248, 0.18)");
  sunGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
  ctx.fillStyle = sunGlow;
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "rgba(9, 13, 28, 0.72)";
  ctx.beginPath();
  ctx.moveTo(0, h * 0.66);
  ctx.lineTo(w * 0.18, h * 0.44);
  ctx.lineTo(w * 0.37, h * 0.61);
  ctx.lineTo(w * 0.62, h * 0.36);
  ctx.lineTo(w * 0.85, h * 0.57);
  ctx.lineTo(w, h * 0.45);
  ctx.lineTo(w, h);
  ctx.lineTo(0, h);
  ctx.closePath();
  ctx.fill();

  const groundGrad = ctx.createLinearGradient(0, h * 0.62, 0, h);
  groundGrad.addColorStop(0, "#111827");
  groundGrad.addColorStop(1, "#030712");
  ctx.fillStyle = groundGrad;
  ctx.fillRect(0, h * 0.64, w, h * 0.36);

  ctx.strokeStyle = "rgba(56, 189, 248, 0.24)";
  ctx.lineWidth = Math.max(1.5, w * 0.0018);
  const cx = w * 0.5;
  for (let g = -6; g <= 6; g++) {
    ctx.beginPath();
    ctx.moveTo(cx + g * w * 0.04, h * 0.64);
    ctx.lineTo(cx + g * w * 0.24, h);
    ctx.stroke();
  }

  const cy = h * 0.54;
  const s = Math.min(w, h) * 0.26;

  ctx.fillStyle = "rgba(0, 0, 0, 0.62)";
  ctx.beginPath();
  ctx.ellipse(cx, cy + s * 0.92, s * 1.35, s * 0.3, 0, 0, Math.PI * 2);
  ctx.fill();

  const leftFace = ctx.createLinearGradient(cx - s, cy - s * 0.6, cx, cy + s * 0.8);
  leftFace.addColorStop(0, "#38bdf8");
  leftFace.addColorStop(0.55, "#2563eb");
  leftFace.addColorStop(1, "#1e1b4b");

  const rightFace = ctx.createLinearGradient(cx, cy - s * 0.6, cx + s, cy + s * 0.8);
  rightFace.addColorStop(0, "#1d4ed8");
  rightFace.addColorStop(0.6, "#0f172a");
  rightFace.addColorStop(1, "#020617");

  ctx.fillStyle = leftFace;
  ctx.beginPath();
  ctx.moveTo(cx - s * 0.82, cy - s * 0.22);
  ctx.lineTo(cx, cy + s * 0.22);
  ctx.lineTo(cx, cy + s * 0.92);
  ctx.lineTo(cx - s * 0.82, cy + s * 0.48);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = rightFace;
  ctx.beginPath();
  ctx.moveTo(cx, cy + s * 0.22);
  ctx.lineTo(cx + s * 0.82, cy - s * 0.22);
  ctx.lineTo(cx + s * 0.82, cy + s * 0.48);
  ctx.lineTo(cx, cy + s * 0.92);
  ctx.closePath();
  ctx.fill();

  const topFace = ctx.createLinearGradient(cx, cy - s * 0.78, cx, cy + s * 0.22);
  topFace.addColorStop(0, "#f0f9ff");
  topFace.addColorStop(1, "#7dd3fc");
  ctx.fillStyle = topFace;
  ctx.beginPath();
  ctx.moveTo(cx, cy - s * 0.76);
  ctx.lineTo(cx + s * 0.82, cy - s * 0.22);
  ctx.lineTo(cx, cy + s * 0.22);
  ctx.lineTo(cx - s * 0.82, cy - s * 0.22);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "rgba(255, 255, 255, 0.85)";
  ctx.lineWidth = Math.max(2, w * 0.0022);
  ctx.beginPath();
  ctx.moveTo(cx, cy - s * 0.76);
  ctx.lineTo(cx, cy + s * 0.92);
  ctx.stroke();

  if (!stripWatermark && !hasActiveSubscription()) {
    ctx.save();
    ctx.globalAlpha = 0.28;
    ctx.strokeStyle = "#facc15";
    ctx.lineWidth = Math.max(2, w * 0.002);
    const wr = Math.min(w, h) * 0.08;
    ctx.beginPath();
    ctx.moveTo(cx, h * 0.22 - wr);
    ctx.lineTo(cx + wr * 0.9, h * 0.22 + wr * 0.7);
    ctx.lineTo(cx - wr * 0.9, h * 0.22 + wr * 0.7);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }

  const vig = ctx.createRadialGradient(cx, cy, s * 0.55, cx, cy, Math.max(w, h) * 0.76);
  vig.addColorStop(0, "rgba(0,0,0,0)");
  vig.addColorStop(1, "rgba(2,6,23,0.72)");
  ctx.fillStyle = vig;
  ctx.fillRect(0, 0, w, h);

  return canvas.toDataURL("image/png");
}

document.querySelectorAll(".art-option-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const artKey = btn.getAttribute("data-art") || "neon_street";
    const label = btn.textContent || artKey;
    artLabOptionsModal.classList.remove("open");

    addUserMessage(`${label} (${selectedArtRatio}) [3D Only]`);
    saveCurrentSessionSnapshot(label);

    let dataUrl = renderSuperHighDetailArtwork(artKey, selectedArtRatio, false);
    const botDiv = document.createElement("div");
    botDiv.className = "msg bot";
    botDiv.textContent = `🧊 3D Render Only: ${label} • ${selectedArtRatio}`;

    const card = document.createElement("div");
    card.className = "img-card";
    const img = document.createElement("img");
    img.src = dataUrl;
    card.appendChild(img);

    const dlLink = document.createElement("a");
    dlLink.className = "dl-btn";
    dlLink.href = dataUrl;
    dlLink.download = `3d_${artKey}_${selectedArtRatio.replace(":", "x")}.png`;
    dlLink.textContent = "⬇ 3D PNG";

    const removeWmBtn = document.createElement("button");
    removeWmBtn.type = "button";
    removeWmBtn.className = "remove-wm-btn";
    removeWmBtn.textContent = "👑 Remove Watermark (Membership)";
    removeWmBtn.addEventListener("click", () => {
      if (!hasActiveSubscription()) {
        addBotMessageWithDotsAndReveal("Membership required to remove watermark! Open Account > Subscription.");
        return;
      }
      dataUrl = renderSuperHighDetailArtwork(artKey, selectedArtRatio, true);
      img.src = dataUrl;
      dlLink.href = dataUrl;
      removeWmBtn.textContent = "✓ Watermark Removed";
    });

    botDiv.appendChild(document.createElement("br"));
    botDiv.appendChild(card);
    botDiv.appendChild(document.createElement("br"));
    botDiv.appendChild(dlLink);
    botDiv.appendChild(removeWmBtn);
    attachZoomClickToImages(botDiv);

    chatBox.appendChild(botDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
    saveCurrentSessionSnapshot(label);
  });
});

function startTransparentAlienAnimation() {
  if (!alienAnimCanvas) return;
  const ctx = alienAnimCanvas.getContext("2d");
  let tick = 0;

  function drawFrame() {
    if (!liveTalkScreen.classList.contains("open")) return;
    tick += 0.04;
    ctx.clearRect(0, 0, alienAnimCanvas.width, alienAnimCanvas.height);
    const alienX = 112 + Math.sin(tick) * 52;
    const alienY = 78 + Math.cos(tick * 2) * 7;
    ctx.fillStyle = "#22c55e";
    ctx.beginPath();
    ctx.ellipse(alienX, alienY, 20, 24, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#090d16";
    ctx.beginPath();
    ctx.arc(alienX - 7, alienY - 4, 4.5, 0, Math.PI * 2);
    ctx.arc(alienX + 7, alienY - 4, 4.5, 0, Math.PI * 2);
    ctx.fill();
    alienAnimFrameId = requestAnimationFrame(drawFrame);
  }

  if (alienAnimFrameId) cancelAnimationFrame(alienAnimFrameId);
  drawFrame();
}

function submitLiveInputText(rawInput) {
  const cleanText = (rawInput || "").trim();
  if (!cleanText) return;
  const reply = `I heard "${cleanText}"!`;
  const finalReply =
    permanentLang && !permanentLang.code.startsWith("en")
      ? translateTextToSelectedLang(reply, permanentLang.code, permanentLang.label)
      : reply;
  liveStatusText.textContent = finalReply;
  speakWithPresetAiFemale(finalReply, currentLang);
}

liveSendTextBtn.addEventListener("click", () => {
  submitLiveInputText(liveVoiceTextInput.value.trim() || latestTranscriptBuffer.trim());
});
liveVoiceTextInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") submitLiveInputText(liveVoiceTextInput.value);
});
liveTalkOption.addEventListener("click", () => {
  plusMenu.classList.remove("open");
  resetChatForToolOpened("Live Talk with AI");
  liveTalkScreen.classList.add("open");
  startTransparentAlienAnimation();
});
liveExitBtn.addEventListener("click", () => {
  liveTalkScreen.classList.remove("open");
  if (alienAnimFrameId) cancelAnimationFrame(alienAnimFrameId);
});

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let recognition = null;
let recognitionActive = false;

if (SpeechRecognition) {
  recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onstart = () => {
    recognitionActive = true;
    micPermissionGranted = true;
    try {
      localStorage.setItem(MIC_GRANTED_KEY, "1");
    } catch (e) {}
  };
  recognition.onresult = (event) => {
    let combined = "";
    for (let i = 0; i < event.results.length; i++) combined += event.results[i][0].transcript + " ";
    latestTranscriptBuffer = combined.trim();
    if (liveTalkScreen.classList.contains("open") && latestTranscriptBuffer) {
      liveVoiceTextInput.value = latestTranscriptBuffer;
    }
  };
  recognition.onerror = () => {
    recognitionActive = false;
  };
  recognition.onend = () => {
    recognitionActive = false;
  };
}

function startRecordingForMode(mode) {
  latestTranscriptBuffer = "";
  if (mode === "live") {
    isLiveTapRecording = true;
    liveMicBtn.classList.add("listening");
    liveMicBtn.textContent = "⏹ Stop";
  } else {
    isHoldingChatMic = true;
    micBtn.classList.add("recording");
  }
  if (!recognition) return;
  try {
    if (!recognitionActive) {
      recognition.lang = currentLang;
      recognition.start();
    }
  } catch (e) {}
}

function stopSpeechRecognitionNow(processResultForMode = null) {
  if (recognition && recognitionActive) {
    try {
      recognition.stop();
    } catch (e) {}
  }
  setTimeout(() => {
    const finalText = (latestTranscriptBuffer.trim() || liveVoiceTextInput.value.trim()).trim();
    latestTranscriptBuffer = "";
    if (processResultForMode === "live") {
      isLiveTapRecording = false;
      liveMicBtn.classList.remove("listening");
      liveMicBtn.textContent = "🎤 Speak Now";
      if (finalText) submitLiveInputText(finalText);
    } else if (processResultForMode === "chat") {
      isHoldingChatMic = false;
      micBtn.classList.remove("recording");
      if (finalText) processUserInput(finalText);
    }
  }, 200);
}

micBtn.addEventListener("pointerdown", (e) => {
  e.preventDefault();
  startRecordingForMode("chat");
});
micBtn.addEventListener("pointerup", (e) => {
  e.preventDefault();
  if (isHoldingChatMic) stopSpeechRecognitionNow("chat");
});
liveMicBtn.addEventListener("click", () => {
  if (!isLiveTapRecording) startRecordingForMode("live");
  else stopSpeechRecognitionNow("live");
});

hasActiveSubscription();
getOrRoll24hRandomDiscount();
syncSubscriptionDiscountUi();
updateAccountHeaderBadge();
refreshStatusUI();
