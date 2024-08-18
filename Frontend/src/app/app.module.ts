import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationListComponentComponent } from './components/location-list-component/location-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceTypeListComponentComponent } from './components/device-type-list-component/device-type-list-component.component';
import { LightingControlComponent } from './components/lighting-control/lighting-control.component';
import { AddDeviceComponent } from './components/add-device/add-device.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

@NgModule({
  declarations: [
    AppComponent,
    LocationListComponentComponent,
    DeviceTypeListComponentComponent,
    LightingControlComponent,
    AddDeviceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
