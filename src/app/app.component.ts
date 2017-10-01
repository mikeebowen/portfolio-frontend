import { Component, OnInit } from '@angular/core';
import { SiteInfoService } from './shared/services/site-info.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private siteInfoService: SiteInfoService) {
  }

  ngOnInit() {
    this.siteInfoService.getHomepageInfo();
  }
}
