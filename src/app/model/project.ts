export class Project {
  id: number;

  projectUrl: string;

  projectImage: string;
  
  projectTitle: string;

  projectDescription: string;

  projectPeriod: string;

  projectTechnology: string;

  constructor(
    projectUrl: string,
    projectImage: string,
    projectTitle: string,
    projectDescription: string,
    projectPeriod: string,
    projectTechnology: string
  ) {
    this.projectUrl = projectUrl;
    this.projectImage = projectImage;
    this.projectTitle = projectTitle;
    this.projectDescription = projectDescription;
    this.projectPeriod = projectPeriod;
    this.projectTechnology = projectTechnology;
  }
}
