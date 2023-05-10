import { Component, OnInit } from '@angular/core';
import { UserProfile } from 'src/app/model/user-profile';
import { TokenService } from 'src/app/services/token.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})
export class HeroComponent implements OnInit {
  userProfile: UserProfile = null;

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
