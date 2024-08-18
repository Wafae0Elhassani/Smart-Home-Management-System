import { Component, OnInit } from '@angular/core';
import { type } from '../../enums/type.enum';
import { DeviceService } from '../../services/device.service';
import { ActivatedRoute } from '@angular/router';
import { locationTypeMapping } from '../../constants/location-type-mapping';

@Component({
  selector: 'app-device-type-list-component',
  templateUrl: './device-type-list-component.component.html',
  styleUrls: ['./device-type-list-component.component.css']
})
export class DeviceTypeListComponentComponent implements OnInit {
  location: string = "";
  totalDevices: number = 0;
  devicesByType: { [key: string]: number } = {};
  devices: any[] = [];
  availableTypes: type[] = [];

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.location = this.route.snapshot.paramMap.get('location')!;
    this.availableTypes = locationTypeMapping[this.location as keyof typeof locationTypeMapping] || [];
    this.getTotalDevices();
    this.availableTypes.forEach(type => {
      this.getDevicesByType(type);
    });
  }

  getDevicesByType(type: string): void {
    this.deviceService.countDevicesByType(type, this.location).subscribe(
      count => {
        this.devicesByType[type] = count;
        this.devices.push({ type: type, count: count });
      },

    );
  }


  getTotalDevices(): void {
    this.deviceService.countDevicesByLocation(this.location).subscribe(count => {
      this.totalDevices = count;
    });
  }
}
