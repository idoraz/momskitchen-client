import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ServerServicesService } from './../server-services.service';

@Component({
  selector: 'app-dishes',
  templateUrl: './dishes.component.html',
  styleUrls: ['./dishes.component.css']
})
export class DishesComponent implements OnInit {

  recipes: any[];
  title: string;
  categories: any = {
    4001: "מנות ראשונות",
    4002: "מנות עיקריות",
    4003: "תוספות",
    4004: "קינוחים",
    all: "הכל מהכל"
  };
  private subscriptions = new Subscription();

  constructor(private serverServices: ServerServicesService) { }

  ngOnInit() {

    let query: Observable<any>;
    const path = window.location.pathname.split('/');
    if (path && path.length > 2) {
      query = this.serverServices.getRecipes(path[2]);
      this.title = this.categories[path[2]];
    }
    else {
      query = this.serverServices.getAllRecipes();
      this.title = this.categories.all;
    }

    this.subscriptions.add(query.subscribe(res => {
      try {
        this.recipes = JSON.parse(res._body);
      }
      catch (err) {
        console.log(err.message);
      }
    }, err => {
      console.log(err.message);
    }));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
