import { Component } from '@angular/core';
import { type } from '../../enums/type.enum';
import { Location } from '../../enums/location.enum';
import { locationTypeMapping } from '../../constants/location-type-mapping';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrl: './add-device.component.css'
})
export class AddDeviceComponent {

  deviceName: string = '';
  location!: Location;
  deviceType!: type;
  locations = Object.values(Location);
  availableTypes: type[] = [];

  onLocationChange() {
    this.availableTypes = locationTypeMapping[this.location] || [];
  }


  onAddDevice() {
    if (this.deviceName && this.location && this.deviceType) {
    }
  }

}
