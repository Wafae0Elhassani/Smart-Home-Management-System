import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceTypeListComponentComponent } from './components/device-type-list-component/device-type-list-component.component';
import { LocationListComponentComponent } from './components/location-list-component/location-list-component.component';
import { LightingControlComponent } from './components/lighting-control/lighting-control.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';

const routes: Routes = [
  {
    path: 'deviceType/:location',
    component: DeviceTypeListComponentComponent,
    pathMatch: 'full'
  },
  {
    path: '',
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
