import * as ex from 'excalibur';
import { Resources } from './resources';

// Preload sprite objects
export const Sprites = {
  Mouse: () => new ex.Sprite({ image: Resources.Mouse }),
  Glove: () => new ex.Sprite({ image: Resources.Glove }),
  GloveActive: () => new ex.Sprite({ image: Resources.GloveActive}),
  Monitor: () => new ex.Sprite({ image: Resources.Monitor }),
  MonitorOut: () => new ex.Sprite({ image: Resources.MonitorOut }),
  MonitorIn: () => new ex.Sprite({ image: Resources.MonitorIn }),
  UIPreview: () => new ex.Sprite({ image: Resources.UIPreview }),
  Arm: () => new ex.Sprite({ image: Resources.Arm }),
  Keyboard: () => new ex.Sprite({ image: Resources.Keyboard }),
  Desk: () => new ex.Sprite({ image: Resources.Desk}),
};