const Rock = require('./rock');
const Scissors = require('./scissors');
const Paper = require('./paper');

const background = document.getElementById("canvas");
const ctx = background.getContext("2d");


// Images
// const images = () => {
//
//   this.rock = new Image();
//   this.paper = new Image();
//   this.scissors = new Image();
//
//   this.rock.src = "../images/rock.png";
//   this.paper.src = "../images/paper.png";
//   this.scissors.src = "../images/scissors.png";
// };
//

// Parent object properties
class AllObjects {
  constructor() {
    this.init = (x, y, width, height) => {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    };
  }
}

window.onload = () => {
  let scissors = new Scissors(ctx);
  let rock = new Rock(ctx);
  let paper = new Paper(ctx);
    rock.drawRock();
    scissors.drawScissors();
    paper.drawPaper();
};


// canvas.onload = function(){
//
//   ctx.drawImage(background, 0, 0);
//   ctx.drawImage(scissors, 350, 300);
//
//   for (let i = 0; i < 5; i += 1) {
//     let xRock = Math.random() * canvas.width;
//     let xPaper = Math.random() * canvas.width;
//     if (xRock !== xPaper+5) {
//       ctx.drawImage(rock, xRock, 100);
//     }
//     if (xRock !== xPaper+5) {
//       ctx.drawImage(paper, xPaper, 175);
//     }
//   }
//
// };
