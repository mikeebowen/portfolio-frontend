import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@angular/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';

// components
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostsListComponent } from './blog-posts-list/blog-posts-list.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
// services
import { BlogPostsService } from './shared/services/blog-posts.service';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { WysiwygEditorComponent } from './create-post/wysiwyg-editor/wysiwyg-editor.component';

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
    AboutMeComponent,
    ContactComponent,
    CreatePostComponent,
    WysiwygEditorComponent
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
