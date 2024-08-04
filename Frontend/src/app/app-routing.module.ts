import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceTypeListComponentComponent } from './components/device-type-list-component/device-type-list-component.component';
import { LocationListComponentComponent } from './components/location-list-component/location-list-component.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
