import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { from, Observable } from 'rxjs';

@Component({
  selector: 'dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnChanges {
  @Input()
  userId: string = '';

  @Input()
  username: string = '';

  public user: Record<string, any>;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // for (let propName in changes) {
    //   console.log(changes[propName]);
    //   const { firstChange, currentValue, previousValue } = changes[propName];
    //   console.log(firstChange, currentValue, previousValue);
    // }

    const { currentValue, previousValue } = changes['userId'];
    if (currentValue && previousValue !== currentValue) {
      this.setUserDetails(currentValue);
    }

    //    changes[propName];
  }

  private setUserDetails(value: number) {
    this.http(value).subscribe((res) => {
      this.user = res;
      console.log(this.user);
    });
  }

  private http(id: any): Observable<any> {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    return from(fetch(url).then((res) => res.json()));
  }
}
