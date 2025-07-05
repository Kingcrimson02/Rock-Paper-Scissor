
function playGame() {
    console.clear();
    console.log("Rock, Paper, Scissors - Best of 5");

    function getComputerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random () * choices.length);
        return choices[randomIndex];
    }
    
    function getHumanChoice() {
        const choices = ['rock', 'paper', 'scissors'];
        let input = prompt("Enter rock, paper, or scissors").toLowerCase();
    
        while (!choices.includes(input)) {
            input = prompt("Invalid input. Please enter rock, paper, or scissors:").toLowerCase();
        }
    
        return input
    }

// Test the functions
const humanChoice = getHumanChoice();
console.log("You chose:", humanChoice);

const computerChoice = getComputerChoice();
console.log("Computer chose;", computerChoice);

let humanScore = 0;
let computerScore = 0

function PlayRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
   console.log(`It's a tie! You both chose ${humanChoice}.`);
}

else if (
    (humanChoice === `rock` && computerChoice === `scissors`) || (humanChoice === `scissors` && computerChoice === `paper`) || (humanChoice === `paper` && computerChoice === `rock`)
) {
    humanScore++;
    console.log( `You win! ${humanChoice}.`);
}

else {
    computerScore++;
   console.log( `You lose! ${computerChoice} beats ${humanChoice}.`);
}

}
for (let round = 1; round <= 5; round++) {
    const result = PlayRound (humanChoice, computerChoice);
    console.log(`Round ${round}:`);
    console.log(`You chose ${humanChoice}`);
    console.log(result);
    console.log(`Score -> You; ${humanScore}, Computer: ${computerScore}`);

    console.log(`--------------------`);
}

if (humanScore > computerScore) {
    console.log("You win the game");
}
else if (computerScore > humanScore) {
    console.log("Computer wins the game!");
}
else {
    console.log("The game is a tie");
}

}

playGame();