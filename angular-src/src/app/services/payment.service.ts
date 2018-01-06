import { Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentService {

  constructor(
    private http:Http
  ) { }

  // Register 
  // Register new user
  addNewPayment(payment){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:3000/payment/addNewPayment', payment, {headers: headers})
      .map(res => res.json());
  }

}
