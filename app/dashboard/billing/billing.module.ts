import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path :'',component:BillingComponent}]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [BillingComponent]
})
export class BillingModule { }
