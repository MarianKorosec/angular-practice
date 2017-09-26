import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroesBaseComponent } from './Heroes/sorted-heroes.component';
import { HeroContactComponent } from './Heroes/heroe-contact.component';
import { HeroBioComponent } from './Heroes/hero-bio.component';
import { HeroBiosAndContactsComponent, HeroBiosComponent } from './Heroes/hero-bios.component';


@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    HeroesBaseComponent,
    HeroBioComponent,
    HeroContactComponent,
    HeroBiosComponent,
    HeroBiosAndContactsComponent
  ],
  exports: [ HeroBiosComponent, HeroBiosAndContactsComponent ],
  providers: [],
})
export class DiInActionModule { }
