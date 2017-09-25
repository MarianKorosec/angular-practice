import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroTaxReturnComponent } from './heroTax/hero-tax-return.component';
import { HeroesListComponent } from './heroTax/heroes-list.component';
import { VillainsListComponent } from './villians/villians-list.component';

import { carServices, carsComponents } from './car/car.component';
import { HeroesTaxService } from './heroTax/heroes-tax.service';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    carsComponents,
    HeroTaxReturnComponent,
    HeroesListComponent,
    VillainsListComponent
  ],
  exports: [
    carsComponents,
    HeroesListComponent,
    VillainsListComponent
  ],
  providers: [ HeroesTaxService, carServices ]
})
export class HierarchicalFundamentalModule { }
