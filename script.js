const computerSelection = function () {
  let num = Math.floor(Math.random() * 3 + 1);
  return num === 1 ? "Rock" : num === 2 ? "Paper" : "Scissors";
};
const playerSelection = function () {
  return prompt(`Rock Paper Scissors?`);
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

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(
      `Game ${[i]}: ${playRound(playerSelection(), computerSelection())}`
    );
  }
  console.log(`Your score : ${playerScore}`);
  console.log(`Computer score : ${computerScore}`);
  let winner =
    playerScore > computerScore
      ? `You win!`
      : playerScore === computerScore
      ? `Tied Game!`
      : `You lose!`;
  console.log(winner);
}
playGame();
