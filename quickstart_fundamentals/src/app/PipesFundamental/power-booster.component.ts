import { Component } from '@angular/core';

@Component({
  selector: 'power-booster',
  template: `
  <h2>Power Booster<h2>
  <p>Super Power Boost: {{2 | exponentialStrength: 8}}</p>
  `
})
export class PowerBoosterComponent { }
