import { Component, OnInit } from '@angular/core';

import { StudentService } from "../../services/student.service";

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent implements OnInit {

  searchResults;
  name;
  showHideButton: boolean = false;

  constructor(
    private studentService: StudentService
  ) { }

  ngOnInit() {
  }

  searchStudent() {
    if(this.name){
    this.studentService.searchStudentByName(this.name).subscribe(data => {
      if (data.success) {
        this.searchResults = data.students;
        console.log(this.searchResults); 
        this.showHideButton = true;
      }
    });
  }
  else{
    alert("Please enter name to search");
  }
}


  hideSearchResults() {
    this.searchResults = "";
    this.name = "";
    this.showHideButton = false;
  }

}
