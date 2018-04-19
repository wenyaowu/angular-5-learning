import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe',
    'This is a test Recipe',
    'http://4.bp.blogspot.com/-O6kZHGQZOA8/UaatXgh95CI/AAAAAAAAAgg/nq9ogwSJ-Ks/s1600/Pizza.jpg'),
    new Recipe('Test Recipe',
    'This is a test Recipe',
    'http://4.bp.blogspot.com/-O6kZHGQZOA8/UaatXgh95CI/AAAAAAAAAgg/nq9ogwSJ-Ks/s1600/Pizza.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe) {
    this.recipeSelected.emit(recipe);
  }

}
