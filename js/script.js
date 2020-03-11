function playGame(playerInput) {

  clearMessages();

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

  console.log('Computer choose: ' + computerChoice);

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
    if (argComputerMove == 'Unknown move' && argPlayerMove == 'Unknown move') {
      return 'DRAW!';
    }

    //COMPUTER WINS
    if (argComputerMove == 'Stone' && argPlayerMove == 'Scissors') {
      return 'Computer wins!';
    }
    if (argComputerMove == 'Paper' && argPlayerMove == 'Stone') {
      return 'Computer wins!';
    }
    if (argComputerMove == 'Scissors' && argPlayerMove == 'Paper') {
      return 'Computer wins!';
    }

    //PLAYER WINS
    if (argComputerMove == 'Stone' && argPlayerMove == 'Paper') {
      return 'Player wins!';
    }
    if (argComputerMove == 'Paper' && argPlayerMove == 'Scissors') {
      return 'Player wins!';
    }
    if (argComputerMove == 'Scissors' && argPlayerMove == 'Stone') {
      return 'Player wins!';
    }

    //UNKNOWN PLAYER MOVE
    if (argComputerMove == 'Kamien' && argPlayerMove == 'Nieznany ruch') {
      return 'Nieznany ruch gracza, komputer wygrywa walkowerem!';
    }
    if (argComputerMove == 'Papier' && argPlayerMove == 'Nieznany ruch') {
      return 'Nieznany ruch gracza, komputer wygrywa walkowerem!';
    }
    if (argComputerMove == 'Nozyce' && argPlayerMove == 'Nieznany ruch') {
      return 'Nieznany ruch gracza, komputer wygrywa walkowerem!';
    }

    //UNKNOWN COMPUTER MOVE
    if (argComputerMove == 'Nieznany ruch' && argPlayerMove == 'Kamien') {
      return 'Nieznany ruch komputera, gracz wygrywa walkowerem!';
    }
    if (argComputerMove == 'Nieznany ruch' && argPlayerMove == 'Papier') {
      return 'Nieznany ruch komputera, gracz wygrywa walkowerem!';
    }
    if (argComputerMove == 'Nieznany ruch' && argPlayerMove == 'Nozyce') {
      return 'Nieznany ruch komputera, gracz wygrywa walkowerem!';
    }
  }

  //DISPLAY RESULTS
  printMessage('WYNIK: ' + displayResult(getMoveName(computerChoice),getMoveName(playerInput)));
}

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
