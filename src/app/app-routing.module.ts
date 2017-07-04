import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { BlogPostsListComponent } from './blog-posts/blog-posts-list/blog-posts-list.component';
import { BlogPostComponent } from './blog-posts/blog-post/blog-post.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'blog',
    children: [
      {
        path: '',
        component: BlogPostsListComponent
      },
      {
        path: ':id',
        component: BlogPostComponent
      }
    ]
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
