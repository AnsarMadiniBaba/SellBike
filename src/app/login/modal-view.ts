
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RegisterUser } from "../models/user";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { User } from "../models/user.model";
import { LoginService } from "../services/login.service";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.html",
    styleUrls: ["./login.component.scss"]
})
export class ModalViewComponent implements OnInit {
    private phone: string;
    private _user: RegisterUser;
    processing = false;
    @ViewChild("myDataForm", { static: false }) dataFormComp: RadDataFormComponent;
    constructor(private params: ModalDialogParams, private loginService: LoginService, private routerExtensions: RouterExtensions) {
        // this.currentdate = new Date(params.context);
    }

    ngOnInit() {
        this._user = new RegisterUser();
    }
    get user(): RegisterUser {
        return this._user;
    }
    public checkErrors() {
        const hasErrors = this.dataFormComp.dataForm.hasValidationErrors();
        if (hasErrors === false) {
            this.processing = true;
            this.loginService.RegisterUser(this._user)
                .subscribe(
                    (result) => {
                        if (result != null) {
                            console.log(result)
                            this.processing = false;
                            // let redirect = {"redirect": true}
                            // this.params.closeCallback(redirect);
                        }
                        else {
                            this.processing = false;
                            // let redirect = {"redirect": false}
                            // this.params.closeCallback(redirect);
                            alert("Account already exists. Please login");
                        }
                    },
                    (error) => {
                        alert("Unfortunately we could not create your account. Please try again later.");
                        this.processing = false;
                    }
                );
        }
    }
}
