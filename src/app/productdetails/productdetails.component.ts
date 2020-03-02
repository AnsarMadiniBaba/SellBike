
import * as app from "tns-core-modules/application";
import { Component, ElementRef, ViewChild , OnInit } from "@angular/core";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";


// import { ItemEventData } from "ui/list-view"
// import { SearchBar } from "ui/search-bar";
// var frame = require("tns-core-modules/ui/frame");
// var platform = require("tns-core-modules/platform");

@Component({
    selector: "Productdetails",
    templateUrl: "./productdetails.component.html",
    styleUrls:["./productdetails.component.scss"],
})
export class ProductdetailsComponent {
    // onItemTap(args: ItemEventData): void {
    //     console.log('Item with index: ' + args.index + ' tapped');
    // }
    textFieldValue: string = "";
    isIOS: boolean;

    listViewData = [
        {
            title: "Jack man",
            artist: "(555) 555-1234",
            year: "P.O. Box 887 2508 Dolor",
            imageUrl: "~/images/avatar.jpg",
            restaurant: "Mama's Fish House",
            date: "12:48 am , 2 March 2020"
        },
        {
            title: "Johnny Depp",
            artist: "(555) 555-1234",
            year: "P.O. Box 887 2508 Dolor",
            imageUrl: "~/images/avatar.jpg",
            restaurant: "Katz's Deli, Manhattan",
            date: "12:48 am , 2 March 2020"
        },
        {
            title: "Al Pacino",
            artist: "(555) 555-1234",
            year: "P.O. Box 887 2508 Dolor",
            imageUrl: "~/images/avatar.jpg",
            restaurant: "Polo Lounge",
            date: "12:48 am , 2 March 2020"
        },
        {
            title: "Robert De Niro",
            artist: "(555) 555-1234",
            year: "P.O. Box 887 2508 Dolor",
            imageUrl: "~/images/avatar.jpg",
            restaurant: "Prince Street Pizza",
            date: "12:48 am , 2 March 2020"
        },
        {
            title: "Kevin Spacey",
            artist: "(555) 555-1234",
            year: "P.O. Box 887 2508 Dolor",
            imageUrl: "~/images/avatar.jpg",
            restaurant: "Arnaud's",
            date: "12:48 am , 2 March 2020"
        },
        {
            title: "Denzel Washington",
            artist: "(555) 555-1234",
            year: "P.O. Box 887 2508 Dolor",
            imageUrl: "~/images/avatar.jpg",
            restaurant: "Polo Lounge",
            date: "12:48 am , 2 March 2020"
        },
    ]

    onButtonTap(): void {
        console.log("Button was pressed");
    }

    searchPhrase: string;
    // onSearchSubmit(args): void {
    //     let searchBar = <SearchBar>args.object;
    //     console.log("You are searching for " + searchBar.text);
    // }


    constructor(private page: Page, private routerExtensions: RouterExtensions) {
        

        // if (platform.isIOS) {
        //     this.isIOS = true;
        //     page.statusBarStyle = "light";
        // }
        // else {
        //     page.backgroundSpanUnderStatusBar = true;
        //     this.isIOS = false;
        // }
    }

    ngOnInit(): void {
    }

    goBack() {
        this.routerExtensions.back();
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

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
   
}
