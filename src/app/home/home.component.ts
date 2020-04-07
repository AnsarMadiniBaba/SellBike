import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { screen } from "tns-core-modules/platform";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
// import {  screXen } from "./../images/";
import * as geolocation from "nativescript-geolocation";
// import { Accuracy } from "ui/enums";
import * as camera from "nativescript-camera";
import { requestPermissions } from "nativescript-camera";
import { Image } from "tns-core-modules/ui/image";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
    photoWidth: number = screen.mainScreen.widthDIPs * 0.25;
    photoHeight: number = this.photoWidth;
    lat = 0;
    lon = 0;
    speed = 0;
    addr = "";
    constructor(private page: Page, private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
        
    }

    ngOnInit(): void {
        // Init your component properties here.
    }


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }
    redirecttocatpage() {
        this.routerExtensions.navigate(["/browse"]);
    }
    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }

    getLocation(args): void {
        // geolocation.getCurrentLocation({ maximumAge: 5000, timeout: 20000 })
        //     .then(res => {
        //         this.lat = res.latitude;
        //         this.lon = res.longitude;
        //         this.speed = res.speed;
        //         // get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
        //         fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=AIzaSyAOBjPO3EfGjEFThl49eAUtmLS8OGqoKLQ")
        //             .then((response) => response.json()).then((r) => {
        //                 console.log(r);
        //                 if (r.results[0]) {
        //                     this.addr = r.results[0].formatted_address;
        //                 }
        //             });
        //     });

        
        // requestPermissions();
        // camera.takePicture()
        //     .then((imageAsset) => {
        //         console.log("Result is an image asset instance");
        //         var image = new Image();
        //         image.src = imageAsset;
        //     }).catch((err) => {
        //         console.log("Error -> " + err.message);
        //     });
    }
}
