export class UserProfile {
  id: number;

  userProfileName: string;

  userProfileSurname: string;

  userProfileImage: string;

  userProfileTitle: string;

  userProfileAbout: string

  constructor(
    userProfileName: string,
    userProfileSurname: string,
    userProfileImage: string,
    userProfileTitle: string,
    userProfileAbout: string
  ) {
    this.userProfileName = userProfileName;
    this.userProfileSurname = userProfileSurname;
    this.userProfileImage = userProfileImage;
    this.userProfileTitle = userProfileTitle;
    this.userProfileAbout = userProfileAbout;
  }
}
