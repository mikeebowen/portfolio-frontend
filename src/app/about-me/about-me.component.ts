import { Component, OnInit } from '@angular/core';
import { SiteInfoService } from '../shared/services/site-info.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: [ './about-me.component.scss' ]
})
export class AboutMeComponent implements OnInit {

  constructor(private siteInfoService: SiteInfoService) {
  }

  ngOnInit() {
    this.siteInfoService.siteInfo$
      .subscribe(
        data => console.log('data: ', data)
      );
  }

}
