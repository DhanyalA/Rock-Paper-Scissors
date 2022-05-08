// #1 - Object which contains the choices rock, paper, scissors
const choices = ['Rock', 'Paper', 'Scissors']
// #2 - Function which randomly picks one of the choices
function computerPlay() {
    const random = choices[Math.floor(Math.random() * choices.length)]; 
    return random;
}
console.log(computerPlay()); 

