import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  URL = environment.URL + 'skill/';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public getSkill(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.URL + `getSkill/${id}`);
  }

  public getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.URL + 'getSkills');
  }

  public saveSkill(skill: Skill): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.post<any>(
      this.URL + `saveSkill`,
      skill,
      httpOptions
    );
  }

  public updateSkill(id: number, skill: Skill): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.put<any>(
      this.URL + `updateSkill/${id}`,
      skill,
      httpOptions
    );
  }

  public deleteSkill(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.delete<any>(
      this.URL + `deleteSkill/${id}`,
      httpOptions
    );
  }
}
