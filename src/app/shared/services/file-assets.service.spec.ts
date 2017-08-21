import { TestBed, inject, async } from '@angular/core/testing';
import { Response } from '@angular/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { FileAssetsService } from './file-assets.service';
import { HttpClient, HttpClientModule, HttpRequest } from '@angular/common/http';
import { TinymceImage } from 'app/shared/classes/tinymce-image';

describe('FileAssetsService', () => {
  const filesPath = '/api/files';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [FileAssetsService]
    });
  });

  it('should have a method uploadFile that calls the http services with a base64 string and updates the tinymceImages array',
    async(inject([HttpClient, HttpTestingController, FileAssetsService],
      (http: HttpClient, backend: HttpTestingController, fileAssetsService: FileAssetsService) => {
      const testResponseData = {
        'data': {
          'type': 'fileInfo',
          'attributes': {
            'name': 'testName.png',
            'message': 'file successfully uploaded',
            'path': '/api/files/testName.png'
          }
        },
        'status': 201
      };
      const comparisonTinymceImage = new TinymceImage({
        value: testResponseData.data.attributes.path,
        title: testResponseData.data.attributes.name
      });
      spyOn(fileAssetsService.tinymceImagesSource, 'next');


      fileAssetsService.uploadFile('fakeBase64String', 'filename').subscribe(
        (res: Response) => expect(res).toEqual('/api/files/testName.png'),
        (err: Error) => expect(err).toBeFalsy()
      );

      backend.expectOne((req: HttpRequest<any>) => {
        return req.url === filesPath &&
          req.method === 'POST';
      }, 'File Upload').flush(testResponseData);

      expect(fileAssetsService.tinymceImagesSource.next).toHaveBeenCalledWith([comparisonTinymceImage]);
    })));

  it('should have a method getImagesList that subscribes to the file list',
    async(inject([HttpClient, HttpTestingController, FileAssetsService],
      (http: HttpClient, backend: HttpTestingController, fileAssetsService: FileAssetsService) => {
        const fakeResponse = {
          'data': [
            {
              type: 'fileInfo',
              attributes: {
                name: 'notReal.jpg',
                location: '/api/files/notReal.jpg'
              }
            },
            {
              type: 'fileInfo',
              attributes: {
                name: 'alsoNotReal.png',
                location: '/api/files/alsoNotReal.png'
              }
            },
            {
              type: 'fileInfo',
              attributes: {
                name: 'thisIsntRealEither.gif',
                location: '/api/files/thisIsntRealEither.gif'
              }
            }
          ],
          'status': 200
        };
        const comparisonData = [
          new TinymceImage({ title: 'notReal.jpg', value: '/api/files/notReal.jpg' }),
          new TinymceImage({ title: 'alsoNotReal.png', value: '/api/files/alsoNotReal.png' }),
          new TinymceImage({ title: 'thisIsntRealEither.gif', value: '/api/files/thisIsntRealEither.gif' })
        ];
        spyOn(fileAssetsService.tinymceImagesSource, 'next');

        Promise.resolve(fileAssetsService.getImagesList())
          .then(() => {
            expect(fileAssetsService.tinymceImagesSource.next).toHaveBeenCalledWith(comparisonData);
            expect(fileAssetsService.tinymceImages).toEqual(comparisonData);

          });

        backend.expectOne({
          url: filesPath,
          method: 'GET'
        }).flush(fakeResponse);
      })
    )
  );
});
