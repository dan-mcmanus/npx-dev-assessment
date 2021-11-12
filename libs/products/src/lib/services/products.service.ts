import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductsEntity } from '@npx-dev/products';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  private apiUrl = 'assets/products.data.json';
  getProducts(): Observable<ProductsEntity[]> {
    return this.http.get<ProductsEntity[]>(this.apiUrl)
    .pipe(
        catchError(this.handleError)
      )
  }

  private handleError(err: any) {
    // would normally log to a remote logger
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(() => new Error(errorMessage));
  }
}
