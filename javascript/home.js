const mainuBar = document.getElementById("mainu-bar");
const togglemainu = () => {
    mainuBar.classList.toggle("active");
}

const appsCard = document.getElementById("apps-card");
const img = document.getElementById("appImg");
let cardArray = [{img:"img0.jpg", appName:"Expense Tracker"},
                 {img:"img1.jpg", appName:"Quiz App"},
                 {img:"img2.jpg", appName:"Todo List"},
                 {img:"", appName:"Build Calculator"},
                 {img:"", appName:"BMI Calculator"},
                 {img:"", appName:"Text Operation"},
                 {img:"", appName:"Digital Clock"},
                 {img:"", appName:"Calender"},
    ];
for(let i=1; i<cardArray.length;i++){
    appsCard.innerHTML += `
    <div class="apps" id="apps-card">
    <div class="apps-card">
        <img src="./images/img${i}.jpg" alt="app-img" class="app-img" id="appImg">
        <p class="type">App</p>
        <h3 class="app-name">${cardArray[i].appName}</h3>
        <div class="btn">
            <button class="start-btn">Start Now</button>
        </div>
    </div>
    </div>
    `;
}
