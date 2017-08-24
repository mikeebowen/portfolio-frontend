import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import posts from '../../../assets/posts';
import { Post, PostType } from '../classes/post';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BlogPostsService {
  blogPostsUrl = '/api/content-items';

  private postsSource: BehaviorSubject<Post[]> = new BehaviorSubject([]);
  posts$ = this.postsSource.asObservable();

  private pageCountSource: BehaviorSubject<number> = new BehaviorSubject(null);
  pageCount$ = this.pageCountSource.asObservable();

  private blogPostToSaveSource: BehaviorSubject<Post> = new BehaviorSubject(new Post({}));
  blogPostToSave$ = this.blogPostToSaveSource.asObservable();

  constructor(private http: HttpClient) {
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
   * @method updateBlogPostToSave
   * update BehaviorSubject for the blog post to save
   * @param {Post} blogPost
   */
  updateBlogPostToSave(blogPost: Post) {
    this.blogPostToSaveSource.next(blogPost);
  }

  saveBlogPost(post: Post): Observable<any> {
    return this.http.post(this.blogPostsUrl, { contentItem: post });
  }
}
