function getComputerChoice() {
	const moves = ["Rock", "Paper", "Scissors"];
	compChoice = moves[Math.floor(Math.random()*moves.length)];
	return compChoice
}

function playerRound(playerSelection, computerSelection) {
	const winningMoves = {"ROCK" : "SCISSORS", "SCISSORS" : "PAPER", "PAPER" : "ROCK"};
	while (true) {
		if (playerSelection === "") {
			playerSelection = getComputerChoice().toUpperCase()	//if player doesn't make a move then a random one is given
		} 
		if (playerSelection === computerSelection) {
			console.log("It's a Draw!");
			return "draw";
		} else if (winningMoves[playerSelection] === computerSelection) {
			console.log(`You win! ${playerSelection} beats ${computerSelection}`);
			return "player";
		} else if (!(Array.from(Object.keys(winningMoves)).includes(playerSelection))) {
			console.log("That's not a valid input.");
			return "invalid";
		} else if (winningMoves[playerSelection] !== computerSelection) {
			console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
			return "comp";
		} 
	} 
} 

function scoring(round, playerScore, computerScore) {
	if (round === "draw") {
		playerScore += 1;
		computerScore += 1;
	} else if (round === "player") {
		playerScore++
	} else if (round === "comp") {
		computerScore++
	}
	scores = [playerScore, computerScore]
	return scores
}

function winner(playerScore, computerScore) {
	if (playerScore > computerScore) {
		console.log("Congratulations! You've won!");
	} else if (playerScore < computerScore) {
		console.log("Better luck next time.");
	} else {
		console.log("It's a draw!")
	}
}

function game(rounds) {	
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < rounds; i++) {
		let playerSelection = prompt("What's your move?", "").toUpperCase();
		let computerSelection = getComputerChoice().toUpperCase();
		let round = playerRound(playerSelection, computerSelection);
		let scores = scoring(round, playerScore, computerScore);
		if (round === "invalid") {
			i--
		} else {
			playerScore = scores[0];
			computerScore = scores[1];
			console.log(`Current score is:\nPlayer: ${playerScore}\nComputer: ${computerScore}`);
		}
		
	}
	winner(playerScore, computerScore);
}

function RPS() {
	while (true) {
		rounds = prompt("How many rounds do you want to play?", "");
		if (rounds === "" || isNaN(rounds)) {
			console.log("That's not a valid input.");
		} else if (rounds === null) {
			console.log("Bye bye!");
			throw "stop execution";
		} else {
			game(Number(rounds));
		}
		let playAgain = confirm("Do you wanna play again?");
		if (!playAgain) {
			alert("Bye bye!");
			break;
		}
	}
}

RPS()