import { Injectable } from '@angular/core';

export class Car {
  name = `Carmaster's Cars`;

  constructor(public engine: Engine, public tires: Tires) { }

  get description() {
    return `${this.name} car with ` +
    `${this.engine.cylinders} and ${this.tires.make} tires.`;
  }
}

export class Engine {
  cylinders = 4;
}

export class Tires {
  make = `Tiremaster's Tires`;
  model = 'Mastery';
}

@Injectable()
export class EngineService {
  id = 'E1';

  getEngine() { return new Engine(); }
}

@Injectable()
export class EngineService2 {
  id = 'E2';

  getEngine() {
    const eng = new Engine();
    eng.cylinders = 8;
    return eng;
  }
}

@Injectable()
export class TiresService {
  id = 'T1';

  getTires() { return new Tires(); }
}

@Injectable()
export class CarService {
  id = 'C1';

  constructor(
    protected engineService: EngineService,
    protected tiresService: TiresService) { }

  getCar() {
    return new Car(this.engineService.getEngine(), this.tiresService.getTires());
  }

  get name() {
    return `${this.id}-${this.engineService.id}-${this.tiresService.id}`;
  }
}

@Injectable()
export class CarService2 extends CarService {
  id = 'C2';

  constructor(
    protected engineService: EngineService,
    protected tiresService: TiresService) {
      super(engineService, tiresService);
    }

  getCar() {
    const car = super.getCar();
    car.name = 'BatMobile';
    return car;
  }
}

@Injectable()
export class CarService3 extends CarService2 {
  id = 'C3';

  constructor(
    protected engineService: EngineService,
    protected tiresService: TiresService) {
      super(engineService, tiresService);
    }

  getCar() {
    const car = super.getCar();
    car.name = `Imaginary Car`;
    return car;
  }
}
