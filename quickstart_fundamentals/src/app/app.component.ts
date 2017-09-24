import { Component, Inject } from '@angular/core';

import { QuestionService } from './FormsFundamental/question.service';

import { Hero, heroes } from './core/hero';
import { Logger } from './core/logger.service';
import { DIUserService } from './core/user.service';

import { APP_CONFIG, AppConfig } from './DIFundamental/app.config';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  providers: [ QuestionService, Logger ]
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

  constructor(service: QuestionService,
              @Inject(APP_CONFIG) config: AppConfig,
              private userService: DIUserService) {
    this.questions = service.getQuestions();
    this.diTitle = config.title;
  }

  trackById(index: number, hero: Hero): number { return hero.id; }

  get user() { return this.userService.user; }
  get isAuthorized() { return this.user.isAuthorized; }
  nextUser() { this.userService.getNewUser(); }

  get userInfo() {
    return `Current user, ${this.user.name} is ${this.user.isAuthorized ? '' : 'not'} authorized.`;
  }
}
