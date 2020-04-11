import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { User } from "../models/user.model";
import { BackendService } from "./backend.service";

import { Constant } from "../app.constants";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  register(user: User) {
    return this.http.post(
      BackendService.baseUrl + Constant.Login ,
      JSON.stringify({
        username: user.email,
        email: user.email,
        password: user.password
      }),
      { headers: this.getCommonHeaders() }
    )
    .pipe(catchError(this.handleErrors));
  }

  login(user: User) {
    return this.http.post(
      BackendService.baseUrl + Constant.Login,
      JSON.stringify({
        email: user.email,
        password: user.password
      }),
      { headers: this.getCommonHeaders() }
    )
    .pipe(
      tap((data: any) => {
        BackendService.token = data.Id;
        console.log(BackendService.token);
      }),
      catchError(this.handleErrors)
    );
  }

  logoff() {
    BackendService.token = "";
  }

  // resetPassword(email) {
  //   return this.http.post(
  //     BackendService.baseUrl + "rpc/" + BackendService.appKey + "/" + email + "/user-password-reset-initiate",
  //     {},
  //     { headers: this.getCommonHeaders() }
  //   ).pipe(catchError(this.handleErrors));
  // }

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
