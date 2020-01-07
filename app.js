document.addEventListener('DOMContentLoaded', function(){
    const choices = ['rock', 'paper', 'scissors'];
    
    let cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    console.log(cpuChoice)

    let points;

    let usersChoice;

    const scoreBoard = {
        playerScore: 0,
        cpuScore: 0,
        incrementPlayerScore: function() {
            this.playerScore += 1;
        },
        incrementCpuScore: function() {
            this.cpuScore += 1;
        },
        winnerCheck: function() {
            if (this.playerScore === 5) {
                alert("You Win!");
                this.resetGame();
            } else if (this.cpuScore === 5) {
                alert("You Lose");
                this.resetGame();
            }
        },
        resetGame: function() {
            this.playerScore = 0;
            this.cpuScore = 0;
            alert('The game will now reset');
        },
    };

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
            scoreBoard.playerScore++
        } else if (usersChoice === 'paper' && cpuChoice === 'rock') {
            alert('You won');
            scoreBoard.playerScore++
        } else if (usersChoice === 'scissors' && cpuChoice === 'paper') {
            alert('You won'); 
            scoreBoard.playerScore++
        } else if (usersChoice === cpuChoice) {
            alert('You Tied');
        } else {
            alert('You Lose you dummy');
            scoreBoard.cpuScore++;
        } 
        alert(`the score is Player: ${scoreBoard.playerScore} to CPU: ${scoreBoard.cpuScore}`);
        scoreBoard.winnerCheck();
        alert('Cpu is choosing new play');
        cpuChoice = choices[Math.floor(Math.random() * choices.length)];
    }
});