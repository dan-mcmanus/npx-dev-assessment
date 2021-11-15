import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Basket } from '../../core/model/basket';
import { DataServiceError } from '../../shared/data-error.service';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  apiUrlBase = environment.apiUrlBase;

  constructor(private http: HttpClient) { }

  getBaskets(): Observable<Basket[]> {
    return this.http.get<Basket[]>(`${this.apiUrlBase}/baskets`)
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
