let score = 0;
let timeLeft = 60;
let gameActive = false;
let gamePaused = false;
let level = 1;
let moleInterval;
let timeInterval;
let currentMole = null;
let moleSpeed = 1500; 

const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const scoreDisplay = document.getElementById('score');
const timeDisplay = document.getElementById('time');
const levelDisplay = document.getElementById('level');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const restartBtn = document.querySelector('.restart-btn');
const gameOverDiv = document.querySelector('.game-over');
const finalScoreSpan = document.getElementById('final-score');

moles.forEach((mole, index) => {
    mole.addEventListener('click', () => {
        if (gameActive && !gamePaused && mole.classList.contains('up')) {
            whackMole(mole, index);
        }
    });
});
function startGame() {
    gameActive = true;
    gamePaused = false;
    score = 0;
    timeLeft = 60;
    level = 1;
    moleSpeed = 1500;
    
     updateDisplay();
    startBtn.classList.add('hidden');
    pauseBtn.classList.remove('hidden');
    pauseBtn.textContent = '⏸️ Pause';
    pauseBtn.classList.remove('paused');
    restartBtn.classList.remove('hidden');
    gameOverDiv.classList.add('hidden');
            

    timeInterval = setInterval(updateTime, 1000);
    moleInterval = setInterval(showRandomMole, moleSpeed);
}

        