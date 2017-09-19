import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HeroFormComponent } from './hero-form.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroReactiveListComponent } from './hero-reactive-list.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { HeroService } from './hero.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    HeroFormComponent,
    HeroDetailComponent,
    HeroReactiveListComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ],
  providers: [
    HeroService
  ],
  exports: [
    FormsModule,
    HeroFormComponent,
    HeroDetailComponent,
    HeroReactiveListComponent,
    DynamicFormComponent,
    DynamicFormQuestionComponent
  ]
})
export class FormsFundamentalModule { }
