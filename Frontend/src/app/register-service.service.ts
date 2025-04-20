import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  private baseUrl = "http://localhost:8080/api/auth";

  constructor(private httpClient: HttpClient) { }

  RegisterUser(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/signup`, user);
  }
}
