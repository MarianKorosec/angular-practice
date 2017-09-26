import { Component, OnInit } from '@angular/core';

import { HeroService } from './hero.service';

@Component({
  selector: 'unsorted-heroes',
  template: `
  `,
  providers: [HeroService]
})

export class HeroesBaseComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  ngOnInit() { }
}
