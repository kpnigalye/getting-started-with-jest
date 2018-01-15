import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-add-academic-year',
  templateUrl: './add-academic-year.component.html',
  styleUrls: ['./add-academic-year.component.css']
})
export class AddAcademicYearComponent implements OnInit {

  selectedYear;
  selectedYearText;
  error;

  constructor(
    private settingsService : SettingsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onAddYearSubmit(){
    let newlyAddedYear = {
      year: this.selectedYear,
      isDeleted : false,
      isCurrentYear: false
    }

    console.log(newlyAddedYear);

    this.settingsService.addAcademicYear(newlyAddedYear).subscribe(year => {
      if (year.success) {
        this.router.navigate(['settings']);
      } else {
        this.error = year.msg.message;
      }
    });
  }

}
