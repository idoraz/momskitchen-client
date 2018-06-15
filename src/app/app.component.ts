import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from './server-services.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from './objects/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private pageTitle = 'My First Angular App';
  public recipes: Observable<any>;

  constructor(private serverServices: ServerServicesService, private http: HttpClient) {}

  ngOnInit(): void {
    //const rec = new Recipe('Cake');
    //console.log(rec);

    // this.recipes = this.http.get('localhost:3001/api/recipes');

    // this.recipes = this.serverServices.getAllRecipes();
    // this.recipes = this.http.jsonp('localhost:3001/getAllRecipes', 'callback');
    // this.recipes = this.http.get('https://jsonplaceholder.typicode.com/posts', 'callback');

  }

  // callback(): void {
  //   console.log('Data retrieved!');
  // }

}
