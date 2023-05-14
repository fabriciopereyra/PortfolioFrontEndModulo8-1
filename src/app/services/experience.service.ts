import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  URL = environment.URL + 'experience/';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public getExperience(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.URL + `getExperience/${id}`);
  }

  public getExperiences(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.URL + 'getExperiences');
  }

  public saveExperience(experience: Experience): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.post<any>(
      this.URL + `saveExperience`,
      experience,
      httpOptions
    );
  }

  public updateExperience(id: number, experience: Experience): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.put<any>(
      this.URL + `updateExperience/${id}`,
      experience,
      httpOptions
    );
  }

  public deleteExperience(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.delete<any>(this.URL + `deleteExperience/${id}`, httpOptions);
  }
}
