import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header1Component } from './header1/header1.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HeaderService } from './header.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule, RouterModule, FlexLayoutModule, MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule,
    BrowserAnimationsModule
  ],
  declarations: [Header1Component, FooterComponent, MenuItemComponent],

  exports: [Header1Component, FooterComponent],
  providers: [HeaderService]
})
export class CoreModule { }
