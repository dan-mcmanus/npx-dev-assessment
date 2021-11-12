import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { DataServiceError } from '../data-error.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  apiUrlBase = environment.apiUrlBase;

  constructor(private http: HttpClient) { }

  private handleError<T>(requestData?: T) {
    return (res: HttpErrorResponse) => {
      const error = new DataServiceError(res.error, requestData);
      console.error(error);
      // return new ErrorObservable(error);
      return throwError(error);
    };
  }
}
