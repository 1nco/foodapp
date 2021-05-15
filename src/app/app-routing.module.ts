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
  { path: 'categories', component: CategoriesComponent, canActivate: [CategoriesLoadGuard] },
  { path: 'list/:id', component: FoodListComponent, canActivate: [FoodListLoadGuard] },
  { path: 'search/:id', component: FoodListComponent, canActivate: [SearchLoardGuard] },
  { path: 'recipe/:id', component: RecipeComponent, canActivate: [RecipeLoadGuard] },
  { path: 'random', component: RecipeComponent, canActivate: [RandomLoadGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
