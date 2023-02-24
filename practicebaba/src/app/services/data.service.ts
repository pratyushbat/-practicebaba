import { Injectable } from '@angular/core';
import { of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}
  getData() {
    return of('Web of taslking').pipe(delay(10000));
  }
}
