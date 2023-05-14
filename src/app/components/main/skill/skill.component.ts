import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [];

  isLogged = false;

  constructor(
    private skillService: SkillService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public loadSkills(): void {
    this.skillService.getSkills().subscribe((data) => {
      this.skills = data;
    });
  }

  public deleteSkill(id: number): void {
    let question = confirm('¿Desea eliminar la habilidad?');
    if (question) {
      if (id != undefined) {
        this.skillService.deleteSkill(id).subscribe(
          (data) => {
            this.loadSkills();
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
