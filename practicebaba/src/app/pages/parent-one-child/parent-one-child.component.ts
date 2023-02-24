import {
  Component,
  DoCheck,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'parent-one-child',
  templateUrl: './parent-one-child.component.html',
  styleUrls: ['./parent-one-child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentOneChildComponent implements DoCheck {
  @Input()
  myStrArr: any[] = [];

  constructor(private cd: ChangeDetectorRef) {}
  ngDoCheck(): void {
    console.log(this.myStrArr);
    this.cd.detectChanges();
    console.log('Parent One child detect Changes');
  }
  onClick() {
    this.myStrArr.push('WebTechTalk');
  }
}
