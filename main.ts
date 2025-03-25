import * as ex from 'excalibur';
import { loader } from './assets/resources';
import { MainScene } from './assets/scenes/main_scene';
import { PCScene } from './assets/scenes/pc_scene'; 


  // Create a game engine with basic settings
  const game = new ex.Engine({
    pixelArt: true,
    fixedUpdateFps: 60,
    antialiasing: false,
    displayMode: ex.DisplayMode.FillScreen,
    suppressPlayButton: true,
    backgroundColor: ex.Color.Transparent,
    scenes: {
      mainscene: MainScene,
      pcscene: PCScene,
    }
  });

  // Start game with the main scene
  game.start(loader).then(() => {
    game.goToScene('mainscene'); // Set the starting scene
    game.canvas.style.cursor = 'none'; // Hide the cursor
  });
  
    // Log the current scene when the game starts
    game.on('start', () => {
      console.log('Game Started');
      console.log("Current scene after start:", game.currentSceneName); // Logs the current scene
    });


const canvas = document.querySelector('canvas');


if(canvas){
  document.body.prepend(canvas);
}