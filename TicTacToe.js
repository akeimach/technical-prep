const Prompt = require('prompt-grid');

class Game { // first thing because not hoisted

  constructor(size) {
    this.size = size;
    this.maxPlays = size * size;
    this.currentPlay = 0;
    this.boardSquare = [];
    this.boardFlat = [];
    for (let r = 0; r < size; r++) { // number of rows
      let row = [];
      for (let c = 0; c < size; c++) { // for each column
        const piece = {
          name: ' ',
          value: 0
        };
        row.push(piece);
        this.boardFlat.push(piece);
      }
      this.boardSquare.push(row);
    }
  }

  printBoard() {
    // this is for debugging
    for (let r = 0; r < this.size; r++) { // for each row
      for (let c = 0; c < this.size; c++) {
        if (c > 0 && c < this.size) process.stdout.write(' | ');
        process.stdout.write(this.boardSquare[r][c].name);
      }
      (r < (this.size - 1)) ? (console.log('\n' + ('---').repeat(this.size))) : (console.log());
    }
  }

  checkWin() {

    // first check forward and backward diagonals
    let totalForward = 0;
    let totalBackward = 0;
    for (let d = 0; d < this.size; d++) {
      totalForward += this.boardSquare[d][d].value;
      totalBackward += this.boardSquare[(this.size - 1) - d][d].value;
    }
    if ((Math.abs(totalForward) === this.size) || (Math.abs(totalBackward) === this.size)) {
      return true;
    }
    
    let totalHorizontal = 0;
    let totalVertical = 0;
    for (let x = 0; x < this.size; x++) {
      for (let y = 0; y < this.size; y++) {
        totalHorizontal += this.boardSquare[x][y].value;
        totalVertical += this.boardSquare[y][x].value;
      }
      if ((Math.abs(totalHorizontal) === this.size) || (Math.abs(totalVertical) === this.size)) {
        return true;
      }
      totalHorizontal = 0;
      totalVertical = 0;
    }

    return false;
  }

  makePlay() {
    const prompt = new Prompt({
      name: ((this.currentPlay % 2) === 0) ? 'Player o' : 'Player x',
      choices: this.boardFlat
    });

    prompt.run().then(answer => {
      
      const position = prompt.options.choices.position;
      // the position doesn't have a value yet
      if (this.boardFlat[position].value === 0) {
        this.boardFlat[position].value = ((this.currentPlay % 2) === 0) ? -1 : 1;
        this.boardFlat[position].name = ((this.currentPlay % 2) === 0) ? 'o' : 'x';
        game.currentPlay++;

        let counter = 0;
        for (let r = 0; r < this.size; r++) {
          for (let c = 0; c < this.size; c++) {
            this.boardSquare[r][c] = this.boardFlat[counter];
            counter++;
          }
        }
        if (this.checkWin()) {
          console.log((((this.currentPlay - 1) % 2) === 0) ? 'Player o wins' : 'Player x wins');
          return true; // a win was found
        }
      }
      this.makePlay();
    });
  }
}


const game = new Game(3);

game.makePlay();



