class Paper {
  constructor(ctx) {
    this.ctx = ctx;
    this.pos = { x: (Math.random() * 450 + 45), y: -56 };
    this.image = new Image ();
    this.image.src = "https://s22.postimg.cc/cvst0f79t/paper.png";
    this.speed = 2;
  }

  drawPaper() {
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y);
  }

  updatePaper() {
    this.pos.y += this.speed;
  }
}

//   drawPaper() {
//     const paperImg = new Image();
//     paperImg.src = "https://s22.postimg.cc/cvst0f79t/paper.png";
//
//     let prevPaper = 0;
//
//     for (let i = 0; i < 2; i += 1) {
//       let pos = Math.random() * 300;
//
//       if (Math.abs(prevPaper - pos) > 100) {
//         this.ctx.drawImage(paperImg, pos, 0);
//         prevPaper = pos;
//       }
//     }
//   }
// }

module.exports = Paper;


// link to paper image: https://s22.postimg.cc/cvst0f79t/paper.png
