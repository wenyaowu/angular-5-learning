import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Garlic', 5),
    new Ingredient('Tomato', 3)
  ];

  @Output() ingredientAdd = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit() {
  }

  onIngredientAdd(ingredient: Ingredient) {
    console.log(ingredient);
    this.ingredients.push(ingredient);
  }
}
