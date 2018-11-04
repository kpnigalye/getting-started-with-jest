webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_add_student_add_student_component__ = __webpack_require__("../../../../../src/app/components/add-student/add-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_update_student_update_student_component__ = __webpack_require__("../../../../../src/app/components/update-student/update-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_students_listing_students_listing_component__ = __webpack_require__("../../../../../src/app/components/students-listing/students-listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_add_payment_add_payment_component__ = __webpack_require__("../../../../../src/app/components/add-payment/add-payment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_payment_history_payment_history_component__ = __webpack_require__("../../../../../src/app/components/payment-history/payment-history.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_redirect_redirect_component__ = __webpack_require__("../../../../../src/app/components/redirect/redirect.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_student_profile_student_profile_component__ = __webpack_require__("../../../../../src/app/components/student-profile/student-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_signup_student_signup_student_component__ = __webpack_require__("../../../../../src/app/components/signup-student/signup-student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_user_profile_user_profile_component__ = __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_feesdetails_service__ = __webpack_require__("../../../../../src/app/services/feesdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/components/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_add_batch_add_batch_component__ = __webpack_require__("../../../../../src/app/components/add-batch/add-batch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_add_faculty_add_faculty_component__ = __webpack_require__("../../../../../src/app/components/add-faculty/add-faculty.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_add_academic_year_add_academic_year_component__ = __webpack_require__("../../../../../src/app/components/add-academic-year/add-academic-year.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_settings_settings_component__ = __webpack_require__("../../../../../src/app/components/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_pipes_SortGridPipe__ = __webpack_require__("../../../../../src/app/pipes/SortGridPipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__components_edit_batch_edit_batch_component__ = __webpack_require__("../../../../../src/app/components/edit-batch/edit-batch.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_search_student_search_student_component__ = __webpack_require__("../../../../../src/app/components/search-student/search-student.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var appRoutes = [
    { pathMatch: 'full', path: '', component: __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */] },
    { pathMatch: 'full', path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'studentprofile/:id', component: __WEBPACK_IMPORTED_MODULE_16__components_student_profile_student_profile_component__["a" /* StudentProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'addstudent/:id', component: __WEBPACK_IMPORTED_MODULE_9__components_add_student_add_student_component__["a" /* AddStudentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'updatestudent/:id', component: __WEBPACK_IMPORTED_MODULE_10__components_update_student_update_student_component__["a" /* UpdateStudentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'addPayment/:id', component: __WEBPACK_IMPORTED_MODULE_12__components_add_payment_add_payment_component__["a" /* AddPaymentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'paymenthistory/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_payment_history_payment_history_component__["a" /* PaymentHistoryComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'signup', component: __WEBPACK_IMPORTED_MODULE_17__components_signup_student_signup_student_component__["a" /* SignupStudentComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'login', component: __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */] },
    { pathMatch: 'full', path: 'redirect/:message', component: __WEBPACK_IMPORTED_MODULE_15__components_redirect_redirect_component__["a" /* RedirectComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'studentslisting', component: __WEBPACK_IMPORTED_MODULE_11__components_students_listing_students_listing_component__["a" /* StudentsListingComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'userprofile', component: __WEBPACK_IMPORTED_MODULE_18__components_user_profile_user_profile_component__["a" /* UserProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'addbatch', component: __WEBPACK_IMPORTED_MODULE_26__components_add_batch_add_batch_component__["a" /* AddBatchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'editbatch/:id', component: __WEBPACK_IMPORTED_MODULE_33__components_edit_batch_edit_batch_component__["a" /* EditBatchComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'addfaculty', component: __WEBPACK_IMPORTED_MODULE_27__components_add_faculty_add_faculty_component__["a" /* AddFacultyComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'addacademicyear', component: __WEBPACK_IMPORTED_MODULE_28__components_add_academic_year_add_academic_year_component__["a" /* AddAcademicYearComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'settings', component: __WEBPACK_IMPORTED_MODULE_29__components_settings_settings_component__["a" /* SettingsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */]] },
    { pathMatch: 'full', path: 'addadmin', component: __WEBPACK_IMPORTED_MODULE_25__components_add_admin_add_admin_component__["a" /* AddAdminComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_31__app_pipes_SortGridPipe__["a" /* SortGridPipe */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_add_student_add_student_component__["a" /* AddStudentComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_update_student_update_student_component__["a" /* UpdateStudentComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_students_listing_students_listing_component__["a" /* StudentsListingComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_add_payment_add_payment_component__["a" /* AddPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_payment_history_payment_history_component__["a" /* PaymentHistoryComponent */],
            __WEBPACK_IMPORTED_MODULE_14__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_redirect_redirect_component__["a" /* RedirectComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_student_profile_student_profile_component__["a" /* StudentProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_user_profile_user_profile_component__["a" /* UserProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_signup_student_signup_student_component__["a" /* SignupStudentComponent */],
            __WEBPACK_IMPORTED_MODULE_25__components_add_admin_add_admin_component__["a" /* AddAdminComponent */],
            __WEBPACK_IMPORTED_MODULE_26__components_add_batch_add_batch_component__["a" /* AddBatchComponent */],
            __WEBPACK_IMPORTED_MODULE_27__components_add_faculty_add_faculty_component__["a" /* AddFacultyComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_add_academic_year_add_academic_year_component__["a" /* AddAcademicYearComponent */],
            __WEBPACK_IMPORTED_MODULE_29__components_settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_33__components_edit_batch_edit_batch_component__["a" /* EditBatchComponent */],
            __WEBPACK_IMPORTED_MODULE_34__components_search_student_search_student_component__["a" /* SearchStudentComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_30__guards_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_21__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_20__services_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_23__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_22__services_payment_service__["a" /* PaymentService */],
            __WEBPACK_IMPORTED_MODULE_24__services_feesdetails_service__["a" /* FeesdetailsService */],
            __WEBPACK_IMPORTED_MODULE_32__services_settings_service__["a" /* SettingsService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-academic-year/add-academic-year.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-academic-year/add-academic-year.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{error}}\r\n</div>\r\n\r\n<form ngNativeValidate class=\"form-signin\" id=\"needs-validation\" (submit)=\"onAddYearSubmit()\">\r\n  <h2 class=\"form-signin-heading\">Add Batch</h2>\r\n  <hr/>\r\n\r\n  <!-- Academic Year -->\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n      <label for=\"exampleSelect1\">Academic Year</label>\r\n      <select class=\"custom-select\" name=\"selectedYear\" [(ngModel)]=\"selectedYear\">\r\n        <option selected=\"\">Open this select year</option>\r\n        <option value=\"2017-18\">2017-18</option>\r\n        <option value=\"2018-19\">2018-19</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n\r\n  <br/>\r\n  <button class=\"btn btn-primary\" type=\"submit\">Add</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/add-academic-year/add-academic-year.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAcademicYearComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddAcademicYearComponent = (function () {
    function AddAcademicYearComponent(settingsService, router) {
        this.settingsService = settingsService;
        this.router = router;
    }
    AddAcademicYearComponent.prototype.ngOnInit = function () {
    };
    AddAcademicYearComponent.prototype.onAddYearSubmit = function () {
        var _this = this;
        var newlyAddedYear = {
            year: this.selectedYear,
            isDeleted: false,
            isCurrentYear: false
        };
        console.log(newlyAddedYear);
        this.settingsService.addAcademicYear(newlyAddedYear).subscribe(function (year) {
            if (year.success) {
                _this.router.navigate(['settings']);
            }
            else {
                _this.error = year.msg.message;
            }
        });
    };
    return AddAcademicYearComponent;
}());
AddAcademicYearComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-academic-year',
        template: __webpack_require__("../../../../../src/app/components/add-academic-year/add-academic-year.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-academic-year/add-academic-year.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddAcademicYearComponent);

var _a, _b;
//# sourceMappingURL=add-academic-year.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-admin/add-admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-admin/add-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{error}}\r\n</div>\r\n\r\n<p class=\"text-warning\"><strong>Note: </strong>OTP functionality to confirm admin user will be added later.</p>\r\n\r\n<form ngNativeValidate class=\"bd-callout bd-callout-yellow\" id=\"needs-validation\" ngNativeValidate (submit)=\"onAddAdminSubmit()\">\r\n  <fieldset>\r\n    <legend>Add Administrator</legend>\r\n    <hr/>\r\n\r\n    <!-- Name -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Branch</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"branch\" [(ngModel)]=\"branch\" id=\"chemburRdo\" value=\"Chembur\" checked> Chembur\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"branch\" [(ngModel)]=\"branch\" id=\"govandiRdo\" value=\"Govandi\"> Govandi\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"branch\" [(ngModel)]=\"branch\" id=\"mankhurdRdo\" value=\"Mankhurd\"> Mankhurd\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Email & birthday  -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-4 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Phone Number</label>\r\n        <input class=\"form-control form-control-sm\" type=\"number\" id=\"phoneNumber\" name=\"phoneNumber\" [(ngModel)]=\"phoneNumber\" required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-5 col-lg-5\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Email Address</label>\r\n        <input class=\"form-control form-control-sm\" type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-3 col-lg-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Birth Date</label>\r\n        <input class=\"form-control form-control-sm\" type=\"date\" id=\"birthDate\" name=\"birthDate\" [(ngModel)]=\"birthDate\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\r\n        <label>Password</label>\r\n        <input type=\"password\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control\">\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-6 col-lg-6\">\r\n        <label>Confirm Password</label>\r\n        <input type=\"password\" [(ngModel)]=\"confirmpassword\" name=\"confirmpassword\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-primary\" type=\"submit\">Sign Up</button>\r\n\r\n  </fieldset>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/add-admin/add-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddAdminComponent = (function () {
    function AddAdminComponent(validateService, usersService, router) {
        this.validateService = validateService;
        this.usersService = usersService;
        this.router = router;
    }
    AddAdminComponent.prototype.ngOnInit = function () {
    };
    AddAdminComponent.prototype.onAddAdminSubmit = function () {
        var _this = this;
        console.log("onAddAdminSubmit");
        if (this.password == this.confirmpassword) {
            if (!this.validateService.validateEmail(this.email)) {
                this.error = "Invalid Email Address";
            }
            else {
                var newlyAddedUser = {
                    email: this.email,
                    birthDate: this.birthDate,
                    phoneNumber: this.phoneNumber,
                    name: this.name,
                    password: this.password,
                    role: "Admin",
                    branch: this.branch,
                    isAdmin: true,
                    isActive: false,
                    isDeleted: false
                };
                this.usersService.registerUser(newlyAddedUser).subscribe(function (user) {
                    if (user.success) {
                        _this.router.navigate(['login']);
                    }
                    else {
                        _this.error = user.msg.message;
                    }
                });
            }
        }
        else {
            this.error = "Password and Confirm Password do not match.";
        }
    };
    return AddAdminComponent;
}());
AddAdminComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-admin',
        template: __webpack_require__("../../../../../src/app/components/add-admin/add-admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-admin/add-admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], AddAdminComponent);

var _a, _b, _c;
//# sourceMappingURL=add-admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-batch/add-batch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-batch/add-batch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{error}}\r\n</div>\r\n\r\n\r\n<form ngNativeValidate class=\"bd-callout  bd-callout-yellow\" id=\"needs-validation\">\r\n  <fieldset>\r\n    <legend>Add Batch</legend>\r\n    <hr/>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Category</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"category\" [(ngModel)]=\"category\" id=\"categoryRdo\" value=\"School Section\"\r\n              checked> School Section\r\n          </label>\r\n          <label class=\"form-check-label\" *ngIf=\"branch != 'Mankhurd'\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"category\" [(ngModel)]=\"category\" id=\"categoryRdo\" value=\"College Section\"> College Section\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Academic Year</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <select id=\"academicyear\" class=\"custom-select\" name=\"year\" [(ngModel)]=\"year\">\r\n          <option *ngFor=\"let year of academicYears\" value=\"{{year.year}}\">{{year.year}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Stream If college section -->\r\n    <div class=\"row\" *ngIf=\"category == 'School Section'\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Medium</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"engRdo\" value=\"English\"> English\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"semiRdo\" value=\"Semi-English\"> Semi-English\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"marRdo\" value=\"Marathi\"> Marathi\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Stream If college section -->\r\n    <div class=\"row\" *ngIf=\"checkIfCollegeSection()\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Stream</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"sciRdo\" value=\"Science\"> Science\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"comRdo\" value=\"Commerce\"> Commerce\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"artsRdo\" value=\"Arts\"> Arts\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to school section -->\r\n    <div class=\"row\" *ngIf=\"category == 'School Section'\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Enrolled For</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"viiiRdo\" value=\"VIII\"> VIII\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"ixRdo\" value=\"IX\"> IX\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"ixAndxRdo\" value=\"IX + X\"> IX + X\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xRdo\" value=\"X\"> X\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to College section -->\r\n    <div class=\"row\" *ngIf=\"category == 'College Section'\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Enrolled For</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiRdo\" value=\"XI\"> XI\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiiRdo\" value=\"XII\"> XII\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiAndxiiRdo\" value=\"XI + XII\"> XI + XII\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"stream == 'Science'\">\r\n      <div class=\"col-2\"></div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"noneRdo\" value=\"None\"> None\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"medicalEntRdo\" value=\"NEET\"> NEET\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"enggEntRdo\" value=\"MH-CET\"> MH-CET\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"bothEntRdo\" value=\"NEET + MH-CET\"> NEET + MH-CET\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"showCourses()\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Course</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"courseRadios\" [(ngModel)]=\"course\" id=\"vacationRdo\" value=\"Vacation\"> Vacation\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"courseRadios\" [(ngModel)]=\"course\" id=\"regularRdo\" value=\"Regular\"> Regular\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Class Session -->\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Class Session</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" [(ngModel)]=\"classSession\" id=\"morningRdo\" value=\"Morning\"> Morning\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" [(ngModel)]=\"classSession\" id=\"evenRdo\" value=\"Evening\"> Evening\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <br/>\r\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onAddBatchSubmit()\">Add</button>\r\n  </fieldset>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/add-batch/add-batch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddBatchComponent = (function () {
    function AddBatchComponent(settingsService, router) {
        this.settingsService = settingsService;
        this.router = router;
        this.course = "Regular";
    }
    AddBatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("add-batch init");
        this.settingsService.listAcademicYears().subscribe(function (data) {
            if (data.success) {
                _this.academicYears = data.years;
            }
            else {
                _this.error = data.msg.message;
            }
        });
    };
    AddBatchComponent.prototype.onAddBatchSubmit = function () {
        var _this = this;
        console.log("onAddBatchSubmit");
        var newBatch = {
            name: this.name,
            category: this.category,
            course: this.course,
            year: this.year,
            stream: this.stream,
            classSession: this.classSession,
            enrolledFor: this.enrolledFor,
            isDeleted: false,
            entrance: ""
        };
        if (this.checkIfScienceStream()) {
            newBatch.entrance = this.entrance;
        }
        console.log(newBatch);
        this.settingsService.addBatch(newBatch).subscribe(function (batchData) {
            if (batchData.success) {
                _this.router.navigate(['settings']);
            }
            else
                _this.error = batchData.msg.message;
        });
    };
    AddBatchComponent.prototype.checkIfCollegeSection = function () {
        return this.category == "College Section";
    };
    AddBatchComponent.prototype.checkIfScienceStream = function () {
        return this.stream == "Science";
    };
    AddBatchComponent.prototype.checkIfCommerceStream = function () {
        return this.stream == "Commerce";
    };
    AddBatchComponent.prototype.checkIfArtsStream = function () {
        return this.stream == "Arts";
    };
    // unselects all radio inputs on change of category
    AddBatchComponent.prototype.unselectAll = function () {
        this.stream = "";
        this.enrolledFor = "";
    };
    AddBatchComponent.prototype.showCourses = function () {
        return (this.enrolledFor == "X" || this.enrolledFor == "XII");
    };
    return AddBatchComponent;
}());
AddBatchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-batch',
        template: __webpack_require__("../../../../../src/app/components/add-batch/add-batch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-batch/add-batch.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AddBatchComponent);

var _a, _b;
//# sourceMappingURL=add-batch.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-faculty/add-faculty.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-faculty/add-faculty.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  add-faculty works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/add-faculty/add-faculty.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFacultyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AddFacultyComponent = (function () {
    function AddFacultyComponent() {
    }
    AddFacultyComponent.prototype.ngOnInit = function () {
    };
    return AddFacultyComponent;
}());
AddFacultyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-faculty',
        template: __webpack_require__("../../../../../src/app/components/add-faculty/add-faculty.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-faculty/add-faculty.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AddFacultyComponent);

//# sourceMappingURL=add-faculty.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-payment/add-payment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-payment/add-payment.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n    <ol class=\"breadcrumb\">\r\n      <li class=\"breadcrumb-item\">\r\n        <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item\">\r\n        <a [routerLink]=\"['/studentprofile/'+ studentId ]\">Student Profile</a>\r\n      </li>\r\n      <li class=\"breadcrumb-item active\" aria-current=\"page\">Add Payment</li>\r\n    </ol>\r\n  </nav>\r\n  \r\n  <h3>\r\n    <strong> {{this.studentName}} </strong>\r\n  </h3>\r\n  \r\n  <form ngNativeValidate *ngIf=\"paymentRecord\" id=\"needs-validation\" class=\"bd-callout  bd-callout-yellow\" (submit)=\"onAddPaymentSubmit()\">\r\n    <fieldset>\r\n      <legend>Add Payment</legend>\r\n      <hr/>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n          <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Amount</label>\r\n          <input class=\"form-control form-control-sm\" type=\"number\" id=\"inputSmall\" name=\"amount\" [(ngModel)]=\"amount\" required>\r\n        </div>\r\n        <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n          <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Date of Payment</label>\r\n          <input class=\"form-control form-control-sm\" type=\"date\" id=\"inputSmall\" name=\"paymentDate\" [(ngModel)]=\"paymentDate\" required>\r\n        </div>\r\n        <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n          <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Receipt Number</label>\r\n          <input class=\"form-control form-control-sm\" type=\"number\" id=\"inputSmall\" name=\"receiptNumber\" [(ngModel)]=\"receiptNumber\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 col-md-3 col-lg-2\">\r\n          <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Mode of Payment</label>\r\n        </div>\r\n        <div class=\"col-sm-12 col-md-9 col-lg-10\">\r\n          <div class=\"form-check\">\r\n            <label class=\"form-check-label\">\r\n              <input type=\"radio\" class=\"form-check-input\" name=\"modeRdo\" [(ngModel)]=\"modeOfPayment\" id=\"cashRdo\" value=\"Cash\" checked=\"\"> Cash\r\n            </label>\r\n            <label class=\"form-check-label\">\r\n              <input type=\"radio\" class=\"form-check-input\" name=\"modeRdo\" [(ngModel)]=\"modeOfPayment\" id=\"chequeRdo\" value=\"Cheque\"> Cheque\r\n            </label>\r\n            <label class=\"form-check-label\">\r\n              <input type=\"radio\" class=\"form-check-input\" name=\"modeRdo\" [(ngModel)]=\"modeOfPayment\" id=\"cardRdo\" value=\"Debit/Credit Card\"> Debit/Credit Card\r\n            </label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" *ngIf=\"isChequePayment()\">\r\n        <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n          <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name of the Bank</label>\r\n          <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"bankName\" [(ngModel)]=\"bankName\" required>\r\n        </div>\r\n        <div class=\"form-group col-sm-6 col-md-6 col-lg-2\">\r\n          <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Branch</label>\r\n          <input type=\"text\" class=\"form-control form-control-sm\" id=\"inputSmall\" name=\"bankBranch\" [(ngModel)]=\"bankBranch\" required>\r\n        </div>\r\n        <div class=\"form-group col-sm-6 col-md-6 col-lg-2\">\r\n          <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Cheque Number</label>\r\n          <input type=\"number\" class=\"form-control form-control-sm\" id=\"inputSmall\" name=\"chequeNumber\" [(ngModel)]=\"chequeNumber\" required>\r\n        </div>\r\n        <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n          <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Cheque Date</label>\r\n          <input type=\"date\" class=\"form-control form-control-sm\" id=\"inputSmall\" name=\"chequeDate\" [(ngModel)]=\"chequeDate\" required>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\r\n          <label class=\"col-form-label col-form-label-sm\" for=\"textarea1\">Remark</label>\r\n          <textarea class=\"form-control\" id=\"textarea1\" name=\"remark\" [(ngModel)]=\"remark\" rows=\"2\"></textarea>\r\n        </div>\r\n      </div>\r\n      <hr>\r\n      <button type=\"submit\" class=\"btn btn-primary\">Make Payment</button>\r\n    </fieldset>\r\n  </form>"

/***/ }),

/***/ "../../../../../src/app/components/add-payment/add-payment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPaymentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_feesdetails_service__ = __webpack_require__("../../../../../src/app/services/feesdetails.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddPaymentComponent = (function () {
    function AddPaymentComponent(router, route, paymentService, feesdetailsService) {
        this.router = router;
        this.route = route;
        this.paymentService = paymentService;
        this.feesdetailsService = feesdetailsService;
        this.bankName = "";
        this.bankBranch = "";
        this.chequeNumber = "";
        this.remark = "";
    }
    AddPaymentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paymentId = this.route.snapshot.params['id'];
        this.paymentService.getPaymentRecordById(this.paymentId).subscribe(function (paymentData) {
            _this.paymentRecord = paymentData.payment;
            _this.studentId = paymentData.payment.studentId;
            _this.amount = _this.paymentRecord.amount;
            _this.paymentDate = _this.paymentRecord.paymentDate;
            _this.modeOfPayment = _this.paymentRecord.modeOfPayment;
            _this.bankName = _this.paymentRecord.bankName;
            _this.bankBranch = _this.paymentRecord.bankBranch;
            _this.chequeDate = _this.paymentRecord.chequeDate;
            _this.remark = _this.paymentRecord.remark;
            _this.studentName = _this.paymentRecord.studentName;
            console.log(_this.paymentRecord);
            _this.feesdetailsService.getFeesDetailsById(_this.paymentRecord.feesDetailsId).subscribe(function (feesData) {
                _this.fees = feesData.feesDetails;
                console.log(_this.fees);
            });
        });
    };
    AddPaymentComponent.prototype.isChequePayment = function () {
        return (this.modeOfPayment == "Cheque");
    };
    AddPaymentComponent.prototype.onAddPaymentSubmit = function () {
        var _this = this;
        console.log("onAddPaymentSubmit");
        // if (!this.fees.totalPaidFees)        // remove this later
        // {
        //   this.fees.totalPaidFees = 0;
        //   this.fees.totalInstallmentAmount = 0;
        // }
        this.fees.totalPaidFees = Number(this.fees.totalPaidFees) + Number(this.amount);
        this.fees.isPaid = (this.fees.totalPaidFees == this.fees.totalFeesToPay) ? true : false;
        if (Number(this.fees.totalInstallmentAmount) == 0)
            this.fees.totalInstallmentAmount = Number(this.fees.totalInstallmentAmount) + Number(this.amount);
        this.feesdetailsService.updateFeesDetails(this.fees).subscribe(function (feesData) {
            if (feesData.success) {
                _this.paymentRecord.isPaid = true;
                _this.paymentRecord.amount = _this.amount;
                _this.paymentRecord.paymentDate = _this.paymentDate;
                _this.paymentRecord.receiptNumber = _this.receiptNumber;
                _this.paymentRecord.modeOfPayment = _this.modeOfPayment;
                _this.paymentRecord.remark = _this.remark;
                if (_this.isChequePayment()) {
                    _this.paymentRecord.bankName = _this.bankName;
                    _this.paymentRecord.bankBranch = _this.bankBranch;
                    _this.paymentRecord.chequeDate = _this.chequeDate;
                    _this.paymentRecord.chequeNumber = _this.chequeNumber;
                    _this.paymentRecord.isChequeCleared = (_this.paymentRecord.chequeDate == Date.now()) ? true : false;
                    console.log("isChequeCleared: " + _this.paymentRecord.isChequeCleared);
                }
                _this.paymentService.updatePaymentDetails(_this.paymentRecord).subscribe(function (paymentData) {
                    if (paymentData.success)
                        _this.router.navigate(['studentprofile', _this.studentId]);
                });
            }
        });
    };
    return AddPaymentComponent;
}());
AddPaymentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-payment',
        template: __webpack_require__("../../../../../src/app/components/add-payment/add-payment.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-payment/add-payment.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_feesdetails_service__["a" /* FeesdetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_feesdetails_service__["a" /* FeesdetailsService */]) === "function" && _d || Object])
], AddPaymentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-payment.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/add-student/add-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-student/add-student.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Add Student</li>\r\n  </ol>\r\n</nav>\r\n\r\n<form ngNativeValidate class=\"bd-callout  bd-callout-yellow\" id=\"needs-validation\">\r\n  <fieldset>\r\n    <legend>Add Student</legend>\r\n    <hr/>\r\n\r\n    <!-- Name -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"name\" [(ngModel)]=\"name\" required disabled>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Select Year</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <select id=\"academicyear\" class=\"custom-select\" name=\"year\" [(ngModel)]=\"year\">\r\n          <option *ngFor=\"let year of academicYears\" value=\"{{year.year}}\">{{year.year}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Category -->\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Category</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" (click)=\"unselectAll()\" name=\"category\" [(ngModel)]=\"category\" id=\"categoryRdo\"\r\n              value=\"School Section\" checked> School Section\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" (click)=\"unselectAll()\" name=\"category\" [(ngModel)]=\"category\" id=\"categoryRdo\"\r\n              value=\"College Section\"> College Section\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Stream If college section -->\r\n    <div class=\"row\" *ngIf=\"category == 'School Section'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Medium</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"engRdo\" value=\"English\"> English\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"semiRdo\" value=\"Semi-English\"> Semi-English\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"marRdo\" value=\"Marathi\"> Marathi\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Stream If college section -->\r\n    <div class=\"row\" *ngIf=\"checkIfCollegeSection()\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Stream</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"sciRdo\" value=\"Science\"> Science\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"comRdo\" value=\"Commerce\"> Commerce\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"artsRdo\" value=\"Arts\"> Arts\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to school section -->\r\n    <div class=\"row\" *ngIf=\"category == 'School Section'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Enrolled For</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"viiiRdo\" value=\"VIII\"> VIII\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"ixRdo\" value=\"IX\"> IX\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"ixAndxRdo\" value=\"IX + X\"> IX + X\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xRdo\" value=\"X\"> X\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to College section -->\r\n    <div class=\"row\" *ngIf=\"category == 'College Section'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Enrolled For</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiRdo\" value=\"XI\"> XI\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiiRdo\" value=\"XII\"> XII\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiAndxiiRdo\" value=\"XI + XII\"> XI + XII\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to Science stream -->\r\n    <div class=\"row\" *ngIf=\"stream == 'Science'\">\r\n      <div class=\"col-2\"></div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"noneRdo\" value=\"None\"> None\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"medicalEntRdo\" value=\"NEET\"> NEET\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"enggEntRdo\" value=\"MH-CET\"> MH-CET\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"bothEntRdo\" value=\"NEET + MH-CET\"> NEET + MH-CET\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- Subjects specific to Science stream -->\r\n    <div class=\"row\" *ngIf=\"stream == 'Science'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Subjects Offered</label>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"pcbRdo\" value=\"PCB\"> PCB\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"pcmRdo\" value=\"PCM\"> PCM\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"pcmbRdo\" value=\"PCMB\"> PCMB\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Subjects specific to Commerce stream -->\r\n    <div class=\"row\" *ngIf=\"stream == 'Commerce'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Subjects Offered</label>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"spRdo\" value=\"All subjects with SP\"> All subjects with SP\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"mathsRdo\" value=\"All subjects with Maths\"> All subjects with Maths\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Subjects specific to Arts stream -->\r\n    <div class=\"row\" *ngIf=\"stream == 'Arts'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Subjects Offered</label>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"foursubRdo\" value=\"4 Subjects\"> 4 Subjects\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"allsubRdo\" value=\"All Subjects\"> All Subjects\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Courses -->\r\n    <div class=\"row\" *ngIf=\"showCourses()\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Course</label>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"courseRadios\" [(ngModel)]=\"course\" id=\"vacationRdo\" value=\"Vacation\"> Vacation\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"courseRadios\" [(ngModel)]=\"course\" id=\"regularRdo\" value=\"Regular\"> Regular\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Class Session -->\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Class Session</label>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" [(ngModel)]=\"classSession\" id=\"morningRdo\" value=\"Morning\"> Morning\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" [(ngModel)]=\"classSession\" id=\"evenRdo\" value=\"Evening\"> Evening\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Address -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-12\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Address</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"address\" [(ngModel)]=\"address\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Institution Information -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-9\" *ngIf=\"checkIfCollegeSection()\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name of the College</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"instituteName\" [(ngModel)]=\"instituteName\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-9\" *ngIf=\"!checkIfCollegeSection()\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name of the School</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"instituteName\" [(ngModel)]=\"instituteName\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Timing</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"instituteTiming\" [(ngModel)]=\"instituteTiming\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Contact Details -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Contact Number 1(Self)</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"contactNumber1\" [(ngModel)]=\"contactNumber1\"\r\n          required disabled>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Contact Number 2</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"contactNumber2\" [(ngModel)]=\"contactNumber2\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Contact Number 3</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"contactNumber3\" [(ngModel)]=\"contactNumber3\">\r\n      </div>\r\n    </div>\r\n\r\n    <hr/>\r\n\r\n    <!-- Fees Details -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Total Fees</label>\r\n        <input class=\"form-control form-control-sm\" type=\"number\" id=\"inputSmall\" name=\"totalFees\" [(ngModel)]=\"totalFees\" required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Concession</label>\r\n        <input class=\"form-control form-control-sm\" type=\"number\" id=\"inputSmall\" name=\"concession\" [(ngModel)]=\"concession\" required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Expected Date of Completion</label>\r\n        <input class=\"form-control form-control-sm\" type=\"date\" id=\"inputSmall\" name=\"expectedDateOfCompletion\" [(ngModel)]=\"expectedDateOfCompletion\"\r\n          required>\r\n      </div>\r\n    </div>\r\n    <br />\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onAddStudentSubmit()\">Submit</button>\r\n  </fieldset>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/add-student/add-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_feesdetails_service__ = __webpack_require__("../../../../../src/app/services/feesdetails.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddStudentComponent = (function () {
    function AddStudentComponent(route, router, usersService, authService, studentsService, paymentService, feesdetailsService, settingsService) {
        this.route = route;
        this.router = router;
        this.usersService = usersService;
        this.authService = authService;
        this.studentsService = studentsService;
        this.paymentService = paymentService;
        this.feesdetailsService = feesdetailsService;
        this.settingsService = settingsService;
        this.course = "Regular";
        this.error = "";
    }
    AddStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get user id
        this.userId = this.route.snapshot.params['id'];
        console.log(this.userId);
        //get student name
        this.authService.getUserProfileById(this.userId).subscribe(function (data) {
            _this.name = data.user.name;
            _this.contactNumber1 = data.user.phoneNumber;
            console.log("getUserProfileById: " + _this.name);
        });
        this.settingsService.listAcademicYears().subscribe(function (data) {
            if (data.success) {
                _this.academicYears = data.years;
            }
            else {
                _this.error = data.msg.message;
            }
        });
    };
    // Add New Student
    AddStudentComponent.prototype.onAddStudentSubmit = function () {
        var _this = this;
        console.log("onAddStudentSubmit");
        var newlyAddedStudent = {
            userId: this.userId,
            name: this.name,
            category: this.category,
            stream: this.stream,
            address: this.address,
            classSession: this.classSession,
            enrolledFor: this.enrolledFor,
            course: this.course,
            offeredSubjects: this.offeredSubjects,
            instituteInfo: {
                name: this.instituteName,
                timing: this.instituteTiming
            },
            contactDetails: this.addContactDetails(),
            currentYear: this.year,
            isDeleted: false
        };
        this.setCurrentStandard(newlyAddedStudent);
        // add science related fields
        if (this.checkIfScienceStream())
            this.addScienceRelatedFields(newlyAddedStudent);
        /*  Add student record to students collection
            Add payment record to payments collection
            Redirect to Add Payment screen
         */
        this.studentsService.addNewStudent(newlyAddedStudent).subscribe(function (studentData) {
            if (studentData.success) {
                _this.studentId = studentData.student._id;
                _this.feesdetailsService.addNewFeesdetails(_this.createFeesDetailsObj()).subscribe(function (feesData) {
                    if (feesData.success) {
                        _this.feesDetailsId = feesData.feesDetails._id;
                        _this.paymentService.addNewPayment(_this.createPaymentDetailsObj()).subscribe(function (paymentData) {
                            if (paymentData.success) {
                                var paymentDetailId = paymentData.payment._id;
                                _this.router.navigate(['addPayment', paymentDetailId]);
                            }
                            else {
                                _this.error = paymentData.msg._message;
                            }
                        });
                    }
                    else {
                        _this.error = feesData.msg._message;
                    }
                });
            }
            else {
                _this.error = studentData.msg._message;
            }
        });
    };
    /*******************
    / Helper functions
    *******************/
    AddStudentComponent.prototype.createFeesDetailsObj = function () {
        return {
            studentId: this.studentId,
            feesDetailsId: this.feesDetailsId,
            totalFees: this.totalFees,
            concession: this.concession,
            totalFeesToPay: Number(this.totalFees) - Number(this.concession),
            totalPaidFees: 0,
            totalInstallmentAmount: 0,
            expectedDateOfCompletion: this.expectedDateOfCompletion,
            isDeleted: false
        };
    };
    AddStudentComponent.prototype.createPaymentDetailsObj = function () {
        return {
            studentId: this.studentId,
            feesDetailsId: this.feesDetailsId,
            studentName: this.name,
            stream: this.stream,
            enrolledFor: this.enrolledFor,
            receiptNumber: 0,
            isPaid: false,
            paymentDate: "",
            amount: 0,
            modeOfPayment: "",
            bankName: "",
            chequeDate: new Date(),
            chequeNumber: "",
            remark: "",
            createdAt: new Date(),
            isDeleted: false
        };
    };
    AddStudentComponent.prototype.addContactDetails = function () {
        var contactDetails = [];
        if (this.contactNumber1)
            contactDetails.push(this.contactNumber1);
        if (this.contactNumber2)
            contactDetails.push(this.contactNumber2);
        if (this.contactNumber3)
            contactDetails.push(this.contactNumber3);
        return contactDetails;
    };
    AddStudentComponent.prototype.checkIfCollegeSection = function () {
        return this.category == "College Section";
    };
    AddStudentComponent.prototype.checkIfScienceStream = function () {
        return this.stream == "Science";
    };
    AddStudentComponent.prototype.checkIfCommerceStream = function () {
        return this.stream == "Commerce";
    };
    AddStudentComponent.prototype.checkIfArtsStream = function () {
        return this.stream == "Arts";
    };
    // for sciecne stream specific fields
    AddStudentComponent.prototype.addScienceRelatedFields = function (newlyAddedStudent) {
        newlyAddedStudent.entrance = this.entrance;
        newlyAddedStudent.hasEnrolledForEntrance = (this.entrance != "None");
    };
    // sets current standard
    // checks if admission is combined
    AddStudentComponent.prototype.setCurrentStandard = function (newlyAddedStudent) {
        if (this.checkIfCollegeSection()) {
            newlyAddedStudent.isCombinedAdmission = (this.enrolledFor == "XI + XII");
        }
        else
            newlyAddedStudent.isCombinedAdmission = (this.enrolledFor == "IX + X");
        if (!newlyAddedStudent.isCombinedAdmission) {
            // if not combined admission, set currentStandard same as enrolledFor
            newlyAddedStudent.currentStandard = this.enrolledFor;
        }
        else if (this.checkIfScienceStream() || this.checkIfCommerceStream() || this.checkIfArtsStream()) {
            newlyAddedStudent.currentStandard = this.enrolledFor == "XI + XII" ? "XI" : this.enrolledFor;
        }
        else
            newlyAddedStudent.currentStandard = this.enrolledFor == "IX + X" ? "IX" : this.enrolledFor;
    };
    // unselects all radio inputs on change of category
    AddStudentComponent.prototype.unselectAll = function () {
        console.log("getting here");
        this.stream = "";
        this.enrolledFor = "";
        this.entrance = "";
        this.offeredSubjects = "";
    };
    AddStudentComponent.prototype.showCourses = function () {
        return (this.enrolledFor == "X" || this.enrolledFor == "XII");
    };
    return AddStudentComponent;
}());
AddStudentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-student',
        template: __webpack_require__("../../../../../src/app/components/add-student/add-student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/add-student/add-student.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_payment_service__["a" /* PaymentService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__services_feesdetails_service__["a" /* FeesdetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__services_feesdetails_service__["a" /* FeesdetailsService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_settings_service__["a" /* SettingsService */]) === "function" && _h || Object])
], AddStudentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=add-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search-student></app-search-student>\r\n\r\n<ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link active\" id=\"pendingChq-tab\" data-toggle=\"tab\" href=\"#pendingChq\" role=\"tab\" aria-controls=\"pendingChq\"\r\n      aria-selected=\"false\">\r\n      PDC\r\n      <span class=\"badge badge-pill badge-info\" *ngIf=\"pendingChequeNotifications\">{{pendingChequeNotifications}}</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">\r\n      Science\r\n      <span class=\"badge badge-pill badge-info\" *ngIf=\"sciecneNotifications\">{{sciecneNotifications}}</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" id=\"arts-tab\" data-toggle=\"tab\" href=\"#arts\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">\r\n      Arts\r\n      <span class=\"badge badge-pill badge-info\" *ngIf=\"artsNotifications\">{{artsNotifications}}</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" id=\"krishna-tab\" data-toggle=\"tab\" href=\"#krishna\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">\r\n      Krishna\r\n      <span class=\"badge badge-pill badge-info\" *ngIf=\"krishnaNotifications\">{{krishnaNotifications}}</span>\r\n    </a>\r\n  </li>\r\n  <li class=\"nav-item\">\r\n    <a class=\"nav-link\" id=\"coaching-tab\" data-toggle=\"tab\" href=\"#coaching\" role=\"tab\" aria-controls=\"coaching\" aria-selected=\"false\">\r\n      Coaching\r\n      <span class=\"badge badge-pill badge-info\" *ngIf=\"coachingNotifications\">{{coachingNotifications}}</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\"\r\n  *ngIf=\"itemToEdit\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Cheque Clearance for {{ itemToEdit.studentName }}</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <form>\r\n          <div class=\"form-row\">\r\n            <div class=\"col-12\">\r\n              <label for=\"recipient-name\" class=\"col-form-label\">Date:</label>\r\n              <input type=\"date\" class=\"form-control\" name=\"chequeClearanceDate\" [(ngModel)]=\"chequeClearanceDate\" id=\"chequeClearanceDate\"\r\n                required>\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <label for=\"message-text\" class=\"col-form-label\">Remark:</label>\r\n              <textarea class=\"form-control\" name=\"remark\" [(ngModel)]=\"remark\" id=\"remark\"></textarea>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"markChequeAsCleared()\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"tab-content\" id=\"myTabContent\">\r\n  <div class=\"tab-pane fade show active\" id=\"pendingChq\" role=\"tabpanel\" aria-labelledby=\"pendingChq-tab\">\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"pendingChequeEntries\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Student Name</th>\r\n          <th scope=\"col\">Amount</th>\r\n          <th scope=\"col\">Receipt Dated</th>\r\n          <th scope=\"col\">Cheque Dated</th>\r\n          <th scope=\"col\">Options</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let entry of pendingChequeEntries | sortgrid : 'chequeDate'\" class=\"table-bordered\">\r\n          <td>{{entry.studentName}}\r\n            <br/> [ {{entry.enrolledFor}} / {{entry.stream}} ]\r\n          </td>\r\n          <td>Rs. {{entry.amount}}</td>\r\n          <td>{{entry.paymentDate | date:'dd-MM-yyyy'}}</td>\r\n          <td>{{entry.chequeDate | date:'dd-MM-yyyy'}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ entry.studentId]\">Profile</button>\r\n            <button class=\"btn-sm btn-primary\" (click)=\"changeEditState(entry)\">Mark as Cleard</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n    <br/>\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"sciecneStudents\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Amount Due</th>\r\n          <th scope=\"col\">Due date</th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of sciecneStudents | sortgrid : 'paymentDate'\" class=\"table-bordered\">\r\n          <td>{{student.studentName}}</td>\r\n          <td>Rs. {{student.amount}}</td>\r\n          <td>{{student.paymentDate | date:'dd-MM-yyyy'}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-info\" class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ student.studentId]\">Profile</button>\r\n            <button class=\"btn-sm btn-primary\" [routerLink]=\"['/addPayment/'+ student._id]\">Make Payment</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"arts\" role=\"tabpanel\" aria-labelledby=\"arts-tab\">\r\n    <br/>\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"artsStudents\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Amount Due</th>\r\n          <th scope=\"col\">Due date</th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of artsStudents | sortgrid : 'paymentDate'\" class=\"table-bordered\">\r\n          <td>{{student.studentName}}</td>\r\n          <td>Rs. {{student.amount}}</td>\r\n          <td>{{student.paymentDate | date:'dd-MM-yyyy'}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-primary\" [routerLink]=\"['/studentprofile/'+ student.studentId]\">Profile</button>\r\n            <button class=\"btn-sm btn-primary\" [routerLink]=\"['/addPayment/'+ student._id]\">Make Payment</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"krishna\" role=\"tabpanel\" aria-labelledby=\"krishna-tab\">\r\n    <br/>\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"krishnaStudents\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Amount Due</th>\r\n          <th scope=\"col\">Due date</th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of krishnaStudents | sortgrid : 'paymentDate'\" class=\"table-bordered\">\r\n          <td>{{student.studentName}}</td>\r\n          <td>Rs. {{student.amount}}</td>\r\n          <td>{{student.paymentDate | date:'dd-MM-yyyy'}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ student.studentId]\">Profile</button>\r\n            <button class=\"btn-sm btn-primary\" [routerLink]=\"['/addPayment/'+ student._id]\">Make Payment</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"coaching\" role=\"tabpanel\" aria-labelledby=\"coaching-tab\">\r\n    <br/>\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"coachingStudents\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Amount Due</th>\r\n          <th scope=\"col\">Due date</th>\r\n          <th scope=\"col\"></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of coachingStudents | sortgrid : 'paymentDate'\" class=\"table-bordered\">\r\n          <td>{{student.studentName}}</td>\r\n          <td>Rs. {{student.amount}}</td>\r\n          <td>{{student.paymentDate | date:'dd-MM-yyyy'}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-primary\" [routerLink]=\"['/studentprofile/'+ student.studentId]\">Profile</button>\r\n            <button class=\"btn-sm btn-primary\" [routerLink]=\"['/addPayment/'+ student._id]\">Make Payment</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(paymentService) {
        this.paymentService = paymentService;
        this.sciecneNotifications = 0;
        this.krishnaNotifications = 0;
        this.artsNotifications = 0;
        this.coachingNotifications = 0;
        this.pendingChequeNotifications = 0;
        this.editState = false;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        console.log("ngInit");
        this.showDashboard();
    };
    DashboardComponent.prototype.showDashboard = function () {
        var _this = this;
        // Display balance fees
        this.paymentService.showBalanceFeesOnDashboard().subscribe(function (balanceFeesData) {
            _this.students = balanceFeesData.balanceFees;
            //load sciecne student by default
            _this.sciecneStudents = _this.students.filter(function (el) {
                return el.stream == "Science";
            });
            _this.sciecneNotifications = _this.sciecneStudents.length;
            //load arts student
            _this.artsStudents = _this.students.filter(function (el) {
                return el.stream == "Arts";
            });
            _this.artsNotifications = _this.artsStudents.length;
            //load English medium student by default
            _this.krishnaStudents = _this.students.filter(function (el) {
                return el.stream == "English";
            });
            _this.krishnaNotifications = _this.krishnaStudents.length;
            //load English medium student by default
            _this.coachingStudents = _this.students.filter(function (el) {
                return el.stream == "Semi-English" || el.stream == "Marathi";
            });
            _this.coachingNotifications = _this.coachingStudents.length;
        });
        this.getPendingCheques();
    };
    DashboardComponent.prototype.getPendingCheques = function () {
        var _this = this;
        // Display pending cheque entries
        this.paymentService.showPendingChequeEntries().subscribe(function (entries) {
            _this.pendingChequeEntries = entries.pendingCheques;
            _this.pendingChequeNotifications = _this.pendingChequeEntries.length;
        });
    };
    DashboardComponent.prototype.markChequeAsCleared = function () {
        var _this = this;
        this.itemToEdit.isChequeCleared = true;
        this.itemToEdit.chequeClearanceDate = this.chequeClearanceDate;
        this.itemToEdit.remark = this.remark;
        console.log(this.itemToEdit);
        this.paymentService.updatePaymentDetails(this.itemToEdit).subscribe(function (data) {
            if (data.success) {
                $("#exampleModal").modal('hide');
                _this.editState = false;
                _this.getPendingCheques();
            }
        });
    };
    DashboardComponent.prototype.changeEditState = function (item) {
        this.editState = true;
        this.itemToEdit = item;
        console.log("item: " + item);
        $("#exampleModal").modal('show');
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_payment_service__["a" /* PaymentService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-batch/edit-batch.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-batch/edit-batch.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{error}}\r\n</div>\r\n\r\n<nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/settings']\">Settings</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Edit Batch</li>\r\n  </ol>\r\n</nav>\r\n\r\n<form ngNativeValidate class=\"bd-callout  bd-callout-yellow\" id=\"needs-validation\">\r\n  <fieldset>\r\n    <legend>Edit Batch</legend>\r\n    <hr/>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Category</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"category\" [(ngModel)]=\"category\" id=\"categoryRdo\" value=\"School Section\"\r\n              checked> School Section\r\n          </label>\r\n          <label class=\"form-check-label\" *ngIf=\"branch != 'Mankhurd'\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"category\" [(ngModel)]=\"category\" id=\"categoryRdo\" value=\"College Section\"> College Section\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Academic Year</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <select id=\"academicyear\" class=\"custom-select\" name=\"year\" [(ngModel)]=\"year\">\r\n          <option *ngFor=\"let year of academicYears\" value=\"{{year.year}}\">{{year.year}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Stream If college section -->\r\n    <div class=\"row\" *ngIf=\"category == 'School Section'\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Medium</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"engRdo\" value=\"English\"> English\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"semiRdo\" value=\"Semi-English\"> Semi-English\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"marRdo\" value=\"Marathi\"> Marathi\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Stream If college section -->\r\n    <div class=\"row\" *ngIf=\"checkIfCollegeSection()\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Stream</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"sciRdo\" value=\"Science\"> Science\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"comRdo\" value=\"Commerce\"> Commerce\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"artsRdo\" value=\"Arts\"> Arts\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to school section -->\r\n    <div class=\"row\" *ngIf=\"category == 'School Section'\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Enrolled For</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"viiiRdo\" value=\"VIII\"> VIII\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"ixRdo\" value=\"IX\"> IX\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"ixAndxRdo\" value=\"IX + X\"> IX + X\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xRdo\" value=\"X\"> X\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to College section -->\r\n    <div class=\"row\" *ngIf=\"category == 'College Section'\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Enrolled For</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiRdo\" value=\"XI\"> XI\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiiRdo\" value=\"XII\"> XII\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiAndxiiRdo\" value=\"XI + XII\"> XI + XII\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"stream == 'Science'\">\r\n      <div class=\"col-2\"></div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"noneRdo\" value=\"None\"> None\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"medicalEntRdo\" value=\"NEET\"> NEET\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"enggEntRdo\" value=\"MH-CET\"> MH-CET\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"bothEntRdo\" value=\"NEET + MH-CET\"> NEET + MH-CET\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"showCourses()\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Course</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"courseRadios\" [(ngModel)]=\"course\" id=\"vacationRdo\" value=\"Vacation\"> Vacation\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"courseRadios\" [(ngModel)]=\"course\" id=\"regularRdo\" value=\"Regular\"> Regular\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Class Session -->\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Class Session</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" [(ngModel)]=\"classSession\" id=\"morningRdo\" value=\"Morning\"> Morning\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" [(ngModel)]=\"classSession\" id=\"evenRdo\" value=\"Evening\"> Evening\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name</label>\r\n      </div>\r\n      <div class=\"col-9\">\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <br/>\r\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onEditBatchSubmit()\">Update</button>\r\n  </fieldset>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/edit-batch/edit-batch.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBatchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditBatchComponent = (function () {
    function EditBatchComponent(router, route, settingsService) {
        this.router = router;
        this.route = route;
        this.settingsService = settingsService;
    }
    EditBatchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.settingsService.listAcademicYears().subscribe(function (data) {
            if (data.success) {
                _this.academicYears = data.years;
            }
            else {
                _this.error = data.msg.message;
            }
        });
        this.batchToEdit = this.settingsService.getBatchById(this.id).subscribe(function (batchData) {
            if (batchData.success) {
                _this.batchToEdit = batchData.batch;
                console.log(_this.batchToEdit);
                _this.category = _this.batchToEdit.category;
                _this.stream = _this.batchToEdit.stream;
                _this.year = _this.batchToEdit.year;
                _this.name = _this.batchToEdit.name;
                _this.enrolledFor = _this.batchToEdit.enrolledFor;
                _this.classSession = _this.batchToEdit.classSession;
            }
            else
                _this.error = batchData.msg.message;
        });
    };
    EditBatchComponent.prototype.onEditBatchSubmit = function () {
        var _this = this;
        this.batchToEdit.category = this.category;
        this.batchToEdit.stream = this.stream;
        this.batchToEdit.year = this.year;
        this.batchToEdit.name = this.name;
        this.batchToEdit.enrolledFor = this.enrolledFor;
        this.batchToEdit.classSession = this.classSession;
        console.log(this.batchToEdit);
        this.settingsService.editBatch(this.batchToEdit).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['settings']);
            }
            else
                _this.error = data.msg.message;
        });
    };
    EditBatchComponent.prototype.checkIfCollegeSection = function () {
        return this.category == "College Section";
    };
    EditBatchComponent.prototype.checkIfScienceStream = function () {
        return this.stream == "Science";
    };
    EditBatchComponent.prototype.checkIfCommerceStream = function () {
        return this.stream == "Commerce";
    };
    EditBatchComponent.prototype.checkIfArtsStream = function () {
        return this.stream == "Arts";
    };
    // unselects all radio inputs on change of category
    EditBatchComponent.prototype.unselectAll = function () {
        this.stream = "";
        this.enrolledFor = "";
    };
    EditBatchComponent.prototype.showCourses = function () {
        return (this.enrolledFor == "X" || this.enrolledFor == "XII");
    };
    return EditBatchComponent;
}());
EditBatchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-edit-batch',
        template: __webpack_require__("../../../../../src/app/components/edit-batch/edit-batch.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-batch/edit-batch.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_settings_service__["a" /* SettingsService */]) === "function" && _c || Object])
], EditBatchComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-batch.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n  <h1 class=\"display-3\">Hello, staff!</h1>\r\n  <p class=\"lead\">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\r\n  <hr class=\"my-4\">\r\n  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\r\n  <!-- *ngIf=\"!(afAuth.authState | async)\" -->\r\n\r\n  <div>\r\n    <button class=\"btn btn-info\" *ngIf = \"!authService.loggedIn()\" routerLink=\"/login\" id=\"email\">Login With Email</button>\r\n    <br/>\r\n    <br/>\r\n  </div>\r\n  <button class=\"btn btn-primary\" *ngIf = \"authService.loggedIn()\" routerLink=\"/dashboard\">Go to Dashboard</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{error}}\r\n</div>\r\n\r\n<form class=\"form-signin\" ngNativeValidate>\r\n  <h2 class=\"form-signin-heading\">Login</h2>\r\n  <hr/>\r\n\r\n  <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\r\n  <input type=\"email\" id=\"inputEmail\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"Email address\" required\r\n    autofocus>\r\n\r\n  <br/>\r\n\r\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n  <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\" placeholder=\"Password\"\r\n    required>\r\n  <br/>\r\n  <button class=\"btn btn-lg btn-primary btn-block\" type=\"button\" (click)=\"onLoginSubmit()\">Sign in</button>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(router, settingsService, authService, validateService) {
        this.router = router;
        this.settingsService = settingsService;
        this.authService = authService;
        this.validateService = validateService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // Login
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        console.log("onLoginSubmit");
        var user = {
            email: this.email,
            password: this.password
        };
        if (!this.validateService.validateEmail(this.email)) {
            this.error = "Invalid Email Address";
        }
        else {
            this.authService.authenticateUser(user).subscribe(function (data) {
                if (data.success) {
                    if (data.user.isAdmin) {
                        _this.error = "Only  Admin users are allowed to login.";
                    }
                    else {
                        //set current year
                        _this.settingsService.getCurrentYear().subscribe(function (yearData) {
                            if (yearData.success) {
                                // set auth token and currentYear
                                _this.authService.storeUserData(data.token, data.user, yearData.year.year);
                                _this.router.navigate(['dashboard']);
                            }
                            else
                                _this.router.navigate(['redirect']);
                        });
                    }
                }
                else {
                    _this.error = "User record not found. Please check your login credentials";
                }
            });
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-primary\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\">Students Classes</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-controls=\"navbarsExampleDefault\"\r\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"navbar-collapse collapse\" id=\"navbar\">\r\n      <ul class=\"navbar-nav mr-auto navbar-left\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/signup']\">Add New Student</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/studentslisting']\">List Students</a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"navbar-nav mr-auto navbar-right\">\r\n        <li class=\"nav-item dropdown\" *ngIf=\"authService.loggedIn()\">\r\n          <a class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"true\">Settings</a>\r\n          <div class=\"dropdown-menu\" x-placement=\"bottom-start\" style=\"position: absolute; transform: translate3d(0px, 40px, 0px); top: 0px; left: 0px; will-change: transform;\">\r\n            <a class=\"dropdown-item\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/addbatch']\">Add Batch</a>\r\n            <a class=\"dropdown-item\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/addfaculty']\">Add Faculty</a>\r\n            <a class=\"dropdown-item\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/addacademicyear']\">Add Academic Year</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/settings']\">Settings</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" [routerLink]=\"['/userprofile']\">Profile</a>\r\n        </li>\r\n        <!-- <li class=\"nav-item\">\r\n          <a class=\"nav-link\" *ngIf=\"!authService.loggedIn()\" [routerLink]=\"['/login']\">Login</a>\r\n        </li> -->\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" *ngIf=\"authService.loggedIn()\" (click)=\"logout()\">Logout</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<br/>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = (function () {
    function NavbarComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/']);
        return false;
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], NavbarComponent);

var _a, _b;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/payment-history/payment-history.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/payment-history/payment-history.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/studentprofile/'+ studentId ]\">Student Profile</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Payment Details</li>\r\n  </ol>\r\n</nav>\r\n\r\n<div class=\"row\" *ngIf=\"paymentInfo\">\r\n  <div class=\"col-md-12\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header active\">\r\n        <h5>Payment Receipt</h5>\r\n      </div>\r\n      <div class=\"card-block\">\r\n        <ul class=\"list-group list-group-flush\">\r\n          <li class=\"list-group-item\">\r\n            <strong>Received with thanks from: </strong> {{ paymentInfo.studentName }}</li>\r\n          <li class=\"list-group-item\">\r\n            <strong>Date of Payment: </strong> {{ paymentInfo.paymentDate }}</li>\r\n          <li class=\"list-group-item\">\r\n            <strong>Sum of rupees: </strong> Rs.{{ paymentInfo.amount }}</li>\r\n          <li class=\"list-group-item\">\r\n            <strong>Receipt Number: </strong> {{ paymentInfo.receiptNumber }}</li>\r\n          <li class=\"list-group-item\">\r\n            <strong>By: </strong> {{ paymentInfo.modeOfPayment }}</li>\r\n          <li class=\"list-group-item\" *ngIf=\"paymentInfo.modeOfPayment == 'Cheque'\">\r\n            <strong>Bank: </strong> {{ paymentInfo.bankName }}\r\n            <br/>\r\n            <strong>Branch: </strong> {{ paymentInfo.branch }}\r\n            <br/>\r\n            <strong>Cheque Number: </strong> {{ paymentInfo.chequeNumber }}\r\n            <br/>\r\n            <strong>Cheque Dated: </strong> {{ paymentInfo.chequeDate | date:'dd-MM-yyyy' }}\r\n            <br/>\r\n            <strong *ngIf=\"paymentInfo.isChequeCleared\">Cheque Clearance Date: </strong> {{ paymentInfo.chequeClearanceDate }}\r\n          </li>\r\n          <li class=\"list-group-item\">\r\n            <strong>Remark:</strong> {{ paymentInfo.remark }}\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/payment-history/payment-history.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentHistoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentHistoryComponent = (function () {
    function PaymentHistoryComponent(router, route, paymentService) {
        this.router = router;
        this.route = route;
        this.paymentService = paymentService;
    }
    PaymentHistoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get id
        this.id = this.route.snapshot.params['id'];
        this.paymentService.getPaymentRecordById(this.id).subscribe(function (paymentData) {
            _this.paymentInfo = paymentData.payment;
            _this.studentId = _this.paymentInfo.studentId;
        });
    };
    return PaymentHistoryComponent;
}());
PaymentHistoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payment-history',
        template: __webpack_require__("../../../../../src/app/components/payment-history/payment-history.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/payment-history/payment-history.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_payment_service__["a" /* PaymentService */]) === "function" && _c || Object])
], PaymentHistoryComponent);

