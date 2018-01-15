import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ValidateService } from "../../services/validate.service";
import { UsersService } from "../../services/users.service";

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css']
})
export class AddAdminComponent implements OnInit {

  email;
  error;
  phoneNumber;
  password;
  name;
  birthDate;
  branch;
  confirmpassword;

  constructor(
    private validateService: ValidateService,
    private usersService: UsersService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddAdminSubmit() {

    console.log("onAddAdminSubmit");

    if (this.password == this.confirmpassword) {

      if (!this.validateService.validateEmail(this.email)) {
        this.error = "Invalid Email Address";
      }
      else {

        let newlyAddedUser = {
          email: this.email,
          birthDate: this.birthDate,
          phoneNumber: this.phoneNumber,
          name: this.name,
          password: this.password,
          role: "Admin",
          branch: this.branch,
          isAdmin: true,
          isActive: false,
          isDeleted: false
        }

        this.usersService.registerUser(newlyAddedUser).subscribe(user => {
          if (user.success) {
            this.router.navigate(['login']);
          } else {
            this.error = user.msg.message;
          }
        });
      }
    }
    else {
      this.error = "Password and Confirm Password do not match.";
    }
  }
}
