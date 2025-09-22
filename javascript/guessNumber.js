const guessInput = document.getElementById('guess-input');
        const submitBtn = document.getElementById('submit-btn');
        const restartBtn = document.getElementById('restart-btn');
        const message = document.getElementById('message');
        const guessesDisplay = document.getElementById('guesses');

        let randomNumber;
        let guessCount = 0;

        function startGame() {
            randomNumber = Math.floor(Math.random() * 100) + 1;
            guessCount = 0;
            message.innerText = '';
            message.style.color = '#B8B8EB';
            guessesDisplay.innerText = 'Guesses: 0';
            guessInput.value = '';
            guessInput.disabled = false;
            submitBtn.disabled = false;
            restartBtn.style.display = 'none';
            guessInput.focus();
            console.log("New game started. Random number:", randomNumber);
        }

        function checkGuess() {
            const userGuess = Number(guessInput.value);
            if (userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
                message.innerText = 'Please enter a number between 1 and 100.';
                return;
            }

            guessCount++;
            guessesDisplay.innerText = `Guesses: ${guessCount}`;

            if (userGuess === randomNumber) {
                message.innerText = `You got it! The number was ${randomNumber}. You won in ${guessCount} guesses!`;
                message.style.color = '#10B981';
                endGame();
            } else if (userGuess > randomNumber) {
                message.innerText = 'Too high!';
                message.style.color = '#E52E71';
            } else {
                message.innerText = 'Too low!';
                message.style.color = '#E52E71';
            }
            guessInput.value = '';
            guessInput.focus();
        }

        function endGame() {
            guessInput.disabled = true;
            submitBtn.disabled = true;
            restartBtn.style.display = 'block';
        }

        submitBtn.addEventListener('click', checkGuess);
        restartBtn.addEventListener('click', startGame);
        
        startGame();