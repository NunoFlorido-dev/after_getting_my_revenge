import * as ex from 'excalibur';
import { Sprites } from '../graphics';
import { MouseActor } from './mouse';
import { FolderActor } from './folder';
import { CookiePlateActor } from './cookies';
import { MugActor } from './mug';
import { Howl } from 'howler';

export class GloveActor extends ex.Actor {
    private isHoveringMouse: boolean = false; // Track if glove is over the mouse
    private isHoveringFolder: boolean = false; // Track if glove is over the folder
    private isHoveringCookiePlate: boolean = false; // Track if glove is over the cookie plate
    private isHoveringMug: boolean = false;
    private mouseRef!: ex.Actor; // Reference to the MouseActor

    constructor() {
        super({
            z: 6, scale: ex.vec(2.25, 2.25), anchor: ex.vec(0.5, 0.5), collider: ex.Shape.Box(36, 36) // Add a box collider
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


           // Listen for mouse clicks
           engine.input.pointers.primary.on('down', () => {
            if (this.isHoveringMouse) {
                let sound = new Howl({
                    src: ['/sounds/mouse-click.mp3']
                  });
                void sound.play();
                engine.goToScene('pcscene'); // Transition to the new scene
            }

            if(this.isHoveringFolder){
                engine.goToScene('credits'); // Transition to the new scene
            }
            if(this.isHoveringCookiePlate){
                const cookiePlate = engine.currentScene.actors.find(actor => actor instanceof CookiePlateActor) as CookiePlateActor;
                if (cookiePlate) {
                    let sound = new Howl({
                        src: ['/sounds/bite-potato-chips.mp3']
                      });
                     void  sound.play();
                    cookiePlate.graphics.use(Sprites.CookiePlateEmpty()); // Use preloaded sprite
                    cookiePlate.changedImage = true; // Set the flag to true
                }
            }
            if(this.isHoveringMug){
                const mug = engine.currentScene.actors.find(actor => actor instanceof MugActor) as MugActor;
                if (mug) {
                    let sound = new Howl({
                        src: ['/sounds/slurping-sound.mp3']
                      });
                     void sound.play();
                    mug.graphics.use(Sprites.MugEmpty()); // Use preloaded sprite
                    mug.changedImage = true; // Set the flag to true
                }
            }
        });
    }

    override onCollisionStart(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof MouseActor) {
            this.graphics.use(Sprites.GloveActive()); // Use preloaded sprite
            this.isHoveringMouse = true;
        }else if(other.owner instanceof FolderActor){
            this.graphics.use(Sprites.GloveActive()); // Use preloaded sprite
            this.isHoveringFolder = true;
        }else if(other.owner instanceof CookiePlateActor){
            this.graphics.use(Sprites.GloveActive()); // Use preloaded sprite
            this.isHoveringCookiePlate = true;
        }else if(other.owner instanceof MugActor){
            this.graphics.use(Sprites.GloveActive()); // Use preloaded sprite
            this.isHoveringMug = true;
        }else{
            this.graphics.use(Sprites.Glove()); 
            this.isHoveringMouse = false
            this.isHoveringFolder = false;
        }
    }

    override onCollisionEnd(_self: ex.Collider, other: ex.Collider): void {
        if (other.owner instanceof MouseActor) {
            this.graphics.use(Sprites.Glove()); // Use preloaded sprite
            this.isHoveringMouse = false;
    }else if (other.owner instanceof FolderActor){
        this.graphics.use(Sprites.Glove()); // Use preloaded sprite
        this.isHoveringFolder = false;
}else if (other.owner instanceof CookiePlateActor){
    this.graphics.use(Sprites.Glove()); // Use preloaded sprite
    this.isHoveringCookiePlate = false;
}else if (other.owner instanceof MugActor){
    this.graphics.use(Sprites.Glove()); // Use preloaded sprite
    this.isHoveringMug = false;
}
}
}
