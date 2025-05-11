import * as ex from 'excalibur';
import { Engine } from 'excalibur';

// Load images
export const Resources = {
    Mouse: new ex.ImageSource('/images/rato.png'),
    Glove: new ex.ImageSource('/images/luva_apontar.png'),
    GloveActive: new ex.ImageSource('/images/luva_no_rato.png'), 
    Monitor: new ex.ImageSource('/images/monitor.png'),
    MonitorOut: new ex.ImageSource('/images/monitor.png'),
    MonitorIn: new ex.ImageSource('/images/filtro_monitor.png'),
    UIPreview: new ex.ImageSource('/images/ui_preview.jpeg'),
    Arm: new ex.ImageSource('./images/braco.png'),
    Keyboard: new ex.ImageSource('/images/teclado.png'),
    Desk: new ex.ImageSource('/images/mesa.png'),
    ExitNote: new ex.ImageSource('/images/nota_exit.png'),
    Mug: new ex.ImageSource('/images/caneca_cheio.png'),
    MugEmpty: new ex.ImageSource('/images/caneca_vazia.png'),
    Wererabbit: new ex.ImageSource('/images/wererabbit.png'),
    WererabbitJump: new ex.ImageSource('/images/wererabbit.png'),
    WererabbitSlide: new ex.ImageSource('/images/wererabbit.png'),
    Vegetable: new ex.ImageSource('/images/vegetable.png'),
    FolderOpen: new ex.ImageSource('/images/pasta_creditos.png'),
    FolderClosed: new ex.ImageSource('/images/pasta_fechada.png'),
    CookiePlate: new ex.ImageSource('/images/prato_bolachas.png'),
    CookiePlateEmpty: new ex.ImageSource('/images/prato_migalhas.png'),
  };
  

  export class MyLoader extends ex.DefaultLoader {
    override onUpdate(engine: Engine, elapsedMilliseconds: number): void {
      // Perform something every tick, for example collect time elapsed or check 
      // what file names have been loaded for drawing!
    }
    override onDraw(ctx: CanvasRenderingContext2D) {
      // Returns the progress of the loader as a number between [0, 1] inclusive.
      console.log(this.progress);
    }
    override async onUserAction(): Promise<void> {
      // Return a promise that resolves when the user interacts with the loading screen in some way,
      // usually a click.
      //
      // It's important to implement this in order to unlock the audio context in the browser.
      // Browsers automatically prevent audio from playing until the user performs an action.
       
    }
    override async onBeforeLoad(): Promise<void> {
      // Overrideable lifecycle method, called directly before loading starts
      // Useful if you need to do anything to the screen/viewport
    }
    override async onAfterLoad(): Promise<void> {
      // Overrideable lifecycle method, called after loading has completed
      // Useful if you need to do anything to the screen/viewport
    }
  }


// Preload assets
export const loader = new MyLoader();
for (const key in Resources) {
  loader.addResource((Resources as any)[key]); // Add each resource dynamically
}