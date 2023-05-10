import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';

@Component({
  selector: 'app-update-education-form',
  templateUrl: './update-education-form.component.html',
  styleUrls: ['./update-education-form.component.css'],
})
export class UpdateEducationFormComponent implements OnInit {
  education: Education = null;

  constructor(
    private educationService: EducationService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.getEducation(id).subscribe(
      (data) => {
        this.education = data;
      },
      (err) => {
        alert('Error al actualizar educacion');
        this.router.navigate(['']);
      }
    );
  }

  updateEducation(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educationService.updateEducation(id, this.education).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al actualizar educacion');
        this.router.navigate(['']);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
