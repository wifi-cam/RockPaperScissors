const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll(".btn");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let computerChoice;


buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        userChoice = btn.id;
        console.log(userChoice);
    })
})

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

// function getUserChoice() {
//     for (let i=0; i< buttons.length; i++) {
//         buttons[i].addEventListener('click', () => {
//             console.log(value);
//         }, {
//             once: true
//         });
//     }
// }


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

// for (let i=0; i< buttons.length; i++) {
//     buttons[i].addEventListener('click', () => {
//         console.log('Click!');
//     }, {
//         once: true
//     });
// }
// function game() {
//     for (let i = 0; i < 5; i++) { //5 Rounds
        
//     }
// }

//playRound();