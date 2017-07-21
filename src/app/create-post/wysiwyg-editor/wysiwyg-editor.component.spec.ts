import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WysiwygEditorComponent } from './wysiwyg-editor.component';
import { BlogPostsService } from '../../shared/services/blog-posts.service';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';

describe('WysiwygEditorComponent', () => {
  let component: WysiwygEditorComponent;
  let fixture: ComponentFixture<WysiwygEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule, ModalModule.forRoot() ],
      declarations: [ WysiwygEditorComponent ],
      providers: [ BlogPostsService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
