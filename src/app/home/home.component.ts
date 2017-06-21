import { Component, NgZone, OnInit } from '@angular/core';
import { wobble, fadeInOut, slideInOut } from '../shared/animations/index';

//noinspection TsLint
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: [ './home.component.less' ],
  animations: [
    wobble,
    fadeInOut,
    slideInOut
  ],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOut]': '' }
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

    setTimeout(() => this.fadeInOutState1 = 'in', 500);
    setTimeout(() => this.fadeInOutState2 = 'in', 525);
    setTimeout(() => this.fadeInOutState3 = 'in', 550);
    setTimeout(() => this.fadeInOutState4 = 'in', 575);
    setTimeout(() => this.fadeInOutState5 = 'in', 600);
    setTimeout(() => this.fadeInOutState6 = 'in', 625);
    setTimeout(() => this.fadeInOutState7 = 'in', 650);
    setTimeout(() => this.fadeInOutState8 = 'in', 675);
    setTimeout(() => this.fadeInOutState9 = 'in', 700);
    setTimeout(() => this.fadeInOutState10 = 'in', 725);
    setTimeout(() => this.fadeInOutState11 = 'in', 750);
    setTimeout(() => this.fadeInOutState12 = 'in', 775);
    setTimeout(() => this.fadeInOutState13 = 'in', 800);
    setTimeout(() => this.fadeInOutState14 = 'in', 825);
    setTimeout(() => this.fadeInOutState15 = 'in', 850);
    setTimeout(() => this.fadeInOutState16 = 'in', 875);
    setTimeout(() => this.fadeInOutState17 = 'in', 900);
    setTimeout(() => this.fadeInOutState18 = 'in', 925);
    setTimeout(() => this.fadeInOutState19 = 'in', 1025);
    setTimeout(() => this.fadeInOutState20 = 'in', 1125);
    setTimeout(() => this.wobbleState = 'active', 1225);
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
