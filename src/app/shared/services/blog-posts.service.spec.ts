import { TestBed, inject, fakeAsync } from '@angular/core/testing';
import {
  HttpModule,
  XHRBackend,
  Response,
  ResponseOptions,
  RequestMethod
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { BlogPostsService } from './blog-posts.service';
import { Post } from '../classes/post';

describe('BlogPostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [BlogPostsService, MockBackend, { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should have a method uploadFile that calls the http services with a base64 string',
    fakeAsync(inject([XHRBackend, BlogPostsService], (mockBackend, blogPostService) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          const body = JSON.parse(connection.request.getBody());
          // method initiates http post request
          expect(connection.request.method).toBe(RequestMethod.Post);
          expect(body.base64String).toEqual('fakeBase64String');
          expect(body.fileName).toEqual('filename');

          connection.mockRespond(new Response(
            new ResponseOptions({
              body: {
                'data': {
                  'type': 'fileInfo',
                  'attributes': {
                    'name': 'testName.png',
                    'message': 'file successfully uploaded',
                    'path': '/api/file/testName.png'
                  }
                },
                'status': 201
              }
            })));
        });

      blogPostService.uploadFile('fakeBase64String', 'filename').subscribe(
        (res: Response) => expect(res).toEqual('/api/file/testName.png'),
        (err: Error) => expect(err).toBeFalsy()
      );
    })));

  it('should have a method updateBlogPostToSave that updates the blogPostToSave BehaviorSubject',
    inject([BlogPostsService], (blogPostService) => {
    blogPostService.blogPostToSaveSource.next = jasmine.createSpy('blogPostToSaveSource.next');
    const testBlogPost = new Post({ title: 'Hello World' });
    blogPostService.updateBlogPostToSave(testBlogPost);
    expect(blogPostService.blogPostToSaveSource.next).toHaveBeenCalledWith(testBlogPost);
  }));
});
