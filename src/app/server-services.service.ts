import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { Recipe } from './objects/recipe';

@Injectable()
export class ServerServicesService {

  constructor(private http: HttpClient) { }

  private apiAddress = {
    local: {
      url: 'localhost',
      port: 3001
    },
    development: {
      url: 'localhost',
      port: 3001
    }
  };
  private isLive = false;
  private recipes: any;

  getAllRecipes (): any {

    // return this.http.jsonp(this.getApiUrl() + '/getAllRecipes', 'callback');
    return this.http.jsonp('localhost:3001/getAllRecipes?output=json&callback=JSONP_CALLBACK', 'callback');
    // .map((response: Response) => {
    //   return response.json();
    // });

    // return this.http.get<any>(this.getApiUrl() + '/getAllRecipes').pipe(
    //   tap(_ => console.log('fetched recipes')),
    //   catchError(this.handleError<Recipe>('getAllRecipes'))
    // );


    // let recipes = this.http.get(this.getApiUrl() + '/getAllRecipes');
    // recipes = this.serializeRecipes(recipes);
    // return recipes;
  }

  getApiUrl (): string {
    if (this.isLive) {
      return this.apiAddress.development.url;
    } else {
      return this.apiAddress.local.url + ':' + this.apiAddress.local.port;
    }
  }

  serializeRecipes (recipes): any {
    recipes.forEach((recipe, index) => {
      console.log(recipe.name);
    });

    return recipes;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
