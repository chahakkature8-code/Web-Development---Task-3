const quizData = [
{
question:"Which language is used for styling webpages?",
A:"HTML",
B:"CSS",
C:"Python",
correct:"B"
}
];

let currentQuestion = 0;

function loadQuestion(){

document.getElementById("question").innerText =
quizData[currentQuestion].question;

document.getElementById("A").innerText =
quizData[currentQuestion].A;

document.getElementById("B").innerText =
quizData[currentQuestion].B;

document.getElementById("C").innerText =
quizData[currentQuestion].C;

}

function checkAnswer(answer){

if(answer === quizData[currentQuestion].correct){

document.getElementById("result").innerText =
"Correct Answer";

}
else{

document.getElementById("result").innerText =
"Wrong Answer";

}

}

loadQuestion();

async function getJoke(){

const response =
await fetch(
"https://official-joke-api.appspot.com/random_joke"
);

const data =
await response.json();

document.getElementById("joke").innerHTML =
`${data.setup}<br><br>${data.punchline}`;

}