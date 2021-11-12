import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Order } from '../../core/model/order';
import { DataServiceError } from '../data-error.service';

@Injectable({
  providedIn: 'root'
})
export class OrderDataService {
  apiUrlBase = environment.apiUrlBase;

  constructor(private http: HttpClient) { }

  getOrders(orderId: number): Observable<Order[]> {
    return this.http.get<Order[]>(`${this.apiUrlBase}/orders?customerId=${orderId}`)
    .pipe(
      catchError(this.handleError())
    );
  }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      // return new ErrorObservable(error);
      return throwError(error);
    };
  }
}
