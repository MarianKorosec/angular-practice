import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroTaxReturnComponent } from './heroTax/hero-tax-return.component';
import { VillainsListComponent } from './villians/villians-list.component';

import { HeroesTaxService } from './heroTax/heroes-tax.service';
import { HeroesListComponent } from './heroTax/heroes-list.component';


@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    HeroTaxReturnComponent,
    HeroesListComponent,
    VillainsListComponent
  ],
  exports: [
    HeroesListComponent,
    VillainsListComponent
  ],
  providers: [ HeroesTaxService ]
})
export class HierarchicalFundamentalModule { }
