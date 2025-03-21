import * as ex from 'excalibur';
import { loader } from './assets/resources';
import { MainScene } from './assets/scenes/main_scene';

// Create a game engine with basic settings
const game = new ex.Engine({
  pixelArt: true,
  fixedUpdateFps: 60,
  antialiasing: false,
  displayMode: ex.DisplayMode.FillScreen,
  suppressPlayButton: true,
  backgroundColor: ex.Color.Transparent 
});

// Register scenes
game.add('main', new MainScene()); 

// Start game with the main scene
game.start(loader).then(() => {
  game.goToScene('main'); // Set the starting scene
  game.canvas.style.cursor = 'none'; // Hide the cursor
});
