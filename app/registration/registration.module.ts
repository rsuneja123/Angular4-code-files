import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { Routes, RouterModule } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material';





const routes: Routes = [{ path: '', component: RegistrationComponent}]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), MatInputModule, MatButtonModule, MatCardModule, MatFormFieldModule, FormsModule, MatSelectModule

  ],
  declarations: [RegistrationComponent],
})
export class RegistrationModule { }
