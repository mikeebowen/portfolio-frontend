import { Component, OnInit } from '@angular/core';

import posts from '../../../assets/posts';
import { Post } from '../../shared/classes/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './blog-posts-list.component.html',
  styleUrls: [ './blog-posts-list.component.scss' ]
})
export class BlogPostsListComponent implements OnInit {
  posts: Post[];

  constructor() { }

  ngOnInit() {
    this.posts = posts;
  }

}
