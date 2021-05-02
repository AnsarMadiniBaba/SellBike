
import { Component, OnInit } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RouterExtensions } from "nativescript-angular/router";
import { ListViewEventData, RadListView } from "nativescript-ui-listview"
interface DataItem {
    id: number;
    brand: string;
}
@Component({
    moduleId: module.id,
    templateUrl: "./brand-view.html",
    styleUrls: ["./categories.component.scss"]
})
export class BrandViewComponent implements OnInit { 
    sortselecteddata: any;
    
    brandList : DataItem[]=[
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
    constructor(private params: ModalDialogParams, private routerExtensions: RouterExtensions) {
       
        console.log(params.context);
        if (params.context.length > 0) {
            console.log(params.context);
            this.sortselecteddata = params.context[0];
            // listViewData2.filter(x => x.details === this.sortselecteddata.details);
           // this.listViewData2.find(item => item.details == this.sortselecteddata.details).issort = true;
        }
    }
    
    public onItemSelected(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedcat;
        selectedcat = selectedItems[0] ? selectedItems[0].brand : "";
        this.params.closeCallback(selectedItems);
    }
 
   
    ngOnInit() {
        
    } 

    onCloseTap(){
    this.params.closeCallback();
    }
    applyFilterTap(){
        // this.params.closeCallback(this.bikefilter);
    }
}