var _a, _b, _c;
//# sourceMappingURL=payment-history.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/redirect/redirect.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/redirect/redirect.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"message\">\r\n  {{message}}\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/redirect/redirect.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RedirectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedirectComponent = (function () {
    function RedirectComponent(route) {
        this.route = route;
    }
    RedirectComponent.prototype.ngOnInit = function () {
        this.message = this.route.snapshot.params['message'];
    };
    return RedirectComponent;
}());
RedirectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-redirect',
        template: __webpack_require__("../../../../../src/app/components/redirect/redirect.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/redirect/redirect.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], RedirectComponent);

var _a;
//# sourceMappingURL=redirect.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/search-student/search-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/search-student/search-student.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-sm-12 col-md-10 col-lg-10\">\r\n      <input class=\"form-control form-control-sm\" placeholder=\"Search by Name\" type=\"text\" id=\"inputSmall\" name=\"name\" [(ngModel)]=\"name\"\r\n        required>\r\n    </div>\r\n    <div class=\"form-group col-sm-12 col-md-2 col-lg-2\">\r\n      <button class=\"btn-sm btn-secondary my-2 my-sm-0\" (click)=\"searchStudent()\" type=\"button\">Search</button>\r\n      <button class=\"btn-sm btn-secondary my-2 my-sm-0\" *ngIf =\"showHideButton\" (click)=\"hideSearchResults()\" type=\"button\">Hide</button>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<table class=\"table table-sm table-hover\" *ngIf=\"searchResults\">\r\n  <thead class=\"thead-dark\">\r\n    <tr>\r\n      <th scope=\"col\">Student Name</th>\r\n      <th scope=\"col\">Standard</th>\r\n      <th scope=\"col\">Options</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let student of searchResults\" class=\"table-bordered\">\r\n      <td>{{student.name}}</td>\r\n      <td>[ {{student.enrolledFor}} / {{student.stream}} ]</td>\r\n      <td>\r\n        <button class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ student._id]\">Profile</button>\r\n        <button class=\"btn-sm btn-primary\" disabled>Send SMS</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "../../../../../src/app/components/search-student/search-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchStudentComponent = (function () {
    function SearchStudentComponent(studentService) {
        this.studentService = studentService;
        this.showHideButton = false;
    }
    SearchStudentComponent.prototype.ngOnInit = function () {
    };
    SearchStudentComponent.prototype.searchStudent = function () {
        var _this = this;
        this.studentService.searchStudentByName(this.name).subscribe(function (data) {
            if (data.success) {
                _this.searchResults = data.students;
                console.log(_this.searchResults);
                _this.showHideButton = true;
            }
        });
    };
    SearchStudentComponent.prototype.hideSearchResults = function () {
        this.searchResults = "";
        this.name = "";
        this.showHideButton = false;
    };
    return SearchStudentComponent;
}());
SearchStudentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-student',
        template: __webpack_require__("../../../../../src/app/components/search-student/search-student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/search-student/search-student.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_student_service__["a" /* StudentService */]) === "function" && _a || Object])
], SearchStudentComponent);

