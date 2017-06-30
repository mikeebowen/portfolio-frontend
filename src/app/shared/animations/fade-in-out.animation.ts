import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
  state('out', style({ opacity: 0 })),
  transition('out => in', animate(500, keyframes([
    style({ opacity: 0 }),
    style({ opacity: 1 }),
  ])))
]);
