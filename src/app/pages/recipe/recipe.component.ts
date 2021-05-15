import { Component, OnInit } from '@angular/core';
import { RecipeServiceService } from './service/recipe-service.service';

@Component({
  selector: 'food-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(public recipeService: RecipeServiceService) {
  }

  ngOnInit(): void {
  }

  getIngredients() {
    let ing = '';
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure1, this.recipeService?.recipe?.strIngredient1);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure2, this.recipeService?.recipe?.strIngredient2);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure3, this.recipeService?.recipe?.strIngredient3);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure4, this.recipeService?.recipe?.strIngredient4);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure5, this.recipeService?.recipe?.strIngredient5);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure6, this.recipeService?.recipe?.strIngredient6);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure7, this.recipeService?.recipe?.strIngredient7);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure8, this.recipeService?.recipe?.strIngredient8);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure9, this.recipeService?.recipe?.strIngredient9);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure10, this.recipeService?.recipe?.strIngredient10);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure11, this.recipeService?.recipe?.strIngredient11);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure12, this.recipeService?.recipe?.strIngredient12);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure13, this.recipeService?.recipe?.strIngredient13);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure14, this.recipeService?.recipe?.strIngredient14);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure15, this.recipeService?.recipe?.strIngredient15);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure16, this.recipeService?.recipe?.strIngredient16);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure17, this.recipeService?.recipe?.strIngredient17);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure18, this.recipeService?.recipe?.strIngredient18);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure19, this.recipeService?.recipe?.strIngredient19);
    ing += this.addToIngredientString(this.recipeService?.recipe?.strMeasure20, this.recipeService?.recipe?.strIngredient20);
    return ing;
  }

  private addToIngredientString(measure: string, ingredient: string) {
    if (ingredient !== '' && ingredient !== null) {
      return measure += ' ' + ingredient + '\n';
    } else {
      return '';
    }
  }

}
