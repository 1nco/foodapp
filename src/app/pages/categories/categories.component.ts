import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './service/categories.service';
import { CardItem } from '../../components/item-card/item-card.component';
import { Category } from '../../../swagger';
import { Router } from '@angular/router';

@Component({
  selector: 'food-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor(public categoryService: CategoriesService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  itemClicked(item: CardItem) {
    this.router.navigateByUrl(`food/list/${item.name}`);
  }

  mapCategoryToCardItem(category: Category) {
    return {
      id: category.idCategory,
      name: category.strCategory,
      picture: category.strCategoryThumb,
      description: category.strCategory
    }
  }
}
