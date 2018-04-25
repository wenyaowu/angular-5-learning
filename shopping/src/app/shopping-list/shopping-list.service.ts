import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {

  ingredientAdded = new EventEmitter<undefined>();

  ingredients: Ingredient[] = [
    new Ingredient('Garlic', 5),
    new Ingredient('Tomato', 3)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit();
  }
}
