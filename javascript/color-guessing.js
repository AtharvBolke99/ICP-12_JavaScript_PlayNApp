let colorCode;
let score = 0;
let round = 0;
const totalRounds = 5;

const optionsDiv = document.getElementById("options");
const message = document.getElementById("message");
const scoreSpan = document.getElementById("score");
const totalSpan = document.getElementById("total");
const restartBtn = document.getElementById("restartBtn");

totalSpan.textContent = totalRounds;

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function startRound() {
  message.textContent = "";
  optionsDiv.innerHTML = "";

  if (round >= totalRounds) {
    message.textContent = `🎉 Game Over! Final Score: ${score} / ${totalRounds}`;
    return;
  }

  round++;

  const colors = [randomColor(), randomColor(), randomColor(), randomColor()];
  const answer = Math.floor(Math.random() * colors.length);
  colorCode = colors[answer];

  document.getElementById("colorCode").textContent = colorCode;

  colors.forEach(color => {
    const div = document.createElement("div");
    div.className = "colorBox";
    div.style.background = color;
    div.onclick = () => checkAnswer(color);
    optionsDiv.appendChild(div);
  });
}

function checkAnswer(selected) {
  if (selected === colorCode) {
    message.textContent = "✅ Correct!";
    score++;
    scoreSpan.textContent = score;
  } else {
    message.textContent = "❌ Wrong!";
  }

  setTimeout(startRound, 1000);
}

function newGame() {
  score = 0;
  round = 0;
  scoreSpan.textContent = score;
  startRound();
}

restartBtn.addEventListener("click", newGame);

window.onload = newGame;