import { Injectable } from '@angular/core';
import { Recipe } from './recipes.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imgUrl: 'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
      ingredients: ['chicken', 'potato', 'salad']
    },
    {
      id: 'r2',
      title: 'Spagetti',
      imgUrl: 'https://i.pinimg.com/474x/52/bc/e1/52bce14a1196430b6ecabfb51ca930a4.jpg',
      ingredients: ['spagetti', 'cheese', 'tomato']
    }
  ];
  constructor() { }
  getAllRecipes()
  {
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe => {
      return recipe.id === recipeId;
    })};
  }
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
