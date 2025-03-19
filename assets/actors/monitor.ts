import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class MonitorActor extends ex.Actor {
    constructor(x: number, y: number) {
        super({
            x, y, z: 3, scale: ex.vec(3.25, 3.25)});
    }

    onInitialize() {
        this.graphics.use(Sprites.Monitor()); // Use preloaded sprite
    }
}
