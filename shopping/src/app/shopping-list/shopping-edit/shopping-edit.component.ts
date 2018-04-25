import {
  Component,
  OnInit,
  EventEmitter,
  Output,
} from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  addIngredient(name: HTMLInputElement, amount: HTMLInputElement) {
    const newIngredient = new Ingredient(name.value, parseInt(amount.value, 10));
    this.shoppingListService.addIngredient(newIngredient);
  }
}
