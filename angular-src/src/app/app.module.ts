import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
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
import { SignupStudentComponent } from './components/signup-student/signup-student.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';

import { AuthService } from "./services/auth.service";
import { UsersService } from "./services/users.service";
import { ValidateService } from "./services/validate.service";
import { PaymentService } from "./services/payment.service";
import { StudentService } from './services/student.service';
import { FeesdetailsService } from './services/feesdetails.service';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddBatchComponent } from './components/add-batch/add-batch.component';
import { AddFacultyComponent } from './components/add-faculty/add-faculty.component';
import { AddAcademicYearComponent } from './components/add-academic-year/add-academic-year.component';
import { SettingsComponent } from './components/settings/settings.component';

import { AuthGuard } from './guards/auth.guard';
import { SortGridPipe } from '../app/pipes/SortGridPipe';
import { SettingsService } from './services/settings.service';
import { EditBatchComponent } from './components/edit-batch/edit-batch.component';
import { SearchStudentComponent } from './components/search-student/search-student.component';

const appRoutes: Routes = [
  { pathMatch: 'full', path: '', component: HomeComponent },
  { pathMatch: 'full', path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'studentprofile/:id', component: StudentProfileComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'addstudent/:id', component: AddStudentComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'updatestudent/:id', component: UpdateStudentComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'addPayment/:id', component: AddPaymentComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'paymenthistory/:id', component: PaymentHistoryComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'signup', component: SignupStudentComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'login', component: LoginComponent },
  { pathMatch: 'full', path: 'redirect/:message', component: RedirectComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'studentslisting', component: StudentsListingComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'addbatch', component: AddBatchComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'editbatch/:id', component: EditBatchComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'addfaculty', component: AddFacultyComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'addacademicyear', component: AddAcademicYearComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
  { pathMatch: 'full', path: 'addadmin', component: AddAdminComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    SortGridPipe,
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
    StudentProfileComponent,
    UserProfileComponent,
    SignupStudentComponent,
    AddAdminComponent,
    AddBatchComponent,
    AddFacultyComponent,
    AddAcademicYearComponent,
    SettingsComponent,
    EditBatchComponent,
    SearchStudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthGuard,
    AuthService,
    ValidateService,
    UsersService,
    StudentService,
    PaymentService,
    FeesdetailsService,
    SettingsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
