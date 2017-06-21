import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('out', style({ transform: 'animation-name:', opacity: 0 })),
  transition('out => in', animate(500, keyframes([
    style({ transform: 'animation-name:', opacity: 0 }),
    style({ transform: 'animation-name', opacity: 1 }),
  ])))
]);
