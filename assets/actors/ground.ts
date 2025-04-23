import * as ex from 'excalibur';

export class GroundActor extends ex.Actor {
    moving = false;
    constructor(pos: ex.Vector) {
        super({
            pos,
            anchor: ex.vec(0, 0),
            height: 92,
            width: 800,
            color: ex.Color.fromHex('#4f4f4f'),
            z: 1 // position the ground above everything
        })
    } 
    
    start() {
        this.moving = true;
    }
    stop() {
        this.moving = false;
    }
}