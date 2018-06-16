import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryGridsComponent } from './categoryGrids/categoryGrids.component';
import { RecipesTableComponent } from './recipes-table/recipes-table.component';
import { ServerServicesService } from './server-services.service';
import { StartersComponent } from './starters/starters.component';
import { HomeComponent } from './home/home.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';

let appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'starters',
    component: StartersComponent
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
    StartersComponent,
    HomeComponent,
    RecipesListComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    // other imports here
  ],
  providers: [
    ServerServicesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
