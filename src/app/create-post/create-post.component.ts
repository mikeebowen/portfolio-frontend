import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: [ './create-post.component.scss' ]
})
export class CreatePostComponent implements OnInit {

  currentTab = 'Post Information';

  constructor() {
  }

  ngOnInit() {
  }

  keyupHandler(e: any) {
    console.log('Tinymce Event : ', e);
  }

  changeTab(tabName: string) {
    this.currentTab = tabName;
  }

}
