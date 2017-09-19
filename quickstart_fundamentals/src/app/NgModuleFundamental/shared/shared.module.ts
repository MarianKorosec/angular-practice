import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HighlightDirective, TitleHighlighDirective } from './highlight.directive';

import { AwesomePipe } from './awesome.pipe';

@NgModule({
  imports: [ CommonModule ],
  declarations: [ HighlightDirective, TitleHighlighDirective, AwesomePipe ],
  exports: [
    HighlightDirective,
    TitleHighlighDirective,
    AwesomePipe,
    CommonModule,
    FormsModule
  ],
})
export class SharedModule { }
