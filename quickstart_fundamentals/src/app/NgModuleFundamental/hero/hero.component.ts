import { Component } from '@angular/core';

import { UserService } from '../../core/user.service';
import { HeroService } from './hero.service';

@Component({
  template: `
  <h2>Heroes of {{userName}}</h2>
  <router-outlet></router-outlet>
  `,
  providers: [ HeroService ]
})
export class HeroComponent {
  userName= '';

  constructor(userService: UserService) {
    this.userName = userService.userName;
  }
}
