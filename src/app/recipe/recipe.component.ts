import { Ingerdient } from './../objects/ingredient';
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

  public recipe: any;
  public recipeState: any;
  isCarousel: boolean = false;
  private subscriptions = new Subscription();

  constructor(private serverServices: ServerServicesService) { }

  ngOnInit() {

    this.subscriptions.add(this.serverServices.getRecipe('recipes', window.location.pathname.split('/')[2]).subscribe(res => {
      try {
        this.recipe = JSON.parse(res._body);

        this.updateIngredientText(this.recipe); //TODO: Think of a better way to do this - Shouldn't happen every time a recipe is loaded!
        this.isCarousel = this.recipe.images.length > 0;
        this.recipeState = localStorage.getItem(`momsRecipe${this.recipe.key}`);
        console.log(this.recipeState);
        if (this.recipeState) {
          this.recipeState = JSON.parse(this.recipeState);
          this.markActiveInstruction(this.recipeState.instructionsIndex);
          this.markCheckedIngredients();
        }
        else {
          this.recipeState = {
            instructionsIndex: 0,
            ingredients: []
          }
          console.log(this.recipeState);
          for (let ingridient in this.recipe.ingredients) {
            this.recipeState.ingredients.push(false);
          }
          console.log(this.recipeState);
          this.markActiveInstruction(0);
        }

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
    this.recipeState.instructionsIndex = index;
    localStorage.setItem(`momsRecipe${this.recipe.key}`, JSON.stringify(this.recipeState));
    this.recipe.instructions.forEach(instruction => {
      instruction.active = instruction.order === index ? true : false;
    });
  }

  markCheckedIngredients() {
    for (let index in this.recipe.ingredients) {
      if (this.recipeState.ingredients[index]) {
        this.recipe.ingredients[index].checked = this.recipeState.ingredients[index];
      }
    }
  }

  ingredientChecked(index) {
    
    this.recipeState.ingredients[index] = !this.recipeState.ingredients[index];
    localStorage.setItem(`momsRecipe${this.recipe.key}`, JSON.stringify(this.recipeState));
  }

  updateIngredientText(recipe: any) {
    if (!recipe || !recipe.ingredients || recipe.ingredients.length === 0) return;

    for (let ingredient of recipe.ingredients) {
      ingredient.text = `${ingredient.quantity ? ingredient.quantity : ""} ${ingredient.measure ? ingredient.measure : ""} ${ingredient.name}`;
    }
  }

}
