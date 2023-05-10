import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  skillURL = 'http://localhost:8080/skill/';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public getSkill(id: number): Observable<Skill> {
    return this.httpClient.get<Skill>(this.skillURL + `getSkill/${id}`);
  }

  public getSkills(): Observable<Skill[]> {
    return this.httpClient.get<Skill[]>(this.skillURL + 'getSkills');
  }

  public saveSkill(skill: Skill): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.post<any>(
      this.skillURL + `saveSkill`,
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
      this.skillURL + `updateSkill/${id}`,
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
      this.skillURL + `deleteSkill/${id}`,
      httpOptions
    );
  }
}
