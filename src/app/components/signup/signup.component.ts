import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/model/new-user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  isSignUpFail = false;

  errorMessage: string;

  newUser: NewUser;

  name: string = '';

  userName: string = '';

  email: string = '';

  password: string = '';

  role: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignUp(): void {
    this.isSignUpFail = false;
    this.newUser = new NewUser(
      this.name,
      this.userName,
      this.email,
      this.password,
      this.role
    );
    this.authService.signup(this.newUser).subscribe(
      (data) => {
        this.isSignUpFail = false;
        alert('Usuario creado');
        this.router.navigate(['']);
      },
      (err) => {
        this.isSignUpFail = true;
        if (err.status == 403) {
          this.errorMessage = 'Acción prohibida'
        } else {
          this.errorMessage = err.error.message;
        }
      }
    );
  }

  closeMessage(): void {
    this.isSignUpFail = false;
  }

  closeForm(): void {
    this.router.navigate(['']);
  }
}
