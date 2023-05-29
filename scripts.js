const coordinates = {
  0: [0, 0],
  1: [0, 1],
  2: [0, 2],
  3: [1, 0],
  4: [1, 1],
  5: [1, 2],
  6: [2, 0],
  7: [2, 1],
  8: [2, 2],
};

class Player {
  rows = [0, 0, 0];
  columns = [0, 0, 0];
  diagonal = 0;
  antidiagonal = 0;

  constructor(symbol) {
    this.symbol = symbol;
  }
}

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.isPlayer1Turn = true;
  }

  getSymbol() {
    if (this.isPlayer1Turn) {
      return player1.symbol;
    }
    return player2.symbol;
  }

  checkPlayerWins(row, column) {
    let currentPlayer = this.player1;
    if (!this.isPlayer1Turn) {
      currentPlayer = this.player2;
    }

    currentPlayer.rows[row]++;
    currentPlayer.columns[column]++;
    if (row === column) currentPlayer.diagonal++;
    if (row + column === boradSize - 1) currentPlayer.antidiagonal++;
    const playerWins =
      currentPlayer.rows[row] === boradSize ||
      currentPlayer.columns[column] === boradSize ||
      currentPlayer.diagonal === boradSize ||
      currentPlayer.antidiagonal === boradSize;

    if (playerWins) {
      console.log("Ganó el jugador: ", currentPlayer.symbol);
    } else {
      this.isPlayer1Turn = !this.isPlayer1Turn;
    }
  }
}

const player1 = new Player("X");
const player2 = new Player("O");

const boradSize = 3;
const game = new Game(player1, player2);

function handleClick(id) {
  const block = document.getElementById(id);
  block.innerHTML = `<p class="symbol">${game.getSymbol()}</p>`;
  game.checkPlayerWins(coordinates[id][0], coordinates[id][1]);
}
