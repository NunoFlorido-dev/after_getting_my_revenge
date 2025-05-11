import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class MugActor extends ex.Actor {
    public changedImage: boolean = false; 
    constructor(x: number, y: number) {
        super({ x, y, scale: ex.vec(1.25, 1.25), collider: ex.Shape.Box(32, 32)  });
    }

    onInitialize() {
        if (!this.changedImage) {
            this.graphics.use(Sprites.Mug()); // Use preloaded sprite
        }else{
            this.graphics.use(Sprites.MugEmpty()); // Use preloaded sprite
        }
    }
}