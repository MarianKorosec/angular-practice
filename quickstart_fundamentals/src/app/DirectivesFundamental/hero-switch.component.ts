import { Component, Input } from '@angular/core';
import { Hero } from '../core/hero';

@Component({
  selector: 'epic-hero',
  template: `Wow. You like {{hero.name}}. What an epic hero....alomst as epic as you.`
})
export class EpicHeroComponent {
  @Input() hero: Hero;
}

@Component({
  selector: 'angry-hero',
  template: `You like {{hero.name}}? He's cool, but also angry all the time. Are you angry too?`
})
export class AngryHeroComponent {
  @Input() hero: Hero;
}

@Component({
  selector: 'amused-hero',
  template: `{{hero.name}} is a really funny hero isn't he? He is amused by everything.`
})
export class AmusedHeroComponent {
  @Input() hero: Hero;
}

@Component({
  selector: 'confused-hero',
  template: `Are you as confused as {{hero.name}}?`
})
export class ConfusedHeroComponent {
  @Input() hero: Hero;
}


@Component({
  selector: 'unknown-hero',
  template: `{{message}}`
})
export class UnkownHeroComponent {
  @Input() hero: Hero;
  get message() {
    return this.hero && this.hero.name ?
    `${this.hero.name} is not a hero. Dumbass.` :
    `I feel you, choosing a favorite thing mostly sucks, but just do it god dammit...`;
  }
}

export const heroSwitchComponents = [
  EpicHeroComponent,
  AngryHeroComponent,
  AmusedHeroComponent,
  ConfusedHeroComponent,
  UnkownHeroComponent
];
