const wordDisplayEl = document.getElementById('word-display');
const wrongGuessesEl = document.getElementById('wrong-guesses').querySelector('span');
const gameMessageEl = document.getElementById('game-message');
const keyboardEl = document.getElementById('keyboard');
const restartButton = document.getElementById('restart-button');
const figureParts = document.querySelectorAll('.figure-part');

const words = ["DEVELOPER", "JAVASCRIPT", "HANGMAN", "BEGINNER", "PROJECT"];
const MAX_WRONG_GUESSES = 6;

let selectedWord = '';
let guessedLetters = [];
let wrongGuesses = 0;

function startGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    wrongGuesses = 0;
    gameMessageEl.textContent = '';
     
    displayWord();
    updateWrongGuesses();
    createKeyboard();    
}
function displayWord() {
    wordDisplayEl.innerHTML = selectedWord
        .split('')
        .map(letter => `<span>${guessedLetters.includes(letter) ? letter : '_'}</span>`)
        .join('');
            
    
    const wordIsGuessed = wordDisplayEl.textContent === selectedWord;
    if (wordIsGuessed) {
        gameMessageEl.textContent = 'You Won! 🎉';
        disableKeyboard();
    }    
}
function updateWrongGuesses() {
    wrongGuessesEl.textContent = wrongGuesses;
    figureParts.forEach((part, index) => {
        part.style.display = (index < wrongGuesses) ? 'block' : 'none';
    });
    if (wrongGuesses >= MAX_WRONG_GUESSES) {
        gameMessageEl.textContent = `You Lost! The word was: ${selectedWord}`;
        disableKeyboard();
    }      
}
