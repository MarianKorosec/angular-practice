import { Component, forwardRef, Optional, SkipSelf } from '@angular/core';

export abstract class Base { name = 'Paul Platzhalter'; }

export abstract class Parent { name: string; }

const DifferentParent = Parent;

const provideParent =
  (component: any, parentType?: any) => {
    return { provide: parentType || Parent, useExisting: forwardRef(() => component) };
  };

// provide parent diretly --> easier syntax
const provideTheParent =
  (component: any) => {
    return { provide: Parent, useExisting: forwardRef(() => component) };
  };

// Grandparents - A
@Component({
  selector: 'alex',
  template: `
  <div class="a">
    <h3>{{name}}</h3>
    <cathy></cathy>
    <craig></craig>
    <carol></carol>
  </div>
  `,
  providers: [{ provide: Parent, useExisting: forwardRef(() => AlexComponent) }]
})
export class AlexComponent extends Base {
  name = 'Alex';
}

@Component({
  selector: 'alice',
  template: `
  <div class="a">
    <h3>{{name}}</h3>
    <barry></barry>
    <beth></beth>
    <bob></bob>
    <carol></carol>
  </div>
  `,
  providers: [ provideParent(AliceComponent) ]
})
export class AliceComponent implements Parent {
  name = 'Alice';
}

// Parents - B
const templateB = `
<div class="b">
  <div>
    <h3>{{name}}</h3>
    <p>My parent is {{parent?.name}}</p>
  </div>
  <carol></carol>
  <chris></chris>
</div>`;

@Component({
  selector: 'barry',
  template: templateB,
  providers: [{ provide: Parent, useExisting: forwardRef(() => BarryComponent) }]
})
export class BarryComponent implements Parent {
  name = 'Barry';

  constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

@Component({
  selector: 'beth',
  template: templateB,
  providers: [ provideTheParent(BethComponent) ]
})
export class BethComponent implements Parent {
  name = 'Beth';

  constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

@Component({
  selector: 'bob',
  template: templateB,
  providers: [ provideParent(BobComponent, DifferentParent) ]
})
export class BobComponent implements Parent {
  name = 'Bob';

  constructor(@SkipSelf() @Optional() public parent: Parent) { }
}

// Children - C
const templateC = `
  <div class="c">
    <h3>{{name}}</h3>
    <p>My parent is {{parent?.name}}</p>
  </div>`;

@Component({
  selector: 'carol',
  template: templateC
})
export class CarolComponent {
  name = 'Carol';

  constructor(@Optional() public parent: Parent) { }
}

@Component({
  selector: 'chris',
  template: templateC
})
export class ChrisComponent {
  name = 'Chris';

  constructor(@Optional() public parent: Parent) { }
}

@Component({
  selector: 'cathy',
  template: `
  <div class="c">
    <h3>Cathy</h3>
    {{alex ? 'Found' : 'Did not find'}} Alex via the component class.<br>
  </div>
  `
})
export class CathyComponent {
  constructor(@Optional() public alex: AlexComponent) { }
}

@Component({
  selector: 'craig',
  template: `
  <div class="c">
  <h3>Craig</h3>
  {{alex ? 'Found' : 'Did not find'}} Alex via the base class.<br>
</div>
`
})
export class CraigComponent {
  constructor(@Optional() public alex: Base) { }
}

@Component({
  selector: 'parent-finder',
  template: `
  <h3>Parent Finder</h3>
  <alex></alex>
  <alice></alice>
  `
})
export class ParentFinderComponent { }
