import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from '../shared/classes/post';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { slideInOut } from '../shared/animations/index';
import { BlogPostsService } from '../shared/services/blog-posts.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [slideInOut],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: Post[] = [];
  itemsPerPage = 4;
  maxPaginationSize = 4;
  totalNumberOfPosts: number;
  currentPage: number;
  startIndex = 0;
  projectPostsSubscription: Subscription;
  projectPageCountSubscription: Subscription;

  constructor(private blogPostsService: BlogPostsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(
      (params: Params) => {
        const page = parseInt(params.page, 10);

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

        this.blogPostsService.getPosts('projectPost', this.startIndex, this.itemsPerPage);
      },
      (err: Error) => console.error('Error retrieving query parameters : ', err)
    );

    this.projectPostsSubscription = this.blogPostsService.posts$.subscribe(
      (projectPosts: Post[]) => this.projects = projectPosts,
      (err: Error) => console.error('Error retrieving posts : ', err)
    );

    this.projectPageCountSubscription = this.blogPostsService.pageCount$.subscribe(
      (postCount: number) => this.totalNumberOfPosts = postCount,
      (err: Error) => console.error('Error retrieving number of posts : ', err)
    );

    setTimeout(() => {
      this.currentPage = this.startIndex > 0 ? (this.startIndex + this.itemsPerPage + 1) / this.itemsPerPage : 1;
    }, 100);
  }

  ngOnDestroy() {
    if (this.projectPostsSubscription) this.projectPostsSubscription.unsubscribe();
    if (this.projectPageCountSubscription) this.projectPageCountSubscription.unsubscribe();
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
