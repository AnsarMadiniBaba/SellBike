import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import {  screen } from "tns-core-modules/platform";
// import {  screXen } from "./../images/";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls:["./home.component.scss"],
})
export class HomeComponent implements OnInit {
 photoWidth: number = screen.mainScreen.widthDIPs * 0.25;
    photoHeight: number = this.photoWidth;
     
    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
    }


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
}
