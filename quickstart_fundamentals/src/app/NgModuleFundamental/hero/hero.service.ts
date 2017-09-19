import { Injectable } from '@angular/core';

export class Hero {
  constructor(public id: number, public name: string) {  }
}

const HEROES: Hero[] = [
  new Hero(11, 'Professor X'),
  new Hero(12, 'Wolverine'),
  new Hero(13, 'The Hulk'),
  new Hero(14, 'Ironman'),
  new Hero(15, 'Captain America'),
  new Hero(16, 'Thor'),
  new Hero(17, 'Spiderman')
];

const FETCH_LATENCY = 500;

@Injectable()
export class HeroService {

  getHeroes() {
    return new Promise<Hero[]>(resolve => {
      setTimeout(() => { resolve(HEROES); }, FETCH_LATENCY);
    });
  }

  getHero(id: number | string) {
    return this.getHeroes()
    .then(heroes => heroes.find(hero => hero.id === +id));
  }
}
