import {
  Component,
  OnInit,
  AfterViewInit,
  EventEmitter,
  OnDestroy,
  Input,
  Output
} from '@angular/core';

import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/spellchecker';
import 'tinymce/plugins/imagetools';
import 'tinymce/plugins/save';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/codesample';
import { BlogPostsService } from '../../shared/services/blog-posts.service';

declare const tinymce: any;

@Component({
  selector: 'app-wysiwyg-editor',
  templateUrl: './wysiwyg-editor.component.html',
  styleUrls: ['./wysiwyg-editor.component.scss']
})
export class WysiwygEditorComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() elementId: string;
  @Output() onEditorContentChange = new EventEmitter();
  editor: any;

  constructor(private blogPostsService: BlogPostsService) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'table', 'spellchecker', 'image', 'imagetools', 'save', 'lists', 'imagetools', 'codesample'],
      // tslint:disable-next-line:max-line-length
      toolbar: 'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image codesample | save',
      menubar: 'file edit insert view format table tools save image',
      min_height: 400,
      skin_url: 'assets/skins/lightgray',
      browser_spellcheck: true,
      codesample_languages: [
        { text: 'HTML/XML', value: 'markup' },
        { text: 'JavaScript', value: 'javascript' },
        { text: 'CSS', value: 'css' },
        { text: 'PHP', value: 'php' },
        { text: 'Ruby', value: 'ruby' },
        { text: 'Python', value: 'python' },
        { text: 'Java', value: 'java' },
        { text: 'C', value: 'c' },
        { text: 'C#', value: 'csharp' },
        { text: 'C++', value: 'cpp' }
      ],
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      },
      image_title: true,
      file_browser_callback_types: 'image',
      file_picker_callback: (callback, value, meta) => {
        const component = this;
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.setAttribute('accept', 'image/*');

        input.onchange = (function (e: any) {
          const file = e.path[0].files[0];
          const reader = new FileReader();

          reader.readAsDataURL(file);

          reader.onload = function () {
            const id = 'blobid' + (new Date()).getTime();
            const blobCache = tinymce.activeEditor.editorUpload.blobCache;
            const base64 = reader.result.split(',')[1];
            const blobInfo = blobCache.create(id, file, base64);
            blobCache.add(blobInfo);
            component.uploadFile(base64, file.name);

            callback(blobInfo.blobUri(), { title: file.name });
          };
        });
        input.click();
      },
      // TODO add save method
      save_onsavecallback: function () { console.log('Saved'); },
      // TODO figure out why cancel button isn't showing
      save_oncancelcallback: function () { console.log('Save canceled'); }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  uploadFile(toBase64String: any, fileName: string) {
    this.blogPostsService.uploadFile(toBase64String, fileName).subscribe(
      res => console.log('res : ', res),
      err => console.error('error uploading file : ', err)
    );
  }

}
