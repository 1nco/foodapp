import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FoodService } from '../../../../swagger';
import { FoodListService } from '../service/food-list.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class SearchLoardGuard implements CanActivate {
  constructor(private foodService: FoodService,
              private router: Router,
              private foodListService: FoodListService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.foodService.searchMealByName(route.params.id).pipe(map(resp => {
        this.foodListService.foods = resp.meals;
        this.foodListService.title = 'Search Results';
        return true;
      }),
      catchError(err => {
        this.router.navigateByUrl('categories');
        return of(false);
      }));
  }

}
