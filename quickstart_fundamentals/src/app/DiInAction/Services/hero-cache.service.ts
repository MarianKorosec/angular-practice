import { HeroService } from './hero.service';
import { ActionHero } from '../../core/hero';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroCacheService {
  hero: ActionHero;

  constructor(private heroService: HeroService) { }

  fetchCachedHero(id: number) {
    if (!this.hero) {
      this.hero = this.heroService.getHeroById(id);
    }
    return this.hero;
  }
}
