import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Basket } from '../../core/model/basket';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  constructor(private http: HttpClient) {
  }

  getBasketById(basketId: number): Observable<Basket | undefined> {
    const url = 'assets/baskets.data.json';
    return this.http.get<Basket[]>(url)
      .pipe(
        map(baskets => baskets.find(basket => basket.id === basketId))
      );
  }
}
