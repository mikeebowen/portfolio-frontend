import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AccountRoutingModule } from './account-routing.module';

import { AccountComponent } from './account.component';
import { AccountHeaderComponent } from './account-header/account-header.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditAboutContentComponent } from './edit-about-content/edit-about-content.component';
import { EditAccountInfoComponent } from './edit-account-info/edit-account-info.component';
import { EditSiteInfoComponent } from './edit-site-info/edit-site-info.component';
import { WysiwygEditorComponent } from './create-post/wysiwyg-editor/wysiwyg-editor.component';
import { PostInfoFormComponent } from './create-post/post-info-form/post-info-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ModalModule,
    AccountRoutingModule
  ],
  declarations: [
    AccountComponent,
    AccountHeaderComponent,
    CreatePostComponent,
    EditAboutContentComponent,
    EditAccountInfoComponent,
    EditSiteInfoComponent,
    WysiwygEditorComponent,
    PostInfoFormComponent
  ],
  exports: [AccountComponent]
})
export class AccountModule { }
