import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MenuhttpComponent } from './menuhttp.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: MenuhttpComponent }]
@NgModule({
  imports: [
    CommonModule, FormsModule,RouterModule.forChild(routes)
  ],
  declarations: [MenuhttpComponent]
})
export class MenuhttpModule { }
