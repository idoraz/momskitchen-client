import { Component, OnInit } from '@angular/core';
import { ServerServicesService } from './../server-services.service';
import { Subscription } from 'rxjs/Subscription';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchResults: any[] = [];
  inputSize: string = "50";
  recipeObj: any;
  private subscriptions = new Subscription();

  constructor(private serverServices: ServerServicesService, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  searchRecipe(token) {
    if (!token || !token.query) { return; }
    // if (token.keyCode < 65 || token.keyCode > 105) {
    //   if (token.key !== 'ת' && token.key !== 'ף' && token.key !== 'ץ') { 
    //     return; 
    //   }
    // }

    this.subscriptions.add(this.serverServices.searchRecipe(token.query).subscribe(res => {
      this.searchResults = JSON.parse(res["_body"]);
    }));
  }

  showRecipe(recipe) {
    this.router.navigate([`/recipe/${recipe.key}`]);
  }

}