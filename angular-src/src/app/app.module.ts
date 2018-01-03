import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { StudentsListingComponent } from './components/students-listing/students-listing.component';
import { AddPaymentComponent } from './components/add-payment/add-payment.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { LoginComponent } from './components/login/login.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    DashboardComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    StudentsListingComponent,
    AddPaymentComponent,
    PaymentHistoryComponent,
    LoginComponent,
    RedirectComponent,
    StudentProfileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
