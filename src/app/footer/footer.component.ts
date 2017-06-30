import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
})
export class FooterComponent implements OnInit {
  makeFooterSticky: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.makeFooterSticky = document.body.scrollHeight > document.body.clientHeight;
    });
    // subscribe to the router events and after a route change, check to see
    // if the content is smaller than the window and if it is, set makeFooterSticky
    // true so that it stays at the bottom of the page
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        setTimeout(() => {
          this.makeFooterSticky = document.body.scrollHeight > document.body.clientHeight;
        });
      }
    });
  }
}
