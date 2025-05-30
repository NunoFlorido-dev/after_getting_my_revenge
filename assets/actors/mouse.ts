import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class MouseActor extends ex.Actor {
    constructor(x: number, y: number) {
        super({ x, y, scale: ex.vec(2, 2), collider: ex.Shape.Box(32, 32)  });
    }

    onInitialize() {
        this.graphics.use(Sprites.Mouse()); // Use preloaded sprite
    }
}