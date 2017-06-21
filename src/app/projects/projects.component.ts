import { Component, OnInit } from '@angular/core';
import { slideInOut } from '../shared/animations/index';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.less' ],
  animations: [ slideInOut ],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOut]': '' }
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
