import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Rx';

import { HeroTaxReturn } from './hero-tax-return';
import { HeroTax } from './../../core/hero';

@Injectable()
export class TaxHeroService {
  heroes: HeroTax[] = [
    { id: 1, name: 'The Hulk', tid: '123-456-7890'},
    { id: 2, name: 'Thor', tid: '098-765-4321'}
  ];

  heroTaxReturns: HeroTaxReturn[] = [
    new HeroTaxReturn(10, this.heroes[0], 69000),
    new HeroTaxReturn(20, this.heroes[1], 666666)
  ];

  getHeroes(): Observable<HeroTax[]> {
    return new Observable<HeroTax[]>((observer: Observer<HeroTax[]>) => {
      observer.next(this.heroes);
      observer.complete();
    });
  }

  getTaxReturn(hero: HeroTax): Observable<HeroTaxReturn[]> {
    return new Observable<HeroTaxReturn>((observer: Observer<HeroTaxReturn>) => {
      const htr = this.heroTaxReturns.find(t => t.hero.id === hero.id);
      observer.next(htr || new HeroTaxReturn(0, hero));
      observer.complete();
    });
  }

  saveTaxReturn(heroTaxReturn: HeroTaxReturn): Observable<HeroTaxReturn> {
    return new Observable<HeroTaxReturn>((observer: Observer<HeroTaxReturn>) => {
      const htr = this.heroTaxReturns.find(t => t.id === heroTaxReturn.id);
      if (htr) {
        heroTaxReturn = Object.assign(htr, heroTaxReturn);
      } else {
        this.heroTaxReturns.push(heroTaxReturn);
      }
      observer.next(heroTaxReturn);
      observer.complete();
    })
  }
}
