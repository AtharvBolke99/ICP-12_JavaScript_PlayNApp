const mainuBar = document.getElementById("mainu-bar");
const togglemainu = () => {
    mainuBar.classList.toggle("active");
}

const appsCard = document.getElementById("apps-card");
const overlay = document.getElementById("overlay");
const img = document.getElementById("appImg");
let cardArray = [{img:"img0.jpg", appName:"Expense Tracker", appLines:"Easily log daily expenses, categorize spending, and visualize your budget with clear insights."},
                 {img:"img1.jpg", appName:"Quiz App", appLines:"Challenge yourself with fun quizzes across multiple categories.", link:""},
                 {img:"img2.jpg", appName:"Todo List", appLines:"Easily create, manage, and prioritize tasks in one place.", link:""},
                 {img:"", appName:"Build Calculator", appLines:"Perform basic and advanced calculations with ease SmartCalc is your reliable everyday.", link:""},
                 {img:"", appName:"BMI Calculator", appLines:"Quickly calculate your Body Mass Index to understand your fitness level.", link:""},
                 {img:"", appName:"Text Operation", appLines:"Easily transform, format, and analyze your text with handy tools.", link:""},
                 {img:"", appName:"Digital Clock", appLines:"A clean and modern digital clock for your screen.", link:""},
                 {img:"", appName:"Calender", appLines:"Keep track of important dates, events, and reminders.", link:""},
    ];
for(let i=1; i<cardArray.length;i++){
    appsCard.innerHTML += `
    <div class="apps" id="apps-card">
    <div class="apps-card">
        <img src="./images/img${i}.jpg" alt="app-img" class="app-img" id="appImg">
        <h3 class="app-name">${cardArray[i].appName}</h3>
        <P class="app-lines">${cardArray[i].appLines}</P>
        <div class="btn">
            <button class="start-btn">Start Now</button>
        </div>
    </div>
    </div>
    `;
function showOverlay() {   
    overlay.style.display = 'flex';
    overlay.innerHTML = `
    <div class="overlay" id="overlay">
                <a href="${cardArray[i].link}"></a>
            </div>
    `;

}
}


