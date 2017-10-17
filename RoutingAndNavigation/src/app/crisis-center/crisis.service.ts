import { Injectable } from '@angular/core';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Crisis(1, 'Ultron will die Erde essen'),
  new Crisis(2, 'Magneto mag mal wieder die Menschen auslöschen'),
  new Crisis(3, 'Loki hat wieder langweile...'),
  new Crisis(4, 'Hulk wütend'),
];


@Injectable()
export class CrisisService {
  static nextCrisisID = 100;
  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  getCrises() { return this.crises$; }

  getCrisis(id: number | string) {
    return this.getCrises()
      .map(crises => crises.find(crisis => crisis.id === +id));
  }

  addCrisis(name: string) {
    name = name.trim();
    if (name) {
      let crisis = new Crisis(CrisisService.nextCrisisID++, name);
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}
