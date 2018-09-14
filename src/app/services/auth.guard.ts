import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService) {}
  canActivate() {
    if (this.auth.isAuthenticated()) {
      return true;
    } else {
      this.auth.login();
    }
  }
}
