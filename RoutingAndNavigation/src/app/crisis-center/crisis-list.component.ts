import { Component } from '@angular/core';
// import { ActivatedRoute, ParamMap } from '@angular/router';

// import { Crisis, CrisisService } from './crisis.service';
// import { Observable } from 'rxjs/observable';

@Component({
  template: `
  <h2>Crisis Center</h2>
  <p>Get your crisis here</p>
  <!-- <ul class="items">
    <li *ngFor="let crisis of crises$ | async"
      [class.selected]="crisis.id === selectedId">
      <a [routerLink]="[crisis.id]">
        <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
      </a>
    </li>
  </ul>

  <router-outlet></router-outlet> -->
  `
})

export class CrisisListComponent {
  // crises$: Observable<Crisis[]>;
  // selectedId: number;

  // constructor(
  //   private service: CrisisService,
  //   private route: ActivatedRoute
  // ) { }

  // ngOnInit() {
  //   this.crises$ = this.route.paramMap
  //       .switchMap((params: ParamMap) => {
  //         this.selectedId = +params.get('id');
  //         return this.service.getCrises();
  //       });
  // }
}
