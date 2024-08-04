import { Component } from '@angular/core';
import { Location } from '../../enums/location.enum';
import { DeviceService } from '../../services/device.service';

@Component({
  selector: 'app-location-list-component',
  templateUrl: './location-list-component.component.html',
  styleUrl: './location-list-component.component.css'
})
export class LocationListComponentComponent {

  constructor(private deviceService: DeviceService) { }

  totalDevices: number = 0;
  devicesByLocation: { [key: string]: number } = {};
  //devicesByType: { [key: string]: number } = {};

  locations = Object.values(Location);
  devices: any[] = [];

  ngOnInit(): void {
    this.getTotalDevices();
    this.locations.forEach(location => {
      this.getDevicesByLocation(location);
    });
  }

  getTotalDevices(): void {
    this.deviceService.countAllDevices().subscribe(count => {
      this.totalDevices = count;
    });
  }

  getDevicesByLocation(location: string): void {
    this.deviceService.countDevicesByLocation(location).subscribe(count => {
      this.devicesByLocation[location] = count;
      this.devices.push({ location: location, count: count });
    });
  }

  /* getDevicesByType(type: string): void {
    this.deviceService.countDevicesByType(type).subscribe(count => {
      this.devicesByType[type] = count;
    });
  } */

}
