
import { Component, ElementRef, ViewChild } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "../models/user.model";
import { LoginService } from "../services/login.service";

import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { BackendService } from "../services/backend.service";

@Component({
    selector: "Login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password", {static: false}) password: ElementRef;

    constructor(private page: Page, private routerExtensions: RouterExtensions, private loginService: LoginService) {
        this.page.actionBarHidden = true;
        this.user = new User();
        this.user.email="ansar@gmail.com";
        this.user.password="ansar123";
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert(this.user.email + ' ' + this.user.password);
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.register();
        }
    }

    login() {
        console.log(this.user);
        this.loginService.login(this.user)
            .subscribe(
                (rs) => {
                this.processing = false;
                    this.routerExtensions.navigate(["/home"], { clearHistory: true });
                },
                (error) => {
                    alert("Unfortunately we could not find your account.");
                    this.processing = false;
                }
            );
    }

    onSkipTap() {
        BackendService.token = "token";
        this.routerExtensions.navigate(["/home"], { clearHistory: true });
    }

    register() {
        // this.userService.register(this.user)
        //     .then(() => {
        //         this.processing = false;
        //         this.alert("Your account was successfully created.");
        //         this.isLoggingIn = true;
        //     })
        //     .catch(() => {
        //         this.processing = false;
        //         this.alert("Unfortunately we were unable to create your account.");
        //     });
    }

    // forgotPassword() {
    //     prompt({
    //         title: "Forgot Password",
    //         message: "Enter the email address you used to register for APP NAME to reset your password.",
    //         inputType: "email",
    //         defaultText: "",
    //         okButtonText: "Ok",
    //         cancelButtonText: "Cancel"
    //     }).then((data) => {
    //         if (data.result) {
    //             this.userService.resetPassword(data.text.trim())
    //                 .then(() => {
    //                     this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
    //                 }).catch(() => {
    //                     this.alert("Unfortunately, an error occurred resetting your password.");
    //                 });
    //         }
    //     });
    // }

    focusPassword() {
        this.password.nativeElement.focus();
    }
    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }
}
