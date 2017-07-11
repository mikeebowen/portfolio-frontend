import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BlogPostsService } from '../../shared/services/blog-posts.service';
import { Post } from '../../shared/classes/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './blog-posts-list.component.html',
  styleUrls: [ './blog-posts-list.component.scss' ]
})
export class BlogPostsListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  itemsPerPage = 5;
  maxPaginationSize = 5;
  totalNumberOfPosts: number;
  currentPage: number;
  startIndex: number;
  queryParamsSubscription: Subscription;
  blogPostsSubscription: Subscription;
  blogPageCountSubscription: Subscription;


  constructor(private blogPostsService: BlogPostsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.queryParamsSubscription = this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        const page = parseInt(params.page, 10);

        if (typeof page === 'number' && !isNaN(page)) {
          this.currentPage = page;
        } else {
          this.currentPage = 1;
        }
        this.startIndex = (this.currentPage - 1) * (this.itemsPerPage - 1);
        this.blogPostsService.getPosts('blogPost', this.startIndex, this.startIndex + this.itemsPerPage);
      },
      (err: Error) => console.error('Error retrieving query parameters : ', err)
    );

    this.blogPostsSubscription = this.blogPostsService.posts$.subscribe(
      (posts: Post[]) => this.posts = posts,
      (err: Error) => console.error('Error retrieving posts : ', err)
    );

    this.blogPageCountSubscription = this.blogPostsService.pageCount$.subscribe(
      (postCount: number) => this.totalNumberOfPosts = postCount,
      (err: Error) => console.error('Error retrieving number of posts : ', err)
    );
  }

  ngOnDestroy() {
    this.queryParamsSubscription.unsubscribe();
    this.blogPostsSubscription.unsubscribe();
    this.blogPageCountSubscription.unsubscribe();
  }

  switchPage(e: any): void {
    this.currentPage = e.page;
    this.router.navigate([], {
      queryParams: { page: e.page },
      relativeTo: this.activatedRoute
    });
    window.scrollTo(0, 0);
  }
}
