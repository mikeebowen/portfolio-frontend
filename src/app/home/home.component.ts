import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { wobble, fadeInOut, slideInOut } from '../shared/animations/index';
import { SiteInfoService } from '../shared/services/site-info.service';
import { Subscription } from 'rxjs/Subscription';

//noinspection TsLint
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    wobble,
    fadeInOut,
    slideInOut
  ],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOut]': '' }
})
export class HomeComponent implements OnInit, OnDestroy {
  pageTitle: string;
  pageContent: string;
  wobbleState = 'inactive';
  siteInfoSubscription: Subscription;

  constructor(private zone: NgZone, private siteInfoService: SiteInfoService) {
  }

  ngOnInit() {
    setTimeout(() => this.wobbleState = 'active', 1225);

    this.siteInfoSubscription = this.siteInfoService.siteInfo$.subscribe(
      (siteInfo: any) => {
        if (siteInfo && siteInfo.homepage) {
          this.pageTitle = siteInfo.homepage.pageTitle ? siteInfo.homepage.pageTitle : 'no site title found';
          this.pageContent = siteInfo.homepage.pageContent ? siteInfo.homepage.pageContent : 'no homepage content found';
        }
      },
      (err: Error) => {
        console.error(err);
      }
    );
  }

  ngOnDestroy() {
    if (this.siteInfoSubscription) {
      this.siteInfoSubscription.unsubscribe();
    }
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
