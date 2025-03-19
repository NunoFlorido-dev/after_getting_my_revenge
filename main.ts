import * as ex from 'excalibur';
import { mouseActor } from './assets/actors/mouse';
import { gloveActor } from './assets/actors/glove';
import { monitorActor } from './assets/actors/monitor';
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


// Create and add the image actor
const mouse = new mouseActor(centerScreenX + 350, centerScreenY + 250);
const glove = new gloveActor(centerScreenX + 350, centerScreenY + 250);
const monitor = new monitorActor(centerScreenX, centerScreenY - 100);
game.add(mouse);
game.add(glove);
game.add(monitor);

game.start(loader);



