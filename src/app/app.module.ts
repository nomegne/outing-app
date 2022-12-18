import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OutingComponent } from './outing/outing.component';
import {HttpClientModule} from '@angular/common/http';
import { AfficheComponent } from './affiche/affiche.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';
import { BarComponent } from './bar/bar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    DashboardComponent,
    OutingComponent,
    AfficheComponent,
    LoginComponent,
    LoginFormComponent,
    BackofficeComponent,
    BarComponent,
    FooterComponent,
    HeaderComponent,
    DetailsComponent,
    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
