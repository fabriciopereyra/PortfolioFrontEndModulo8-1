import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLogin } from 'src/app/model/user-login';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoginFail = false;

  errorMessage: string;

  userLogin: UserLogin;

  userName: string = '';

  password: string = '';

  roles: string[] = [];

  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoginFail = false;
      this.roles = this.tokenService.getAuthorities();
    }
  }

  onLogIn(): void {
    this.isLoginFail = false;
    this.userLogin = new UserLogin(this.userName, this.password);
    this.authService.login(this.userLogin).subscribe(
      (data) => {
        this.isLoginFail = false;
        this.tokenService.setToken(data.token);
        this.tokenService.setUserName(data.userName);
        this.tokenService.setAuthorities(data.authorities);
        this.roles = data.authorities;
        this.router.navigate(['']);
      },
      (err) => {
        this.isLoginFail = true;
        if (err.status == 403) {
          this.errorMessage = 'Acción prohibida'
        } else {
          this.errorMessage = err.error.message;
        }
      }
    );
  }

  closeMessage(): void {
    this.isLoginFail = false;
  }

  closeForm(): void {
    this.router.navigate(['']);
  }
}
