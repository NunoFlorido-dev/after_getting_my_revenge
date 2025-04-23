import * as ex from 'excalibur';
import { WererabbitActor } from '../actors/wererabbit';
import { GroundActor } from '../actors/ground';
import { PipeActor } from '../actors/pipe';

export class Minigame extends ex.Scene {
  private isActive = false;

  onInitialize(engine: ex.Engine) {
    let centerScreenX = engine.drawWidth / 2;
    let centerScreenY = engine.drawHeight / 2;
    
    const wererabbit = new WererabbitActor(centerScreenX - 150, centerScreenY + 75);
    const ground = new GroundActor(ex.vec(0, engine.drawHeight - 92));

    this.add(ground);
    this.add(wererabbit);


  }

  onPostUpdate(engine: ex.Engine, delta: number): void {
  }

  private spawnPipe(engine: ex.Engine) {
  }

  isSceneActive() {
    return this.isActive;
  }

  onDeactivate() {
    this.isActive = false;
  }
}
