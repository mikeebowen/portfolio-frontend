import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@angular/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// components
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-posts/blog-post/blog-post.component';
import { BlogPostsListComponent } from './blog-posts/blog-posts-list/blog-posts-list.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
// services
import { BlogPostsService } from './shared/services/blog-posts.service';
import { AboutMeComponent } from './about-me/about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    BlogPostsListComponent,
    BlogPostComponent,
    LoginComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot()
  ],
  providers: [ BlogPostsService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
