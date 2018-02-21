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
    this.boardSquare[2][2].name = 'x';
    this.boardSquare[2][2].value = 1;
    this.boardSquare[1][2].name = 'o';
    this.boardSquare[1][2].value = -1;
  }

  printBoard() {
    for (let r = 0; r < this.size; r++) { // for each row
      for (let c = 0; c < this.size; c++) {
        if (c > 0 && c < this.size) process.stdout.write(' | ');
        process.stdout.write(this.boardSquare[r][c].name);
      }
      (r < (this.size - 1)) ? (console.log('\n' + ('---').repeat(this.size))) : (console.log());
    }
  }

  makePlay() {
    const prompt = new Prompt({
      name: 'board',
      choices: this.boardFlat
    });

    prompt.run().then(answer => {
      // console.log(prompt.options.choices.choices);
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
        this.printBoard();
      }
      else {
        this.makePlay();
      }
    });
  }
}


const game = new Game(3);

game.makePlay();



