import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookFormComponent } from './book-form.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [{ path: '', component: BookFormComponent }]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  declarations: [BookFormComponent], exports: [BookFormComponent]
})
export class BookFormModule { }
