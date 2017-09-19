import { Injectable } from '@angular/core';

export class Crisis {
  constructor(public id: number, public name: string) {  }
}

const CRISIS: Crisis[] = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Magneto trying to call all non-mutants'),
  new Crisis(3, 'Loki about to conquer Earth'),
  new Crisis(4, 'Ultron is hungry for planets'),
];

const FETCH_LATENCY = 500;

@Injectable()
export class CrisisService {

  getCrises() {
    return new Promise<Crisis[]>(resolve => {
      setTimeout(() => { resolve(CRISIS); }, FETCH_LATENCY);
    });
  }

  getCrisis(id: number | string) {
    return this.getCrises()
    .then(crises => crises.find(crisis => crisis.id === +id));
  }
}
