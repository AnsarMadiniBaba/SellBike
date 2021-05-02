import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";  
import { RouterExtensions } from "nativescript-angular/router";
import * as geolocation from "nativescript-geolocation";
import * as camera from "nativescript-camera";
import { requestPermissions } from "nativescript-camera";
import { BikeDetails } from "../models/bikedetails.model";
import { HttpClient, HttpHeaders } from "@angular/common/http"; 
import { ListViewEventData, RadListView } from "nativescript-ui-listview"
import { NavigationExtras } from "@angular/router";
import { AppSettings, Constant } from "../app.constants";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
 

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit { 
    bikedetails: BikeDetails[];
    processing = false;
    constructor(private routerExtensions: RouterExtensions,private http: HttpClient) {
        this.processing = true;
        this.http.get<BikeDetails[]>(AppSettings.API_ENDPOINT + Constant.GetAllBikes).subscribe((result) => {
            this.processing = false;
            this.bikedetails = result; 
        }, (error) => {
            this.processing = false;
            console.log(error);
        });
        
    }

    public onItemSelected(args: ListViewEventData) {
        this.routerExtensions.navigate(["/deatils"]);
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<BikeDetails>;
        let routeExtras:NavigationExtras={
            queryParams:{"bike":JSON.stringify(selectedItems)}
        }
        this.routerExtensions.navigate(["/deatils"],routeExtras);  
    }

    ngOnInit(): void {
        // Init your component properties here.
    }


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
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
