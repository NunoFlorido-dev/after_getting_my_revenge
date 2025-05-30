import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class MonitorActor extends ex.Actor {
    constructor(x: number, y: number, mult: number) {
        super({
            x, y, z: 3, scale: ex.vec(mult, mult)});
    }

    onInitialize() {
        this.graphics.use(Sprites.MonitorOut()); // Use preloaded sprite
    }
}
