import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

import { Crisis, CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {
  constructor(
    private cs: CrisisService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
    let id = route.paramMap.get('id');

    return this.cs.getCrisis(id).take(1).map(crisis => {
      if (crisis) {
        return crisis;
      } else {
        this.router.navigate(['/crisis-center']);
        return null;
      }
    });
  }
}
