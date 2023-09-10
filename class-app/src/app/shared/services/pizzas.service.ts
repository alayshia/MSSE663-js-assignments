import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PizzaEntity } from 'api/lib/api-interfaces';
import { Observable, map } from 'rxjs';

// pizzas.service.ts
interface PizzaResponse {
  msg: string;
  pizzas: PizzaEntity[];
}

@Injectable({
  providedIn: 'root',
})
export class PizzasService {
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<PizzaEntity[]> {
    return this.http
      .get<PizzaResponse>('/api/pizzas')
      .pipe(map((data) => data.pizzas));
  }
}
