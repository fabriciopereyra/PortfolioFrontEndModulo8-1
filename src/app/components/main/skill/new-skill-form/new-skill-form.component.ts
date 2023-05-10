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

  constructor(private skillService: SkillService, private router: Router) {}

  saveSkill(): void {
    const skill = new Skill(this.skillName, this.skillProgress);
    this.skillService.saveSkill(skill).subscribe(
      (data) => {
        alert('Habilidad creada');
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
