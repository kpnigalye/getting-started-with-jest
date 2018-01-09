import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { StudentService } from '../../services/student.service';
import { ValidateService } from "../../services/validate.service";

@Component({
  selector: 'app-signup-student',
  templateUrl: './signup-student.component.html',
  styleUrls: ['./signup-student.component.css']
})
export class SignupStudentComponent implements OnInit {

  error: any;
  email: string;
  password: string;
  consfirmpassword: string;
  phoneNumber: string;
  name: string;
  birthDate: Date;
  userDetails: any;

  constructor(
    private usersService: UsersService,
    private validateService: ValidateService,
    private studentService: StudentService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignupSubmit() {

    console.log("onSignupSubmit");

    if (!this.validateService.validateEmail(this.email)) {
      this.error = "Invalid Email Address";
    }
    else {

      this.password = this.phoneNumber.toString();

      let newlyAddedUser = {
        email: this.email,
        birthDate: this.birthDate,
        phoneNumber: this.phoneNumber,
        name: this.name,
        password: this.password,
        userRole: "Student",
        isAdmin: false,
        isActive: false
      }

      this.usersService.registerUser(newlyAddedUser).subscribe(user => {
        if (user.success) {
          this.router.navigate(['addstudent/'+ user.data._id]);
        } else {
          this.error = "User record not found. Please check your login credentials";
        }
      });
    }
  }

}
