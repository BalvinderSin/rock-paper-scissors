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
    console.log("computer choice: "+computerChoice);
    if (computerSelection === "rock" && humanSelecton === "Scissors"){
        computerScore++;
        console.log("Computer wins")
    } else if (computerSelection === "paper" && humanSelecton === "rock") {
        computerScore++;
        console.log("Computer wins");
    } else if (computerSelection === "scissors" && humanSelecton === "paper"){
        computerScore++;
        console.log("Computer wins");
    } else if (computerSelection === humanSelecton){
        console.log("Draw");
    } else {
        humanScore++;
        console.log("You win");
    }
}

let humanScore = 0;
let computerScore = 0;


for (let i = 0; i <5; i++) {
let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);
}

console.log("computer total: "+computerScore);
console.log("your total: "+humanScore);