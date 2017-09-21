import { Injectable } from '@angular/core';
import { HeroTaxReturn } from './hero-tax-return';

@Injectable()
export class HeroTaxReturnService {
  private currentTaxReturn: HeroTaxReturn;
  private originalTaxReturn: HeroTaxReturn;
}
