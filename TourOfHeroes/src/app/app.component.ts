import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Übersicht</a>
    <a routerLink="/heroes" routerLinkActive="active">Helden</a>
  </nav>
  <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  title = 'Heldentour';
}
