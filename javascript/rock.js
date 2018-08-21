class Rock {
  constructor(ctx) {
    this.ctx = ctx;
  }

  drawRock() {
    const rockImg = new Image();
    rockImg.src = "https://s15.postimg.cc/3wvz6x8bv/rock.png";
    // const rockImg = document.getElementById("rock");
    // console.log(rockImg);
    let prevRock = 0;

    for (let i = 0; i < 2; i += 1) {
      let pos = Math.random() * 300;
      //checks if previous rock and current rock are touching
      if (Math.abs(prevRock - pos) > 55) {
        this.ctx.drawImage(rockImg, pos, 150);
        prevRock = pos;
      }
    }
  }

}

module.exports = Rock;
