import { Component } from '@angular/core';
import { UserProfile } from 'src/app/model/user-profile';
import { TokenService } from 'src/app/services/token.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css'],
})
export class AboutmeComponent {
  userProfile: UserProfile = new UserProfile('', '', '', '','');

  isLogged = false;

  constructor(
    private userProfileService: UserProfileService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadUserProfile();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public loadUserProfile(): void {
    this.userProfileService.getUserProfile(1).subscribe((data) => {
      this.userProfile = data;
    });
  }
}
