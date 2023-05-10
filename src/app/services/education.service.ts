import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { Education } from '../model/education';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  educationURL = 'http://localhost:8080/education/';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public getEducation(id: number): Observable<Education> {
    return this.httpClient.get<Education>(
      this.educationURL + `getEducation/${id}`
    );
  }

  public getEducations(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(
      this.educationURL + 'getEducations'
    );
  }

  public saveEducation(education: Education): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.post<any>(
      this.educationURL + `saveEducation`,
      education,
      httpOptions
    );
  }

  public updateEducation(id: number, education: Education): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.put<any>(
      this.educationURL + `updateEducation/${id}`,
      education,
      httpOptions
    );
  }

  public deleteEducation(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.delete<any>(
      this.educationURL + `deleteEducation/${id}`,
      httpOptions
    );
  }
}
