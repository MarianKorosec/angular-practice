
import { Component, Inject } from '@angular/core';

import { QuestionService } from './FormsFundamental/question.service';

import { Hero, heroes } from './core/hero';
import { Logger } from './core/logger.service';
import { DIUserService } from './core/user.service';

import { APP_CONFIG, AppConfig } from './DIFundamental/app.config';

import { LoggerService } from './DiInAction/Services/logger.service';
import { DiActionUserService } from './DiInAction/Services/user.service';
import { UserContextService } from './DiInAction/Services/user-context.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ QuestionService, Logger, LoggerService, DiActionUserService, UserContextService ]
})
export class AppComponent  {
  // Tour of Heroes
  title = 'Tour of Heroes';
  heroes = heroes;
  favHero = this.heroes[0];

  // Structural Directives Fundamental
  condition = false;
  logs: string[] = [];
  showAngry = true;
  status = 'ready';

  // Attribute Directives Fundamental
  color: string;

  // Forms Fundamental
  questions: any[];

  // NgModule Fundamental
  subtitle = '(v3)';

  // DI Fundamental
  diTitle: string;

  // Hierarchicak Injection Fundamental
  showCars = true;
  showHeroes = true;
  showVillains = true;

  // DI in Action
  private userId = 1;

  constructor(service: QuestionService,
              @Inject(APP_CONFIG) config: AppConfig,
              private userService: DIUserService,
              public userContext: UserContextService,
              logger: LoggerService
            ) {
    this.questions = service.getQuestions();
    this.diTitle = config.title;
    userContext.loadUser(this.userId);
    logger.logInfo('AppComponent initialized');
  }

  trackById(index: number, hero: Hero): number { return hero.id; }

  get user() { return this.userService.user; }
  get isAuthorized() { return this.user.isAuthorized; }
  nextUser() { this.userService.getNewUser(); }

  get userInfo() {
    return `Current user, ${this.user.name} is ${this.user.isAuthorized ? '' : 'not'} authorized.`;
  }
}
