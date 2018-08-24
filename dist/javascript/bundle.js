/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/game.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/game.js":
/*!****************************!*\
  !*** ./javascript/game.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const Rock = __webpack_require__(/*! ./rock */ "./javascript/rock.js");
const Scissors = __webpack_require__(/*! ./scissors */ "./javascript/scissors.js");
const Paper = __webpack_require__(/*! ./paper */ "./javascript/paper.js");

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.rocks = [];
    this.papers = [];
    this.frameCount = 0;
    this.scissors = new Scissors(ctx);
    this.draw();
    this.score = 0;
    this.playMusic = new Audio("./sounds/bgMusic2.mp3");
    this.rockSound = new Audio("./sounds/gameOver.mp3");
    this.paperSound = new Audio("./sounds/paper.mp3");
    this.startGameSound = new Audio("./sounds/startGame.mp3");
  }

  draw () {
    // clearFrame
    // draw everything
    // const background = new Image ();
    // background.src = "https://s22.postimg.cc/791yje2a9/new_BG.png";
    // this.ctx.drawImage(background, 0, 0);
  }

  //starts or restarts a game
  startGame () {
    this.startGameSound.play();
    this.rocks = [];
    this.papers = [];
    this.frameCount = 0;
    this.scissors = new Scissors(ctx);
    // this.draw();
    this.score = 0;
    this.loop();
  }

  gameOver () {
    this.ctx.font="40px Comic Sans MS";
    this.ctx.fillStyle = "red";
    this.ctx.fillText("GAME OVER", 175, 280);
    cancelAnimationFrame(this.frame);
    this.playMusic.pause();
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
    if (scissor.x + 10 < rock.x + rock.width - 10 &&
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
      return true;
    }
  }

  loop () {
    this.playMusic.play();
    this.frameCount += (1 + Math.floor(this.score/25));
    if (this.frameCount > 50) {
      Math.random() > 0.5 ? (this.createPaperRow()) : this.createRockRow();
      this.frameCount = 0;
    }

    this.frame = requestAnimationFrame(this.loop.bind(this));
    //update: calls update method from rock and paper
    this.rocks.forEach(rock => {
      //add this.score as argument to use for speed increment
      rock.updateRock(this.score);
    });

    this.papers.forEach(paper => {
      paper.updatePaper(this.score);
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

    //display level
    this.ctx.font="28px Comic Sans MS";
    this.ctx.fillStyle = "blue";
    this.ctx.fillText("Level: " + Math.floor(this.score / 25), 410, 80);

    //check for collision with a rock
    this.rocks.forEach(rock => {
      if (this.collisionRock(this.scissors, rock)) {
        // console.log("collision with rock!");
        // setTimeout(this.gameOver(), 1000);
        this.rockSound.play();
        this.gameOver();
      }
    });

    //check for collision with a paper
    this.papers.forEach(paper => {
      if (this.collision(this.scissors, paper)) {
        this.paperSound.play();
        paper.removePaper();
        this.score += 1;
        if ((this.score % 25) === 0) {
          this.startGameSound.play();
        }
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






// Link to updated background image: https://s22.postimg.cc/791yje2a9/new_BG.png
// Sound effects downloaded from NoiseForFun.com


/***/ }),

/***/ "./javascript/paper.js":
/*!*****************************!*\
  !*** ./javascript/paper.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Paper {
  constructor(ctx) {
    this.ctx = ctx;
    // this.pos = { x: , y: -56 };
    this.x = (Math.random() * 490);
    this.y = -56;
    this.image = new Image ();
    this.image.src = "https://s22.postimg.cc/cvst0f79t/paper.png";
    this.speed = 2;
    this.height = 54;
    this.width = 54;
  }

  drawPaper() {
    this.ctx.drawImage(this.image, this.x, this.y);
  }

  updatePaper(score) {
    this.y += (this.speed + Math.floor(score/25));
  }

  removePaper() {
    this.x = 700;
    this.y = 700;
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


/***/ }),

/***/ "./javascript/rock.js":
/*!****************************!*\
  !*** ./javascript/rock.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Rock {
  constructor(ctx) {
    //create rock here
    this.ctx = ctx;
    this.x = (Math.random() * 490);
    this.y = -56;
    // this.pos = {x: (Math.random() * 450 + 48), y: -56 };
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


/***/ }),

/***/ "./javascript/scissors.js":
/*!********************************!*\
  !*** ./javascript/scissors.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

class Scissors {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 250;
    this.y = 500;
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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map