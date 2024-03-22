const questionText = document.querySelector(".question-text");
const answerBoxes = document.querySelectorAll(".answer-box div");
const timerBox = document.querySelector(".timer");
let questionIndex = 0;
let questionThemeIndex = 0;
let questionTheme;
let correctAnswer;
let questionNumberExact = 1;
function questionCategory() {
    if (questionThemeIndex === 0) {
        questionTheme = mixQuestion;
    } else {
        questionTheme = [];
    }
}
function showQuestion() {
    let currentQuestion = questionTheme[questionIndex];
    questionText.textContent = currentQuestion.question;
    const currentAnswers = currentQuestion.answer;
    correctAnswer = currentQuestion.correctAnswer;
    answerBoxes.forEach((box, index) => {
        box.textContent = currentAnswers[index];
        box.style.color = '';
        box.style.border ='';
    });
}
let timer;
let timerDuration = 12000;
function resetTimer() {
    const timerElement = document.querySelector('.timer');
    timerElement.style.animation = 'none';
    timerElement.offsetHeight;
    timerElement.style.animation = '';
}
function startTimer() {
    let timeLeft = timerDuration / 1000;
    updateTimerBox(timeLeft);
    resetTimer();
    if (timer) {
        clearInterval(timer);
    }
    timer = setInterval(() => {
        timeLeft--;
        updateTimerBox(timeLeft);
        if (timeLeft <= 0) {
            clearInterval(timer);
            setTimeout(() => {
                startTimer();
            }, 2000);
        }
    }, 1000);
}
function updateTimerBox(time) {
    const timerBoxElement = document.querySelector(".timer-box-text"); // Assurez-vous que cet élément existe pour afficher le temps restant
    if (timerBoxElement) timerBoxElement.textContent = time;
}
function stopTimer() {
    clearInterval(timer);
    timer = null;
}
``
function revealAnswer() {
    answerBoxes.forEach((box, index) => {
        if (box.textContent === correctAnswer) {
            box.style.color = 'green';
            box.style.border = '2px solid #00FF00';  // Texte en vert si correct
        }else{
            box.style.color = 'red';
            box.style.border = '2px solid #FF0000'; // Texte en rouge si incorrect
        }
    });
}
function NextQuestion() {
    stopTimer();
    setTimeout(() => {
    startTimer();
    updateTimerBox();
}, 2000);
    setTimeout(() => {
        questionIndex++;
        if (questionIndex < questionTheme.length) {
            showQuestion();
        } else {
            questionIndex = 0;
            questionThemeIndex++;
            if (questionThemeIndex >= 1) {
                document.location.href = "endpage.html";
            } else {
                questionCategory();
                showQuestion();
            }
        }
    }, 2000);
}
// Question count
answerBoxes.forEach(box => {
    box.addEventListener('click', () => {
        revealAnswer();
        setTimeout(() => {
            questionNumberExact++;
            console.log(questionNumberExact);
            const questionNumber = document.getElementsByClassName("questionNumber")[0];
            questionNumber.innerHTML = questionNumberExact + "/16";
        }, 2000);
        NextQuestion();
    });
});
questionCategory();
showQuestion();
startTimer();











