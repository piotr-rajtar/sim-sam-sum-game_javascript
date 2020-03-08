//COMPUTER MOVE

let computerMove = 'Nieznany ruch';
let computerChoice = Math.floor(Math.random() * 3 + 1);

console.log('Komputer wybral: ' + computerChoice);

if (computerChoice == 1) {
  computerMove = 'Kamien';
} else if (computerChoice == 2) {
  computerMove = 'Papier';
} else {
  computerMove = 'Nozyce';
}

printMessage('Ruch komputera to: ' + computerMove);

//PLAYER MOVE

let playerMove = 'Nieznany ruch';
let playerInput = prompt('Wybierz swoj ruch: 1.Kamien, 2.Papier, 3.Nozyce');

console.log('Gracz wybral: ' + playerInput);

if (playerInput == 1) {
  playerMove = 'Kamien';
} else if (playerInput == 2) {
  playerMove = 'Papier';
} else if (playerInput == 3) {
  playerMove ='Nozyce';
} else {
  playerMove = playerMove;
}

printMessage('Ruch gracza to: ' + playerMove);

// RESULTS - SUMMARY

//RESULTS - DRAWS
if (computerMove == 'Kamien') && (playerMove = 'Kamien') {
  printMessage('Mamy remis!');
}
if (computerMove == 'Papier') && (playerMove = 'Papier') {
  printMessage('Mamy remis!');
}
if (computerMove == 'Nozyce') && (playerMove = 'Nozyce') {
  printMessage('Mamy remis!');
}
if (computerMove == 'Nieznany ruch') && (playerMove = 'Nieznany ruch') {
  printMessage('Mamy remis!');
}

//RESULTS - COMPUTER WINS
if (computerMove == 'Kamien') && (playerMove = 'Nozyce') {
  printMessage('Komputer wygrywa!');
}
if (computerMove == 'Papier') && (playerMove = 'Kamien') {
  printMessage('Komputer wygrywa!');
}
if (computerMove == 'Nozyce') && (playerMove = 'Papier') {
  printMessage('Komputer wygrywa!');
}

//RESULTS - PLAYER WINS
if (computerMove == 'Kamien') && (playerMove = 'Papier') {
  printMessage('Gracz wygrywa!');
}
if (computerMove == 'Papier') && (playerMove = 'Nozyce') {
  printMessage('Gracz wygrywa!');
}
if (computerMove == 'Nozyce') && (playerMove = 'Kamien') {
  printMessage('Gracz wygrywa!');
}

//RESULTS - UNKNOWN PLAYER MOVE
if (computerMove == 'Kamien') && (playerMove = 'Nieznany ruch') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
if (computerMove == 'Papier') && (playerMove = 'Nieznany ruch') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
if (computerMove == 'Nozyce') && (playerMove = 'Nieznany ruch') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}

//RESULTS - UNKNOWN COMPUTER MOVE
if (computerMove == 'Nieznany ruch') && (playerMove = 'Kamien') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
if (computerMove == 'Nieznany ruch') && (playerMove = 'Papier') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
if (computerMove == 'Nieznany ruch') && (playerMove = 'Nozyce') {
  printMessage('Nieznany ruch gracza, komputer wygrywa walkowerem!');
}
