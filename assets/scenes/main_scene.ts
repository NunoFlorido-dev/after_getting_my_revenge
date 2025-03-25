import * as ex from 'excalibur';
import { MouseActor } from '../actors/mouse';
import { GloveActor } from '../actors/glove';
import { MonitorActor } from '../actors/monitor';
import { ArmActor } from '../actors/arm';
import { KeyboardActor } from '../actors/keyboard';
import { MonitorFrameActor } from '../actors/monitor_frame';
import { UIPreview } from '../actors/ui_preview';


export class MainScene extends ex.Scene {
  private isActive = false;


  onInitialize(engine: ex.Engine) {
    let centerScreenX = engine.drawWidth / 2;
    let centerScreenY = engine.drawHeight / 2;

    // Create actors
    const mouse = new MouseActor(centerScreenX + 350, centerScreenY + 250);
    const glove = new GloveActor();
    const arm = new ArmActor();
    const monitorOut = new MonitorActor(centerScreenX, centerScreenY - 100, 3.25);
    const ui_preview = new UIPreview(centerScreenX, centerScreenY - 120);
    const monitorFrame = new MonitorFrameActor(centerScreenX, centerScreenY - 100, 3.25);
    const keyboard = new KeyboardActor(centerScreenX, centerScreenY + 250);

    // Add actors to scene
    this.add(ui_preview);
    this.add(monitorOut);
    this.add(monitorFrame);
    this.add(mouse);
    this.add(arm);
    this.add(keyboard);
    this.add(glove);

    // Track mouse movement for parallax effect
    engine.input.pointers.primary.on('move', (event) => {
      let mouseX = event.worldPos.x;
      let mouseY = event.worldPos.y;

      // Adjust actors for a slower parallax effect
      monitorOut.pos = ex.vec(centerScreenX - (mouseX - centerScreenX) * 0.05, centerScreenY - 100 - (mouseY - centerScreenY) * 0.05); // Far (very slow)
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
