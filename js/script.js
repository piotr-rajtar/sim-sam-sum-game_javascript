//SCORE

let playerScore = 0;
let computerScore = 0;

//PLAYER INPUT DECLARATION
document.getElementById('play-stone').addEventListener('click', function(){
  playGame(1);
});
document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});

function playGame(playerInput) {

  clearMessages();
  clearScore();

  // MOVES FUNCTION

  function getMoveName(argMoveId) {
    if (argMoveId == 1) {
      return 'Stone';
    } else if (argMoveId == 2) {
      return 'Paper';
    } else {
      return 'Scissors';
    }
  }

  //COMPUTER MOVE
  let computerChoice = Math.floor(Math.random() * 3 + 1);
  let computerMove = getMoveName(computerChoice);

  // RESULTS - FUNCTION

  function displayResult(argComputerMove, argPlayerMove){
    printMessage('Computer choose: ' + argComputerMove + ', Player choose: ' + argPlayerMove);

    //DRAWS
    if (argComputerMove == 'Stone' && argPlayerMove == 'Stone') {
      return 'DRAW!';
    }
    if (argComputerMove == 'Paper' && argPlayerMove == 'Paper') {
      return 'DRAW!';
    }
    if (argComputerMove == 'Scissors' && argPlayerMove == 'Scissors') {
      return 'DRAW!';
    }

    //COMPUTER WINS
    if (argComputerMove == 'Stone' && argPlayerMove == 'Scissors') {
      computerScore = computerScore + 1;
      return 'Computer wins the round!';
    }
    if (argComputerMove == 'Paper' && argPlayerMove == 'Stone') {
      computerScore = computerScore + 1;
      return 'Computer wins the round!';
    }
    if (argComputerMove == 'Scissors' && argPlayerMove == 'Paper') {
      computerScore = computerScore + 1;
      return 'Computer wins the round!';
    }

    //PLAYER WINS
    if (argComputerMove == 'Stone' && argPlayerMove == 'Paper') {
      playerScore = playerScore + 1;
      return 'Player wins the round!';
    }
    if (argComputerMove == 'Paper' && argPlayerMove == 'Scissors') {
      playerScore = playerScore + 1;
      return 'Player wins the round!';
    }
    if (argComputerMove == 'Scissors' && argPlayerMove == 'Stone') {
      playerScore = playerScore + 1;
      return 'Player wins the round!';
    }

  }

  //DISPLAY RESULTS
  printMessage('RESULTS: ' + displayResult(getMoveName(computerChoice),getMoveName(playerInput)));
  printScore('PLAYER ' + playerScore + ' : ' + computerScore + ' COMPUTER');

}
