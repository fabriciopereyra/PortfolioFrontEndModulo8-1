import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/user-login';
import { NewUser } from '../model/new-user';
import { JwtDTO } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authURL = 'http://localhost:8080/auth/';

  constructor(private httpClient: HttpClient) {}

  public newUser(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'new', newUser);
  }

  public login(userLogin: UserLogin): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.authURL + 'login', userLogin);
  }
}
