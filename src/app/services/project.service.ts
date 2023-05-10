import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  projectURL = 'http://localhost:8080/project/';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public getProject(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.projectURL + `getProject/${id}`);
  }

  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.projectURL + 'getProjects');
  }

  public saveProject(project: Project): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.post<any>(
      this.projectURL + `saveProject`,
      project,
      httpOptions
    );
  }

  public updateProject(id: number, project: Project): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.put<any>(
      this.projectURL + `updateProject/${id}`,
      project,
      httpOptions
    );
  }

  public deleteProject(id: number): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.delete<any>(
      this.projectURL + `deleteProject/${id}`,
      httpOptions
    );
  }
}
