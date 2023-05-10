export class Skill {
  id: number;

  skillName: string;

  skillProgress: number;

  constructor(skillName: string, skillProgress: number) {
    this.skillName = skillName;
    this.skillProgress = skillProgress;
  }
}
