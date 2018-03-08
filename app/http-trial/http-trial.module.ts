import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpTrialComponent } from './http-trial.component';

const routes: Routes=[{ path: '', component: HttpTrialComponent }]
@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ],
  declarations: [HttpTrialComponent]
})
export class HttpTrialModule { }
