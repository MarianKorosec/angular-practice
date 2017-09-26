import { Component, Host, Optional } from '@angular/core';

import { HeroCacheService } from './hero-cache.service';
import { LoggerService } from './../logger.service';

@Component({
  selector: 'hero-contact',
  template: `
  <div>Phone #: {{phoneNumber}}
  <span *ngIf="hasLogger">!!!</span></div>
  `
})
export class HeroContactComponent {
  hasLogger = false;

  constructor(
    @Host()
    private heroCache: HeroCacheService,

    @Host()
    @Optional()
    private logger: LoggerService
  ) {
    if( logger ) {
      this.hasLogger = true;
      logger.logInfo('HeroContactComponent can log!');
    }
  }

  get phoneNumber() { return this.heroCache.hero.phone; }
}
