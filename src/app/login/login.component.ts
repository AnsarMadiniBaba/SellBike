
import { Component, ElementRef, ViewChild, ViewContainerRef, OnInit } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { User } from "../models/user.model";
import { LoginService } from "../services/login.service";

import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { BackendService } from "../services/backend.service";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalViewComponent } from "./modal-view";

import { RegisterUser } from "../models/user";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
// import { Telephony } from 'nativescript-telephony';

@Component({
    selector: "Login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    isLoggingIn = true;
    // user: User;
    private _user: RegisterUser;
    processing = false;
    @ViewChild("myDataForm", { static: false }) dataFormComp: RadDataFormComponent;

    constructor(private page: Page, private routerExtensions: RouterExtensions, private loginService: LoginService
        , private modalService: ModalDialogService, private vcRef: ViewContainerRef) {
        this.page.actionBarHidden = true;
        // this.user = new User();
        // this.user.email="ansar@gmail.com";
        // this.user.password="ansar123";
    }

    ngOnInit() {
        this._user = new RegisterUser();
        this._user.password = "ansarbaba";
        this._user.phone = "9030867991";
        console.log("hi");
        // permissions
        // .requestPermission(
        //   android.Manifest.permission.READ_PHONE_STATE,
        //   "I need these permissions because I'm cool"
        // )
        // .then(() => {
        // Telephony().then(function (resolved) {
        //     console.log('resolved >', resolved)
        //     console.dir(resolved);
        // }).catch(function (error) {
        //     console.error('error >', error)
        //     console.dir(error);
        // })});
    }

    get user(): RegisterUser {
        return this._user;
    }

    toggleForm() {
        this.isLoggingIn = !this.isLoggingIn;
    }

    // submit() {
    //     if (!this.user.email || !this.user.password) {
    //         this.alert(this.user.email + ' ' + this.user.password);
    //         return;
    //     }

    //     this.processing = true;
    //     if (this.isLoggingIn) {
    //         this.login();
    //     } else {
    //         this.register();
    //     }
    // }

    // login() {
    //     console.log(this.user);
    //     this.loginService.login(this.user)
    //         .subscribe(
    //             (rs) => {
    //             this.processing = false;
    //                 this.routerExtensions.navigate(["/home"], { clearHistory: true });
    //             },
    //             (error) => {
    //                 alert("Unfortunately we could not find your account.");
    //                 this.processing = false;
    //             }
    //         );
    // }

    public checkErrors() {
        const hasErrors = this.dataFormComp.dataForm.hasValidationErrors();
        console.log("hasErrors");
        if (hasErrors === false) {
            this.processing = true;
            this.loginService.login(this._user)
                .subscribe(
                    (rs) => {
                        this.processing = false;
                        this.routerExtensions.navigate(["/home"], { clearHistory: true });
                    },
                    (error) => {
                        alert("Unfortunately we were unable to create your account. Please try again later.");
                        this.processing = false;
                    }
                );
        }
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

    // focusPassword() {
    //     this.password.nativeElement.focus();
    // }
    alert(message: string) {
        return alert({
            title: "APP NAME",
            okButtonText: "OK",
            message: message
        });
    }

    onRegisterTap() {
        this.isLoggingIn = !this.isLoggingIn;
        this.createModelView().then(result => {
            this.routerExtensions.navigate(["/home"], { clearHistory: true });
        }).catch(error => this.handleError(error));
    }
    // private modalDeatils: any = {"header":"Register","registerform":true}
    private createModelView(): Promise<any> {
        // const today = new Date();
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            // context: this.modalDeatils,
            fullscreen: false
        };

        // showModal returns a promise with the received parameters from the modal page
        return this.modalService.showModal(ModalViewComponent, options);
    }

    private handleError(error: any) {
        alert("Please try again!");
        console.dir(error);
    }
}
