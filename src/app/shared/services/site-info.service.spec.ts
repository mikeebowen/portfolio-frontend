import { TestBed, inject, async } from '@angular/core/testing';

import { SiteInfoService } from './site-info.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PageInfo } from '../classes/page-info';

describe('SiteInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [SiteInfoService]
    });
  });

  it('should be created', inject([SiteInfoService], (service: SiteInfoService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a method getHomepageInfo that subscribes to the site info and updates the behavior subject',
    async(inject([HttpClient, HttpTestingController, SiteInfoService],
      (http: HttpClient, backend: HttpTestingController, siteInfoService: SiteInfoService) => {
        const siteInfoUrl = '/api/site-info';

        const fakeResponse = {
          'data': [
            {
              type: 'fileInfo',
              attributes: { pageType: 'homepage', pageContent: 'blah test', pageTitle: 'Home Pate' }
            },
            {
              type: 'fileInfo',
              attributes: { pageType: 'about', pageContent: 'blah test 2', pageTitle: 'About Page' }
            },
            {
              type: 'fileInfo',
              attributes: { pageType: 'contact', pageContent: 'blah test 3', pageTitle: 'Contact Tacos' }
            }
          ],
          'status': 200
        };
        const comparisonData = {
          homepage: new PageInfo({ pageType: 'homepage', pageContent: 'blah test', pageTitle: 'Home Pate' }),
          about: new PageInfo({ pageType: 'about', pageContent: 'blah test 2', pageTitle: 'About Page' }),
          contact: new PageInfo({ pageType: 'contact', pageContent: 'blah test 3', pageTitle: 'Contact Tacos' })
        };
        spyOn(siteInfoService.siteInfoSource, 'next');

        Promise.resolve(siteInfoService.getHomepageInfo())
          .then(() => {
            expect(siteInfoService.siteInfoSource.next).toHaveBeenCalledWith(comparisonData);
          });

        backend.expectOne({
          url: siteInfoUrl,
          method: 'GET'
        }).flush(fakeResponse);
      })));
});
