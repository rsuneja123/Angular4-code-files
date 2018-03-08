import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: ContactUsComponent }]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes),FormsModule
  ],
  declarations: [ContactUsComponent]
})
export class ContactUsModule { }
