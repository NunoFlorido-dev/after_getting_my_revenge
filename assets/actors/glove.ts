import * as ex from 'excalibur';
import { gloveImage } from '../resources'; // Import preloaded image

export class gloveActor extends ex.Actor {
    constructor(x: number, y: number) {
        super({
            x: x,
            y: y,
            z: 4,
            scale: ex.vec(2, 2),
        });
    }

    onInitialize() {
        // Set the actor's sprite using the preloaded image
        this.graphics.use(new ex.Sprite({ image: gloveImage }));
    }
}
