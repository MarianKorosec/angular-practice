import { Injectable } from '@angular/core';

import { ActionHero } from '../../core/hero';

@Injectable()
export class HeroService {
  private heroes: Array<ActionHero> = [
    new ActionHero(1, 'Professor X', 'Telepathic Genius', '999-999-9999'),
    new ActionHero(2, 'Ironman', 'Rich, Smart, Funny', '123-456-7890'),
    new ActionHero(3, 'Bruce Banner/The Hulk', `Just don't make him angry!`, '444-555-6789'),
  ];

  getHeroById(id: number): ActionHero {
    return this.heroes.find(hero => hero.id === id);
  }

  getAllHeroes(): Array<ActionHero> {
    return this.heroes;
  }
}
