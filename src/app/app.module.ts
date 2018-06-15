import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoryGridsComponent } from './categoryGrids/categoryGrids.component';
import { RecipesTableComponent } from './recipes-table/recipes-table.component';
import { ServerServicesService } from './server-services.service';
import { StartersComponent } from './starters/starters.component';
import { HomeComponent } from './home/home.component';

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
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
  ],
  providers: [
    ServerServicesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
