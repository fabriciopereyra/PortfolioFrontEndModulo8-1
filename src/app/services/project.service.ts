import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';
import { Project } from '../model/project';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  URL = environment.URL + 'project/';

  constructor(
    private httpClient: HttpClient,
    private tokenService: TokenService
  ) {}

  public getProject(id: number): Observable<Project> {
    return this.httpClient.get<Project>(this.URL + `getProject/${id}`);
  }

  public getProjects(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.URL + 'getProjects');
  }

  public saveProject(project: Project): Observable<any> {
    let httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer' + this.tokenService.getToken(),
      }),
    };
    return this.httpClient.post<any>(
      this.URL + `saveProject`,
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
      this.URL + `updateProject/${id}`,
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
      this.URL + `deleteProject/${id}`,
      httpOptions
    );
  }
}
