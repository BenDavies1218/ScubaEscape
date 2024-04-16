import { Text, Title, AirRemaining, Player, Background, Wall } from "./classes.js";

const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1440;
canvas.height = 720;

let waterImage = new Image();
waterImage.src = "./images/water_1.jpg";

let wallImage = new Image();
wallImage.src = "./images/walls.jpg"

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

let scrollOffset = 0;
let start = false;
let depth = 1;
let time = 0;
let airRemainingLt = 550;
let airRemainingBar = 207;
let animateFrame = 0;
let consumptionRate = 40;
let walls = new Wall(wallImage, 0, 200)
let player = new Player("green");
let airRemaining = new AirRemaining(airRemainingLt);
let text = [new Title(
  "Scuba Escape",
  "24px Dune Rise",
  canvas.width * 0.5 - 130,
  50
),
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
new Text(`Time: ${time} Seconds`, "16px Serif", 50, 100),
new Text(`Depth: ${depth} Metres`, "16px Serif", 50, 125)]

/*
consumption rate litres per minute
0mt = 40
10mt = 80
20mt = 120
30mt = 160
40mt = 200
50mt = 240
60mt = 280

starting air will be 550LT
*/

addEventListener("click", function (event) {
  const clickX = event.clientX - canvas.getBoundingClientRect().left;
  const clickY = event.clientY - canvas.getBoundingClientRect().top;
  if (
    clickX >= canvas.width * 0.5 - 80 &&
    clickX <= canvas.width * 0.5 + 140 &&
    clickY >= 280 - 32 &&
    clickY <= 280
  ) {
    start = true;
    c.clearRect(0, 0, canvas.width, canvas.height);
    startGame();
  } else if (
    clickX >= canvas.width * 0.5 - 60 &&
    clickX <= canvas.width * 0.5 + 80 &&
    clickY >= 360 - 32 &&
    clickY <= 360
  ) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    options();
  } else if (
    clickX >= canvas.width * 0.5 - 40 &&
    clickX <= canvas.width * 0.5 + 60 &&
    clickY >= 440 - 32 &&
    clickY <= 440
  ) {
    c.clearRect(0, 0, canvas.width, canvas.height);
    help();
  }
});



function Menu() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  new Title(
    "Scuba Escape",
    "48px Dune Rise",
    canvas.width * 0.5 - 280,
    120
  ).update();
  new Text("Start Game", "32px Serif", canvas.width * 0.5 - 80, 280).update();
  new Text("Options", "32px Serif", canvas.width * 0.5 - 60, 360).update();
  new Text("Help", "32px Serif", canvas.width * 0.5 - 40, 440).update();
}

function startGame() {
  requestAnimationFrame(startGame);
  c.clearRect(0, 0, canvas.width, canvas.height);
  new Background(waterImage, 0, 0).draw();
  walls.draw();
  text.forEach(text => {
    text.update()
  });
  airRemaining.update();
  player.update();
  depth = Math.round((player.position.y - 370) / 100);
  consumptionRate = Math.floor(40 * (depth / 5));
  animateFrame += 1;

  if (animateFrame == 60) {
    time++;
    animateFrame = 0;
    airRemainingLt -= consumptionRate / 60;
    airRemainingBar = Math.floor((airRemainingLt / 550) * 207);
    airRemaining.air = airRemainingLt;
  }

  if (player.position.y < 370) {
    depth = 0;
  }
  if (airRemainingLt < 100) {
    airRemaining.colour = " red";
  } else if (airRemainingLt < 275) {
    airRemaining.colour = "orange";
  } else {
    airRemaining.colour = "green";
  }

  if (keys.left.pressed && player.position.x > 400) {
    player.position.x -= 5;
  } else if (keys.right.pressed && player.position.x < 900) {
    player.position.x += 5;
  } else if (keys.down.pressed && player.position.y < 500) {
    player.position.y += 5;
  } else if (keys.up.pressed && player.position.y > 300) {
    player.position.y -= 5;
  } else {
    player.position.x += 0;
    if (keys.right.pressed) {
      walls.x -= 5
    } else if (keys.left.pressed) {
      walls.x += 5
    } else if (keys.down.pressed) {
      walls.y -= 5
    } else if (keys.up.pressed) {
      walls.y += 5
    }
  }
}

function options() {
  new Title("Scuba Escape", "24px Dune Rise", canvas.width * 0.5 - 130, 50);
}

function help() {
  new Title("Scuba Escape", "24px Dune Rise", canvas.width * 0.5 - 130, 50);
  console.log("Help clicked");
}

function init() {
  Menu();
}
init();

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      break;
    case 83:
      keys.down.pressed = true;
      console.log("down");
      break;
    case 68:
      console.log("right");
      keys.right.pressed = true;
      break;
    case 87:
      console.log("up");
      keys.up.pressed = true;
      break;
  }
  console.log(keys.right.pressed);
});

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;
    case 83:
      console.log("down");
      keys.down.pressed = false;
      break;
    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;
    case 87:
      console.log("up");
      keys.up.pressed = false;
      break;
  }
  console.log(keys.right.pressed);
});
