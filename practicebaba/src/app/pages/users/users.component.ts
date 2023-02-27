import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  private _name!: string;
  @Input()
  get name(): string {
    return this._name;
  }
  set name(val: string) {
    this._name = val;
    if (val) this.uname = val.charAt(0) + val.substring(1);
  }

  uname!: string;

  private _dob!: string;
  @Input()
  get dob(): string {
    return this._dob;
  }
  set dob(val: string) {
    this._dob = val;
    if (this.dob) this.age = this.getAge(val);
    if (this.age > 18) {
      console.log('you are adult');
    } else {
      console.log('you are child');
    }
  }

  age!: number;

  message!: string;

  constructor() {}

  getAge(dob: string) {
    const dobDate = new Date(dob).getTime();
    const currentDate = new Date().getTime();
    return ~~((currentDate - dobDate) / (1000 * 60 * 60 * 24 * 365));
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['dob']) this.age = this.getAge(this.dob);
  //   if (changes['name'] && changes['name'].currentValue)
  //     this.uname = this.name.charAt(0) + this.name.substring(1);
  // }
}
