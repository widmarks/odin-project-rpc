const computerSelection = function () {
  let num = Math.floor(Math.random() * 3 + 1);
  return num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors";
};

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "Scissors") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "Paper") ||
    (playerSelection.toLowerCase() === "paper" && computerSelection === "Rock")
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else if (
    playerSelection.toLowerCase() === computerSelection.toLowerCase()
  ) {
    return `Tie!`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}
const div = document.querySelector(`.result`);
div.textContent = `Your score: ${playerScore} --- Computer score: ${computerScore}`;

const buttons = document.querySelectorAll(`button`);
buttons.forEach((button) =>
  button.addEventListener(`click`, () => {
    const playerSelection = button.textContent;
    let pick = playRound(playerSelection, computerSelection());
    updateScore(pick);
  })
);

const p = document.createElement(`p`);

function updateScore(pick) {
  div.textContent = `Your score: ${playerScore} --- Computer score: ${computerScore}`;
  div.appendChild(p);
  p.textContent = pick;
  if (playerScore === 5) {
    div.textContent = `You win!`;
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    div.textContent = ` Computer wins, You lose!`;
    playerScore = 0;
    computerScore = 0;
  }
}
