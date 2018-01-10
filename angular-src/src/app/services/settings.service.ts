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

  addBatch(batch){
    batch.branch = localStorage.getItem('branch');

    return this.http.post(environment.settingsUrl.concat('addBatch'), batch, { headers: this.setHeaders() })
      .map(res => res.json());
  }

  addAcademicYear(academicYear){
    return this.http.post(environment.settingsUrl.concat('addAcademicYear'), academicYear, { headers: this.setHeaders() })
      .map(res => res.json());
  }

  listBatches(){
    let params: URLSearchParams = new URLSearchParams();
    params.set("branch", localStorage.getItem('branch'));

    return this.http.get(environment.settingsUrl.concat('listBatches'), { headers: this.setHeaders(), params : params })
      .map(res => res.json());
  }

  listAcademicYears(){
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


