import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-new-education-form',
  templateUrl: './new-education-form.component.html',
  styleUrls: ['./new-education-form.component.css'],
})
export class NewEducationFormComponent {
  educationUrl: string = '';

  educationImage: string = '';

  educationInstitution: string = '';

  educationTitle: string = '';

  educationPeriod: string = '';

  constructor(
    private educationService: EducationService,
    private router: Router
  ) {}

  saveEducation(): void {
    const education = new Education(
      this.educationUrl,
      this.educationImage,
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
        alert('Fallo');
        this.router.navigate(['']);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
