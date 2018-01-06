import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService {

  constructor(
    private http:Http
  ) { }

  // Register 
  // Register new user
  addNewStudent(student){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/student/addNewStudent', student, {headers: headers})
      .map(res => res.json());
  }

}
