import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserProfile } from '../model/user-profile';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class UserProfileService {
  userProfileURL = 'http://localhost:8080/userProfile/';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public getUserProfile(id: number): Observable<UserProfile> {
    return this.httpClient.get<UserProfile>(
      this.userProfileURL + `getUserProfile/${id}`
    );
  }

  // public getUserProfiles(): Observable<UserProfile[]> {
  //   return this.httpClient.get<UserProfile[]>(
  //     this.userProfileURL + 'getUserProfiles'
  //   );
  // }

  // public saveUserProfile(userProfile: UserProfile): Observable<any> {
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer' + this.tokenService.getToken(),
  //     }),
  //   };
  //   return this.httpClient.post<any>(
  //     this.userProfileURL + `saveUserProfile`,
  //     userProfile,
  //     httpOptions
  //   );
  // }

  public updateUserProfile(
    id: number,
    userProfile: UserProfile
  ): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.put<any>(
      this.userProfileURL + `updateUserProfile/${id}`,
      userProfile,
      httpOptions
    );
  }

  // public deleteUserProfile(id: number): Observable<any> {
  //   let httpOptions = {
  //     headers: new HttpHeaders({
  //       Authorization: 'Bearer' + this.tokenService.getToken(),
  //     }),
  //   };
  //   return this.httpClient.delete<any>(
  //     this.userProfileURL + `deleteUserProfile/${id}`,
  //     httpOptions
  //   );
  // }
}
