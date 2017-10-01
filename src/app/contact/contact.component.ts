import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  emailSubject: string;
  emailContent: string;

  constructor() {
  }

  ngOnInit() {
  }

  sendEmail() {
    window.open(`mailto:mikee.bowen@gmail.com?subject=${this.emailSubject}&body=${this.emailContent}`, '_self');
  }

}
