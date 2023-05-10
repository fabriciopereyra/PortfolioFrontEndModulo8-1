import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-update-experience-form',
  templateUrl: './update-experience-form.component.html',
  styleUrls: ['./update-experience-form.component.css'],
})
export class UpdateExperienceFormComponent implements OnInit {
  experience: Experience = null;

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.detail(id).subscribe(
      (data) => {
        this.experience = data;
      },
      (err) => {
        alert('Error al actualizar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  updateExperience(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.update(id, this.experience).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al actualizar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
