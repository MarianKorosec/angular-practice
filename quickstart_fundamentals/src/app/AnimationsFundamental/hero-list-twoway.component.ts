import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Heroes } from './hero.service';

@Component({
  selector: 'hero-list-twoway',
  template: `
  <ul>
    <li *ngFor="let hero of heroes"
        [@heroState]="hero.state"
        (click)="hero.toggleState()">
      {{hero.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./hero-list.component.css'],
  animations: [
    trigger('heroState', [
      state('inactive', style({
        backgroundColor: '#eee',
        transform: 'scale(1)'
      })),
      state('active', style({
        backgroundColor: '#cfd8dc',
        transform: 'scale(1.1)'
      })),
      transition('active <=> inactive', animate('100ms ease-out'))
    ])
  ]
})
export class HeroListTwowayComponent {
  @Input() heroes: Heroes;
}
