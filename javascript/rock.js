class Rock {
  constructor(ctx) {
    //create rock here
    this.ctx = ctx;
    this.pos = {x: (Math.random() * 450 + 48), y: -56 };
    this.image = new Image ();
    this.image.src = "https://s15.postimg.cc/3wvz6x8bv/rock.png";
    this.speed = 2;
  }

  drawRock() {
    // draws one rock
    this.ctx.drawImage(this.image, this.pos.x, this.pos.y);
  }

  //adds the speed to the vertical direction of rock to make it move down
  updateRock() {
    this.pos.y += this.speed;
  }
}

module.exports = Rock;

// link to rock image: https://s15.postimg.cc/3wvz6x8bv/rock.png
