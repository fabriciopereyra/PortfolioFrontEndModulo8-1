import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-new-experience-form',
  templateUrl: './new-experience-form.component.html',
  styleUrls: ['./new-experience-form.component.css'],
})
export class NewExperienceFormComponent implements OnInit {
  experienceUrl: string = '';

  experienceImage: string = '';

  experienceJobTitle: string = '';

  experiencePeriod: string = '';

  experienceActivity: string = '';
  
  experienceInstitution: string = '';

  isSaveFail = false;

  errorMessage: string;

  newImage = false;

  constructor(
    private experienceService: ExperienceService,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.imageService.url = "";
  }

  saveExperience(): void {
    const experience = new Experience(
      this.experienceUrl,
      this.imageService.url,
      this.experienceJobTitle,
      this.experiencePeriod,
      this.experienceActivity,
      this.experienceInstitution
    );
    this.experienceService.saveExperience(experience).subscribe(
      (data) => {
        alert('Experiencia creada');
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

  uploadExperienceImage($event: any) {
    let dateTime = new Date();
    const directory = "image/experience/"
    const name = 'experienceImage_' + dateTime.getFullYear() + dateTime.getMonth() + dateTime.getDay() + dateTime.getHours() + dateTime.getMinutes() + dateTime.getSeconds();
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
