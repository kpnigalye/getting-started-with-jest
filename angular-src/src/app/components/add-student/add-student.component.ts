import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { StudentService } from '../../services/student.service';

import { settings } from "../../../environments/settings";
import { AuthService } from '../../services/auth.service';
import { PaymentService } from '../../services/payment.service';
import { FeesdetailsService } from '../../services/feesdetails.service';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  studentId: string;
  feesDetailsId: string;
  userId?: string;
  name?: string;
  address?: string;
  branch?: string;
  category?: string;
  stream?: string;
  enrolledFor?: string;
  entrance?: string;
  course?: string;
  offeredSubjects?: string;
  classSession?: string;
  instituteName?: string;
  instituteTiming?: string;
  contactNumber1?: string;
  contactNumber2?: string;
  contactNumber3?: string;
  currentStandard?: string;
  isCombinedAdmission?: boolean;
  isDeleted?: boolean;
  totalFees?: number;
  concession?: number;
  expectedDateOfCompletion?: Date;
  error: string = "";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService,
    private authService: AuthService,
    private studentsService: StudentService,
    private paymentService: PaymentService,
    private feesdetailsService: FeesdetailsService
  ) { }

  ngOnInit() {
    // get user id
    this.userId = this.route.snapshot.params['id'];
    console.log(this.userId);

    //get student name
    this.authService.getUserProfileById(this.userId).subscribe(data => {
      this.name = data.user.name;
      this.contactNumber1 = data.user.phoneNumber;
      console.log("getUserProfileById: " + this.name);
    });
  }

  // Add New Student
  onAddStudentSubmit() {

    console.log("onAddStudentSubmit");

    let newlyAddedStudent = {
      userId: this.userId,
      name: this.name,
      category: this.category,
      stream: this.stream,
      address: this.address,
      classSession: this.classSession,
      branch: this.branch,
      enrolledFor: this.enrolledFor,
      course: this.course,
      offeredSubjects: this.offeredSubjects,
      instituteInfo: {
        name: this.instituteName,
        timing: this.instituteTiming
      },
      contactDetails: this.addContactDetails(),
      isDeleted: false,
      // add current year
      currentYear: settings.currentYear
    }

    this.setCurrentStandard(newlyAddedStudent);

    // add science related fields
    if (this.checkIfScienceStream())
      this.addScienceRelatedFields(newlyAddedStudent);

    /*  Add student record to students collection
        Add payment record to payments collection
        Redirect to Add Payment screen
     */

    this.studentsService.addNewStudent(newlyAddedStudent).subscribe(studentData => {
      if (studentData.success) {
        this.studentId = studentData.student._id;

        this.feesdetailsService.addNewFeesdetails(this.createFeesDetailsObj()).subscribe(feesData => {
          if (feesData.success) {
            this.feesDetailsId = feesData.feesDetails._id;
            this.paymentService.addNewPayment(this.createPaymentDetailsObj()).subscribe(paymentData => {
              if (paymentData.success) {
                let paymentDetailId = paymentData.payment._id;
                this.router.navigate(['addPayment', paymentDetailId]);
              } else {
                this.error = paymentData.msg._message;
              }
            });
          } else {
            this.error = feesData.msg._message;
          }
        });
      }
      else {
        this.error = studentData.msg._message;
      }
    });
  }

  /******************* 
  / Helper functions
  *******************/

  createFeesDetailsObj() {
    return {
      studentId: this.studentId,
      feesDetailsId: this.feesDetailsId,
      totalFees: this.totalFees,
      concession: this.concession,
      totalFeesToPay: Number(this.totalFees) - Number(this.concession),
      totalPaidFees : 0,
      totalInstallmentAmount : 0,
      expectedDateOfCompletion: this.expectedDateOfCompletion,
      isDeleted: false
    }
  }

  createPaymentDetailsObj() {
    return {
      studentId: this.studentId,
      feesDetailsId: this.feesDetailsId,
      studentName: this.name,   /* studentName */
      stream: this.stream,
      enrolledFor: this.enrolledFor,
      receiptNumber: 0,
      isPaid: false,
      paymentDate: "",
      amount: 0,
      modeOfPayment: "",
      bankName: "",
      branch: "",
      chequeDate: new Date(),
      chequeNumber: "",
      remark: "",
      createdAt: new Date(),
      isDeleted: false
    }
  }


  addContactDetails() {
    let contactDetails = [];

    if (this.contactNumber1)
      contactDetails.push(this.contactNumber1);
    if (this.contactNumber2)
      contactDetails.push(this.contactNumber2);
    if (this.contactNumber3)
      contactDetails.push(this.contactNumber3);

    return contactDetails;
  }

  checkIfCollegeSection() {
    return this.category == "College Section";
  }

  checkIfScienceStream() {
    return this.stream == "Science";
  }

  checkIfCommerceStream() {
    return this.stream == "Commerce";
  }

  checkIfArtsStream() {
    return this.stream == "Arts";
  }

  // for sciecne stream specific fields
  addScienceRelatedFields(newlyAddedStudent) {
    newlyAddedStudent.entrance = this.entrance;
    newlyAddedStudent.hasEnrolledForEntrance = (this.entrance != "None");
  }

  // sets current standard
  // checks if admission is combined
  setCurrentStandard(newlyAddedStudent) {
    if (this.checkIfCollegeSection()) {
      newlyAddedStudent.isCombinedAdmission = (this.enrolledFor == "XI + XII");
    }
    else
      newlyAddedStudent.isCombinedAdmission = (this.enrolledFor == "IX + X");

    if (!newlyAddedStudent.isCombinedAdmission) {
      // if not combined admission, set currentStandard same as enrolledFor
      newlyAddedStudent.currentStandard = this.enrolledFor;
    }
    else if (this.checkIfScienceStream() || this.checkIfCommerceStream() || this.checkIfArtsStream()) {
      newlyAddedStudent.currentStandard = this.enrolledFor == "XI + XII" ? "XI" : this.enrolledFor;
    }
    else
      newlyAddedStudent.currentStandard = this.enrolledFor == "IX + X" ? "IX" : this.enrolledFor;
  }

  // unselects all radio inputs on change of category
  unselectAll() {
    console.log("getting here");
    this.stream = "";
    this.enrolledFor = "";
    this.entrance = "";
    this.offeredSubjects = "";
  }

}
