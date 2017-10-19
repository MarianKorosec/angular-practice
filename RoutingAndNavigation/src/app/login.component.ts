import { Component }   from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { AuthService } from './auth.service';

@Component({
  template: `
    <h2>LOGIN</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()"  *ngIf="!authService.isLoggedIn">Einloggen</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Ausloggen</button>
    </p>`
})
export class LoginComponent {
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) {
    this.setMessage();
  }

  setMessage() {
    this.message = (this.authService.isLoggedIn ? 'eingeloggt' : 'ausgeloggt');
  }

  login() {
    this.message = 'Sie werden eingeloggt ...';

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/admin';

        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };

        this.router.navigate([redirect], navigationExtras);
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
