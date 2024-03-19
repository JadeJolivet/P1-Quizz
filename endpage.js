let score = 2;

// DOM h2 scoreComment
const scoreComment = document.getElementById("ScoreComment");

if (score >= 7) {
    scoreComment.innerHTML = "Great Job!";
} else if (score >= 4) {
    scoreComment.innerHTML = "Not bad!";
} else {
    scoreComment.innerHTML = "Too bad!";
}

// DOM Score
const scoreResult = document.getElementsByClassName("ScoreResult")[0];
scoreResult.innerHTML = `${score} / 10`;


// // DOM Pseudo
//  const pseudoValue = document.getElementsByClassName("Pseudo")[0];
//  pseudoValue.innerHTML = inputPseudo.value;
//  import { inputPseudo } from "./index.js";



// import { test } from "./index.js";
// console.log (test);
