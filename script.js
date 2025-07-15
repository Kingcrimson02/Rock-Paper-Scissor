
function playGame() {

let humanScore = 0;
let computerScore = 0

const roundResult = document.querySelector("#roundResult");
const scoreDisplay = document.querySelector("#score");
const finalResult = document.querySelector("#finalResult");

const rockBtn = document.querySelector("#Rock");
const paperBtn = document.querySelector("#Paper");
const scissorsBtn = document.querySelector("#Scissors");

    rockBtn.addEventListener("click", () => handleClick("rock"));
    paperBtn.addEventListener("click", () => handleClick("paper"));
    scissorsBtn.addEventListener("click", () => handleClick("scissors"));

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random () * choices.length);
    return choices[randomIndex];
}

function playRound(humanChoice, computerChoice) {
if (humanChoice === computerChoice) {
   return `It's a tie!`;
}

else if (
    (humanChoice === `rock` && computerChoice === `scissors`) || (humanChoice === `scissors` && computerChoice === `paper`) || (humanChoice === `paper` && computerChoice === `rock`)
) {
    humanScore++;
    return `You win! ${humanChoice} beats ${computerChoice}.`;
}

else {
    computerScore++;
   return `You lose! ${computerChoice} beats ${humanChoice}.`;
}
}

function handleClick (humanSelection) {
    if (humanScore >= 5 || computerScore >= 5) return;

    const computerSelection = getComputerChoice();
    const result = playRound(humanSelection, computerSelection);

    roundResult.textContent = result;
    scoreDisplay.textContent = `Player: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore === 5) {finalResult.textContent = "You won the game!";}
    else if (computerScore === 5) {finalResult.textContent = "Computer won the game.";}

}
}
playGame();