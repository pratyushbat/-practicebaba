import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  phVal: string;
  constructor() {}
  changeHandler(evt: any) {
    console.log(evt.target.value);
  }
}
