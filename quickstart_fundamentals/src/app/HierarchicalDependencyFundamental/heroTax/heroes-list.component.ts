import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HeroTaxReturn } from './hero-tax-return';
import { HeroTax } from '../../core/hero';

import { HeroesTaxService } from './heroes-tax.service';

@Component({
  selector: 'heroes-list',
  template: `
  <div>
    <h3>Hero Tax Returns</h3>
    <ul>
      <li *ngFor="let hero of heroes | async"
          (click)="showTaxReturn(hero)">{{hero.name}}
      </li>
    </ul>
    <hero-tax-return
      *ngFor="let selected of selectedTaxReturns; let i = index"
      [taxReturn]="selected"
      (close)="closeTaxReturn(i)">
    </hero-tax-return>
  </div>
  `,
  styles: [ 'li {cursor: pointer;}' ]
})

export class HeroesListComponent {
  heroes: Observable<HeroTax[]>;
  selectedTaxReturns: HeroTaxReturn[] = [];

  constructor(private heroesTaxService: HeroesTaxService) {
    this.heroes = heroesTaxService.getHeroes();
  }

  showTaxReturn(hero: HeroTax) {
    this.heroesTaxService.getTaxReturn(hero)
    .subscribe(htr => {
      if (!this.selectedTaxReturns.find(tr => tr.id === htr.id)) {
        this.selectedTaxReturns.push(htr);
      }
    });
  }

  closeTaxReturn(i: number) {
    this.selectedTaxReturns.splice(i, 1);
  }
}
