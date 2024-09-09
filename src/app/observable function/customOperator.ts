import { Observable, map, catchError, throwError } from "rxjs";

export function customOperator() {
    return (source: Observable<any>) => source.pipe(
      map(value => value * 2), 
      catchError(err => {
        console.error('Error caught in custom operator: ', err);
        return throwError(err);
      })
    )
  }