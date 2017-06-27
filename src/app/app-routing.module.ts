import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PostsListComponent } from './posts/posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: []
  },
  {
    path: 'blog',
    component: PostsListComponent
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
