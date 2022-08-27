let computerChoice;
let userChoice = '';

function getComputerChoice () {
    // Roll random number 1-3 and assign to i
    let shoot = Math.floor(Math.random() * 3); // Random # 1 - 3
    if (shoot == 1) {
        console.log('Rock!'); // If i == 1 display 'Rock'
        computerChoice = 'rock'; 
    } else if (shoot == 2) {
        console.log('Paper!'); // ElseIf i == 2 display 'Paper'
        computerChoice = 'paper';
    } else {
        console.log('Scissors!'); // Else display 'Scissors'
        computerChoice = 'scissors';
    }   
}

function playRound(userChoice, computerChoice) {
    // Get user choice and store it
    userChoice = prompt("Enter Rock, Paper, or Scissors: ");
    userChoice = userChoice.toUpperCase();
    // getComputerChoice()
    getComputerChoice();
    // Set parameters for winning and losing combinations
}


function game() {
    for (let i = 0; i < 5; i++) { //5 Rounds

    }
}

playRound();