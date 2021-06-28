import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'registrationPage',
    component:RegistrationComponent
  },
  {
    path: 'loginPage',
    component:LoginPageComponent
  },
  {
    path: 'homePage',
    component:HomePageComponent
  },
  {
    path: '**',
    component:HomePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [RegistrationComponent,LoginPageComponent,HomePageComponent]