
// =====================================
// THE MYSTERY - SAVOLLAR BAZASI
// =====================================

const questions = [
  {
    q: "Qancha ko‘p tuproq olinsa, shuncha kattalashadigan narsa nima?",
    a: ["Tog‘", "Chuqur", "Maydon", "Uyum"],
    correct: 1, digit: "7",
    info: "Chuqurdan tuproq olingan sari u kattalashadi."
  },
  {
    q: "Senga tegishli, lekin boshqalar ko‘proq foydalanadigan narsa nima?",
    a: ["Telefon", "Isming", "Uying", "Kiyimlaring"],
    correct: 1, digit: "2",
    info: "Boshqalar seni chaqirishda ismingdan foydalanadi."
  },
  {
    q: "5 ta shamdan 2 tasi o‘chirildi. Xonada nechta sham qoldi?",
    a: ["2 ta", "3 ta", "5 ta", "7 ta"],
    correct: 2, digit: "9",
    info: "O‘chgan shamlar ham xonada qoladi."
  },
  {
    q: "Qaysi savolga rostini aytib hech qachon ha deb javob berolmaysan?",
    a: ["Uxlayapsanmi?", "Ochmisan?", "Uyg‘oqmisan?", "Charchadingmi?"],
    correct: 0, digit: "4",
    info: "Uxlayotgan odam ongli ravishda javob bera olmaydi."
  },
  {
    q: "Qaysi narsa buzilsa ham ovoz chiqarmaydi?",
    a: ["Shisha", "Va’da", "Yog‘och", "Plastmassa"],
    correct: 1, digit: "1",
    info: "Va’da jismoniy buyum emas."
  },
  {
    q: "Bir kilogramm temir og‘irmi yoki bir kilogramm paxta?",
    a: ["Temir", "Paxta", "Ikkalasi teng", "Hajmiga bog‘liq"],
    correct: 2, digit: "6",
    info: "Ikkalasining massasi bir kilogramm."
  },
  {
    q: "Yilning nechta oyida 28 kun bor?",
    a: ["1 ta", "2 ta", "6 ta", "12 ta"],
    correct: 3, digit: "3",
    info: "Barcha 12 oyda kamida 28 kun bor."
  },
  {
    q: "Qaysi narsa qancha quritsa, shuncha ho‘l bo‘ladi?",
    a: ["Sochiq", "Qog‘oz", "Quyosh", "Shamol"],
    correct: 0, digit: "8",
    info: "Sochiq boshqa narsani quritganda o‘zi ho‘l bo‘ladi."
  },
  {
    q: "Elektr poyezdi shimolga qarab ketyapti. Tutuni qaysi tomonga ketadi?",
    a: ["Shimolga", "Janubga", "Sharqqa", "Tutuni yo‘q"],
    correct: 3, digit: "5",
    info: "Elektr poyezdida tutun bo‘lmaydi."
  },
  {
    q: "Bir odam yomg‘irda soyabonsiz yurdi, lekin sochi ho‘l bo‘lmadi. Nega?",
    a: ["Yomg‘ir kuchsiz edi", "Uning sochi yo‘q edi", "Shamol esdi", "U tez yugurdi"],
    correct: 1, digit: "2",
    info: "Uning sochi yo‘q edi."
  },
  {
    q: "Qaysi narsa gapirmaydi, ammo javob qaytaradi?",
    a: ["Kitob", "Aks-sado", "Devor", "Soat"],
    correct: 1, digit: "6",
    info: "Aks-sado ovozni qaytaradi."
  },
  {
    q: "Qaysi narsaning tishlari bor, lekin ovqat yemaydi?",
    a: ["Taroq", "Pichoq", "Vilka", "Arra"],
    correct: 0, digit: "4",
    info: "Taroqning tishlari bor."
  },
  {
    q: "2 ota va 2 o‘g‘il bor, lekin ular jami 3 kishi. Qanday?",
    a: ["Ikki aka-uka", "Bobo, ota va o‘g‘il", "Uch do‘st", "Ota va ikki ona"],
    correct: 1, digit: "9",
    info: "Bobo, uning o‘g‘li va nabirasi."
  },
  {
    q: "Qaysi narsa doim oldinga yuradi, orqaga qaytmaydi?",
    a: ["Soat mili", "Vaqt", "Mashina", "Daryo"],
    correct: 1, digit: "3",
    info: "Vaqt ortga qaytmaydi."
  },
  {
    q: "Xonaning 4 burchagida bittadan mushuk bor. Jami nechta mushuk?",
    a: ["4", "8", "12", "16"],
    correct: 0, digit: "5",
    info: "Har burchakda bittadan, jami 4 ta."
  },
  {
    q: "Qaysi narsa qanotsiz uchadi?",
    a: ["Bulut", "Samolyot", "Vaqt", "Qush"],
    correct: 2, digit: "7",
    info: "Vaqt uchadi deb aytiladi."
  },
  {
    q: "Qaysi narsa ko‘zga ko‘rinmaydi, ammo his qilinadi?",
    a: ["Havo", "Tosh", "Shisha", "Temir"],
    correct: 0, digit: "1",
    info: "Havo odatda ko‘rinmaydi, lekin his qilinadi."
  },
  {
    q: "Qaysi narsani ushlab bo‘lmaydi, lekin yo‘qotish mumkin?",
    a: ["Pul", "Ishonch", "Kalit", "Telefon"],
    correct: 1, digit: "8",
    info: "Ishonchni yo‘qotish mumkin."
  },
  {
    q: "Qaysi narsa yozadi, lekin o‘qiy olmaydi?",
    a: ["O‘quvchi", "Ruchka", "Kitob", "O‘qituvchi"],
    correct: 1, digit: "4",
    info: "Ruchka yozadi, lekin o‘qimaydi."
  },
  {
    q: "Qaysi joyda daryolar bor, ammo suv yo‘q?",
    a: ["Cho‘l", "Xarita", "O‘rmon", "Ko‘l"],
    correct: 1, digit: "0",
    info: "Xaritada daryolar tasvirlanadi."
  },
  {
    q: "Qaysi narsa o‘sganda uzayadi, lekin tirik emas?",
    a: ["Soch", "Soya", "Tirnoq", "Daraxt"],
    correct: 1, digit: "6",
    info: "Soya yorug‘lik va jism holatiga qarab uzayishi mumkin."
  },
  {
    q: "Qaysi narsaning boshi va dumi bor, lekin tanasi yo‘q?",
    a: ["Ilon", "Tanga", "Baliq", "Qush"],
    correct: 1, digit: "2",
    info: "Tanganing old va orqa tomoni bor."
  },
  {
    q: "Bir kishi zinadan 10-qavatdan pastga tushdi. Unga hech narsa bo‘lmadi. Nega?",
    a: ["Parashyut ishlatdi", "Liftga tushdi", "Zinadan tushdi", "U uchdi"],
    correct: 2, digit: "9",
    info: "U shunchaki zinadan pastga tushgan."
  },
  {
    q: "Qaysi narsa seniki bo‘lsa ham, uni boshqalar ko‘proq aytadi?",
    a: ["Familiyang", "Isming", "Manziling", "Yoshing"],
    correct: 1, digit: "3",
    info: "Ismingni boshqalar ko‘p tilga oladi."
  },
  {
    q: "Qaysi narsa ko‘paygan sari ko‘rish qiyinlashadi?",
    a: ["Yorug‘lik", "Tuman", "Oyna", "Yulduz"],
    correct: 1, digit: "7",
    info: "Tuman kuchaysa, ko‘rish masofasi kamayadi."
  },
  {
    q: "Bir haftada necha kun bor?",
    a: ["5", "6", "7", "8"],
    correct: 2, digit: "5",
    info: "Bir haftada 7 kun bor."
  },
  {
    q: "Qaysi narsa sindirilgandan keyin ishlatiladi?",
    a: ["Tuxum", "Oyna", "Telefon", "Chashka"],
    correct: 0, digit: "8",
    info: "Tuxum ko‘pincha pishirishdan oldin chaqiladi."
  },
  {
    q: "Qaysi narsa doim keladi, lekin hech qachon yetib kelmaydi?",
    a: ["Kecha", "Bugun", "Ertaga", "Tong"],
    correct: 2, digit: "1",
    info: "Ertaga kelganida bugunga aylanadi."
  },
  {
    q: "Qaysi narsa qancha ko‘p bo‘lsa, shuncha kam ko‘rasan?",
    a: ["Yorug‘lik", "Qorong‘ilik", "Ko‘z", "Oyna"],
    correct: 1, digit: "0",
    info: "Qorong‘ilik kuchaysa, ko‘rish kamayadi."
  },
  {
    q: "Odam nimani yo‘qotgandan keyin uning qadriga yetishi mumkin?",
    a: ["Vaqt", "Sog‘liq", "Pul", "Buyum"],
    correct: 1, digit: "4",
    info: "Ko‘pchilik sog‘liqning qadrini yo‘qotganda chuqurroq anglaydi."
  }
];


