import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:8085/api/v1/device';

  countAllDevices(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count`);
  }

  countDevicesByLocation(location: string): Observable<number> {
    const formattedLocation = location.replace(/ /g, '_').toUpperCase();
    return this.http.get<number>(`${this.apiUrl}/count/location/${formattedLocation}`);
  }

  /* countDevicesByType(type: string): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/count/type/${type}`);
  } */
}
