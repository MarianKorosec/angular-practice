import { Component, EventEmitter, Input, Output } from '@angular/core';

import { HeroTaxReturn } from './hero-tax-return';

import { HeroTaxReturnService } from './hero-tax-return.service';

@Component({
  selector: 'hero-tax-return',
  templateUrl: './hero-tax-return.component.html',
  styleUrls: [ './hero-tax-return.component.css' ],
  providers: [ HeroTaxReturnService ]
})

export class HeroTaxReturnComponent {
  message = '';
  @Output() close = new EventEmitter<void>();

  constructor(private heroTaxReturnService: HeroTaxReturnService) { }

  get taxReturn() {
    return this.heroTaxReturnService.taxReturn;
  }

  @Input()
  set taxReturn (htr: HeroTaxReturn) {
    this.heroTaxReturnService.taxReturn = htr;
  }

  onCanceled() {
    this.flashMessage('Canceled');
    this.heroTaxReturnService.restoreTaxReturn();
  }

  onClosed() { this.close.emit(); }

  onSaved() {
    this.flashMessage('Saved');
    this.heroTaxReturnService.saveTaxReturn();
  }

  flashMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 500);
  }
}
