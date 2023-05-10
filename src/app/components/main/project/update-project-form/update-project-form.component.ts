import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from 'src/app/model/project';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-update-project-form',
  templateUrl: './update-project-form.component.html',
  styleUrls: ['./update-project-form.component.css']
})
export class UpdateProjectFormComponent implements OnInit {
  project: Project = null;

  constructor(
    private projectService: ProjectService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.getProject(id).subscribe(
      (data) => {
        this.project = data;
      },
      (err) => {
        alert('Error al actualizar proyecto');
        this.router.navigate(['']);
      }
    );
  }

  updateProject(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.projectService.updateProject(id, this.project).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al actualizar proyecto');
        this.router.navigate(['']);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
