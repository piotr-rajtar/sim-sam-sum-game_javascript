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

printMessage('Ruch komputera to: ' + computerMove);

//PLAYER MOVE
let playerInput = prompt('Wybierz swoj ruch: 1.Kamien, 2.Papier, 3.Nozyce');
let playerMove = getMoveName(playerInput);

console.log('Gracz wybral: ' + playerInput);

printMessage('Ruch gracza to: ' + playerMove);

// RESULTS - SUMMARY

//RESULTS - DRAWS
if (computerMove == 'Kamien' && playerMove == 'Kamien') {
  printMessage('Mamy remis!');
}
if (computerMove == 'Papier' && playerMove == 'Papier') {
  printMessage('Mamy remis!');
}
if (computerMove == 'Nozyce' && playerMove == 'Nozyce') {
  printMessage('Mamy remis!');
}
if (computerMove == 'Nieznany ruch' && playerMove == 'Nieznany ruch') {
  printMessage('Mamy remis!');
}

//RESULTS - COMPUTER WINS
if (computerMove == 'Kamien' && playerMove == 'Nozyce') {
  printMessage('Komputer wygrywa!');
}
if (computerMove == 'Papier' && playerMove == 'Kamien') {
  printMessage('Komputer wygrywa!');
}
if (computerMove == 'Nozyce' && playerMove == 'Papier') {
  printMessage('Komputer wygrywa!');
}

//RESULTS - PLAYER WINS
if (computerMove == 'Kamien' && playerMove == 'Papier') {
  printMessage('Gracz wygrywa!');
}
if (computerMove == 'Papier' && playerMove == 'Nozyce') {
  printMessage('Gracz wygrywa!');
}
if (computerMove == 'Nozyce' && playerMove == 'Kamien') {
  printMessage('Gracz wygrywa!');
}

//RESULTS - UNKNOWN PLAYER MOVE
if (computerMove == 'Kamien' && playerMove == 'Nieznany ruch') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
if (computerMove == 'Papier' && playerMove == 'Nieznany ruch') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
if (computerMove == 'Nozyce' && playerMove == 'Nieznany ruch') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}

//RESULTS - UNKNOWN COMPUTER MOVE
if (computerMove == 'Nieznany ruch' && playerMove == 'Kamien') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
if (computerMove == 'Nieznany ruch' && playerMove == 'Papier') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
if (computerMove == 'Nieznany ruch' && playerMove == 'Nozyce') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
