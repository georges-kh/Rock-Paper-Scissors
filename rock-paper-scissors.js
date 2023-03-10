

// Choose a random move for the computer
function randomChoice() {
  const moves = ["Rock", "Paper", "Scissors"]; 
  let computerSelection = moves[Math.floor(Math.random()*moves.length)]
  return computerSelection; 
}

// Play one round of RPS vs the computer
function playRound(playerSelection, computerSelection) {
  const winningMoves = {"Rock": "Scissors", "Paper": "Rock", "Scissors": "Paper"};

  if (winningMoves[playerSelection] === computerSelection) {
    return "player";

  } else if (playerSelection === computerSelection) {
    return "draw";

  } else {
    return "computer";
  } 
}

// initialise playerScore and computerScore
let playerScore = 0;
let computerScore = 0;

// Play 5 rounds while keeping score
function game() {

		let playerSelection = this.value;
    if (playerSelection === "Random") {
      playerSelection = randomChoice();
    }

    // adds the selected class to the player buttons when click
    this.classList.add("selected");
    
		let computerSelection = randomChoice();

    // adds the selected class to the computer buttons when player buttons are clicked
    document.getElementById(computerSelection).classList.add("selected");

    let round = playRound(playerSelection, computerSelection);


    // if player wins 
    if (round === "player") {

      // add 1 to playerScore
      playerScore++;

      // change player's background to green and reset computer's
      playerCount.style.background = "green";
      computerCount.style.background = "rgb(173, 173, 173)";

      // display what happened
      update.textContent = `You win! ${playerSelection} beats ${computerSelection}`;


    // if computer wins, add 1 to computerScore
    } else if (round === "computer") {
      computerScore++;

      // change computer's background to green and reset player's
      playerCount.style.background = "rgb(173, 173, 173)";
      computerCount.style.background = "green";

      // update what happened
      update.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;


    // if they draw, add 1 to both
    } else if (round === "draw") {

      // change both backgrounds to gree
      playerCount.style.background = "green";
      computerCount.style.background = "green";
      playerScore++;
      computerScore++;

      // update what happened
      update.textContent = `It's a draw. You both chose ${computerSelection}`;
		}


    // display the score on the page
    playerCount.textContent = playerScore;
    computerCount.textContent = computerScore;


	if (playerScore >= 3 || computerScore >= 3) {
		if (playerScore >= 3) {
			console.log("You win the game!");
		} else if (computerScore >= 3) {
			console.log("You lose the game.")
		}


    // reset the score to 0 if player or computer wins
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

// player score
const playerCount = document.getElementById("player-count");

// computer score
const computerCount = document.getElementById("computer-count");

// middle text in score section
const update = document.getElementById("update");
