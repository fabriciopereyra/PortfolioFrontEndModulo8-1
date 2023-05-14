import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageService } from 'src/app/services/image.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css'],
})
export class NewProjectFormComponent implements OnInit {
  projectUrl: string;

  projectImage: string;

  projectTitle: string;

  projectDescription: string;

  projectPeriod: string;

  projectTechnology: string;

  isSaveFail = false;

  errorMessage: string;

  newImage = false;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.imageService.url = '';
  }

  saveProject(): void {
    const project = new Project(
      this.projectUrl,
      this.imageService.url,
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
        this.isSaveFail = true;
        if (err.status == 403) {
          this.errorMessage = 'Acción prohibida'
        } else {
          this.errorMessage = err.error.message;
        }
      }
    );
  }

  uploadProjectImage($event: any) {
    let dateTime = new Date();
    const directory = 'image/project/';
    const name =
      'projectImage_' +
      dateTime.getFullYear() +
      dateTime.getMonth() +
      dateTime.getDay() +
      dateTime.getHours() +
      dateTime.getMinutes() +
      dateTime.getSeconds();
    this.imageService.uploadImage($event, directory, name);
    this.newImage = true;
  }

  closeMessage(): void {
    this.isSaveFail = false;
  }

  closeForm(): void {
    this.router.navigate(['']);
  }
}
