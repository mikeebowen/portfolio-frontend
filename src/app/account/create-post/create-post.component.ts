import { Component, OnInit } from '@angular/core';
import { Post } from '../../shared/classes/post';
import { BlogPostsService } from '../../shared/services/blog-posts.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: [ './create-post.component.scss' ]
})
export class CreatePostComponent implements OnInit {
  blogPostToSave: Post;
  currentTab = 'Post Information';

  constructor(private blogPostService: BlogPostsService) {
  }

  ngOnInit() {
     this.blogPostService.blogPostToSave$.subscribe(
       (blogPost: Post) => this.blogPostToSave = blogPost,
       (err: Error) => console.error('Error retrieving blog post to save: ', err)
     );
  }

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }

}
