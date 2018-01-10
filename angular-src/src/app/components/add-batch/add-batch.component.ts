import { Component, OnInit } from '@angular/core';

import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-add-batch',
  templateUrl: './add-batch.component.html',
  styleUrls: ['./add-batch.component.css']
})
export class AddBatchComponent implements OnInit {

  academicYears;
  batches;
  error;
  name;
  category;
  course;
  year;
  stream;
  classSession;
  enrolledFor;

  constructor(
    private settingsService: SettingsService
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
      isDeleted: false
    }
    console.log(newBatch);
    this.settingsService.addBatch(newBatch).subscribe(batchData =>{
      if(batchData.success){
        this.batches = batchData.batches;
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

}
