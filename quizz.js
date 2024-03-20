const questionText = document.querySelector(".question-text");
const answerBoxes = document.querySelectorAll(".answer-box div");

let questionIndex = 0;
let questionThemeIndex = 0;
let questionTheme;
let score = {
    tech: 0,
    history: 0,
    culture: 0,
    sport: 0
};

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
    const correctAnswer = currentQuestion.correctAnswer; 

    answerBoxes.forEach((box, index) => {
        box.textContent = currentAnswers[index];   
        
    });
}

function NextQuestion() {
    if (questionIndex < questionTheme.length) {
        questionIndex++;
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

    document.addEventListener("click", function() {
        const progressbar = document.getElementById('progressbar'),
              max = progressbar.getAttribute('max'),
              time = 0;
        let value = parseInt(progressbar.value);
    
        const loading = function() {
          value += 1;
          progressbar.value = value;
          document.querySelector('.progress-value').innerHTML = value + '%';
    
          if (max == value) {
            clearInterval(animate);
          }
        };
    
        const animate = setInterval(function() {
          loading();}, time);
      });
}

answerBoxes.forEach(box => {
    box.addEventListener('click', NextQuestion);
    
});



//appel de la fonction pour afficher la question et la catégorie
questionCategory();
showQuestion();






//Fonction pour donner un ordre aléatoire aux questions 
/*function showTechQuestions() {
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