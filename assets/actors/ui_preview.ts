import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class UIPreview extends ex.Actor {
    constructor(x: number, y: number) {
        super({
            x, y, z: 3, scale: ex.vec(0.30, 0.30)});
    }

    onInitialize() {
        this.graphics.use(Sprites.UIPreview()); // Use preloaded sprite
    }
}
