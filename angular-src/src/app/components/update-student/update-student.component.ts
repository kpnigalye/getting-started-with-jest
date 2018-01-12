import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StudentService } from "../../services/student.service";

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id;
  userId;
  name;
  address;
  last;
  branch;
  stream;
  category;
  enrolledFor;
  entrance;
  course;
  offeredSubjects;
  classSession;
  contactDetails?: string[] = [];
  contactNumber1;
  contactNumber2;
  contactNumber3;
  instituteName;
  instituteTiming;
  currentStandard;
  isCombinedAdmission;
  isDeleted;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService
  ) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentDetailsById(this.id).subscribe(studentData => {
      console.log(studentData.student);
      this.userId = studentData.student._id;
      this.name = studentData.student.name;
      this.address = studentData.student.address;
      this.instituteName = studentData.student.instituteInfo.name;
      this.instituteTiming = studentData.student.instituteInfo.timing;
      this.contactNumber1 = studentData.student.contactDetails[0];
      this.contactNumber2 = studentData.student.contactDetails[1];
      this.contactNumber3 = studentData.student.contactDetails[2];
      this.enrolledFor = studentData.student.enrolledFor;
      this.entrance = studentData.student.entrance;
      this.course = studentData.student.course;
      this.classSession = studentData.student.classSession;
      this.branch = studentData.student.branch;
      this.category = studentData.student.category;
      this.stream = studentData.student.stream;
      this.offeredSubjects = studentData.student.offeredSubjects;
    });

  }

  onUpdateSubmit() {
    if (this.contactNumber1 != null)
      this.contactDetails.push(this.contactNumber1);
    if (this.contactNumber2 != null)
      this.contactDetails.push(this.contactNumber2);
    if (this.contactNumber3 != null)
      this.contactDetails.push(this.contactNumber3);

    let studentToUpdate = {
      _id: this.id,
      userId: this.userId,
      name: this.name,
      address: this.address,
      classSession: this.classSession,
      category: this.category,
      stream: this.stream,
      branch: this.branch,
      enrolledFor: this.enrolledFor,
      course: (this.enrolledFor == "X") ? this.course : "Regular",
      offeredSubjects: this.offeredSubjects,
      instituteInfo: {
        name: this.instituteName,
        timing: this.instituteTiming
      },
      contactDetails: this.addContactDetails(),
      isCombinedAdmission: (this.enrolledFor == "XI + XII"),
      isDeleted: false
    }

    this.setCurrentStandard(studentToUpdate);

    // add science related fields
    if (this.checkIfScienceStream())
      this.addScienceRelatedFields(studentToUpdate);

    console.log(studentToUpdate);
    this.studentService.updateStudent(studentToUpdate).subscribe(data => {
      if (data.success) {
        this.router.navigate(['/studentprofile/' + this.id]);
      }
    });
  }


  /******************* 
  / Helper functions
  *******************/
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

    if (this.checkIfScienceStream() || this.checkIfCommerceStream() || this.checkIfArtsStream()) {
      newlyAddedStudent.currentStandard = this.enrolledFor == "XI + XII" ? "XI" : this.enrolledFor;
    }
    else
      newlyAddedStudent.currentStandard = this.enrolledFor == "IX + X" ? "IX" : this.enrolledFor;
  }

  // unselects all radio inputs on change of category
  unselectAll() {
    this.stream = "";
    this.enrolledFor = "";
    this.entrance = "";
    this.offeredSubjects = "";
  }

  showCourses(){
    return (this.enrolledFor == "X" || this.enrolledFor == "XII");
  }

}
