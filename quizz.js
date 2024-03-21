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
    correctAnswer = currentQuestion.correctAnswer; // Sauvegarde de la réponse correcte

    answerBoxes.forEach((box, index) => {
        box.textContent = currentAnswers[index];   
        box.style.color = '';
        box.style.border =''; // Réinitialisation de la couleur du texte
    });
}

let timer;
let timerDuration = 12000;

function startTimer(){
    let timeLeft = timerDuration / 1000; 
    timerBox.textContent = timeLeft;
    
    

    timer = setInterval(() => {
        timeLeft--;
        if (timeLeft >= 0) {
        timerBox.textContent = timeLeft;
        
     }else {
        clearInterval(timer);
     }

    }, 1000);
}

function stopTimer(){
    clearInterval(timer);
}



function revealAnswer() {
    answerBoxes.forEach((box, index) => {
        if (box.textContent === correctAnswer) {
            box.style.color = 'green';
            box.style.border = '2px solid #00ff00';  // Texte en vert si correct
            
        }else{
            box.style.color = 'red';
            box.style.border = '2px solid #ff0000'; // Texte en rouge si incorrect
           
        }
    });
}



function NextQuestion() {
    stopTimer();
    startTimer();
    setTimeout(() => {
        questionIndex++;
        if (questionIndex < questionTheme.length) {
            showQuestion();
        } else {
            questionIndex = 0;
            questionThemeIndex++;
            if (questionThemeIndex >= 1) {
                document.location.href = "endPage.html";
            } else {
                questionCategory();
                showQuestion();
            }
        }
    }, 2000); // Délai de 3 secondes avant de passer à la prochaine question
}

answerBoxes.forEach(box => {
    box.addEventListener('click', () => {
        revealAnswer(); // Révéler la réponse au clic
        setTimeout(() => {
            questionNumberExact++;
            console.log(questionNumberExact); 
            const questionNumber = document.getElementsByClassName("questionNumber")[0];
            questionNumber.innerHTML = questionNumberExact + "/10";
        }, 2000); // Incrémenter le numéro de question et mettre à jour l'affichage après un délai de 4 secondes
        NextQuestion(); // Passer à la question suivante après un délai de 2 secondes
    });
});

// Appel initial pour afficher la première question
questionCategory();
showQuestion();
startTimer();


//HYPER IMPORTANT SANS CE COMMENTAIRE LE CODE NE FONCTIONNE PLUS//

/*import questionArray from './questionArray';
for (let i = 0; i < techQuestions.length; i++){
        const  currentQuestion = techQuestions [i];
        quizzQuestions(currentQuestions);

for (let i = 0; i < historyQuestions.length; i++){
        const  currentQuestion = historyQuestions [i];
        quizzQuestions(currentQuestions);}

for (let i = 0; i < cultureQuestions.length; i++){
        const  currentQuestion = cultureQuestions [i];
        quizzQuestions(currentQuestions);

for (let i = 0; i < sporthQuestions.length; i++){
        const  currentQuestion = sportQuestions [i];
        quizzQuestions(currentQuestions);
}*/