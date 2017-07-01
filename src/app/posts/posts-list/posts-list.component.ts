import { Component, OnInit } from '@angular/core';

import posts from '../../../assets/posts';
import { Post } from '../shared/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: [ './posts-list.component.scss' ]
})
export class PostsListComponent implements OnInit {
  posts: Post[];

  constructor() { }

  ngOnInit() {
    this.posts = posts;
  }

}
