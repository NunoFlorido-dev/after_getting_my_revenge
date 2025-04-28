import * as ex from 'excalibur';
import { Sprites } from '../graphics';

export class FolderActor extends ex.Actor {
    constructor(x: number, y: number) {
        super({ x, y, z: 3, scale: ex.vec(1.5, 1.5), anchor: ex.vec(0.5, 0.5), collider: ex.Shape.Box(36, 36) });
    }

    onInitialize(engine: ex.Engine) {
        // Set the actor's sprite
        this.graphics.use(Sprites.FolderClosed()); 

}
}
