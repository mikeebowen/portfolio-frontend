import { Component, NgZone, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  // animations: [
  //   trigger('wobble', [
  //     transition('inactive => active', animate(1000, keyframes([
  //       style({transform: 'animation-name:', opacity: 0}),
  //       style({transform: 'animation-name', opacity: 1}),
  //     ]))),
  //   ])
  // ]
  animations: [
    trigger('wobble', [
      transition('inactive => active', animate(1000, keyframes([
        // style({'animation-name': '0%', opacity: 0}),
        // style({'animation-name': '100%', opacity: 1}),
        style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: .30}),
        style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .45}),
        style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .60}),
        style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75}),
        style({transform: 'none', offset: 1}),
      ]))),
    ])
  ]
})
export class HomeComponent implements OnInit {
  fadeInState = 'inactive';

  constructor(private zone: NgZone) { }

  ngOnInit() {
    // this.fadeInState = 'active';
    setTimeout(() => {
      this.fadeInState = 'active';
    });
  }

  triggerAnimation() {
    this.fadeInState = 'active';
  }

  reset() {
    this.zone.run(() => {
      this.fadeInState = 'inactive';
    });
  }

}
