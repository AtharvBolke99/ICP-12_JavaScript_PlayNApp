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

        // Add click event listeners to all moles
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
            
            // Start the game timers
            timeInterval = setInterval(updateTime, 1000);
            moleInterval = setInterval(showRandomMole, moleSpeed);
        }

        function restartGame() {
            // Reset all moles
            moles.forEach(mole => {
                mole.classList.remove('up', 'whacked');
            });
            
            // Clear any existing intervals
            if (timeInterval) clearInterval(timeInterval);
            if (moleInterval) clearInterval(moleInterval);
            
            startGame();
        }

        function togglePause() {
            if (!gameActive) return;
            
            gamePaused = !gamePaused;
            
            if (gamePaused) {
                // Pause the game
                clearInterval(timeInterval);
                clearInterval(moleInterval);
                pauseBtn.textContent = '▶️ Resume';
                pauseBtn.classList.add('paused');
                
                // Hide any visible moles
                moles.forEach(mole => {
                    if (mole.classList.contains('up')) {
                        mole.classList.remove('up');
                    }
                });
                currentMole = null;
            } else {
                // Resume the game
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

        function updateDisplay() {
            scoreDisplay.textContent = score;
            timeDisplay.textContent = timeLeft;
            levelDisplay.textContent = level;
        }

        function showRandomMole() {
            if (!gameActive || gamePaused) return;
            
            // Hide current mole if any
            if (currentMole) {
                currentMole.classList.remove('up');
            }
            
            // Show random mole
            const randomIndex = Math.floor(Math.random() * holes.length);
            currentMole = moles[randomIndex];
            currentMole.classList.add('up');
            
            // Hide mole after a random time
            setTimeout(() => {
                if (currentMole && currentMole.classList.contains('up') && !gamePaused) {
                    currentMole.classList.remove('up');
                }
            }, Math.random() * 1000 + 500);
        }

        function whackMole(mole, index) {
            if (!gameActive || gamePaused || !mole.classList.contains('up')) return;
            
            // Add whacked animation
            mole.classList.remove('up');
            mole.classList.add('whacked');
            
            // Remove whacked class after animation
            setTimeout(() => {
                mole.classList.remove('whacked');
            }, 500);
            
            // Update score
            score += 10;
            updateDisplay();
            
            // Show hit effect
            showHitEffect(holes[index]);
            
            // Level up every 100 points
            if (score > 0 && score % 100 === 0) {
                levelUp();
            }
            
            currentMole = null;
        }

        function showHitEffect(hole) {
            const effect = document.createElement('div');
            effect.classList.add('hit-effect');
            effect.textContent = '+10';
            hole.appendChild(effect);
            
            setTimeout(() => {
                hole.removeChild(effect);
            }, 600);
        }

        function levelUp() {
            level++;
            moleSpeed = Math.max(moleSpeed - 100, 400); // Increase speed, minimum 400ms
            
            // Clear and restart with new speed
            clearInterval(moleInterval);
            moleInterval = setInterval(showRandomMole, moleSpeed);
            
            // Visual feedback for level up
            levelDisplay.style.animation = 'hit-pop 0.6s ease-out';
            setTimeout(() => {
                levelDisplay.style.animation = '';
            }, 600);
        }

        function endGame() {
            gameActive = false;
            gamePaused = false;
            
            // Clear intervals
            clearInterval(timeInterval);
            clearInterval(moleInterval);
            
            // Hide any remaining moles
            moles.forEach(mole => {
                mole.classList.remove('up', 'whacked');
            });
            
            // Show game over screen
            finalScoreSpan.textContent = score;
            gameOverDiv.classList.remove('hidden');
            pauseBtn.classList.add('hidden');
            restartBtn.classList.remove('hidden');
            
            currentMole = null;
        }

        // Initialize display
        updateDisplay();

        