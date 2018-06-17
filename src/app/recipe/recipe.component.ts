import { Instruction } from './../objects/instruction';
import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ServerServicesService } from './../server-services.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipe: any;
  isCarousel: boolean = false;
  private subscriptions = new Subscription();
  
  constructor(private serverServices: ServerServicesService) { }

  ngOnInit() {

    this.subscriptions.add(this.serverServices.getRecipe('recipes', window.location.pathname.split('/')[2]).subscribe(res => {
      try {
        this.recipe = JSON.parse(res._body);
        this.isCarousel = this.recipe.images.length > 1;
        this.markActiveInstruction(0);
        console.log(this.recipe);
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

  markActiveInstruction(index: number) {
    this.recipe.instructions.forEach(instruction => {
      instruction.active = instruction.order === index ? true : false;
    });
  }

}
