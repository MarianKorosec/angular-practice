import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/finally';

import { ReactiveHero } from '../core/hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'hero-reactive-list',
    templateUrl: './hero-reactive-list.component.html'
})
export class HeroReactiveListComponent implements OnInit {
  heroes: Observable<ReactiveHero[]>;
  isLoading = false;
  selectedHero: ReactiveHero;

  constructor(private heroService: HeroService) {  }

  ngOnInit() { this.getHeroes(); }

  getHeroes() {
    this.isLoading = true;
    this.heroes = this.heroService.getHeroes()
                    .finally(() => this.isLoading = false);
    this.selectedHero = undefined;
  }

  select(reactiveHero: ReactiveHero) { this.selectedHero = reactiveHero; }
}
