import * as ex from 'excalibur';
import { MouseActor } from '../actors/mouse';
import { GloveActor } from '../actors/glove';
import { MonitorActor } from '../actors/monitor';
import { ArmActor } from '../actors/arm';
import { KeyboardActor } from '../actors/keyboard';
import { MonitorFrameActor } from '../actors/monitor_frame';
import { UIPreview } from '../actors/ui_preview';
import { DeskActor } from '../actors/desk';


export class MainScene extends ex.Scene {
  private isActive = false;


  onInitialize(engine: ex.Engine) {
    let centerScreenX = engine.drawWidth / 2;
    let centerScreenY = engine.drawHeight / 2;
    

    // Create actors
    const mouse = new MouseActor(centerScreenX + 350, centerScreenY + 250);
    const desk = new DeskActor(centerScreenX, centerScreenY + 60, 6);
    const glove = new GloveActor();
    const arm = new ArmActor();
    const monitorOut = new MonitorActor(centerScreenX, centerScreenY - 100, 3.25);
    const ui_preview = new UIPreview(centerScreenX, centerScreenY - 120);
    const monitorFrame = new MonitorFrameActor(centerScreenX, centerScreenY - 100, 3.25);
    const keyboard = new KeyboardActor(centerScreenX, centerScreenY + 250);

    // Set Z-index to control rendering order
desk.z = 0;  
ui_preview.z = 1;    // UI elements on top        // Lowest (background)
monitorOut.z = 2;
monitorFrame.z = 3;
keyboard.z = 4;
mouse.z = 5;         // Above the keyboard
arm.z = 6; 
glove.z = 7;         // Above the mouse (follows the cursor)

    // Add actors to scene
    this.add(desk);          // Background
    this.add(monitorOut);
    this.add(monitorFrame);
    this.add(keyboard);
    this.add(mouse);         // Above the keyboard
    this.add(glove);         // Above the mouse (cursor follows it)
    this.add(arm);
    this.add(ui_preview);    // UI should be on top

    // Track mouse movement for parallax effect
    engine.input.pointers.primary.on('move', (event) => {
      let mouseX = event.worldPos.x;
      let mouseY = event.worldPos.y;

      // Adjust actors for a slower parallax effect
      monitorOut.pos = ex.vec(centerScreenX - (mouseX - centerScreenX) * 0.05, centerScreenY - 100 - (mouseY - centerScreenY) * 0.05); // Far (very slow)
      desk.pos = ex.vec(centerScreenX - (mouseX - centerScreenX) * 0.05, centerScreenY + 60 - (mouseY - centerScreenY) * 0.05); // Far (very slow)
      ui_preview.pos = ex.vec(centerScreenX - (mouseX - centerScreenX) * 0.05, centerScreenY - 120 - (mouseY - centerScreenY) * 0.05); // Far (very slow)
      monitorFrame.pos = ex.vec(centerScreenX - (mouseX - centerScreenX) * 0.05, centerScreenY - 100 - (mouseY - centerScreenY) * 0.05); // Far (very slow)
      mouse.pos = ex.vec(centerScreenX + 350 - (mouseX - centerScreenX) * 0.1, centerScreenY + 250 - (mouseY - centerScreenY) * 0.1); // Mid (slower)
      keyboard.pos = ex.vec(centerScreenX - 50 - (mouseX - centerScreenX) * 0.1, centerScreenY + 230 - (mouseY - centerScreenY) * 0.1); // Mid (slower)
      glove.pos = ex.vec(mouseX, mouseY); // Closest (still follows mouse directly)
      arm.pos = ex.vec(mouseX - 5, mouseY + 750);
    });
  }

  onActivate() {
    this.isActive = true;
    console.log('MainScene Activated');
    console.log("Current scene:", this.engine.currentSceneName); // Logs the current scene
  }


  isSceneActive(){
    return this.isActive;
  }

  onDeactivate() {
      this.isActive = false;
  }

}
