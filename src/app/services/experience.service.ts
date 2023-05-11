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

  public detail(id: number): Observable<Experience> {
    return this.httpClient.get<Experience>(this.URL + `detail/${id}`);
  }

  public findAll(): Observable<Experience[]> {
    return this.httpClient.get<Experience[]>(this.URL + 'findAll');
  }

  public saveExperience(experience: Experience): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.post<any>(
      this.URL + `create`,
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
      this.URL + `update/${id}`,
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
      this.URL + `delete/${id}`,
      httpOptions
    );
  }
}
