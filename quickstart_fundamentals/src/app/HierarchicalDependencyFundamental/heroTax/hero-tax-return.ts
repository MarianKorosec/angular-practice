import { HeroTax } from './../../core/hero';

let nextID = 100;

export class HeroTaxReturn {
  constructor(
    public id = nextID++,
    public hero = HeroTax,
    public income = 0 ) {
      if (id === 0) { id = nextID++; }
    }

    get name() { return this.hero.name; }
    get tax() { return this.income ? .10 * this.income : 0; }
    get tid() { return this.hero.tid; }

    toString() {
      return `${this.hero.name}`;
    }

    clone() {
      return new HeroTaxReturn(this.id, this.hero, this.income);
    }
}
