let imgChar;
function preload() {
  imgChar = loadImage("/public/images/wererabbit.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  char = new drawChar(width / 2 - 150, height / 2 + 76, imgChar);
}

function draw() {
  background(0);
  drawGround();
  char.display();
}

function drawGround() {
  fill("#8a8a8a");
  rect(0, height - 100, width, 100);
}

class drawChar {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.img = img;
  }

  display() {
    image(this.img, this.x, this.y, 50, 50);
  }
}
