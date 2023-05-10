import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';

@Component({
  selector: 'app-new-experience-form',
  templateUrl: './new-experience-form.component.html',
  styleUrls: ['./new-experience-form.component.css'],
})
export class NewExperienceFormComponent {
  experienceUrl: string = '';

  experienceImage: string = '';

  experienceJobTitle: string = '';

  experiencePeriod: string = '';

  experienceActivity: string = '';

  constructor(
    private experienceService: ExperienceService,
    private router: Router
  ) {}

  saveExperience(): void {
    const experience = new Experience(
      this.experienceUrl,
      this.experienceImage,
      this.experienceJobTitle,
      this.experiencePeriod,
      this.experienceActivity
    );
    this.experienceService.saveExperience(experience).subscribe(
      (data) => {
        alert('Experiencia creada');
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
