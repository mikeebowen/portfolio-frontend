import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FileAssetsService } from '../shared/services/file-assets.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AccountComponent', () => {
  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;
  const fileAssetServiceStub = {
    getImagesList: () => {
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      // imports: [HttpModule],
      declarations: [AccountComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{ provide: FileAssetsService, useValue: fileAssetServiceStub }, HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
