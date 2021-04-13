import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthResponse } from '../model/auth-response.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<AuthResponse> {
    console.log('here: ', email , password);
    return this.http.post<AuthResponse>('http://localhost:8080/users/login', {
      email, password })
  }
}
