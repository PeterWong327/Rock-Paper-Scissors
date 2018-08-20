const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d");

const background = new Image();
background.src = "./images/background.png";

background.onload = function(){
  ctx.drawImage(background,0,0);
};
