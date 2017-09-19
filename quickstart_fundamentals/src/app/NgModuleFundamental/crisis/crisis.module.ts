import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { CrisisRoutingModule } from './crisis-routing.module';

import { CrisisDetailComponent } from './crisis-detail.component';
import { CrisisListComponent } from './crisis-list.component';

import { CrisisService } from './crisis.service';

@NgModule({
  imports: [ SharedModule, CrisisRoutingModule ],
  declarations: [ CrisisDetailComponent, CrisisListComponent ],
  providers: [ CrisisService ],
})
export class CrisisModule { }
