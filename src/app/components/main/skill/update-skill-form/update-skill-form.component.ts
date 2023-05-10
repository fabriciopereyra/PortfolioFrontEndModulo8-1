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
  skill: Skill = null;

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
        alert('Error al actualizar habilidad');
        this.router.navigate(['']);
      }
    );
  }

  updateSkill(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.skillService.updateSkill(id, this.skill).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al actualizar habilidad');
        this.router.navigate(['']);
      }
    );
  }

  cancel(): void {
    this.router.navigate(['']);
  }
}
