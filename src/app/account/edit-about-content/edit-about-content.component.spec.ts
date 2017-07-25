import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAboutContentComponent } from './edit-about-content.component';

describe('EditAboutContentComponent', () => {
  let component: EditAboutContentComponent;
  let fixture: ComponentFixture<EditAboutContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAboutContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAboutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
