import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFormComponent } from './title-form.component';

describe('TitleFormComponent', () => {
  let component: TitleFormComponent;
  let fixture: ComponentFixture<TitleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
