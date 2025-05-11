import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class CookiePlateActor extends ex.Actor {
 public changedImage: boolean = false; 
   constructor(x: number, y: number, mult: number) {
        super({
            x, y, z: 3, scale: ex.vec(mult, mult), collider: ex.Shape.Box(32, 32) });
    }

    onInitialize() {
        if (!this.changedImage) {
        this.graphics.use(Sprites.CookiePlate()); // Use preloaded sprite
        }else{
        this.graphics.use(Sprites.CookiePlateEmpty()); // Use preloaded sprite
        }
    }
}

