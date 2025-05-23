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
  ExitNote: () => new ex.Sprite({ image: Resources.ExitNote }),
  Mug: () => new ex.Sprite({ image: Resources.Mug}),
  MugEmpty: () => new ex.Sprite({ image: Resources.MugEmpty }),
  Wererabbit: () => new ex.Sprite({ image: Resources.Wererabbit }),
  WererabbitJump: () => new ex.Sprite({ image: Resources.WererabbitJump }),
  WererabbitSlide: () => new ex.Sprite({ image: Resources.WererabbitSlide }),
  Vegetable: () => new ex.Sprite({ image: Resources.Vegetable }),
  FolderOpen: () => new ex.Sprite({ image: Resources.FolderOpen }),
  FolderClosed: () => new ex.Sprite({ image: Resources.FolderClosed }),
  CookiePlate: () => new ex.Sprite({ image: Resources.CookiePlate }),
  CookiePlateEmpty: () => new ex.Sprite({ image: Resources.CookiePlateEmpty }),
};