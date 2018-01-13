import { Component, OnInit } from '@angular/core';

import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  batches;
  academicYears;
  error;


  constructor(
    private settingsService: SettingsService
  ) { }

  ngOnInit() {
    console.log("list");
    this.settingsService.listAcademicYears().subscribe(data => {
      if (data.success) {
        this.academicYears = data.years;
      }
      else {
        this.error = data.msg.message;
      }
    });

    this.settingsService.listBatches().subscribe(data => {
      if (data.success) {
        this.batches = data.batches;
        console.log(this.batches);
      }
      else {
        this.error = data.msg.message;
      }
    });
  }

  SetCurrentYear(index) {
    if (this.academicYears) {
      this.academicYears[index].isCurrentYear = true;
      this.settingsService.setCurrentYear(this.academicYears[index]).subscribe(data => {
        if (data.success) {
          this.academicYears[index].isCurrentYear = true;
        }
        else {
          this.error = data.msg.message;
        }
      });
    }
  }
}
