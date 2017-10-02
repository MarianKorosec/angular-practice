import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';

import { ReactiveHero, reactiveHeroes } from '../core/hero';

@Injectable()
export class HeroService {
  delayMs = 500;

  getHeroes(): Observable<ReactiveHero[]> {
    return of(reactiveHeroes).delay(this.delayMs);
  }

  updateHero(reactiveHero: ReactiveHero): Observable<ReactiveHero> {
    const oldHero = reactiveHeroes.find(h => h.id === reactiveHero.id);
    const newHero = Object.assign(oldHero, reactiveHero);
    return of(newHero).delay(this.delayMs);
  }
}
