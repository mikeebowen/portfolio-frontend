import { Component, OnInit } from '@angular/core';
import { SiteInfoService } from '../shared/services/site-info.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  pageContent: string;

  constructor(private siteInfoService: SiteInfoService) {
  }

  ngOnInit() {
    this.siteInfoService.siteInfo$
      .subscribe(
        siteInfo => {
          if (siteInfo && siteInfo.about) {
            this.pageContent = siteInfo.about.pageContent ? siteInfo.about.pageContent : 'no about page content found';
          }
        },
        (err: Error) => console.error(err));
  }

}
