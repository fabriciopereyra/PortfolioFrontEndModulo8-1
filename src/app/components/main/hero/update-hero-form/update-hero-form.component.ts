import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'src/app/model/user-profile';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-update-hero-form',
  templateUrl: './update-hero-form.component.html',
  styleUrls: ['./update-hero-form.component.css'],
})
export class UpdateHeroFormComponent implements OnInit {
  userProfile: UserProfile;

  constructor(
    private userProfileService: UserProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userProfileService.getUserProfile(id).subscribe(
      (data) => {
        this.userProfile = data;
      },
      (err) => {
        alert('Error al actualizar experiencia');
        this.router.navigate(['']);
      }
    );
  }

  updateUserProfile(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userProfileService.updateUserProfile(id, this.userProfile).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al actualizar usuario');
        this.router.navigate(['']);
      }
    );
  }

  uploadUserProfileImage($event: any): void {}

  cancel(): void {
    this.router.navigate(['']);
  }
}
