//Quiz CLI to test knowledege of football
let readline = require('readline-sync');

let globalScore = 0;

let questions = [
    {
        question : "Which player did Bayern Munich signed from Liverpool ? ",
        answer : "Sadio Mane"
    },
    
    {
        question : "Which team won the english premier league last season ? ",
        answer : "Manchester City"
    },

    {
        question: "Who won the champions league",
        answer: "Real Madrid"
    },

    {
        question: "Which team did Erling Haaland move to",
        answer: "Manchester City"
    },

]

// function to check answers of questions
function checkAnswer(input, answer) {
    if(input === answer)
        return true;
    return false;
}

const name = readline.question("What is your Name ? ");
console.log("Hello " + name );
console.log("lets start with the quiz");

let answer;
for(let i = 0; i < questions.length; i++) {
    console.log(`Question ${i+1}` );
    answer = readline.question(questions[i].question);
    console.log(questions[i].answer);
    if(checkAnswer(answer, questions[i].answer) === true) {
        globalScore++;
        console.log("correct answer");
    }

}
//final score
console.log("Your final score is" ,globalScore);





