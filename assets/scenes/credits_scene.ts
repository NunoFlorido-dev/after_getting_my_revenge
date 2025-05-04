import * as ex from 'excalibur';




export class CreditsScene extends ex.Scene {
    private isActive = false;


    onInitialize(engine: ex.Engine) {
        let centerScreenX = engine.drawWidth / 2;
        let centerScreenY = engine.drawHeight / 2;

      }

   onActivate(_context: ex.SceneActivationContext) {
           const pcUI = document.getElementById('credits');
           const canvas = this.engine.canvas;
           this.engine.canvas.style.cursor = 'default';

   
           if (pcUI) {
               pcUI.style.display = 'flex'; // Show the pcUI
             }
   
   
           this.isActive = true;
    
         console.log('Credtis Activated');
       console.log("Current scene:", this.engine.currentSceneName); // Logs the current scene
           }
           
   
        

    isSceneActive(){
      return this.isActive;
    }

    onDeactivate() {
        const pcUI = document.getElementById('credits');
        const canvas = this.engine.canvas;


        if (pcUI) {
            pcUI.style.display = 'none'; // Show the pcUI
            canvas.style.pointerEvents = 'auto'
          }
          
        this.engine.canvas.style.cursor = 'none';
        // Hide cursor when leaving this scene
        this.isActive = false;
        
    }
}