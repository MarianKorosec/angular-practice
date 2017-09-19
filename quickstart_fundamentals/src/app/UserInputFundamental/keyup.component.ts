import { Component } from '@angular/core';

@Component({
  selector: 'keyup1',
  template: `
  <input (keyup)="onKey($event)">
  <p>{{values}}</p>
  `
})
export class KeyUp1Component {
  values = '';

  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

@Component({
  selector: 'keyup2',
  template: `
  <input #box (keyup)="onKey(box.value)">
  <p>{{values}}</p>
  `
})
export class KeyUp2Component {
  values = '';

  onKey(value: string) {
    this.values += value + ' | ';
  }
}

@Component({
  selector: 'keyup3',
  template: `
  <input #box (keyup.enter)="onEnter(box.value)">
  <p>{{value}}</p>
  `
})
export class KeyUp3Component {
  value = '';

  onEnter(value: string) {
    this.value = value;
  }
}

@Component({
  selector: 'keyup4',
  template: `
  <input #box
    (keyup.enter)="update(box.value)"
    (blur)="update(box.value)">
  <p>{{value}}</p>
  `
})
export class KeyUp4Component {
  value = '';

  update(value: string) {
    this.value = value;
  }
}
