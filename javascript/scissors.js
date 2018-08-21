class Scissors {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawScissors() {
    const scissorsImg = new Image();
    scissorsImg.src = "https://s15.postimg.cc/40psnd10b/scissors.png";
    this.ctx.drawImage(scissorsImg, 250, 450);
  }
}

module.exports = Scissors;
