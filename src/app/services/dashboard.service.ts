import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { User } from "../models/user.model";
import { BackendService } from "./backend.service";
import { UserBasicDeatils, RegisterUser } from "../models/user";

import { Constant } from "../app.constants";

@Injectable()
export class DashboardService {
  constructor(private http: HttpClient) { }
 
  getBikes(filteredBikes: any) {
    return this.http.post(BackendService.baseUrl + Constant.GetFilteredBikes,JSON.stringify(filteredBikes), {
      headers: this.getCommonHeaders()
    })
    .pipe(
      tap((data: any) => {
        console.log(data);
        return data;
      }),
      catchError(this.handleErrors)
    );
  }
  
  private getCommonHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json",
      // "Authorization": BackendService.appUserHeader,
    });
  }

  private handleErrors(error: HttpErrorResponse) {
    console.log(JSON.stringify(error));
    return throwError(error);
  }
}
