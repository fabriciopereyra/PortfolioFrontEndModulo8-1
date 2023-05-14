import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserProfile } from 'src/app/model/user-profile';
import { ImageService } from 'src/app/services/image.service';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-update-hero-form',
  templateUrl: './update-hero-form.component.html',
  styleUrls: ['./update-hero-form.component.css'],
})
export class UpdateHeroFormComponent implements OnInit {
  userProfile: UserProfile = new UserProfile('', '', '', '', '');

  isUpdateFail = false;

  errorMessage: string;

  newImage = false;

  constructor(
    private userProfileService: UserProfileService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public imageService: ImageService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userProfileService.getUserProfile(id).subscribe(
      (data) => {
        this.userProfile = data;
      },
      (err) => {
        alert('Error al cargar el usuario');
        this.router.navigate(['']);
      }
    );
  }

  updateUserProfile(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.userProfile.userProfileImage = this.imageService.url;
    this.userProfileService.updateUserProfile(id, this.userProfile).subscribe(
      (data) => {
        alert('Usuario actualizado');
        this.router.navigate(['']);
      },
      (err) => {
        this.isUpdateFail = true;
        this.userProfile.userProfileImage = '';
        if (err.status == 403) {
          this.errorMessage = 'Acción prohibida'
        } else {
          this.errorMessage = err.error.message;
        }
      }
    );
  }

  uploadUserProfileImage($event: any) {
    let dateTime = new Date();
    const directory = "image/userProfile/";
    const name = 'userProfileImage_' + dateTime.getFullYear() + dateTime.getMonth() + dateTime.getDay() + dateTime.getHours() + dateTime.getMinutes() + dateTime.getSeconds();
    this.imageService.uploadImage($event, directory, name);
    this.newImage = true;
  }

  closeMessage(): void {
    this.isUpdateFail = false;
  }

  closeForm(): void {
    this.router.navigate(['']);
  }
}
