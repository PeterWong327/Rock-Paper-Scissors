class Rock {
  constructor(ctx) {
    //create rock here
    this.ctx = ctx;
    this.x = (Math.random() * 490);
    this.y = -56;
    this.image = new Image ();
    this.image.src = "https://s15.postimg.cc/3wvz6x8bv/rock.png";
    this.speed = 2;
    this.width = 52;
    this.height = 48;
  }

  drawRock() {
    // draws one rock
    this.ctx.drawImage(this.image, this.x, this.y);
  }

  //adds the speed to the vertical direction of rock to make it move down
  // add this.score as argument to incease speed when score goes up
  updateRock(score) {
    this.y += (this.speed + Math.floor(score/25));
  }
}

module.exports = Rock;

// link to rock image: https://s15.postimg.cc/3wvz6x8bv/rock.png
