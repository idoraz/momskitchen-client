import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CategoryGridsComponent } from './categoryGrids/categoryGrids.component';
import { RecipesTableComponent } from './recipes-table/recipes-table.component';
import { ServerServicesService } from './server-services.service';
import { DishesComponent } from './dishes/dishes.component';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipeComponent } from './recipe/recipe.component';
import { AutoCompleteModule } from 'primeng/autocomplete';


let appRoutes: Routes = [
  {
    path: 'recipe/:key',
    component: RecipeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dishes/:categoryKey',
    component: DishesComponent
  },
  {
    path: 'dishes',
    component: DishesComponent
  },
  { 
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    //TODO: Need to create a PageNotFoundComponent
    path: '**', 
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoryGridsComponent,
    RecipesTableComponent,
    DishesComponent,
    HomeComponent,
    RecipesListComponent,
    RecipeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AutoCompleteModule
    // other imports here
  ],
  providers: [
    ServerServicesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