var _a;
//# sourceMappingURL=search-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{error}}\r\n</div>\r\n\r\n<div class=\"card\" *ngIf=\"academicYears\">\r\n  <div class=\"card-header\">\r\n    Academic Years\r\n  </div>\r\n  <div class=\"card-body\">\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"academicYears\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">#</th>\r\n          <th scope=\"col\">Year</th>\r\n          <th scope=\"col\">Options</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let year of academicYears;let i = index\" class=\"table-bordered\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{year.year}}</td>\r\n          <td>\r\n            <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"!year.isCurrentYear\" (click)=\"SetCurrentYear(i)\">Set Current Year</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<br/>\r\n\r\n<div class=\"card\" *ngIf=\"academicYears\">\r\n    <div class=\"card-header\">\r\n      Batches\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <table class=\"table table-sm table-hover\" *ngIf=\"batches\">\r\n        <thead class=\"thead-dark\">\r\n          <tr>\r\n            <th scope=\"col\">#</th>\r\n            <th scope=\"col\">Category</th>\r\n            <th scope=\"col\">Stream</th>\r\n            <th scope=\"col\">Standard</th>\r\n            <th scope=\"col\">Options</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let batch of batches;let i = index\" class=\"table-bordered\">\r\n            <td>{{i+1}}</td>\r\n            <td>{{batch.category}}</td>\r\n            <td>{{batch.stream}}</td>\r\n            <td>{{batch.name}}/{{batch.stream}}</td>\r\n            <td>\r\n              <button type=\"button\" class=\"btn-sm btn-secondary\" [routerLink]=\"['/editbatch/'+ batch._id ]\">Edit</button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/components/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SettingsComponent = (function () {
    function SettingsComponent(settingsService) {
        this.settingsService = settingsService;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("list");
        this.settingsService.listAcademicYears().subscribe(function (data) {
            if (data.success) {
                _this.academicYears = data.years;
            }
            else {
                _this.error = data.msg.message;
            }
        });
        this.settingsService.listBatches().subscribe(function (data) {
            if (data.success) {
                _this.batches = data.batches;
                console.log(_this.batches);
            }
            else {
                _this.error = data.msg.message;
            }
        });
    };
    SettingsComponent.prototype.SetCurrentYear = function (index) {
        var _this = this;
        if (this.academicYears) {
            this.academicYears[index].isCurrentYear = true;
            this.settingsService.setCurrentYear(this.academicYears[index]).subscribe(function (data) {
                if (data.success) {
                    _this.academicYears[index].isCurrentYear = true;
                }
                else {
                    _this.error = data.msg.message;
                }
            });
        }
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/components/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]) === "function" && _a || Object])
], SettingsComponent);

