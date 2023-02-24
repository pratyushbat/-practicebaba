import { Component } from '@angular/core';
let times = 0;
@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  num: number;
  constructor() {
    this.num = 0;
    times += 1;
    this.num = times;
  }
}
