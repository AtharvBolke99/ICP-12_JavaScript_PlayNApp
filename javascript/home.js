const mainuBar = document.getElementById("mainu-bar");
const togglemainu = () => {
    mainuBar.classList.toggle("active");
}

const appsCard = document.getElementById("apps-card");
const img = document.getElementById("appImg");
let cardArray = [{img:"expense.png", appName:"Expense Tracker", appLines:"Easily log daily expenses and visualize your budget with clear insights.", link:"expensetraker.html"},
                 {img:"quiz.png", appName:"Quiz App", appLines:"Challenge yourself with fun quizzes across multiple categories.", link:"quizApp.html"},
                 {img:"todo.png", appName:"Todo List", appLines:"Easily create, manage, and prioritize tasks in one place.", link:"todo.html"},
                 {img:"calculator.jpg", appName:"Build Calculator", appLines:"Perform advanced calculations with ease SmartCalc is your reliable everyday.", link:"calculator.html"},
                 {img:"bmi_calculator.png", appName:"BMI Calculator", appLines:"Quickly calculate your Body Mass Index to understand your fitness level.", link:"bmical.html"},
                 {img:"text_op.jpg", appName:"Text Operation", appLines:"Easily transform, format, and analyze your text with handy tools.", link:"text.html"},
                 {img:"clock.jpg", appName:"Digital Clock", appLines:"A clean and modern digital clock for your screen.", link:"clock.html"},
                 {img:"calender.jpg", appName:"Calender", appLines:"Keep track of important dates, events, and reminders.", link:"calender.html"},
                 {img:"number_sys.png", appName:"Number System", appLines:"Easily convert and learn different number systems.", link:"number-system.html"},
                 {img:"torch.jpg", appName:"Torch", appLines:"Light up your way with a simple digital torch.", link:"torch.html"},
    ];
for(let i=0; i<cardArray.length;i++){
    appsCard.innerHTML += `
    <div class="apps" id="apps-card">
    <div class="apps-card">
        <img src="./images/${cardArray[i].img}" alt="app-img" class="app-img" id="appImg">
        <h3 class="app-name">${cardArray[i].appName}</h3>
        <P class="app-lines">${cardArray[i].appLines}</P>
        <div class="btn">
            <button class="start-btn" onclick="showOverlay()"><a class="link-tag" href="./pages/apps/${cardArray[i].link}"}>Start Now</a></button>
        </div>
    </div>
    </div>
    `;
}

const gameCard = document.getElementById("games-card");
const gameimg = document.getElementById("gameImg");
let gameArray = [{gameimg:"tic_tac_toe.jpg", gameName:"Tic-Tac-Toe", gameLines:"Play the classic X and O game and test your strategy.", link:"tic-tac-toe.html"},
                 {gameimg:"guess_number.jpg", gameName:"Guess A Number", gameLines:"Challenge your mind to guess the hidden number.", link:"guessNumber.html"},
                 {gameimg:"color_guess.jpg", gameName:"Colour Guessing Game", gameLines:"Test your color sense with a fun guessing challenge.", link:"color-guessing.html"},
                 {gameimg:"hangman.jpg", gameName:"Hangman Game", gameLines:"Guess the word before the hangman is complete.", link:"hangman.html"},
                 {gameimg:"whack-a-mole.jpg", gameName:"Whack-A-Mole", gameLines:"Tap fast and score by catching popping moles.", link:"whack-a-mole.html"},
    ];
for(let i=0; i<gameArray.length;i++){
    gameCard.innerHTML += `
    <div class="games" id="games-card">
    <div class="games-card">
        <img src="./images/${gameArray[i].gameimg}" alt="game-img" class="game-img" id="gameImg">
        <h3 class="game-name">${gameArray[i].gameName}</h3>
        <P class="game-lines">${gameArray[i].gameLines}</P>
        <div class="btn">
            <button class="start-btn" onclick="showOverlay()"><a class="link-tag" href="./pages/games/${gameArray[i].link}"}>Start Now</a></button>
        </div>
    </div>
    </div>
    `;
}

const reviewsCard = document.getElementById("reviews-card");
const reviewLines = document.getElementById("review-lines");
const coustName = document.getElementById("coust-name");

let reviewsArray = [
    {reviews:'"PlayNApps has completely transformed my productivity workflow. The apps are intuitive and beautifully designed."', coustName:"- Suraj Chavan"},
    {reviews:'"The games section is fantastic! Tic-Tac-Toe and Rock Paper Scissors bring back childhood memories with modern design."', coustName:"- jethalal"},
    {reviews:'"The expense tracker has helped me manage my finances better than any other app. Clean interface and powerful features!"', coustName:"- Dr. Hathi"},
    {reviews:'"The BMI calculator is so simple yet effective. The design is clean and the results are presented beautifully."', coustName:"- Champaklal"},
    {reviews:'"The BMI calculator is so simple yet effective. The design is clean and the results are presented beautifully."', coustName:"- Aatmaram"},
    {reviews:'"PlayNApps has completely transformed my productivity workflow. The apps are intuitive and beautifully designed."', coustName:"- Motiram"},
    {reviews:'"The games section is fantastic! Tic-Tac-Toe and Rock Paper Scissors bring back childhood memories with modern design."', coustName:"- Atul"}
];

for(let i=0; i<reviewsArray.length; i++){
    reviewsCard.innerHTML += `
    <div class="reviews" id="reviews-card">
            <div class="reviews-card">
                <img src="./images/quote.png" alt="game-img" class="review-img" id="reviewImg">
                <p class="review-lines" id="review-lines">${reviewsArray[i].reviews}</p>
                <p class="coust-name" id="coust-name">${reviewsArray[i].coustName}</p>
            </div>
        </div>
    
    `;

}