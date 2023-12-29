import { Component } from '@angular/core';

import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg'),
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://www.acouplecooks.com/wp-content/uploads/2020/12/Honey-Garlic-Shrimp-026.jpg')
  ]
}
