import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { VillainsListComponent } from './villians/villians-list.component';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [
    VillainsListComponent
  ],
  exports: []
})
export class HierarchicalFundamentalModule { }
