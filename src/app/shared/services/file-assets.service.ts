import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TinymceImage } from '../classes/tinymce-image';
import 'rxjs/add/operator/map';

@Injectable()
export class FileAssetsService {
  filesPath = '/api/files';

  tinymceImagesSource: BehaviorSubject<TinymceImage[]> = new BehaviorSubject([]);
  tinymceImages$: Observable<TinymceImage[]> = this.tinymceImagesSource.asObservable();

  constructor(private http: HttpClient) {
  }

  getImagesList(): void {
    this.http.get(this.filesPath).subscribe(
      (files: any) => {
        const images = [];
        files.data.forEach((elem) => {
          if (elem.attributes.name.match(/.(jpg|jpeg|png|gif)$/i)) {
            images.push(new TinymceImage({ title: elem.attributes.name, value: elem.attributes.location }));
          }
        });
        this.tinymceImagesSource.next(images);
      },
      err => {
        console.error('error getting files list : ', err);
      });
  }


  /**
   * @method uploadFile
   * post base64String and file name
   * @param {any} base64String
   * @param {any} fileName
   * @returns {Observable<Response>}
   */

  uploadFile(base64String: any, fileName: any) {
    const body = { base64String, fileName };

    return this.http.post(this.filesPath, body)
      .map((response: any) => {
        return response.data.attributes.path;
      });
  }
}
