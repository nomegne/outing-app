import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OutingComponent } from './outing/outing.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { AjoutComponent } from './ajout/ajout.component';
import { ModifierComponent } from './modifier/modifier.component';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    PrivateComponent,
    DashboardComponent,
    OutingComponent,
    LoginComponent,
    LoginFormComponent,
    BackofficeComponent,
    
    FooterComponent,
    HeaderComponent,
    DetailsComponent,
    AjoutComponent,
    ModifierComponent,
    
 
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
