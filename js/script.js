{
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
  document.getElementById('refresh').addEventListener('click', function(){
    pageReload();
  });


  let playGame = function (playerInput) {

    clearMessages();
    clearScore();

    // MOVES FUNCTION

    let moveName = function (argMoveId) {
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
    let computerMove = moveName(computerChoice);

    // RESULTS - FUNCTION
    do {
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
    } while (playerScore == 3 || computerScore == 3);

    //DISPLAY RESULTS
    printMessage('RESULTS: ' + displayResult(moveName(computerChoice),moveName(playerInput)));
    printScore('PLAYER ' + playerScore + ' : ' + computerScore + ' COMPUTER');

    if (playerScore == 3) {
      clearMessages();
      printMessage('FINAL RESULTS: PLAYER WINS');
      printMessage('RELOAD TO TRY AGAIN');
      document.getElementById('play-stone').disabled = true;
      document.getElementById('play-paper').disabled = true;
      document.getElementById('play-scissors').disabled = true;
    }
    if (computerScore == 3) {
      clearMessages();
      printMessage('FINAL RESULTS: COMPUTER WINS');
      printMessage('RELOAD TO TRY AGAIN');
      document.getElementById('play-stone').disabled = true;
      document.getElementById('play-paper').disabled = true;
      document.getElementById('play-scissors').disabled = true;
    }

  }

}
