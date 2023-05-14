import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ImageService } from 'src/app/services/image.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-update-project-form',
  templateUrl: './update-project-form.component.html',
  styleUrls: ['./update-project-form.component.css'],
})
export class UpdateProjectFormComponent implements OnInit {
  project: Project = new Project('', '', '', '', '', '');

  isUpdateFail = false;

  errorMessage: string;

  newImage = false;

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.getProject(id).subscribe(
      (data) => {
        this.project = data;
      },
      (err) => {
        alert('Error al cargar proyecto');
        this.router.navigate(['']);
      }
    );
  }

  updateProject(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.project.projectImage = this.imageService.url;
    this.projectService.updateProject(id, this.project).subscribe(
      (data) => {
        alert('Proyecto actualizado');
        this.router.navigate(['']);
      },
      (err) => {
        this.isUpdateFail = true;
        this.project.projectImage = "";
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
    const directory = "image/project/";
    const name = 'projectImage_' + dateTime.getFullYear() + dateTime.getMonth() + dateTime.getDay() + dateTime.getHours() + dateTime.getMinutes() + dateTime.getSeconds();
    this.imageService.uploadImage($event, directory, name);
    this.newImage = true;
  }

  closeMessage(): void {
    this.isUpdateFail = false;
  }

  closeForm(): void {
    this.router.navigate(['']);
  }
}
