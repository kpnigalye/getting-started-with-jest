import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from "../../environments/environment";

@Injectable()
export class PaymentService {

  authToken: any;

  constructor(
    private http: Http
  ) { }

  // Dashboard - Balance Fees
  showBalanceFeesOnDashboard(){
    let params: URLSearchParams = new URLSearchParams();
    params.set("isPaid", "false");
    params.set("branch", localStorage.getItem('branch'));

    return this.http.get(environment.paymentsUrl.concat('showBalanceFeesOnDashboard'), { headers: this.setHeaders(), params : params })
      .map(res => res.json());
  }

  // Dashboard - Pending cheques
  showPendingChequeEntries(){
    let params: URLSearchParams = new URLSearchParams();
    params.set("isChequeCleared", "false");
    params.set("branch", localStorage.getItem('branch'));

    return this.http.get(environment.paymentsUrl.concat('showPendingChequeEntries'), { headers: this.setHeaders(), params : params })
      .map(res => res.json());
  }

  // Add New Payment
  addNewPayment(payment) {
    payment.branch = localStorage.getItem('branch');

    return this.http.post(environment.paymentsUrl.concat('addNewPayment'), payment, { headers: this.setHeaders() })
      .map(res => res.json());
  }

  // get payment record by id
  getPaymentRecordById(paymentId) {
    let params: URLSearchParams = new URLSearchParams();
    params.set("paymentId", paymentId);

    return this.http.get(environment.paymentsUrl.concat('getPaymentById'), { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  // get payment record by StudentId
  getPaymentRecordByStudentId(studentId) {
    let params: URLSearchParams = new URLSearchParams();
    params.set("studentId", studentId);

    return this.http.get(environment.paymentsUrl.concat('getPaymentRecordByStudentId'), { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }
  
  // Update Payment record
  updatePaymentDetails(payment) {
    console.log("service: updatePaymentDetails");
    return this.http.post(environment.paymentsUrl.concat('updatePaymentDetails'), payment, { headers: this.setHeaders() })
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
