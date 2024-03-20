const questionText = document.querySelector(".question-text");
const answerBoxes = document.querySelectorAll(".answer-box div");

let questionIndex = 0;
let questionThemeIndex = 0;
let questionTheme;
let correctAnswer;

function questionCategory() {
    switch (questionThemeIndex) {
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

function showQuestion() {
    let currentQuestion = questionTheme[questionIndex];
    questionText.textContent = currentQuestion.question;
    const currentAnswers = currentQuestion.answer;
    correctAnswer = currentQuestion.correctAnswer; // Sauvegarde de la réponse correcte

    answerBoxes.forEach((box, index) => {
        box.textContent = currentAnswers[index];   
        box.style.color = ''; // Réinitialisation de la couleur du texte
    });
}

function revealAnswer() {
    answerBoxes.forEach((box, index) => {
        if (box.textContent === correctAnswer) {
            box.style.color = 'green'; // Révélation de la réponse correcte en vert
        }else{
            box.style.color ="red";
        }
    });
}

function NextQuestion() {
    setTimeout(() => {
        questionIndex++;
        if (questionIndex < questionTheme.length) {
            showQuestion();
        } else {
            questionIndex = 0;
            questionThemeIndex++;
            if (questionThemeIndex >= 4) {
                document.location.href = "endPage.html";
            } else {
                questionCategory();
                showQuestion();
            }
        }
    }, 4000); // Délai de 4 secondes avant de passer à la prochaine question
}

answerBoxes.forEach(box => {
    box.addEventListener('click', () => {
        revealAnswer(); // Révéler la réponse au clic
        NextQuestion(); // Passer à la question suivante après un délai de 2 secondes
    });
});

// Appel initial pour afficher la première question
questionCategory();
showQuestion();


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