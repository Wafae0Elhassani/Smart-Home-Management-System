import { Component, OnInit } from '@angular/core';
import { type } from '../../enums/type.enum';
import { DeviceService } from '../../services/device.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-device-type-list-component',
  templateUrl: './device-type-list-component.component.html',
  styleUrls: ['./device-type-list-component.component.css']
})
export class DeviceTypeListComponentComponent implements OnInit {
  location: string = "";
  totalDevices: number = 0;
  devicesByType: { [key: string]: number } = {};
  types = Object.values(type);
  devices: any[] = [];

  constructor(private deviceService: DeviceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.location = this.route.snapshot.paramMap.get('location')!;
    this.getTotalDevices();
    this.types.forEach(type => {
      this.getDevicesByType(type);
    });
    console.log(this.types);
  }

  getDevicesByType(type: string): void {
    this.deviceService.countDevicesByType(type,this.location).subscribe(
      count => {
        this.devicesByType[type] = count;
        this.devices.push({ type: type, count: count });
        
        

      },
      
    );
    console.log(this.devices);
  }
  

  getTotalDevices(): void {
    this.deviceService.countDevicesByLocation(this.location).subscribe(count => {
      this.totalDevices = count;
    });
  }
}
