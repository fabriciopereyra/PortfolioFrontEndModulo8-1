import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { Observable } from 'rxjs';
import { Education } from '../model/education';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EducationService {
  URL = environment.URL + 'education/';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public getEducation(id: number): Observable<Education> {
    return this.httpClient.get<Education>(
      this.URL + `getEducation/${id}`
    );
  }

  public getEducations(): Observable<Education[]> {
    return this.httpClient.get<Education[]>(
      this.URL + 'getEducations'
    );
  }

  public saveEducation(education: Education): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.post<any>(
      this.URL + `saveEducation`,
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
      this.URL + `updateEducation/${id}`,
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
      this.URL + `deleteEducation/${id}`,
      httpOptions
    );
  }
}
