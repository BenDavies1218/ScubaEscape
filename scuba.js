import {
  Text,
  Title,
  AirRemaining,
  Player,
  Background,
  StatBackground,
} from "./classes.js";

import { wallsData } from "./gameObjectData.js";

import { playerCollision } from "./functions.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1440;
canvas.height = 720;

let waterImage = new Image();
waterImage.src = "./images/water_1.jpg";

let wallImage = new Image();
wallImage.src = "./images/walls.jpg";

let grassImage = new Image();
grassImage.src = "./images/grass.jpg";

let subImage = new Image();
subImage.src = "./images/sub.png";

let subImage2 = new Image();
subImage2.src = "./images/sub2.png";

let wonImg = new Image();
wonImg.src = "./images/greenimg.png";

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  up: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
};

let depth = 0;
let time = 0;
let airRemainingLt = 550;
let airRemainingBar = 207;
let animateFrame = 0;
let consumptionRate = 40;
let airRemaining = new AirRemaining(airRemainingLt);

// { x, y, image, w, h, sw, sh }
let walls = wallsData;

let grass = [
  new StatBackground(grassImage, -1800, -100),
  new StatBackground(grassImage, -1500, -100),
  new StatBackground(grassImage, -1200, -100),
  new StatBackground(grassImage, -900, -100),
  new StatBackground(grassImage, -600, -100),
  new StatBackground(grassImage, -300, -100),
  new StatBackground(grassImage, 0, -100),
  new StatBackground(grassImage, 300, -100),
  new StatBackground(grassImage, 600, -100),
  new StatBackground(grassImage, 900, -100),
  new StatBackground(grassImage, 1200, -100),
  new StatBackground(grassImage, 1500, -100),
  new StatBackground(grassImage, 1800, -100),
  new StatBackground(grassImage, 2100, -100),
  new StatBackground(grassImage, 2400, -100),
  new StatBackground(grassImage, 2700, -100),
  new StatBackground(wonImg, 3250, -100),
];

addEventListener("click", function (event) {
  const clickX = event.clientX - canvas.getBoundingClientRect().left;
  const clickY = event.clientY - canvas.getBoundingClientRect().top;
  if (clickX >= 1150 && clickX <= 1320 && clickY >= 20 && clickY <= 75) {
    c.clearRect(1150, 50, 170, 25);
    window.location.reload();
  }
  if (
    clickX >= canvas.width * 0.5 - 80 &&
    clickX <= canvas.width * 0.5 + 140 &&
    clickY >= 380 - 32 &&
    clickY <= 380
  ) {
    c.clearRect(0, 0, canvas.width, canvas.height);

    load();
  } else if (
    clickX >= canvas.width * 0.5 - 80 &&
    clickX <= canvas.width * 0.5 + 100 &&
    clickY >= 440 - 32 &&
    clickY <= 440
  ) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    help();
  }
});

function drawWalls() {
  return new Promise((resolve) => {
    walls.forEach((wall, index) => {
      wall.draw();
      if (index === walls.length - 1) {
        resolve();
      }
    });
  });
}

async function Menu() {
  function menuLoop() {
    requestAnimationFrame(menuLoop);
    c.clearRect(0, 0, canvas.width, canvas.height);
    new Background(waterImage, 0, 200).draw();
    new Background(waterImage, 0, 500).draw();

    new Background(grassImage, 0, -100).draw();
    new Title(
      "Scuba Escape",
      "48px Dune Rise",
      canvas.width * 0.5 - 280,
      120
    ).update();
    new Text("Start Game", "32px Serif", canvas.width * 0.5 - 80, 380).update();
    new Text("Help", "32px Serif", canvas.width * 0.5 - 40, 440).update();
  }
  menuLoop();
}

let player = new Player({
  x: canvas.width * 0.5 - 35,
  y: 370,
  image: subImage,
  sw: 1500,
  sh: 1000,
  w: 150,
  H: 100,
});

async function load() {
  await drawWalls();
  cancelAnimationFrame(Menu);
  displayLoadingText();

  setTimeout(startGame, 1000);
}

function displayLoadingText() {
  function loadingLoop() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    new Background(waterImage, 0, 200).draw();
    new Background(waterImage, 0, 500).draw();
    new Background(grassImage, 0, -100).draw();
    new Title(
      "Scuba Escape",
      "48px Dune Rise",
      canvas.width * 0.5 - 280,
      120
    ).update();
    new Text(
      "Loading Level",
      "32px Serif",
      canvas.width * 0.5 - 80,
      540
    ).update();
    requestAnimationFrame(loadingLoop);
  }

  loadingLoop();
}