var _a;
//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup-student/signup-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup-student/signup-student.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Sign up Student</li>\r\n  </ol>\r\n</nav>\r\n\r\n<div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{error}}\r\n</div>\r\n\r\n<form ngNativeValidate class=\"bd-callout  bd-callout-yellow\" id=\"needs-validation\" ngNativeValidate>\r\n  <fieldset>\r\n    <legend>Sign Up</legend>\r\n    <hr/>\r\n\r\n    <!-- Name -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"name\" name=\"name\" [(ngModel)]=\"name\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Email & birthday  -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-4 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Phone Number</label>\r\n        <input class=\"form-control form-control-sm\" type=\"number\" id=\"phoneNumber\" name=\"phoneNumber\" [(ngModel)]=\"phoneNumber\" required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-5 col-lg-5\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Email Address</label>\r\n        <input class=\"form-control form-control-sm\" type=\"email\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-3 col-lg-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Birth Date</label>\r\n        <input class=\"form-control form-control-sm\" type=\"date\" id=\"birthDate\" name=\"birthDate\" [(ngModel)]=\"birthDate\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-primary\" type=\"button\" (click)=\"onSignupSubmit()\">Sign Up</button>\r\n\r\n  </fieldset>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/signup-student/signup-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_users_service__ = __webpack_require__("../../../../../src/app/services/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignupStudentComponent = (function () {
    function SignupStudentComponent(usersService, validateService, studentService, router) {
        this.usersService = usersService;
        this.validateService = validateService;
        this.studentService = studentService;
        this.router = router;
    }
    SignupStudentComponent.prototype.ngOnInit = function () {
    };
    SignupStudentComponent.prototype.onSignupSubmit = function () {
        var _this = this;
        console.log("onSignupSubmit");
        if (!this.validateService.validateEmail(this.email)) {
            this.error = "Invalid Email Address";
        }
        else {
            this.password = this.phoneNumber.toString();
            var newlyAddedUser = {
                email: this.email,
                birthDate: this.birthDate,
                phoneNumber: this.phoneNumber,
                name: this.name,
                password: this.password,
                role: "Student",
                isAdmin: false,
                isActive: false,
                isDeleted: false
            };
            this.usersService.registerUser(newlyAddedUser).subscribe(function (user) {
                if (user.success) {
                    _this.router.navigate(['addstudent/' + user.data._id]);
                }
                else {
                    _this.error = "User record not found. Please check your login credentials";
                }
            });
        }
    };
    return SignupStudentComponent;
}());
SignupStudentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup-student',
        template: __webpack_require__("../../../../../src/app/components/signup-student/signup-student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/signup-student/signup-student.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_users_service__["a" /* UsersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_validate_service__["a" /* ValidateService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _d || Object])
], SignupStudentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=signup-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/student-profile/student-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/student-profile/student-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Student Profile</li>\r\n  </ol>\r\n</nav>\r\n\r\n<div class=\"row\" *ngIf=\"student\">\r\n  <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n    <h3>\r\n      <strong> {{student.name}}\r\n        <button type=\"button\" class=\"btn btn-success\" *ngIf=\"student.isCombinedAdmission\" (click)=\"admitToNextYear()\">Admit to Next Year</button>\r\n      </strong>\r\n    </h3>\r\n  </div>\r\n</div>\r\n\r\n<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\" (click)=\"loadStudentInfo()\">\r\n    <a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#studentinfo\">Student Information</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"loadPaymentRecord()\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#payment\">Payment Record</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"loadMarksRecord()\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#marks\">Marks Record</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"loadAttendenceRecord()\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#attendence\">Attendence</a>\r\n  </li>\r\n</ul>\r\n\r\n<div id=\"myTabContent\" class=\"tab-content\">\r\n  <div class=\"tab-pane fade active show\" id=\"studentinfo\" *ngIf=\"student\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Basic Information</h5>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\">\r\n                <strong>Academic Year:</strong> {{ student.currentYear }}</li>\r\n              <li class=\"list-group-item\">\r\n                <strong>Studying in:</strong> {{ student.currentStandard }}\r\n                <small>({{ student.stream }})</small>/ {{ student.course }}</li>\r\n              <li class=\"list-group-item\">\r\n                <strong>Enrolled For:</strong> {{ student.enrolledFor }}</li>\r\n              <li class=\"list-group-item\" *ngIf=\"student.hasEnrolledForEntrance\">\r\n                <strong>Entrance:</strong> {{ student.entrance }}</li>\r\n            </ul>\r\n\r\n            <div class=\"card-footer text-muted\">\r\n              <a class=\"btn btn-primary\" [routerLink]=\"['/updatestudent/'+ student._id]\">Edit</a>\r\n              <!-- <a class=\"btn btn-danger\" href=\"#\">Delete</a> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-12 col-lg-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Other Information</h5>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\">\r\n                <strong>Branch:</strong> {{ student.branch }}, {{ student.classSession }} batch</li>\r\n              <li class=\"list-group-item\">\r\n                <strong>College:</strong> {{ student.instituteInfo.name }}</li>\r\n              <li class=\"list-group-item\">\r\n                <strong>College Timing:</strong> {{ student.instituteInfo.timing }}</li>\r\n              <li class=\"list-group-item\">\r\n                <strong>Address:</strong> {{ student.address }}</li>\r\n              <li class=\"list-group-item\" *ngIf=\"student.contactDetails\">\r\n                <strong>Contact Details:</strong>\r\n                <div *ngFor=\"let number of student.contactDetails\">\r\n                  <span class=\"glyphicon glyphicon-phone\"></span> {{ number }}</div>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"payment\">\r\n    <div class=\"row\" *ngIf=\"student && fees\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-4\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Payment Details</h5>\r\n          </div>\r\n          <div class=\"card-block\">\r\n            <ul class=\"list-group list-group-flush\">\r\n              <li class=\"list-group-item\">\r\n                <!-- total fees to pay -->\r\n                <strong>Course Fee:</strong>Rs. {{ fees.totalFeesToPay }}</li>\r\n              <li class=\"list-group-item\">\r\n                <strong>Concession: </strong>Rs. {{ fees.concession }}</li>\r\n              <li class=\"list-group-item\">\r\n                <strong>Total Paid Fees:</strong>Rs. {{ fees.totalPaidFees }}</li>\r\n              <li class=\"list-group-item\">\r\n                <strong>Expected Date of Completion: </strong>\r\n                <br /> {{ fees.expectedDateOfCompletion | date:'dd-MM-yyyy' }}</li>\r\n            </ul>\r\n          </div>\r\n\r\n          <div class=\"card-footer\">\r\n            <h4 *ngIf=\"!fees.isPaid\" style=\"color:red\">Balance Fees: <br/>\r\n              <strong> Rs. {{ fees.totalFees - fees.totalPaidFees - fees.concession }}</strong>\r\n            </h4>\r\n            <h3 *ngIf=\"fees.isPaid\" style=\"color:green\">Full Paid</h3>\r\n            <button type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModal\" *ngIf=\"showAddInstallmentbtn\" class=\"btn btn-info\"\r\n              (click)=\"changeAddState()\">Add Installment</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-12 col-md-12 col-lg-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\">\r\n            <h5>Fees Details <strong style=\"color:#FFEB3B\" *ngIf=\"balanceInstallmentAmount\">(Balance Installment: Rs. {{ balanceInstallmentAmount }})</strong></h5> \r\n          </div>\r\n          <div class=\"card-block\">\r\n            <table class=\"table table-hover\" *ngIf=\"paymentHistory\">\r\n              <thead>\r\n                <tr>\r\n                  <th scope=\"col\">#</th>\r\n                  <th scope=\"col\">Amount</th>\r\n                  <th scope=\"col\">Due Date</th>\r\n                  <th scope=\"col\">Remark</th>\r\n                  <th scope=\"col\">Options</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let inst of paymentHistory; let i = index\">\r\n                  <td>{{ i+1 }}</td>\r\n                  <td>{{ inst.amount }}</td>\r\n                  <td>{{ inst.paymentDate | date:'dd-MM-yyyy' }}</td>\r\n                  <td>\r\n                    <strong *ngIf=\"inst.isPaid\" style=\"color:green\">R.No.{{ inst.receiptNumber }} (Paid)</strong>\r\n                    <strong *ngIf=\"!inst.isPaid\" style=\"color:red\">Not Paid</strong>\r\n                  </td>\r\n                  <td>\r\n                    <button class=\"button btn-primary\" *ngIf=\"inst.isPaid\" [routerLink]=\"['/paymenthistory/'+ inst._id]\">Show Payment History</button>\r\n                    <button class=\"button btn-info\" *ngIf=\"!inst.isPaid\" (click)=\"changeEditState(inst,i)\" data-toggle=\"modal\" data-target=\"#exampleModal\">Edit</button>\r\n                    <button class=\"button btn-success\" *ngIf=\"!inst.isPaid\" [routerLink]=\"['/addPayment/'+ inst._id]\">Make Payment</button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"marks\">\r\n\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"attendence\">\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade bd-example-modal-sm\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\r\n  aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-sm\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\" *ngIf=\"addState\">Add Installment</h5>\r\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\" *ngIf=\"editState\">Edit Installment</h5>\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <!-- Form to add/edit installment -->\r\n        <form *ngIf=\"addState || editState\">\r\n          <div class=\"form-row\">\r\n            <div class=\"col-12\">\r\n              <label for=\"installment-amt\" class=\"col-form-label\">Amount:</label>\r\n              <input type=\"number\" class=\"form-control\" id=\"installment-amt\" name=\"amount\" [(ngModel)]=\"amount\">\r\n            </div>\r\n            <div class=\"col-12\">\r\n              <label for=\"message-text\" class=\"col-form-label\">Due Date:</label>\r\n              <input type=\"date\" class=\"form-control\" id=\"installment-dueDate\" name=\"paymentDate\" [(ngModel)]=\"paymentDate\">\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"addState\" (click)=\"addInstallment()\">Add Installment</button>\r\n        <button type=\"button\" class=\"btn btn-primary\" *ngIf=\"editState\" (click)=\"updateInstallmentDetails()\">Save changes</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/student-profile/student-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_feesdetails_service__ = __webpack_require__("../../../../../src/app/services/feesdetails.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_payment_service__ = __webpack_require__("../../../../../src/app/services/payment.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentProfileComponent = (function () {
    function StudentProfileComponent(router, route, studentService, feesdetailsService, paymentService) {
        this.router = router;
        this.route = route;
        this.studentService = studentService;
        this.feesdetailsService = feesdetailsService;
        this.paymentService = paymentService;
        this.addState = false;
        this.editState = false;
        this.balanceInstallmentAmount = 0;
        this.showAddInstallmentbtn = true;
    }
    StudentProfileComponent.prototype.ngOnInit = function () {
        // get student id
        this.id = this.route.snapshot.params['id'];
        // get feesdetails
        // get payment history
        // get student details
        this.loadStudentInfo();
    };
    StudentProfileComponent.prototype.loadPaymentRecord = function () {
        this.getFeesDetailsHistory();
        this.getPaymentHistory();
    };
    StudentProfileComponent.prototype.loadStudentInfo = function () {
        var _this = this;
        this.studentService.getStudentDetailsById(this.id).subscribe(function (studentData) {
            if (studentData.success) {
                _this.student = studentData.student;
                if (_this.student.isCombinedAdmission)
                    _this.student.isCombinedAdmission = false;
                console.log(_this.student);
            }
        });
    };
    StudentProfileComponent.prototype.loadMarksRecord = function () {
    };
    StudentProfileComponent.prototype.loadAttendenceRecord = function () {
    };
    StudentProfileComponent.prototype.getFeesDetailsHistory = function () {
        var _this = this;
        this.feesdetailsService.getFeesDetailsByStudentId(this.id).subscribe(function (feesData) {
            if (feesData.success) {
                console.log("getting feesData");
                _this.fees = feesData.feesDetails;
                console.log(feesData.feesDetails);
                _this.checkBalanceInstallmentAmount();
            }
        });
    };
    StudentProfileComponent.prototype.getPaymentHistory = function () {
        var _this = this;
        this.paymentService.getPaymentRecordByStudentId(this.id).subscribe(function (paymentData) {
            if (paymentData.success) {
                console.log("getting paymentData");
                _this.paymentHistory = paymentData.paymentDetails;
            }
        });
    };
    StudentProfileComponent.prototype.checkBalanceInstallmentAmount = function () {
        this.balanceInstallmentAmount = Number(this.fees.totalFeesToPay) - Number(this.fees.totalInstallmentAmount);
        this.showAddInstallmentbtn = this.balanceInstallmentAmount == 0 ? false : true;
        this.fees.isPaid = this.fees.isPaid;
    };
    StudentProfileComponent.prototype.findTotalInstallmentAmount = function (id) {
        var total = 0;
        this.paymentHistory.forEach(function (element) {
            if (element._id != id)
                total = Number(total) + Number(element.amount);
            else if (id == undefined)
                total = Number(total) + Number(element.amount);
        });
        return total;
    };
    ////////////////////////////
    // Code to Add installment
    ////////////////////////////
    StudentProfileComponent.prototype.addInstallment = function () {
        var _this = this;
        this.addState = true;
        console.log("from addNewInstallment");
        var newTotalInstallmentAmount = this.findTotalInstallmentAmount() + Number(this.amount);
        if (newTotalInstallmentAmount <= Number(this.fees.totalFeesToPay)) {
            this.fees.totalInstallmentAmount = Number(this.fees.totalInstallmentAmount) + Number(this.amount);
            console.log(this.paymentDate);
            console.log(this.amount);
            //add new installment
            this.feesdetailsService.updateFeesDetails(this.fees).subscribe(function (feesData) {
                if (feesData.success) {
                    //add paymentdetail record
                    var paymentDetail = {
                        studentId: _this.id,
                        studentName: _this.student.name,
                        feesDetailsId: _this.fees._id,
                        stream: _this.student.stream,
                        enrolledFor: _this.student.enrolledFor,
                        receiptNumber: 0,
                        isPaid: false,
                        paymentDate: _this.paymentDate,
                        amount: _this.amount,
                        modeOfPayment: "",
                        bankName: "",
                        branch: "",
                        chequeDate: new Date().getDate(),
                        chequeNumber: "",
                        remark: "",
                        createdAt: new Date().getDate(),
                        isDeleted: false
                    };
                    _this.paymentService.addNewPayment(paymentDetail).subscribe(function (paymentData) {
                        if (paymentData.success) {
                            _this.checkBalanceInstallmentAmount();
                            _this.amount = "";
                            _this.paymentDate = "";
                            $("#exampleModal").modal('hide');
                            _this.getPaymentHistory();
                        }
                    });
                }
            });
        }
        else {
            alert("Please check the balance installment amount.");
            this.amount = "";
            this.paymentDate = "";
            $("#exampleModal").modal('hide');
        }
    };
    StudentProfileComponent.prototype.changeAddState = function () {
        this.addState = true;
    };
    ////////////////////////////
    // Code to edit installment
    ////////////////////////////
    StudentProfileComponent.prototype.changeEditState = function (inst, index) {
        this.itemToEdit = inst;
        this.editState = true;
        this.amount = inst.amount;
        this.paymentDate = inst.paymentDate;
        this.index = index;
    };
    StudentProfileComponent.prototype.admitToNextYear = function () {
        console.log("Admit to Next Year");
    };
    //update this
    StudentProfileComponent.prototype.updateInstallmentDetails = function () {
        var _this = this;
        console.log("from updateInstallment");
        var newTotalInstallmentAmount = this.findTotalInstallmentAmount(this.paymentHistory[this.index]._id) + Number(this.amount);
        if (newTotalInstallmentAmount <= Number(this.fees.totalFeesToPay)) {
            this.fees.totalInstallmentAmount = newTotalInstallmentAmount;
            this.feesdetailsService.updateFeesDetails(this.fees).subscribe(function (feesData) {
                if (feesData.success) {
                    _this.paymentHistory[_this.index].amount = _this.amount;
                    _this.paymentHistory[_this.index].paymentDate = _this.paymentDate;
                    _this.paymentService.updatePaymentDetails(_this.paymentHistory[_this.index]).subscribe(function (paymentData) {
                        if (paymentData.success) {
                            _this.getPaymentHistory();
                            _this.amount = "";
                            _this.paymentDate = "";
                            $("#exampleModal").modal('hide');
                            _this.checkBalanceInstallmentAmount();
                        }
                    });
                }
            });
        }
    };
    return StudentProfileComponent;
}());
StudentProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-student-profile',
        template: __webpack_require__("../../../../../src/app/components/student-profile/student-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/student-profile/student-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_feesdetails_service__["a" /* FeesdetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_feesdetails_service__["a" /* FeesdetailsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_payment_service__["a" /* PaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_payment_service__["a" /* PaymentService */]) === "function" && _e || Object])
], StudentProfileComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=student-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/students-listing/students-listing.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cust-btn{\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}\r\n\r\n.search-results{\r\n    border: 1px solid rgba(0, 0, 0, 0.125);\r\n    background-color: #eeeeee;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/students-listing/students-listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-dismissible alert-danger\" role=\"alert\" *ngIf=\"error\">\r\n  {{error}}\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-2\">\r\n    <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Select Year</label>\r\n  </div>\r\n  <div class=\"col-10\">\r\n    <select id=\"academicyear\" class=\"custom-select\" name=\"year\" [(ngModel)]=\"year\">\r\n      <option *ngFor=\"let year of academicYears\" selected=\"{{year.isCurrentYear}}\" value=\"{{year.year}}\">{{year.year}}</option>\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<br/>\r\n\r\n<ul class=\"nav nav-tabs\">\r\n  <li class=\"nav-item\" (click)=\"loadBatchButtons('English')\">\r\n    <a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#english\">English Medium</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"loadBatchButtons('Marathi')\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#marathi\">Marathi Medium</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"loadBatchButtons('Semi-English')\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#semienglish\">Semi-English Medium</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"loadBatchButtons('Commerce')\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#commerce\">Commerce</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"loadBatchButtons('Arts')\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#arts\">Arts</a>\r\n  </li>\r\n  <li class=\"nav-item\" (click)=\"loadBatchButtons('Science')\">\r\n    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#science\">Science</a>\r\n  </li>\r\n</ul>\r\n\r\n<div id=\"myTabContent\" class=\"tab-content\">\r\n  <div class=\"tab-pane fade active show\" id=\"english\">\r\n    <br/>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n        <button type=\"button\" *ngFor=\"let batchBtn of batchesByTab\" class=\"btn btn-primary cust-btn\" (click)=\"listStudents(batchBtn.category, batchBtn.stream, batchBtn.enrolledFor, batchBtn.course, batchBtn.classSession)\">\r\n          {{batchBtn.name}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <br/>\r\n    <table class=\"table table-sm table-hover searchresults\" *ngIf=\"englishMediumData\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Sr.No.</th>\r\n          <th scope=\"col\">Student Name</th>\r\n          <th scope=\"col\">Standard</th>\r\n          <th scope=\"col\">Session</th>\r\n          <th scope=\"col\">Contact Numbers</th>\r\n          <th scope=\"col\">School Name</th>\r\n          <th scope=\"col\">Options</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of englishMediumData; let i = index\" class=\"table-bordered\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{student.name}}\r\n            <br/> [ {{student.enrolledFor}} / {{student.course}} ]\r\n          </td>\r\n          <td>{{student.currentStandard}}</td>\r\n          <td>{{student.classSession}}</td>\r\n          <td>\r\n            <div *ngFor=\"let number of student.contactDetails\">\r\n              {{ number }}\r\n            </div>\r\n          </td>\r\n          <td>{{student.instituteInfo.name}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ student._id]\">Profile</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"marathi\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n        <button type=\"button\" *ngFor=\"let batchBtn of batchesByTab\" class=\"btn btn-primary cust-btn\" (click)=\"listStudents(batchBtn.category, batchBtn.stream, batchBtn.enrolledFor, batchBtn.course, batchBtn.classSession)\">\r\n          {{batchBtn.name}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"marathiMediumData\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Sr.No.</th>\r\n          <th scope=\"col\">Student Name</th>\r\n          <th scope=\"col\">Standard</th>\r\n          <th scope=\"col\">Session</th>\r\n          <th scope=\"col\">Contact Numbers</th>\r\n          <th scope=\"col\">School Name</th>\r\n          <th scope=\"col\">Options</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of marathiMediumData; let i = index\" class=\"table-bordered\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{student.name}}\r\n            <br/> [ {{student.enrolledFor}} / {{student.course}} ]\r\n          </td>\r\n          <td>{{student.currentStandard}}</td>\r\n          <td>{{student.classSession}}</td>\r\n          <td>\r\n            <div *ngFor=\"let number of student.contactDetails\">\r\n              {{ number }}\r\n            </div>\r\n          </td>\r\n          <td>{{student.instituteInfo.name}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ student._id]\">Profile</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"semienglish\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n        <button type=\"button\" *ngFor=\"let batchBtn of batchesByTab\" class=\"btn btn-primary cust-btn\" (click)=\"listStudents(batchBtn.category, batchBtn.stream, batchBtn.enrolledFor, batchBtn.course, batchBtn.classSession)\">\r\n          {{batchBtn.name}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"semienglishMediumData\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Sr.No.</th>\r\n          <th scope=\"col\">Student Name</th>\r\n          <th scope=\"col\">Standard</th>\r\n          <th scope=\"col\">Session</th>\r\n          <th scope=\"col\">Contact Numbers</th>\r\n          <th scope=\"col\">School Name</th>\r\n          <th scope=\"col\">Options</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of semienglishMediumData; let i = index\" class=\"table-bordered\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{student.name}}\r\n            <br/> [ {{student.enrolledFor}} / {{student.course}} ]\r\n          </td>\r\n          <td>{{student.currentStandard}}</td>\r\n          <td>{{student.classSession}}</td>\r\n          <td>\r\n            <div *ngFor=\"let number of student.contactDetails\">\r\n              {{ number }}\r\n            </div>\r\n          </td>\r\n          <td>{{student.instituteInfo.name}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ student._id]\">Profile</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"commerce\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n        <button type=\"button\" *ngFor=\"let batchBtn of batchesByTab\" class=\"btn btn-primary cust-btn\" (click)=\"listCommerceStudents(batchBtn.enrolledFor, batchBtn.course, batchBtn.classSession)\">\r\n          {{batchBtn.name}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"commerceSectionData\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Sr.No.</th>\r\n          <th scope=\"col\">Student Name</th>\r\n          <th scope=\"col\">Standard</th>\r\n          <th scope=\"col\">Session</th>\r\n          <th scope=\"col\">Contact Numbers</th>\r\n          <th scope=\"col\">School Name</th>\r\n          <th scope=\"col\">Options</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of commerceSectionData; let i = index\" class=\"table-bordered\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{student.name}}\r\n            <br/> [ {{student.enrolledFor}} / {{student.course}} ]\r\n          </td>\r\n          <td>{{student.currentStandard}}</td>\r\n          <td>{{student.classSession}}</td>\r\n          <td>\r\n            <div *ngFor=\"let number of student.contactDetails\">\r\n              {{ number }}\r\n            </div>\r\n          </td>\r\n          <td>{{student.instituteInfo.name}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ student._id]\">Profile</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"arts\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n        <button type=\"button\" *ngFor=\"let batchBtn of batchesByTab\" class=\"btn btn-primary cust-btn\" (click)=\"listArtsStudents(batchBtn.enrolledFor, batchBtn.course, batchBtn.classSession)\">\r\n          {{batchBtn.name}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <table class=\"table table-sm table-hover\" *ngIf=\"artsSectionData\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Sr.No.</th>\r\n          <th scope=\"col\">Student Name</th>\r\n          <th scope=\"col\">Standard</th>\r\n          <th scope=\"col\">Session</th>\r\n          <th scope=\"col\">Contact Numbers</th>\r\n          <th scope=\"col\">School Name</th>\r\n          <th scope=\"col\">Options</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of artsSectionData; let i = index\" class=\"table-bordered\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{student.name}}\r\n            <br/> [ {{student.enrolledFor}} / {{student.course}} ]\r\n          </td>\r\n          <td>{{student.currentStandard}}</td>\r\n          <td>{{student.classSession}}</td>\r\n          <td>\r\n            <div *ngFor=\"let number of student.contactDetails\">\r\n              {{ number }}\r\n            </div>\r\n          </td>\r\n          <td>{{student.instituteInfo.name}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ student._id]\">Profile</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n  <div class=\"tab-pane fade\" id=\"science\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 col-md-12 col-lg-12\">\r\n        <button type=\"button\" *ngFor=\"let batchBtn of batchesByTab\" class=\"btn btn-primary cust-btn\" (click)=\"listScienceStudents(batchBtn.enrolledFor, batchBtn.course, batchBtn.classSession, batchBtn.entrance)\">\r\n          {{batchBtn.name}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <table class=\"table table-sm table-hover searchresults\" *ngIf=\"scienceSectionData\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Sr.No.</th>\r\n          <th scope=\"col\">Student Name</th>\r\n          <th scope=\"col\">Standard</th>\r\n          <th scope=\"col\">Session</th>\r\n          <th scope=\"col\">Contact Numbers</th>\r\n          <th scope=\"col\">School Name</th>\r\n          <th scope=\"col\">Options</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let student of scienceSectionData; let i = index\" class=\"table-bordered\">\r\n          <td>{{i+1}}</td>\r\n          <td>{{student.name}}\r\n            <br/> [ {{student.enrolledFor}} / {{student.course}} ]\r\n          </td>\r\n          <td>{{student.currentStandard}}</td>\r\n          <td>{{student.classSession}}</td>\r\n          <td>\r\n            <div *ngFor=\"let number of student.contactDetails\">\r\n              {{ number }}\r\n            </div>\r\n          </td>\r\n          <td>{{student.instituteInfo.name}}</td>\r\n          <td>\r\n            <button class=\"btn-sm btn-info\" [routerLink]=\"['/studentprofile/'+ student._id]\">Profile</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/students-listing/students-listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentsListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StudentsListingComponent = (function () {
    function StudentsListingComponent(studentService, settingsService) {
        this.studentService = studentService;
        this.settingsService = settingsService;
        this.course = "Regular";
    }
    StudentsListingComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('students-listing');
        this.settingsService.listAcademicYears().subscribe(function (data) {
            if (data.success) {
                _this.academicYears = data.years;
                var currentYear = _this.academicYears.filter(function (year) {
                    return year.isCurrentYear == true;
                })[0].year;
                console.log(currentYear);
                _this.settingsService.listBatches(currentYear).subscribe(function (batchData) {
                    if (batchData.success) {
                        console.log(batchData.batches);
                        _this.batches = batchData.batches;
                        // default to first tab
                        _this.loadBatchButtons("English");
                    }
                    else {
                        _this.error = batchData.msg.message;
                    }
                });
            }
            else {
                _this.error = data.msg.message;
            }
        });
    };
    // Load batches buttons
    StudentsListingComponent.prototype.loadBatchButtons = function (stream) {
        this.batchesByTab = this.batches.filter(function (batch) {
            return batch.stream == stream;
        });
    };
    StudentsListingComponent.prototype.checkIfCollegeSection = function () {
        return this.category == "College Section";
    };
    StudentsListingComponent.prototype.checkIfSchoolSection = function () {
        return this.category == "School Section";
    };
    StudentsListingComponent.prototype.checkIfScienceStream = function () {
        return this.stream == "Science";
    };
    StudentsListingComponent.prototype.checkIfCommerceStream = function () {
        return this.stream == "Commerce";
    };
    StudentsListingComponent.prototype.checkIfArtsStream = function () {
        return this.stream == "Arts";
    };
    // unselects all radio inputs on change of category
    StudentsListingComponent.prototype.unselectAll = function () {
        this.stream = "";
        this.enrolledFor = "";
        this.entrance = "";
        this.offeredSubjects = "";
        this.classSession = "";
        this.course = "Regular";
    };
    StudentsListingComponent.prototype.listStudents = function (category, stream, enrolledFor, course, classSession) {
        var _this = this;
        this.studentService.searchSchoolSectionStudents(category, stream, enrolledFor, course, classSession).subscribe(function (studentsData) {
            if (studentsData.success) {
                _this.students = studentsData.students;
                if (stream == "English")
                    _this.englishMediumData = studentsData.students;
                if (stream == "Semi-English")
                    _this.semienglishMediumData = studentsData.students;
                if (stream == "Marathi")
                    _this.marathiMediumData = studentsData.students;
            }
            else
                _this.error = studentsData.msg.message;
        });
    };
    StudentsListingComponent.prototype.listScienceStudents = function (enrolledFor, course, classSession, entrance) {
        var _this = this;
        console.log("from listScienceStudents");
        this.studentService.searchCollegeSectionStudents("College Section", "Science", enrolledFor, course, classSession, entrance).subscribe(function (studentsData) {
            if (studentsData.success) {
                _this.scienceSectionData = studentsData.students;
            }
        });
    };
    StudentsListingComponent.prototype.listCommerceStudents = function (enrolledFor, course, classSession, entrance) {
        var _this = this;
        console.log("from listCommerceStudents");
        this.studentService.searchCollegeSectionStudents("College Section", "Commerce", enrolledFor, course, classSession, entrance).subscribe(function (studentsData) {
            if (studentsData.success) {
                _this.commerceSectionData = studentsData.students;
            }
        });
    };
    StudentsListingComponent.prototype.listArtsStudents = function (enrolledFor, course, classSession, entrance) {
        var _this = this;
        console.log("from listArtsStudents");
        this.studentService.searchCollegeSectionStudents("College Section", "Arts", enrolledFor, course, classSession, entrance).subscribe(function (studentsData) {
            if (studentsData.success) {
                _this.listArtsStudents = studentsData.students;
            }
        });
    };
    StudentsListingComponent.prototype.showCourses = function () {
        return (this.enrolledFor == "X" || this.enrolledFor == "XII");
    };
    return StudentsListingComponent;
}());
StudentsListingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-students-listing',
        template: __webpack_require__("../../../../../src/app/components/students-listing/students-listing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/students-listing/students-listing.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_settings_service__["a" /* SettingsService */]) === "function" && _b || Object])
], StudentsListingComponent);

