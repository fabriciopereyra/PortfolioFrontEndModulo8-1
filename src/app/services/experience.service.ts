import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experience } from '../model/experience';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experienceURL = 'http://localhost:8080/experience/';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.experienceURL + `detail/${id}`);
  }

  public findAll(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.experienceURL + 'findAll');
  }

  public saveExperience(experience: Experience): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.post<any>(
      this.experienceURL + `create`,
      experience,
      httpOptions
    );
  }

  public update(id: number, experience: Experience): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.put<any>(
      this.experienceURL + `update/${id}`,
      experience,
      httpOptions
    );
  }

  public delete(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.delete<any>(
      this.experienceURL + `delete/${id}`,
      httpOptions
    );
  }
}
