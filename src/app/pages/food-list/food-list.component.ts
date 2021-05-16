import { Component, OnInit } from '@angular/core';
import { FoodListService } from './service/food-list.service';
import { Meal } from '../../../swagger';
import { CardItem } from '../../components/item-card/item-card.component';
import { Router } from '@angular/router';

@Component({
  selector: 'food-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  constructor(public foodListService: FoodListService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  mapFoodToCardItem(food: Meal) {
    return {
      id: food.idMeal,
      name: food.strMeal,
      picture: food.strMealThumb,
      description: ''
    };
  }

  itemClicked(item: CardItem) {
    this.router.navigateByUrl(`food/recipe/${item?.id}`);
  }
}