var _a, _b;
//# sourceMappingURL=students-listing.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/update-student/update-student.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/update-student/update-student.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"breadcrumb\" role=\"navigation\">\r\n  <ol class=\"breadcrumb\">\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/dashboard']\">Dashboard</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item\">\r\n      <a [routerLink]=\"['/studentprofile/'+ id ]\">Student Profile</a>\r\n    </li>\r\n    <li class=\"breadcrumb-item active\" aria-current=\"page\">Update Student Information</li>\r\n  </ol>\r\n</nav>\r\n\r\n<form ngNativeValidate class=\"bd-callout  bd-callout-yellow\" id=\"needs-validation\">\r\n  <fieldset>\r\n    <legend>Update Information</legend>\r\n    <hr/>\r\n\r\n    <!-- Name -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-12\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"name\" [(ngModel)]=\"name\" disabled>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Select Year</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <select id=\"academicyear\" class=\"custom-select\" name=\"year\" [(ngModel)]=\"year\">\r\n          <option *ngFor=\"let year of academicYears\" value=\"{{year.year}}\">{{year.year}}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Category -->\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Category</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" (click)=\"unselectAll()\" name=\"category\" [(ngModel)]=\"category\" id=\"categoryRdo\"\r\n              value=\"School Section\" checked> School Section\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" (click)=\"unselectAll()\" name=\"category\" [(ngModel)]=\"category\" id=\"categoryRdo\"\r\n              value=\"College Section\"> College Section\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Stream If college section -->\r\n    <div class=\"row\" *ngIf=\"category == 'School Section'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Medium</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"engRdo\" value=\"English\"> English\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"semiRdo\" value=\"Semi-English\"> Semi-English\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"marRdo\" value=\"Marathi\"> Marathi\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Stream If college section -->\r\n    <div class=\"row\" *ngIf=\"checkIfCollegeSection()\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Stream</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"sciRdo\" value=\"Science\"> Science\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"comRdo\" value=\"Commerce\"> Commerce\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"stream\" [(ngModel)]=\"stream\" id=\"artsRdo\" value=\"Arts\"> Arts\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to school section -->\r\n    <div class=\"row\" *ngIf=\"category == 'School Section'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Enrolled For</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"viiiRdo\" value=\"VIII\"> VIII\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"ixRdo\" value=\"IX\"> IX\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"ixAndxRdo\" value=\"IX + X\"> IX + X\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xRdo\" value=\"X\"> X\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to College section -->\r\n    <div class=\"row\" *ngIf=\"category == 'College Section'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Enrolled For</label>\r\n      </div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiRdo\" value=\"XI\"> XI\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiiRdo\" value=\"XII\"> XII\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"standardRdo\" [(ngModel)]=\"enrolledFor\" id=\"xiAndxiiRdo\" value=\"XI + XII\"> XI + XII\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Enrolled for : options specific to Science stream -->\r\n    <div class=\"row\" *ngIf=\"stream == 'Science'\">\r\n      <div class=\"col-2\"></div>\r\n      <div class=\"col-10\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"noneRdo\" value=\"None\"> None\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"medicalEntRdo\" value=\"NEET\"> NEET\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"enggEntRdo\" value=\"MH-CET\"> MH-CET\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"entranceRdo\" [(ngModel)]=\"entrance\" id=\"bothEntRdo\" value=\"NEET + MH-CET\"> NEET + MH-CET\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- Subjects specific to Science stream -->\r\n    <div class=\"row\" *ngIf=\"stream == 'Science'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Subjects Offered</label>\r\n      </div>\r\n      <div class=\"col-3\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"pcbRdo\" value=\"PCB\"> PCB\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"pcmRdo\" value=\"PCM\"> PCM\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"pcmbRdo\" value=\"PCMB\"> PCMB\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Subjects specific to Commerce stream -->\r\n    <div class=\"row\" *ngIf=\"stream == 'Commerce'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Subjects Offered</label>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"spRdo\" value=\"All subjects with SP\"> All subjects with SP\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"mathsRdo\" value=\"All subjects with Maths\"> All subjects with Maths\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Subjects specific to Arts stream -->\r\n    <div class=\"row\" *ngIf=\"stream == 'Arts'\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Subjects Offered</label>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"foursubRdo\" value=\"4 Subjects\"> 4 Subjects\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"coursesOfferedRdo\" [(ngModel)]=\"offeredSubjects\" id=\"allsubRdo\" value=\"All Subjects\"> All Subjects\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Courses -->\r\n    <div class=\"row\" *ngIf=\"showCourses()\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Course</label>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"courseRadios\" [(ngModel)]=\"course\" id=\"vacationRdo\" value=\"Vacation\"> Vacation\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"courseRadios\" [(ngModel)]=\"course\" id=\"regularRdo\" value=\"Regular\"> Regular\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Class Session -->\r\n    <div class=\"row\">\r\n      <div class=\"col-2\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Class Session</label>\r\n      </div>\r\n      <div class=\"col-8\">\r\n        <div class=\"form-check\">\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" [(ngModel)]=\"classSession\" id=\"morningRdo\" value=\"Morning\"> Morning\r\n          </label>\r\n          <label class=\"form-check-label\">\r\n            <input type=\"radio\" class=\"form-check-input\" name=\"optionsRadios\" [(ngModel)]=\"classSession\" id=\"evenRdo\" value=\"Evening\"> Evening\r\n          </label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Address -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-12\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Address</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"address\" [(ngModel)]=\"address\" required>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Institution Information -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-9\" *ngIf=\"checkIfCollegeSection()\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name of the College</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"instituteName\" [(ngModel)]=\"instituteName\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-9\" *ngIf=\"!checkIfCollegeSection()\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Name of the School</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"instituteName\" [(ngModel)]=\"instituteName\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-3\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Timing</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"instituteTiming\" [(ngModel)]=\"instituteTiming\">\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Contact Details -->\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Contact Number 1(Self)</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"contactNumber1\" [(ngModel)]=\"contactNumber1\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Contact Number 2</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"contactNumber2\" [(ngModel)]=\"contactNumber2\"\r\n          required>\r\n      </div>\r\n      <div class=\"form-group col-sm-12 col-md-12 col-lg-4\">\r\n        <label class=\"col-form-label col-form-label-sm\" for=\"inputSmall\">Contact Number 3</label>\r\n        <input class=\"form-control form-control-sm\" type=\"text\" id=\"inputSmall\" name=\"contactNumber3\" [(ngModel)]=\"contactNumber3\">\r\n      </div>\r\n    </div>\r\n    <br/>\r\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"onUpdateSubmit()\">Submit</button>\r\n  </fieldset>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/update-student/update-student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_student_service__ = __webpack_require__("../../../../../src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_settings_service__ = __webpack_require__("../../../../../src/app/services/settings.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UpdateStudentComponent = (function () {
    function UpdateStudentComponent(router, route, studentService, settingsService) {
        this.router = router;
        this.route = route;
        this.studentService = studentService;
        this.settingsService = settingsService;
        this.contactDetails = [];
    }
    UpdateStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.params['id'];
        this.settingsService.listAcademicYears().subscribe(function (data) {
            if (data.success) {
                _this.academicYears = data.years;
            }
            else {
                _this.error = data.msg.message;
            }
        });
        this.studentService.getStudentDetailsById(this.id).subscribe(function (studentData) {
            console.log(studentData.student);
            _this.userId = studentData.student._id;
            _this.name = studentData.student.name;
            _this.address = studentData.student.address;
            _this.instituteName = studentData.student.instituteInfo.name;
            _this.instituteTiming = studentData.student.instituteInfo.timing;
            _this.contactNumber1 = studentData.student.contactDetails[0];
            _this.contactNumber2 = studentData.student.contactDetails[1];
            _this.contactNumber3 = studentData.student.contactDetails[2];
            _this.enrolledFor = studentData.student.enrolledFor;
            _this.entrance = studentData.student.entrance;
            _this.course = studentData.student.course;
            _this.classSession = studentData.student.classSession;
            _this.branch = studentData.student.branch;
            _this.category = studentData.student.category;
            _this.stream = studentData.student.stream;
            _this.offeredSubjects = studentData.student.offeredSubjects;
            _this.year = studentData.student.currentYear;
        });
    };
    UpdateStudentComponent.prototype.onUpdateSubmit = function () {
        var _this = this;
        if (this.contactNumber1 != null)
            this.contactDetails.push(this.contactNumber1);
        if (this.contactNumber2 != null)
            this.contactDetails.push(this.contactNumber2);
        if (this.contactNumber3 != null)
            this.contactDetails.push(this.contactNumber3);
        var studentToUpdate = {
            _id: this.id,
            userId: this.userId,
            name: this.name,
            address: this.address,
            classSession: this.classSession,
            category: this.category,
            stream: this.stream,
            branch: this.branch,
            enrolledFor: this.enrolledFor,
            course: (this.enrolledFor == "X") ? this.course : "Regular",
            offeredSubjects: this.offeredSubjects,
            instituteInfo: {
                name: this.instituteName,
                timing: this.instituteTiming
            },
            contactDetails: this.addContactDetails(),
            isCombinedAdmission: (this.enrolledFor == "XI + XII"),
            currentYear: this.year,
            isDeleted: false
        };
        this.setCurrentStandard(studentToUpdate);
        // add science related fields
        if (this.checkIfScienceStream())
            this.addScienceRelatedFields(studentToUpdate);
        console.log(studentToUpdate);
        this.studentService.updateStudent(studentToUpdate).subscribe(function (data) {
            if (data.success) {
                _this.router.navigate(['/studentprofile/' + _this.id]);
            }
        });
    };
    /*******************
    / Helper functions
    *******************/
    UpdateStudentComponent.prototype.addContactDetails = function () {
        var contactDetails = [];
        if (this.contactNumber1)
            contactDetails.push(this.contactNumber1);
        if (this.contactNumber2)
            contactDetails.push(this.contactNumber2);
        if (this.contactNumber3)
            contactDetails.push(this.contactNumber3);
        return contactDetails;
    };
    UpdateStudentComponent.prototype.checkIfCollegeSection = function () {
        return this.category == "College Section";
    };
    UpdateStudentComponent.prototype.checkIfScienceStream = function () {
        return this.stream == "Science";
    };
    UpdateStudentComponent.prototype.checkIfCommerceStream = function () {
        return this.stream == "Commerce";
    };
    UpdateStudentComponent.prototype.checkIfArtsStream = function () {
        return this.stream == "Arts";
    };
    // for sciecne stream specific fields
    UpdateStudentComponent.prototype.addScienceRelatedFields = function (newlyAddedStudent) {
        newlyAddedStudent.entrance = this.entrance;
        newlyAddedStudent.hasEnrolledForEntrance = (this.entrance != "None");
    };
    // sets current standard
    // checks if admission is combined
    UpdateStudentComponent.prototype.setCurrentStandard = function (newlyAddedStudent) {
        if (this.checkIfCollegeSection()) {
            newlyAddedStudent.isCombinedAdmission = (this.enrolledFor == "XI + XII");
        }
        else
            newlyAddedStudent.isCombinedAdmission = (this.enrolledFor == "IX + X");
        if (this.checkIfScienceStream() || this.checkIfCommerceStream() || this.checkIfArtsStream()) {
            newlyAddedStudent.currentStandard = this.enrolledFor == "XI + XII" ? "XI" : this.enrolledFor;
        }
        else
            newlyAddedStudent.currentStandard = this.enrolledFor == "IX + X" ? "IX" : this.enrolledFor;
    };
    // unselects all radio inputs on change of category
    UpdateStudentComponent.prototype.unselectAll = function () {
        this.stream = "";
        this.enrolledFor = "";
        this.entrance = "";
        this.offeredSubjects = "";
    };
    UpdateStudentComponent.prototype.showCourses = function () {
        return (this.enrolledFor == "IX" || this.enrolledFor == "X"
            || this.enrolledFor == "XII" || this.enrolledFor == "XI + XII");
    };
    return UpdateStudentComponent;
}());
UpdateStudentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-update-student',
        template: __webpack_require__("../../../../../src/app/components/update-student/update-student.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/update-student/update-student.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_student_service__["a" /* StudentService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_settings_service__["a" /* SettingsService */]) === "function" && _d || Object])
], UpdateStudentComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=update-student.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf= \"user\">\r\n  <h2 class=\"page-header\">{{user.name}}</h2>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\"><strong>Branch: {{user.branch}}</strong></li>\r\n    <li class=\"list-group-item\">Email: {{user.email}}</li>\r\n    <li class=\"list-group-item\">Phone Number: {{user.phoneNumber}}</li>\r\n    <li class=\"list-group-item\">Birth Date: {{user.birthDate}}</li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-profile/user-profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = (function () {
    function UserProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getUserProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return UserProfileComponent;
}());
UserProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-user-profile',
        template: __webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-profile/user-profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], UserProfileComponent);

