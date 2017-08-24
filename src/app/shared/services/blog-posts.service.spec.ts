import { TestBed, inject, async } from '@angular/core/testing';

import { BlogPostsService } from './blog-posts.service';
import { Post } from '../classes/post';
import { HttpClient, HttpClientModule, HttpRequest } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BlogPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
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

  it('should have a method saveBlogPost that posts the blog contentItem',
    async(inject([HttpClient, HttpTestingController, BlogPostsService],
      (http: HttpClient, backend: HttpTestingController, blogPostService: BlogPostsService) => {
        const blogPostsUrl = '/api/content-items';
        const testResponseData = {
          'data': {
            'type': 'Message',
            'attributes': {
              'message': 'Test Post successfully created'
            }
          },
          'status': 201
        };
        const testPost = new Post({ title: 'Test Post' });

        blogPostService.saveBlogPost(testPost).subscribe(
          (res: any) => expect(res.data.attributes.message).toEqual(testResponseData.data.attributes.message),
          (err: Error) => expect(err).toBeFalsy()
        );

        backend.expectOne((req: HttpRequest<any>) => {
          return req.url === blogPostsUrl &&
            req.method === 'POST';
        }, 'File Upload').flush(testResponseData);

      })));
});
