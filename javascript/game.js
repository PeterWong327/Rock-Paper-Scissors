const Rock = require('./rock');
const Scissors = require('./scissors');
const Paper = require('./paper');

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.rocks = [];
    // this.createRockRow();
    this.papers = [];
    // this.createPaperRow();
    this.frameCount = 0;
    this.scissors = new Scissors(ctx);
    // this.loop();
    this.draw();
    this.score = 0;
    // this.playMusic();
  }

  playMusic () {
    music.play();
  }

  draw () {
    // clearFrame
    // draw everything
    // const background = new Image ();
    // background.src = "https://s22.postimg.cc/791yje2a9/new_BG.png";
    // this.ctx.drawImage(background, 0, 0);
  }

  //calls the loop function to start animation
  startGame () {
    this.loop();
  }

  gameOver () {
    this.ctx.font="40px Comic Sans MS";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("GAME OVER", 175, 280);
    cancelAnimationFrame(this.frame);
    // this.score = 0;
  }


  createRockRow (){
    let prevRock = 0;

    for (let i = 0; i < 2; i += 1) {
      let newRock = new Rock(ctx);
      //checks if previous rock and current rock are touching
      if (Math.abs(prevRock - newRock.x) > 55) {
        this.rocks.push(newRock);
        prevRock = newRock.x;
      }
    }
  }

  createPaperRow (){
    let prevPaper = 0;

    for (let i = 0; i < 2; i += 1) {
      //create a new paper first
      let newPaper = new Paper(ctx);
      // check if previous paper is going to overlap with  new paper
      if (Math.abs(prevPaper - newPaper.x) > 65) {
        //check if new Paper will overlap, then push if not
        this.papers.push(newPaper);
        //newly created paper is now the previous paper
        prevPaper = newPaper.x;
      }
    }
  }

  collisionRock (scissor, rock) {
    if (scissor.x + 10 < rock.x + rock.width - 8 &&
      scissor.x + 10 + scissor.width - 8 > rock.x &&
      scissor.y < rock.y + rock.height - 10 &&
      scissor.y + scissor.height - 10 > rock.y) {
      return true;
    }
  }

  collision (obj1, obj2) {
    if (obj1.x < obj2.x + obj2.width &&
      obj1.x + obj1.width > obj2.x &&
      obj1.y < obj2.y + obj2.height &&
      obj1.y + obj1.height > obj2.y) {

      // console.log("collision SUCCESS!!");
      return true;
  }
}

  loop () {
    this.frameCount += 1;
    // console.log(this.frameCount);
    // if ((this.frameCount * this.rocks[0].speed) >= 55) {
    if (this.frameCount > 50) {
      Math.random() > 0.5 ? (this.createPaperRow()) : this.createRockRow();
      this.frameCount = 0;
    }

    this.frame = requestAnimationFrame(this.loop.bind(this));
    //update: calls update method from rock and paper
    this.rocks.forEach(rock => {
      //add this.score as argument to use for speed increment
      rock.updateRock();
    });

    this.papers.forEach(paper => {
      paper.updatePaper();
    });

    this.ctx.clearRect(0,0,550, 650);


    //draw background
    const background = new Image ();
    background.src = "https://s22.postimg.cc/791yje2a9/new_BG.png";
    this.ctx.drawImage(background, 0, 0);

    // draw scissor
    // let scissors = new Scissors(ctx);
    this.scissors.drawScissors();

    //check if scissor within screen. Update if within.
    // if ((this.scissors.x >= 0) && (this.scissors.x <= 499)) {
      this.scissors.updateScissors();
    // }

    //draw rocks
    this.rocks.forEach(rock => {
      rock.drawRock();
    });

    //draw paper
    this.papers.forEach(paper => {
      paper.drawPaper();
    });

    //display score
    this.ctx.font="28px Comic Sans MS";
    this.ctx.fillStyle = "blue";
    this.ctx.fillText("Score: " + this.score, 400, 50);

    //check for collision with a rock
    this.rocks.forEach(rock => {
      if (this.collisionRock(this.scissors, rock)) {
        // console.log("collision with rock!");
        // setTimeout(this.gameOver(), 1000);
        this.gameOver();
      }
    });

    //check for collision with a paper
    this.papers.forEach(paper => {
      if (this.collision(this.scissors, paper)) {
        paper.removePaper();
        this.score += 1;
        // console.log("Score:" + this.score);
      }
    });
  }
}

window.addEventListener('keydown', moveScissors);

function moveScissors(e) {
  let code = e.keyCode;
  if (code === 37){
    game.scissors.moveScissors(-4, 0);
  } else if (code === 39) {
    game.scissors.moveScissors(4, 0);
  }
}

const music = document.getElementById("bgMusic");

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

//creates a new instance of a Game
const game = new Game(ctx);

document.getElementById("startGamebtn").addEventListener("click", () => game.startGame());






// Link to background image: https://s22.postimg.cc/5h3h8fqnl/background.png
// Link to updated background image: https://s22.postimg.cc/791yje2a9/new_BG.png
