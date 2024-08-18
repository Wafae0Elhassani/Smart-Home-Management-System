import { Component } from '@angular/core';

@Component({
  selector: 'app-lighting-control',
  templateUrl: './lighting-control.component.html',
  styleUrl: './lighting-control.component.css'
})
export class LightingControlComponent {

  lights = [
    { name: 'Bedroom bulb', icon: 'assets/icons/bedroom-bulb.png' },
    { name: 'Bed lamp', icon: 'assets/icons/bed-lamp.png' },
    { name: 'Dimmer', icon: 'assets/icons/dimmer.png' },
    { name: 'Tubelight', icon: 'assets/icons/tubelight.png' }
  ];

  selectedLight = this.lights[0];
  isOn = false;
  modes = ['Morning', 'Day', 'Night'];
  selectedMode = this.modes[0];
  intensity = 50;
  shades = ['#ff0000', '#00ff00', '#0000ff', '#ffff00'];
  selectedShade = this.shades[0];

  selectLight(light: any) {
    this.selectedLight = light;
  }

  toggleLight() {
    this.isOn = !this.isOn;
  }

  selectMode(mode: string) {
    this.selectedMode = mode;
  }

  selectShade(shade: string) {
    this.selectedShade = shade;
  }
}
