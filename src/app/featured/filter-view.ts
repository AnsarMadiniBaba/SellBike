
import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RangeSeekBarEventData } from "nativescript-range-seek-bar"; 
import { BikeFilter } from "../models/bikefilter.model";
import { TextField } from "tns-core-modules/ui/text-field"; 

@Component({
    moduleId: module.id,
    templateUrl: "./filter-view.html",
    styleUrls: ["./featured.component.scss"]
})
export class FilterViewComponent implements OnInit {
    processing = false;
    bikefilter: BikeFilter;
    public rangeSeekBarProp = { };
    public rangeSeekBarPropYear = { };
    public rangeSeekBarPropKmdriven = { }; 

     

    rangeSeekBarChanged(event: RangeSeekBarEventData) {
        // console.log("rangeSeekBarChanged: ", event.value);

    }

    rangeSeekBarFinalValue(event: RangeSeekBarEventData) {
        // console.log("rangeSeekBarFinalValue: ", event.value);
        this.bikefilter.MinPrice = event.value.minValue;
        this.bikefilter.MaxPrice = event.value.maxValue;
    }

    rangeSeekBarChangedYear(event: RangeSeekBarEventData) {
        // console.log("rangeSeekBarChanged: ", event.value);

    }

    rangeSeekBarFinalValueYear(event: RangeSeekBarEventData) {
        // console.log("rangeSeekBarFinalValue: ", event.value);
        this.bikefilter.MinYear = event.value.minValue;
        this.bikefilter.MaxYear = event.value.maxValue;
    }
    rangeSeekBarChangedKmDriven(event: RangeSeekBarEventData) {
        // console.log("rangeSeekBarChanged: ", event.value);

    }

    rangeSeekBarFinalValueKmDriven(event: RangeSeekBarEventData) {
        // console.log("rangeSeekBarFinalValue: ", event.value);
        this.bikefilter.MinKmdriven = event.value.minValue;
        this.bikefilter.MaxKmdriven = event.value.maxValue;
    }

    constructor(private params: ModalDialogParams) {
       
    //    console.log(params.context);
        if (params.context.length > 0) {
            let clientWithType = Object.assign(new BikeFilter(), params.context[0])
            this.bikefilter  = clientWithType ;
           
            this.setvalues();
        }
        else {
            this.defaultvalues();
        }
    }
    setvalues(){
        this.rangeSeekBarProp = {};
        this.rangeSeekBarProp = {
            minValue: 1000,
            maxValue: 200000,
            minStartValue: this.bikefilter.MinPrice,
            maxStartValue: this.bikefilter.MaxPrice,
            minRange: 1,
            step: 500
        };
        this.rangeSeekBarPropYear = {}
        this.rangeSeekBarPropYear = {
            minValue: 2000,
            maxValue: 2020,
            minStartValue: this.bikefilter.MinYear,
            maxStartValue: this.bikefilter.MaxYear,
            minRange: 2,
            step: 1
        };
        this.rangeSeekBarPropKmdriven = {}
        this.rangeSeekBarPropKmdriven = {
            minValue: 0,
            maxValue: 200000,
            minStartValue: this.bikefilter.MinKmdriven,
            maxStartValue: this.bikefilter.MaxKmdriven,
            minRange: 2,
            step: 1000
        }; 
    }
    onclearAllTap(){
        this.defaultvalues();
    }

    defaultvalues(){
        this.bikefilter = new BikeFilter();
            this.bikefilter.MinPrice = 1000;
            this.bikefilter.MaxPrice = 200000;
            this.bikefilter.MinYear = 2000;
            this.bikefilter.MaxYear = 2020;
            this.bikefilter.MinKmdriven = 0;
            this.bikefilter.MaxKmdriven = 200000;

            this.rangeSeekBarProp = {
                minValue: 1000,
                maxValue: 200000,
                minStartValue: 1000,
                maxStartValue: 200000,
                minRange: 1,
                step: 500
            };

            this.rangeSeekBarPropYear = {
                minValue: 2000,
                maxValue: 2020,
                minStartValue: 2000,
                maxStartValue: 2020,
                minRange: 2,
                step: 1
            };
            this.rangeSeekBarPropKmdriven = {
                minValue: 0,
                maxValue: 200000,
                minStartValue: 0,
                maxStartValue: 200000,
                minRange: 2,
                step: 1000
            }; 
    }

    onReturnPress(args) {
        let textField = <TextField>args.object;

        // Gets or sets the placeholder text.
        console.log(textField.hint);
        // Gets or sets the input text.
        console.log(textField.text);
    }
   
    ngOnInit() {
        
    } 

    onCloseTap(){
    this.params.closeCallback();
    }
    applyFilterTap(){
        this.params.closeCallback(this.bikefilter);
    }
}
