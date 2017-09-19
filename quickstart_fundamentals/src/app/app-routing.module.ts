import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'contact', pathMatch: 'full' },
  { path: 'crisis', loadChildren: 'app/NgModuleFundamental/crisis/crisis.module#CrisisModule' },
  { path: 'heroes', loadChildren: 'app/NgModuleFundamental/hero/hero.module#HeroModule' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
