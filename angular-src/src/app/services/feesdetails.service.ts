import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class FeesdetailsService {

  authToken: any;

  constructor(
    private http:Http
  ) { }


  // Add Fees record
  addNewFeesdetails(fees){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/feesdetails/addNewFeesdetails', fees, {headers: headers})
      .map(res => res.json());
  }


  // Get Fees Details by Id
  getFeesDetailsById(feesDetailId){
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');
    
    let params: URLSearchParams  = new URLSearchParams();
    params.set("paymentId", feesDetailId);

    return this.http.get('http://localhost:3000/feesdetails/getFeesDetailsById', { headers: headers, params: params })
      .map(res => res.json());
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

}
