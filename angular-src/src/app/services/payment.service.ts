import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class PaymentService {

  authToken: any;

  constructor(
    private http: Http
  ) { }

  // Register 
  // Register new user
  addNewPayment(payment) {
    return this.http.post('http://localhost:3000/payments/addNewPayment', payment, { headers: this.setHeaders() })
      .map(res => res.json());
  }


  getPaymentRecordById(paymentId) {
    let params: URLSearchParams = new URLSearchParams();
    params.set("paymentId", paymentId);

    return this.http.get('http://localhost:3000/payments/getPaymentById', { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  updatePaymentDetails(payment) {
    console.log("service: updatePaymentDetails");
    return this.http.post('http://localhost:3000/payments/updatePaymentDetails', payment, { headers: this.setHeaders() })
      .map(res => res.json());
  }

  setHeaders() {
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
