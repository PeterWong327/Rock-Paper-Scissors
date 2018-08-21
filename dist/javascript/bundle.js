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
    // this.createRockRow();
    this.papers = [];
    // this.createPaperRow();
    this.loop();
    this.draw();
    this.frameCount = 0;
  }

  draw () {
    // clearFrame
    // draw everything
  }

  createRockRow (){
    let prevRock = 0;

    for (let i = 0; i < 2; i += 1) {
      let pos = Math.random() * 300;
      //checks if previous rock and current rock are touching
      if (Math.abs(prevRock - pos) > 55) {
        this.rocks.push(new Rock(ctx));
        prevRock = pos;
      }
    }
  }

  createPaperRow (){
    let prevPaper = 0;

    for (let i = 0; i < 2; i += 1) {
      let pos = Math.random() * 300 + prevPaper + 1;

      if (Math.abs(prevPaper - pos) > 100) {
        this.papers.push(new Paper(ctx));
        prevPaper = pos;
      }
      // else {
      //   debugger;
      // }
    }
  }

  loop () {
    this.frameCount += 1;
    // if ((this.frameCount * this.rocks[0].speed) >= 55) {
    if (this.frameCount > 125) {
      Math.random() > 0.5 ? (this.createPaperRow()) : this.createRockRow();
      this.frameCount = 0;
    }
    this.frame = requestAnimationFrame(this.loop.bind(this));
    //update: calls update method from rock and paper
    this.rocks.forEach(rock => {
      rock.updateRock();
    });

    this.papers.forEach(paper => {
      paper.updatePaper();
    });

    this.ctx.clearRect(0,0,500, 600);

    //Draw each element

    //draw background
    const background = new Image ();
    background.src = "https://s22.postimg.cc/5h3h8fqnl/background.png";
    this.ctx.drawImage(background, 0, 0);

    // draw scissor
    let scissors = new Scissors(ctx);
    scissors.drawScissors();

    //draw rocks
    this.rocks.forEach(rock => {
      rock.drawRock();
    });

    //draw paper
    this.papers.forEach(paper => {
      paper.drawPaper();
    });
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const game = new Game(ctx);

// const background = new Image ();
// background.src = "https://s22.postimg.cc/5h3h8fqnl/background.png";
//
// background.onload = function() {
//   ctx.drawImage(background, 0, 0);
// };

window.onload = () => {
  let scissors = new Scissors(ctx);
  let rock = new Rock(ctx);
  let paper = new Paper(ctx);
    rock.drawRock();
    scissors.drawScissors();
    paper.drawPaper();
};




// Link to background image: https://s22.postimg.cc/5h3h8fqnl/background.png


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
    this.pos = { x: Math.random() * 300, y: -56 };
    this.image = new Image ();
    this.image.src = "https://s22.postimg.cc/cvst0f79t/paper.png";
    this.speed = 1;
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
    this.pos = {x: Math.random() * 300, y: -56 };
    this.image = new Image ();
    this.image.src = "https://s15.postimg.cc/3wvz6x8bv/rock.png";
    this.speed = 1;
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
  }

  drawScissors() {
    const scissorsImg = new Image();
    scissorsImg.src = "https://s15.postimg.cc/40psnd10b/scissors.png";
    this.ctx.drawImage(scissorsImg, 250, 450);
  }
}

module.exports = Scissors;


//Link to scissors image: https://s15.postimg.cc/40psnd10b/scissors.png


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map