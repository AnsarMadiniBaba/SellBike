import { Component, OnInit, ElementRef, ViewChild  } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";

import { RangeSeekBarEventData } from "nativescript-range-seek-bar";
import { Page } from "tns-core-modules/ui/page";
import { BikeFilter } from "../models/bikefilter.model";
import { TextField } from "tns-core-modules/ui/text-field"; 


@Component({
    selector: "Filter",
    templateUrl: "./filter.component.html",
    styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  
    @ViewChild("password", {static: false}) password: ElementRef;
    bikefilter: BikeFilter;
    public rangeSeekBarProp = {
        minValue: 0,
        maxValue: 200000,
        minStartValue: 0,
        maxStartValue: 200000,
        minRange: 1000,
        step: 1
    };
    public rangeSeekBarPropYear = {
        minValue: 2000,
        maxValue: 2020,
        minStartValue: 2000,
        maxStartValue: 2020,
        minRange: 0,
        step: 1
    };
    public rangeSeekBarPropKmdriven = {
        minValue: 0,
        maxValue: 200000,
        minStartValue: 0,
        maxStartValue: 200000,
        minRange: 1000,
        step: 1
    };
    // setvalues();

    // setvalues() {
      
    // }
    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }

     

    rangeSeekBarChanged(event: RangeSeekBarEventData) {
        console.log("rangeSeekBarChanged: ", event.value);

    }

    rangeSeekBarFinalValue(event: RangeSeekBarEventData) {
        console.log("rangeSeekBarFinalValue: ", event.value);
        this.bikefilter.MinPrice = event.value.minValue;
        this.bikefilter.MaxPrice = event.value.maxValue;
    }

    rangeSeekBarChangedYear(event: RangeSeekBarEventData) {
        console.log("rangeSeekBarChanged: ", event.value);

    }

    rangeSeekBarFinalValueYear(event: RangeSeekBarEventData) {
        console.log("rangeSeekBarFinalValue: ", event.value);
        this.bikefilter.MinYear = event.value.minValue;
        this.bikefilter.MaxYear = event.value.maxValue;
    }
    rangeSeekBarChangedKmDriven(event: RangeSeekBarEventData) {
        console.log("rangeSeekBarChanged: ", event.value);

    }

    rangeSeekBarFinalValueKmDriven(event: RangeSeekBarEventData) {
        console.log("rangeSeekBarFinalValue: ", event.value);
        this.bikefilter.MinKmdriven = event.value.minValue;
        this.bikefilter.MaxKmdriven = event.value.maxValue;
    }

    constructor(private page: Page, private routerExtensions: RouterExtensions) {
        page.actionBarHidden = true;
        this.bikefilter = new BikeFilter();
        this.bikefilter.MinPrice = 0;
        this.bikefilter.MaxPrice = 200000;
        this.bikefilter.MinYear = 2000;
        this.bikefilter.MaxYear = 2020;
        this.bikefilter.MinKmdriven = 0;
        this.bikefilter.MaxKmdriven = 200000;

    }
    onReturnPress(args) {
        let textField = <TextField>args.object;

        // Gets or sets the placeholder text.
        console.log(textField.hint);
        // Gets or sets the input text.
        console.log(textField.text);
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onNavBtnTap() {
        this.routerExtensions.back();
    }
}
