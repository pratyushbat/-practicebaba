import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'practicebaba';
  html = `<h1>Email </h1> <input type='text'>`;
  constructor() {}
  parentHandler(evt: any) {
    console.log('o');
    console.log(evt);
  }
}
