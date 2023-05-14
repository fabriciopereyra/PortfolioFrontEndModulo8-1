import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/model/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent implements OnInit {
  experiences: Experience[] = [];

  isLogged = false;

  constructor(
    private experienceService: ExperienceService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadExperiences();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public loadExperiences(): void {
    this.experienceService.getExperiences().subscribe((data) => {
      this.experiences = data;
    });
  }

  public deleteExperience(id: number): void {
    let question = confirm('¿Desea eliminar la experiencia?');
    if (question) {
      if (id != undefined) {
        this.experienceService.deleteExperience(id).subscribe(
          (data) => {
            this.loadExperiences();
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
