import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { PageInfo } from '../classes/page-info';

@Injectable()
export class SiteInfoService {
  siteInfoUrl = '/api/site-info';
  siteInfoSource: BehaviorSubject<any> = new BehaviorSubject(null);
  siteInfo$: Observable<any> = this.siteInfoSource.asObservable();

  constructor(private httpClient: HttpClient) { }

  getHomepageInfo(): void {

    this.httpClient.get(this.siteInfoUrl)
      .subscribe(
        (res: any) => {
          const siteInfo: any = {};

          res.data.forEach((pageInfo: any) => {
            siteInfo[pageInfo.attributes.pageType] = new PageInfo(pageInfo.attributes);
          });
          this.siteInfoSource.next(siteInfo);

        },
        (err: Error) => {
          console.error(err);
        }
      );
  }
}
