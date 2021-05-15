import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BASE_PATH, FoodService } from '../swagger';
import { environment } from '../environments/environment';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerInterceptor } from './providers/spinner.interceptor';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriesLoadGuard } from './pages/categories/guard/categories-load.guard';
import { CategoriesService } from './pages/categories/service/categories.service';
import { CategoriesComponent } from './pages/categories/categories.component';
import { FoodListComponent } from './pages/food-list/food-list.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { FoodListLoadGuard } from './pages/food-list/guard/food-list-load.guard';
import { FoodListService } from './pages/food-list/service/food-list.service';
import { RecipeComponent } from './pages/recipe/recipe.component';
import { RecipeLoadGuard } from './pages/recipe/guard/recipe-load.guard';
import { RecipeServiceService } from './pages/recipe/service/recipe-service.service';
import { RandomLoadGuard } from './pages/recipe/guard/random-load.guard';
import { OnEnterPressedDirective } from './providers/directives/on-enter-pressed.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchLoardGuard } from './pages/food-list/guard/search-loard.guard';

@NgModule({
  providers: [
    FoodService,
    CategoriesLoadGuard,
    CategoriesService,
    FoodListLoadGuard,
    FoodListService,
    RecipeLoadGuard,
    RecipeServiceService,
    RandomLoadGuard,
    SearchLoardGuard,
    { provide: BASE_PATH, useValue: environment.dbBasePath },
    { provide: HTTP_INTERCEPTORS, useClass: SpinnerInterceptor, multi: true },
  ],
  declarations: [
    AppComponent,
    CategoriesComponent,
    ItemCardComponent,
    FoodListComponent,
    NavigationBarComponent,
    RecipeComponent,
    OnEnterPressedDirective
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxSpinnerModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