var _a, _b;
//# sourceMappingURL=user-profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/SortGridPipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortGridPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortGridPipe = (function () {
    function SortGridPipe() {
    }
    SortGridPipe.prototype.transform = function (array, args) {
        if (typeof args[0] === "undefined") {
            return array;
        }
        var direction = args[0][0];
        var column = args.replace('-', '');
        array.sort(function (a, b) {
            var left = Number(new Date(a[column]));
            var right = Number(new Date(b[column]));
            return (direction === "-") ? right - left : left - right;
        });
        return array;
    };
    return SortGridPipe;
}());
SortGridPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'sortgrid'
    }),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SortGridPipe);

//# sourceMappingURL=SortGridPipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    // Login
    // Checks if user exists in the system
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].usersUrl.concat('authenticate'), user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].usersUrl.concat('profile'), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getUserProfileById = function (userId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("userId", userId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].usersUrl.concat('getUserProfileById'), { headers: headers, params: params })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    // Fucntion to stire user record in localstorage
    AuthService.prototype.storeUserData = function (token, user, currentYear) {
        // add current year here
        console.log("storeUserData");
        localStorage.setItem('currentYear', currentYear);
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('branch', user.branch);
        this.authToken = token;
        this.user = user;
    };
    // Logout
    // Logs out the currently logged in user
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthService);

