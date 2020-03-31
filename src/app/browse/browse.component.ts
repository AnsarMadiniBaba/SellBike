import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { RouterExtensions } from "nativescript-angular/router";
import { SearchBar } from "tns-core-modules/ui/search-bar";


@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html",
    styleUrls:["./browse.component.scss"],
})
export class BrowseComponent implements OnInit {
    public items: any[];
    public selectedIndexes = [0,0];
    
    constructor(private routerExtensions: RouterExtensions) {
        // Use the component constructor to inject providers.
        
    }

    ngOnInit(): void {
        // Init your component properties here.
        this.items = [
            {
                title: 'Home Appliances',
                items: [
                {
                    text: 'Refrigerators'
                }, 
                {
                    text: 'Washing Machines'
                }, 
                {
                    text: 'Air Conditioners'
                }]
            },
            {
                title: 'Computer & Accessories',
                items: [
                {
                    text: 'Refrigerators'
                }, 
                {
                    text: 'Washing Machines'
                }, 
                {
                    text: 'Air Conditioners'
                }]
            },
            {
                title: 'Kitchen Aplliances',
                items: [
                {
                    text: 'Refrigerators'
                }, 
                {
                    text: 'Washing Machines'
                }, 
                {
                    text: 'Air Conditioners'
                }]
            },
            {
                title: 'Audio, Video & Gaming',
                items: [
                {
                    text: 'Refrigerators'
                }, 
                {
                    text: 'Washing Machines'
                }, 
                {
                    text: 'Air Conditioners'
                },
                {
                    text: 'Refrigerators'
                }, 
                {
                    text: 'Washing Machines'
                }, 
                {
                    text: 'Air Conditioners'
                }]
            }
        ];
    }


    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavBtnTap(){
        this.routerExtensions.back();
    }

    searchPhrase: string;

    onSubmit(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Searching for ${searchBar.text}`);
    }

    onTextChanged(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Input changed! New value: ${searchBar.text}`);
    }

    onClear(args) {
        const searchBar = args.object as SearchBar;
        console.log(`Clear event raised`);
    }
}
