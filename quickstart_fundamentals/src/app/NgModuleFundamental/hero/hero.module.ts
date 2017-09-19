import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HeroRoutingModule } from './hero-routing.module';

import { HeroComponent } from './hero.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroListComponent } from './hero-list.component';

@NgModule({
  imports: [ SharedModule, HeroRoutingModule ],
  declarations: [ HeroComponent, HeroDetailComponent, HeroListComponent ],
})
export class HeroModule { }