var _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/feesdetails.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeesdetailsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeesdetailsService = (function () {
    function FeesdetailsService(http) {
        this.http = http;
    }
    // Add Fees record
    FeesdetailsService.prototype.addNewFeesdetails = function (fees) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].feesDetailsUrl.concat('addNewFeesdetails'), fees, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    // Get Fees Details by Id
    FeesdetailsService.prototype.getFeesDetailsById = function (feesDetailId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("feesDetailId", feesDetailId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].feesDetailsUrl.concat('getFeesDetailsById'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    // Get Fees Details by StudentId
    FeesdetailsService.prototype.getFeesDetailsByStudentId = function (studentId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("studentId", studentId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].feesDetailsUrl.concat('getFeesDetailsByStudentId'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    // Update fees details
    FeesdetailsService.prototype.updateFeesDetails = function (fees) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].feesDetailsUrl.concat('updateFeesDetails'), fees, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    FeesdetailsService.prototype.setHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    FeesdetailsService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return FeesdetailsService;
}());
FeesdetailsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], FeesdetailsService);

var _a;
//# sourceMappingURL=feesdetails.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/payment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaymentService = (function () {
    function PaymentService(http) {
        this.http = http;
    }
    // Dashboard - Balance Fees
    PaymentService.prototype.showBalanceFeesOnDashboard = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("isPaid", "false");
        params.set("branch", localStorage.getItem('branch'));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].paymentsUrl.concat('showBalanceFeesOnDashboard'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    // Dashboard - Pending cheques
    PaymentService.prototype.showPendingChequeEntries = function () {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("isChequeCleared", "false");
        params.set("branch", localStorage.getItem('branch'));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].paymentsUrl.concat('showPendingChequeEntries'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    // Add New Payment
    PaymentService.prototype.addNewPayment = function (payment) {
        payment.branch = localStorage.getItem('branch');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].paymentsUrl.concat('addNewPayment'), payment, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    // get payment record by id
    PaymentService.prototype.getPaymentRecordById = function (paymentId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("paymentId", paymentId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].paymentsUrl.concat('getPaymentById'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    // get payment record by StudentId
    PaymentService.prototype.getPaymentRecordByStudentId = function (studentId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("studentId", studentId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].paymentsUrl.concat('getPaymentRecordByStudentId'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    // Update Payment record
    PaymentService.prototype.updatePaymentDetails = function (payment) {
        console.log("service: updatePaymentDetails");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].paymentsUrl.concat('updatePaymentDetails'), payment, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    PaymentService.prototype.setHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    PaymentService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    return PaymentService;
}());
PaymentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], PaymentService);

var _a;
//# sourceMappingURL=payment.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/settings.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SettingsService = (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.setCurrentYear = function (yearToUpdate) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].settingsUrl.concat('setCurrentYear'), yearToUpdate, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.getCurrentYear = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].settingsUrl.concat('getCurrentYear'), { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.getBatchById = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("id", id);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].settingsUrl.concat('getBatchById'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.addBatch = function (batch) {
        batch.branch = localStorage.getItem('branch');
        console.log(batch);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].settingsUrl.concat('addBatch'), batch, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.editBatch = function (batchToUpdate) {
        console.log(batchToUpdate);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].settingsUrl.concat('editBatch'), batchToUpdate, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.addAcademicYear = function (academicYear) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].settingsUrl.concat('addAcademicYear'), academicYear, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.listBatches = function (year) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        if (year)
            params.set("year", year);
        else
            params.set("year", localStorage.getItem('currentYear'));
        params.set("branch", localStorage.getItem('branch'));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].settingsUrl.concat('listBatches'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.listAcademicYears = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].settingsUrl.concat('listAcademicYears'), { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    SettingsService.prototype.setHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    return SettingsService;
}());
SettingsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], SettingsService);

