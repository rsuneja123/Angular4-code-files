import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CarouselModule } from 'angular4-carousel';
const routes: Routes = [{ path: '', component: HomeComponent }]
@NgModule({
  imports: [
    CommonModule, RouterModule.forChild(routes), FlexLayoutModule, CarouselModule
  ],
  declarations: [HomeComponent], exports: [HomeComponent]
})
export class HomeModule { }
