import { Injectable } from '@angular/core';

@Injectable()
export class DiActionUserService {
  getUserById(userId: number): any {
    return {name: 'Professor X', role: 'Admin'};
  }
}
