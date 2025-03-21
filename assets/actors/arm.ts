import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class ArmActor extends ex.Actor {
    constructor() {
        super({
          z: 6, scale: ex.vec(2, 2), anchor: ex.vec(0.5, 0.5)// Add a box collider
        });
    }

    onInitialize() {
        this.graphics.use(Sprites.Arm()); // Use preloaded sprite
    }
}
