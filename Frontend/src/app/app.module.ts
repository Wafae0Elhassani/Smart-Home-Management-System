import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationListComponentComponent } from './components/location-list-component/location-list-component.component';
import { HttpClientModule } from '@angular/common/http';
import { DeviceTypeListComponentComponent } from './components/device-type-list-component/device-type-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    LocationListComponentComponent,
    DeviceTypeListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
