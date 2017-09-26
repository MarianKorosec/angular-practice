import { Injectable } from '@angular/core';

import { LoggerService } from './logger.service';
import { DiActionUserService } from './user.service';

@Injectable()
export class UserContextService {
  name: string;
  role: string;
  loggedInSince: Date;

  constructor(
    private userService: DiActionUserService,
    private loggerService: LoggerService) {
      this.loggedInSince = new Date();
    }

  loadUser(userId: number) {
    let user = this.userService.getUserById(userId);
    this.name = user.name;
    this.role = user.role;

    this.loggerService.logDebug('loaded User');
  }
}
