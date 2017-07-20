import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import posts from '../../../assets/posts';
import { Post, PostType } from '../classes/post';

const postFileURL = '/api/files';

@Injectable()
export class BlogPostsService {

  private postsSource: BehaviorSubject<Post[]> = new BehaviorSubject([]);
  posts$ = this.postsSource.asObservable();

  private pageCountSource: BehaviorSubject<number> = new BehaviorSubject(null);
  pageCount$ = this.pageCountSource.asObservable();

  constructor(private http: Http) {
  }

  /**
   * get posts with optional starting index and limit
   * @method getPosts
   * @param {string} postType - the type of post to return
   * @param {number} startIndex - the index to start the return from
   * @param {number} stopBeforeIndex - the index to stop the return at before
   */
  getPosts(postType: PostType, startIndex: number, stopBeforeIndex: number) {
    const postsArr = posts;
    this.pageCountSource.next(postsArr.length);
    const postsForPage = postsArr
      .filter((elem: Post) => {
        if (elem.postType === postType) {
          return elem;
        }
      })
      .slice(startIndex, stopBeforeIndex);

    this.postsSource.next(postsForPage);
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

    return this.http.post(postFileURL, body)
      .map(response => {
        return response.json().data.attributes.path;
      });
  }

}
