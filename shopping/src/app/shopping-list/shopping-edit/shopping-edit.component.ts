import {
  Component,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @Output() ingredientAdd = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit() {
  }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    const newIngredient = new Ingredient(name.value, parseInt(amount.value, 10));
    this.ingredientAdd.emit(newIngredient);
  }
}
