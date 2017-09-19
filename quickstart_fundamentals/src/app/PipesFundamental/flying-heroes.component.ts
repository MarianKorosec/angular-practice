import { Component } from '@angular/core';
import { HEROES } from '../core/hero';

@Component({
  selector: 'flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styles: ['#flyers, #all {font-stly:italic}']
})
export class FlyingHeroesComponent {
  title = 'Flying Heroes (pure pipe)';
  heroes: any[] = [];
  canFly = true;
  mutateArray = true;

  constructor () { this.reset(); }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    let hero = { name, canFly: this.canFly };
    if (!this.mutateArray) {
      this.heroes.push(hero);
    } else {
      this.heroes = this.heroes.concat(hero);
    }
  }

  reset() {
    this.heroes = HEROES.slice();
  }
}

@Component({
  selector: 'flying-heroes-impure',
  templateUrl: './flying-heroes-impure.component.html',
  styles: ['.flyers, .all {font-stly:italic}']
})
export class FlyingHeroesImpureComponent extends FlyingHeroesComponent {
  title = 'Flying Heroes (impure pipe)';
}
