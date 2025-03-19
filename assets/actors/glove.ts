import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class GloveActor extends ex.Actor {
    constructor() {
        super({
            z: 6, scale: ex.vec(2, 2), anchor: ex.vec(0.5, 0.5) // Optional: Centers the glove on the cursor
        });
    }

    onInitialize(engine: ex.Engine) {
        // Set the actor's sprite using the preloaded image
        this.graphics.use(Sprites.Glove()); // Use preloaded sprite

        // Listen for mouse movement
        engine.input.pointers.primary.on('move', (event) => {
            this.pos = event.worldPos; // Update position to match cursor
        });
    }
}
