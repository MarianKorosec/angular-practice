import { Component } from '@angular/core';

import { DIHero } from '../../core/hero';

import { HeroService } from './hero.service';

@Component({
  selector: 'hero-list',
  template: `
  <div *ngFor="let hero of heroes">
    {{hero.id}} - {{hero.name}}
    ({{hero.isSecret ? 'secret' : 'public'}})
  </div>
  `
})

export class HeroListComponent {
  heroes: DIHero[];

  constructor(heroService: HeroService) {
    this.heroes = heroService.getHeroes();
  }
}
