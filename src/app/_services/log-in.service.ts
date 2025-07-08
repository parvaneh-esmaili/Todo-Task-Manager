import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserForLogIn } from '../_models/log-in-model';

@Injectable({
  providedIn: 'root',
})
export class LogInService {
  ApiUrl: string = 'http://localhost:1337/api/auth/local';

  constructor(private httpclient: HttpClient) {}

  getLogIn(requestbody: {
    identifier: string;
    password: string;
  }): Observable<UserForLogIn> {
    console.log(requestbody)
    return this.httpclient.post<UserForLogIn>(this.ApiUrl, {
      identifier: requestbody.identifier,
      password: requestbody.password,
    });
  }
}