// =====================================
// O‘YIN O‘ZGARUVCHILARI
// =====================================

let current = 0;
let score = 0;
let time = 20;
let timer = null;
let answered = false;
let failed = false;
let isPaused = false;


// =====================================
// EKRANLARNI BOSHQARISH
// =====================================

function showScreen(screenId) {
  const screens = [
    "startScreen",
    "quizScreen",
    "pauseScreen",
    "doorScreen",
    "failedScreen"
  ];

  screens.forEach(id => {
    document.getElementById(id).hidden = id !== screenId;
  });
}


// =====================================
// O‘YINNI BOSHLASH
// =====================================

function startGame() {
  current = 0;
  score = 0;
  time = 20;
  answered = false;
  failed = false;
  isPaused = false;

  document.getElementById("successScreen").hidden = true;
  document.getElementById("lockedMessage").hidden = false;
  document.getElementById("doorCode").value = "";
  document.getElementById("doorMessage").textContent = "";

  showScreen("quizScreen");
  loadQuestion();
}


// =====================================
// SAVOLNI YUKLASH
// =====================================

function loadQuestion() {
  clearInterval(timer);

  answered = false;
  isPaused = false;
  time = 20;

  const q = questions[current];

  document.getElementById("number").textContent = current + 1;
  document.getElementById("score").textContent = score;
  document.getElementById("timer").textContent = time + "s";

  document.getElementById("question").textContent = q.q;
  document.getElementById("feedback").textContent = "";
  document.getElementById("nextBtn").hidden = true;

  const percent = (current / questions.length) * 100;

  document.getElementById("percent").textContent =
    Math.round(percent) + "%";

  document.getElementById("progressBar").style.width =
    percent + "%";

  document.getElementById("collected").textContent =
    current + " / 30 RAQAM";

  const answers = document.getElementById("answers");
  answers.innerHTML = "";

  q.a.forEach((answer, index) => {
    const btn = document.createElement("button");

    btn.className = "answer";

    btn.textContent =
      String.fromCharCode(65 + index) + "   " + answer;

    btn.onclick = () => checkAnswer(index, btn);

    answers.appendChild(btn);
  });

  startTimer();
}


