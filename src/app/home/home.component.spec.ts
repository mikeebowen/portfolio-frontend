import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeComponent } from './home.component';
import { SiteInfoService } from '../shared/services/site-info.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Observable } from 'rxjs/Observable';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  const testHomePageInfo = {
    homepage: {
      siteTitle: 'tacocat',
      pageContent: 'hola mundo'
    }
  };

  const siteInfoServiceStub = {
    siteInfo$: Observable.of(testHomePageInfo)
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule],
      declarations: [HomeComponent],
      providers: [{ provide: SiteInfoService, useValue: siteInfoServiceStub }, HttpClient, HttpHandler],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should set the siteTitle and homepage content when provided from the database', () => {
    expect(component.siteTitle).toEqual(testHomePageInfo.homepage.siteTitle);
    expect(component.pageContent).toEqual(testHomePageInfo.homepage.pageContent);
  });

});
