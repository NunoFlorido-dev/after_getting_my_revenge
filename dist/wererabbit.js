let run1;
let run2;
let jump;
let imgPipe;
let font;
let carrot;
let imgChar;
let bgImg;

let pipes = [];
let score = 0;
let fr = 120;
let originalFr = fr;
let gameState = "start";
let startBtn;
let restartBtn, closeBtn;

let jumpSound;
let gameOverSound;

function preload() {
  run1 = loadImage("/images/wererabit_1.png");
  run2 = loadImage("/images/wererabit_2.png");
  jump = loadImage("/images/wererabbit_jump.png");
  imgChar = run1;
  imgPipe = loadImage("/images/cenoura.png");
  font = loadFont("/fonts/PPNeueMontrealMono-Light.woff");
  bgImg = loadImage("/images/cenario_jogo.png");
  jumpSound = loadSound("/sounds/cartoon-jump.mp3");
  gameOverSound = loadSound("/sounds/game-over.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  imageMode(CENTER);
  textFont(font);
  textAlign(CENTER, CENTER);
  if (gameState === "start") {
    showStartScreen();
  } else {
    char = new Char(width / 2 - 150, height / 2 + 76, imgChar);
  }
}

function draw() {
  if (gameState === "start") return;

  if (gameState === "gameOver") {
    drawGameOverScreen();
    return;
  }

  // gameplay
  image(bgImg, width / 2, height / 2 + 85, width + 170, height + 170);
  score += 0.1;
  fill(255);
  text("Score:" + round(score), 60, 25);

  if (frameCount % 960 === 0) {
    fr -= 5;
  }

  if (frameCount % fr === 0) {
    let change = random(1) > 0.5;
    let yH = change ? height - 120 : height - 200;
    let pipe = new Pipe(random(width, width + 200), yH, imgPipe, true);
    pipes.push(pipe);
  }

  for (let i = pipes.length - 1; i >= 0; i--) {
    if (!char.interact(pipes[i])) {
      pipes[i].move();
      pipes[i].display();
      if (pipes[i].x < -50) pipes.splice(i, 1);
    } else {
      console.log("Collision!");
      triggerGameOver();
      return;
    }
  }

  let sec = round(millis() / 1000);
  char.setImg(sec % 2 == 0 ? run1 : run2);
  if (char.activateJump) char.setImg(jump);

  char.move();
  char.display();
}

function showStartScreen() {
  background(0);
  fill(255);
  textSize(28);
  text("Welcome to Were-Rabbit Jump!", width / 2, height / 2 - 100);
  textSize(18);
  text(
    "Use UP ARROW to Jump\nUse DOWN ARROW to increase fall speed\nAvoid the carrots!",
    width / 2,
    height / 2 - 20
  );

  startBtn = createButton("Start Game");
  startBtn.position(width / 2 - 50, height / 2 + 40);
  startBtn.mousePressed(startGame);
}

function startGame() {
  startBtn.remove();
  char = new Char(width / 2 - 150, height / 2 + 76, imgChar);
  gameState = "playing";
  loop();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    char.jump();
    jumpSound.play();
  }
  if (keyCode === DOWN_ARROW) {
    char.changeDownInc();
  }
}

function restartGame() {
  score = 0;
  pipes = [];
  fr = 120;
  char = new Char(width / 2 - 150, height / 2 + 76, imgChar);
  gameState = "playing";
  restartBtn.remove();
  closeBtn.remove();
  loop();
}

function triggerGameOver() {
  gameState = "gameOver";
  gameOverSound.play();
  noLoop();
  fill(0);
  text("Game Over!", width / 2, height / 2 - 20);
  text("Score:" + round(score), width / 2, height / 2 + 10);
  restartBtn = createButton("Restart");
  restartBtn.position(width / 2 - 60, height / 2 + 40);
  restartBtn.mousePressed(restartGame);

  closeBtn = createButton("Close");
  closeBtn.position(width / 2 + 20, height / 2 + 40);
  closeBtn.mousePressed(() => window.close());
}

class Char {
  constructor(x, y, img) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.downInc = 1;
    this.originalY = y;
    this.activateJump = false;
    this.isInThreshold = false;
    this.img = img;
  }

  move() {
    if (this.activateJump) {
      this.y -= 3;
      if (this.y <= this.originalY - 90) {
        this.activateJump = false;
        this.isInThreshold = true;
      }
    } else {
      if (this.isInThreshold) {
        this.y += this.downInc;
        if (this.y >= this.originalY) {
          this.isInThreshold = false;
          this.activateJump = false;
        }
      }
    }
  }

  changeDownInc() {
    this.downInc += 1;
  }

  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);
  }

  jump() {
    if (this.y >= this.originalY) {
      this.activateJump = true;
      this.downInc = 1;
    }
  }

  interact(p) {
    return (
      this.x + this.w / 2 > p.x - p.w / 2 + 20 &&
      this.x - this.w / 2 < p.x + p.w / 2 - 20 &&
      this.y + this.h / 2 > p.y - p.h / 2 + 20 &&
      this.y - this.h / 2 < p.y + p.h / 2 - 20
    );
  }

  setImg(newImg) {
    console.log("Setting image to:", newImg);
    this.img = newImg;
  }
}

class Pipe {
  constructor(x, y, img, spot) {
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 50;
    this.img = img;
    this.img = img;
    this.spot = spot;
  }

  display() {
    imageMode(CENTER);
    image(this.img, this.x, this.y, this.w, this.h);
  }
  move() {
    this.x -= 2;
  }
}
