import { Injectable } from '@angular/core';
import { Meal } from '../../../../swagger';

@Injectable()
export class FoodListService {

  private foodList: Array<Meal>;
  public title: string;

  constructor() {
  }

  get foods(): Array<Meal> {
    return this.foodList;
  }

  set foods(value: Array<Meal>) {
    this.foodList = value;
  }
}
