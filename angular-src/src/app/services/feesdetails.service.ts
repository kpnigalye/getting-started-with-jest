import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from "../../environments/environment";

@Injectable()
export class FeesdetailsService {

  authToken: any;

  constructor(
    private http:Http
  ) { }


  // Add Fees record
  addNewFeesdetails(fees){
    return this.http.post(environment.feesDetailsUrl.concat('addNewFeesdetails'), fees, {headers: this.setHeaders()})
      .map(res => res.json());
  }

  // Get Fees Details by Id
  getFeesDetailsById(feesDetailId){
    let params: URLSearchParams  = new URLSearchParams();
    params.set("feesDetailId", feesDetailId);

    return this.http.get(environment.feesDetailsUrl.concat('getFeesDetailsById'), { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  // Get Fees Details by StudentId
  getFeesDetailsByStudentId(studentId){
    let params: URLSearchParams  = new URLSearchParams();
    params.set("studentId", studentId);

    return this.http.get(environment.feesDetailsUrl.concat('getFeesDetailsByStudentId'), { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  // Update fees details
  updateFeesDetails(fees){
    return this.http.post(environment.feesDetailsUrl.concat('updateFeesDetails'), fees, {headers: this.setHeaders()})
      .map(res => res.json());
  }

  setHeaders(){
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return headers;
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
