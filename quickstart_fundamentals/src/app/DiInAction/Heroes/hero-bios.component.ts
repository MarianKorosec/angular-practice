import { Component } from '@angular/core';

import { HeroService } from './hero.service';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'hero-bios',
  template: `
  <hero-bio [heroId]="1"></hero-bio>
  <hero-bio [heroId]="2"></hero-bio>
  <hero-bio [heroId]="3"></hero-bio>
  `,
  providers: [ HeroService ]
})

export class HeroBiosComponent {
  constructor(logger: LoggerService) {
    logger.logInfo('Creating HeroBiosComponent');
  }
}

@Component({
  selector: 'hero-bios-and-contacts',
  template: `
  <hero-bio [heroId]="1"> <hero-contact></hero-contact> </hero-bio>
  <hero-bio [heroId]="2"> <hero-contact></hero-contact> </hero-bio>
  <hero-bio [heroId]="3"> <hero-contact></hero-contact> </hero-bio>
  `,
  providers: [ HeroService ]
})
export class HeroBiosAndContactsComponent {
  constructor(logger: LoggerService) {
    logger.logInfo('Creating HeroBiosAndContactsComponent');
  }
}
