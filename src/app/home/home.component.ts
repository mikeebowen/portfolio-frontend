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
  animations: [
    trigger('wobble', [
      transition('inactive => active', animate(1000, keyframes([
        style({transform: 'translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)', offset: .30}),
        style({transform: 'translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)', offset: .45}),
        style({transform: 'translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)', offset: .60}),
        style({transform: 'translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)', offset: .75}),
        style({transform: 'none', offset: 1}),
      ])))
    ]),
    trigger('fadeInOut', [
      state('out', style({transform: 'animation-name:', opacity: 0})),
      transition('out => in', animate(500, keyframes([
        style({transform: 'animation-name:', opacity: 0}),
        style({transform: 'animation-name', opacity: 1}),
      ])))
    ])
  ]
})
export class HomeComponent implements OnInit {
  wobbleState = 'inactive';
  fadeInOutState1 = 'out';
  fadeInOutState2 = 'out';
  fadeInOutState3 = 'out';
  fadeInOutState4 = 'out';
  fadeInOutState5 = 'out';
  fadeInOutState6 = 'out';
  fadeInOutState7 = 'out';
  fadeInOutState8 = 'out';
  fadeInOutState9 = 'out';
  fadeInOutState10 = 'out';
  fadeInOutState11 = 'out';
  fadeInOutState12 = 'out';
  fadeInOutState13 = 'out';
  fadeInOutState14 = 'out';
  fadeInOutState15 = 'out';
  fadeInOutState16 = 'out';
  fadeInOutState17 = 'out';
  fadeInOutState18 = 'out';
  fadeInOutState19 = 'out';
  fadeInOutState20 = 'out';

  constructor(private zone: NgZone) { }

  ngOnInit() {

    setTimeout(() => this.fadeInOutState1 = 'in', 0);
    setTimeout(() => this.fadeInOutState2 = 'in', 50);
    setTimeout(() => this.fadeInOutState3 = 'in', 100);
    setTimeout(() => this.fadeInOutState4 = 'in', 150);
    setTimeout(() => this.fadeInOutState5 = 'in', 200);
    setTimeout(() => this.fadeInOutState6 = 'in', 250);
    setTimeout(() => this.fadeInOutState7 = 'in', 300);
    setTimeout(() => this.fadeInOutState8 = 'in', 350);
    setTimeout(() => this.fadeInOutState9 = 'in', 400);
    setTimeout(() => this.fadeInOutState10 = 'in', 450);
    setTimeout(() => this.fadeInOutState11 = 'in', 500);
    setTimeout(() => this.fadeInOutState12 = 'in', 550);
    setTimeout(() => this.fadeInOutState13 = 'in', 600);
    setTimeout(() => this.fadeInOutState14 = 'in', 650);
    setTimeout(() => this.fadeInOutState15 = 'in', 700);
    setTimeout(() => this.fadeInOutState16 = 'in', 750);
    setTimeout(() => this.fadeInOutState17 = 'in', 800);
    setTimeout(() => this.fadeInOutState18 = 'in', 850);
    setTimeout(() => this.fadeInOutState19 = 'in', 900);
    setTimeout(() => this.fadeInOutState20 = 'in', 1200);
    setTimeout(() => this.wobbleState = 'active', 1300);
  }

  triggerAnimation() {
    this.wobbleState = 'active';
  }

  resetWobble() {
    this.zone.run(() => {
      this.wobbleState = 'inactive';
    });
  }

}
