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
              body: { message: 'file saved' }
            })));
        });

      blogPostService.uploadFile('fakeBase64String', 'filename').subscribe(
        (res: Response) => expect(res).toEqual({ message: 'file saved' }),
        (err: Error) => expect(err).toBeFalsy()
      );
    })));
});
