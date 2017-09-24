import { Injectable } from '@angular/core';

import { HeroTaxReturn } from './hero-tax-return';

import { HeroesTaxService } from './heroes-tax.service';

@Injectable()
export class HeroTaxReturnService {
  private currentTaxReturn: HeroTaxReturn;
  private originalTaxReturn: HeroTaxReturn;

  constructor(private heroesTaxService: HeroesTaxService) {  }

  set taxReturn(htr: HeroTaxReturn) {
    this.originalTaxReturn = htr;
    this.currentTaxReturn = htr.clone();
  }

  get taxReturn (): HeroTaxReturn {
    return this.currentTaxReturn;
  }

  restoreTaxReturn() {
    this.taxReturn = this.originalTaxReturn;
  }

  saveTaxReturn() {
    this.taxReturn = this.currentTaxReturn;
    this.heroesTaxService.saveTaxReturn(this.currentTaxReturn).subscribe();
  }
}
