import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

export class Hero {
  constructor(public id: number, public name: string) { }
}

const HEROES = [
  new Hero(11, 'Professor X'),
  new Hero(12, 'Ironman'),
  new Hero(13, 'Thor'),
  new Hero(14, 'Spiderman'),
  new Hero(15, 'Black Widow'),
  new Hero(16, 'Hulk'),
  new Hero(17, 'Hawk Eye'),
  new Hero(18, 'Captain America'),
  new Hero(19, 'Ant Man'),
  new Hero(20, 'Magneto')
];

@Injectable()
export class HeroService {
  getHeroes() { return Observable.of(HEROES); }

  getHero(id: number | string) {
    return this.getHeroes()
      .map(heroes => heroes.find(hero => hero.id === +id));
  }
}
