import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { DirectivesFundamentalModule } from './DirectivesFundamental/directives-fundamental.module';
import { PipesFundamentalModule } from './PipesFundamental/pipes-fundamental.module';
import { AnimationsFundamentalModule } from './AnimationsFundamental/animations-fundamental.module';
import { UserInputFundamentalModule } from './UserInputFundamental/user-input-fundamental.module';
import { FormsFundamentalModule } from './FormsFundamental/forms-fundamental.module';
import { ContactModule } from './NgModuleFundamental/contact/contact.module';
import { DIFundamentalModule } from './DIFundamental/di-fundamental.module';
import { HierarchicalFundamentalModule } from './HierarchicalDependencyFundamental/hierarchical-fundamental.module';

import { AppComponent }  from './app.component';
import { DiInActionModule } from './DiInAction/di-in-action.module';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule.forRoot({userName: 'Professor X'}),
    AppRoutingModule,
    DirectivesFundamentalModule,
    PipesFundamentalModule,
    AnimationsFundamentalModule,
    UserInputFundamentalModule,
    FormsFundamentalModule,
    ContactModule,
    DIFundamentalModule,
    HierarchicalFundamentalModule,
    DiInActionModule
  ],
  declarations: [ AppComponent  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
