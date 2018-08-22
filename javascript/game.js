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
    this.frameCount = 0;
    this.scissors = new Scissors(ctx);
    this.loop();
    this.draw();

  }

  draw () {
    // clearFrame
    // draw everything
  }

  createRockRow (){
    let prevRock = 0;

    for (let i = 0; i < 2; i += 1) {
      let newRock = new Rock(ctx);
      //checks if previous rock and current rock are touching
      if (Math.abs(prevRock - newRock.pos.x) > 55) {
        this.rocks.push(newRock);
        prevRock = newRock.pos.x;
      }
    }
  }

  createPaperRow (){
    let prevPaper = 0;

    for (let i = 0; i < 2; i += 1) {
      //create a new paper first
      let newPaper = new Paper(ctx);
      // check if previous paper is going to overlap with  new paper
      if (Math.abs(prevPaper - newPaper.pos.x) > 65) {
        //check if new Paper will overlap, then push if not
        this.papers.push(newPaper);
        //newly created paper is now the previous paper
        prevPaper = newPaper.pos.x;

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
    // let scissors = new Scissors(ctx);
    this.scissors.drawScissors();
    console.log('x','y', this.scissors.x, this.scissors.y);
    this.scissors.updateScissors();

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

window.addEventListener('keydown', moveScissors);

function moveScissors(e) {
  let code = e.keyCode;
  if (code === 37) {
    game.scissors.moveScissors(-2, 0);
  } else if (code === 39) {
    game.scissors.moveScissors(2, 0);
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

// window.onload = () => {
//   let scissors = new Scissors(ctx);
//   let rock = new Rock(ctx);
//   let paper = new Paper(ctx);
//     rock.drawRock();
//     scissors.drawScissors();
//     paper.drawPaper();
// };




// Link to background image: https://s22.postimg.cc/5h3h8fqnl/background.png
