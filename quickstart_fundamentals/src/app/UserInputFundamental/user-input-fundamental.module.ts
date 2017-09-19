import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClickMeComponent } from './click-me.component';
import { KeyUp1Component } from './keyup.component';
import { LoopBackComponent } from './loop-back.component';
import { KeyUp2Component } from './keyup.component';
import { KeyUp3Component } from './keyup.component';
import { KeyUp4Component } from './keyup.component';
import { LittleTourComponent } from './little-tour.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: [
    ClickMeComponent,
    KeyUp1Component,
    LoopBackComponent,
    KeyUp2Component,
    KeyUp3Component,
    KeyUp4Component,
    LittleTourComponent
  ],
  exports: [
    ClickMeComponent,
    KeyUp1Component,
    LoopBackComponent,
    KeyUp2Component,
    KeyUp3Component,
    KeyUp4Component,
    LittleTourComponent
  ]
})
export class UserInputFundamentalModule { }
