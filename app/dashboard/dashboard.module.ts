import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [{
  path: '', component: DashboardComponent,
  children: [{ path: 'menu', loadChildren: 'app/dashboard/menu/menu.module#MenuModule' },
  { path: 'book-table', loadChildren: 'app/dashboard/book-table/book-table.module#BookTableModule' },
  { path: 'billing', loadChildren: 'app/dashboard/billing/billing.module#BillingModule' },
  { path: 'restaurants', loadChildren: 'app/dashboard/restaurants/restaurants.module#RestaurantsModule' },
  { path: 'menuhttp', loadChildren: 'app/dashboard/menuhttp/menuhttp.module#MenuhttpModule' }]
       
}]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],

  declarations: [DashboardComponent], exports: [DashboardComponent]
})
export class DashboardModule { }
