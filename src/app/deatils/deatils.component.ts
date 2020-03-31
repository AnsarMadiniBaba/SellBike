import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { Page } from "tns-core-modules/ui/page";

interface DataItem {
    source: Source[];
    author: string;
    title: string;
    cost: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
}

interface Source {
    id: string;
    name: string;
}

 
@Component({
    selector: "Deatils",
    templateUrl: "./Deatils.component.html",
    styleUrls: ["./Deatils.component.scss"]
})
export class DeatilsComponent implements OnInit {
    searching = false;
    source: Source[];
    allNews : DataItem[];
    
   

    
 
    constructor(private page: Page,private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
       
        this.source = [{
            "id": null,
            "name": "~/images/bmw.jpg"
          },{
            "id": null,
            "name": "~/images/bmw.jpg"
          },{
            "id": null,
            "name": "~/images/bmw.jpg"
          }];
          this.allNews = [
            {
              "source": [{
                "id": null,
                "name": "~/images/bmw.jpg"
              },{
                "id": null,
                "name": "~/images/bmw.jpg"
              },{
                "id": null,
                "name": "~/images/bmw.jpg"
              }],
              "author": null,
              "title": "In Good Condition",
              "cost":"1400",
              "description": null,
              "url": "https://www.yahoo.com/news/latest-turkey-urges-sides-avoid-more-syria-turmoil-113652213.html",
              "urlToImage": null,
              "publishedAt": "2018-04-13T19:44:00Z"
            }]
    }
    listViewData = [
        { 
            deatils: "Brand",
            value: "Hyundai"
        },
        {
            deatils: "Model",
            value: "Elite i20"
        },
        {
            deatils: "Year",
            value: "2016"
        },
        {
            deatils: "Fuel",
            value: "Petrol"
        },
        {
            deatils: "KM Driven",
            value: "100,000km"
        } 
    ];
    otherSpecs = [
        { 
            deatils: "Color",
            value: "red"
        },
        {
            deatils: "Car Type",
            value: "Hatchback"
        },
        {
            deatils: "Registration Place",
            value: "AP"
        },
        {
            deatils: "Condtion",
            value: "Used"
        },
        {
            deatils: "Engine Capacity(Cc)",
            value: "1398.0"
        } 
    ]

    ngOnInit(): void {
        // Init your component properties here.
    }

     
    onNavBtnTap(){
        this.routerExtensions.back();
    }
}
