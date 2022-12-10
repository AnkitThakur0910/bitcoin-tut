import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BtcComponent } from './btc/btc.component';
import { CompeteComponent } from './compete/compete.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsernameComponent } from './username/username.component';



const routes: Routes = [
  { 
    path:''  ,redirectTo : 'home', pathMatch : 'full'
  },
  {
    path : 'home', component : HomeComponent, children : []
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'login',component:LoginComponent
  },
  {
    path : "landing",component:LandingComponent,canActivate : [AuthGuard]
  },
  {
    path : "btc", component:BtcComponent, canActivate : [AuthGuard]
  },
  {
    path:"username", component : UsernameComponent, canActivate : [AuthGuard]
  },
  {
    path:"compete", component : CompeteComponent, canActivate : [AuthGuard]
  },
  {
    path:"**",component:HomeComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
