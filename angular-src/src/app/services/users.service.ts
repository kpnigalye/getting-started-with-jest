import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  constructor(
    private http:Http
  ) { }

  // Register 
  // Register new user
  registerUser(user){
    if(!user.isAdmin){
      user.branch = localStorage.getItem('branch');
      console.log("current branch is for newly added student is " + user.branch);
    }

    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/registerUser', user, {headers: headers})
      .map(res => res.json());
  }

}
