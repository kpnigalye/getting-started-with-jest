import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PaymentService } from "../../services/payment.service";

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  id;
  studentId;
  paymentInfo;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    // get id
    this.id = this.route.snapshot.params['id'];
    
    this.paymentService.getPaymentRecordById(this.id).subscribe(paymentData => {
      this.paymentInfo = paymentData.payment;
      this.studentId = this.paymentInfo.studentId;
    });


  }

}
