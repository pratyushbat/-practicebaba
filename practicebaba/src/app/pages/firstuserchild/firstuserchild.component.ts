import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'firstuserchild',
  templateUrl: './firstuserchild.component.html',
  styleUrls: ['./firstuserchild.component.scss'],
})
export class FirstuserchildComponent implements OnChanges {
  @Input()
  user: Record<string, any>;

  @Output()
  updateParentUser = new EventEmitter();

  initialChange: string;

  ngOnChanges(changes: SimpleChanges): void {
    const { firstChange, currentValue } = changes['user'];

    if (firstChange && currentValue) {
      console.log(firstChange, currentValue);
      this.initialChange = currentValue.name;
    }
  }

  changeName(name: string) {
    this.user.name = name;
    this.updateParentUser.emit({ id: this.user.id, name });
  }

  resetName() {
    this.changeName(this.initialChange);
  }
}
