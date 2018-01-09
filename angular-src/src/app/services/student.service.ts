import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  authToken: any;

  constructor(
    private http: Http
  ) { }

  // Register 
  // Register new user
  addNewStudent(student) {
    return this.http.post('http://localhost:3000/students/addNewStudent', student, { headers: this.setHeaders() })
      .map(res => res.json());
  }

  // Update student information
  updateStudent(student) {
    console.log("service: updateStudent");
    return this.http.post('http://localhost:3000/students/updateStudentInfo', student, { headers: this.setHeaders() })
      .map(res => res.json());
  }


  // Get Student by Id
  getStudentDetailsById(studentId) {
    let params: URLSearchParams = new URLSearchParams();
    params.set("studentId", studentId);

    return this.http.get('http://localhost:3000/students/getStudentDetailsById', { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  // Search School section Students By Parameters
  searchSchoolSectionStudents(branch, category, stream, enrolledFor, course, classSession) {
    let params: URLSearchParams = new URLSearchParams();
    params.set("branch", branch);
    params.set("category", category);
    params.set("stream", stream);
    params.set("enrolledFor", enrolledFor);
    params.set("course", course);
    params.set("classSession", classSession);

    return this.http.get('http://localhost:3000/students/searchSchoolSectionStudents', { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  searchCollegeSectionStudents(branch, category, stream, enrolledFor, course, classSession, offeredSubjects) {
    let params: URLSearchParams = new URLSearchParams();
    params.set("branch", branch);
    params.set("category", category);
    params.set("stream", stream);
    params.set("enrolledFor", enrolledFor);
    params.set("course", course);
    params.set("classSession", classSession);
    params.set("offeredSubjects", offeredSubjects);

    return this.http.get('http://localhost:3000/students/searchCollegeSectionStudents', { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  setHeaders() {
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return headers;
  }

}
