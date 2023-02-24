import { Component, TemplateRef, Input } from '@angular/core';

@Component({
  selector: 'wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss'],
})
export class WrapperComponent {
  @Input()
  listTemplate: TemplateRef<any>;
  @Input()
  newUpdate = {} as any;
  constructor() {}
}
