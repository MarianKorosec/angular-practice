import { NgModule } from '@angular/core';

import {
    AlexComponent,
    AliceComponent,
    BarryComponent,
    BethComponent,
    BobComponent,
    CarolComponent,
    CathyComponent,
    ChrisComponent,
    CraigComponent,
    ParentFinderComponent,
} from './parent-finder.component';

const a_components = [ AlexComponent, AliceComponent ];

const b_components = [ BarryComponent, BethComponent, BobComponent ];

const c_components = [
  CathyComponent,
  CraigComponent,
  CarolComponent,
  ChrisComponent
];

@NgModule({
  imports: [  ],
  declarations: [
    ParentFinderComponent,
    a_components,
    b_components,
    c_components
  ],
  exports: [ ParentFinderComponent ],
})
export class ParentFinderModule { }
