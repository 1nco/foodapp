import { Injectable } from '@angular/core';
import { Category } from '../../../../swagger';

@Injectable()
export class CategoriesService {

  private categoryList: Array<Category>;

  constructor() {
  }

  set categories(value: Array<Category>) {
    this.categoryList = value;
  }

  get categories(): Array<Category> {
    return this.categoryList;
  }

  addToCategories(item: Category) {
    this.categoryList.push(item);
  }
}
