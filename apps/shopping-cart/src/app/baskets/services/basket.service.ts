import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { DataServiceError } from '../../shared/data-error.service';
import { BasketsEntity } from '../+state/baskets/baskets.models';


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  apiUrlBase = environment.apiUrlBase;

  constructor(private http: HttpClient) { }

  getBaskets(): Observable<BasketsEntity[]> {
    return this.http.get<BasketsEntity[]>(`${this.apiUrlBase}/baskets`)
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
