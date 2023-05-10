import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css'],
})
export class NewProjectFormComponent {
  projectUrl: string;

  projectImage: string;
  
  projectTitle: string;

  projectDescription: string;

  projectPeriod: string;

  projectTechnology: string;

  constructor(private projectService: ProjectService, private router: Router) {}

  saveProject(): void {
    const project = new Project(
      this.projectUrl,
      this.projectImage,
      this.projectTitle,
      this.projectDescription,
      this.projectPeriod,
      this.projectTechnology
    );
    this.projectService.saveProject(project).subscribe(
      (data) => {
        alert('Proyecto creado');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo');
        this.router.navigate(['']);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