var _a;
//# sourceMappingURL=settings.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StudentService = (function () {
    function StudentService(http) {
        this.http = http;
    }
    // Register 
    // Register new user
    StudentService.prototype.addNewStudent = function (student) {
        student.branch = localStorage.getItem('branch');
        console.log("current branch is for newly added student is " + student.branch);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].studentsUrl.concat('addNewStudent'), student, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    // Update student information
    StudentService.prototype.updateStudent = function (student) {
        console.log("service: updateStudent");
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].studentsUrl.concat('updateStudentInfo'), student, { headers: this.setHeaders() })
            .map(function (res) { return res.json(); });
    };
    // Get Student by Id
    StudentService.prototype.getStudentDetailsById = function (studentId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("studentId", studentId);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].studentsUrl.concat('getStudentDetailsById'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    StudentService.prototype.searchStudentByName = function (name) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("name", name);
        params.set("branch", localStorage.getItem('branch'));
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].studentsUrl.concat('searchStudentByName'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    // Search School section Students By Parameters
    StudentService.prototype.searchSchoolSectionStudents = function (category, stream, enrolledFor, course, classSession) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("branch", localStorage.getItem("branch"));
        params.set("category", category);
        params.set("stream", stream);
        params.set("enrolledFor", enrolledFor);
        params.set("course", course);
        params.set("classSession", classSession);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].studentsUrl.concat('searchSchoolSectionStudents'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    StudentService.prototype.searchCollegeSectionStudents = function (category, stream, enrolledFor, course, classSession, entrance) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["URLSearchParams"]();
        params.set("branch", localStorage.getItem("branch"));
        params.set("category", category);
        params.set("stream", stream);
        params.set("enrolledFor", enrolledFor);
        params.set("course", course);
        params.set("classSession", classSession);
        if (entrance)
            params.set("entrance", entrance);
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].studentsUrl.concat('searchCollegeSectionStudents'), { headers: this.setHeaders(), params: params })
            .map(function (res) { return res.json(); });
    };
    StudentService.prototype.setHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return headers;
    };
    return StudentService;
}());
StudentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], StudentService);

var _a;
//# sourceMappingURL=student.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    // Register 
    // Register new user
    UsersService.prototype.registerUser = function (user) {
        if (!user.isAdmin) {
            user.branch = localStorage.getItem('branch');
            console.log("current branch is for newly added student is " + user.branch);
        }
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].usersUrl.concat('registerUser'), user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    usersUrl: "/users/",
    feesDetailsUrl: "/feesdetails/",
    paymentsUrl: "/payments/",
    studentsUrl: "/students/",
    settingsUrl: "/settings/"
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map