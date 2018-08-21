const Rock = require('./rock');
const Scissors = require('./scissors');
const Paper = require('./paper');

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Image ();
background.src = "https://s22.postimg.cc/5h3h8fqnl/background.png";
background.onload = function() {
  ctx.drawImage(background, 0, 0);
};
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


// };
