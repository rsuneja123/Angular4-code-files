import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceImp } from './registration/auth.service';
import { Trial1Service } from './home/trial1.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTrialService } from './http-trial.service';
import { UtilService } from './util/util.service';
import { DashboardService } from './dashboard/dashboard.service';
import { LoginnewComponent } from './loginnew/loginnew.component';
import { FlexLayoutModule } from '@angular/flex-layout';




const routes: Routes = [{ path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
  { path: "", redirectTo: 'home', pathMatch: 'full' },
  { path: 'contact-us', loadChildren: 'app/contact-us/contact-us.module#ContactUsModule' },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' },
  { path: 'registration', loadChildren: 'app/registration/registration.module#RegistrationModule' },
  { path: 'http-trial', loadChildren: 'app/http-trial/http-trial.module#HttpTrialModule' },
  { path: 'react-form', loadChildren: 'app/react-form/react-form.module#ReactFormModule' },


]

@NgModule({
  declarations: [
    AppComponent,
    LoginnewComponent
  ],
  imports: [
    BrowserModule, CoreModule, RouterModule.forRoot(routes), FlexLayoutModule, BrowserAnimationsModule,
    HttpClientModule, HttpModule
  ],
  providers: [AuthServiceImp,Trial1Service,HttpTrialService,UtilService,DashboardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
