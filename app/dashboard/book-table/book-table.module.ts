import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTableComponent } from './book-table.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatButtonModule, MatCheckboxModule, MatCardModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BookFormComponent } from './book-form/book-form.component';
import { BookFormModule } from './book-form/book-form.module';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [{
  path: '', component: BookTableComponent,
  children: [{ path: 'book-form', loadChildren: 'app/dashboard/book-table/book-form/book-form.module#BookFormModule' }]
}]
@NgModule({
  imports: [
    CommonModule, MatSelectModule, MatInputModule, MatDatepickerModule, MatNativeDateModule,
    MatButtonModule, MatCheckboxModule, MatRadioModule, FormsModule,
    ReactiveFormsModule, MatCardModule, RouterModule.forChild(routes), MatFormFieldModule
  ],
  declarations: [BookTableComponent],
  exports: [BookTableComponent]
})
export class BookTableModule { }
