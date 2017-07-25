import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSiteInfoComponent } from './edit-site-info.component';

describe('EditSiteInfoComponent', () => {
  let component: EditSiteInfoComponent;
  let fixture: ComponentFixture<EditSiteInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSiteInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSiteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
