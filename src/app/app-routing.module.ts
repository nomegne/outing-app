import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PublicComponent } from './public/public.component';
import { OutingComponent } from './outing/outing.component';
import { LoginComponent } from './login/login.component';
import { BackofficeComponent } from './protected/backoffice/backoffice.component';
import { AuthGuard } from './utils/auth.guard';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { AjoutComponent } from './ajout/ajout.component';

const routes: Routes = [
  {path:'dash',component:DashboardComponent},
  {path:'pub',component:PublicComponent},
  {path:'out',component:OutingComponent},
  {path:'login',component:LoginComponent},
  {path:'header',component:HeaderComponent},
  {path:'details/:id',component:DetailsComponent},
  {path:'ajout',component:AjoutComponent},
  {path:'admin',component:BackofficeComponent, canActivate :[AuthGuard]}
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
