import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() inp: string;
  @Input() hint: any;
  @Input() name: any;
  @Input() type: any = 'text';
  @Input() bg: string = 'primary';
  @Input() placeholder: any;
  @Output()
  changeEvent = new EventEmitter<any>();

  constructor() {}

  changeHandler(evt: any) {
    console.log('o');
    this.changeEvent.emit('evt');
  }
}
