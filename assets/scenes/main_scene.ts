import * as ex from 'excalibur';
import { MouseActor } from '../actors/mouse';
import { GloveActor } from '../actors/glove';
import { MonitorActor } from '../actors/monitor';

export class MainScene extends ex.Scene {
  onInitialize(engine: ex.Engine) {
    let centerScreenX = engine.drawWidth / 2;
    let centerScreenY = engine.drawHeight / 2;

    // Create actors
    const mouse = new MouseActor(centerScreenX + 350, centerScreenY + 250);
    const glove = new GloveActor();
    const monitor = new MonitorActor(centerScreenX, centerScreenY - 100);

    // Add actors to scene
    this.add(mouse);
    this.add(glove);
    this.add(monitor);

    // Track mouse movement for parallax effect
    engine.input.pointers.primary.on('move', (event) => {
      let mouseX = event.worldPos.x;
      let mouseY = event.worldPos.y;

      // Adjust actors for a slower parallax effect
      monitor.pos = ex.vec(centerScreenX - (mouseX - centerScreenX) * 0.05, centerScreenY - 100 - (mouseY - centerScreenY) * 0.05); // Far (very slow)
      mouse.pos = ex.vec(centerScreenX + 350 - (mouseX - centerScreenX) * 0.1, centerScreenY + 250 - (mouseY - centerScreenY) * 0.1); // Mid (slower)
      glove.pos = ex.vec(mouseX, mouseY); // Closest (still follows mouse directly)
    });
  }

  onActivate() {
    console.log('MainScene Activated');
  }
}
