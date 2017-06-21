import {
  trigger,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

export const wobble = trigger('wobble', [
  transition('inactive => active', animate(1000, keyframes([
    style({ transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: .30 }),
    style({ transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .45 }),
    style({ transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .60 }),
    style({ transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75 }),
    style({ transform: 'none', offset: 1 }),
  ])))
]);
