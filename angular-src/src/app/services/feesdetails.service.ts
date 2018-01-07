import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class FeesdetailsService {

  authToken: any;

  constructor(
    private http:Http
  ) { }


  // Add Fees record
  addNewFeesdetails(fees){
    return this.http.post('http://localhost:3000/feesdetails/addNewFeesdetails', fees, {headers: this.setHeaders()})
      .map(res => res.json());
  }


  // Get Fees Details by Id
  getFeesDetailsById(feesDetailId){
    let params: URLSearchParams  = new URLSearchParams();
    params.set("feesDetailId", feesDetailId);

    return this.http.get('http://localhost:3000/feesdetails/getFeesDetailsById', { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }


  updateFeesDetails(fees){
    return this.http.post('http://localhost:3000/feesdetails/updateFeesDetails', fees, {headers: this.setHeaders()})
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
