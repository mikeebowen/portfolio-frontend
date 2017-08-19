import { Component, OnInit } from '@angular/core';
import { FileAssetsService } from '../shared/services/file-assets.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentTabIndex = 0;
  tabArray = ['Site Information', 'About Content', 'Create New Post', 'Account Info'];

  constructor(private fileAssetService: FileAssetsService) { }

  ngOnInit() {
    this.fileAssetService.getImagesList();
  }

  updateCurrentTab(index: number) {
    this.currentTabIndex = index;
  }

}
