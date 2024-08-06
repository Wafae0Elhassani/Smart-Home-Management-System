import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

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

  countDevicesByType(type: string,location:string): Observable<number> {
    const formattedLocation = location.replace(/ /g, '_').toUpperCase();
    const formattedType = type.replace(/ /g, '_').toUpperCase();
    console.log(formattedLocation,formattedType);
    return this.http.get<number>(`${this.apiUrl}/count/location/${formattedLocation}/type/${formattedType}`).pipe(
      catchError(this.handleError),
    );
  }
  private handleError(error: any): Observable<never> {
    console.error('An error occurred', error);
    return throwError(error.message || 'Server error');
  }
}
