import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education';
import { EducationService } from 'src/app/services/education.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educations: Education[] = [];

  isLogged = false;

  constructor(
    private educationService: EducationService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadEducations();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public loadEducations(): void {
    this.educationService.getEducations().subscribe((data) => {
      this.educations = data;
    });
  }

  public deleteEducation(id: number): void {
    let question = confirm('¿Desea eliminar la educacion?');
    if (question) {
      if (id != undefined) {
        this.educationService.deleteEducation(id).subscribe(
          (data) => {
            this.loadEducations();
          },
          (err) => {
            if (err.status == 403) {
              alert('Acción prohibida');
            } else {
              alert('No se pudo eliminar la educacion');
            }
            
          }
        );
      }
    }
  }
}
