import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from '../shared/classes/post';
import posts from '../../assets/posts';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: [ './blog-post.component.scss' ]
})
export class BlogPostComponent implements OnInit {
  postId: string;
  post: Post;

  posts: Post[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = posts;
    this.route.params.subscribe((params: Params) => {
      this.postId = params.id;
      for (const post of this.posts) {
        if (params.id === post.uniqueTitle) {
          this.post = post;
        }
      }
    });

  }
}
