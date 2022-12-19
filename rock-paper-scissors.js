function getComputerChoice() {
    let moves = ["Rock", "Paper", "Scissors"];
    compMove = moves[Math.floor(Math.random() * moves.length)];
    return compMove;
}

const computerSelection = getComputerChoice();