import { HeroCacheService } from './hero-cache.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'hero-bio',
  template: `
  <h4>{{hero.name}}</h4>
  <ng-content></ng-content>
  <textarea cols="25" [(ngModel)]="hero.description"></textarea>
  `,
  providers: [ HeroCacheService ]
})

export class HeroBioComponent implements OnInit {
  @Input() heroId: number;

  constructor(private heroChache: HeroCacheService) { }

  ngOnInit() { this.heroChache.fetchCachedHero(this.heroId); }

  get hero() { return this.heroChache.hero; }
}
