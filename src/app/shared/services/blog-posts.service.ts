import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

import { Post, PostType } from '../classes/post';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  static extractPosts(data: any[]) {
    return data.map((datum: any) => {
      return new Post(datum.attributes);
    });
  }

  constructor(private http: HttpClient) {
  }

  /**
   * get posts with optional starting index and limit
   * @method getPosts
   * @param {string} postType - the type of post to return
   * @param {number} startIndex - the index to start the return from
   * @param {number} limit - the number of items to return
   */
  getPosts(postType: PostType, startIndex: number, limit: number): void {
    const params = new HttpParams()
      .set('postType', postType.toString())
      .set('index', startIndex.toString())
      .set('limit', limit.toString());

    this.http.get(this.blogPostsUrl, { params }).subscribe(
      (res: any) => {
        const posts = BlogPostsService.extractPosts(res.data);

        this.postsSource.next(posts);
        this.pageCountSource.next(res.meta.totalItems);
      },
      (err: Error) => console.error(err)
    );
  }

  getSinglePost(uniqueTitle: string): Observable<any> {
    return this.http.get(`${this.blogPostsUrl}/${uniqueTitle}`);
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
