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