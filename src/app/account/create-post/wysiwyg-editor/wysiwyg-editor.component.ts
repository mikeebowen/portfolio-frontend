import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  Input,
  ViewChild,
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
import 'tinymce/plugins/code';

import { BlogPostsService } from '../../../shared/services/blog-posts.service';
import { ModalDirective } from 'ngx-bootstrap';
import { Post } from '../../../shared/classes/post';
import { FileAssetsService } from '../../../shared/services/file-assets.service';
import { TinymceImage } from '../../../shared/classes/tinymce-image';

declare const tinymce: any;
let fileLink: string;


@Component({
  selector: 'app-wysiwyg-editor',
  templateUrl: './wysiwyg-editor.component.html',
  styleUrls: ['./wysiwyg-editor.component.scss']
})
export class WysiwygEditorComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() elementId: string;
  editor: any;
  blogPostToSave: Post;
  image_list: TinymceImage[];
  saveOrCancelModalConfig: any = { backdrop: 'static' };
  @ViewChild('saveOrCancelModal') saveOrCancelModal: ModalDirective;
  wysiwygID = 'wysiwyg-editor';

  file_upload_callback: Function = (callback: Function, value?, meta?): void => {
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

        component.uploadFile(base64, file.name, () => {
          callback(fileLink, { title: file.name });
        });
      };
    });
    input.click();
  }

  tinymce_setup: Function = editor => {
    this.editor = editor;

    editor.on('keyup change', () => {
      this.blogPostToSave.content = editor.getContent();
      this.blogPostsService.updateBlogPostToSave(this.blogPostToSave);
    });
  }

  constructor(private blogPostsService: BlogPostsService, private fileAssetsService: FileAssetsService) {
  }

  ngOnInit() {
    this.blogPostsService.blogPostToSave$.subscribe(
      (blogPost: Post) => this.blogPostToSave = blogPost,
      (err: Error) => console.error('Error retrieving blog post to save: ', err)
    );

    this.fileAssetsService.tinymceImages$.subscribe((images: TinymceImage[]) => {
      this.image_list = images;
    });
  }

  ngAfterViewInit() {

    tinymce.init({
      selector: `#${this.wysiwygID}`,
      plugins: ['link', 'table', 'spellchecker', 'image', 'imagetools', 'save', 'lists', 'imagetools', 'codesample', 'code '],
      // tslint:disable-next-line:max-line-length
      toolbar: 'insertfile undo redo | code | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image codesample | save cancel',
      menubar: 'file edit insert view format table tools image',
      min_height: 500,
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
      setup: this.tinymce_setup,
      image_title: true,
      image_list: this.image_list,
      file_browser_callback_types: 'image',
      file_picker_callback: this.file_upload_callback,
      // TODO add save method
      save_onsavecallback: () => {
        // alert('TODO add save method');
        this.saveOrCancelModal.show();
      },
      // TODO add cancel method
      save_oncancelcallback: () => {
        alert('TODO add cancel method');
      }
    });

    if (this.blogPostToSave.content) this.editor.setContent(this.blogPostToSave.content, { format: 'raw' });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }

  uploadFile(base64String: any, fileName: string, callback: Function) {
    this.fileAssetsService.uploadFile(base64String, fileName).subscribe(
      (res: string) => {
        fileLink = res;
        callback();
      },
      err => console.error('error uploading file : ', err)
    );
  }

  saveBlogPost() {
    this.blogPostsService.saveBlogPost(this.blogPostToSave)
      .subscribe(
        (res: any) => {
          this.blogPostsService.updateBlogPostToSave(new Post({}));
          tinymce.get(this.wysiwygID).setContent('');
          this.saveOrCancelModal.hide();
          alert(res.data.attributes.message);
        },
        (err: Error) => console.error('error saving blog post: ', err)
      );
  }

  saveAsDraft() {
    this.blogPostToSave.published = false;
    this.saveBlogPost();
  }

  publishNow() {
    this.blogPostToSave.published = true;
    this.saveBlogPost();
  }

}
