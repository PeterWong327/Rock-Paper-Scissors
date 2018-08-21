class Paper {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawPaper() {
    const paperImg = new Image();
    paperImg.src = "https://s22.postimg.cc/cvst0f79t/paper.png";

    let prevPaper = 0;

    for (let i = 0; i < 2; i += 1) {
      let pos = Math.random() * 300;

      if (Math.abs(prevPaper - pos) > 100) {
        this.ctx.drawImage(paperImg, pos, 250);
        prevPaper = pos;
      }
    }
  }
}

module.exports = Paper;
