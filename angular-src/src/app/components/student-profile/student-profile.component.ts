import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { StudentService } from "../../services/student.service";
import { FeesdetailsService } from "../../services/feesdetails.service";
import { PaymentService } from "../../services/payment.service";

declare var $: any;

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {

  id: any;
  student: any;
  fees: any;
  paymentDetail: any;
  paymentHistory: any;
  amount: any;
  paymentDate: any;
  state: boolean = false;
  itemToEdit: any;
  index: number;
  balanceInstallmentAmount: number = 0;
  showAddInstallmentbtn: boolean = true;
  expectedDateOfCompletion;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentService: StudentService,
    private feesdetailsService: FeesdetailsService,
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    // get student id
    this.id = this.route.snapshot.params['id'];

    // get feesdetails
    // get payment history
    // get student details
    this.loadStudentInfo();
    this.loadPaymentRecord();
  }

  loadPaymentRecord(){
    this.getFeesDetailsHistory();
    this.getPaymentHistory();
  }

  loadStudentInfo() {
    this.studentService.getStudentDetailsById(this.id).subscribe(studentData => {
      if (studentData.success) {
        this.student = studentData.student;
        if(this.student.isCombinedAdmission)
        this.student.isCombinedAdmission = false;
        console.log(this.student);
      }
    });
  }

  loadMarksRecord(){

  }

  loadAttendenceRecord(){
    
  }

  getFeesDetailsHistory() {
    this.feesdetailsService.getFeesDetailsByStudentId(this.id).subscribe(feesData => {
      if (feesData.success) {
        console.log("getting feesData");
        this.fees = feesData.feesDetails;
        console.log(feesData.feesDetails);
        this.checkBalanceInstallmentAmount();
      }
    });
  }

  getPaymentHistory() {
    this.paymentService.getPaymentRecordByStudentId(this.id).subscribe(paymentData => {
      if (paymentData.success) {
        console.log("getting paymentData");
        this.paymentHistory = paymentData.paymentDetails;
      }
    });
  }

  checkBalanceInstallmentAmount() {
    this.balanceInstallmentAmount = Number(this.fees.totalFeesToPay) - Number(this.fees.totalInstallmentAmount);
    this.showAddInstallmentbtn = this.balanceInstallmentAmount == 0 ? false : true;
    this.fees.isPaid = this.fees.isPaid;
  }


  findTotalInstallmentAmount(id?) {
    let total: number = 0;
    this.paymentHistory.forEach(element => {
      if (element._id != id)
        total = Number(total) + Number(element.amount);
      else if (id == undefined)
        total = Number(total) + Number(element.amount);
    });
    return total;
  }

  ////////////////////////////
  // Code to Add installment
  ////////////////////////////
  addInstallment() {
    console.log("from addNewInstallment");

    let newTotalInstallmentAmount = this.findTotalInstallmentAmount() + Number(this.amount);
    if (newTotalInstallmentAmount <= Number(this.fees.totalFeesToPay)) {
      this.fees.totalInstallmentAmount = Number(this.fees.totalInstallmentAmount) + Number(this.amount);

      console.log(this.paymentDate);
      console.log(this.amount);
      //add new installment
      this.feesdetailsService.updateFeesDetails(this.fees).subscribe(feesData => {
        if (feesData.success) {

          //add paymentdetail record
          let paymentDetail = {
            studentId: this.id,
            studentName: this.student.name,
            feesDetailsId: this.fees._id,
            stream: this.student.stream,
            enrolledFor: this.student.enrolledFor,
            receiptNumber: 0,
            isPaid: false,
            paymentDate: this.paymentDate,
            paymentMonthNo: new Date(this.paymentDate).getMonth(),
            amount: this.amount,
            modeOfPayment: "",
            bankName: "",
            branch: "",
            chequeDate: new Date().getDate(),
            chequeNumber: "",
            remark: "",
            createdAt: new Date().getDate(),
            isDeleted: false
          }

          this.paymentService.addNewPayment(paymentDetail).subscribe(paymentData => {
            if (paymentData.success) {
              this.checkBalanceInstallmentAmount();
              this.amount = "";
              this.paymentDate = "";
              $("#exampleModal").modal('hide');
              this.getPaymentHistory();
            }
          });
        }
      });
    }
    else{
      alert("Please check the balance installment amount.");
      this.amount = "";
      this.paymentDate = "";
      $("#exampleModal").modal('hide');
    }
  }

  changeToAddState() {
    this.state = true;
    this.amount = "";
    this.paymentDate = "";
  }

  ////////////////////////////
  // Code to edit installment
  ////////////////////////////
  changeEditState(inst, index) {
    console.log("changeEditState");
    this.itemToEdit = inst;
    this.state = false;
    this.amount = inst.amount;
    this.paymentDate = inst.paymentDate;
    this.index = index;
  }

  //update this
  updateInstallmentDetails() {
    console.log("from updateInstallment");

    let newTotalInstallmentAmount = this.findTotalInstallmentAmount(this.paymentHistory[this.index]._id) + Number(this.amount);
    if (newTotalInstallmentAmount <= Number(this.fees.totalFeesToPay)) {
      this.fees.totalInstallmentAmount = newTotalInstallmentAmount;
      this.feesdetailsService.updateFeesDetails(this.fees).subscribe(feesData =>{
        if(feesData.success){
          
        this.paymentHistory[this.index].amount = this.amount;
        this.paymentHistory[this.index].paymentDate = this.paymentDate;
        this.paymentHistory[this.index].paymentMonthNo = new Date(this.paymentDate).getMonth();
        this.paymentService.updatePaymentDetails(this.paymentHistory[this.index]).subscribe(paymentData => {
          if(paymentData.success){
            this.getPaymentHistory();
            this.amount = "";
            this.paymentDate = "";
            $("#exampleModal").modal('hide');
            this.checkBalanceInstallmentAmount();
          }
        });
        }
      });
    }
  }

}
