import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

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


const appRoutes: Routes = [
  { pathMatch: 'full', path: '', component: HomeComponent },
  { pathMatch: 'full', path: 'dashboard', component: DashboardComponent },
  { pathMatch: 'full', path: 'studentprofile/:id', component: StudentProfileComponent },
  { pathMatch: 'full', path: 'addstudent/:id', component: AddStudentComponent },
  { pathMatch: 'full', path: 'updatestudent/:id', component: UpdateStudentComponent },
  { pathMatch: 'full', path: 'addPayment/:id', component: AddPaymentComponent },
  { pathMatch: 'full', path: 'paymenthistory/:id', component: PaymentHistoryComponent },
  // { pathMatch: 'full', path: 'signup', component: SignupComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'login', component: LoginComponent },
  { pathMatch: 'full', path: 'redirect/:message', component: RedirectComponent},
  { pathMatch: 'full', path: 'studentslisting', component: StudentsListingComponent},
]

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
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
