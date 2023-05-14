import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-update-experience-form',
  templateUrl: './update-experience-form.component.html',
  styleUrls: ['./update-experience-form.component.css'],
})
export class UpdateExperienceFormComponent implements OnInit {
  experience: Experience = new Experience('', '', '', '', '', '');
  
  isUpdateFail = false;

  errorMessage: string;

  newImage = false;

  constructor(
    private experienceService: ExperienceService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experienceService.getExperience(id).subscribe(
      (data) => {
        this.experience = data;
      },
      (err) => {
        alert('Error al cargar la experiencia');
        this.router.navigate(['']);
      }
    );
  }

  updateExperience(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.experience.experienceImage = this.imageService.url;
    this.experienceService.updateExperience(id, this.experience).subscribe(
      (data) => {
        alert('Experiencia actualizada');
        this.router.navigate(['']);
      },
      (err) => {
        this.isUpdateFail = true;
        this.experience.experienceImage = "";
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
    const directory = "image/experience/";
    const name = 'experienceImage_' + dateTime.getFullYear() + dateTime.getMonth() + dateTime.getDay() + dateTime.getHours() + dateTime.getMinutes() + dateTime.getSeconds();
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
