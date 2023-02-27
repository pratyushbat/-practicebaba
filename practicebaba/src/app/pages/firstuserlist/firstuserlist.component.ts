import { Component } from '@angular/core';

@Component({
  selector: 'firstuserlist',
  templateUrl: './firstuserlist.component.html',
  styleUrls: ['./firstuserlist.component.scss'],
})
export class FirstuserlistComponent {
  users: any[] = [
    { id: 1, name: 'abisdasdd' },
    { id: 3, name: 'tfad' },
    { id: 2, name: 'abid3' },
  ];
  outParentUser(value: any) {
    var userone: any = this.users.find((item) => item.id === value.id);
    userone.name = value.name;
  }
}
