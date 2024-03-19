let container = document.getElementsById(question-box);

 export function quizzQuestions (){
    //Avant la factorisation
  /*  const questionBox = document.createElement ("section");
    quizzQuestions.classList.add("quizzQuestions");
    container.appendChild(quizzQuestions);*/

    const questionBox = createAnElement("section", container , "quizzQuestion" );

    /*const questionTitle = document.createElement ("h2");
    questionTitle.classList.add("questionTitle");
    questionTitle.innerText = "Question ?";
    questionBox.appendChild(questionTitle);*/

    const questionTitle = createAnElement("h2 ", questionBox ,"questionTitle" );
    questionTitle.innerText = "Question ?";


}


/*<section class ="question-box">//
//<h2>Question ?</h2>//
//</section>*/

let container2 = document.getElementsById(answer-box);

export function quizzAnswers (){


   /* const answerBox = document.createElement("section");
    quizzAnswers.classList.add("quizzAnswers");
    container2.appendChild(quizzAnswers);*/

    const answerBox = createAnElement("section", container2, "quizzAnswers" );

   /* const answerNumber = document.createElement("a href");
    answerNumber.classList.add("answerNumber");
    answerNumber.innerText = "answer";
    container2.appendChild(answerNumber);*/

    const answerNumber = createAnElement("a href", answerBox,"answerNumber"); 
    answerNumber.innerText = "answer";

}


function createAnElement(tag, parent, classname = null){
    const element = documnet.createElement(tag);
    element.classList.add(classname);
    parent.appendChild(element);
    return element; 
}


let questionCount = 0;

function showQuestions(index){
    const questionText =
}
