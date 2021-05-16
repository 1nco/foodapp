import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { FoodService } from '../../../../swagger';
import { RecipeServiceService } from '../service/recipe-service.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class RandomLoadGuard implements CanActivate {

  constructor(private foodService: FoodService,
              private recipeService: RecipeServiceService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    return this.foodService.getRandomMeal().pipe(map(resp => {
        this.recipeService.recipe = resp.meals.pop();
        return true;
      }),
      catchError(err => {
        this.router.navigateByUrl('food/categories');
        return of(false);
      }));
  }

}
