import { async, ComponentFixture, inject, TestBed } from '@angular/core/testing';

import { WysiwygEditorComponent } from './wysiwyg-editor.component';
import { BlogPostsService } from '../../shared/services/blog-posts.service';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';

describe('WysiwygEditorComponent', () => {
  let component: WysiwygEditorComponent;
  let fixture: ComponentFixture<WysiwygEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, ModalModule.forRoot(), FormsModule],
      declarations: [WysiwygEditorComponent],
      providers: [BlogPostsService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a method uploadFile that calls the BlogPostService to upload a file', inject([BlogPostsService], (blogPostService) => {
    const callback = jasmine.createSpy('callback');

    spyOn(blogPostService, 'uploadFile').and.returnValue(Observable.of('burrito'));
    component.uploadFile('data:image/png;base64,aGVsbG8gd29ybGQ=', 'testFileName.jpg', callback);

    expect(blogPostService.uploadFile).toHaveBeenCalledWith('data:image/png;base64,aGVsbG8gd29ybGQ=', 'testFileName.jpg');
    expect(callback).toHaveBeenCalled();
  }));
});
