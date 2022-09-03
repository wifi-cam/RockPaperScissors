const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll(".btn");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
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
    return computerChoice;
}

buttons.forEach(btn =>{
    btn.addEventListener('click', function(){
        playRound(btn.value);
    })
})



function playRound(userChoice) {
    // Get user choice and store it
    const computerChoice = getComputerChoice();

    if (userChoice === computerChoice) {
        console.log(`${userChoice} == ${computerChoice}`)
        console.log('Draw!');
    } else if ((userChoice == 'rock' && computerChoice == 'scissors') ||
            (userChoice == 'paper' && computerChoice == 'rock') ||
            (userChoice == 'scissors' && computerChoice == 'paper')) {
                console.log(`${userChoice} > ${computerChoice}`)
                console.log('Win!');
            } else {
                console.log(`${computerChoice} > ${userChoice}`)
                console.log('Lose!');
            }
}

