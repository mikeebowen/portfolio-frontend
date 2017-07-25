import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAccountInfoComponent } from './edit-account-info.component';

describe('EditAccountInfoComponent', () => {
  let component: EditAccountInfoComponent;
  let fixture: ComponentFixture<EditAccountInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAccountInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAccountInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
