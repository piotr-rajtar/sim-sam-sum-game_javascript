//COMPUTER MOVE

let computerMove = 'Nieznany ruch';
let computerChoice = Math.floor(Math.random() * 3 + 1);

console.log('Komputer wybral: ' + computerChoice);

if (computerChoice == 1) {
  computerMove = 'Kamien';
} else if (computerChoice == 2) {
  computerMove = 'Papier';
} else {
  computerMove = 'Nozyce'
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
} else {
  playerMove ='Nozyce';
}

printMessage('Ruch gracza to: ' + computerMove);
