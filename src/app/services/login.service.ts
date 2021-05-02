import { Injectable, OnInit } from "@angular/core";
import { HttpHeaders, HttpClient, HttpErrorResponse } from "@angular/common/http";
import { throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";

import { User } from "../models/user.model";
import { BackendService } from "./backend.service";
import { UserBasicDeatils, RegisterUser } from "../models/user";

import { Constant } from "../app.constants";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  register(user: RegisterUser) {
    return this.http.post(
      BackendService.baseUrl + Constant.Login,
      JSON.stringify({
        // username: user.email,
        phone: user.phone,
        password: user.password
      }),
      { headers: this.getCommonHeaders() }
    )
      .pipe(catchError(this.handleErrors));
  }

  login(user: RegisterUser) {
    return this.http.post(
      BackendService.baseUrl + Constant.Login,
      JSON.stringify({
        phone: user.phone,
        password: user.password
      }),
      { headers: this.getCommonHeaders() }
    )
      .pipe(
        tap((data: any) => {
          console.log(data);
          BackendService.token = data.Result;
          console.log(BackendService.token);
        }),
        catchError(this.handleErrors)
      );
  }

  CreateUserFromCallButton(user: UserBasicDeatils) {
    return this.http.post(
      BackendService.baseUrl + Constant.CreateUserFromCallButton,
      JSON.stringify({
        email: user.email,
        name: user.name,
        phone: user.phone
      }),
      { headers: this.getCommonHeaders() }
    )
      .pipe(
        tap((data: any) => {
          BackendService.token = data.Result;
          console.log(BackendService.token);
        }),
        catchError(this.handleErrors)
      );
  }

  RegisterUser(user: RegisterUser) {
    return this.http.post(
      BackendService.baseUrl + Constant.RegisterUser,
      JSON.stringify({
        password: user.password,
        phone: user.phone
      }),
      { headers: this.getCommonHeaders() }
    )
      .pipe(
        tap((data: any) => {
          if (data != null) {
            BackendService.token = data.Result;
            console.log(BackendService.token);
            return data;
          }
          else {
            return null;
          }
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
