export class Hero {
  id: number;
  name: string;
  emotion?: string;
}

export class HeroForm {
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) { }
}

export class ReactiveHero {
  id = 0;
  name = '';
  addresses: Address[];
}

export class DIHero {
  id: number;
  name: string;
  isSecret = false;
}

export class HeroTax {
  id: number;
  name: string;
  tid: string; // Tax ID
}

export class Address {
  street = '';
  city = '';
  state = '';
  zip = '';
}

export interface Flyer { canFly: boolean; }

export const heroes: Hero[] = [
    { id: 1, name: 'Magneto', emotion: 'epic' },
    { id: 2, name: 'Wolverine', emotion: 'angry' },
    { id: 3, name: 'Ironman', emotion: 'amused' },
    { id: 4, name: 'Spiderman', emotion: 'confused' }
];

export const HEROES = [
  {name: 'Magneto', canFly: false },
  {name: 'Wolverine', canFly: false },
  {name: 'Ironman', canFly: true },
  {name: 'Spiderman', canFly: false }
];

export const reactiveHeroes: ReactiveHero[] = [
  {
    id: 1,
    name: 'Ironman',
    addresses: [
      {street: 'Stark Tower Street', city: 'New York City', state: 'NYC', zip: '98765'},
      {street: 'Stark Villa', city: 'New York', state: 'NY', zip: '12345'},
    ]
  },
  {
    id: 2,
    name: 'Magneto',
    addresses: [
      {street: 'Mutant Street', city: 'Mutantington', state: 'MU', zip: '88888'},
    ]
  },
  {
    id: 3,
    name: 'Spiderman',
    addresses: [
      {street: '56th String Street', city: 'The Web', state: 'WE', zip: '66666'},
    ]
  },
  {
    id: 4,
    name: 'The Hulk',
    addresses: [ ]
  }
];

export const states = ['NYC', 'NY', 'MU', 'WE'];
