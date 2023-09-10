import { Component } from '@angular/core';
import { PizzasService } from '../shared/services/pizzas.service';

// home.component.ts
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  readonly pizzas$ = this.pizzasService.getPizzas();

  constructor(private pizzasService: PizzasService) {}
}