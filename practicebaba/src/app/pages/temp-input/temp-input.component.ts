import { Component, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'app-temp-input',
  templateUrl: './temp-input.component.html',
  styleUrls: ['./temp-input.component.scss'],
})
export class TempInputComponent {
  @Input() template: TemplateRef<any>;
  @Input() name: string;
  @Input()
  values: string[];
  constructor() {}
}
