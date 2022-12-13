import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OutingComponent } from './outing/outing.component';

const routes: Routes = [
  {path:'',component:ComponentsComponent},
  {path:'out', component:OutingComponent},
  {path:'dash',component:DashboardComponent},
  {path:'home',component:OutingComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
