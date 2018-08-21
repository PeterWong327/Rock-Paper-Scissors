// module.exports 
// //Background
// const Background = () => {
//   this.speed = 1;
//   this.draw = () => {
//     this.y += this.speed;
//     this.context.drawImage(images.background, this.x, this.y);
//     this.context.drawImage(images.bakground, this.x, this.y - this.canvasHeight);
//     if (this.y >= this.canvasHeight)
//       this.y = 0;
//   };
// };
//
// Background.prototype = new AllObjects();
//
// //Game object
// class Game {
//   constructor() {
//     this.init = () => {
//       this.canvasBG = document.getElementById('canvas');
//       if (this.canvasBG.getContext) {
//         this.ctxBG = this.canvasBG.getContext('2d');
//         Background.prototype.ctx = this.ctxBG;
//         Background.prototype.canvasWidth = this.canvasBG.width;
//         Background.prototype.canvasHeight = this.canvasBG.height;
//         this.background = new Background();
//         this.background.init(0,0);
//         return true;
//       } else {
//         return false;
//       }
//     };
//     this.start = () => {
//       animate();
//     };
//   }
// }
//
//
//background looping


// background.width = 850;
// background.height = 490;

// const img = new Image();
//
// img.src = "./images/background.png";
