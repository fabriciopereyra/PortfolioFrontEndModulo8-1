import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-new-skill-form',
  templateUrl: './new-skill-form.component.html',
  styleUrls: ['./new-skill-form.component.css'],
})
export class NewSkillFormComponent {
  skillName: string;

  skillProgress: number;

  isSaveFail = false;

  errorMessage: string;

  constructor(private skillService: SkillService, private router: Router) {}

  saveSkill(): void {
    const skill = new Skill(this.skillName, this.skillProgress);
    this.skillService.saveSkill(skill).subscribe(
      (data) => {
        alert('Habilidad creada');
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

  closeMessage(): void {
    this.isSaveFail = false;
  }

  closeForm(): void {
    this.router.navigate(['']);
  }
}
