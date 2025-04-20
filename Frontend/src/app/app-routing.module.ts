import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceTypeListComponentComponent } from './components/device-type-list-component/device-type-list-component.component';
import { LocationListComponentComponent } from './components/location-list-component/location-list-component.component';
import { LightingControlComponent } from './components/lighting-control/lighting-control.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'Register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'ForgotPassword',
    component: ForgotPasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'ResetPassword/:token',
    component: ResetPasswordComponent,
    pathMatch: 'full'
  },
  {
    path: 'deviceType/:location',
    component: DeviceTypeListComponentComponent,
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: LocationListComponentComponent,
    pathMatch: 'full'
  },
  {
    path: 'control/: type',
    component: LightingControlComponent,
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddDeviceComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
