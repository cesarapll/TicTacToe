import { Player } from "./player";

export class Game {
  constructor() {
    this.coordinatesByIndex = {
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
    this.boardSize = 3;
    this.player1 = undefined;
    this.player2 = undefined;
    this.isPlayer1Turn = true;
  }

  getCurrentPlayer() {
    if (this.isPlayer1Turn) {
      return player1;
    }
    return player2;
  }

  currentPlayerWins(index) {
    let currentPlayer = this.getCurrentPlayer()
    const row = this.coordinatesByIndex[index][0];
    const column = this.coordinatesByIndex[index][1];

    currentPlayer.setMove(row, column, this.boardSize);

    return (currentPlayer.rows[row] === this.boardSize ||
      currentPlayer.columns[column] === this.boardSize ||
      currentPlayer.diagonal === this.boardSize ||
      currentPlayer.antidiagonal === this.boardSize);

    
  }


  changePlayerTurn() {
    this.isPlayer1Turn = !this.isPlayer1Turn;
  }

  startGame() {
    this.player1 = new Player("X");
    this.player2 = new Player("O");
    this.isPlayer1Turn = true;
  }

  resetGame() {
    this.player1.resetPlayer("X");
    this.player2.resetPlayer("O");
    this.isPlayer1Turn = true;
  }
}
