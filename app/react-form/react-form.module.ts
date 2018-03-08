import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactFormComponent } from './react-form.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatTabsModule} from '@angular/material';

const routes: Routes = [{ path: '', component: ReactFormComponent }]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), ReactiveFormsModule, MatFormFieldModule,
    MatInputModule, MatTabsModule
  ],
  declarations: [ReactFormComponent]
})
export class ReactFormModule { }
