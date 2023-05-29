export class Player {
  rows = [0, 0, 0];
  columns = [0, 0, 0];
  diagonal = 0;
  antidiagonal = 0;

  constructor(symbol) {
    this.symbol = symbol;
  }

  resetPlayer(symbol) {
    this.rows = [0, 0, 0];
    this.columns = [0, 0, 0];
    this.diagonal = 0;
    this.antidiagonal = 0;
    this.symbol = symbol
  }

  setMove(row, column, boardSize) {
    this.rows[row]++;
    this.columns[column]++;
    if (row === column) this.diagonal++;
    if (row + column === boardSize - 1) this.antidiagonal++;
  }
}
