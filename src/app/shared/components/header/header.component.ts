import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchTerm: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.searchTerm = null;
      }
    });
  }

  handleKeydownSubmit() {
    this.router.navigate(['/blog'], { queryParams: { searchTerm: this.searchTerm } })
      .catch((err: Error) => console.error(err));
  }
}
