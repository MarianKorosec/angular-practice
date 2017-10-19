import { Component, HostBinding, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { Crisis } from './crisis.service';
import { DialogService } from '../dialog.service';

import { slideInDownAnimation } from './../animations';

@Component({
  template: `
    <div *ngIf="crisis">
      <h3>"{{ editName }}"</h3>
      <div>
        <label>Id: </label>{{ crisis.id }}
      </div>
      <div>
        <label>Name: </label>
        <input [(ngModel)]="editName" placeholder="name"/>
      </div>
      <p>
      <button (click)="save()">Speichern</button>
      <button (click)="cancel()">Abbrechen</button>
      </p>
    </div>
  `,
  styles: [ 'input { width: 20em }' ],
  animations: [ slideInDownAnimation ]
})
export class CrisisDetailComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  crisis: Crisis;
  editName: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialogService: DialogService
  ) { }

  ngOnInit() {
    this.route.data
      .subscribe((data: { crisis: Crisis }) => {
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });
  }

  cancel() {
    this.gotoCrises();
  }

  save() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

  gotoCrises() {
    let crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | boolean {
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    return this.dialogService.confirm('Änderungen verwerfen?');
  }
}
