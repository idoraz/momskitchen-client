import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Recipe } from './objects/recipe';

@Injectable()
export class ServerServicesService {

  constructor(private http: Http) { }

  private apiAddress = {
    dev: {
      url: 'http://127.0.0.1',
      port: 3000
    },
    production: {
      url: 'http://127.0.0.1',
      port: 3000
    }
  };
  private isLive: boolean = false;

  getApiUrl(): string {
    if (this.isLive) {
      return `${this.apiAddress.production.url}:${this.apiAddress.production.port}`;
    } else {
      return `${this.apiAddress.dev.url}:${this.apiAddress.dev.port}`;
    }
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

  getRecipe(collectionName: string, key: string): Observable<any> {
    const target = this.getApiUrl();
    return this.http.get(`${target}/getObjectByKey/${collectionName}/${key}`);
  }

}
