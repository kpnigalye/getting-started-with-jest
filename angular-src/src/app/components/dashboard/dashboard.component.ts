import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../services/payment.service';

declare var $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  students: any;
  sciecneStudents: any[];
  artsStudents: any[];
  krishnaStudents: any[];
  coachingStudents: any[];
  pendingChequeEntries: any[];
  sciecneNotifications: number = 0;
  krishnaNotifications: number = 0;
  artsNotifications: number = 0;
  coachingNotifications: number = 0;
  pendingChequeNotifications: number = 0;

  itemToEdit: any;
  chequeClearanceDate: any;
  remark;
  editState: boolean = false;

  constructor(
    private paymentService: PaymentService
  ) { }

  ngOnInit() {
    console.log("ngInit");

    // Display balance fees
    this.paymentService.showBalanceFeesOnDashboard().subscribe(balanceFeesData => {
      this.students = balanceFeesData.balanceFees;

      //load sciecne student by default
      this.sciecneStudents = this.students.filter(function (el) {
        return el.stream == "Science";
      });
      this.sciecneNotifications = this.sciecneStudents.length;

      //load arts student
      this.artsStudents = this.students.filter(function (el) {
        return el.stream == "Arts";
      });
      this.artsNotifications = this.artsStudents.length;

      //load English medium student by default
      this.krishnaStudents = this.students.filter(function (el) {
        return el.stream == "English";
      });
      this.krishnaNotifications = this.krishnaStudents.length;

      //load English medium student by default
      this.coachingStudents = this.students.filter(function (el) {
        return el.stream == "Semi-English" || el.stream == "Marathi";
      });
      this.coachingNotifications = this.coachingStudents.length;
    });

    this.getPendingCheques();
    
  }

  // Display pending cheque entries
  getPendingCheques(){
    this.paymentService.showPendingChequeEntries().subscribe(entries => {
      this.pendingChequeEntries = entries.pendingCheques;
      this.pendingChequeNotifications = this.pendingChequeEntries.length;
    });
  }


  markChequeAsCleared() {
    this.itemToEdit.isChequeCleared = true;
    this.itemToEdit.chequeClearanceDate = this.chequeClearanceDate;
    this.itemToEdit.remark = this.remark;
    console.log(this.itemToEdit);

    this.paymentService.updatePaymentDetails(this.itemToEdit).subscribe(data => {
      if (data.success) {
        $("#exampleModal").modal('hide');
        this.editState = false;
        this.getPendingCheques();
      }
    });
  }


  changeEditState(item) {
    this.editState = true;
    this.itemToEdit = item;
    console.log("item: " + item);
    $("#exampleModal").modal('show');
  }

}
