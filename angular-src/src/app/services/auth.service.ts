import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';
import { tokenNotExpired } from "angular2-jwt";

import { environment } from "../../environments/environment";

@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor(
    private http: Http
  ) { }

  // Login
  // Checks if user exists in the system
  authenticateUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(environment.usersUrl.concat('authenticate'), user, { headers: headers })
      .map(res => res.json());
  }

  getUserProfile() {
    let headers = new Headers();
    this.loadToken();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    
    return this.http.get(environment.usersUrl.concat('profile'), { headers: headers })
      .map(res => res.json());
  }

  getUserProfileById(userId) {
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    
    let params: URLSearchParams  = new URLSearchParams();
    params.set("userId", userId);

    return this.http.get(environment.usersUrl.concat('getUserProfileById'), { headers: headers, params: params })
      .map(res => res.json());
  }

  loggedIn() {
    return tokenNotExpired('id_token');
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  // Fucntion to stire user record in localstorage
  storeUserData(token, user) {
    // add current year here
    console.log("storeUserData");
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('branch', user.branch);
    this.authToken = token;
    this.user = user;
  }

  // Logout
  // Logs out the currently logged in user
  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
}
