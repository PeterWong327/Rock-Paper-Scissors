const Rock = require('./rock');
const Scissors = require('./scissors');
const Paper = require('./paper');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.rocks = [];
    // this.createRockRow();
    this.papers = [];
    // this.createPaperRow();
    this.loop();
    this.draw();
    this.frameCount = 0;
  }

  draw () {
    // clearFrame
    // draw everything
  }

  createRockRow (){
    let prevRock = 0;

    for (let i = 0; i < 2; i += 1) {
      let pos = Math.random() * 300;
      //checks if previous rock and current rock are touching
      if (Math.abs(prevRock - pos) > 55) {
        this.rocks.push(new Rock(ctx));
        prevRock = pos;
      }
    }
  }

  createPaperRow (){
    let prevPaper = 0;

    for (let i = 0; i < 2; i += 1) {
      let pos = Math.random() * 300 + prevPaper + 1;

      if (Math.abs(prevPaper - pos) > 100) {
        this.papers.push(new Paper(ctx));
        prevPaper = pos;
      }
      // else {
      //   debugger;
      // }
    }
  }

  loop () {
    this.frameCount += 1;
    // if ((this.frameCount * this.rocks[0].speed) >= 55) {
    if (this.frameCount > 125) {
      Math.random() > 0.5 ? (this.createPaperRow()) : this.createRockRow();
      this.frameCount = 0;
    }
    this.frame = requestAnimationFrame(this.loop.bind(this));
    //update: calls update method from rock and paper
    this.rocks.forEach(rock => {
      rock.updateRock();
    });

    this.papers.forEach(paper => {
      paper.updatePaper();
    });

    this.ctx.clearRect(0,0,500, 600);

    //Draw each element

    //draw background
    const background = new Image ();
    background.src = "https://s22.postimg.cc/5h3h8fqnl/background.png";
    this.ctx.drawImage(background, 0, 0);

    // draw scissor
    let scissors = new Scissors(ctx);
    scissors.drawScissors();

    //draw rocks
    this.rocks.forEach(rock => {
      rock.drawRock();
    });

    //draw paper
    this.papers.forEach(paper => {
      paper.drawPaper();
    });
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

// const background = new Image ();
// background.src = "https://s22.postimg.cc/5h3h8fqnl/background.png";
//
// background.onload = function() {
//   ctx.drawImage(background, 0, 0);
// };

window.onload = () => {
  let scissors = new Scissors(ctx);
  let rock = new Rock(ctx);
  let paper = new Paper(ctx);
    rock.drawRock();
    scissors.drawScissors();
    paper.drawPaper();
};




// Link to background image: https://s22.postimg.cc/5h3h8fqnl/background.png
