import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private itemsURL = '/v0/items';

  constructor( private http: HttpClient  ) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsURL)
            .pipe(
              catchError( this.handleError<any>('getItems') )
            )
  }

  private handleError<T>( operation: string, result?: T) {
    return (error: any): Observable<T> => {
      console.log(`${operation} failed: ${error.message}`); // eslint-disable-line no-console
      return of(result as T);
    }
  }
  
}
