import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credentials, User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private baseUrl = "http://localhost:8080/api/auth";


  constructor(private httpClient: HttpClient) { }

  loginUser(user: Credentials): Observable<object> {
    console.log(user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.httpClient.post(`${this.baseUrl}/login`, user, { headers });
  }
}
