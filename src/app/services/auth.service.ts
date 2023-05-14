import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLogin } from '../model/user-login';
import { NewUser } from '../model/new-user';
import { JwtDTO } from '../model/jwt-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL = environment.URL + 'auth/';

  constructor(private httpClient: HttpClient) {}

  public signup(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'signup', newUser);
  }

  public login(userLogin: UserLogin): Observable<JwtDTO> {
    return this.httpClient.post<JwtDTO>(this.URL + 'login', userLogin);
  }
}
