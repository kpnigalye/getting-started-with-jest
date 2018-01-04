import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from "../../services/auth.service";
import { ValidateService } from "../../services/validate.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;
  error: any;

  constructor(
    private router: Router,
    private authService: AuthService,
    private validateService: ValidateService
  ) { }

  ngOnInit() {
  }

  // Login
  onLoginSubmit() {
    console.log("onLoginSubmit");

    let user = {
      email: this.email,
      password: this.password
    }

    if (!this.validateService.validateEmail(this.email)) {
      this.error = "Invalid Email Address";
    }
    else {
      this.authService.authenticateUser(user).subscribe(data => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.router.navigate(['dashboard']);
        } else {
          this.error = "User record not found. Please check your login credentials";
        }
      });
    }
  }
}
