import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  show: boolean = true;
  @Input() bg: string = 'primary';
  _id: string;
  get id(): string {
    return this._id;
  }
  @Input() set id(value: string) {
    this._id = value;
  }

  constructor() {}
}
