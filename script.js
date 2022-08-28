const choices = ['rock', 'paper', 'scissors'];
let computerChoice;

function getComputerChoice () {
    // Roll random number 1-3 and assign to i
    let shoot = Math.floor(Math.random() * choices.length); // Random selection from choices array
    if (shoot == 0) {
        //console.log('Rock!'); // If i == 1 display 'Rock'
        computerChoice = 'rock'; 
    } else if (shoot == 1) {
        //console.log('Paper!'); // ElseIf i == 2 display 'Paper'
        computerChoice = 'paper';
    } else {
        //console.log('Scissors!'); // Else display 'Scissors'
        computerChoice = 'scissors';
    }   
}

function getUserChoice() {
    let shoot = prompt("Enter Rock Paper or Scissors: ");
    while (shoot == null) {
        shoot = prompt("Enter Rock Paper or Scissors: ");
    }
    shoot = shoot.toLowerCase();
    let valid = checkSelection(shoot);
    while (valid == false) {
        shoot = prompt("Wrong Input. Enter Rock Paper or Scissors: ");
        shoot = shoot.toLowerCase();
        valid = checkSelection(shoot); // Once valid == true the while loop will break out
    }
    console.log(shoot);
    console.log(valid);
}


function checkSelection(choice) { // Checks to see if typed input matches with one of the choices
    if(choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}


function playRound() {
    // Get user choice and store it
    const userChoice = getUserChoice();
    const computerChoice = getComputerChoice();
}


function game() {
    for (let i = 0; i < 5; i++) { //5 Rounds
        
    }
}

playRound();