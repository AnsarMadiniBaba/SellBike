import { Component, OnInit, ViewContainerRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ListViewEventData, RadListView } from "nativescript-ui-listview"
import { Observable } from "rxjs";  
import { Categories } from "../models/categories.model";  
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { NavigationExtras } from "@angular/router";

import { ModalDialogService, ModalDialogOptions } from "nativescript-angular/modal-dialog";
import { ModalViewComponent } from "./modal-view";
import { BrandViewComponent } from "./brand-view";
import { DashboardService } from "../services/dashboard.service";  
interface DataItem {
    id: number;
    deatils: string;
    value: string;
    cattype: number;
}





@Component({
    selector: "Categories",
    templateUrl: "./categories.component.html",
    styleUrls: ["./categories.component.scss"]
})
export class CategoriesComponent implements OnInit {
    hidesubcat = false;
    private _dataItems: ObservableArray<DataItem>;
    private brandmodal: string = "Select Brand / Model";
    private _selectedItems: string;
    listViewData=[
        {
            id: 1,
            deatils: "Properties",
            value: "&#xf013;",
            cattype: 1
        },
        {
            id: 2,
            deatils: "Cars",
            value: "&#xf013;",
            cattype: 1
        },
        {
            id: 3,
            deatils: "Bikes",
            value: "&#xf013;",
            cattype: 1
        },
        {
            id: 4,
            deatils: "Electronics",
            value: "&#xf013;",
            cattype: 1
        },
        {
            id: 5,
            deatils: "PG/Flatmates",
            value: "&#xf013;",
            cattype: 1
        },
        {
            id: 6,
            deatils: "Jobs",
            value: "&#xf013;",
            cattype: 1
        },
        {
            id: 7,
            deatils: "Services",
            value: "&#xf013;",
            cattype: 1
        }
    ];
    subPropertiescat = [
        {
            id: 1,
            deatils: "Houses - Apartments for Rent",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 2,
            deatils: "Houses - Apartments for sale",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 3,
            deatils: "Land - Plot for sale",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 4,
            deatils: "Flatmates",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 5,
            deatils: "Paying Guest - Hostel",
            value: "&#xf013;",
            cattype: 2
        }
    ];
    subCarcat = [
        {
            id: 1,
            deatils: "Cars",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 2,
            deatils: "Commercial Vehicles",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 3,
            deatils: "Spare Parts/Accessories",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 4,
            deatils: "Other Vehicles",
            value: "&#xf013;",
            cattype: 2
        }
    ];
    subBikecat = [
        {
            id: 1,
            deatils: "Bike",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 2,
            deatils: "Scooter",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 3,
            deatils: "cycle",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 4,
            deatils: "Bike/Scooter for rent",
            value: "&#xf013;",
            cattype: 2
        }
    ];

    subMobilescat = [
        {
            id: 1,
            deatils: "Mobile Phones",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 2,
            deatils: "Tablets",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 3,
            deatils: "Accessories",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 4,
            deatils: "Wearables",
            value: "&#xf013;",
            cattype: 2
        }
    ];  

    subElectronicscat = [
        {
            id: 1,
            deatils: "Washing Machines",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 2,
            deatils: "Refrigerators",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 3,
            deatils: "Laptops/Computers",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 4,
            deatils: "Kitchen Appliances",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 5,
            deatils: "TV - DVD - Multimedia",
            value: "&#xf013;",
            cattype: 2
        },
        {
            id: 6,
            deatils: "Everthing else",
            value: "&#xf013;",
            cattype: 2
        }
    ]; 

    brandList=[
        {
            id:1,
            brand:"Hero"
        },
        {
            id:2,
            brand:"Honda"
        },
        
        {
            id:3,
            brand:"KTM"
        },
        {
            id:4,
            brand:"Bajaj"
        },
        {
            id:5,
            brand:"Royal Enfield"
        },
        {
            id:6,
            brand:"Yamaha"
        },
        {
            id:7,
            brand:"TVS"
        }
        ,
        {
            id:8,
            brand:"Suzuki"
        } ,
        {
            id:9,
            brand:"Other Brand"
        }
    ]
    
  
    

