
const questionText = document.querySelector(".question-text");
const answerBoxes = document.querySelectorAll(".answer-box div");


let questionIndex = 0;
let questionTheme;
let score = {
    tech: 0,
    history: 0,
    culture: 0,
    sport: 0
};

function showQuestionTheme() {
    switch (Math.floor(questionIndex / 10)) {
        case 0:
            questionTheme = techQuestions;
            break;
        case 1:
            questionTheme = historyQuestions;
            break;
        case 2:
            questionTheme = cultureQuestions;
            break;
        case 3:
            questionTheme = sportQuestions;
            break;
        default:
            questionTheme = [];
    }
}

/*Avec la methode du switch + math.floor/10 
tech est indicé de 0 à 9, 
histoire de 10 à 19,
culture de 20 à 29 
sport de 30 à 39*/

function nextQuestion() {
    showQuestionTheme();

    if (questionIndex < questionTheme.length){
        let currentQuestion = questionTheme[questionIndex % 10];
        questionText.textContent = currentQuestion.question;
        const currentAnswers = currentQuestion.answer;

        answerBoxes.forEach((box, index) => {
            box.textContent = currentAnswers[index];   
        });
        questionIndex++;

    } else {
        alert("Well done !");
    }
}

answerBoxes.forEach(box => {
    box.addEventListener('click', nextQuestion);
});

nextQuestion();

//appel de la fonction pour afficher la question















/*
function nextQuestion() {
    if (currentQuestionIndex < techQuestions.length){
        let currentQuestion = techQuestions[currentQuestionIndex];
        questionText.textContent = currentQuestion.question;
        const currentAnswers = currentQuestion.answer;
        
        answerBoxes.forEach((box, index) => {
            box.textContent = currentAnswers[index];   
        });
      currentQuestionIndex++;

    } else {

        alert("Well done !");
    }
}

answerBoxes.forEach(box => {
    box.addEventListener('click', nextQuestion);
});

nextQuestion();
       






//Fonction pour donner un ordre aléatoire aux questions 
function showTechQuestions() {
        const randomIndex = Math.floor(Math.random() * techQuestions.length);    
        questionText.textContent = techQuestions[randomIndex];
    }
    
    function showHistoryQuestions() {
        const randomIndex = Math.floor(Math.random() * historyQuestions.length);
        questionText.textContent = historyQuestions[randomIndex];
    }
    
    function showCultureQuestion() {
        const randomIndex = Math.floor(Math.random() * cultureQuestions.length);
        questionText.textContent = cultureQuestions[randomIndex];
    }
    
    function showSportQuestion() {
        const randomIndex = Math.floor(Math.random() * sportQuestions.length);
        questionText.textContent = sportQuestions[randomIndex];
    }

    // Fonction pour donner un ordre aléatoire aux reponses 

  




   /* import questionArray from './questionArray';
   
// Fonction pour afficher la réponse correspondante lors du clic sur une boîte de réponse
function showAnswer(answer, index) {
    answerBoxes[index].querySelector('p').textContent = answer;
}

// Boucle à travers chaque boîte de réponse et attache un gestionnaire d'événements de clic
answerBoxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        const answer = obtenirRéponseAppropriée(index); // Vous devrez définir votre propre fonction pour obtenir la réponse appropriée en fonction de l'index
        showAnswer(answer, index);
    });
});
    












/*import { quizzAnswers, quizzQuestions } from "./createQuizz";


import questionArray from './questionArray';
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