import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Page } from "tns-core-modules/ui/page";
import { ActivatedRoute } from "@angular/router";
import { BikeDetails } from "../models/bikedetails.model"; 

 
@Component({
    selector: "Deatils",
    templateUrl: "./deatils.component.html",
    styleUrls: ["./deatils.component.scss"]
})
export class DeatilsComponent implements OnInit {
    heart = false;
    bike:BikeDetails;
    images:any;
    listViewData:any;
    otherSpecs:any;

    getHeartStatus(){
    //pending to get the user faverate bikes sql lite
    }
    onHeartTap(){
        this.heart = !this.heart;
        //insert a record of user fav
    }
    constructor(private page: Page,private routerExtensions: RouterExtensions,private route:ActivatedRoute) {
        page.actionBarHidden = true;
        this.route.queryParams.subscribe(params=>{
            this.bike=JSON.parse(params["bike"])[0];
            console.log(this.bike);
        })
        this.getHeartStatus();
        this.images = this.bike.images; 
        this.listViewData = [
            { 
                deatils: "Brand",
                value: this.bike.brand
            },
            {
                deatils: "Model",
                value: this.bike.model
            },
            {
                deatils: "Year",
                value: this.bike.year
            },
            {
                deatils: "Fuel",
                value: "Petrol"
            },
            {
                deatils: "KM Driven",
                value: this.bike.kmdriven
            } 
        ];
        this.otherSpecs = [
            // { 
            //     deatils: "Color",
            //     value: "red"
            // },
            // {
            //     deatils: "Car Type",
            //     value: "Hatchback"
            // },
            // {
            //     deatils: "Registration Place",
            //     value: "AP"
            // },
            {
                deatils: "Owners",
                value: this.bike.owners
            },
            {
                deatils: "Engine Capacity(Cc)",
                value: this.bike.enginecap
            } 
        ]
    }
   

    ngOnInit(): void {
        // Init your component properties here.
    }

     
    onNavBtnTap(){
        this.routerExtensions.back();
    }

    callToAdvertiser(){
        //check if user loged in
        //if not logged popup to give deatils
        // else how the contact number
    }
}