// =====================================
// TAYMER
// =====================================

function startTimer() {
  clearInterval(timer);

  timer = setInterval(() => {
    if (isPaused || answered) return;

    time--;

    document.getElementById("timer").textContent =
      time + "s";

    if (time <= 5) {
      document.getElementById("timer").style.color =
        "#ff5577";
    } else {
      document.getElementById("timer").style.color =
        "#56d9ff";
    }

    if (time <= 0) {
      clearInterval(timer);

      answered = true;
      failed = true;

      showCorrect();

      document.getElementById("feedback").textContent =
        "⏰ Vaqt tugadi! " + questions[current].info;

      document.getElementById("nextBtn").hidden = false;
    }
  }, 1000);
}


// =====================================
// JAVOBLARNI TEKSHIRISH
// =====================================

function checkAnswer(index, btn) {
  if (answered || isPaused) return;

  answered = true;
  clearInterval(timer);

  const q = questions[current];

  const buttons = document.querySelectorAll(".answer");

  buttons.forEach(button => {
    button.disabled = true;
  });

  if (index === q.correct) {
    score += 10;

    btn.classList.add("correct");

    document.getElementById("feedback").textContent =
      "✓ TO‘G‘RI! MAXFIY RAQAMING: " +
      q.digit + " | " + q.info;

  } else {
    failed = true;

    btn.classList.add("wrong");

    showCorrect();

    document.getElementById("feedback").textContent =
      "✕ NOTO‘G‘RI! " + q.info;
  }

  document.getElementById("score").textContent = score;

  document.getElementById("nextBtn").hidden = false;
}


