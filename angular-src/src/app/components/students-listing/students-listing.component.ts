import { Component, OnInit } from '@angular/core';

import { SettingsService } from '../../services/settings.service';
import { StudentService } from "../../services/student.service";

@Component({
  selector: 'app-students-listing',
  templateUrl: './students-listing.component.html',
  styleUrls: ['./students-listing.component.css']
})
export class StudentsListingComponent implements OnInit {

  year;
  course: string = "Regular";
  classSession;
  category;
  stream;
  enrolledFor;
  entrance;
  offeredSubjects;
  students;

  error;
  academicYears;
  englishMediumData;
  marathiMediumData;
  semienglishMediumData;
  commerceSectionData;
  artsSectionData;
  scienceSectionData;
  batches;
  batchesByTab;

  constructor(
    private studentService: StudentService,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    console.log('students-listing');
    this.settingsService.listAcademicYears().subscribe(data => {
      if (data.success) {
        this.academicYears = data.years;
        var currentYear = this.academicYears.filter(function (year) {
          return year.isCurrentYear == true;
        })[0].year;
        console.log(currentYear);

        this.settingsService.listBatches(currentYear).subscribe(batchData => {
          if (batchData.success) {
            console.log(batchData.batches);
            this.batches = batchData.batches;
            // default to first tab
            this.loadBatchButtons("English");
          } else {
            this.error = batchData.msg.message;
          }
        })
      }
      else {
        this.error = data.msg.message;
      }
    });
  }

  // Load batches buttons
  loadBatchButtons(stream){
    this.batchesByTab = this.batches.filter(function (batch) {
      return batch.stream == stream;
    });
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
    this.classSession = "";
    this.course = "Regular";
  }

  listStudents(category, stream, enrolledFor, course, classSession) {

    this.studentService.searchSchoolSectionStudents(category, stream, enrolledFor, course, classSession).subscribe(studentsData => {
      if (studentsData.success) {
        this.students = studentsData.students;
        if (stream == "English")
          this.englishMediumData = studentsData.students;
        if (stream == "Semi-English")
          this.semienglishMediumData = studentsData.students;
        if (stream == "Marathi")
          this.marathiMediumData = studentsData.students;
      }
      else
        this.error = studentsData.msg.message;
    });
  }

  listScienceStudents(enrolledFor, course, classSession, entrance?) {
    console.log("from listScienceStudents");

    this.studentService.searchCollegeSectionStudents("College Section", "Science", enrolledFor, course, classSession, entrance).subscribe(studentsData => {
      if (studentsData.success) {
        this.scienceSectionData = studentsData.students;
      }
    });
  }

  listCommerceStudents(enrolledFor, course, classSession, entrance?) {
    console.log("from listCommerceStudents");

    this.studentService.searchCollegeSectionStudents("College Section", "Commerce", enrolledFor, course, classSession, entrance).subscribe(studentsData => {
      if (studentsData.success) {
        this.commerceSectionData = studentsData.students;
      }
    });
  }

  listArtsStudents(enrolledFor, course, classSession, entrance?) {
    console.log("from listArtsStudents");

    this.studentService.searchCollegeSectionStudents("College Section", "Arts", enrolledFor, course, classSession, entrance).subscribe(studentsData => {
      if (studentsData.success) {
        this.listArtsStudents = studentsData.students;
      }
    });
  }

  showCourses() {
    return (this.enrolledFor == "X" || this.enrolledFor == "XII");
  }

}