    private categories;  
    constructor(private routerExtensions: RouterExtensions,private dashboardService:DashboardService,private http: HttpClient,
        private modalService: ModalDialogService, private vcRef: ViewContainerRef) {
        
        // this.categories = this.dashboardService.GetAllCategories();  
        // console.log(this.categories);

        // this.http.get<Categories[]>("http://192.168.0.4/APIBechoBaba/Api/Dashboard/GetAllCategories").subscribe((result) => {
        //     console.log("yyyy");
        //     this.categories = result;
        //     console.log(result);
        // }, (error) => {
        //     console.log(error);
        // });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    onNavBtnTap() {
        this.routerExtensions.back();
    }
    listViewData2 = [
        {
            deatils: "Motorcycles"
        },
        {
            deatils: "Scooters"
        }
    ];
    
    public onItemSelected2(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedcat;
        selectedcat = selectedItems[0] ? selectedItems[0].deatils : "";
        let routeExtras:NavigationExtras={
            queryParams:{"selectedcat":selectedcat}
        }
        this.routerExtensions.navigate(["/postad"],routeExtras);
    }

    // public onItemSelected(args: ListViewEventData) {
    //     const listview = args.object as RadListView;
    //     const selectedItems = listview.getSelectedItems() as Array<DataItem>;
    //     let selectedTitles;
    //     let selectedType;
    //     for (let i = 0; i < selectedItems.length; i++) {
    //         selectedTitles = selectedItems[i] ? selectedItems[i].deatils : "";
    //         selectedType = selectedItems[i] ? selectedItems[i].cattype : "";
    //         if (i < selectedItems.length - 1) {
    //             selectedTitles += ", ";
    //         }
    //     }

    //     this._selectedItems = selectedTitles;
    //     // const selectedItem = this.dataItems.getItem(args.index);
    //     if (selectedType === 1) {
    //         // this.routerExtensions.navigate(["/deatils"]);
    //         if(selectedTitles==="Properties")
    //         this.listViewData = this.subPropertiescat;
    //         if(selectedTitles==="Cars")
    //         this.listViewData = this.subCarcat;
    //         if(selectedTitles==="Bikes")
    //         this.listViewData = this.subBikecat;
    //         if(selectedTitles==="Mobiles")
    //         this.listViewData = this.subMobilescat;
    //         if(selectedTitles==="Electronics")
    //         this.listViewData = this.subElectronicscat;
    //         console.log("Item selected: " + (selectedTitles));
    //     }
    //     else {
    //         console.log("Item selected: " + (selectedTitles));
    //         this.routerExtensions.navigate(["/postad"]);
    //     }
    // }

    onBrandModelTap() {
            this.createModelView().then(result => {
                if (this.validate(result)) {
                    console.log(result);
                    this.onBrandselected(result);
                }
            }).catch(error => this.handleError(error)); 
    }
    onBrandselected(bandselected:any){
        this.createModelView2(bandselected).then(result => {
            if (this.validate(result)) {
                this.brandmodal = result.brand +' / '+  result.model
                this._selectedItems = result;
                console.log(result); 
            }
        }).catch(error => this.handleError(error));
    }

    private createModelView2(bandselected:any): Promise<any> {
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            context: bandselected,
            fullscreen: false
        };

        // showModal returns a promise with the received parameters from the modal page
        return this.modalService.showModal(ModalViewComponent, options);
    }

    private createModelView(): Promise<any> {
        // const today = new Date();
        const options: ModalDialogOptions = {
            viewContainerRef: this.vcRef,
            // context: this.bike.pin,
            fullscreen: false
        };

        // showModal returns a promise with the received parameters from the modal page
        return this.modalService.showModal(BrandViewComponent, options);
    }

    onNextTap(){
    let routeExtras: NavigationExtras = {
      queryParams: { "BrandAndModel": JSON.stringify(this._selectedItems) }
    }
    this.routerExtensions.navigate(["/postad"], routeExtras);
    }

    private validate(result: any) {
        return !!result;
    }

    private handleError(error: any) {
        alert("Please try again!");
        console.dir(error);
    }
}
