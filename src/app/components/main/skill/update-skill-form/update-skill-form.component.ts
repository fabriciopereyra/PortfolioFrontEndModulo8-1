import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-update-skill-form',
  templateUrl: './update-skill-form.component.html',
  styleUrls: ['./update-skill-form.component.css']
})
export class UpdateSkillFormComponent implements OnInit {
  skill: Skill = new Skill("", 0);

  isUpdateFail = false;

  errorMessage: string;

  constructor(
    private skillService: SkillService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.getSkill(id).subscribe(
      (data) => {
        this.skill = data;
      },
      (err) => {
        alert('Error al cargar habilidad');
        this.router.navigate(['']);
      }
    );
  }

  updateSkill(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.updateSkill(id, this.skill).subscribe(
      (data) => {
        alert('Habilidad actualizada');
        this.router.navigate(['']);
      },
      (err) => {
        this.isUpdateFail = true;
        if (err.status == 403) {
          this.errorMessage = 'Acción prohibida'
        } else {
          this.errorMessage = err.error.message;
        }
      }
    );
  }

  closeMessage(): void {
    this.isUpdateFail = false;
  }

  closeForm(): void {
    this.router.navigate(['']);
  }
}
