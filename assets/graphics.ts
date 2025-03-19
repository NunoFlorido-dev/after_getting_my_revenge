import * as ex from 'excalibur';
import { Resources } from './resources';

// Preload sprite objects
export const Sprites = {
  Mouse: () => new ex.Sprite({ image: Resources.Mouse }),
  Glove: () => new ex.Sprite({ image: Resources.Glove }),
  Monitor: () => new ex.Sprite({ image: Resources.Monitor }),
};