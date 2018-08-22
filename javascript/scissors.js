class Scissors {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 250;
    this.y = 450;
    this.xSpeed = 0;
    this.width = 35;
    this.height = 45;
    // this.ySpeed = 0;
    // this.pos = { x: 250, y: 350 };
  }

  drawScissors() {
    const scissorsImg = new Image();
    scissorsImg.src = "https://s15.postimg.cc/40psnd10b/scissors.png";
    this.ctx.drawImage(scissorsImg, this.x, this.y);
  }

  moveScissors(xChange, yChange) {
    if (((this.x > 0) && (xChange < 0)) || ((this.x < 499) && (xChange > 0))) {
      this.xSpeed = xChange;
      // this.x += xChange;
    }
    // this.y += yChange;
  }

  updateScissors() {
      // if scissor is at the left edge of the screen
    if (this.x < 0) {
      this.x = 0;
      // if scissor is at the right edge of screen
    } else if (this.x > 499) {
      this.x = 498;
    } else {
      this.x = this.x + this.xSpeed;
    }
    // this.y = this.y + this.ySpeed;
  }
}

module.exports = Scissors;


//Link to scissors image: https://s15.postimg.cc/40psnd10b/scissors.png
