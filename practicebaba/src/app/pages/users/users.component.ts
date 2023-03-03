import { Component, Input, OnInit } from '@angular/core';
import { Laptop } from '../../classes/laptop';
import {
  Param,
  g,
  timex,
  time,
} from '../../shared/decorators/onchange.decorator';
import {
  ClassComponentDecFact,
  MethodTest,
  Prop,
} from '../../shared/decorators/onchange.decorator';
import {
  ReadOnly,
  ClassComponentDec,
} from '../../shared/decorators/onchange.decorator';

import {
  Emoji,
  OnChangesOe,
  Confirmable,
} from 'src/app/shared/decorators/onchange.decorator';
@ClassComponentDec
@ClassComponentDecFact({ id: 'Hello World' })
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  elementId: string;
  @ReadOnly('this is a read only change')
  todayrdonly: string;

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

  getAge(dob: string) {
    const dobDate = new Date(dob).getTime();
    const currentDate = new Date().getTime();
    return ~~((currentDate - dobDate) / (1000 * 60 * 60 * 24 * 365));
  }
  constructor() {
    let lptp: Laptop = new Laptop();
    console.log(lptp);
    // console.log(lptp['stickers']);
  }
  id: any;

  @Prop
  idx: string;

  ngOnInit(): void {
    console.log(this.todayrdonly);
    this.todayrdonly = 'asdhasld';
    console.log(this.todayrdonly);
    console.log(this.id);
    console.log(this.elementId);
    console.log(this.prinId('Florian'));
    this.idx = '100';
    console.log(this.idx);
    this.methodOne('kasdhj');
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   if (changes['dob']) this.age = this.getAge(this.dob);
  //   if (changes['name'] && changes['name'].currentValue)
  //     this.uname = this.name.charAt(0) + this.name.substring(1);
  // }

  @MethodTest
  prinId(@Param prefix: string = ''): string {
    return prefix + this.id;
  }

  //@g('abacus')
  //  @timex('moe')
  @time
  methodOne(name: string) {
    console.log(`Hello ${name}`);
  }
}
