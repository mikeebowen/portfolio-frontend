import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-site-info',
  templateUrl: './edit-site-info.component.html',
  styleUrls: ['./edit-site-info.component.scss']
})
export class EditSiteInfoComponent implements OnInit {
  siteTitle: string;

  constructor() { }

  ngOnInit() {
  }

}
