import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: [`.contact {
    text-align: center;
    font-size: 22px;
    padding-bottom: 30px;
  }`]
})
export class ContactComponent {
  url = 'mailto:rpistoresi@nevada.unr.edu';

  constructor() { }

}
