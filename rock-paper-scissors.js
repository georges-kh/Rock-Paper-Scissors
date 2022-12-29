// Choose a random move for the computer
function getComputersChoice() {
  const moves = ["Rock", "Paper", "Scissors"]; 
  let computerSelection = moves[Math.floor(Math.random()*moves.length)]
  return computerSelection; 
}

// Play one round of RPS vs the computer
function playRound(playerSelection, computerSelection) {
  const winningMoves = {"Rock": "Scissors", "Paper": "Rock", "Scissors": "Paper"};
  if (winningMoves[playerSelection] === computerSelection) {
    console.log(`You win! ${playerSelection} beats ${computerSelection}`);
    return "player";

  } else if (playerSelection === computerSelection) {
    console.log(`It's a draw! You both chose ${playerSelection}`);
    return "draw";

  } else {
    console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
    return "computer";
  } 
}

// Play 5 rounds while keeping score
function game() {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {

    // playerSelection and computerSelection inside loop to be declared differently every time
    let playerSelection = (prompt("What's your move?", ""));
    let computerSelection = getComputersChoice();
    let round = playRound(playerSelection, computerSelection);

    // if player wins, add 1 to playerScore
    if (round === "player") {
      playerScore++;

    // if computer wins, add 1 to computerScore
    } else if (round === "computer") {
      computerScore++;

    // if they draw, add 1 to both
    } else if (round === "draw") {
      playerScore++;
      computerScore++;
    }

    console.log(`Player ${playerScore}, Computer ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");

  } else if (playerScore < computerScore) {
    console.log("You lose the game.")
    
  } else {
    console.log("It's a draw.");
  }
}

game();