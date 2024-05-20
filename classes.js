const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

let mouse = {
  x: undefined,
  y: undefined,
};

window.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

export class Text {
  constructor(text, font, x, y, color) {
    this.text = text;
    this.font = font;
    this.x = x;
    this.y = y;
    this.colour = color || "black";

    this.draw = function () {
      c.fillStyle = this.colour;
      c.font = this.font;
      c.fillText(this.text, this.x, this.y);
    };
  }

  update() {
    this.draw();
  }
}

export class Title {
  constructor(text, font, x, y) {
    this.text = text;
    this.font = font;
    this.x = x;
    this.y = y;
    this.colour = "black";
  }
  draw() {
    c.fillStyle = this.colour;
    c.font = this.font;
    c.fillText(this.text, this.x, this.y);
  }
  update() {
    this.draw();
  }
}

export class AirRemaining {
  constructor(airRemaining) {
    this.air = airRemaining;
    this.colour = "green";
    this.draw = function () {
      c.fillStyle = this.colour;
      c.fillRect(canvas.width * 0.5 - 270, 70, this.air, 15);
    };
  }
  update() {
    this.draw();
  }
}

export class Player {
  constructor({ x, y, image, w, h, sw, sh, sy, sx }) {
    this.posx = canvas.width * 0.5 - 35;
    this.posy = 370;
    this.image = image;
    this.position = {
      x: x,
      y: y,
    };
    this.sx = sx;
    this.sy = sy;
    this.sw = sw;
    this.sh = sh;
    this.width = w;
    this.height = h;

    this.draw = function () {
      c.drawImage(
        this.image,
        this.sx,
        this.sy,
        this.sw,
        this.sh,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    };
    this.update = function () {
      this.draw();
    };
  }
}

export class Background {
  constructor(image, x, y) {
    this.image = image;
    this.x = x;
    this.y = y;

    this.draw = function () {
      c.filter = "#FFFFFF";
      c.globalAlpha = 0.8;
      for (let i = 0; i < 5; i++) {
        c.drawImage(this.image, this.x, this.y, 300, 300);
        this.x += 300;
      }
      c.globalAlpha = 1;
    };
  }
}

export class Wall {
  constructor({ x, y, image, w, h, sw, sh }) {
    this.position = {
      x,
      y,
    };
    this.image = image;
    this.sx = 0;
    this.sy = 0;
    this.sw = sw || image.width;
    this.sh = sh || image.height;

    this.width = w || image.width / 2;
    this.height = h || image.height / 2;
  }
  draw() {
    c.drawImage(
      this.image,
      this.sx,
      this.sy,
      this.sw,
      this.sh,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
  }
}

export class StatBackground {
  constructor(image, x, y) {
    this.image = image;
    this.position = {
      x,
      y,
    };

    this.draw = function () {
      c.drawImage(this.image, this.position.x, this.position.y, 300, 300);
    };
  }
}
