import * as ex from 'excalibur';
import { MainScene } from './main_scene';
import { MonitorActor } from '../actors/monitor';
import { MonitorFrameActor } from '../actors/monitor_frame';


export class PCScene extends ex.Scene {
    private isActive = false;


    onInitialize(engine: ex.Engine) {
        let centerScreenX = engine.drawWidth / 2;
        let centerScreenY = engine.drawHeight / 2;
    
        // Create actors
        const monitorOut = new MonitorActor(centerScreenX, centerScreenY - 30, 5.25);
        const monitorFrame = new MonitorFrameActor(centerScreenX, centerScreenY - 30, 5.25);

        // Set Z-index for proper layering
monitorOut.z = 1;     // Behind the monitor frame
monitorFrame.z = 2;   // Above monitorOut

// Add actors in a specific order
this.add(monitorOut);   
this.add(monitorFrame);
    
        // Track mouse movement for parallax effect
        engine.input.pointers.primary.on('move', (event) => {
          let mouseX = event.worldPos.x;
          let mouseY = event.worldPos.y;
        });

      }

    onActivate(_context: ex.SceneActivationContext) {
        const pcUI = document.getElementById('desktop');
        const canvas = this.engine.canvas;

        if (pcUI) {
            pcUI.style.display = 'block'; // Show the pcUI
            canvas.style.pointerEvents = 'none'
          }


        this.engine.canvas.style.cursor = 'default';
        this.isActive = true;
 
      console.log('PCScene Activated');
    console.log("Current scene:", this.engine.currentSceneName); // Logs the current scene
        }
        

    isSceneActive(){
      return this.isActive;
    }

    onDeactivate() {
        const pcUI = document.getElementById('desktop');
        const canvas = this.engine.canvas;


        if (pcUI) {
            pcUI.style.display = 'none'; // Show the pcUI
            canvas.style.pointerEvents = 'auto'
          }
          

        // Hide cursor when leaving this scene
        this.engine.canvas.style.cursor = 'none';
        this.isActive = false;
    }

}