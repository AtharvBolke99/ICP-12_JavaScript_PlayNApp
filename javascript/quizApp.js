const questions = [
            {
                question: "What is the capital of France?",
                answers:[ { text: "Paris", correct: true },
                          { text: "Berlin", correct: false }, 
                          { text: "Madrid", correct: false }, 
                          { text: "Rome", correct: false }]
            },

            {   
                question: "Which planet is known as the Red Planet?", 
                answers:[ { text: "Mars", correct: true }, 
                          { text: "Earth", correct: false },
                          { text: "Jupiter", correct: false }, 
                          { text: "Venus", correct: false }] 
            },

            {   
                question: "What is the largest ocean on Earth?", 
                answers:[ { text: "Pacific Ocean", correct: true }, 
                          { text: "Atlantic Ocean", correct: false }, 
                          { text: "Indian Ocean", correct: false }, 
                          { text: "Arctic Ocean", correct: false }]
            },

            { 
                question: "Who wrote 'Romeo and Juliet'?", 
                answers: [ { text: "William Shakespeare", correct: true }, 
                           { text: "Charles Dickens", correct: false }, 
                           { text: "Jane Austen", correct: false }, 
                           { text: "Mark Twain", correct: false }] 
            }
        ];

        const questionElement = document.getElementById("question");
        const answerButtonsElement = document.getElementById("answer-buttons");
        const nextButton = document.getElementById("next-btn");
        const quizContent = document.getElementById("quiz-content");
        const scoreContent = document.getElementById("score-content");
        const scoreElement = document.getElementById("score");
        const totalQuestionsElement = document.getElementById("total-questions");
        const restartButton = document.getElementById("restart-btn");

        let currentQuestionIndex = 0;
        let score = 0;

        function startQuiz() {
            currentQuestionIndex = 0;
            score = 0;
            quizContent.style.display = "block";
            scoreContent.style.display = "none";
            nextButton.style.display = "none";
            showQuestion();
        }

        function showQuestion() {
            answerButtonsElement.innerHTML = "";
            let currentQuestion = questions[currentQuestionIndex];
            questionElement.innerText = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

            const buttonsHTML = currentQuestion.answers.map((answer, index) => {
                const correctAttribute = answer.correct ? `data-correct="true"` : '';
                return `<button class="btn" ${correctAttribute} data-index="${index}">${answer.text}</button>`;
            }).join('');

            answerButtonsElement.innerHTML = buttonsHTML;

            answerButtonsElement.onclick = selectAnswer;
        }

        function selectAnswer(e) {
            if (e.target.tagName !== 'BUTTON') return;

            const selectedButton = e.target;
            const isCorrect = selectedButton.getAttribute('data-correct') === "true";

            if (isCorrect) {
                score++;
                selectedButton.style.background = '#16A34A';
                selectedButton.style.color = 'white';
            } else {
                selectedButton.style.background = '#DC2626';
                selectedButton.style.color = 'white';
            }

            const allButtons = answerButtonsElement.querySelectorAll('button');
            allButtons.forEach(button => {
                const buttonIsCorrect = button.getAttribute('data-correct') === "true";
                if (buttonIsCorrect) {
                    button.style.background = '#16A34A';
                    button.style.color = 'white';
                }
                button.disabled = true;
            });

            nextButton.style.display = "block";
        }

        function handleNextButton() {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
                nextButton.style.display = "none";
            } else {
                showScore();
            }
        }

        function showScore() {
            quizContent.style.display = "none";
            scoreContent.style.display = "block";
            scoreElement.innerText = score;
            totalQuestionsElement.innerText = questions.length;
        }

        nextButton.addEventListener("click", handleNextButton);
        restartButton.addEventListener("click", startQuiz);

        document.addEventListener("DOMContentLoaded", startQuiz);