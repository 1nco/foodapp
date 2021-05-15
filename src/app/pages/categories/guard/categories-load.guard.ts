import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CategoriesService } from '../service/categories.service';
import { catchError, map } from 'rxjs/operators';
import { FoodService } from '../../../../swagger';

@Injectable()
export class CategoriesLoadGuard implements CanActivate {

  constructor(private foodService: FoodService,
              private categoryService: CategoriesService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.foodService.getCategories().pipe(map(resp => {
      this.categoryService.categories = resp.categories;
      return true;
    }),
      catchError(err => {
        // TODO Add error handling
        return of(false);
      }));
  }

}
