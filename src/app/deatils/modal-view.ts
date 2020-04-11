// >> passing-parameters
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { UserBasicDeatils } from "../models/user";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";

@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.html",
})
export class ModalViewComponent implements OnInit {
    public currentdate: Date;
    private _user: UserBasicDeatils;
    @ViewChild("datepicker", { read: ElementRef, static: true }) datePickerElement: ElementRef;
    @ViewChild("myDataForm", { static: false }) dataFormComp: RadDataFormComponent;
    @ViewChild("resultLabel", { static: false }) resultLabel: ElementRef;
    constructor(private params: ModalDialogParams) {
        this.currentdate = new Date(params.context);
    }

    ngOnInit() {
        this._user = new UserBasicDeatils();
        let datePicker: DatePicker = <DatePicker>this.datePickerElement.nativeElement;
        datePicker.year = this.currentdate.getFullYear();
        datePicker.month = this.currentdate.getMonth() + 1;
        datePicker.day = this.currentdate.getDate();
        datePicker.minDate = new Date(1975, 0, 29);
        datePicker.maxDate = new Date(2045, 4, 12);
    }
    get user(): UserBasicDeatils {
        return this._user;
    }
    public checkErrors() {
        const hasErrors = this.dataFormComp.dataForm.hasValidationErrors();
        this.resultLabel.nativeElement.text = hasErrors;
        console.log("clicked");
        console.log(this._user);
    }

    public submit() {
        let datePicker: DatePicker = <DatePicker>this.datePickerElement.nativeElement;
        console.log("date result");
        console.log(datePicker.date);
        this.params.closeCallback(datePicker.date);
    }
}
// << passing-parameters
