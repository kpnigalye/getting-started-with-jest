import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  id;
  fees;
  studentId;
  paymentRecord;
  studentName?: string;
  amount?: number;
  paymentDate?: Date;
  receiptNumber?: string;
  modeOfPayment?: string;
  bankName?: string = "";
  branch?: string = "";
  chequeNumber?: string = "";
  chequeDate?: Date;
  remark?: string = "";

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private paymentService : PaymentService
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.paymentService.getPaymentRecordById(this.id).subscribe(payment => {
      this.paymentRecord = payment;
      this.studentId = payment.studentId;

      this.amount = this.paymentRecord.amount;
      this.paymentDate = this.paymentRecord.paymentDate;
      this.modeOfPayment = this.paymentRecord.modeOfPayment;
      this.bankName = this.paymentRecord.bankName;
      this.branch = this.paymentRecord.branch;
      this.chequeDate = this.paymentRecord.chequeDate;
      this.remark = this.paymentRecord.remark;
      this.studentName = this.paymentRecord.studentName;

      console.log(this.paymentRecord);
      // this.feesdetailsService.getStudentFeesDetails(this.paymentRecord.studentId).subscribe(fees => {
      //   this.fees = fees;
      //   console.log(this.fees);
      // });
    });
  }

}
