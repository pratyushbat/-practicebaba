import { Component, Input } from '@angular/core';
import { Confirmable } from '../../shared/decorators/onchange.decorator';
import {
  Emoji,
  OnChangesOe,
} from 'src/app/shared/decorators/onchange.decorator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @OnChangesOe<string>(function (this: UsersComponent, value: any) {
    this.uname = value.charAt(0) + ':' + value.substring(1);
  })
  @Input()
  name!: string;

  uname!: string;

  @OnChangesOe<string>(function (this: UsersComponent, newDate: any) {
    this.age = this.getAge(newDate);
    if (this.age > 18) this.message = 'you are adult';
    else if (this.age > 12 && this.age < 18) this.message = 'you are teen';
    else this.message = 'you are child';
  })
  @Input()
  dob!: string;

  age!: number;

  message!: string;

  //property decorator
  @Emoji()
  flavor: string = 'vanila';

  toppings: string[] = [];
  //method decorator
  @Confirmable('Are you sure?')
  @Confirmable('Are you super super sure? There is no going back!')
  addTopping(topping: string = 'sprinkels') {
    this.toppings.push(topping);
  }

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
