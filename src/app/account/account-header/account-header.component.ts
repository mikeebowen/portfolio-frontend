import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.scss']
})
export class AccountHeaderComponent implements OnInit {
  @Input() currentTabIndex: number;
  @Input() tabArray: string[];
  @Output() currentTabEventEmitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  updateCurrentTabIndex(index: number) {
    this.currentTabIndex = index;
    this.currentTabEventEmitter.emit(this.currentTabIndex);
  }

}
