import { TestBed, inject } from '@angular/core/testing';
import {
  XHRBackend,
  Response,
  ResponseOptions,
  RequestMethod
} from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { FileAssetsService } from './file-assets.service';
import { HttpClientModule } from '@angular/common/http';

describe('FileAssetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FileAssetsService, MockBackend, { provide: XHRBackend, useClass: MockBackend }]
    });
  });

  it('should be created', inject([FileAssetsService], (service: FileAssetsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a method uploadFile that calls the http services with a base64 string',
    inject([XHRBackend, FileAssetsService], (mockBackend, fileAssetsService) => {
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
                    'path': '/api/files/testName.png'
                  }
                },
                'status': 201
              }
            })));
        });

      fileAssetsService.uploadFile('fakeBase64String', 'filename').subscribe(
        (res: Response) => expect(res).toEqual('/api/files/testName.png'),
        (err: Error) => expect(err).toBeFalsy()
      );
    }));
});
