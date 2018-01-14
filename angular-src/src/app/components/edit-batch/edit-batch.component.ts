import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-edit-batch',
  templateUrl: './edit-batch.component.html',
  styleUrls: ['./edit-batch.component.css']
})
export class EditBatchComponent implements OnInit {

  id;
  batchToEdit;
  error;
  stream;
  enrolledFor;
  category;
  year;
  name;
  academicYears;
  classSession;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.settingsService.listAcademicYears().subscribe(data => {
      if (data.success) {
        this.academicYears = data.years;
      }
      else {
        this.error = data.msg.message;
      }
    });

    this.batchToEdit = this.settingsService.getBatchById(this.id).subscribe(batchData => {
      if (batchData.success) {
        this.batchToEdit = batchData.batch;
        console.log(this.batchToEdit);
        this.category = this.batchToEdit.category;
        this.stream = this.batchToEdit.stream;
        this.year = this.batchToEdit.year;
        this.name = this.batchToEdit.name;
        this.enrolledFor = this.batchToEdit.enrolledFor;
        this.classSession = this.batchToEdit.classSession;
      }
      else
        this.error = batchData.msg.message;
    });
  }

  onEditBatchSubmit() {
    this.batchToEdit.category = this.category;
    this.batchToEdit.stream = this.stream;
    this.batchToEdit.year = this.year;
    this.batchToEdit.name = this.name;
    this.batchToEdit.enrolledFor = this.enrolledFor;
    this.batchToEdit.classSession = this.classSession;
    console.log(this.batchToEdit);

    this.settingsService.editBatch(this.batchToEdit).subscribe(data => {
      if (data.success) {
        this.router.navigate(['settings']);
      }
      else this.error = data.msg.message;
    });
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

  showCourses() {
    return (this.enrolledFor == "X" || this.enrolledFor == "XII");
  }

}
