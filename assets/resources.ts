import * as ex from 'excalibur';

// Load images
export const Resources = {
    Mouse: new ex.ImageSource('./public/images/rato.png'),
    Glove: new ex.ImageSource('./public/images/luva_apontar.png'),
    GloveActive: new ex.ImageSource('./public/images/luva_no_rato.png'), 
    Monitor: new ex.ImageSource('./public/images/monitor.png'),
    MonitorOut: new ex.ImageSource('./public/images/monitor.png'),
    MonitorIn: new ex.ImageSource('./public/images/filtro_monitor.png'),
    UIPreview: new ex.ImageSource('./public/images/ui_preview.jpeg'),
    Arm: new ex.ImageSource('./public/images/braco.png'),
    Keyboard: new ex.ImageSource('./public/images/teclado.png'),
    Desk: new ex.ImageSource('./public/images/mesa.png'),
    ExitNote: new ex.ImageSource('./public/images/nota_exit.png'),
    Mug: new ex.ImageSource('./public/images/caneca_cheio.png'),
  };
  


// Preload assets
export const loader = new ex.Loader();
for (const key in Resources) {
  loader.addResource((Resources as any)[key]); // Add each resource dynamically
}