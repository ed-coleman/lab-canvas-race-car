const myCanvas = document.querySelector("canvas");
const ctx = myCanvas.getContext("2d");
myCanvas.style.border = "2px solid black";

const bgImg = new Image();
bgImg.src = "../images/road.png";
const bgImg2 = new Image();
bgImg2.src = "../images/road.png";
let bg1Y = 0;
let bg2Y = -myCanvas.height;

const carImg = new Image();
carImg.src = "../images/car.png";

const trafficImg = new Image();
trafficImg.src - "../images/logo.png";

// game variables

let isMovingLeft = false;
let isMovingRight = false;
function stopCar() {
  carSpeed;
}

let carSpeed = 3;
let carPosition = myCanvas.width / 2;
// set to true if gameover
let gameOver = false;
let animateId;

function goLeft() {
  carPosition -= carSpeed;
}

function goRight() {
  carPosition += carSpeed;
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function animate() {
    
    ctx.drawImage(bgImg2, 0, bg1Y, myCanvas.width, myCanvas.height);
    ctx.drawImage(bgImg, 0, bg2Y, -myCanvas.height, myCanvas.width);
    bg1Y += 2;
    bg2Y += 2;
    ctx.drawImage(trafficImg, 0, myCanvas.height, 50, 100);
    ctx.drawImage(carImg, carPosition, myCanvas.height - 100, 50, 100);
    //ctx.drawImage(IMG, sx, sy, swidth, sheight, dx, dy, dWidth, dHeight)

    if (bg1Y > myCanvas.height) {
      bg1Y = -myCanvas.height;
    }
    if (bg2Y > myCanvas.height) {
      bg2Y = -myCanvas.height;
    }

    if (isMovingLeft && carPosition > 60) {
      goLeft();
    }
    if (isMovingRight & (carPosition < myCanvas.width - carImg.width + 50)) {
      goRight();
    }

    /*if (carPosition = myCanvas.width - carImg.width) {
    }*/

    document.addEventListener("keypress", (event) => {
      if (event.key === "a") {
        //move car to the left
        isMovingLeft = true;
        isMovingRight = false;
      } else if (event.key === "d") {
        //move car to the right
        isMovingRight = true;
        isMovingLeft = false;
      }
    });

    // ask about how this callback function works

    if (!gameOver) {
      animateId = requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(animateId);
    }
  }

  function startGame() {
    animate();
  }
};
