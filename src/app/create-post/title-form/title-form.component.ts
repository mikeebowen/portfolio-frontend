import { Component, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../shared/classes/post';
import { BlogPostsService } from '../../shared/services/blog-posts.service';

@Component({
  selector: 'app-title-form',
  templateUrl: './title-form.component.html',
  styleUrls: ['./title-form.component.scss']
})
export class TitleFormComponent implements OnInit {
  @ViewChild('blogPostInfoForm') blogPostInfoForm;
  blogPostToSave: Post;

  constructor(private blogPostService: BlogPostsService) { }

  ngOnInit() {

    this.blogPostService.blogPostToSave$.subscribe(
      (blogPost: Post) => this.blogPostToSave = blogPost,
      (err: Error) => console.error('Error retrieving blog post to save', err)
    );

    this.blogPostInfoForm.control.valueChanges.subscribe(
      values => this.blogPostService.updateBlogPostToSave(this.blogPostToSave),
      (err: Error) => console.error('error reading post information form: ', err)
    );
  }

}
