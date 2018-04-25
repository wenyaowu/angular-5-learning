import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Test Recipe',
    'This is a test Recipe',
    'http://4.bp.blogspot.com/-O6kZHGQZOA8/UaatXgh95CI/AAAAAAAAAgg/nq9ogwSJ-Ks/s1600/Pizza.jpg',
    [new Ingredient('Garlic', 5),
    new Ingredient('Bread', 3)]),
    new Recipe('Pepper Chicken',
    'Yooooooooo Pepper chicken is awsome',
    'http://4.bp.blogspot.com/-O6kZHGQZOA8/UaatXgh95CI/AAAAAAAAAgg/nq9ogwSJ-Ks/s1600/Pizza.jpg',
    [new Ingredient('Chicken', 5),
    new Ingredient('Pepper', 3)])
  ];

  getRecipes() {
    return [...this.recipes]; // do not send reference of original copy.
  }

  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
