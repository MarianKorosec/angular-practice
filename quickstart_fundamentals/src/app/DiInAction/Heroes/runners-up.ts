import { InjectionToken } from '@angular/core';

import { ActionHero } from '../../core/hero';

import { HeroService } from '../Services/hero.service';

export const RUNNERS_UP = new InjectionToken<string>('RunnersUp');

export function runnersUpFactory(take: number) {
  return (winner: ActionHero, heroService: HeroService): string => {
    return heroService
      .getAllHeroes()
      .filter((hero) => hero.name !== winner.name)
      .map(hero => hero.name)
      .slice(0, Math.max(0, take))
      .join(', ');
  };
}
