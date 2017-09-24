import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutMeComponent } from './about-me/about-me.component';
import { AccountComponent } from './account/account.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostsListComponent } from './blog-posts-list/blog-posts-list.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';

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
      children: [
        {
          path: '',
          component: ProjectsComponent
        },
        {
          path: ':id',
          component: BlogPostComponent
        }
      ]
    },
    {
      path: 'about-me',
      component:
      AboutMeComponent
    }
    ,
    {
      path: 'contact',
      component:
      ContactComponent
    }
    ,
    {
      path: 'account',
      component:
      AccountComponent
    }
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
