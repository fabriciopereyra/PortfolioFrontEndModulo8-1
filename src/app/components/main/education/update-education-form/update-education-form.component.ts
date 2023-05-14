import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-update-education-form',
  templateUrl: './update-education-form.component.html',
  styleUrls: ['./update-education-form.component.css'],
})
export class UpdateEducationFormComponent implements OnInit {
  education: Education = new Education('', '', '', '', '');

  isUpdateFail = false;

  errorMessage: string;

  newImage = false;

  constructor(
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.getEducation(id).subscribe(
      (data) => {
        this.education = data;
      },
      (err) => {
        alert('Error al cargar educación');
        this.router.navigate(['']);
      }
    );
  }

  updateEducation(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.education.educationImage = this.imageService.url;
    this.educationService.updateEducation(id, this.education).subscribe(
      (data) => {
        alert('Educación actualizada');
        this.router.navigate(['']);
      },
      (err) => {
        this.isUpdateFail = true;
        this.education.educationImage = '';
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
    const directory = 'image/education/';
    const name =
      'educationImage_' +
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
    this.isUpdateFail = false;
  }

  closeForm(): void {
    this.router.navigate(['']);
  }
}
