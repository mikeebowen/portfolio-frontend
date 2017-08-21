import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import 'rxjs/add/observable/of';

import { WysiwygEditorComponent } from './wysiwyg-editor.component';
import { BlogPostsService } from '../../../shared/services/blog-posts.service';
import { ModalModule } from 'ngx-bootstrap';
import { Observable } from 'rxjs/Observable';
import { FormsModule } from '@angular/forms';
import { FileAssetsService } from '../../../shared/services/file-assets.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('WysiwygEditorComponent', () => {
  let component: WysiwygEditorComponent;
  let fixture: ComponentFixture<WysiwygEditorComponent>;
  const fileAssetsServiceStub = {
    uploadFile: jasmine.createSpy('uploadFile').and.returnValue(Observable.of('fish')),
    tinymceImages$: Observable.of('beef')
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, ModalModule.forRoot(), FormsModule, HttpClientTestingModule],
      declarations: [WysiwygEditorComponent],
      providers: [
        BlogPostsService,
        { provide: FileAssetsService, useValue: fileAssetsServiceStub },
        HttpClient,
        HttpHandler
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WysiwygEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have a method uploadFile that calls the FileAssetsService to upload a file',
    () => {
    expect(1).toEqual(1);
      const callback = jasmine.createSpy('callback');

      component.uploadFile('data:image/png;base64,aGVsbG8gd29ybGQ=', 'testFileName.jpg', callback);

      expect(fileAssetsServiceStub.uploadFile).toHaveBeenCalledWith('data:image/png;base64,aGVsbG8gd29ybGQ=', 'testFileName.jpg');
      expect(callback).toHaveBeenCalled();
    });

});
