let computerMove = 'Nieznany ruch';
let computerChoice = Math.floor(Math.random() * 3 + 1);

if (computerChoice == 1) {
  computerMove = 'Kamien';
} else if (computerChoice == 2) {
  computerMove = 'Papier';
} else {
  computerMove = 'Nozyce'
}

printMessage('Ruch komputera to: ' + computerMove);
