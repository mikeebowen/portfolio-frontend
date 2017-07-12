import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit, OnDestroy {
  makeFooterSticky: boolean;
  onHomePage: boolean;
  routerEvents: Subscription;

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.makeFooterSticky = document.body.scrollHeight > document.body.clientHeight;
    });
    // subscribe to the router events and after a route change, check to see
    // if the content is smaller than the window and if it is, set makeFooterSticky
    // true so that it stays at the bottom of the page
    this.routerEvents = this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.onHomePage = this.router.url === '/';
          this.makeFooterSticky = document.body.scrollHeight > document.body.clientHeight;
        });
      }
    });
  }

  ngOnDestroy() {
    this.routerEvents.unsubscribe();
  }
}
