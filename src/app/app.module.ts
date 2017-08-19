import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import '@angular/animations';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { ModalModule } from 'ngx-bootstrap/modal';

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
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { CreatePostComponent } from './account/create-post/create-post.component';
import { WysiwygEditorComponent } from './account/create-post/wysiwyg-editor/wysiwyg-editor.component';
import { PostInfoFormComponent } from './account/create-post/post-info-form/post-info-form.component';
import { AccountComponent } from './account/account.component';
import { AccountHeaderComponent } from './account/account-header/account-header.component';
import { EditSiteInfoComponent } from './account/edit-site-info/edit-site-info.component';
import { EditAboutContentComponent } from './account/edit-about-content/edit-about-content.component';
import { EditAccountInfoComponent } from './account/edit-account-info/edit-account-info.component';

// services
import { BlogPostsService } from './shared/services/blog-posts.service';
import { FileAssetsService } from './shared/services/file-assets.service';

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
    WysiwygEditorComponent,
    PostInfoFormComponent,
    AccountComponent,
    AccountHeaderComponent,
    EditSiteInfoComponent,
    EditAboutContentComponent,
    EditAccountInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PaginationModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [BlogPostsService, FileAssetsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
