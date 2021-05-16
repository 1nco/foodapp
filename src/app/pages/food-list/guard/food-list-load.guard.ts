import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FoodService } from '../../../../swagger';
import { FoodListService } from '../service/food-list.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class FoodListLoadGuard implements CanActivate {
  constructor(private foodService: FoodService,
              private foodListService: FoodListService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.foodService.getMealsByCategory(route.params.id).pipe(map(resp => {
        this.foodListService.title = route.params.id;
        this.foodListService.foods = resp.meals;
        return true;
      }),
      catchError(err => {
        this.router.navigateByUrl('categories');
        return of(false);
      }));
  }

}
