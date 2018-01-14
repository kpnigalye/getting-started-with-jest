import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from "../../environments/environment";

@Injectable()
export class StudentService {

  authToken: any;

  constructor(
    private http: Http
  ) { }

  // Register 
  // Register new user
  addNewStudent(student) {
    student.branch = localStorage.getItem('branch');
    console.log("current branch is for newly added student is " + student.branch);

    return this.http.post(environment.studentsUrl.concat('addNewStudent'), student, { headers: this.setHeaders() })
      .map(res => res.json());
  }

  // Update student information
  updateStudent(student) {
    console.log("service: updateStudent");
    return this.http.post(environment.studentsUrl.concat('updateStudentInfo'), student, { headers: this.setHeaders() })
      .map(res => res.json());
  }


  // Get Student by Id
  getStudentDetailsById(studentId) {
    let params: URLSearchParams = new URLSearchParams();
    params.set("studentId", studentId);

    return this.http.get(environment.studentsUrl.concat('getStudentDetailsById'), { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  searchStudentByName(name){
    let params: URLSearchParams = new URLSearchParams();
    params.set("name", name);
    params.set("branch", localStorage.getItem('branch'));

    return this.http.get(environment.studentsUrl.concat('searchStudentByName'), { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  // Search School section Students By Parameters
  searchSchoolSectionStudents(category, stream, enrolledFor, course, classSession) {
    let params: URLSearchParams = new URLSearchParams();
    params.set("branch", localStorage.getItem("branch"));
    params.set("category", category);
    params.set("stream", stream);
    params.set("enrolledFor", enrolledFor);
    params.set("course", course);
    params.set("classSession", classSession);

    return this.http.get(environment.studentsUrl.concat('searchSchoolSectionStudents'), { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  searchCollegeSectionStudents(category, stream, enrolledFor, course, classSession, entrance?) {
    let params: URLSearchParams = new URLSearchParams();
    params.set("branch", localStorage.getItem("branch"));
    params.set("category", category);
    params.set("stream", stream);
    params.set("enrolledFor", enrolledFor);
    params.set("course", course);
    params.set("classSession", classSession);

    if(entrance)
      params.set("entrance", entrance);

    return this.http.get(environment.studentsUrl.concat('searchCollegeSectionStudents'), { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  setHeaders() {
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return headers;
  }

}
