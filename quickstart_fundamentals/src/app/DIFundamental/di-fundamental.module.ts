import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProviderModule } from './providers.module';

import { CarComponent } from './car/car.component';
import { HeroListComponent } from './heroes/hero-list.component';
import { HeroesComponent } from './heroes/heroes.component';
import { TestComponent } from './test.component';
import { InjectorComponent } from './injectors.component';

@NgModule({
  imports: [ CommonModule, ProviderModule ],
  declarations: [
    CarComponent,
    HeroListComponent,
    HeroesComponent,
    TestComponent,
    InjectorComponent
  ],
  exports: [
    ProviderModule,
    CarComponent,
    HeroesComponent,
    TestComponent,
    InjectorComponent
  ]
})
export class DIFundamentalModule { }
