import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from './auth.component';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {RegistrationComponent} from './registration/registration.component';
import {SharedModule} from '../shared/shared.module';
import {MainPageRoutingModule} from '../main-page/main-page-routing.module';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    MainPageRoutingModule
  ]
})
export class AuthModule {

}
