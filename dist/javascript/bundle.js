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

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const background = new Image ();
background.src = "https://s22.postimg.cc/5h3h8fqnl/background.png";
background.onload = function() {
  ctx.drawImage(background, 0, 0);
};
// Images
// const images = () => {
//
//   this.rock = new Image();
//   this.paper = new Image();
//   this.scissors = new Image();
//
//   this.rock.src = "../images/rock.png";
//   this.paper.src = "../images/paper.png";
//   this.scissors.src = "../images/scissors.png";
// };
//

// Parent object properties
class AllObjects {
  constructor() {
    this.init = (x, y, width, height) => {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    };
  }
}

window.onload = () => {
  let scissors = new Scissors(ctx);
  let rock = new Rock(ctx);
  let paper = new Paper(ctx);
    rock.drawRock();
    scissors.drawScissors();
    paper.drawPaper();
};


// };


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


/***/ }),

/***/ "./javascript/rock.js":
/*!****************************!*\
  !*** ./javascript/rock.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

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


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map