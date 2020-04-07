import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { AdvancedUser } from "../models/user";


 
@Component({
    moduleId: module.id,
    selector: "Postad",
    templateUrl: "./postad.component.html",
    styleUrls: ["./postad.component.scss"]
})
export class PostadComponent implements OnInit {
    private _user: AdvancedUser;

    constructor(private routerExtensions: RouterExtensions) {
       
    }

    ngOnInit() {
        this._user = new AdvancedUser();
    }

    @ViewChild("myDataForm", { static: false }) dataFormComp: RadDataFormComponent;
    @ViewChild("resultLabel", { static: false }) resultLabel: ElementRef;

    get user(): AdvancedUser {
        return this._user;
    }
 
    public checkErrors() {
        const hasErrors = this.dataFormComp.dataForm.hasValidationErrors();
        this.resultLabel.nativeElement.text = hasErrors;
        console.log("clicked");
        console.log(this._user);
    }
        
    onNavBtnTap(){
        this.routerExtensions.back();
    }

    onItemTap(): void {
        this.routerExtensions.navigate(["/deatils"]);
    }
}
