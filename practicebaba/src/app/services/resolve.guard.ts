import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
@Injectable({ providedIn: 'root' })
export class ResolveGuard implements Resolve<string> {
  constructor(private dataSvc: DataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<string> | Promise<string> | string {
    console.log('Called Get Product in resolver...', route);
    return this.dataSvc.getData();
  }
}
