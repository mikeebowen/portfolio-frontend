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

declare const tinymce: any;

@Component({
  selector: 'app-wysiwyg-editor',
  templateUrl: './wysiwyg-editor.component.html',
  styleUrls: [ './wysiwyg-editor.component.scss' ]
})
export class WysiwygEditorComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() elementId: string;
  @Output() onEditorContentChange = new EventEmitter();
  editor: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      plugins: [ 'link', 'table' ],
      min_height: 400,
      skin_url: 'assets/skins/lightgray',
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          this.onEditorContentChange.emit(content);
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

}
