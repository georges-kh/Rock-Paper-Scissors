

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

let playerScore = 0;
let computerScore = 0;

// Play 5 rounds while keeping score
function game() {
		let playerSelection = this.value;
    this.classList.add("selected");
		let computerSelection = getComputersChoice();

    // adds the selected class to the computer buttons
    document.getElementById(computerSelection).classList.add("selected");

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

	if (playerScore >= 3 || computerScore >= 3) {
		if (playerScore >= 3) {
			console.log("You win the game!");
		} else if (computerScore >= 3) {
			console.log("You lose the game.")
		}
    playerScore = 0;
    computerScore = 0;
	}
}

// removes the selected class from chosen buttons (player and computer)
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("selected");
}

const click = document.querySelectorAll(".player button");
// event listeners for player button clicks and end of transitions
click.forEach((move) => move.addEventListener("click", game));
click.forEach((select) => select.addEventListener("transitionend", removeTransition));

const compMove = document.querySelectorAll(".computer button");
// event listener for computer end of transitions
compMove.forEach((compSelect) => compSelect.addEventListener("transitionend", removeTransition));