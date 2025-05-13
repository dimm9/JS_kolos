let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let currentPlayer = 'X';

function printBoard() {
  console.clear();
  console.log('\n');
  board.forEach(row => console.log(row.join(' | ')));
  console.log('\n');
}

function isWinner(p) {
  for (let i = 0; i < 3; i++) {
    if (board[i].every(cell => cell === p)) return true; // wiersz
    if ([0, 1, 2].every(j => board[j][i] === p)) return true; // kolumna
  }
  if ([0, 1, 2].every(i => board[i][i] === p)) return true; // przekątna \
  if ([0, 1, 2].every(i => board[i][2 - i] === p)) return true; // przekątna /
  return false;
}

function isFull() {
  return board.flat().every(cell => cell !== ' ');
}

function play(row, col) {
  if (row < 0 || row > 2 || col < 0 || col > 2) {
    console.log("Nieprawidłowe współrzędne!");
    return;
  }

  if (board[row][col] !== ' ') {
    console.log("To pole jest już zajęte!");
    return;
  }

  board[row][col] = currentPlayer;
  printBoard();

  if (isWinner(currentPlayer)) {
    console.log(`Gracz ${currentPlayer} WYGRYWA!`);
    return;
  }

  if (isFull()) {
    console.log("REMIS!");
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  console.log(`Tura gracza: ${currentPlayer}`);
}

// Start gry
printBoard();
console.log("Gra rozpoczęta! Wpisz play(wiersz, kolumna), np. play(0, 1)");
