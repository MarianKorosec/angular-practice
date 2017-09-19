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
