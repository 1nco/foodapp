import { Injectable } from '@angular/core';
import { MealDetails } from '../../../../swagger';

@Injectable()
export class RecipeServiceService {

  recipe: MealDetails;

  constructor() {
  }
}
