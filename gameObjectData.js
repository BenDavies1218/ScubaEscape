import { Wall } from "./classes.js";
let wallImage = new Image();
wallImage.src = "./images/walls.jpg";
const wallsData = [
  new Wall({
    x: 850,
    y: 200,
    image: wallImage,
  }),
  new Wall({
    x: 550,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 850,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 1150,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 1450,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 1750,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 2050,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 2350,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 2650,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 2950,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 1150,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: -50,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: -350,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: -650,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: -950,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: -1250,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: -1550,
    y: 200,
    image: wallImage,
    h: 110,
    sw: 500,
    sh: 200,
  }),
  new Wall({
    x: 850,
    y: 700,
    image: wallImage,
  }),
  new Wall({
    x: 850,
    y: 1200,
    image: wallImage,
  }),
  new Wall({
    x: 850,
    y: 1700,
    image: wallImage,
  }),

  new Wall({
    x: 850,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 550,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 250,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: -50,
    y: 1700,
    image: wallImage,
  }),

  new Wall({
    x: -350,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: -650,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: -950,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: -1250,
    y: 1700,
    image: wallImage,
  }),

  new Wall({
    x: -1550,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: -1550,
    y: 1400,
    image: wallImage,
  }),
  new Wall({
    x: -1550,
    y: 1100,
    image: wallImage,
  }),
  new Wall({
    x: -1550,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: -1550,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: -1550,
    y: 200,
    image: wallImage,
  }),

  new Wall({
    x: -1850,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: -1850,
    y: 1400,
    image: wallImage,
  }),
  new Wall({
    x: -1850,
    y: 1100,
    image: wallImage,
  }),
  new Wall({
    x: -1850,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: -1850,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: -1850,
    y: 200,
    image: wallImage,
  }),

  new Wall({
    x: 1150,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 1150,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 2050,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 2350,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 2650,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 2950,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 3250,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 3550,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 3550,
    y: 1400,
    image: wallImage,
  }),
  new Wall({
    x: 3550,
    y: 1100,
    image: wallImage,
  }),
  new Wall({
    x: 3550,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: 3550,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: 3550,
    y: 200,
    image: wallImage,
  }),
  new Wall({
    x: 3550,
    y: -100,
    image: wallImage,
  }),
  new Wall({
    x: 3550,
    y: -400,
    image: wallImage,
  }),
  new Wall({
    x: 3250,
    y: -400,
    image: wallImage,
  }),
  new Wall({
    x: 2950,
    y: -400,
    image: wallImage,
  }),
  new Wall({
    x: 2950,
    y: -100,
    image: wallImage,
  }),

  new Wall({
    x: 2750,
    y: 1100,
    image: wallImage,
  }),
  new Wall({
    x: 3850,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: 3850,
    y: 1100,
    image: wallImage,
  }),
  new Wall({
    x: 3850,
    y: 1400,
    image: wallImage,
  }),
  new Wall({
    x: 3850,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: 3850,
    y: 200,
    image: wallImage,
  }),
  new Wall({
    x: 3850,
    y: -100,
    image: wallImage,
  }),
  new Wall({
    x: 3850,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 3850,
    y: -400,
    image: wallImage,
  }),
  new Wall({
    x: 2650,
    y: -400,
    image: wallImage,
  }),
  new Wall({
    x: 2350,
    y: -400,
    image: wallImage,
  }),
  new Wall({
    x: 3250,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: 1750,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 1450,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: 1300,
    y: 1250,
    image: wallImage,
  }),
  new Wall({
    x: 1750,
    y: 1400,
    image: wallImage,
  }),
  new Wall({
    x: 2050,
    y: 1400,
    image: wallImage,
  }),
  new Wall({
    x: 2050,
    y: 1100,
    image: wallImage,
  }),
  new Wall({
    x: 2250,
    y: 1100,
    image: wallImage,
  }),
  new Wall({
    x: 2950,
    y: 1100,
    image: wallImage,
  }),
  new Wall({
    x: 2750,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: 2650,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: 2650,
    y: 200,
    image: wallImage,
  }),
  new Wall({
    x: 1250,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: 1550,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: 1550,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: 1850,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: 2150,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: 2150,
    y: 200,
    image: wallImage,
  }),
  new Wall({
    x: 250,
    y: 1700,
    image: wallImage,
  }),
  new Wall({
    x: -50,
    y: 1700,
    image: wallImage,
  }),

  new Wall({
    x: 250,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: 250,
    y: 200,
    image: wallImage,
  }),
  new Wall({
    x: -850,
    y: 500,
    image: wallImage,
  }),
  new Wall({
    x: -850,
    y: 200,
    image: wallImage,
  }),
  new Wall({
    x: -850,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: -950,
    y: 1200,
    image: wallImage,
  }),
  new Wall({
    x: -150,
    y: 1200,
    image: wallImage,
  }),
  new Wall({
    x: 150,
    y: 1200,
    image: wallImage,
  }),
  new Wall({
    x: 150,
    y: 900,
    image: wallImage,
  }),
  new Wall({
    x: 150,
    y: 1400,
    image: wallImage,
  }),
  new Wall({
    x: 350,
    y: 1000,
    image: wallImage,
  }),
  new Wall({
    x: -1350,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: -650,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: -850,
    y: 900,
    image: wallImage,
  }),
  new Wall({
    x: -350,
    y: 800,
    image: wallImage,
  }),
  new Wall({
    x: -650,
    y: 1100,
    image: wallImage,
  }),
];

export { wallsData };
