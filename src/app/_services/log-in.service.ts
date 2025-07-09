import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse, UserForLogIn } from '../_models/log-in-model';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  ApiUrl: string = 'http://localhost:1337/api/auth/local';

  constructor(private httpclient: HttpClient) {}


  
  getLogIn(requestbody: {
    identifier: string;
    password: string;
  }): Observable<LoginResponse> {
    return this.httpclient.post<LoginResponse>(this.ApiUrl, {
      identifier: requestbody.identifier,
      password: requestbody.password,
    });
  }

  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  logOut() {
    localStorage.removeItem('token');
  }
}
