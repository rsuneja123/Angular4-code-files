import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthServiceImp } from '../registration/auth.service';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


const routes: Routes = [{ path: '', component: LoginComponent }]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), FormsModule, MatFormFieldModule
  ],
  declarations: [LoginComponent],
  providers:[AuthServiceImp]
})
export class LoginModule { }
