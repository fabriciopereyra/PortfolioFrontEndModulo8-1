export class UserProfile {
  id: number;

  userProfileName: string;

  userProfileSurname: string;

  userProfileImage: string;

  userProfileAbout: string;

  constructor(
    userProfileName: string,
    userProfileSurname: string,
    userProfileImage: string,
    userProfileAbout: string
  ) {
    this.userProfileName = userProfileName;
    this.userProfileSurname = userProfileSurname;
    this.userProfileImage = userProfileImage;
    this.userProfileAbout = userProfileAbout;
  }
}
