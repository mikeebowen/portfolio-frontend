import { Component, OnInit } from '@angular/core';
import { slideInOut } from '../shared/animations/index';

import projects from '../../assets/projects';
import { Post } from '../shared/classes/post';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: [ './projects.component.scss' ],
  animations: [ slideInOut ],
  // tslint:disable-next-line:use-host-property-decorator
  // host: { '[@slideInOut]': '' }
})
export class ProjectsComponent implements OnInit {
  projects: Post[];
  constructor() { }

  ngOnInit() {
    this.projects = projects;
  }

}
