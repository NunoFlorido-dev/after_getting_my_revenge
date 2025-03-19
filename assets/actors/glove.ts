import * as ex from 'excalibur';
import { Sprites } from '../graphics';
import { MouseActor } from './mouse';

export class GloveActor extends ex.Actor {
    private isHoveringMouse: boolean = false; // Track if glove is over the mouse
    private mouseRef!: ex.Actor; // Reference to the MouseActor

    constructor() {
        super({
            z: 6, scale: ex.vec(2, 2), anchor: ex.vec(0.5, 0.5), collider: ex.Shape.Box(32, 32) // Add a box collider
        });
    }

    onInitialize(engine: ex.Engine) {
        // Set the actor's sprite using the preloaded image
        this.graphics.use(Sprites.Glove()); // Use preloaded sprite

          // Find the mouse actor in the scene
          this.mouseRef = engine.currentScene.actors.find(actor => actor instanceof ex.Actor && actor instanceof MouseActor) as ex.Actor;

        // Listen for mouse movement
        engine.input.pointers.primary.on('move', (event) => {
            this.pos = event.worldPos; // Update position to match cursor
        });
    }

    override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof MouseActor) {
            this.graphics.use(Sprites.GloveActive()); // Use preloaded sprite
        }else{
            this.graphics.use(Sprites.Glove()); 
        }
    }

    override onCollisionEnd(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof MouseActor) {
            this.graphics.use(Sprites.Glove ()); // Use preloaded sprite
    }

}
}
