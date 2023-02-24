import { ChangeDetectionStrategy } from '@angular/compiler';
import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'parent-one',
  templateUrl: './parent-one.component.html',
  styleUrls: ['./parent-one.component.scss'],
})
export class ParentOneComponent implements DoCheck {
  myStrArrParent: any[] = [];

  ngDoCheck(): void {
    console.log('Parent One detect Changes');
  }

  onClick() {
    this.myStrArrParent.push('Please sunscribe the ');
  }
}
