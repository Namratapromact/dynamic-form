import { Component } from '@angular/core';
import { person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Dynamic Form Builder';
  person;

  constructor() {
    this.person = person;
  }
}
