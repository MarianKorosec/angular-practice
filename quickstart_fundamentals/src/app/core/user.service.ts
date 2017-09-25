import { LoggerService } from './logger.service';
import { Injectable, Optional } from '@angular/core';

let nextId = 1;

export class User {
  constructor(public name: string,
              public isAuthorized = false) { }
}

export class UserServiceConfig {
  userName = 'Captain America';
}

let max = new User('Max Mustermann', true);
let thomas = new User('Thomas Test', false);

@Injectable()
export class UserService {
  id = nextId++;
  private _userName= 'Ironman';

  constructor(@Optional() config: UserServiceConfig) {
    if (config) { this._userName = config.userName; }
  }

  get userName() {
    const suffix = this.id > 1 ? `times ${this.id}` : '';
    return this._userName + suffix;
  }
}

@Injectable()
export class DIUserService {
  user = thomas;

  getNewUser() {
    return this.user = this.user === thomas ? max : thomas;
  }
}

@Injectable()
export class DiActionUserService {
  getUserById(userId: number): any {
    return {name: 'Professor X', role: 'Admin'};
  }
}

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
