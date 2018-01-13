import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from "@angular/http";
import 'rxjs/add/operator/map';

import { environment } from "../../environments/environment";

@Injectable()
export class SettingsService {

  authToken: any;

  constructor(
    private http: Http
  ) { }

  setCurrentYear(yearToUpdate) {
    return this.http.post(environment.settingsUrl.concat('setCurrentYear'), yearToUpdate, { headers: this.setHeaders() })
      .map(res => res.json());
  }

  getCurrentYear() {
    return this.http.get(environment.settingsUrl.concat('getCurrentYear'), { headers: this.setHeaders() })
      .map(res => res.json());
  }

  addBatch(batch) {
    batch.branch = localStorage.getItem('branch');
    console.log(batch);

    return this.http.post(environment.settingsUrl.concat('addBatch'), batch, { headers: this.setHeaders() })
      .map(res => res.json());
  }

  addAcademicYear(academicYear) {
    return this.http.post(environment.settingsUrl.concat('addAcademicYear'), academicYear, { headers: this.setHeaders() })
      .map(res => res.json());
  }

  listBatches(year?) {
    let params: URLSearchParams = new URLSearchParams();

    if (year)
      params.set("year", year);
    else
      params.set("year", localStorage.getItem('currentYear'));

    params.set("branch", localStorage.getItem('branch'));


    return this.http.get(environment.settingsUrl.concat('listBatches'), { headers: this.setHeaders(), params: params })
      .map(res => res.json());
  }

  listAcademicYears() {
    return this.http.get(environment.settingsUrl.concat('listAcademicYears'), { headers: this.setHeaders() })
      .map(res => res.json());
  }

  setHeaders() {
    let headers = new Headers();
    headers.append('Authorization', this.authToken);
    headers.append('Content-Type', 'application/json');

    return headers;
  }
}


