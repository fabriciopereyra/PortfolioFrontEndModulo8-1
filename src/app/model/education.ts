export class Education {
  id: number;

  educationUrl: string;

  educationImage: string;

  educationTitle: string;

  educationPeriod: string;

  educationInstitution: string;

  constructor(
    educationUrl: string,
    educationImage: string,
    educationTitle: string,
    educationPeriod: string,
    educationInstitution: string
  ) {
    this.educationUrl = educationUrl;
    this.educationImage = educationImage;
    this.educationTitle = educationTitle;
    this.educationPeriod = educationPeriod;
    this.educationInstitution = educationInstitution;
  }
}
