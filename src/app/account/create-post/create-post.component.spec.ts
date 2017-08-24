import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePostComponent } from './create-post.component';
import { FormsModule } from '@angular/forms';
import { BlogPostsService } from '../../shared/services/blog-posts.service';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('CreatePostComponent', () => {
  let component: CreatePostComponent;
  let fixture: ComponentFixture<CreatePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePostComponent ],
      providers: [BlogPostsService, HttpClient, HttpHandler],
      imports: [FormsModule, HttpModule],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a method changeTab that sets the tab to the string argument', () => {
    expect(component.currentTab).toEqual('Post Information');
    component.changeTab('Evil Corp');
    expect(component.currentTab).toEqual('Evil Corp');
  });
});
