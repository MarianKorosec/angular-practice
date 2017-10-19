import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeroesModule } from './heroes/heroes.module';
import { LoginRoutingModule } from './login-routing.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';
import { PageNotFoundComponent } from './not-found.component';
import { ComposeMessageComponent } from './compose-message.component';
import { LoginComponent } from './login.component';

import { DialogService } from './dialog.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,

    HeroesModule,
    LoginRoutingModule,

    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    LoginComponent
  ],
  providers: [ DialogService ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ' + JSON.stringify(router.config, undefined, 2));
  }
}
