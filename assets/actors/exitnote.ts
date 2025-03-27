import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class ExitNoteActor extends ex.Actor {
    constructor(x: number, y: number) {
        super({ x, y, z: 3, scale: ex.vec(1.5, 1.5), anchor: ex.vec(0.5, 0.5), collider: ex.Shape.Box(36, 36) });
    }

    onInitialize(engine: ex.Engine) {
        // Set the actor's sprite
        this.graphics.use(Sprites.ExitNote()); 

        // Add a collider so it can detect pointer events
        this.body.collisionType = ex.CollisionType.PreventCollision;
        this.collider.set(ex.Shape.Box(100, 50)); // Adjust size if needed
    }
}
