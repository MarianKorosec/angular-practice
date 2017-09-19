import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { Heroes } from './hero.service';

@Component({
  selector: 'hero-list-enter-leave',
  template: `
  <ul>
    <li *ngFor="let hero of heroes"
        [@flyInOut]="'in'">
      {{hero.name}}
    </li>
  </ul>
  `,
  styleUrls: ['./hero-list.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [  // alias: ':enter'
        style({transform: 'translateX(-100%)'}),
        animate(100)
      ]),
      transition('* => void', [  // alias: ':leave'
        animate(100, style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})
export class HeroListEnterLeaveComponent {
  @Input() heroes: Heroes;
}