async function startGame() {
  let timeText = new Text(`Time: ${time} Seconds`, "16px Serif", 50, 100);
  let text = [
    new Title("Scuba Escape", "24px Dune Rise", canvas.width * 0.5 - 130, 50),
    new Text("Air Tank Size: 40cu ft", "16px Serif", 50, 45),
    new Text(
      `Air Consumption Rate (LPM): ${consumptionRate}`,
      "16px Serif",
      50,
      75
    ),
    new Text(
      `Air Remaining: ${airRemainingBar} BAR`,
      "16px Serif",
      canvas.width * 0.5 - 80,
      110
    ),
    ,
    new Text(`Depth: ${depth} Metres`, "16px Serif", 50, 125),
    new Text(
      "Click here if only grass and water loaded",
      "16px Serif",
      1150,
      50
    ),
  ];
  requestAnimationFrame(startGame);
  c.clearRect(0, 0, canvas.width, canvas.height);
  new Background(waterImage, 0, -100).draw();
  new Background(waterImage, 0, 200).draw();
  new Background(waterImage, 0, 500).draw();
  walls.forEach((wall) => {
    wall.draw();
  });
  grass.forEach((grass) => {
    grass.draw();
  });

  text.forEach((text) => {
    text.update();
  });
  timeText.update();
  airRemaining.update();
  player.update();
  depth = Math.round((player.posx - 570) / 1000);
  consumptionRate = Math.floor(40 * (depth / 5));
  animateFrame += 1;

  if (player.posx < -18750) {
    endGame("won");
    return;
  }

  if (airRemainingBar < 0) {
    endGame();
    return;
  }
  if (animateFrame == 60) {
    time++;
    animateFrame = 0;
    airRemainingLt -= consumptionRate / 60;
    airRemainingBar = Math.floor((airRemainingLt / 550) * 207);
    airRemaining.air = airRemainingLt;
  }

  if (player.posx < 370) {
    depth = 0;
    consumptionRate = 0;
  }
  if (airRemainingLt < 100) {
    airRemaining.colour = " red";
  } else if (airRemainingLt < 275) {
    airRemaining.colour = "orange";
  } else {
    airRemaining.colour = "green";
  }

  if (!playerCollision(player, walls)) {
    if (keys.left.pressed && player.position.x > 400) {
      player.image = subImage;
      (player.sx = 2650), (player.sy = 1250), (player.position.x -= 5);
    } else if (keys.right.pressed && player.position.x < 900) {
      player.image = subImage2;
      player.sx = 300;
      player.sy = 1250;
      player.position.x += 5;
    } else if (keys.down.pressed && player.position.y < 400) {
      player.position.y += 5;
    } else if (keys.up.pressed && player.position.y > 300) {
      player.position.y -= 5;
    } else {
      player.position.x += 0;
      if (keys.right.pressed) {
        grass.forEach((img) => {
          img.position.x -= 5;
        });
        walls.forEach((wall) => {
          wall.position.x -= 5;
        });
      } else if (keys.left.pressed) {
        grass.forEach((img) => {
          img.position.x += 5;
        });
        walls.forEach((wall) => {
          wall.position.x += 5;
        });
      } else if (keys.down.pressed) {
        grass.forEach((img) => {
          img.position.y -= 5;
        });
        walls.forEach((wall) => {
          wall.position.y -= 5;
          player.posx += 5;
        });
      } else if (keys.up.pressed) {
        grass.forEach((img) => {
          img.position.y += 5;
        });
        walls.forEach((wall) => {
          wall.position.y += 5;
          player.posx -= 5;
        });
      }
    }
  }
}

function endGame(result) {
  cancelAnimationFrame(startGame);
  c.fillStyle = "black";
  c.fillRect(canvas.width * 0.5 - 340, 330, 670, 320);
  c.fillStyle = "white";
  c.fillRect(canvas.width * 0.5 - 330, 340, 650, 300);

  if (result === "won") {
    c.fillStyle = "green";
    c.font = "38px serif";
    c.fillText("You Won!", canvas.width * 0.5 - 100, 400);
    c.font = "28px serif";
    c.fillText(
      "Congratulations for completing the Game!",
      canvas.width * 0.5 - 250,
      500
    );
  } else {
    c.fillStyle = "red";
    c.font = "48px serif";
    c.fillText("Game Over", canvas.width * 0.5 - 110, 400);
    c.font = "28px serif";
    c.fillText("Better luck next time!", canvas.width * 0.5 - 115, 500);
  }
}

async function help() {
  requestAnimationFrame(help);
  c.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the background images first
  new Background(waterImage, 0, 200).draw();
  new Background(waterImage, 0, 500).draw();

  // Wait for all walls to be drawn
  await drawWalls();

  // Draw the remaining background, title, and text after walls
  new Background(grassImage, 0, -100).draw();
  c.fillStyle = "black";
  c.fillRect(canvas.width * 0.5 - 340, 330, 670, 320);
  c.fillStyle = "white";
  c.fillRect(canvas.width * 0.5 - 330, 340, 650, 300);
  new Title(
    "Scuba Escape",
    "48px Dune Rise",
    canvas.width * 0.5 - 280,
    120
  ).update();
  new Text("Start Game", "32px Serif", canvas.width * 0.5 - 80, 380).update();
  new Text(
    "Move UP:     W",
    "32px Serif",
    canvas.width * 0.5 - 120,
    440
  ).update();
  new Text(
    "Move Down:   S",
    "32px Serif",
    canvas.width * 0.5 - 120,
    480
  ).update();
  new Text(
    "Move Right:  D",
    "32px Serif",
    canvas.width * 0.5 - 120,
    520
  ).update();
  new Text(
    "Move Left:   A",
    "32px Serif",
    canvas.width * 0.5 - 120,
    560
  ).update();
  new Text(
    "Find the surface before your air Runs OUT!!",
    "32px Serif",
    canvas.width * 0.5 - 290,
    600,
    "red"
  ).update();
}

function init() {
  Menu();
}
subImage.onload = function () {
  player = new Player({
    x: canvas.width * 0.5 - 85,
    y: 370,
    image: subImage,
    sw: 1500,
    sh: 1000,
    w: 150,
    h: 100,
    sx: 2650,
    sy: 1250,
  });
};

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.pressed = true;
      break;
    case 83:
      keys.down.pressed = true;
      break;
    case 68:
      keys.right.pressed = true;
      break;
    case 87:
      keys.up.pressed = true;
      break;
  }
});

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      keys.left.pressed = false;
      break;
    case 83:
      keys.down.pressed = false;
      break;
    case 68:
      keys.right.pressed = false;
      break;
    case 87:
      keys.up.pressed = false;
      break;
  }
});

init();
