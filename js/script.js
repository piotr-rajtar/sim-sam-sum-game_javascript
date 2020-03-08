// MOVES FUNCTION

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'Kamien';
  } else if (argMoveId == 2) {
    return 'Papier';
  } else if (argMoveId == 3) {
    return 'Nozyce';
  } else {
    return 'Nieznany ruch';
  }
}

//COMPUTER MOVE
let computerChoice = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(computerChoice);

console.log('Komputer wybral: ' + computerChoice);

//PLAYER MOVE
let playerInput = prompt('Wybierz swoj ruch: 1.Kamien, 2.Papier, 3.Nozyce');
let playerMove = getMoveName(playerInput);

console.log('Gracz wybral: ' + playerInput);

// RESULTS - FUNCTION

function displayResult(argComputerMove, argPlayerMove){
  printMessage('Ruch komputera to: ' + argComputerMove + ', ruch gracza to: ' + argPlayerMove);

  //DRAWS
  if (argComputerMove == 'Kamien' && argPlayerMove == 'Kamien') {
    return 'Mamy remis!';
  }
  if (argComputerMove == 'Papier' && argPlayerMove == 'Papier') {
    return 'Mamy remis!';
  }
  if (argComputerMove == 'Nozyce' && argPlayerMove == 'Nozyce') {
    return 'Mamy remis!';
  }
  if (argComputerMove == 'Nieznany ruch' && argPlayerMove == 'Nieznany ruch') {
    return 'Mamy remis!';
  }

  //COMPUTER WINS
  if (argComputerMove == 'Kamien' && argPlayerMove == 'Nozyce') {
    return 'Komputer wygrywa!';
  }
  if (argComputerMove == 'Papier' && argPlayerMove == 'Kamien') {
    return 'Komputer wygrywa!';
  }
  if (argComputerMove == 'Nozyce' && argPlayerMove == 'Papier') {
    return 'Komputer wygrywa!';
  }

  //PLAYER WINS
  if (argComputerMove == 'Kamien' && argPlayerMove == 'Papier') {
    return 'Gracz wygrywa!';
  }
  if (argComputerMove == 'Papier' && argPlayerMove == 'Nozyce') {
    return 'Gracz wygrywa!';
  }
  if (argComputerMove == 'Nozyce' && argPlayerMove == 'Kamien') {
    return 'Gracz wygrywa!';
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
