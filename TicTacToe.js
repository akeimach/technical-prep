
class Game { // first thing because not hoisted

  constructor(row, col) {
    this.row = row;
    this.col = col;
    this.maxPlays = row * col;
    this.board = [];
    for (let c = 0; c < col; c++) {
      let emptyRow = [];
      for (let r = 0; r < row; r++) {
        emptyRow.push(' ');
      }
      this.board.push(emptyRow);
    }
  }

  get boardState() {
    for (let r = 0; r < this.row; r++) { // for each row
      for (let c = 0; c < this.col; c++) {
        if (c > 0 && c < this.col) process.stdout.write(' | ');
        process.stdout.write(this.board[r][c]);
      }
      (r < (this.row - 1)) ? (console.log('\n' + ('---').repeat(this.col))) : (console.log());
    }
  }
}


const game = new Game(4, 4);
// for (let i = 0; i < game.maxPlays; i++) {
  game.boardState;
  // game.makePlay;
  // game.checkWin;
// }



