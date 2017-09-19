import { Component } from '@angular/core';

import { Heroes } from './hero.service';

@Component({
  selector: 'hero-team-builder',
  templateUrl: './hero-team-builder.component.html',
  styles: [`
    .buttons {
      text-align: center;
    }
    button {
      padding: 1.5em 3em;
    }
    .columns {
      display: flex;
      flex-direction: row;
    }
    .column {
      flex: 1;
      padding: 10px;
    }
    .column p {
      min-height: 6em;
    }
  `],
  providers: [Heroes]
})
export class HeroTeamBuilderComponent {
  constructor(private heroes: Heroes) { }
}
