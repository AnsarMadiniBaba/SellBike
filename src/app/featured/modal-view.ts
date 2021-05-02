
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ModalDialogParams } from "nativescript-angular/modal-dialog";
import { RegisterUser } from "../models/user";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";
import { User } from "../models/user.model";
import { LoginService } from "../services/login.service";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivityIndicator } from "tns-core-modules/ui/activity-indicator";
import { ListViewEventData, RadListView } from "nativescript-ui-listview"
interface DataItem {
    details: string;
    issort: boolean;
}
@Component({
    moduleId: module.id,
    templateUrl: "./modal-view.html",
    styleUrls: ["./featured.component.scss"]
})
export class ModalViewComponent implements OnInit {
    processing = false;
    sortselecteddata: any;
    listViewData2: DataItem[] = [
        {
            details: "Lowest Price",
            issort: false
        },
        {
            details: "Highest Price",
            issort: false
        },
        // {
        //     details: "Latest Modal",
        //     issort: false
        // },
        // {
        //     details: "Recently Posted",
        //     issort: false
        // },
        // {
        //     details: "Nearest",
        //     issort: false
        // }
    ];
    constructor(private params: ModalDialogParams, private loginService: LoginService, private routerExtensions: RouterExtensions) {
       
       console.log(params.context);
        if (params.context.length > 0) {
            console.log(params.context);
            this.sortselecteddata = params.context[0];
            // listViewData2.filter(x => x.details === this.sortselecteddata.details);
            this.listViewData2.find(item => item.details == this.sortselecteddata.details).issort = true;
        }
    }

    // private validate(result: any) {
    //     return !!result;
    // }
    ngOnInit() {
    }
    public onItemSelected(args: ListViewEventData) {
        const listview = args.object as RadListView;
        const selectedItems = listview.getSelectedItems() as Array<DataItem>;
        let selectedcat;
        selectedcat = selectedItems[0] ? selectedItems[0].details : "";
        selectedItems[0].issort = true;
        this.params.closeCallback(selectedItems[0]);
    }
}