// =====================================
// TO‘G‘RI JAVOBNI KO‘RSATISH
// =====================================

function showCorrect() {
  const buttons = document.querySelectorAll(".answer");

  buttons.forEach((btn, index) => {
    btn.disabled = true;

    if (index === questions[current].correct) {
      btn.classList.add("correct");
    }
  });
}


// =====================================
// KEYINGI SAVOL
// =====================================

function nextQuestion() {
  if (!answered) return;

  clearInterval(timer);

  current++;

  if (current >= questions.length) {
    finishGame();
  } else {
    loadQuestion();
  }
}


// =====================================
// PAUZA
// =====================================

function togglePause() {
  if (answered) return;

  if (!isPaused) {
    clearInterval(timer);
    isPaused = true;
    showScreen("pauseScreen");
  } else {
    isPaused = false;
    showScreen("quizScreen");
    startTimer();
  }
}


// =====================================
// O‘YIN YAKUNI
// =====================================

function finishGame() {
  clearInterval(timer);

  if (failed) {
    document.getElementById("failedScore").textContent =
      score + " / 300";

    showScreen("failedScreen");
    return;
  }

  document.getElementById("progressBar").style.width = "100%";
  document.getElementById("percent").textContent = "100%";

  document.getElementById("doorCode").value = "";
  document.getElementById("doorMessage").textContent = "";

  document.getElementById("successScreen").hidden = true;
  document.getElementById("lockedMessage").hidden = false;

  showScreen("doorScreen");
}


// =====================================
// SIRLI ESHIK
// =====================================

function openDoor() {
  const input = document.getElementById("doorCode");

  const entered = input.value.trim();

  const correctCode = questions
    .map(q => q.digit)
    .join("");

  if (!/^\d{30}$/.test(entered)) {
    document.getElementById("doorMessage").textContent =
      "⚠️ 30 ta raqamni to‘liq kiriting!";
    return;
  }

  if (entered === correctCode) {
    document.getElementById("lockedMessage").hidden = true;

    document.getElementById("successScreen").hidden = false;

    document.getElementById("finalScore").textContent =
      score + " / 300";

    document.querySelector(".door-inner").style.animation =
      "appear 1s ease";
  } else {
    document.getElementById("doorMessage").textContent =
      "❌ KOD XATO! Raqamlar tartibini tekshir.";
    
    input.value = "";
    input.focus();
  }
}


// =====================================
// BOSHIDAN BOSHLASH
// =====================================

function restartGame() {
  clearInterval(timer);

  current = 0;
  score = 0;
  time = 20;
  answered = false;
  failed = false;
  isPaused = false;

  document.getElementById("timer").style.color = "#56d9ff";

  document.getElementById("doorCode").value = "";
  document.getElementById("doorMessage").textContent = "";

  document.getElementById("successScreen").hidden = true;
  document.getElementById("lockedMessage").hidden = false;

  showScreen("startScreen");
}


// =====================================
// DASTLABKI EKRAN
// =====================================

showScreen("startScreen");
