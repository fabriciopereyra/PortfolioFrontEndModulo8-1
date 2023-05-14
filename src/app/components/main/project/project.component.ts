import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];

  isLogged = false;

  constructor(
    private projectService: ProjectService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadProjects();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public loadProjects(): void {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data;
    });
  }

  public deleteProject(id: number): void {
    let question = confirm('¿Desea eliminar el proyecto?');
    if (question) {
      if (id != undefined) {
        this.projectService.deleteProject(id).subscribe(
          (data) => {
            this.loadProjects();
          },
          (err) => {
            if (err.status == 403) {
              alert('Acción prohibida');
            } else {
              alert('No se pudo eliminar la educacion');
            }
          }
        );
      }
    }
  }
}
