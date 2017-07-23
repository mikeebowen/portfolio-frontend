import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFormComponent } from './title-form.component';
import { FormsModule } from '@angular/forms';
import { BlogPostsService } from '../../shared/services/blog-posts.service';
import { HttpModule } from '@angular/http';

describe('TitleFormComponent', () => {
  let component: TitleFormComponent;
  let fixture: ComponentFixture<TitleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleFormComponent ],
      providers: [BlogPostsService],
      imports: [FormsModule, HttpModule]
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
