import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { BlogPostsService } from './blog-posts.service';
import { Post } from '../classes/post';

describe('BlogPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BlogPostsService]
    });
  });

  it('should have a method updateBlogPostToSave that updates the blogPostToSave BehaviorSubject',
    inject([BlogPostsService], (blogPostService) => {
      blogPostService.blogPostToSaveSource.next = jasmine.createSpy('blogPostToSaveSource.next');
      const testBlogPost = new Post({ title: 'Hello World' });
      blogPostService.updateBlogPostToSave(testBlogPost);
      expect(blogPostService.blogPostToSaveSource.next).toHaveBeenCalledWith(testBlogPost);
    }));
});
