import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

import { BackendService } from "./services/backend.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate() {
    if (BackendService.isLoggedIn()) {
      console.log("logedin " + BackendService.isLoggedIn());
      return true;
    }
    else {
      console.log("auth in else");
      this.router.navigate(["/login"]);
      return false;
    }
  }
}

