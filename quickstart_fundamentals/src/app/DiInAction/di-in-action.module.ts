import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroesBaseComponent, SortedHeroesComponent } from './Heroes/sorted-heroes.component';
import { HeroContactComponent } from './Heroes/hero-contact.component';
import { HeroBioComponent } from './Heroes/hero-bio.component';
import { HeroBiosAndContactsComponent, HeroBiosComponent } from './Heroes/hero-bios.component';
import { HeroOfTheMonthComponent } from './Heroes/hero-of-the-month.component';

import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [ CommonModule, FormsModule, HttpModule ],
  declarations: [
    HeroesBaseComponent,
    HeroBioComponent,
    HeroContactComponent,
    HeroBiosComponent,
    HeroBiosAndContactsComponent,
    HeroOfTheMonthComponent,
    SortedHeroesComponent,

    HighlightDirective
  ],
  exports: [
    HeroBiosComponent,
    HeroBiosAndContactsComponent,
    HeroOfTheMonthComponent,
    HeroesBaseComponent,
    SortedHeroesComponent,

    HighlightDirective
  ],
  providers: [],
})
export class DiInActionModule { }
