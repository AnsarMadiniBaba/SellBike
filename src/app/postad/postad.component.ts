import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { AdvancedUser, PostAd } from "../models/user";
import { ActivatedRoute } from "@angular/router";
import { PostAddService } from "../services";



@Component({
    moduleId: module.id,
    selector: "Postad",
    templateUrl: "./postad.component.html",
    styleUrls: ["./postad.component.scss"]
})
export class PostadComponent implements OnInit {
    private _postAd: PostAd;
    private selectedcat: any;

    constructor(private routerExtensions: RouterExtensions, private route: ActivatedRoute, private postAddService: PostAddService) {
        this.route.queryParams.subscribe(params => {
            this.selectedcat = params["BrandAndModel"];
            console.log(this.selectedcat);
        })
    }

    ngOnInit() {
        this._postAd = new PostAd();
    }

    @ViewChild("myDataForm", { static: false }) dataFormComp: RadDataFormComponent;

    get user(): PostAd {
        return this._postAd;
    }

    public checkErrors() {
        const hasErrors = this.dataFormComp.dataForm.hasValidationErrors();
        console.log("clicked");
        console.log(this._postAd);
        this.saveAdd();
    }

    saveAdd() {
        this.postAddService.postBikeAdd(this._postAd)
            .subscribe(
                (result) => {
                    console.log(result);
                    // this.processing = false;
                    // this.bikedetails = result;
                    // this.countOfRecords = result.length;
                },
                (error) => {
                    alert("Somthing went wrong. Please try Changing the filters");
                    // this.processing = false;
                }
            );
    }
    onNavBtnTap() {
        this.routerExtensions.back();
    }

    onItemTap(): void {
        this.routerExtensions.navigate(["/deatils"]);
    }
}
