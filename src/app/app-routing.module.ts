import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutUsComponent} from './about-us/about-us.component'
import { BodyComponent } from './body/body.component';

import { LoginPAgeComponent } from './login-page/login-page.component';
import {RegistrationComponent} from './registration/registration.component';

const routes: Routes = [
  {path:'',redirectTo:'',pathMatch:'full'},
  {path:'login-page',component:LoginPAgeComponent },
  {path:'about-us',component:AboutUsComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'**',component:BodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents =[LoginPAgeComponent,AboutUsComponent,RegistrationComponent]
