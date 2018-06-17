import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ServerServicesService } from './../server-services.service';

@Component({
  selector: 'app-starters',
  templateUrl: './starters.component.html',
  styleUrls: ['./starters.component.css']
})
export class StartersComponent implements OnInit {

  recipes: any[];
  private subscriptions = new Subscription();

  constructor(private serverServices: ServerServicesService) { }

  ngOnInit() {
    this.subscriptions.add(this.serverServices.getAllRecipes().subscribe(res => {
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
