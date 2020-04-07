import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { SearchBar } from "tns-core-modules/ui/search-bar";
import { RouterExtensions } from "nativescript-angular/router";
import { ObservableArray } from "tns-core-modules/data/observable-array";
import { ListViewEventData, RadListView } from "nativescript-ui-listview"
import { Observable } from "rxjs";  
import { Categories } from "../models/categories.model";  
import { HttpClient, HttpHeaders } from "@angular/common/http";


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
    

    private categories;  
    constructor(private routerExtensions: RouterExtensions,private dashboardService:DashboardService,private http: HttpClient) {
        console.log("entred");
        // this.categories = this.dashboardService.GetAllCategories();  
        // console.log(this.categories);

        this.http.get<Categories[]>("http://192.168.0.4/APIBechoBaba/Api/Dashboard/GetAllCategories").subscribe((result) => {
            console.log("yyyy");
            this.categories = result;
            console.log(result);
        }, (error) => {
            console.log(error);
        });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
    onNavBtnTap() {
        this.routerExtensions.back();
    }


    public onItemSelected(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedTitles;
        let selectedType;
        for (let i = 0; i < selectedItems.length; i++) {
            selectedTitles = selectedItems[i] ? selectedItems[i].deatils : "";
            selectedType = selectedItems[i] ? selectedItems[i].cattype : "";
            if (i < selectedItems.length - 1) {
                selectedTitles += ", ";
            }
        }

        this._selectedItems = selectedTitles;
        // const selectedItem = this.dataItems.getItem(args.index);
        if (selectedType === 1) {
            // this.routerExtensions.navigate(["/deatils"]);
            if(selectedTitles==="Properties")
            this.listViewData = this.subPropertiescat;
            if(selectedTitles==="Cars")
            this.listViewData = this.subCarcat;
            if(selectedTitles==="Bikes")
            this.listViewData = this.subBikecat;
            if(selectedTitles==="Mobiles")
            this.listViewData = this.subMobilescat;
            if(selectedTitles==="Electronics")
            this.listViewData = this.subElectronicscat;
            console.log("Item selected: " + (selectedTitles));
        }
        else {
            console.log("Item selected: " + (selectedTitles));
            this.routerExtensions.navigate(["/postad"]);
        }
    }
}
