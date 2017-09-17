import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { Post } from '../shared/classes/post';
import { BlogPostsService } from '../shared/services/blog-posts.service';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: [ './blog-post.component.scss' ]
})
export class BlogPostComponent implements OnInit {
  post: Post;

  constructor(private route: ActivatedRoute, private blogPostsService: BlogPostsService) { }

  ngOnInit() {

    this.route.params
      .flatMap((params: Params): Observable<string> => {
        return Observable.of(params.id);
      })
      .flatMap((uniqueTitle: string): Observable<any> => {
        return this.blogPostsService.getSinglePost(uniqueTitle);
      })
      .subscribe(
        (res: any) => {
          this.post = new Post(res.data.attributes);
        },
        (err: Error) => console.error('Error retrieving post: ', err)
      );

  }
}
