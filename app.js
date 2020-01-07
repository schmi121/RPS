document.addEventListener('DOMContentLoaded', function(){
    const choices = ['rock', 'paper', 'scissors'];
    
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(cpuChoice)

    let points;

    let usersChoice;
    
    const rockButton = document.getElementById('rock');
    const scissorsButton = document.getElementById('scissors');
    const paperButton = document.getElementById('paper');

    rockButton.addEventListener('click', () => {
        usersChoice = 'rock';
        playGame();
    });

    paperButton.addEventListener('click', () => {
        usersChoice = 'paper';
        playGame();
    });

    scissorsButton.addEventListener('click', () => {
        usersChoice = 'scissors';
        playGame();
    });

    

    function playGame() {
        alert(`CPU chose: ${cpuChoice}`)
        if (usersChoice === 'rock' && cpuChoice === 'scissors') {
            alert('You won');
        } else if (usersChoice === 'paper' && cpuChoice === 'rock') {
            alert('You won');
        } else if (usersChoice === 'scissors' && cpuChoice === 'paper') {
            alert('You won'); 
        } else if (usersChoice === cpuChoice) {
            alert('You Tied');
        } else {
            alert('You Lose you dummy');
        } 

        alert('Cpu is choosing new play');
        cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    }
});