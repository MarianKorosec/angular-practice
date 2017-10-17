import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HeroesModule } from './heroes/heroes.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { CrisisListComponent } from './crisis-center/crisis-list.component';
import { PageNotFoundComponent } from './not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    HeroesModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
