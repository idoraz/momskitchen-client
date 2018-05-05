import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule  } from '@angular/common/http';
// import { JsonpModule, Jsonp } from '@angular/Http';

import { AppComponent } from './app.component';
import { CategoryGridsComponent } from './categoryGrids/categoryGrids.component';
import { RecipesTableComponent } from './recipes-table/recipes-table.component';
import { ServerServicesService } from './server-services.service';


@NgModule({
  declarations: [
    AppComponent,
    CategoryGridsComponent,
    RecipesTableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [
    ServerServicesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
