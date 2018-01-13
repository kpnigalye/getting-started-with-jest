import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  academicYears;
  error;
  name;
  category;
  course?: string = "Regular";
  year;
  entrance;
  stream;
  classSession;
  enrolledFor;

  constructor(
    private settingsService: SettingsService,
    private router: Router
  ) { }

  ngOnInit() {
    console.log("add-batch init");
    this.settingsService.listAcademicYears().subscribe(data => {
      if (data.success) {
        this.academicYears = data.years;
      }
      else {
        this.error = data.msg.message;
      }
    });
  }

  onAddBatchSubmit() {
    console.log("onAddBatchSubmit");
    let newBatch = {
      name: this.name,
      category: this.category,
      course: this.course,
      year: this.year,
      stream: this.stream,
      classSession: this.classSession,
      enrolledFor: this.enrolledFor,
      isDeleted: false,
      entrance :""
    }

    if(this.checkIfScienceStream()){
      newBatch.entrance = this.entrance;
    }

    console.log(newBatch);
    this.settingsService.addBatch(newBatch).subscribe(batchData =>{
      if(batchData.success){
        this.router.navigate(['settings']);
      }
      else this.error = batchData.msg.message;
    })
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

  // unselects all radio inputs on change of category
  unselectAll() {
    this.stream = "";
    this.enrolledFor = "";
  }

  showCourses(){
    return (this.enrolledFor == "X" || this.enrolledFor == "XII");
  }
}
