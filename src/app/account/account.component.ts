import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  currentTabIndex = 0;
  tabArray = ['Site Information', 'About Content', 'Create New Post', 'Account Info'];

  constructor() { }

  ngOnInit() {
  }

  updateCurrentTab(index: number) {
    this.currentTabIndex = index;
  }

}
