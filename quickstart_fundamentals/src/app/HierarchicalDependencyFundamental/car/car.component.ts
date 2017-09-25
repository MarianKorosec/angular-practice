import { Component } from '@angular/core';

import { CarService, CarService2, CarService3, EngineService, EngineService2, TiresService } from './car.service';

@Component({
  selector: 'c-car',
  template: `
  <div>C: {{description}}</div>
  `,
  providers: [
    { provide: CarService, useClass: CarService3}
  ]
})
export class CCarComponent {
  description: string;
  constructor(carSerivce: CarService) {
    this.description = `${carSerivce.getCar().description} (${carSerivce.name})`;
  }
}

@Component({
  selector: 'b-car',
  template: `
  <div>B: {{description}}</div>
  <c-car></c-car>
  `,
  providers: [
    { provide: CarService, useClass: CarService2},
    { provide: EngineService, useClass: EngineService2 }
  ]
})
export class BCarComponent {
  description: string;
  constructor(carSerivce: CarService) {
    this.description = `${carSerivce.getCar().description} (${carSerivce.name})`;
  }
}

@Component({
  selector: 'a-car',
  template: `
  <div>A: {{description}}</div>
  <b-car></b-car>
  `,
})
export class ACarComponent {
  description: string;
  constructor(carSerivce: CarService) {
    this.description = `${carSerivce.getCar().description} (${carSerivce.name})`;
  }
}

@Component({
  selector: 'my-cars',
  template: `
  <h3>Cars</h3>
  <a-car></a-car>
  `
})
export class CarsComponent { }

export const carsComponents = [
  CarsComponent,
  ACarComponent, BCarComponent, CCarComponent
];

export const carServices = [
  CarService, EngineService, TiresService
];
