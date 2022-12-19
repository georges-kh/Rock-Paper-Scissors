function getComputerChoice() {
	const moves = ["Rock", "Paper", "Scissors"];
	compChoice = moves[Math.floor(Math.random()*moves.length)];
	return compChoice
}

let computerSelection = getComputerChoice().toUpperCase();


function playerRound(playerSelection, computerSelection) {
	let winningMoves = {"ROCK" : "SCISSORS", "SCISSORS" : "PAPER", "PAPER" : "ROCK"};
	let playerScore = 0;
	let computerScore = 0;
	if (playerSelection === computerSelection) {
		playerScore += 1;
		computerScore += 1;
		return "It's a Draw!";
	} else if (winningMoves[playerSelection] === computerSelection) {
		playerScore++
		return `You win! ${playerSelection} beats ${computerSelection}`;
	} else {
		computerScore++
		return `You lose! ${computerSelection} beats ${playerSelection}`;
	}
}

function game(rounds) {	
	for (let i = 0; i < rounds; i++) {
		let playerSelection = prompt("What's your move?", "").toUpperCase();
		playerRound(playerSelection, computerSelection);
		console.log(`The current score is:\nPlayer: ${playerScore} points\nComputer: ${computerScore}`)
	}
}