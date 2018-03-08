import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { Routes, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { RestaurantsService } from './restaurants.service';


const routes: Routes = [{ path: '', component: RestaurantsComponent}]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), MatCardModule, MatDividerModule
  ],
  declarations: [RestaurantsComponent],
  providers: [RestaurantsService]
})
export class RestaurantsModule { }
