import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { heroSwitchComponents } from './hero-switch.component';

import { HighlightDirective } from './highlight.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  imports: [ FormsModule ],
  declarations: [
    heroSwitchComponents,

    HighlightDirective,
    UnlessDirective
  ],
  exports: [
    heroSwitchComponents,
    HighlightDirective,
    UnlessDirective
  ]
})
export class DirectivesFundamentalModule { }
