import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class KeyboardActor extends ex.Actor {
    constructor(x: number, y: number) {
        super({
            x, y, z: 3, scale: ex.vec(2, 2)});
    }

    onInitialize() {
        this.graphics.use(Sprites.Keyboard()); // Use preloaded sprite
    }
}
