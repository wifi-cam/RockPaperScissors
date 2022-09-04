const choices = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll(".btn");
const results = document.querySelector("result");
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
let computerChoice;
let roundWon = '';
let wins = 0;


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

function addResults () {
    if (roundWon == 'won') {
        const pText = document.createTextNode(`Winner!
        ${userChoice} > ${computerChoice}
        Score: ${wins}`);
        wins++;
        document.getElementById('results').appendChild(pText);
    } else if (roundWon == 'lost') {
        const pText = document.createTextNode(`Loser!
        ${userChoice} < ${computerChoice}
        Score: ${wins}`);
        document.getElementById('results').appendChild(pText);
    } else {
        const pText = document.createTextNode(`Tie!
        ${userChoice} == ${computerChoice}
        Score: ${wins}`);
        document.getElementById('results').appendChild(pText);
    }
}

function playRound(userChoice) {
    // Get user choice and store it
    const computerChoice = getComputerChoice();
    document.getElementById('results').innerHTML = '';

    if (userChoice === computerChoice) {
        const pText = document.createTextNode(`Tie!
        ${userChoice} == ${computerChoice}
        Score: ${wins}`);
        document.getElementById('results').appendChild(pText);
    } else if ((userChoice == 'rock' && computerChoice == 'scissors') ||
            (userChoice == 'paper' && computerChoice == 'rock') ||
            (userChoice == 'scissors' && computerChoice == 'paper')) {
                const pText = document.createTextNode(`Winner!
            ${userChoice} > ${computerChoice}
            Score: ${wins}`);
            wins++;
            document.getElementById('results').appendChild(pText);
            } else {
                const pText = document.createTextNode(`Loser!
            ${userChoice} < ${computerChoice}
            Score: ${wins}`);
            document.getElementById('results').appendChild(pText);
            }
}

