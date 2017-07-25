import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Post } from '../../../shared/classes/post';
import { BlogPostsService } from '../../../shared/services/blog-posts.service';

@Component({
  selector: 'app-post-info-form',
  templateUrl: './post-info-form.component.html',
  styleUrls: ['./post-info-form.component.scss']
})
export class PostInfoFormComponent implements OnInit, OnChanges {
  @ViewChild('blogPostInfoForm') blogPostInfoForm;
  blogPostToSave: Post;
  base64ImageToSave: string;
  base64ImageToDisplay: string;

  constructor(private blogPostService: BlogPostsService) {
  }

  ngOnInit() {

    this.blogPostService.blogPostToSave$.subscribe(
      (blogPost: Post) => this.blogPostToSave = blogPost,
      (err: Error) => console.error('Error retrieving blog post to save', err)
    );

    this.blogPostInfoForm.control.valueChanges.subscribe(
      values => {
        this.blogPostService.updateBlogPostToSave(this.blogPostToSave);
        console.log('this.blogPostToSave', this.blogPostToSave);
      },
      (err: Error) => console.error('error reading post information form: ', err)
    );
  }

  ngOnChanges() {
    console.log('blogPostToSave.image : ', this.blogPostToSave.image);
  }

  fileChangeEvent(fileInfo: any) {
    const component = this;
    const file = fileInfo.path[0].files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
    // TODO: save base64 image
    reader.onload = function () {
      component.base64ImageToDisplay = reader.result;
      component.base64ImageToSave = reader.result.split(',')[1];
      console.log(reader.result);
    };
  }

}
