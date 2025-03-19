import * as ex from 'excalibur';
import { MouseActor } from './assets/actors/mouse';
import { GloveActor } from './assets/actors/glove';
import { MonitorActor } from './assets/actors/monitor';
import { loader } from './assets/resources';

// Create a game engine with basic settings
const game = new ex.Engine({
  pixelArt: true,
  fixedUpdateFps: 60,
  antialiasing: false,
  displayMode: ex.DisplayMode.FillScreen,
  suppressPlayButton: true
});


let centerScreenX = game.drawWidth / 2;
let centerScreenY = game.drawHeight / 2;


// Create actors
const mouse = new MouseActor(centerScreenX + 350, centerScreenY + 250);
const glove = new GloveActor();
const monitor = new MonitorActor(centerScreenX, centerScreenY - 100);


game.add(mouse);
game.add(glove);
game.add(monitor);

// Track mouse movement for parallax effect (inverted movement, slower)
game.input.pointers.primary.on('move', (event) => {
  let mouseX = event.worldPos.x;
  let mouseY = event.worldPos.y;

  // Adjust actors for a slower parallax effect
  monitor.pos = ex.vec(centerScreenX - (mouseX - centerScreenX) * 0.05, centerScreenY - 100 - (mouseY - centerScreenY) * 0.05); // Far (very slow)
  mouse.pos = ex.vec(centerScreenX + 350 - (mouseX - centerScreenX) * 0.1, centerScreenY + 250 - (mouseY - centerScreenY) * 0.1); // Mid (slower)
  glove.pos = ex.vec(mouseX, mouseY); // Closest (still follows mouse directly)
});


game.start(loader).then(() => {
  game.canvas.style.cursor = 'none'; // Hide the cursor when the game starts
});



