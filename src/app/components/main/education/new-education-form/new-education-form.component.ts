import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-new-education-form',
  templateUrl: './new-education-form.component.html',
  styleUrls: ['./new-education-form.component.css'],
})
export class NewEducationFormComponent implements OnInit{
  educationUrl: string = '';

  educationImage: string = '';

  educationInstitution: string = '';

  educationTitle: string = '';

  educationPeriod: string = '';

  isSaveFail = false;

  errorMessage: string;

  newImage = false;

  constructor(
    private educationService: EducationService,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    this.imageService.url = "";
  }

  saveEducation(): void {
    const education = new Education(
      this.educationUrl,
      this.imageService.url,
      this.educationTitle,
      this.educationPeriod,
      this.educationInstitution
    );
    this.educationService.saveEducation(education).subscribe(
      (data) => {
        alert('Education creada');
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

  uploadEducationImage($event: any) {
    let dateTime = new Date();
    const directory = "image/education/"
    const name = 'educationImage_' + dateTime.getFullYear() + dateTime.getMonth() + dateTime.getDay() + dateTime.getHours() + dateTime.getMinutes() + dateTime.getSeconds();
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
