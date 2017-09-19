import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { HeroBirthdayComponent } from './hero-birthday1.component';
import { PowerBoosterComponent } from './power-booster.component';
import { PowerBoosterCalculatorComponent } from './power-booster-calculator.component';
import { FlyingHeroesComponent, FlyingHeroesImpureComponent } from './flying-heroes.component';
import { HeroAsyncMessageComponent } from './hero-async-message.component';
import { HeroListComponent } from './hero-list.component';

import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe, FlyingHeroesImpurePipe } from './flying-heroes.pipe';
import { FetchJsonPipe } from './fetch-json.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    HeroBirthdayComponent,
    PowerBoosterComponent,
    PowerBoosterCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    HeroAsyncMessageComponent,
    HeroListComponent,

    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FetchJsonPipe,
  ],
  exports: [
    HeroBirthdayComponent,
    PowerBoosterComponent,
    PowerBoosterCalculatorComponent,
    FlyingHeroesComponent,
    FlyingHeroesImpureComponent,
    HeroAsyncMessageComponent,
    HeroListComponent,
  ]
})
export class PipesFundamentalModule { }
