import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { PaymentService } from '../../services/payment.service';
import { FeesdetailsService } from '../../services/feesdetails.service';

@Component({
  selector: 'app-add-payment',
  templateUrl: './add-payment.component.html',
  styleUrls: ['./add-payment.component.css']
})
export class AddPaymentComponent implements OnInit {

  paymentId;
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
    private paymentService: PaymentService,
    private feesdetailsService: FeesdetailsService
  ) { }

  ngOnInit() {
    this.paymentId = this.route.snapshot.params['id'];

    this.paymentService.getPaymentRecordById(this.paymentId).subscribe(paymentData => {
      this.paymentRecord = paymentData.payment;
      this.studentId = paymentData.payment.studentId;

      this.amount = this.paymentRecord.amount;
      this.paymentDate = this.paymentRecord.paymentDate;
      this.modeOfPayment = this.paymentRecord.modeOfPayment;
      this.bankName = this.paymentRecord.bankName;
      this.branch = this.paymentRecord.branch;
      this.chequeDate = this.paymentRecord.chequeDate;
      this.remark = this.paymentRecord.remark;
      this.studentName = this.paymentRecord.studentName;

      console.log(this.paymentRecord);
      this.feesdetailsService.getFeesDetailsById(this.paymentRecord.feesDetailsId).subscribe(feesData => {
        this.fees = feesData.feesDetails;
        console.log(this.fees);
      });
    });
  }


  isChequePayment() {
    return (this.modeOfPayment == "Cheque")
  }

  onAddPaymentSubmit() {
    console.log("onAddPaymentSubmit");
    if (!this.fees.totalPaidFees)        // remove this later
    {
      this.fees.totalPaidFees = 0;
      this.fees.totalInstallmentAmount = 0;
    }

    this.fees.totalPaidFees = Number(this.fees.totalPaidFees) + Number(this.amount);
    this.fees.isPaid = (this.fees.totalPaidFees == this.fees.totalFeesToPay) ? true : false;

    if (Number(this.fees.totalInstallmentAmount) == 0)
      this.fees.totalInstallmentAmount = Number(this.fees.totalInstallmentAmount) + Number(this.amount);

    this.feesdetailsService.updateFeesDetails(this.fees).subscribe(feesData => {
      if (feesData.success) {
        this.paymentRecord.isPaid = true;
        this.paymentRecord.amount = this.amount;
        this.paymentRecord.paymentDate = this.paymentDate;
        this.paymentRecord.receiptNumber = this.receiptNumber;
        this.paymentRecord.modeOfPayment = this.modeOfPayment;
        this.paymentRecord.remark = this.remark;

        if (this.isChequePayment()) {
          this.paymentRecord.bankName = this.bankName;
          this.paymentRecord.branch = this.branch;
          this.paymentRecord.chequeDate = this.chequeDate;
          this.paymentRecord.chequeNumber = this.chequeNumber;
          this.paymentRecord.isChequeCleared = (this.paymentRecord.chequeDate == Date.now()) ? true : false
          console.log("isChequeCleared: " + this.paymentRecord.isChequeCleared);
        }

        this.paymentService.updatePaymentDetails(this.paymentRecord).subscribe(paymentData => {
          if(paymentData.success)
            this.router.navigate(['studentprofile', this.studentId]);
        });
      }
    });
  }
}
