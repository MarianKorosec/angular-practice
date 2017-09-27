import { Component, OnInit } from '@angular/core';

import { ActionHero } from '../../core/hero';

import { HeroService } from '../Services/hero.service';

@Component({
  selector: 'unsorted-heroes',
  template: `
  <div *ngFor="let hero of heroes">{{hero.name}}</div>
  `,
  providers: [ HeroService ]
})

export class HeroesBaseComponent implements OnInit {
  heroes: Array<ActionHero>;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroes = this.heroService.getAllHeroes();
    this.afterGetHeroes();
  }

  protected afterGetHeroes() { }
}

@Component({
  selector: 'sorted-heroes',
  template: `
  <div *ngFor="let hero of heroes">{{hero.name}}</div>
  `,
  providers: [ HeroService ]
})

export class SortedHeroesComponent extends HeroesBaseComponent {
  constructor(heroService: HeroService) {
    super(heroService);
  }

  protected afterGetHeroes() {
    this.heroes = this.heroes.sort((h1, h2) => {
      return h1.name < h2.name ? -1 :
        (h1.name > h2.name ? 1 : 0);
    });
  }
}
