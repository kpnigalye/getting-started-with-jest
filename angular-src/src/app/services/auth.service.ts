import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';
import { tokenNotExpired } from "angular2-jwt";

@Injectable()
export class AuthService {

  authToken: any;
  user: any;
  
  constructor(private http:Http) { }

  // Login
  // Checks if user exists in the system
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/users/authenticate', user,{headers: headers})
      .map(res => res.json());
  }

  getUserProfile(){
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/users/profile', {headers: headers})
      .map(res => res.json());
  }

  loggedIn(){
    return tokenNotExpired('id_token');
  }

  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Fucntion to stire user record in localstorage
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  // Logout
  // Logs out the currently logged in user
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
