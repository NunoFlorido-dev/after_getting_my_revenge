import * as ex from 'excalibur';

// Load image
export const mouseImage = new ex.ImageSource('../public/images/rato.png');
export const gloveImage = new ex.ImageSource('../public/images/luva_no_rato.png');
export const monitorImage = new ex.ImageSource('../public/images/monitor.png');



// Preload assets
export const loader = new ex.Loader([mouseImage, gloveImage, monitorImage]);