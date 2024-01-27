function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return 'It\'s a tie!';
    }
    if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        return 'You lose! Paper beats Rock';
      } else {
        return 'You win! Rock beats Scissors';
      }
    }
    if (playerSelection === 'paper') {
      if (computerSelection === 'scissors') {
        return 'You lose! Scissors beats Paper';
      } else {
        return 'You win! Paper beats Rock';
      }
    }
    if (playerSelection === 'scissors') {
      if (computerSelection === 'rock') {
        return 'You lose! Rock beats Scissors';
      } else {
        return 'You win! Scissors beats Paper';
      }
    }
  }

/*function game() {
    let playerScore = 0;
    for (let i = 0; i < 5; i++) {
      const playerSelection = window.prompt('Choose rock, paper, or scissors');
      const computerSelection = getComputerChoice();
      console.log(playRound(playerSelection, computerSelection));
        if (playRound(playerSelection, computerSelection).includes('win')) {
            playerScore++;
        }
    }
    if (playerScore > 2) {
        console.log('You win!');
    } else {
        console.log('You lose!');
    }
  }*/

// logic.js


  let rock = document.querySelector('#rock');
  let paper = document.querySelector('#paper');
  let scissors = document.querySelector('#scissors');
  let scoreBoard = document.querySelector('#result');
  let score = 0;

  function updateScore(playerSelection) {
      if (score < 5) {
          let result = playRound(playerSelection, getComputerChoice());
          if (result.includes('win')) {
              score++;
          }
          scoreBoard.textContent = score;
      }

      if (score === 5) {
          scoreBoard.textContent = 'You finished the game!';
          // Optionally, reset the score after the game finishes
          // score = 0;
      }
  }

  rock.addEventListener('click', function() {
      updateScore('rock');
  });

  paper.addEventListener('click', function() {
      updateScore('paper');
  });

  scissors.addEventListener('click', function() {
      updateScore('scissors');
  });



