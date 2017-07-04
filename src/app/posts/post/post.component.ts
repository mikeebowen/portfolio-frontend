import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Post } from '../../shared/classes/post';
import posts from '../../../assets/posts';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: [ './post.component.scss' ]
})
export class PostComponent implements OnInit {
  postId: string;
  post: Post;

  posts: Post[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.posts = posts;
    this.route.params.subscribe((params: Params) => {
      console.log('this.posts[0] : ', this.posts[0].uniqueTitle);
      this.postId = params.id;
      for (const post of this.posts) {
        if (params.id === post.uniqueTitle) {
          this.post = post;
        }
      }
    });

  }
}
