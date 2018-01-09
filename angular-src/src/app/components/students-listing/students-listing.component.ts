import { Component, OnInit } from '@angular/core';
import { StudentService } from "../../services/student.service";

@Component({
  selector: 'app-students-listing',
  templateUrl: './students-listing.component.html',
  styleUrls: ['./students-listing.component.css']
})
export class StudentsListingComponent implements OnInit {

  branch;
  course;
  classSession;
  category;
  stream;
  enrolledFor;
  entrance;
  offeredSubjects;
  students;

  englishMediumData;
  marathiMediumData;
  semienglishMediumData;
  commerceSectionData;
  artsSectionData;
  scienceSectionData;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
    console.log('students-listing');
  }

  checkIfCollegeSection() {
    return this.category == "College Section";
  }

  checkIfSchoolSection() {
    return this.category == "School Section";
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

  // unselects all radio inputs on change of category
  unselectAll() {
    this.stream = "";
    this.enrolledFor = "";
    this.entrance = "";
    this.offeredSubjects = "";
  }

  listStudents(category, stream) {
    console.log("from liststudents");

    if (stream == "English" || stream == "Semi-English" || stream == "Marathi") {
      this.studentService.searchSchoolSectionStudents(this.branch, category, stream, this.enrolledFor, this.course, this.classSession).subscribe(studentsData => {
        if (studentsData.success) {
          this.students = studentsData.students;
          if (stream == "English")
            this.englishMediumData = studentsData.students;
          if (stream == "Semi-English")
            this.semienglishMediumData = studentsData.students;
          if (stream == "Marathi")
            this.marathiMediumData = studentsData.students;
        }
      });
    }

    if (category == "College Section" && stream != "Science") {
      this.studentService.searchCollegeSectionStudents(
        this.branch, category, stream, this.enrolledFor,
        this.course, this.classSession, this.offeredSubjects
      ).subscribe(studentsData => {
        if (studentsData.success) {
          if (stream == "Commerce")
            this.commerceSectionData = studentsData.students;
          if (stream == "Arts")
            this.artsSectionData = studentsData.students;
        }
      });
    }
  }

  // listScienceStreamStudents(branch, category, course, classSession){
  //   this.studentService.searchCollegeSectionStudents(
  //     branch, /*category*/ "College Section", /*stream*/"Science", this.enrolledFor,
  //     course, classSession, "PCMB"
  //   ).subscribe(studentsData => {
  //     if (studentsData.success) 
  //       this.scienceSectionData = studentsData.students;
  //   });
  // }

}
