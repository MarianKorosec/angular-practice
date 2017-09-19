import { Component } from '@angular/core';
import { HeroForm } from '../core/hero';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {
  powers = [
    'Really Smart',
    'Super Flexible',
    'Super Hot',
    'Weather Changer',
    'Super Rich'
  ];
  model = new HeroForm(18, 'Ironman', this.powers[4], 'Tony Stark');
  submitted = false;

  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new HeroForm(42, '', '');
  }
}
