import * as ex from 'excalibur';
import { monitorImage } from '../resources'; // Import preloaded image

export class monitorActor extends ex.Actor {
    constructor(x: number, y: number) {
        super({
            x: x,
            y: y,
            z: 3,
            scale: ex.vec(3.25, 3.25),
        });
    }

    onInitialize() {
        // Set the actor's sprite using the preloaded image
        this.graphics.use(new ex.Sprite({ image: monitorImage }));
    }
}
