import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroListBasicComponent } from './hero-list-basic.component';
import { HeroListCombinedTransitionComponent } from './hero-list-combined-transitions.component';
import { HeroListTwowayComponent } from './hero-list-twoway.component';
import { HeroListInlineStylesComponent } from './hero-list-inline-styles.component';
import { HeroListEnterLeaveComponent } from './hero-list-enter-leave.component';
import { HeroListEnterLeaveStatesComponent } from './hero-list-enter-leave-states.component';
import { HeroListTimingsComponent } from './hero-list-timings.component';
import { HeroListAutoComponent } from './hero-list-auto.component';
import { HeroListMultistepComponent } from './hero-list-multistep.component';
import { HeroListGroupsComponent } from './hero-list-groups.component';
import { HeroTeamBuilderComponent } from './hero-team-builder.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule ],
  declarations: [
    HeroListBasicComponent,
    HeroListCombinedTransitionComponent,
    HeroListTwowayComponent,
    HeroListInlineStylesComponent,
    HeroListEnterLeaveComponent,
    HeroListEnterLeaveStatesComponent,
    HeroListTimingsComponent,
    HeroListAutoComponent,
    HeroListMultistepComponent,
    HeroListGroupsComponent,
    HeroTeamBuilderComponent
  ],
  exports: [
    HeroListBasicComponent,
    HeroListCombinedTransitionComponent,
    HeroListTwowayComponent,
    HeroListInlineStylesComponent,
    HeroListEnterLeaveComponent,
    HeroListEnterLeaveStatesComponent,
    HeroListTimingsComponent,
    HeroListAutoComponent,
    HeroListMultistepComponent,
    HeroListGroupsComponent,
    HeroTeamBuilderComponent
  ]
})
export class AnimationsFundamentalModule { }
