import { Component, Inject, InjectionToken } from '@angular/core';

import { ActionHero } from '../../core/hero';

import { HeroService } from './../Services/hero.service';
import { LoggerService } from '../Services/logger.service';
import { MinimalLogger } from '../Services/minimal-logger.service';
import { DateLoggerService } from '../Services/date-logger.service';
import { runnersUpFactory, RUNNERS_UP } from './runners-up';

export const TITLE = new InjectionToken<string>('title');

const someHero = new ActionHero(42, 'Thor', `He's the son of Odin, ruler of Asgaard and a f'cking god!`, '666-666-6666');

@Component({
  selector: 'hero-of-the-month',
  templateUrl: './hero-of-the-month.component.html',
  providers: [
    { provide: ActionHero, useValue: someHero },
    { provide: TITLE, useValue: 'Hero of the Month' },
    { provide: HeroService, useClass: HeroService },
    { provide: LoggerService, useClass: DateLoggerService },
    { provide: MinimalLogger, useExisting: LoggerService },
    { provide: RUNNERS_UP, useFactory: runnersUpFactory(2), deps: [ActionHero, HeroService] }
  ]
})

export class HeroOfTheMonthComponent {
  logs: string[] = [];

  constructor(
    logger: MinimalLogger,
    public heroOfTheMonth: ActionHero,
    @Inject(TITLE) public title: string,
    @Inject(RUNNERS_UP) public runnersUp: string) {
      this.logs = logger.logs;
      logger.logInfo('starting up');
  }
}
