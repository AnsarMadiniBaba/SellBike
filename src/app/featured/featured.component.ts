import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { ObservableArray } from "tns-core-modules/data/observable-array";
import { RouterExtensions } from "nativescript-angular/router";
import { BikeDetails } from "../models/bikedetails.model";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AppSettings, Constant } from "../app.constants";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { ListViewEventData, RadListView } from "nativescript-ui-listview"
import { NavigationExtras } from "@angular/router";
import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalViewComponent } from "./modal-view";
import { FilterViewComponent } from "./filter-view";
import { DashboardService } from "../services/dashboard.service";

@Component({
  selector: "Featured",
  templateUrl: "./featured.component.html",
  styleUrls: ["./featured.component.scss"],
})
export class FeaturedComponent implements OnInit {

  bikedetails: BikeDetails[];
  processing = false;
  sortselected = false;
  sortselecteddata: any = [];
  filterselected = false;
  filterselecteddata: any = [];
  countOfRecords:number;

  constructor(private routerExtensions: RouterExtensions, private http: HttpClient,
    private modalService: ModalDialogService, private vcRef: ViewContainerRef, private dashboardService: DashboardService) {

    this.processing = true;

  }

  onNavBtnTap() {
    this.routerExtensions.back();
  }
  ngOnInit() {
    this.http.get<BikeDetails[]>(AppSettings.API_ENDPOINT + Constant.GetAllBikes).subscribe((result) => {
      this.processing = false;
      this.bikedetails = result;
      this.countOfRecords = result.length;
    }, (error) => {
      this.processing = false;
      console.log(error);
    });
  }

  onNavItemTap(navItemRoute: string): void {
    this.routerExtensions.navigate([navItemRoute], {
      transition: {
        name: "fade"
      }
    });
  }

  public onItemSelected(args: ListViewEventData) {
    const listview = args.object as RadListView;
    const selectedItems = listview.getSelectedItems() as Array<BikeDetails>;
    let routeExtras: NavigationExtras = {
      queryParams: { "bike": JSON.stringify(selectedItems) }
    }
    this.routerExtensions.navigate(["/deatils"], routeExtras);
  }

  onShortTap() {
    this.createModelView().then(result => {
      if (this.validate(result)) {
        this.sortselected = true;
        this.sortselecteddata[0] = result;
        // console.log(this.sortselecteddata[0]);
        this.getFilteredBikes();
      }
    }).catch(error => this.handleError(error));

  }

  onFilterTap() {
    this.createModelView2().then(result => {
      if (this.validate(result)) {
        this.filterselected = true;
        this.filterselecteddata[0] = result;
        console.log(result);
        this.getFilteredBikes();
      }
    }).catch(error => this.handleError(error));

  }
  // sortobject :DataItem;
  // filterobject :BikeFilter;
  // finalfilterandsort:Final;

  getFilteredBikes() { 
    if (this.sortselecteddata.length > 0 && this.filterselecteddata.length == 0) {
      console.log(this.sortselecteddata[0]);
      const sortobject = this.sortselecteddata[0];
      console.log(sortobject);
      this.getfiltrederbikes(sortobject);
    }
    if (this.sortselecteddata.length == 0 && this.filterselecteddata.length > 0) {
      console.log(this.filterselecteddata[0]);
      const filterobject = this.filterselecteddata[0];
      console.log(filterobject);
      this.getfiltrederbikes(filterobject);
    }

    if (this.sortselecteddata.length > 0 && this.filterselecteddata.length > 0) {
      console.log(this.sortselecteddata[0]);
      console.log(this.filterselecteddata[0]);
      const filterobject = this.filterselecteddata[0];
      const sortobject = this.sortselecteddata[0];
      const finalfilterandsort = Object.assign(filterobject, sortobject)
      console.log(finalfilterandsort);
      this.getfiltrederbikes(finalfilterandsort);
    } 
  }

  private getfiltrederbikes(finalfilterandsort: any) {
    this.dashboardService.getBikes(finalfilterandsort)
      .subscribe(
        (result) => {
          this.processing = false;
          this.bikedetails = result;
          this.countOfRecords = result.length;
        },
        (error) => {
          alert("Somthing went wrong. Please try Changing the filters");
          this.processing = false;
        }
      );
  }

  private validate(result: any) {
    return !!result;
  }


  private handleError(error: any) {
    alert("Please try again!");
    console.dir(error);
  }

  private createModelView(): Promise<any> {
    // const today = new Date();
    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: this.sortselecteddata,
      fullscreen: false
    };

    // showModal returns a promise with the received parameters from the modal page
    return this.modalService.showModal(ModalViewComponent, options);
  }

  private createModelView2(): Promise<any> {
    // const today = new Date();
    const options: ModalDialogOptions = {
      viewContainerRef: this.vcRef,
      context: this.filterselecteddata,
      fullscreen: true
    };

    // showModal returns a promise with the received parameters from the modal page
    return this.modalService.showModal(FilterViewComponent, options);
  }
}