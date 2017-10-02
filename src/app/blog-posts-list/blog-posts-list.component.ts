import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { BlogPostsService } from '../shared/services/blog-posts.service';
import { Post } from '../shared/classes/post';

@Component({
  selector: 'app-posts-list',
  templateUrl: './blog-posts-list.component.html',
  styleUrls: ['./blog-posts-list.component.scss']
})
export class BlogPostsListComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  itemsPerPage = 5;
  maxPaginationSize = 5;
  totalNumberOfPosts: number;
  currentPage: number;
  startIndex = 0;
  blogPostsSubscription: Subscription;
  blogPageCountSubscription: Subscription;
  searchTerm: string;


  constructor(private blogPostsService: BlogPostsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        const page = parseInt(params.page, 10);
        this.searchTerm = params.searchTerm;

        if (typeof page === 'number' && !isNaN(page)) {
          this.currentPage = page;
        } else {
          this.currentPage = 1;
        }

        if (this.currentPage === 1) {
          this.startIndex = 0;
        } else {
          this.startIndex = ((this.currentPage - 1) * this.itemsPerPage) - 1;
        }

        this.blogPostsService.getPosts('blogPost', this.startIndex, this.itemsPerPage, this.searchTerm);
      },
      (err: Error) => console.error('Error retrieving query parameters : ', err)
    );

    this.blogPostsSubscription = this.blogPostsService.posts$.subscribe(
      (posts: Post[]) => this.posts = posts,
      (err: Error) => console.error('Error retrieving posts : ', err)
    );

    this.blogPageCountSubscription = this.blogPostsService.pageCount$.subscribe(
      (postCount: number) => {
        this.totalNumberOfPosts = postCount;
        setTimeout(() => {
          this.currentPage = this.startIndex > 0 ? (this.startIndex + this.itemsPerPage + 1) / this.itemsPerPage : 1;
        }, this.totalNumberOfPosts);
      },
      (err: Error) => console.error('Error retrieving number of posts : ', err)
    );
  }

  ngOnDestroy() {
    if (this.blogPostsSubscription) this.blogPostsSubscription.unsubscribe();
    if (this.blogPageCountSubscription) this.blogPageCountSubscription.unsubscribe();
  }

  switchPage(e: any): void {
    this.currentPage = e.page;
    this.router.navigate([], {
      queryParams: { page: e.page, searchTerm: this.searchTerm },
      relativeTo: this.activatedRoute
    });
    window.scrollTo(0, 0);
  }
}
