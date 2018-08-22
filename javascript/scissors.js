class Scissors {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 250;
    this.y = 350;
    this.xSpeed = 0;
    this.ySpeed = 0;
    // this.pos = { x: 250, y: 350 };
  }

  drawScissors() {
    const scissorsImg = new Image();
    scissorsImg.src = "https://s15.postimg.cc/40psnd10b/scissors.png";
    this.ctx.drawImage(scissorsImg, this.x, this.y);
  }

  moveScissors(x, y) {

    this.xSpeed = x;
    this.ySpeed = y;
  }

  updateScissors() {
    this.x = this.x + this.xSpeed;
    this.y = this.y + this.ySpeed;
  }
}

module.exports = Scissors;


//Link to scissors image: https://s15.postimg.cc/40psnd10b/scissors.png
