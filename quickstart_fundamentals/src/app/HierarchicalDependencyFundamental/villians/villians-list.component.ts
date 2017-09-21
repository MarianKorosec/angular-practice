import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { VillainsService, Villain } from './villians.service';

@Component({
  selector: 'villains-list',
  templateUrl: 'villains-list.component.html',
  providers: [ VillainsService ]
})

export class VillainsListComponent {
  villains: Observable<Villain[]>;

  constructor(private villainsService: VillainsService) {
    this.villains = this.villainsService.getVillains();
  }
}
