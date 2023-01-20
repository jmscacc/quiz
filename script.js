const question = document.getElementById("question");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const aText = document.getElementById("a-text");
const bText = document.getElementById("b-text");
const cText = document.getElementById("c-text");
const dText = document.getElementById("d-text");
const result = document.getElementById("result");

const btn = document.getElementById("submit");

let quiz = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Rome", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "What is the largest planet in our solar system?",
        choices: ["Earth", "Jupiter", "Mars", "Saturn"],
        correctAnswer: "Jupiter"
    },
    {
        question: "Which element has the atomic number 17?",
        choices: ["Chlorine", "Sulfur", "Calcium", "Carbon"],
        correctAnswer: "Chlorine"
    },
    {
        question: "What is the smallest country in the world?",
        choices: ["Vatican City", "Monaco", "Nauru", "Tuvalu"],
        correctAnswer: "Vatican City"
    },
    {
        question: "Which of these is the largest mammal?",
        choices: ["Elephant", "Giraffe", "Whale", "Lion"],
        correctAnswer: "Whale"
    }
];

let currentQuizNumber = 0;
loadQuiz();

function loadQuiz() { 
    quizzes = quiz[currentQuizNumber];
    question.innerText = quizzes.question;
    aText.innerText = quizzes.choices[0];
    bText.innerText = quizzes.choices[1];
    cText.innerText = quizzes.choices[2];
    dText.innerText = quizzes.choices[3];
}

let answer = "";
let score = 0;
btn.addEventListener("click", () =>{
    if(a.checked){
        answer = quizzes.choices[0];
        all(a);
    }else if(b.checked){
        answer = quizzes.choices[1];
        all(b);
    }else if(c.checked) {
        answer = quizzes.choices[2];
        all(c);
    }else if(d.checked){
        answer = quizzes.choices[3];
        all(d);
    }else {
        alert("Please select one");
        
    }
    function all(check) {
        if(answer == quiz[currentQuizNumber].correctAnswer){
            score++;
        }
        if(currentQuizNumber == quiz.length-1){
            alert("Congratulations\nYou've got " + score + "\nRestart?")
            currentQuizNumber = -1;
        }
        currentQuizNumber++;
        loadQuiz();
        check.checked = false;
    }
    console.log(currentQuizNumber)
    
})

