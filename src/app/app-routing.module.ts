import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoriesLoadGuard } from './pages/categories/guard/categories-load.guard';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { FoodListLoadGuard } from './pages/food-list/guard/food-list-load.guard';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { RecipeLoadGuard } from './pages/recipe/guard/recipe-load.guard';
import { RandomLoadGuard } from './pages/recipe/guard/random-load.guard';
import { SearchLoardGuard } from './pages/food-list/guard/search-loard.guard';

const routes: Routes = [
  { path: 'food/categories', component: CategoriesComponent, canActivate: [CategoriesLoadGuard] },
  { path: 'food/list/:id', component: FoodListComponent, canActivate: [FoodListLoadGuard] },
  { path: 'food/search/:id', component: FoodListComponent, canActivate: [SearchLoardGuard] },
  { path: 'food/recipe/:id', component: RecipeComponent, canActivate: [RecipeLoadGuard] },
  { path: 'food/random', component: RecipeComponent, canActivate: [RandomLoadGuard] },
  // { path: '/food', redirectTo: '/food/categories', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
