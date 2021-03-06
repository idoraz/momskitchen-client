import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Recipe } from './objects/recipe';
import { environment } from '../environments/environment.prod';

@Injectable()
export class ServerServicesService {

  constructor(private http: Http) { }

  getApiUrl(): string {
    return `http://${environment.host}:${environment.port}`;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getAllRecipes(): Observable<any> {
    const target = this.getApiUrl();
    return this.http.get(`${target}/getAllRecipes`);
  }

  getRecipes(category: string): Observable<any> {
    const target = this.getApiUrl();
    return this.http.get(`${target}/getRecipes/${category}`);
  }

  getRecipe(collectionName: string, key: string): Observable<any> {
    const target = this.getApiUrl();
    return this.http.get(`${target}/getObjectByKey/${collectionName}/${key}`);
  }

  searchRecipe(token: string): Observable<any> {
    const target = this.getApiUrl();
    return this.http.get(`${target}/searchRecipe/${token}`);
  }

}
