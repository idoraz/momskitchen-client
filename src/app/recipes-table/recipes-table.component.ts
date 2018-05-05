import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../objects/recipe';

@Component({
  selector: 'app-recipes-table',
  templateUrl: './recipes-table.component.html',
  styleUrls: ['./recipes-table.component.css']
})
export class RecipesTableComponent implements OnInit {

  @Input() recipes: Array<Recipe>;

  constructor() { }

  ngOnInit() {
  }

}
