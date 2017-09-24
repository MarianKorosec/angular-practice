import { Injectable } from '@angular/core';

import { of } from 'rxjs/observable/of';

export interface Villain { id: number; name: string; };

@Injectable()
export class VillainsService {
  villains: Villain[] = [
    { id: 1, name: 'Galactus' },
    { id: 2, name: 'Loki' }
  ];

  getVillains() {
    return of(this.villains);
  }
}
