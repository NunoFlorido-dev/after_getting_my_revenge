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
  const loadingscreen = document.getElementById("loading-screen");
  if (loadingscreen) loadingscreen.remove();
  game.goToScene('mainscene'); // Set the starting scene
  game.canvas.style.cursor = 'none'; // Hide the cursor
  game.canvas.style.pointerEvents = 'auto'; // Enable pointer interactions
});

// Log the current scene when the game starts
game.on('start', () => {
  console.log('Game Started');
  console.log("Current scene after start:", game.currentSceneName); // Logs the current scene
});

const exit_note = document.getElementById("exit_note");
const canvas = document.querySelector('canvas');

if (exit_note) {
  document.body.prepend(exit_note);
  exit_note.style.zIndex = "20";
}

if (canvas) {
  document.body.prepend(canvas);
  game.canvas.style.pointerEvents = 'auto'; // Enable pointer interactions
}

// You can also log the current scene after the start event to ensure it has been set
game.on('postupdate', () => {
  console.log('Current scene after update:', game.currentSceneName);


if(game.currentSceneName === "pcscene"){
  if(exit_note){
    exit_note.style.display = 'block';
    
    exit_note.addEventListener("click", () => {
      game.goToScene("mainscene");
      exit_note.style.cursor = "pointer";
    })
  }
 }else{
  if(exit_note){
  exit_note.style.display = 'none';
  }
 }



});



