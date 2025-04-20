import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  private baseUrl = "http://localhost:8080/user/forgotPassword";


  constructor(private httpClient: HttpClient) { }

  forgotPassword(email: String): Observable<any> {
    return this.httpClient.post(`${this.baseUrl}`, email, { responseType: 'text' });
  }
}
