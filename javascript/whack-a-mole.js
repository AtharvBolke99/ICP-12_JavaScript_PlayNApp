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
function restartGame() {
    moles.forEach(mole => {
        mole.classList.remove('up', 'whacked');
    });
    if (timeInterval) clearInterval(timeInterval);
    if (moleInterval) clearInterval(moleInterval);
            
    startGame();
}
function togglePause() {
    if (!gameActive) return;
    gamePaused = !gamePaused;
    if (gamePaused) {
        clearInterval(timeInterval);
        clearInterval(moleInterval);
        pauseBtn.textContent = '▶️ Resume';
        pauseBtn.classList.add('paused');
                
        moles.forEach(mole => {
            if (mole.classList.contains('up')) {
                mole.classList.remove('up');
            }
        });
        currentMole = null;
            } else {
                timeInterval = setInterval(updateTime, 1000);
                moleInterval = setInterval(showRandomMole, moleSpeed);
                pauseBtn.textContent = '⏸️ Pause';
                pauseBtn.classList.remove('paused');
            }
        }
function updateTime() {
    if (gamePaused) return;
        timeLeft--;
        timeDisplay.textContent = timeLeft;
            if (timeLeft <= 0) {
                endGame();
            }
}

        