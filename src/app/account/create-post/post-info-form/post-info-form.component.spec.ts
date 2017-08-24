import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostInfoFormComponent } from './post-info-form.component';
import { FormsModule } from '@angular/forms';
import { BlogPostsService } from '../../../shared/services/blog-posts.service';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('PostInfoFormComponent', () => {
  let component: PostInfoFormComponent;
  let fixture: ComponentFixture<PostInfoFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostInfoFormComponent ],
      providers: [BlogPostsService, HttpClient, HttpHandler],
      imports: [FormsModule, HttpModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
