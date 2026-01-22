// 🎵 Background music
const music = new Audio("music.mp3");
music.loop = true;
music.volume = 0.7;

// ====== ADD GLOBAL STYLES (BUTTONS + HEART ANIMATION) ======
const style = document.createElement("style");
style.innerHTML = `
  body {
    font-family: Arial, sans-serif;
    text-align: center;
  }

  button {
    padding: 12px 26px;
    font-size: 18px;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    margin: 10px;
    transition: all 0.3s ease;
  }

  #yesBtn {
  background-color: #28a745;
  color: white;
}

  }

  #yesBtn:hover {
  background-color: #218838;
  transform: scale(1.1);
}
  #noBtn {
    background-color: #adb5bd;
    color: black;
  }

  #noBtn:hover {
    background-color: #868e96;
  }

  @keyframes floatUp {
    from {
      transform: translateY(0);
      opacity: 1;
    }
    to {
      transform: translateY(-100vh);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

// ====== GLOBAL ======
let yesSize = 1;
let noClickCount = 0;

const noTexts = [
  "No",
  "Are you sure?",
  "Really sure??",
  "Please pookie 🥺",
  "If you say no I'll be sad 💔"
];

let music = new Audio("music.mp3");
music.loop = true;

// ====== NO BUTTON ======
function handleNo() {
  const noBtn = document.getElementById("noBtn");

  // Change text step by step
  noBtn.innerText =
    noTexts[Math.min(noClickCount, noTexts.length - 1)];

  // Make it red
  noBtn.style.backgroundColor = "red";
  noBtn.style.color = "white";

  // Move button randomly
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.transition = "left 0.6s ease, top 0.6s ease";

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // Increase YES button size (keep your logic)
  yesSize += 0.3;
  document.getElementById("yesBtn").style.transform =
    `scale(${yesSize})`;

  noClickCount++;
}
// If final message reached, make NO disappear
if (noClickCount >= noTexts.length) {
  setTimeout(() => {
    noBtn.style.opacity = "0";
    noBtn.style.pointerEvents = "none";
  }, 500);
}

// ====== YES BUTTON ======
function handleYes() {
  const music = document.getElementById("bgMusic");

  music.muted = true;
  music.play();

  setTimeout(() => {
    music.muted = false;
  music.volume = 0.8;
  music.currentTime = 0;
  music.play();
  },  300);
 


  document.body.innerHTML = `
    <div style="margin-top:60px;">
      <h1 id="name" style="color:#ff4d6d; font-size:42px;"></h1>

      <p class="line" style="opacity:0;">💖 Surpriseee!</p>
      <p class="line" style="opacity:0;">
        You just unlocked unlimited love, hugs, and care 🥰
      </p>
      <p class="line" style="opacity:0;">
        Warning: Leaving is not allowed 😉❤️
      </p>

      <img src="cat.png" width="140" style="margin-top:20px;">
    </div>
  `;

  typeWriter("Yayyyy you said yes my love 💖😘", "name", () => {

    showLines();
    heartBurst();
    confettiBurst();

  });
}

// ====== TYPEWRITER EFFECT ======
function typeWriter(text, id, callback) {
  let i = 0;
  const el = document.getElementById(id);
  el.innerHTML = "";

  let interval = setInterval(() => {
    el.innerHTML += text.charAt(i);
    i++;
    if (i === text.length) {
      clearInterval(interval);
      callback();
    }
  }, 120);
}

// ====== SHOW LINES ONE BY ONE ======
function showLines() {
  const lines = document.querySelectorAll(".line");
  lines.forEach((line, index) => {
    setTimeout(() => {
      line.style.opacity = 1;
    }, index * 700);
  });
}

// ====== FLOATING HEARTS ======
function heartBurst() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "0";
    heart.style.fontSize = "26px";
    heart.style.animation = "floatUp 4s linear";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 250);
}
function confettiBurst() {
  const emojis = ["🎉", "💖", "✨", "🥰", "❤️"];

  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];

    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.top = "-20px";
    confetti.style.fontSize = "24px";
    confetti.style.animation = "fall 3s linear";
    confetti.style.zIndex = "9999";

    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}




