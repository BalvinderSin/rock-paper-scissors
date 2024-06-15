function getComputerChoice(){
    let randomNumber = Math.random()*100
    let computerChoice = "none";
    if (randomNumber < 33){
        computerChoice = "rock";
    } else if (randomNumber < 66){
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice
}

function getHumanChoice(){
    let humanChoice = prompt('Pick one of the following: rock, paper, scissors');
    console.log("You provided: "+humanChoice)
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        return humanChoice
    } else {
        console.log("Valid choice not provided.")
    }
        return "none"
}

function playRound(humanChoice, computerChoice) {
    let humanSelecton = humanChoice.toLowerCase();
    let computerSelection = computerChoice;
    let txt = ''
    txt = txt + 'your choice: '+humanSelecton+', computer choice: '+computerSelection
    if (computerSelection === "rock" && humanSelecton === "Scissors"){
        computerScore++;
        txt = txt + ", Computer wins."
    } else if (computerSelection === "paper" && humanSelecton === "rock") {
        computerScore++;
        txt = txt + ", Computer wins."
    } else if (computerSelection === "scissors" && humanSelecton === "paper"){
        computerScore++;
        txt = txt + ", Computer wins."
    } else if (computerSelection === humanSelecton){
        txt = txt + ", draw."
    } else {
        humanScore++;
        txt = txt + ", You win."
    }
    div.textContent = txt;
    divHum.textContent = humanScore;
    divComp.textContent = computerScore;
    if (humanScore === 5){
        divResult.textContent = 'Human wins';
        humanScore = 0;
        computerScore = 0;
    }
    if (computerScore === 5){
        divResult.textContent = 'Computer wins';
        humanScore = 0;
        computerScore = 0;
    }
}

let humanScore = 0;
let computerScore = 0;

console.log("computer total: "+computerScore);
console.log("your total: "+humanScore);

const body = document.querySelector("body");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const div = document.createElement("div");
const divComp = document.createElement("div");
const divHum = document.createElement("div");
const divResult = document.createElement("div");
btnRock.textContent = 'Rock';
btnPaper.textContent = 'Paper';
btnScissors.textContent = 'Scissors';

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);
body.appendChild(div);
body.appendChild(divResult);
body.appendChild(divHum);
body.appendChild(divComp);

btnRock.addEventListener("click", ()=>{
    playRound("rock", getComputerChoice())
});
btnPaper.addEventListener("click", ()=>{
    playRound("paper", getComputerChoice())
});
btnScissors.addEventListener("click", ()=>{
    playRound("scissors", getComputerChoice())
});
