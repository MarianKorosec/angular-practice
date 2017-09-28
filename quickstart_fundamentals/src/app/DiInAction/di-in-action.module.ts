import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ParentFinderModule } from './parent-finder.module';

import { HeroesBaseComponent, SortedHeroesComponent } from './Heroes/sorted-heroes.component';
import { HeroContactComponent } from './Heroes/hero-contact.component';
import { HeroBioComponent } from './Heroes/hero-bio.component';
import { HeroBiosAndContactsComponent, HeroBiosComponent } from './Heroes/hero-bios.component';
import { HeroOfTheMonthComponent } from './Heroes/hero-of-the-month.component';

import { HighlightDirective } from './highlight.directive';

const heroDeclarations = [
  HeroesBaseComponent, SortedHeroesComponent,
  HeroBioComponent, HeroBiosComponent, HeroBiosAndContactsComponent,
  HeroContactComponent,
  HeroOfTheMonthComponent
];

const heroExports = [
  HeroesBaseComponent, SortedHeroesComponent,
  HeroBiosComponent, HeroBiosAndContactsComponent,
  HeroOfTheMonthComponent
];

@NgModule({
  imports: [ CommonModule, FormsModule, HttpModule,
    ParentFinderModule
   ],
  declarations: [
    heroDeclarations,

    HighlightDirective
  ],
  exports: [
    ParentFinderModule,

    heroExports,

    HighlightDirective
  ],
  providers: [],
})
export class DiInActionModule { }
