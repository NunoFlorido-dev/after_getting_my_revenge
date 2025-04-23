import * as ex from 'excalibur';
import { Sprites } from '../graphics';

const GROUND_LEVEL = 275;

export class WererabbitActor extends ex.Actor {
  private isJump = false;
  private isSlide = false;
  private jumpForce = -75;
  private gravity = new ex.Vector(0, 75); // Gravity force per second
  private jumpCount = 0;

  constructor(x: number, y: number) {
    // Set the scale but not width and height
    super({
        x,
        y,
        color: ex.Color.Green,
        anchor: ex.vec(0.5, 0.5),
        collider: ex.Shape.Box(32, 100),
    });
  }

  onInitialize(engine: ex.Engine): void {
    this.collider.useBoxCollider(32, 100);
  }

  onPostUpdate(engine: ex.Engine, delta: number): void {
    ex.Debug.drawBounds(this.collider.bounds, { color: ex.Color.Yellow });
  }
}
