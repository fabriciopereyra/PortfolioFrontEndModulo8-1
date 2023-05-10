export class Experience {
  id: number;

  experienceUrl: string;

  experienceImage: string;

  experienceJobTitle: string;

  experiencePeriod: string;

  experienceActivity: string;

  constructor(
    experienceUrl: string,
    experienceImage: string,
    experienceJobTitle: string,
    experiencePeriod: string,
    experienceActivity: string
  ) {
    this.experienceUrl = experienceUrl;
    this.experienceImage = experienceImage;
    this.experienceJobTitle = experienceJobTitle;
    this.experiencePeriod = experiencePeriod;
    this.experienceActivity = experienceActivity;
  }
}
