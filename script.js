// #1 - Array which contains the choices rock, paper, scissors
const myArray = ['Rock', 'Paper', 'Scissors']
// #2 - Function which randomly picks one of the choices
function computerPlay() {
    const random = myArray[Math.floor(Math.random() * myArray.length)]; 
    return random;
}

// #3 - Function to play through a round and determines winner
let playerSelection;
let computerSelection = computerPlay();

function playRound (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay().toLowerCase();

    if (playerSelection == computerSelection) {
        return 'Its a tie!'
    } else if (
       (playerSelection == 'rock' && computerSelection == 'paper') || 
       (playerSelection == 'paper' && computerSelection == 'scissors') || 
       (playerSelection == 'scissors' && computerSelection == 'rock')
    ) {
        return `You lose! ${(computerSelection)} beats ${(playerSelection)}`
    } else { 
        return `You win! ${(playerSelection)} beats ${(computerSelection)}`
    }
}

console.log(playRound('rock'))

